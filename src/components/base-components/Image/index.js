import { Box } from '../Box';

export function Image({ as, ...props }) {
  const tag = as || 'img';
  const { children, dangerouslySetInnerHTML, ...imageProps } = props;

  return <Box as={tag} {...imageProps} />;
}

Image.defaultProps = {
  styleSheet: {},
};
