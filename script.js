let firstState = document.querySelector(".first-state");
let secondState = document.querySelector(".second-state");
let taskMenu = document.querySelector("#main-menu-task");
let projectMenu = document.querySelector("#main-menu-project");
let reminderMenu = document.querySelector("#main-menu-reminder");

function changeState(state) {
  if (state === "taskMenu") {
    firstState.style.display = "none";
    secondState.style.display = "block";

    projectMenu.style.display = "none";
    reminderMenu.style.display = "none";

    taskMenu.style.display = "block";
  } else if (state === "projectMenu") {
    firstState.style.display = "none";
    secondState.style.display = "block";
    taskMenu.style.display = "none";
    reminderMenu.style.display = "none";

    projectMenu.style.display = "block";
  } else {
    firstState.style.display = "none";
    secondState.style.display = "block";
    taskMenu.style.display = "none";
    projectMenu.style.display = "none";

    reminderMenu.style.display = "block";
  }
}

function changeMenu(menu) {
  if (menu === "taskMenu") {
    projectMenu.style.display = "none";
    reminderMenu.style.display = "none";

    taskMenu.style.display = "block";
  } else if (menu === "projectMenu") {
    taskMenu.style.display = "none";
    reminderMenu.style.display = "none";

    projectMenu.style.display = "block";
  } else {
    taskMenu.style.display = "none";
    projectMenu.style.display = "none";

    reminderMenu.style.display = "block";
  }
}

/*Tasks script*/
function taskInput() {
  event.preventDefault();
  let task = document.querySelector("#task-input").value;
  let taskDeadline = document.querySelector("#task-input-deadline").value;

  if (task.trim() === "") {
    alert("Task name cannot be empty!");
    return;
  }

  let taskArr = {
    task: task,
    taskDeadline: taskDeadline,
    taskCompleted: false,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(taskArr);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function displayTasks() {
  let tasksContainer = document.querySelector(".task-list");
  tasksContainer.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(function (task, taskIndex) {
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");

    // Add a class based on completion status
    taskElement.classList.toggle("completed", task.taskCompleted);

    taskElement.innerHTML = `
                                <p class="task-text" > ${task.task}</p>
                                <p class="task-deadline">Deadline: ${task.taskDeadline}</p>
                                <div class="task-control-buttons">
                                    <button class="complete-button" onclick="completeTask(${taskIndex})">Complete</button>
                                    <button class="edit-button" onclick="editTask(${taskIndex})">Edit</button>
                                    <button class="delete-button" onclick="deleteTask(${taskIndex})">Delete</button>
                                </div>
                             
                             `;
    tasksContainer.appendChild(taskElement);
  });
}

function completeTask(taskIndex) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Toggle the completion status
  tasks[taskIndex].taskCompleted = !tasks[taskIndex].taskCompleted;

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function editTask(taskIndex) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Prompt the user for a new task name and deadline
  let editedTask = prompt(
    "Edit task (name and deadline separated by a comma): ",
    `${tasks[taskIndex].task}, ${tasks[taskIndex].taskDeadline}`
  );

  if (editedTask !== null) {
    // Split the input into task name and deadline
    let [editedTaskName, editedTaskDeadline] = editedTask
      .split(",")
      .map((item) => item.trim());

    // Update the task in the array
    tasks[taskIndex].task = editedTaskName;
    tasks[taskIndex].taskDeadline = editedTaskDeadline;

    // Save the updated array back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Refresh the displayed tasks
    displayTasks();
  }
}

function deleteTask(taskIndex) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.splice(taskIndex, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function searchTask() {
  let searchTask = document.getELement
}
/*Tasks script*/

/*projects script*/
function projectInput() {
  event.preventDefault();
  console.log(localStorage);

  let project = document.querySelector("#project-input").value;
  let projectDeadline = document.querySelector("#project-input-deadline").value;

  if (project.trim() === "") {
    alert("Project name cannot be empty!");
    return;
  }

  let projectArr = {
    project: project,
    projectDeadline: projectDeadline,
    projectCompleted: false,
  };

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.push(projectArr);

  localStorage.setItem("projects", JSON.stringify(projects));

  displayProjects();
}

function displayProjects() {
  let projectsContainer = document.querySelector(".project-list");
  projectsContainer.innerHTML = "";

  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.forEach(function (project, projectIndex) {
    let projectElement = document.createElement("div");
    projectElement.classList.add("project");

    projectElement.classList.toggle("completed", project.projectCompleted);
    projectElement.innerHTML = `<p class="project-text">${project.project}</p>
                                 <p class="project-deadline-"> ${project.projectDeadline}</p>
                                <div class="project-control-buttons">
                                    <button class="complete-button" onclick="completeProject(${projectIndex})">Complete</button>
                                    <button class="edit-button" onclick="editProject(${projectIndex})">Edit</button>
                                    <button class="delete-button" onclick="deleteProject(${projectIndex})">Delete</button>
                                </div>`;

    projectsContainer.appendChild(projectElement);
  });
}

function completeProject(projectIndex) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects[projectIndex].projectCompleted =
    !projects[projectIndex].projectCompleted;

  localStorage.setItem("projects", JSON.stringify(projects));

  displayProjects();
}

function editProject(projectIndex) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  let editedProject = prompt(
    "Edit Task (name and deadline separated by a comma): ",
    `${projects[projectIndex].project}, ${projects[projectIndex].projectDeadline}`
  );

  if (editedProject !== null) {
    let [editedProjectName, editedProjectDeadline] = editedProject
      .split(",")
      .map((item) => item.trim());

    projects[projectIndex].project = editedProjectName;
    projects[projectIndex].projectDeadline = editedProjectDeadline;

    localStorage.setItem("projects", JSON.stringify(projects));

    displayProjects();
  }
}

function deleteProject(projectIndex) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.splice(projectIndex, 1);

  localStorage.setItem("projects", JSON.stringify(projects));

  displayProjects();
}

function searchProject() {
  
}
/*projects script*/

/*reminders script*/
function reminderInput() {
  event.preventDefault();
  console.log(localStorage);

  let reminder = document.querySelector("#reminder-input").value;
  let reminderDeadline = document.querySelector(
    "#reminder-input-deadline"
  ).value;

  if (reminder.trim() === "") {
    alert("Reminder name cannot be empty");
    return;
  }

  let reminderArr = {
    reminder: reminder,
    reminderDeadline: reminderDeadline,
    reminderCompleted: false,
  };

  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  reminders.push(reminderArr);

  localStorage.setItem("reminders", JSON.stringify(reminders));

  displayReminders();
}

function displayReminders() {
  let remindersContainer = document.querySelector(".reminder-list");
  remindersContainer.innerHTML = "";

  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  reminders.forEach(function (reminder, reminderIndex) {
    let reminderElement = document.createElement("div");
    reminderElement.classList.add("reminder");

    reminderElement.classList.toggle("completed", reminder.reminderCompleted);
    reminderElement.innerHTML = `<p class="reminder-text">${reminder.reminder}</p>
                                  </p class="reminder-deadline">${reminder.reminderDeadline}</p>
                                <div class="reminder-control-buttons">
                                 <button class="complete-button" onclick="completeReminder(${reminderIndex})">Complete</button>
                                 <button class="edit-button" onclick="editReminder(${reminderIndex})">Edit</button>
                                 <button class="delete-button" onclick="deleteReminder(${reminderIndex})">Delete</button>
                                 </div>`;
    remindersContainer.appendChild(reminderElement);
  });
}

function completeReminder(reminderIndex) {
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  reminders[reminderIndex].reminderCompleted =
    !reminders[reminderIndex].reminderCompleted;

  localStorage.setItem("reminders", JSON.stringify(reminders));

  displayReminders();
}

function editReminder(reminderIndex) {
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  let editedReminder = prompt(
    "Edit Reminder (name and deadline separated by a comma): ",
    `${reminders[reminderIndex].reminder}, ${reminders[reminderIndex].reminderDeadline}`
  );

  if (editedReminder !== null) {
    let [editedReminderName, editedReminderDeadline] = editedReminder
      .split(",")
      .map((item) => item.trim());

    reminders[reminderIndex].reminder = editedReminderName;
    reminders[reminderIndex].reminderDeadline = editedReminderDeadline;

    localStorage.setItem("reminders", JSON.stringify(reminders));

    displayReminders();
  }
}

function deleteReminder(reminderIndex) {
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  reminders.splice(reminderIndex, 1);

  localStorage.setItem("reminders", JSON.stringify(reminders));

  displayReminders();
}

function searchReminder() {
  
}
/*reminders script*/

displayTasks();
displayProjects();
displayReminders();


