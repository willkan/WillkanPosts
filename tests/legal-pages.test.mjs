import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const terms = await readFile(new URL("../terms/index.html", import.meta.url), "utf8");
const privacy = await readFile(new URL("../privacy/index.html", import.meta.url), "utf8");
const home = await readFile(new URL("../index.html", import.meta.url), "utf8");
const dockerfile = await readFile(new URL("../Dockerfile", import.meta.url), "utf8");

test("site-level legal pages identify the operator and monitored contact", () => {
  for (const page of [terms, privacy]) {
    assert.match(page, /Huikang Wang/);
    assert.match(page, /313238485@qq\.com/);
  }
});

test("terms disclose the Waffo recurring billing contract", () => {
  assert.match(terms, /Waffo Pancake acts as Merchant of Record/);
  assert.match(terms, /expressly authorize/);
  assert.match(terms, /renews automatically/);
  assert.match(terms, /customer portal/);
  assert.match(terms, /seven days of\s+the initial subscription charge/);
  assert.match(terms, /\.\.\/privacy\//);
});

test("privacy policy describes payment data and concrete retention", () => {
  assert.match(privacy, /do not receive or store full card numbers/i);
  assert.match(privacy, /Waffo Pancake/);
  assert.match(privacy, /up to seven years/);
  assert.match(privacy, /within 30 calendar days/);
  assert.match(privacy, /do not sell personal information/i);
});

test("legal pages contain no unfilled template placeholders", () => {
  for (const page of [terms, privacy]) {
    assert.doesNotMatch(page, /\[(?:LEGAL NAME|DATE|placeholder|X|support@|privacy@)/i);
  }
});

test("home and production image publish both legal URLs", () => {
  assert.match(home, /\.\/terms\//);
  assert.match(home, /\.\/privacy\//);
  assert.match(dockerfile, /COPY terms\/ \/usr\/share\/nginx\/html\/terms\//);
  assert.match(dockerfile, /COPY privacy\/ \/usr\/share\/nginx\/html\/privacy\//);
});
