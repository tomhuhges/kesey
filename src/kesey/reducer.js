import * as types from './constants'

export default function fileReducer(state = [], action) {
  switch (action.type) {
  case types.ADD_FILE:
    return [...state,
      Object.assign({}, action.file),
    ]
  case types.DELETE_FILE:
    return [...state,
      Object.assign({}, action.file),
    ]
  default:
    return state
  }
}
