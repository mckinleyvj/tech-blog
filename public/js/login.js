const txtUserName = document.querySelector("#username-login");
const txtPassword = document.querySelector("#password-login");

const login = async (event) => {
  event.preventDefault();

  const username = txtUserName.value.trim();
  const password = txtPassword.value.trim();

  if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        window.alert("Logged in successfully");
        location.reload();
        window.location.replace("/dashboard");
      }else{
        alert(`Incorrect username or password, please try again.`);
        txtUserName.value = '';
        txtPassword.value = '';
        txtUserName.focus();
        return;
      }
  }else{
    alert(`Incorrect username or password, please try again.`);
  }
};

txtUserName.focus();

const el = document.getElementById('login-btn');
if(el){
  el.addEventListener('click', login);
}
