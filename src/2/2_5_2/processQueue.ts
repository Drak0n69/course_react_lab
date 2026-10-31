import type { Que } from './App';

export function getFinalState(baseState: number, queue: Que[]): number {
  return queue.reduce<number>((state, update) =>
    typeof update === 'function' ? update(state) : update, baseState);
}
