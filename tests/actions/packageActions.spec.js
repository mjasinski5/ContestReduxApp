
import { addPackage, addQuestion, removePackage, removeQuestion } from 'actions/packageActions';
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

  it('(REMOVE_PACKAGE) should create proper action', () =>{
    const packageToRemove = {packageName: "test1", questions: []};
    const action = removePackage(packageToRemove);

    expect(action).to.deep.equal({type: actionTypes.REMOVE_PACKAGE, packageToRemove: packageToRemove})
  });

  it('(REMOVE_QUESTION) should create proper action', () =>{
    const questionToRemove = { question: 'Test?', options: ['A', 'B'], markedAnswers: ['A']};
    const action = removeQuestion(questionToRemove, 0);

    expect(action).to.deep.equal({type: actionTypes.REMOVE_QUESTION, question: questionToRemove, packageIndex: 0})
  });






});
