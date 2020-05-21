export const NUMBER_ACTION_TYPES = {
  ADD: "ADD",
  REMOVE: "REMOVE"
}

export function add(payload) {
  return {
    type: NUMBER_ACTION_TYPES.ADD,
    payload
  }
};

export function remove(payload) {
  return {
    type: NUMBER_ACTION_TYPES.REMOVE,
    payload
  }
};