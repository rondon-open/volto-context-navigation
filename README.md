# Volto Context Navigation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Volto Compatibility](https://img.shields.io/badge/Volto-%3E%3D18.0.0-blue)](https://github.com/plone/volto)

A Volto add-on that provides a contextual navigation component for your Volto/Plone projects.

![Context Navigation Block](preview.png "Context Navigation Block inside columns block (@eeacms/volto-columns-block) 30/70.")

## Features

- Contextual navigation component for Volto
- Easy integration with existing Volto projects
- Customizable to fit your project's needs
- Flexible navigation parameters
- Optional context navigation block
- Extensive configuration options for navigation display
- **Works out-of-the-box** with default configurations for common content types

## Installation

1) Add the package to your Volto project:

```bash
yarn add @rondon-open/volto-context-navigation
```
2) Add the add-on to your package.json:

```json
"addons": [
  "@rondon-open/volto-context-navigation"
],
```

## Default Configuration

The add-on comes with sensible defaults that work immediately after installation:

- **Enabled for these content types**:
  - News Item
  - File
  - Image
  - Event

- **Enabled for layout view**:
  - document_view

No additional configuration is needed for basic usage with these content types and views.

## Configuration

### Customizing Content Types and Views

```javascript
// To modify which content types show the navigation (default shown below)
config.settings.contextNavigation.contentTypesViews = [
  'News Item',
  'File',
  'Image',
  'Event',
];

// To modify which layout views show the navigation (default shown below)
config.settings.contextNavigation.layoutViews = ['document_view'];
```

## Navigation Block Configuration

```javascript
// Disable contextNavigationBlock (set to false to enable)
// Default: false
config.blocks.blocksConfig.contextNavigationBlock.restricted = true;

// When enabled (true), the block will use the global configuration defined in
// config.settings.contextNavigation.params
// When disabled (false), the block can be configured individually per instance
// Default: true
config.blocks.blocksConfig.contextNavigationBlock.useGlobalConfig = true;
```

### Important Notes about Global Configuration:

1. When `useGlobalConfig` is set to `true` (default):
   - The block will inherit all settings from `config.settings.contextNavigation.params`
   - Individual block instances cannot override these settings
   - Changes to the global configuration affect all blocks

2. When `useGlobalConfig` is set to `false`:
   - Each block instance can be configured independently
   - The global configuration in `contextNavigation.params` is ignored for blocks
   - Block settings must be configured individually in the editor

3. The global configuration reference includes all parameters defined in:
   ```javascript
   config.settings.contextNavigation.params = {
     name: 'Navigation',
     includeTop: true,
     showHidden: false,
     currentFolderOnly: false,
     root_path: null,
     topLevel: 0,
     bottomLevel: 999,
     no_icons: false,
     no_thumbs: false,
     thumb_scale: 'thumb'
   };
   ```

This design allows for either consistent site-wide navigation settings (using global config) or flexible per-block customization when needed.

### Advanced Navigation Parameters

```javascript
config.settings.contextNavigation.params = {
  // Basic display options
  name: 'Navigation',          // Title of the navigation tree
  includeTop: true,            // Include top-level nodes
  showHidden: false,           // Show hidden items
  currentFolderOnly: false,    // Only show current folder contents  
  // Path configuration
  root_path: null,             // Root path (use "frontend path" for router-derived path)  
  // Navigation depth control
  topLevel: 0,                 // Start level (0 = root)
  bottomLevel: 999,            // Navigation tree depth  
  // Media display options
  no_icons: false,             // Suppress icons
  no_thumbs: false,            // Suppress thumbnails
  thumb_scale: 'thumb',        // Override Thumbnail scale (e.g., 'thumb', 'mini', 'preview')
};
```

## 🛠️ Customizing Styles

You can easily customize the appearance of the context navigation by overriding the default SCSS styles. Here's how:

### Default Styles Location

The original style variables and SCSS are located at:

```
node_modules/@rondon-open/volto-context-navigation/src/theme/
```
### 1. **Create a custom SCSS file in your project**

Use the following command to copy the base SCSS file into your own theme folder:

```bash
mkdir -p src/theme
cp node_modules/@rondon-open/volto-context-navigation/src/theme/_variables.scss src/theme/context-navigation-custom.scss
```

### 2. **Edit your custom SCSS file**

Modify the values you want to override. For example:

```scss
$context-navigation-sidebar-width: 300px;
$context-navigation-content-gap: 2rem !default;
$context-navigation-content-margin: 2rem 0 !default;

$context-navigation-bg: #FFFFFF;
$context-navigation-border: #e5e5e5 !default;
$context-navigation-header-color: #333 !default;
$context-navigation-header-border: #ddd !default;
$context-navigation-item-active-bg: #e0e0e0 !default;
$context-navigation-link-hover-bg: #e9e9e9 !default;

$context-navigation-border-radius: 4px !default;
$context-navigation-item-spacing: 0.5rem !default;
$context-navigation-padding: 1rem !default;

$context-navigation-breakpoint-mobile: 768px !default;

:root {
  --context-navigation-sidebar-width: #{$context-navigation-sidebar-width};
  --context-navigation-content-gap: #{$context-navigation-content-gap};
  --context-navigation-content-margin: #{$context-navigation-content-margin};
  --context-navigation-bg: #{$context-navigation-bg};
  --context-navigation-border: #{$context-navigation-border};
  --context-navigation-header-color: #{$context-navigation-header-color};
  --context-navigation-header-border: #{$context-navigation-header-border};
  --context-navigation-border-radius: #{$context-navigation-border-radius};
  --context-navigation-item-spacing: #{$context-navigation-item-spacing};
  --context-navigation-padding: #{$context-navigation-padding};
  --context-navigation-item-active-bg: #{$context-navigation-item-active-bg};
  --context-navigation-link-hover-bg: #{$context-navigation-link-hover-bg};
  --context-navigation-breakpoint-mobile: #{$context-navigation-breakpoint-mobile};
}
```

---

## Applying Your Custom Styles

Add this import to either your `src/config.js` or `src/index.js` file:

```javascript
import './theme/context-navigation-custom.scss';
```

## Notes

- The addon uses CSS Custom Properties (`--context-navigation-*`) for use in React components. Overriding them inside `:root` ensures your values apply globally.
- You can completely replace the styling or just modify specific parts


## Example Use Case

Change the sidebar width, background color, and add custom box-shadow to the navigation component:

```scss
$context-navigation-sidebar-width: 300px;
$context-navigation-bg: #FFFFFF;

root {
  --context-navigation-sidebar-width: #{$context-navigation-sidebar-width}; 
  --context-navigation-bg: #{$context-navigation-bg}; 
}

.context-navigation {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

## Compatibility

- Volto 18.x+
- Node.js 16.x+

## Development

```bash
git clone https://github.com/rondon-open/volto-context-navigation.git
cd volto-context-navigation
yarn
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT - See [LICENSE](LICENSE) for details.

## Support

Report issues at [GitHub Issues](https://github.com/rondon-open/volto-context-navigation/issues)

---

Maintained by [Rondon Open](https://github.com/rondon-open)