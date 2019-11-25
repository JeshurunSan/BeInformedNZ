import { firebaseReducer } from "react-redux-firebase";

export const createFeed = feed => {
  //  Dispatch method dispatches an action
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("feeds")
      .add({
        ...feed,

        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_FEED", feed });
      })
      .catch(err => {
        dispatch({ type: "CREATE_FEED_ERROR", err });
      });
  };
};

export const onFindFeed = title => {
  return dispatch => {
    dispatch({ type: "FIND_FEED", payload: title });
  };
};
