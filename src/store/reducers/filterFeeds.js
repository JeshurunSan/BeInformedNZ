const initialState = "";

const filterFeeds = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_FEED":
      return action.payload;
  }

  return state;

  // if (action.type === "FIND_FEED") {
  //   return action.payload;
  // }
  // return state;
};

export default filterFeeds;
