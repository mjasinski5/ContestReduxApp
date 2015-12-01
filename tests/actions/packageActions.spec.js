
import { addPackage, addQuestion } from 'actions/packageActions';
import * as actionTypes from 'constants/actionTypes';

describe('(Actions) Package', () => {

  it('(ADD_PACKAGE) should create proper action', () => {
    const packageToAdd = {packageName: "test1", questions: []};
    const action = addPackage(packageToAdd);

    expect(action).to.deep.equal({type: actionTypes.ADD_PACKAGE, packageToAdd: packageToAdd});
  });

  it('(ADD_QUESTION) should create proper action', () => {
    const questionToAdd = { question: 'Test?', options: ['A', 'B'], markedAnswers: ['A']};
    const action = addQuestion(questionToAdd, 0);

    expect(action).to.deep.equal({type: actionTypes.ADD_QUESTION, question: questionToAdd, packageIndex: 0});
  });



});
