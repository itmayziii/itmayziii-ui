# itmayziii-ui
SSG frontend for [tommymay.dev][tommymay-dev] powered by [Astro.][astro]

## Contributing

### Local Setup
1. You will need to be running the related [API][itmayziii-api] to be able to fetch data from the headless CMS.

2. Setup environment variables by copying `.env.example` -> `.env` and filling out the missing environment variables.
    ```shell
    cp .env.example .env
    ```
   
3. Run `npm start` to start the [astro dev server][astro-dev] with hot reloading.


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

[tommymay-dev]: https://tommymay.dev
[itmayziii-api]: https://github.com/itmayziii/itmayziii-api
[astro]: https://astro.build/
[astro-dev]: https://docs.astro.build/en/reference/cli-reference/#astro-dev
