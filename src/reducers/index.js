import messages from "../mock-data/messages.json";

const initialState = {
  messages
};

function removeItem(array, action) {
  return array.filter((item, index) => index !== action.index);
}

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item;
    }

    return {
      ...item,
      ...action.item
    };
  });
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "UPDATE_MESSAGE":
      return {
        ...state,
        messages: updateObjectInArray(state.messages, action)
      };
    case "DELETE_MESSAGE":
      return {
        ...state,
        messages: removeItem(state.messages, action)
      };
    case "web3/RECEIVE_ACCOUNT":
      return {
        ...state,
        ethAddress: action.address
      };
    case "web3/CHANGE_ACCOUNT":
      return {
        ...state,
        ethAddress: action.address
      };
    default:
      return state;
  }
};

export default rootReducer;
