export const fetchAllForumNames = () => dispatch => {
  return fetch("http://localhost:7373/forum/all")
    .then(response => response.json())
    .then(forumMap =>
      dispatch({
        type: "FETCH_ALL_FORUM_NAMES",
        payload: forumMap
      })
    );
};
