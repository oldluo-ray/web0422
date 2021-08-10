import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  CHANGEALLCHECK,
  CLEARDONETODOS,
} from './constants'

export function addtodo(todo) {
  return { type: ADDTODO, todo }
}
export function updatetodo(id) {
  return { type: UPDATETODO, id }
}
export function deletetodo(id) {
  return { type: DELETETODO, id }
}
export function allcheckchange() {
  return { type: CHANGEALLCHECK }
}
export function cleardonetodos() {
  return { type: CLEARDONETODOS }
}
