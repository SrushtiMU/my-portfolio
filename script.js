function addRecommendation() {
  let input = document.getElementById("rec-input");
  let value = input.value;

  if (value === "") {
    alert("Please enter a recommendation");
    return;
  }

  let para = document.createElement("p");
  para.textContent = value;

  document.getElementById("rec-list").appendChild(para);

  alert("Thank you for your recommendation!");

  input.value = "";
}