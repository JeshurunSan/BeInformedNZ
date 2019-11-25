const initState = {
  feeds: [
    { id: "1", title: "One", content: "blah blah blah" },
    { id: "2", title: "Two", content: "blah blah blah" },
    { id: "3", title: "Three", content: "blah blah blah" }
  ]
};

const feedReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_FEED":
      console.log("feed created", action.feed);
      return state;
    case "CREATE_FEED_ERROR":
      console.log("create feed error", action.err);
      return state;

    default:
      return state;
  }
};

export default feedReducer;
