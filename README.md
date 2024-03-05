# cra-template-mind-decay-ts

My template for [Create React App](https://create-react-app.dev/docs/custom-templates/).

```
npx create-react-app --template mind-decay-ts
```

## What it adds on top of default CRA:

- typescript
- absolute imports
- modern css reset
- styled-components
- /style folder with common global styles, typography styles, and utils (screen sizes, fonts list)
- /components for components that are shared across the whole app
- /hooks for shared hooks
- /context for React contexts and it's corresponding providers
- /utils for shared utility and helper functions
- /assets for images, fonts, files
- /types for shared types and ts modules
- /layouts for shared layouts and their corresponding components
- /pages for pages composed of shared components and layouts
- prettier, eslint, editorconfig
- deletes useless CRA files
