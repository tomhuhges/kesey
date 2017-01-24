import * as types from './constants'

export function addFile(file) {
  return { type: types.ADD_FILE, file }
}

export function deleteFile(file) {
  return { type: types.DELETE_FILE, file }
}
