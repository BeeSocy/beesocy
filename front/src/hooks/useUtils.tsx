export function useUtils() {
  function elementHasVerticalScroll(
    scrollHeight: number,
    clientHeight: number
  ) {
    return scrollHeight > clientHeight;
  }

  return {
    elementHasVerticalScroll
  };
}
