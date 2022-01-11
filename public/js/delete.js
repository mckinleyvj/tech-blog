const removeBtn = document.querySelectorAll("#btnDelete");

const deleteHandler = async (e) => {
    e.preventDefault();

    const card_id = e.target.getAttribute("data-id");

    if (card_id) {
    const confirmBox = prompt("Confirm delete item? (Yes/No)");

    if (confirmBox == null || confirmBox == "") {
      alert("Invalid input.");
      return;
      //do nothing
    } else if (
      confirmBox == "Yes" ||
      confirmBox == "yes" ||
      confirmBox == "YES" ||
      confirmBox == "y" ||
      confirmBox == "Y"
    ) {
      try {
        const response = await fetch(`/api/posts/delete/${card_id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.ok) {
          document.location.reload();
        } else {
          console.log(response);
        }
      } catch (err) {
            console.log(err);
      }
    }
  }
}

if(removeBtn) {
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", deleteHandler);
  }
}
