import React from 'react';
import { Container } from 'semantic-ui-react';
import ContextNavigation from '@plone/volto/components/theme/Navigation/ContextNavigation';
import config from '@plone/volto/registry';

const ContentWithContextNavigation = ({ content }) => {
  const params = config.settings.contextNavigation.params;
  return (
    <Container className="content-with-sidebar-container">
      <div className="content-with-sidebar">
        <div className="sidebar-navigation">
          <ContextNavigation params={params} />
        </div>
        <div className="main-content">{content}</div>
      </div>
    </Container>
  );
};

const withContextNavigation = (contentKey, ViewComponent) => (props) => {
  const contextNavigation = config.settings.contextNavigation;
  if (
    contextNavigation.contentTypesViews.includes(contentKey) ||
    contextNavigation.layoutViews.includes(contentKey)
  ) {
    return (
      <ContentWithContextNavigation content={<ViewComponent {...props} />} />
    );
  }

  return <ViewComponent {...props} />;
};

export { ContentWithContextNavigation as default, withContextNavigation };
