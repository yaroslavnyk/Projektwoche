function toggleSubtopics(id) {
  const subtopics = document.getElementById(id);

  // Use style max-height property to toggle
  if (subtopics.style.maxHeight === "0px" || !subtopics.style.maxHeight) {
    subtopics.style.maxHeight = subtopics.scrollHeight + "px"; // Expand to fit content
  } else {
    subtopics.style.maxHeight = "0px"; // Collapse
  }
}

// Responsive Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav ul');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});
