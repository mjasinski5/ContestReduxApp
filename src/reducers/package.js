import {Map, fromJS} from 'immutable';

export default function packageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_PACKAGE':
   return state.merge({
      packages: [action.package]//[...state.package, ...action.package]
   });
      return state.updateIn(['packages'], val => val.push(fromJS(action.package)))

   case 'ADD_QUESTION':

      const currentPackage = state.get('packages').get(action.packageIndex).update('questions', list => list.push(action.question));
;
      // const finalPackage = currentPackage.update('questions', list => list.push(action.question));

      return state.merge({
         packages: [currentPackage.toJS()]//[...state.package, ...action.package]
      });
      //return state.update('packages', list => list.push(finalPackage))
      //return state.setIn([]);
  }

  return state;
}
