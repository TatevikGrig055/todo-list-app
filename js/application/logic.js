const tasks = [
    { id: 1, title: "Learn JS" },
    { id: 2, title: "Learn CSS" },
    { id: 3, title: "Learn HTML" }
];

let maxId = 0;

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id > maxId) {
        maxId = tasks[i].id;
    }
    console.log(tasks[i]);
}

function logic(title) {
    const task = {
        id: 1;
        title: title;
        completed: false
    };
    return task;


}