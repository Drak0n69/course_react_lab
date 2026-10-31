export type Que = number | ((n: number) => number);
export function getFinalState(baseState: number, queue: Que[]) {
  return queue.reduce<number>((value, next) => typeof next === 'function' ? next(value) : next, baseState);
}
