import React from 'react';
import { theme } from '../../../theme/theme';
import { renderCSS } from '../../../theme/renderCss';

export function Box({
  as,
  styleSheet: { focus, hover, srOnly, ...styleSheet },
  ...props
}) {
  const Tag = as || 'div';

  return (
    <React.Fragment>
      <Tag
        {...props}
        className={`${props.className ? props.className : ''} ${
          srOnly ? 'sr-only' : ''
        }`}
      />
      <style jsx>{`
        ${Tag} {
          ${renderCSS(styleSheet, 'xs')};
        }
        ${Tag}:hover {
          ${renderCSS(hover, 'xs')};
        }
        ${Tag}:focus {
          ${renderCSS(focus, 'xs')};
        }
        @media screen and (min-width: ${theme.breakpoints[
            'Breakpoints.sm'
          ]}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'sm')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'sm')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'sm')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints[
            'Breakpoints.md'
          ]}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'md')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'md')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'md')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints[
            'Breakpoints.lg'
          ]}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'lg')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'lg')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'lg')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints[
            'Breakpoints.xl'
          ]}px) {
          ${Tag} {
            ${renderCSS(styleSheet, 'xl')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'xl')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'xl')};
          }
        }
      `}</style>
    </React.Fragment>
  );
}

/* @media screen and (min-width: ${theme.breakpoints['Breakpoints.md']}px) {
          ${renderCSS(styleSheet, 'md')};
          :hover {
            ${renderCSS(hover, 'md')};
          }
          :focus {
            ${renderCSS(focus, 'md')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.lg']}px) {
          ${renderCSS(styleSheet, 'lg')};
          :hover {
            ${renderCSS(hover, 'lg')};
          }
          :focus {
            ${renderCSS(focus, 'lg')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.xl']}px) {
          ${renderCSS(styleSheet, 'xl')};
          :hover {
            ${renderCSS(hover, 'xl')};
          }
          :focus {
            ${renderCSS(focus, 'xl')};
          }
        } */

Box.defaultProps = {
  styleSheet: {},
};
