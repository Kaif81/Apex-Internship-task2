

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.body.classList.contains("dark") ? "🌙" : "🌞";
  document.getElementById("themeToggle").textContent = icon;
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  if (!name || !email || !message) {
    msg.textContent = "❗ All fields are required.";
    msg.style.color = "crimson";
  } else if (!emailPattern.test(email)) {
    msg.textContent = "❗ Enter a valid email.";
    msg.style.color = "crimson";
  } else {
    msg.textContent = "✅ Message sent successfully!";
    msg.style.color = "limegreen";
    this.reset();
  }
});

// Add task
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
