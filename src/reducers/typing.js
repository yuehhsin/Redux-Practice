const typingReducer = (state = null, action) => {
  switch (action.type) {
    case "isTyping":
      return action.payload;
    case "typed":
      return null;
    default:
      return state;
  }
};

export default typingReducer;
