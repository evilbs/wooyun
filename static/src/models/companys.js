import * as bugsService from '../services/users';

export default {
  namespace: 'companys',
  state: {
    total: 1000,
    list: [
      { id: 1, name: 'abc' },
      { id: 2, name: 'hello' },
      { id: 3, name: 'worlkd' },
      { id: 4, name: 'helsd' },
      { id: 5, name: 'asdfe' },
    ],
  },
  reducers: {
    save(state, { payload: { data: list, total } }) {
      return { ...state, list, total };
    },
  },
  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const { data, headers } = yield call(bugsService.fetch, { page });
      yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
  },
  subscriptions: {},
};
