# WillkanPosts

Static portfolio and public support site for howork products. The homepage
summarizes released, validating, and in-development products without presenting
unreleased work as purchasable. The same plain HTML/CSS source is published
through GitHub Pages and the production container at `products.holic.work`.

## URLs

- Home: https://willkan.github.io/WillkanPosts/
- 老纳 support: https://willkan.github.io/WillkanPosts/shelf-life/support/
- 老纳 privacy policy: https://willkan.github.io/WillkanPosts/shelf-life/privacy/
- Production: https://products.holic.work/
- Site terms: https://products.holic.work/terms/
- Site privacy policy: https://products.holic.work/privacy/
- QuoteToReturn preview: https://products.holic.work/quote-to-return/
- 花哪 product page: https://products.holic.work/huana/
- 花哪 support: https://products.holic.work/huana/support/
- 花哪 privacy policy: https://products.holic.work/huana/privacy/

The site is intentionally plain HTML/CSS so GitHub Pages can serve it from the repository root without a build step.

The homepage product inventory and status wording are governed by
[`docs/HOMEPAGE.md`](docs/HOMEPAGE.md).

Run the public-page contract checks with `npm test`.

## Production deployment

Pushes to `master` build an immutable `linux/amd64` image from
`nginx:1.27-alpine`, push it to Aliyun Container Registry, and deploy that exact
commit image to the ECS host.

The site container binds only to `127.0.0.1:18081`. The shared public edge proxy
owns ports 80 and 443, redirects HTTP to HTTPS, and terminates TLS for
`products.holic.work` before proxying to the site container.
