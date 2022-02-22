import React from 'react';
import { Box } from '../Box';

export function Text({ as, styleSheet, ...props }) {
  const {
    textVariant = {
      fontSize: 'inherit',
    },
    ...restStyleSheet
  } = styleSheet;
  const styleSheetUpdated = { ...textVariant, ...restStyleSheet };
  const tag = as || 'span';

  return <Box as={tag} styleSheet={styleSheetUpdated} {...props} />;
}

Text.defaultProps = {
  styleSheet: {},
};
