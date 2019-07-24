
export default {
  namespace: 'reactModel',

  state: {
    count: 0,
  },

  effects: {
    *plus({ payload }, { call, put,select }) { 
      const { count } = yield select (_=>_.reactModel)
      yield put({type: 'updateCount',payload: count + 1});
    },
    *minus({ payload }, { call, put,select }) {
      const { count } = yield select (_=>_.reactModel)
      yield put({type: 'updateCount',payload: count - 1});
    },
  },

  reducers: {
     updateCount(state,{payload}){ 
      return {...state,count:payload}
     }
  },
};
