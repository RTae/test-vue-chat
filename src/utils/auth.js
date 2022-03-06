const getUsername = () => {
    let username = localStorage.getItem("token");
  
    if (!username) return "";
  
    return username;
  };
  
  const isAuthenticated = () => {
    return getUsername() !== "";
  };
  
  export { getUsername, isAuthenticated };
  