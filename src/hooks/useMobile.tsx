import { useMedia } from 'react-use';

export const breakpoint = '768px';

export function useMobile() {
  const isMobile = useMedia(`(max-width: ${breakpoint})`);
  return {
    isMobile
  };
}
