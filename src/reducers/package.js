
export default function packageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_PACKAGE':
   console.log(state);

   return state.merge({
      packages: [action.package]//[...state.package, ...action.package]
   });
  }

  return state;
}
