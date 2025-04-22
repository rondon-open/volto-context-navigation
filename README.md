# Volto Context Navigation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Volto Compatibility](https://img.shields.io/badge/Volto-%3E%3D18.0.0-blue)](https://github.com/plone/volto)

A Volto add-on that provides a contextual navigation component for your Volto/Plone projects.

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

## Customizing Styles

You can easily customize the appearance of the context navigation by overriding the default SCSS styles. Here's how:

### 1. Copy the stylesheet to your theme

```bash
mkdir -p src/theme
cp node_modules/@rondon-open/volto-context-navigation/src/theme/contextNavigation.scss src/theme/
```

### 2. Modify the copied stylesheet

Edit the file at `src/theme/contextNavigation.scss` to customize the appearance. The file contains all the default styles that you can modify.

### 3. Import the stylesheet

Add this import to either your `src/config.js` or `src/index.js` file:

```javascript
import './theme/contextNavigation.scss';
```

### Important Notes

1. The copied SCSS file will not be overwritten during add-on updates
2. You can completely replace the styling or just modify specific parts
3. Remember to restart your Volto development server after making style changes
4. For theme-specific customizations, consider adding your styles to your theme's main SCSS file instead

## Full Configuration Example

Here's how your configuration might look with custom styles:

```javascript
// In config.js
import './theme/contextNavigation.scss';

export default function applyConfig(config) {
  config.settings.contextNavigation.params = {
    // ... your params here
  };
  
  return config;
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