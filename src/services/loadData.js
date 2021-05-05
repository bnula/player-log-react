function loadData(token, itemType) {
   const authToken = token;
   const url = process.env.REACT_APP_HEROKU_API;
   return (
      fetch(`${url}/${itemType}?secret_token=${authToken}`)
      .then(data => data.json())
   )
};

export default loadData;