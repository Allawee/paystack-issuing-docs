# Paystack Issuing Docs

Documentation for the Paystack Issuing platform, powered by [Scalar Docs](https://scalar.com/products/docs/getting-started).

## Project Structure

```
.
├── docs/
│   ├── index.mdx
│   ├── getting-started.mdx
│   ├── dashboard.mdx
│   ├── sandbox.mdx
│   └── guides/
│       ├── pagination-and-filtering.mdx
│       ├── card-authorization-webhooks.mdx
│       └── guaranteed-request-processing.mdx
└── scalar.config.json
```

Content lives in `docs/` as Markdown/MDX files. Navigation and site configuration are defined in `scalar.config.json`. The API reference is auto-generated from the live OpenAPI spec at `https://api.allawee.com/openapi.json`.

## Deployment

The site is published to Scalar Docs on every push to `main` via GitHub Actions. The workflow uses the Scalar CLI and requires a `SCALAR_API_TOKEN` secret set in the repository settings.

To publish manually:

```bash
npx @scalar/cli@latest project publish --token <your-token>
```

## Adding content

- **New page** — create a `.mdx` file in `docs/` and add a `"type": "page"` route entry in `scalar.config.json`
- **New guide** — create a `.mdx` file in `docs/guides/` and add it under the `"/guides"` group in `scalar.config.json`
- **API reference** — automatically sourced from `https://api.allawee.com/openapi.json`, no manual changes needed
