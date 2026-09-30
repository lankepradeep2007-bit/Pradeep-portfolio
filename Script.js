/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

    menuBtn.textContent = "☰";

  });

});


/* =========================================
   PROJECT DATA
========================================= */

const projects = {

  student: {
    icon: "🎓",

    title: "Student Predictor",

    description:
      "This project uses Python and machine learning concepts to predict student outcomes based on input data.",

    tags: [
      "Python",
      "Machine Learning"
    ]
  },


  movie: {
    icon: "🎬",

    title: "Movie Recommendation",

    description:
      "A movie recommendation system that uses recommendation concepts to suggest movies based on user preferences.",

    tags: [
      "Python",
      "AI",
      "Recommendation System"
    ]
  },


  attendance: {
    icon: "📷",

    title: "Face Attendance",

    description:
      "An AI-based project concept that can be developed to automate attendance using computer vision and face recognition.",

    tags: [
      "Artificial Intelligence",
      "Computer Vision"
    ]
  },


  fee: {
    icon: "💳",

    title: "College Fee Payment",

    description:
      "A web application concept designed to make college fee payment easier using a simple and user-friendly interface.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }

};


/* =========================================
   PROJECT MODAL
========================================= */

const projectButtons =
  document.querySelectorAll(".project-btn");

const projectModal =
  document.getElementById("projectModal");

const modalIcon =
  document.getElementById("modalIcon");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalTags =
  document.getElementById("modalTags");

const closeModal =
  document.getElementById("closeModal");

const modalCloseBtn =
  document.getElementById("modalCloseBtn");


projectButtons.forEach(button => {

  button.addEventListener("click", () => {

    const projectName =
      button.getAttribute("data-project");

    const project =
      projects[projectName];

    if (!project) return;


    modalIcon.textContent =
      project.icon;

    modalTitle.textContent =
      project.title;

    modalDescription.textContent =
      project.description;


    modalTags.innerHTML = "";

    project.tags.forEach(tag => {

      const span =
        document.createElement("span");

      span.textContent = tag;

      modalTags.appendChild(span);

    });


    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


/* =========================================
   CLOSE MODAL
========================================= */

function closeProjectModal() {

  projectModal.classList.remove("active");

  document.body.style.overflow = "";

}


closeModal.addEventListener(
  "click",
  closeProjectModal
);


modalCloseBtn.addEventListener(
  "click",
  closeProjectModal
);


/* Close modal when clicking outside */

projectModal.addEventListener("click", (event) => {

  if (event.target === projectModal) {

    closeProjectModal();

  }

});


/* Close modal using Escape key */

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closeProjectModal();

  }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();


  if (!name || !email || !message) {

    formMessage.textContent =
      "Please fill in all fields.";

    formMessage.style.color =
      "#dc2626";

    return;

  }


  formMessage.textContent =
    `Thank you, ${name}! Your message is ready to send. 🚀`;

  formMessage.style.color =
    "#16a34a";


  contactForm.reset();

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================
   SIMPLE SCROLL ANIMATION
========================================= */

const cards =
  document.querySelectorAll(
    ".about-card, .skill-card, .project-card"
  );


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: 0.15
    }
  );


cards.forEach(card => {

  card.style.opacity = "0";

  card.style.transform =
    "translateY(30px)";

  card.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(card);

});
