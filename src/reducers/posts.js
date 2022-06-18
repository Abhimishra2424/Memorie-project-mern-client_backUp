export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...posts];
    case "CREATE_POST":
      return [...posts];
    default:
      return posts;
  }
};
