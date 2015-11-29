import {Map, fromJS} from 'immutable';
import packageReducer from 'reducers/package';
import chaiImmutable from 'chai-immutable';
import * as ActionTypes from 'constants/ActionTypes';

chai.use(chaiImmutable);

describe('(Reducer) Package', () => {


   it('should add package', () => {
      const initialState = fromJS({
         packages: []
      });

      console.log(initialState);
      const newPackage = {
         packageName: 'Test1',
         questions: [
            {
               question: "Would like some coffee, dude?",
               options: ["Yes", "No"],
               markedAnswers: ["Yes"]
            }
          ]
      }
      const action = { type: ActionTypes.ADD_PACKAGE, package: newPackage };

      const nextState = packageReducer(initialState, action);

      expect(nextState).to.equal(fromJS({
         packages: [newPackage]
      }));

   });

   it('should add question to packages', () => {
      const initialState = fromJS({
         packages:[ {
            questions: [{
               question: "Would you like some tea, man?",
               options: ["Yes", "No"],
               markedAnswers: []
            }]
         }]
      });

      const questionToAdd = {
         question: "Do you like me?",
         options: ["Yes", "No"],
         markedAnswers: []
      }

      const action = { type: ActionTypes.ADD_QUESTION, question: questionToAdd, packageIndex: 0 };
      const nextState = packageReducer(initialState, action);
      console.log(nextState.toJS().packages[0]);

      expect(nextState).to.equal(fromJS({
         packages:[ {
            questions: [{
               question: "Would you like some tea, man?",
               options: ["Yes", "No"],
               markedAnswers: []
            },
            {
               question: "Do you like me?",
               options: ["Yes", "No"],
               markedAnswers: []
            }
         ]
         }]
      }));
   });
});
