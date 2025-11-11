# Hash Face Tracking Documentation

## How to contribute

> [!IMPORTANT]  
> Before submitting contributions, please take knowledge of the file structure bellow.

### Adding a new translation

Translated files for each local are stored in `/docs/_i18n/<locale>` where `<locale>` is the [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) (two (2) letter code) of the language you are translating for.

> [!IMPORTANT]  
> All `*.md` files in `/docs/` (excluding files in `/docs/_i18n/`) must have a translated version in there respective localized directory.
>
> The localized directory must have the exact same structure as the one in `/docs/`

> [!IMPORTANT]  
> All **links** that leads to other pages of this project must be prefixed with `/<locale>` where `<locale>` is the [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) (two (2) letter code) of the language you are translating for.
> 
> **Images** should not be prefixed and always start with `/img` 

You must also provide a translated version of the navigation. Add a copy of the `en` locale in `/.vitepress/config.mts` and edit the following:
- `label` : The displayed name of the locale
- `lang` : The [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) (two (2) letter code) of the language you are translating for
- `themeConfig` : For all items in both `nav` and `sidebar`, translate the `name` and update the `link` with the proper `/<locale>` prefix 

## File structure

Files in this project are organized as follows:

### `/.github/workflows/deploy.yml`

This is where the deployment automation is configured.
It includes all the build and deploy steps required to build and deploy the documentation to github pages automatically.

### `/.vitepress/cache/`

Ignored from git. Contains the build cache when working in development mode.

### `/.vitepress/dist/`

Ignored from git. Contains the production files once the build has finished.

### `/.vitepress/theme`

Contains the theme config and CSS overrides.

### `/.vitepress/config.mts`

Contains the vitepress configuration. 
This includes some theme configurations like the navbar and sidebar.
When adding new translations, you should also update this file in order to provide translations for the navigation part of the site.

### `/docs/`

Contains the documentation source files in markdown format.
You should refer to all files in this directory when working on a translation.

### `/docs/_i18n/<locale>/`

For each locale, contains the same hierarchy of files and directories as `/docs/*`. You should keep these files up to date when working on a translation.

### `/node_modules/`

Ignored from git. Contain node.js packages. Do **not** edit. Do **not** commit.

### `/.gitignore`

Contains the list of ignored files and directories.

### `/LICENCE`

Contains this project licence. Note that the licence only applies to this repository and not to the whole Hash Face Tracking project.

### `/package-lock.json`

Contains the packages versions of all dependencies. Do **not** edit. **Do** commit.

### `/package.json`

Contains the project configuration. This include the list of dependencies and build scripts.

### `/README.md`

You are here *