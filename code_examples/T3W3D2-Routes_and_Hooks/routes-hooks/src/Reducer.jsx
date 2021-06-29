import React, { useReducer } from "react";

const ACTIONS = {
  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [...state, action.value];
    case ACTIONS.UPDATE:
			return state;
    case ACTIONS.DELETE:
			return state;
    default:
      return state;
  }
};

const initialState = [];

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Hello</h2>
			<input type="text" value={'hello'}/>
    </div>
  );
}
