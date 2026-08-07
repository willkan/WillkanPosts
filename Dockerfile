FROM nginx:1.27-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html robots.txt /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY shelf-life/ /usr/share/nginx/html/shelf-life/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --output-document=/dev/null http://127.0.0.1/healthz || exit 1
