import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { ContextNavigationBlockSchema } from './schema';
import config from '@plone/volto/registry';
import View from './View';

const messages = defineMessages({
  title: {
    id: 'Context Navigation Block',
    defaultMessage: 'Context Navigation Block',
  },
});

const Edit = (props) => {
  const intl = useIntl();
  const schema = useMemo(() => ContextNavigationBlockSchema(props), [props]);
  const useGlobalConfig =
    config.blocks.blocksConfig.contextNavigationBlock.useGlobalConfig;

  if (useGlobalConfig) return <View {...props} mode="edit" />;

  return (
    <>
      <View {...props} mode="edit" />
      <SidebarPortal selected={props.selected}>
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.title)}
          onChangeField={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          formData={props.data}
          block={props.block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
