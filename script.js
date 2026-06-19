const habitInput = document.getElementById("habitInput");
const addButton = document.getElementById("addButton");
const habitList = document.getElementById("habitList");

addButton.addEventListener("click", function () {
  const habitText = habitInput.value.trim();

  if (habitText === "") {
    return;
  }

  addHabitToList(habitText);
  habitInput.value = "";
});

function addHabitToList(habitText) {
  const listItem = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const habitSpan = document.createElement("span");
  habitSpan.textContent = habitText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  checkbox.addEventListener("change", function () {
    habitSpan.classList.toggle("completed", checkbox.checked);
  });

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(habitSpan);
  listItem.appendChild(deleteButton);

  habitList.appendChild(listItem);
}