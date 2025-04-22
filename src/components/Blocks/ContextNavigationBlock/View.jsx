import React from 'react';
import ContextNavigation from '@plone/volto/components/theme/Navigation/ContextNavigation';
import config from '@plone/volto/registry';

const View = (props) => {
  const { data } = props;
  const useGlobalConfig =
    config.blocks.blocksConfig.contextNavigationBlock.useGlobalConfig;

  const params = useGlobalConfig
    ? config.settings.contextNavigation.params
    : data;

  return <ContextNavigation params={params} />;
};

export default View;
