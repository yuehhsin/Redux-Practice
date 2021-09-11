const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "firstInput":
      return action.payload;
    case "add":
      return state + action.payload;
    case "subtract":
      return state - action.payload;
    case "multiply":
      return state * action.payload;
    case "divide":
      const resultDiv = state / action.payload;
      return resultDiv.toFixed(4);
    case "percentage":
      const result = state / 100;
      return result.toFixed(4);
    case "AC":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
