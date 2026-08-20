import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const home = await readFile(new URL("../index.html", import.meta.url), "utf8");
const product = await readFile(new URL("../huana/index.html", import.meta.url), "utf8");
const support = await readFile(new URL("../huana/support/index.html", import.meta.url), "utf8");
const privacy = await readFile(new URL("../huana/privacy/index.html", import.meta.url), "utf8");
const dockerfile = await readFile(new URL("../Dockerfile", import.meta.url), "utf8");
const workflow = await readFile(new URL("../.github/workflows/deploy.yml", import.meta.url), "utf8");

test("homepage and product page use the official 花哪 name", () => {
  assert.match(home, /花哪/);
  assert.match(home, /\.\/huana\//);
  assert.doesNotMatch(home, /清简账本/);
  assert.match(product, /<h1>花哪<\/h1>/);
  assert.doesNotMatch(product, /清简账本/);
});

test("product page exposes verified iOS and Android destinations", () => {
  assert.match(product, /https:\/\/apps\.apple\.com\/[^"']+\/id\d+/);
  assert.match(product, /https:\/\/products\.holic\.work\/huana\/download\/huana-1\.0\.0\.apk/);
  assert.match(product, /https:\/\/github\.com\/willkan\/ho-bookkeeping\/releases\/download\/v1\.0\.0\/huana-1\.0\.0\.apk/);
  assert.match(product, /SHA-256/);
  assert.doesNotMatch(product, /PLACEHOLDER|example\.com|ghproxy|mirror\.ghproxy/i);
});

test("support and privacy pages disclose real contact and data boundaries", () => {
  for (const page of [support, privacy]) {
    assert.match(page, /313238485@qq\.com/);
    assert.match(page, /花哪/);
  }
  assert.match(privacy, /账本.*本机/s);
  assert.match(privacy, /设备端语音/);
  assert.match(privacy, /自备密钥|BYOK/);
  assert.match(privacy, /托管 AI 内测/);
  assert.match(privacy, /不包含广告|没有广告/);
});

test("production image publishes pages and checksum-verified APK mirror", () => {
  assert.match(dockerfile, /COPY huana\/ \/usr\/share\/nginx\/html\/huana\//);
  assert.match(dockerfile, /COPY \.release\/ \/usr\/share\/nginx\/html\/huana\/download\//);
  assert.match(workflow, /huana-1\.0\.0\.apk/);
  assert.match(workflow, /sha256sum --check/);
});

