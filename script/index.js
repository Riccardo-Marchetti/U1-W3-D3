const pageForm = document.getElementById("main-form");

pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInputField = document.getElementById("task");

  console.log(taskInputField.value);

  const tasklist = document.createElement("ul");

  tasklist.innerHTML = `
        <li>${taskInputField.value}</li>
        `;
  const tasklists = document.getElementById("listatask");
  tasklist.addEventListener("click", function (e) {
    e.target.style.textDecorationLine = "line-through";
  });

  tasklists.appendChild(tasklist);
  taskInputField.value = "";

  const button = createElement("button");
  button.innerText = "Delete";
  button.appendChild(tasklist);
  button.addEventListener(function (e) {
    tasklist.remove();
  });
});
