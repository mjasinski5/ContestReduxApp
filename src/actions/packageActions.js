import * as actionTypes from 'constants/actionTypes'

export function addPackage(packageToAdd) {
  return {
    type: actionTypes.ADD_PACKAGE,
    packageToAdd
  }

}

export function addQuestion(question, packageIndex) {

  return {
    type: actionTypes.ADD_QUESTION,
    question,
    packageIndex
  }
}

export function removePackage(packageToRemove) {

  return {
    type: actionTypes.REMOVE_PACKAGE,
    packageToRemove
  }

}

export function removeQuestion(question, packageIndex) {
  return {
    type: actionTypes.REMOVE_QUESTION,
    question,
    packageIndex
  }
}
