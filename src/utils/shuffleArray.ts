export function shuffleArray<T>(array: T[], start: number): T[] {
  array.map((value, index) => {
    if (index >= start) {
      const randomNumberInIndexRange = Math.floor(Math.random() * (index + 1));
      [array[index], array[randomNumberInIndexRange]] = [
        array[randomNumberInIndexRange],
        array[index]
      ];
    }
  });

  return array;
}
