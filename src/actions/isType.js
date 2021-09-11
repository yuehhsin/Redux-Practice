// actions
export const isTyping = (num) => {
  return {
    type: "isTyping",
    payload: num,
  };
};

export const typed = () => {
  return {
    type: "typed",
  };
};
