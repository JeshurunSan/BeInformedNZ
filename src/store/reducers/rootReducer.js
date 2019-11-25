import authReducer from "./authReducer";
import feedReducer from "./feedReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

//Filter reducer

import filterFeeds from "./filterFeeds";

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
  filter: filterFeeds,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
