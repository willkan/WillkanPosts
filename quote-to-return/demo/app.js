const variants = {
  A: { name: "Operations home" },
  B: { name: "Rental flow board" },
  C: { name: "Storefront cockpit" },
};

const bookings = [
  { month: "Aug", day: "08", name: "Hartwell wedding", detail: "Blush arch + aisle florals · Delivery", total: "$1,480", status: "Preparing" },
  { month: "Aug", day: "10", name: "Mina engagement", detail: "Garden collection · Customer pickup", total: "$720", status: "Confirmed" },
  { month: "Aug", day: "12", name: "Cedar & Co. launch", detail: "Neutral plinth set · Delivery", total: "$940", status: "Deposit due" },
];

function trackIntent() {}

function agentDrawer() {
  return `
    <div class="agent-backdrop" data-close-agent></div>
    <aside class="agent-drawer" aria-label="Customize with agent">
      <div class="agent-head">
        <div class="agent-title"><span class="brand-mark">✦</span><span>Customize this product</span></div>
        <button class="icon-btn" data-close-agent aria-label="Close">×</button>
      </div>
      <div class="agent-body">
        <div class="agent-message">Your current setup stays unchanged while you prepare a new version. Describe what should work differently, or upload a price list.</div>
        <div class="agent-message user">For shipped floral orders, block two days before the event and three days after. Pickup orders only need one day after.</div>
        <div class="agent-scope">
          <div class="eyebrow">Proposed changes</div>
          <ul>
            <li>Add fulfillment-aware availability buffers</li>
            <li>Update conflict explanations in admin</li>
            <li>Show return-by dates in customer pages</li>
            <li>Run 6 overlap and late-return scenarios</li>
          </ul>
          <div class="risk"><strong>Needs your review:</strong> Existing confirmed reservations keep their current buffer rule. Applying the new rule retroactively could create 2 conflicts, so I will not do that automatically.</div>
          <div class="boundary"><strong>Not supported:</strong> I can adjust the rental settings and integrations available in QuoteToReturn. I will flag requests I cannot complete instead of guessing.</div>
          <div class="credit"><span>Estimated customization</span><strong>8 of 120 credits</strong></div>
        </div>
      </div>
      <div class="agent-compose">
        <textarea aria-label="Describe a change" placeholder="Describe how your business should work…"></textarea>
        <div class="actions"><button class="btn ghost">Upload price list</button><button class="btn primary" data-generate>Generate draft</button></div>
      </div>
    </aside>`;
}

function variantA() {
  return `
    <main class="a-shell">
      <aside class="a-sidebar">
        <div class="brand"><span class="brand-mark">Q2R</span> QuoteToReturn</div>
        <div class="a-business"><strong>Evermore Florals</strong><small>Silk floral rentals · Published</small></div>
        <nav class="a-nav">
          <button class="active">⌂ Overview</button><button>◫ Reservations</button><button>◇ Inventory</button><button>◌ Customers</button><button>▤ Documents</button><button>⚙ Settings</button>
        </nav>
        <div class="a-customize"><div class="eyebrow">Ready to use</div><p>Need different pricing, fields, or workflows? Ask the assistant to prepare a preview.</p><button class="btn dark" data-open-agent>✦ Customize product</button></div>
      </aside>
      <section class="a-main">
        <header class="a-topbar"><div><div class="eyebrow">Thursday · August 6</div><h1>Good morning, Avery.</h1></div><div class="actions"><span class="pill live"><span class="dot"></span>Published v1.4</span><button class="btn">View storefront</button><button class="btn primary">+ New reservation</button></div></header>
        <section class="metric-grid">
          <div class="metric card"><span class="muted">August booked</span><strong class="money">$12,840</strong><div class="trend">↑ 18% from July</div></div>
          <div class="metric card"><span class="muted">Upcoming handoffs</span><strong>7</strong><div class="trend">3 need preparation</div></div>
          <div class="metric card"><span class="muted">Inventory conflicts</span><strong>0</strong><div class="trend">All bookings covered</div></div>
          <div class="metric card"><span class="muted">Deposits outstanding</span><strong class="money">$1,160</strong><div class="trend">2 reminders scheduled</div></div>
        </section>
        <section class="a-grid">
          <div class="card"><div class="panel-head"><h2>Next reservations</h2><button class="btn ghost">See calendar →</button></div><div class="booking-list">${bookings.map(b => `<div class="booking-row"><div class="date-box"><span>${b.month}</span><strong>${b.day}</strong></div><div><div class="booking-title">${b.name}</div><div class="booking-sub">${b.detail}</div></div><strong class="money">${b.total}</strong><span class="pill">${b.status}</span></div>`).join("")}</div></div>
          <aside class="side-stack">
            <div class="inventory-alert card"><div class="eyebrow">Heads up</div><h3>Blush arch is tight next week</h3><p>Two bookings leave only a 19-hour cleaning buffer. Your published minimum is 18 hours.</p><div class="alert-line"><span>Availability rule</span><button class="btn ghost" data-open-agent>Adjust with agent</button></div></div>
            <div class="draft-card card"><span class="pill live"><span class="dot"></span>No pending changes</span><h3>Your workspace is ready to use.</h3><p>Keep working with the current setup. Optional changes stay in preview until you approve them.</p></div>
          </aside>
        </section>
      </section>
    </main>`;
}

const flow = [
  ["Inquiry", [{n:"Cedar & Co.",d:"Neutral plinths · Aug 12",v:"$940"}]],
  ["Quote", [{n:"Studio Margo",d:"Editorial floral set · Aug 19",v:"$1,280"},{n:"Briar House",d:"Ceremony arch · Aug 23",v:"$1,640"}]],
  ["Confirmed", [{n:"Mina engagement",d:"Pickup · Aug 10",v:"$720"}]],
  ["Preparing", [{n:"Hartwell wedding",d:"Delivery · Aug 8",v:"$1,480"}]],
  ["Out", [{n:"Orchid Hotel",d:"Return due today",v:"$560"}]],
  ["Returned", [{n:"Bloom dinner",d:"Inspection complete",v:"$890"}]],
];

function variantB() {
  return `
    <main class="b-shell">
      <header class="b-header"><div class="brand"><span class="brand-mark">Q2R</span> QuoteToReturn <span class="pill live"><span class="dot"></span>Evermore live</span></div><div class="actions"><button class="btn">Catalog</button><button class="btn">Calendar</button><button class="btn primary">+ New rental</button></div></header>
      <section class="b-stage">
        <div class="b-work"><div class="b-welcome"><div><div class="eyebrow">Today’s operating flow</div><h1>Move every rental cleanly from inquiry to return.</h1></div><button class="btn" data-open-agent>✦ Change how this flow works</button></div>
          <div class="b-flow">${flow.map(([title,cards]) => `<section class="flow-col"><div class="flow-head"><span>${title}</span><span class="flow-count">${cards.length}</span></div>${cards.map(c=>`<article class="job-card"><span class="tag">Silk floral rental</span><strong>${c.n}</strong><p>${c.d}</p><div class="job-foot"><span>${c.v}</span><span>Open →</span></div></article>`).join("")}</section>`).join("")}</div>
        </div>
        <aside class="b-side">
          <div class="b-side-card b-agent"><div class="eyebrow">Need a different setup?</div><h2>Your workspace is ready.</h2><p>Use the assistant when you need different pricing, handoff steps, documents, fields, or branding.</p><button class="btn" data-open-agent>Prepare changes</button></div>
          <div class="b-side-card"><h2>Availability guard</h2><p>No overbookings. Package components and cleaning buffers are covered through August 16.</p><div class="scenario">Last simulated · 6 scenarios passed</div></div>
          <div class="b-side-card"><h2>Published configuration</h2><p>Version 1.4 · Silk florals setup with your branding and pickup windows.</p><div class="scenario">Earlier version available · No pending changes</div></div>
        </aside>
      </section>
    </main>`;
}

function variantC() {
  return `
    <main class="c-shell">
      <header class="c-header"><div class="brand"><span class="brand-mark">Q2R</span> QuoteToReturn</div><div class="c-tabs"><button>Operate</button><button class="active">Storefront</button><button>Documents</button></div><div class="actions"><span class="pill live"><span class="dot"></span>Published</span><button class="btn primary">Open admin</button></div></header>
      <section class="c-stage">
        <aside class="c-control"><div class="eyebrow">Evermore Florals</div><h1>Your rental workspace is ready.</h1><p>These essentials are already set up. You can change them manually or ask the assistant later.</p>
          <div class="setup-list">
            <div class="setup-item"><span class="setup-num">1</span><div><strong>Catalog & availability</strong><small>24 products · buffers active</small></div><span class="ok">✓</span></div>
            <div class="setup-item"><span class="setup-num">2</span><div><strong>Quote & deposit flow</strong><small>30% deposit · quote first</small></div><span class="ok">✓</span></div>
            <div class="setup-item"><span class="setup-num">3</span><div><strong>Pickup & return</strong><small>3 pickup windows · condition photos</small></div><span class="ok">✓</span></div>
            <div class="setup-item"><span class="setup-num">4</span><div><strong>Customer documents</strong><small>Quote, agreement, return receipt</small></div><span class="ok">✓</span></div>
          </div>
          <div class="c-agent-callout"><div class="eyebrow">Want it to work differently?</div><p>Describe the change. The agent creates a preview draft and runs safety scenarios. Nothing goes live until you approve it.</p><button class="btn" data-open-agent>✦ Customize with agent</button></div>
        </aside>
        <section class="c-preview"><div class="browser"><div class="browser-bar"><span class="browser-dot"></span><span class="browser-dot"></span><span class="browser-dot"></span><div class="address">shop.evermoreflorals.com</div></div><div class="store-head"><div class="store-logo">Evermore Florals</div><div class="store-nav"><span>Collections</span><span>How it works</span><span>Availability</span><span>My quote</span></div></div><div class="store-hero"><div class="hero-copy"><div class="eyebrow">Silk florals for weddings and events</div><h2>Statement flowers. Borrowed, loved, returned.</h2><p>Rent a complete floral installation without buying flowers for a single day.</p><button class="btn dark">Browse collections</button></div><div class="hero-art"><span class="flower f1"></span><span class="flower f2"></span></div></div><div class="store-products"><h3>Popular collections</h3><div class="product-grid"><div class="product"><div class="product-img"></div><div class="product-info"><strong>Blush ceremony arch</strong><span>From $420 / event</span></div></div><div class="product"><div class="product-img"></div><div class="product-info"><strong>Garden aisle set</strong><span>From $280 / event</span></div></div><div class="product"><div class="product-img"></div><div class="product-info"><strong>Neutral plinth trio</strong><span>From $190 / event</span></div></div></div></div></div></section>
      </section>
    </main>`;
}

function currentVariant() {
  const key = new URLSearchParams(location.search).get("variant")?.toUpperCase();
  return variants[key] ? key : "A";
}

function navigateVariant(direction) {
  const keys = Object.keys(variants);
  const current = keys.indexOf(currentVariant());
  const next = keys[(current + direction + keys.length) % keys.length];
  const url = new URL(location.href);
  url.searchParams.set("variant", next);
  history.replaceState({}, "", url);
  render();
}

function bind() {
  document.querySelectorAll("[data-open-agent]").forEach(button => button.addEventListener("click", () => {
    trackIntent("agent-open");
    document.body.insertAdjacentHTML("beforeend", agentDrawer());
    bindAgent();
  }));
  document.querySelector("[data-prev]")?.addEventListener("click", () => navigateVariant(-1));
  document.querySelector("[data-next]")?.addEventListener("click", () => navigateVariant(1));
}

function bindAgent() {
  document.querySelectorAll("[data-close-agent]").forEach(el => el.addEventListener("click", () => {
    document.querySelector(".agent-backdrop")?.remove();
    document.querySelector(".agent-drawer")?.remove();
  }));
  document.querySelector("[data-generate]")?.addEventListener("click", event => {
    trackIntent("draft-generated");
    event.currentTarget.textContent = "Draft preview ready";
    event.currentTarget.disabled = true;
    document.querySelector(".agent-body")?.insertAdjacentHTML("beforeend", `
      <div class="draft-review">
        <div class="eyebrow">Draft checked · v1.5</div>
        <h3>Ready for your decision</h3>
        <p><strong>Published v1.4 is unchanged.</strong> Six scenarios passed; two existing reservations remain on their original rule version.</p>
        <div class="scenario-list"><span>✓ Pickup overlap</span><span>✓ Shipped order buffer</span><span>✓ Late return conflict</span></div>
        <div class="draft-actions"><button class="btn ghost" data-discard-draft>Discard</button><button class="btn" data-preview-draft>Preview</button><button class="btn primary" data-review-publish>Review & publish</button></div>
      </div>`);
    bindDraftActions();
  });
}

function bindDraftActions() {
  document.querySelector("[data-preview-draft]")?.addEventListener("click", () => {
    document.querySelector(".agent-body")?.insertAdjacentHTML("beforeend", `<div class="agent-message"><strong>Preview mode opened.</strong><br>The storefront, return dates, and conflict explanations are rendered from draft v1.5. Published v1.4 remains live.</div>`);
  });
  document.querySelector("[data-discard-draft]")?.addEventListener("click", () => {
    document.querySelector(".draft-review")?.remove();
    document.querySelector(".agent-body")?.insertAdjacentHTML("beforeend", `<div class="agent-message"><strong>Draft discarded.</strong><br>No credits beyond the displayed generation cost and no changes to published v1.4.</div>`);
  });
  document.querySelector("[data-review-publish]")?.addEventListener("click", () => {
    document.querySelector(".draft-review")?.insertAdjacentHTML("beforeend", `
      <div class="publish-approval">
        <strong>Final approval required</strong>
        <p>Publish v1.5 for new reservations? Existing confirmed reservations keep v1.4 rules. You can roll back to v1.4 after publishing.</p>
        <div class="actions"><button class="btn ghost" data-cancel-publish>Cancel</button><button class="btn primary" data-approve-publish>Approve & publish</button></div>
      </div>`);
    document.querySelector("[data-review-publish]").disabled = true;
    document.querySelector("[data-cancel-publish]")?.addEventListener("click", () => {
      document.querySelector(".publish-approval")?.remove();
      document.querySelector("[data-review-publish]").disabled = false;
    });
    document.querySelector("[data-approve-publish]")?.addEventListener("click", () => {
      document.querySelector(".draft-review")?.remove();
      document.querySelector(".agent-body")?.insertAdjacentHTML("beforeend", `<div class="agent-message"><strong>Demo complete.</strong><br>The finished product would publish v1.5 here and keep v1.4 available. This demo did not save any changes.</div>`);
    });
  });
}

function render() {
  const key = currentVariant();
  const views = { A: variantA, B: variantB, C: variantC };
  document.querySelector("#app").innerHTML = `${views[key]()}<div class="prototype-note">Interactive demo · sample data only · changes are not saved</div><div class="switcher"><button data-prev aria-label="Previous variant">←</button><div class="switcher-label"><strong>${key}</strong> · ${variants[key].name}</div><button data-next aria-label="Next variant">→</button></div>`;
  bind();
}

addEventListener("keydown", event => {
  const target = event.target;
  if (target.matches("input, textarea, [contenteditable='true']")) return;
  if (event.key === "ArrowLeft") navigateVariant(-1);
  if (event.key === "ArrowRight") navigateVariant(1);
  if (event.key === "Escape") document.querySelector("[data-close-agent]")?.click();
});

addEventListener("popstate", render);
render();
