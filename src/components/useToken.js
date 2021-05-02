import { useState } from "react";

function useToken() {
   const getToken = () => {
      const tokenString = localStorage.getItem("token");
      const authToken = JSON.parse(tokenString);
      return authToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = authToken => {
      localStorage.setItem("token", JSON.stringify(authToken))
      setToken(authToken.token);
    };

    return {
       setToken: saveToken,
       token
    };
};

export default useToken;