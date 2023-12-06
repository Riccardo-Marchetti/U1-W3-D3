const pageForm = document.getElementById("main-form");

// ora dobbiamo interagire con la sua operazione di invio, che in inglese viene chiamata "submit"
pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // ad esempio, recuperare i valori del form!
  console.log("Comincio a recuperare i dati del form");

  // per recuperare il valore dei campi input, prima di tutto seleziono dal form i campi input:
  const taskInputField = document.getElementById("task"); // riferimento all'input del nome

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
