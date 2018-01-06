// @flow

import type { dataType } from '../reducers/FetchDataReducer';

export type Action =
{ type: 'FETCH_DATA_START' } |
{ type: 'FETCH_DATA_SUCCESS', payload: dataType } |
{ type: 'FETCH_DATA_FAIL' }
;
