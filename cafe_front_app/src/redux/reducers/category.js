const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CATEGORIES":
      return (state = action.data);
    default:
      return state;
  }
};

export default categoriesReducer;
