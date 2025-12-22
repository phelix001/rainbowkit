import { Box, type BoxProps } from 'components/Box/Box';
import { wrapper } from './Wrapper.css';

export function Wrapper(props: BoxProps) {
  return <Box className={wrapper} {...props} />;
}
