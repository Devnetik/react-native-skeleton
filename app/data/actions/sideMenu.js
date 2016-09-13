/**
 * Created by maluramichael on 13/09/16.
 */

const NAMESPACE = 'sidemenu.';

export const OPEN = NAMESPACE + 'open';
export const CLOSE = NAMESPACE + 'close';
export const TOGGLE = NAMESPACE + 'toggle';

export function open() { return { type: OPEN }; }
export function close() { return { type: CLOSE }; }
export function toggle() { return { type: TOGGLE }; }
