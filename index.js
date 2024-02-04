const form = document.getElementById("user-form");
const table = document.getElementById("table-div");
const userList = [];

function updateUserTable() {
	const tbody = table.querySelector("tbody");

	tbody.innerHTML = "";

	userList.forEach((user) => {
		const row = document.createElement("tr");

		Object.values(user).forEach((value) => {
			const cell = document.createElement("td");
			cell.textContent = value;
			row.appendChild(cell);
		});

		tbody.appendChild(row);
	});
}

function userSubmit(event) {
	event.preventDefault();

	const formData = new FormData(event.target);

	const formValues = {};

	formData.forEach((value, key) => {
		formValues[key] = value;
	});

	console.log("Form values:", formValues);
	userList.push(formValues);
	updateUserTable();

	form.reset();
}
