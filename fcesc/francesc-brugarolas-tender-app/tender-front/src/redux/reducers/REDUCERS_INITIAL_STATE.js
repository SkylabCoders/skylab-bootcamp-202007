const REDUCERS_INITIAL_STATE = {
  project: { data: {}, flow: {}, current: {}, calculated: {} },
  portfolio: { data: {}, flow: {}, calculated: {} },
  budget: { data: {}, calculated: {}, current: {} },
  quotation: { data: {}, calculated: {}, current: {} },
  user: {},
  apiCallsInProgress: 0,
  errors: []
};

export default REDUCERS_INITIAL_STATE;