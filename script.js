let students = JSON.parse(localStorage.getItem("students")) || [];

function renderStudents() {
  const table = document.getElementById("tableBody");
  table.innerHTML = "";

  students.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  if (name === "" || age === "") return;

  students.push({ name, age });

  document.getElementById("name").value = "";
  document.getElementById("age").value = "";

  renderStudents();
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

renderStudents();