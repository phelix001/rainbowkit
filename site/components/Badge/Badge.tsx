import { Box, type BoxProps } from 'components/Box/Box';
import { badge } from './Badge.css';

export function Badge(props: BoxProps) {
  return <Box as="span" className={badge} {...props} />;
}
