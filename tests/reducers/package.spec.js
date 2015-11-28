import {Map, fromJS} from 'immutable';
import packageReducer from 'reducers/package';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

describe('(Reducer) Package', () => {


   it('should add package', () => {
      const initialState = Map();

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
      const action = { type: 'ADD_PACKAGE', package: newPackage };
      console.log(initialState);

      const nextState = packageReducer(initialState, action);

      console.log(fromJS({
         packages: [newPackage]
      }), "=====", nextState)


      expect(nextState).to.equal(fromJS({
         packages: [newPackage]
      }));

   });

});
