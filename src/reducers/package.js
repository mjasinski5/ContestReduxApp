import {Map, fromJS} from 'immutable';
import * as ActionTypes from 'constants/ActionTypes';

export default function packageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

   case ActionTypes.ADD_PACKAGE:
    return state.merge({
       packages: [action.package]
    });

   case ActionTypes.ADD_QUESTION:
      const packageWithAddedQuestion = state.get('packages').get(action.packageIndex).update('questions', list => list.push(action.question));

      return state.merge({
         packages: [packageWithAddedQuestion.toJS()]//[...state.package, ...action.package]
      });
   case ActionTypes.REMOVE_PACKAGE:
      const packagesWithRemovedPack = state.get('packages').filter((element)=> {
         return element.get('packageName') !== action.package.packageName
      });

      return state.setIn(['packages'], packagesWithRemovedPack);

   case ActionTypes.REMOVE_QUESTION:
      const packageWithRemovedQuestion = state.get('packages').get(action.packageIndex).update('questions', list => list.filter((element)=> {
         return element.get('question') !== action.question.question;
      }));

      return state.setIn(['packages', action.packageIndex], packageWithRemovedQuestion);;

   default:
      return state;
   }
}
