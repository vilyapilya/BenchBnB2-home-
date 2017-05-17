import * as APIUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const requestBenches = next => dispatch => (
  APIUtil.fetchBenches()
    .then(benches => dispatch(receiveBenches(benches)))
);
