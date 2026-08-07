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

test("homepage presents the complete product portfolio with honest statuses", () => {
  assert.match(home, /老纳/);
  assert.match(home, /QuoteToReturn/);
  assert.match(home, /清简账本/);
  assert.match(home, /支持页面已上线/);
  assert.match(home, /尚未开放购买/);
  assert.match(home, /尚未开放购买/);
  assert.match(home, /开发中 · 尚未发布/);
});

test("homepage exposes real destinations without placeholder product links", () => {
  assert.match(home, /\.\/shelf-life\/support\//);
  assert.match(home, /\.\/shelf-life\/privacy\//);
  assert.doesNotMatch(home, /href=["']#["']/);
});

test("public pages use the howork products brand without internal principles", () => {
  for (const page of [home, terms, privacy]) {
    assert.match(page, /howork products/);
    assert.doesNotMatch(page, /Willkan Products/);
  }
  assert.doesNotMatch(home, /产品原则/);
  assert.doesNotMatch(home, /每款产品先解决一条真实工作流/);
});

test("homepage copy contains no internal architecture or validation jargon", () => {
  assert.doesNotMatch(home, /业务基线|配置草稿|结构化建议|本地账本为准/);
  assert.doesNotMatch(home, /单一维护内核|分叉代码|Sandbox|订阅验证/);
  assert.doesNotMatch(terms, /product kernels/);
});

test("homepage hero does not narrate the catalog or explain the page", () => {
  assert.doesNotMatch(home, /我们正在做三款产品|下面会写清楚|每张卡片都标明/);
  assert.match(home, /howork products 为个人和小团队开发简单、可靠的软件/);
});
