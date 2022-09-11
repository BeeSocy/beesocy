export function useBody() {
  function handleChangeBodyOverflow(state: boolean): void {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'overlay';
    }
  }

  return { handleChangeBodyOverflow };
}
