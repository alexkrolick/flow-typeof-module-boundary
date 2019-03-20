// @flow

import {A} from '../constants'

const C: 'c' = 'c'

declare type O = {
  a: typeof A, // never errors
  b: 'b',
  c: typeof C,
}

