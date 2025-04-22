import { withContextNavigation } from './components/theme/View/ContentWithContextNavigation';

import './theme/contextNavigation.scss';

import ContextNavigationBlockView from './components/Blocks/ContextNavigationBlock/View';
import ContextNavigationBlockEdit from './components/Blocks/ContextNavigationBlock/Edit';
import navSVG from '@plone/volto/icons/nav.svg';

const applyConfig = (config) => {
  const { settings, views } = config;

  settings.contextNavigation = {
    params: {
      includeTop: true,
      showHidden: false,
      currentFolderOnly: false,
    },
    layoutViews: ['document_view'],
    contentTypesViews: ['News Item', 'File', 'Image', 'Event'],
  };

  settings.originalLayoutViews ??= { ...views.layoutViews };
  settings.originalContentTypesViews ??= { ...views.contentTypesViews };

  for (const viewKey of settings.contextNavigation.layoutViews) {
    views.layoutViews[viewKey] = withContextNavigation(
      viewKey,
      settings.originalLayoutViews[viewKey],
    );
  }

  for (const type of settings.contextNavigation.contentTypesViews) {
    views.contentTypesViews[type] = withContextNavigation(
      type,
      settings.originalContentTypesViews[type],
    );
  }

  config.blocks.blocksConfig.contextNavigationBlock = {
    id: 'contextNavigationBlock',
    title: 'Context Navigation Block',
    icon: navSVG,
    group: 'common',
    view: ContextNavigationBlockView,
    edit: ContextNavigationBlockEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
  };

  // Disable contextNavigationBlock
  // config.blocks.blocksConfig.contextNavigationBlock.restricted = true;
  // When enabled, global site configuration will be used for this block
  config.blocks.blocksConfig.contextNavigationBlock.useGlobalConfig = true;

  return config;
};

export default applyConfig;
