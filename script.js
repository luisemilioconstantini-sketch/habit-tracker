const habitInput = document.getElementById("habitInput");
const addButton = document.getElementById("addButton");
const habitList = document.getElementById("habitList");

addButton.addEventListener("click", function () {
  const habitText = habitInput.value.trim();

  if (habitText === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = habitText;
  habitList.appendChild(listItem);

  habitInput.value = "";
});