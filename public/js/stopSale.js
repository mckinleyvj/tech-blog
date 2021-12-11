const stopSale = document.querySelector("#removeFS");

const removeFromSale = async (event) => {
  event.preventDefault();
  try {
    console.log("testing");
    const id = document.querySelector("#product_id").value.trim();

    const userChange = await fetch(`/api/products/notForSale`, {
      method: "PUT",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!userChange) {
      return;
    }
    location.reload();
    window.location.replace("/dashboard");
  } catch (err) {
    console.log(err);
  }
};

stopSale.addEventListener("click", removeFromSale);
