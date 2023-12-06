const pageForm = document.getElementById("main-form");

pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInputField = document.getElementById("task");

  console.log(taskInputField.value);

  const tasklist = document.createElement("ul");

  tasklist.innerHTML = `
        <li><i class="fas fa-circle"></i>  ${taskInputField.value}  </li>
        `;
  const tasklists = document.getElementById("listatask");
  tasklist.addEventListener("click", function (e) {
    if (e.target.style.textDecorationLine !== "line-through") {
      e.target.style.textDecorationLine = "line-through";
    } else {
      e.target.style.textDecorationLine = "none";
    }
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
