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

     const newPackage = {
       packageName: 'Test1',
       questions: [{
         question: "Would like some coffee, dude?",
         options: ["Yes", "No"],
         markedAnswers: ["Yes"]
       }]
     };
     const action = { type: ActionTypes.ADD_PACKAGE, packageToAdd: newPackage };

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


   it('should remove package', () => {

      const packageToRemove = {
         packageName: 'Test1',
         questions: [
            {
               question: "Would like some coffee, dude?",
               options: ["Yes", "No"],
               markedAnswers: ["Yes"]
            }
          ]
      }

      const packageToRemove2 = {
         packageName: 'Test21',
         questions: [
            {
               question: "Would like some coffee, dude?",
               options: ["Yes", "No"],
               markedAnswers: ["Yes"]
            }
          ]
      }


      const initialState = fromJS({
         packages: [packageToRemove, packageToRemove2]
      });

      const action = { type: ActionTypes.REMOVE_PACKAGE, package: packageToRemove};
      const nextState = packageReducer(initialState, action);

      expect(nextState).to.equal(fromJS({
         packages: [packageToRemove2]
      }));
   })

   it('should remove question from package', () => {

      const questionToRemove = {
         question: 'To be or not to be?',
         options: ["To be", "Not to be"],
         markedAnswers: []
      }

      const testQuestion = {
         question: 'To be or not to be2?',
         options: ["To be2", "Not to be2"],
         markedAnswers: []
      }

      const initialPackage = {
         packageName: 'test1',
         questions: [
            questionToRemove,
            testQuestion
         ]
      };
      const initialState = fromJS({
         packages: [initialPackage, initialPackage]
      });

      const action = { type: ActionTypes.REMOVE_QUESTION, packageIndex: 0, question: questionToRemove };
      const nextState = packageReducer(initialState, action);

      expect(nextState).to.equal(fromJS({
         packages: [{
            packageName: 'test1',
            questions: [testQuestion]
         }, initialPackage]
      }));
   });

   it('mark single answer to question', () => {
      const questionToAnswer = {
         question: 'To be or not to be?',
         options: ["To be", "Not to be"],
         markedAnswers: []
      }

      const answeredQuestion = {
        question: 'To be or not to be?',
        options: ['To be', 'Not to be'],
        markedAnswers: ['To be']
      }

     const initialPackage = {
       packageName: 'test1',
       questions: [questionToAnswer]
     };

     const initialState = fromJS({
       packages: [initialPackage, initialPackage]
     });


     const action = { type: ActionTypes.MARK_ANSWER, packageIndex: 0, questionIndex: 0, questionToAnswer, answers: ['To be']}
     const nextState = packageReducer(initialState, action);

     expect(nextState).to.equal(fromJS({
       packages: [{
         packageName: 'test1',
         questions: [answeredQuestion]
       }, initialPackage]
     }));
   });

   it('mark multi answer to question', () => {

      const questionToAnswer = {
         question: 'To be or not to be?',
         options: ["To be", "Not to be"],
         markedAnswers: []
      }
      const answeredQuestion = {
        question: 'To be or not to be?',
        options: ['To be', 'Not to be'],
        markedAnswers: ['To be', 'Not to be']
      }
     const initialPackage = {
       packageName: 'test1',
       questions: [questionToAnswer]
     };
     const initialState = fromJS({
       packages: [initialPackage, initialPackage]
     });


     const action = { type: ActionTypes.MARK_ANSWER, packageIndex: 0, questionIndex: 0, questionToAnswer, answers: ['To be', 'Not to be']}
     const nextState = packageReducer(initialState, action);

     expect(nextState).to.equal(fromJS({
       packages: [{
         packageName: 'test1',
         questions: [answeredQuestion]
       }, initialPackage]
     }));
   });
});
