import { useEffect, useRef, useState } from 'react';

export function useScroll() {
  const elementRef = useRef<HTMLElement | null>(null);

  const [hasVerticalScroll, setHasVerticalScroll] = useState<boolean>();
  const [hasHorizontalScroll, setHasHorizontalScroll] = useState<boolean>();

  function elementHasVerticalScroll(
    scrollHeight: number,
    clientHeight: number
  ) {
    return scrollHeight > clientHeight;
  }

  function elementHasHorizontalScroll(
    scrollWidth: number,
    clientWidth: number
  ) {
    return scrollWidth > clientWidth;
  }

  useEffect(() => {
    if (elementRef.current) {
      setHasVerticalScroll(
        elementHasVerticalScroll(
          elementRef.current.scrollHeight,
          elementRef.current.clientHeight
        )
      );
      setHasHorizontalScroll(
        elementHasHorizontalScroll(
          elementRef.current.scrollWidth,
          elementRef.current.clientWidth
        )
      );
    }

    window.addEventListener('resize', () => {
      if (elementRef.current) {
        setHasVerticalScroll(
          elementHasVerticalScroll(
            elementRef.current.scrollHeight,
            elementRef.current.clientHeight
          )
        );
        setHasHorizontalScroll(
          elementHasHorizontalScroll(
            elementRef.current.scrollWidth,
            elementRef.current.clientWidth
          )
        );
      }
    });
  }, []);

  return {
    elementRef,
    hasVerticalScroll,
    hasHorizontalScroll
  };
}
