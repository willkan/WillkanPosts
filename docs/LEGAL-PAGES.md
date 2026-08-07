# Site-level legal pages contract

Status: active

The public site at `https://products.holic.work` hosts product pages for an
individual developer. Store-level payment review uses two stable, public URLs:

- `/terms/` — terms covering digital products and recurring SaaS purchases;
- `/privacy/` — privacy disclosures covering the website, product accounts,
  support, and Waffo Pancake payment metadata.

Acceptance cases:

1. Both pages load without authentication and contain no template placeholders.
2. The terms identify the operator, describe Waffo Pancake as Merchant of
   Record, disclose recurring authorization, cancellation, and refunds, and
   link to the privacy policy.
3. The privacy policy identifies the operator, lists actual data categories,
   names Waffo Pancake, states that card data is not stored by the operator,
   gives concrete retention periods, and explains user rights.
4. The same monitored support address appears on the website and both pages.
5. Product-specific disclosures may be stricter, but may not contradict these
   site-level pages.
