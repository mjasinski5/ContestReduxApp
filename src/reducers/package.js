import * as ActionTypes from '';
export default function packageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

  case 'ADD_PACKAGE':
   return state.merge({
      packages: [action.package]//[...state.package, ...action.package]
   });

  }

  return state;
}
