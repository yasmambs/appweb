const ADMIN_USER = "admin";
const ADMIN_PASS = "123";

const AuthAdmin = {
  login(u, p){
    if(u === ADMIN_USER && p === ADMIN_PASS){
      localStorage.setItem("admin", "login");
      window.location.href = "index.html";
    } else {
      alert("Login gagal");
    }
  },

  protect(){
    if(localStorage.getItem("admin") !== "login"){
      window.location.href = "login.html";
    }
  },

  logout(){
    localStorage.removeItem("admin");
    window.location.href = "login.html";
  }
};
