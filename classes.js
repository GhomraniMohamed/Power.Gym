let classes = [
    { name: "Cardio Blast", trainer: "Ahmed Benali", day: "Sunday", time: "10:00 - 11:00", difficulty: "Beginner" },
    { name: "Weight Training", trainer: "Omar Khaled", day: "Monday", time: "14:00 - 15:30", difficulty: "Intermediate" },
    { name: "Yoga", trainer: "Sara Martin", day: "Wednesday", time: "09:00 - 10:00", difficulty: "Beginner" },
    { name: "Fitness", trainer: "Sara Martin", day: "Thursday", time: "17:00 - 18:30", difficulty: "Advanced" },
    { name: "Swimming", trainer: "Daniel Noor", day: "Thursday", time: "17:00 - 18:30", difficulty: "Advanced" },
];

function renderTable() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
    classes.forEach(c => {
        tableBody.innerHTML += `
            <tr>
                <td>${c.name}</td>
                <td>${c.trainer}</td>
                <td>${c.day}</td>
                <td>${c.time}</td>
                <td>${c.difficulty}</td>
            </tr>
        `;
    });
}

document.addEventListener("DOMContentLoaded", renderTable);