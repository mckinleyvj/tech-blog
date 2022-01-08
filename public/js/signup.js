const txtUserNameSU = document.querySelector("#username-signup");
const txtPasswordSU = document.querySelector("#password-signup");

const signup = async (event) => {
  event.preventDefault();

  const username = txtUserNameSU.value.trim();
  const password = txtPasswordSU.value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });    
    if (response.ok) {
      window.alert("Successfully added user");
      location.reload();
      window.location.replace("/dashboard");
    }else{
        alert(`Username already exist. Please try again.`);
        txtUserNameSU.value = "";
        txtPasswordSU.value = "";
        txtUserNameSU.focus();
        return;
    }  
  } else {
    alert(`Username already exist. Please try again.`);
    console.log(response.status);
  }
};

txtUserNameSU.focus();

const el = document.getElementById('signup-btn');
if(el){
  el.addEventListener('click', signup);
}
