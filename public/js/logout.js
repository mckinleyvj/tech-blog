const logoutBtn = document.querySelector("#logout-btn");

const logout = async () => {
  
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    window.alert("Logged out successfully.");
    location.reload();
    window.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

logoutBtn.addEventListener("click", logout);
