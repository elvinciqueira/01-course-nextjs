import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSet from '@fortawesome/free-solid-svg-icons';
import { capitalize } from '../../../theme/renderCss';
import { Box } from '../Box';

export function Icon({ as, styleSheet, ...props }) {
  const { iconVariant, ...restStyleSheet } = styleSheet;
  const styleSheetUpdated = restStyleSheet;

  return (
    <Box
      as={FontAwesomeIcon}
      icon={iconSet[`fa${capitalize(iconVariant)}`]}
      crossOrigin="anonymous"
      styleSheet={{
        width: '1.5ch',
        height: '1.5ch',
        ...styleSheetUpdated,
      }}
      {...props}
    />
  );
}
