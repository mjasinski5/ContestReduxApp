import {Map, fromJS, List} from 'immutable';
import * as ActionTypes from 'constants/ActionTypes';

export default function packageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

   case ActionTypes.ADD_PACKAGE:
    return state.merge({
       packages: [action.packageToAdd]
    });

   case ActionTypes.ADD_QUESTION:
      const packageWithAddedQuestion = state.get('packages').get(action.packageIndex).update('questions', list => list.push(action.question));

      return state.merge({
         packages: [packageWithAddedQuestion.toJS()]//[...state.package, ...action.package]
      });
   case ActionTypes.REMOVE_PACKAGE:
      const packagesWithRemovedPack = state.get('packages').filter((element)=> {
         return element.get('packageName') !== action.packageToRemove.packageName
      });

      return state.setIn(['packages'], packagesWithRemovedPack);

   case ActionTypes.REMOVE_QUESTION:
      const packageWithRemovedQuestion = state.get('packages').get(action.packageIndex).update('questions', list => list.filter((element)=> {
         return element.get('question') !== action.question.question;
      }));

      return state.setIn(['packages', action.packageIndex], packageWithRemovedQuestion);;

    case ActionTypes.MARK_ANSWER:

    const packageWithMarkedAnswer = state.get('packages').get(action.packageIndex).setIn(['questions', action.questionIndex, 'markedAnswers'], fromJS(action.answers))
    return state.setIn(['packages', action.packageIndex], packageWithMarkedAnswer);

   default:
      return state;
   }
}
