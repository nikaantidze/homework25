const form = document.querySelector("form");
const popUp = document.querySelector("#pop-up");
const popUpCloseBtn = document.querySelector("#pop-up-close-btn");
const sendMsg = document.querySelector("#send-msg");
const inputs = document.querySelectorAll("#name, #email, #message");
const textArea = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); 
  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    popUp.style.display = "block";
  
    textArea.value = "";
    inputs.forEach((input) => {
      input.value = "";
    });
  } else {
    alert("Form submission failed. Please try again later.");
  }
});

popUpCloseBtn.addEventListener("click", function () {
  popUpCloseBtn.style.display = "none";
  popUp.style.display = "none";
});
