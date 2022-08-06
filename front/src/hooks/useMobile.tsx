import { useMedia } from 'react-use';

export function useMobile() {
  const breakpoint = 768;
  const isMobile = useMedia(`(max-width: ${breakpoint}px)`);
  return {
    isMobile
  };
}
