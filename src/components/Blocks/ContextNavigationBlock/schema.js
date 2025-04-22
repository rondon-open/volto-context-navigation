import { defineMessages } from 'react-intl';

const messages = defineMessages({
  name: {
    id: 'Name',
    defaultMessage: 'Name',
  },
  root_path: {
    id: 'root_path',
    defaultMessage: 'Root Path',
  },
  includeTop: {
    id: 'includeTop',
    defaultMessage: 'Include top node',
  },
  currentFolderOnly: {
    id: 'currentFolderOnly',
    defaultMessage: 'Current folder only',
  },
  currentFolderOnlyDescription: {
    id: 'currentFolderOnlyDescription',
    defaultMessage: 'Only show the contents of the current folder',
  },
  topLevel: {
    id: 'topLevel',
    defaultMessage: 'Start level',
  },
  bottomLevel: {
    id: 'bottomLevel',
    defaultMessage: 'Navigation tree depth',
  },
  no_icons: {
    id: 'no_icons',
    defaultMessage: 'Suppress Icons',
  },
  thumb_scale: {
    id: 'thumb_scale',
    defaultMessage: 'Override thumb scale',
  },
  no_thumbs: {
    id: 'no_thumbs',
    defaultMessage: 'Suppress thumbs',
  },
});

// https://6.docs.plone.org/volto/development/contextnavigation.html
export const ContextNavigationBlockSchema = ({ intl }) => ({
  title: 'Context Navigation Block',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: [
        'name',
        'root_path',
        'includeTop',
        'currentFolderOnly',
        'topLevel',
        'bottomLevel',
        'no_icons',
        'thumb_scale',
        'no_thumbs',
      ],
    },
  ],
  properties: {
    name: {
      title: intl.formatMessage(messages.name),
      widget: 'text',
    },
    root_path: {
      title: intl.formatMessage(messages.root_path),
      widget: 'text',
    },
    includeTop: {
      title: intl.formatMessage(messages.includeTop),
      type: 'boolean',
      default: false,
    },
    currentFolderOnly: {
      title: intl.formatMessage(messages.currentFolderOnly),
      description: intl.formatMessage(messages.currentFolderOnlyDescription),
      type: 'boolean',
      default: false,
    },
    topLevel: {
      title: intl.formatMessage(messages.topLevel),
      type: 'number',
      default: 1,
    },
    bottomLevel: {
      title: intl.formatMessage(messages.bottomLevel),
      type: 'number',
      default: 0,
    },
    no_icons: {
      title: intl.formatMessage(messages.no_icons),
      type: 'boolean',
      default: false,
    },
    thumb_scale: {
      title: intl.formatMessage(messages.thumb_scale),
      choices: [
        ['', 'default'],
        ['large', 'Large'],
        ['preview', 'Preview'],
        ['mini', 'Mini'],
        ['thumb', 'Thumb'],
        ['tile', 'Tile'],
        ['icon', 'Icon'],
        ['listing', 'Listing'],
      ],
      default: '',
    },
    no_thumbs: {
      title: intl.formatMessage(messages.no_thumbs),
      type: 'boolean',
      default: false,
    },
  },
  required: [],
});
