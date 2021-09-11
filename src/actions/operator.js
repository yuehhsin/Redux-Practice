// actions
export const add = (num) => {
  return {
    type: "add",
    payload: num,
  };
};

export const subtract = (num) => {
  return {
    type: "subtract",
    payload: num,
  };
};

export const multiply = (num) => {
  return {
    type: "multiply",
    payload: num,
  };
};

export const divide = (num) => {
  return {
    type: "divide",
    payload: num,
  };
};

export const firstInput = (num) => {
  return {
    type: "firstInput",
    payload: num,
  };
};
