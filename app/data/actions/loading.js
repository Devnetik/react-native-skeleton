/**
 * Created by maluramichael on 13/09/16.
 */

const NAMESPACE = 'loading.';

export const LOAD = NAMESPACE + 'load';
export const DONE = NAMESPACE + 'done';

export function load() { return { type: LOAD }; }
export function done() { return { type: DONE }; }
