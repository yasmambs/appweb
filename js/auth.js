const Auth = {
  login(user){
    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
  },

  getUser(){
    return localStorage.getItem("user");
  },

  protect(){
    if(!this.getUser()){
      window.location.href = "index.html";
    }
  },

  logout(){
    localStorage.removeItem("user");
    window.location.href = "index.html";
  }
};
