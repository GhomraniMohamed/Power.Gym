
const trainersData = [
  {
    id: 1,
    name: "Adam Benali",
    specialty: "Bodybuilding",
    experience: 8,
    photo: "images/trainer1.jpg",
    bio: "Adam is a certified bodybuilding coach with 8 years of experience helping clients build strength and muscle mass.",
    schedule: ["Monday 08:00", "Wednesday 10:00", "Friday 08:00"],
    email: "adam.benali@powergym.com",
    certifications: ["NASM-CPT", "ISSA Bodybuilding"]
  },
  {
    id: 2,
    name: "Sara Meziani",
    specialty: "Yoga & Flexibility",
    experience: 5,
    photo: "images/trainer2.jpg",
    bio: "Sara specializes in yoga and mobility training. Her sessions focus on breathing, balance, and mental clarity.",
    schedule: ["Tuesday 07:00", "Thursday 09:00", "Saturday 08:00"],
    email: "sara.meziani@powergym.com",
    certifications: ["RYT-200", "FRC Mobility Specialist"]
  },
  {
    id: 3,
    name: "Karim Hadj",
    specialty: "CrossFit & HIIT",
    experience: 6,
    photo: "images/trainer3.jpg",
    bio: "Karim is an energetic CrossFit coach who pushes athletes to their limits with functional training and HIIT circuits.",
    schedule: ["Monday 06:00", "Wednesday 06:00", "Friday 06:00"],
    email: "karim.hadj@powergym.com",
    certifications: ["CrossFit L2", "ACE-CPT"]
  },
  {
    id: 4,
    name: "Lina Cherif",
    specialty: "Cardio & Weight Loss",
    experience: 4,
    photo: "images/trainer4.jpg",
    bio: "Lina designs personalized cardio programs to help members achieve sustainable weight loss and improve endurance.",
    schedule: ["Tuesday 08:00", "Thursday 08:00", "Sunday 09:00"],
    email: "lina.cherif@powergym.com",
    certifications: ["ACE-CPT", "Precision Nutrition L1"]
  }
];


function renderTrainers(data) {
  const container = document.getElementById("trainers-container");
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <p>No trainers found. Try a different search.</p>
      </div>`;
    return;
  }

  container.innerHTML = data.map(trainer => `
    <div class="card trainer-card" data-id="${trainer.id}" onclick="openModal(${trainer.id})">
      <img src="${trainer.photo}" alt="${trainer.name}" onerror="this.src='images/placeholder.jpg'">
      <h3>${trainer.name}</h3>
      <p><span class="label">Specialty:</span> <span class="value">${trainer.specialty}</span></p>
      <p><span class="label">Experience:</span> <span class="value">${trainer.experience} years</span></p>
      <button class="btn" onclick="openModal(${trainer.id}); event.stopPropagation();">
        View Profile
      </button>
    </div>
  `).join("");
}

const trainers = [
  {
    id: 1,
    name: "Ahmed Benali",
    specialty: "Strength Training & Cardio",
    experience: 5,
    photo: "trainer.jpg",
    bio: "Ahmed is a certified strength and conditioning coach with a passion for helping clients reach peak physical performance through structured progressive overload and metabolic conditioning.",
    schedule: ["Monday – Strength Training 08:00", "Wednesday – Cardio Blast 10:00", "Saturday – Full Body 09:00"],
  },
  {
    id: 2,
    name: "Sarah Martin",
    specialty: "Yoga & Fitness",
    experience: 4,
    photo: "Trainer2.jpg",
    bio: "Sarah blends mindfulness and movement into every session, offering a balanced approach to flexibility, breath control, and functional fitness for all levels.",
    schedule: ["Tuesday – Morning Yoga 07:00", "Thursday – Pilates Flow 09:00", "Sunday – Stretch & Recover 08:00"],
  },
  {
    id: 3,
    name: "Omar Khaled",
    specialty: "Muscle Building",
    experience: 7,
    photo: "weight1.jpg",
    bio: "Omar specializes in hypertrophy-focused programming, combining evidence-based nutrition guidance with targeted resistance training to maximize muscle development.",
    schedule: ["Monday – Upper Body 11:00", "Wednesday – Lower Body 11:00", "Friday – Push/Pull 10:00"],
  },
  {
    id: 4,
    name: "Daniel Noor",
    specialty: "Swimming",
    experience: 12,
    photo: "Swim.jpg",
    bio: "With over a decade of competitive swimming experience, Daniel provides technique-first coaching for beginners and performance optimization for advanced swimmers.",
    schedule: ["Tuesday – Swim Basics 06:00", "Thursday – Advanced Laps 06:00", "Saturday – Open Water Prep 07:00"],
  },
];
 
const grid = document.getElementById("trainers-grid");
const searchInput = document.getElementById("trainer-search");
const noResults = document.getElementById("no-results");
const modal = document.getElementById("trainer-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
 
function createCard(trainer) {
  const article = document.createElement("article");
  article.className = "card";
  article.setAttribute("role", "listitem");
  article.dataset.trainerId = trainer.id;
 
  article.innerHTML = `
    <figure>
      <img src="${trainer.photo}" alt="${trainer.name}" loading="lazy" onerror="this.src='https://placehold.co/300x300?text=Trainer'">
      <figcaption class="visually-hidden">${trainer.name}</figcaption>
    </figure>
    <h3>${trainer.name}</h3>
    <p><span class="label">Specialty:</span> <span class="value">${trainer.specialty}</span></p>
    <p><span class="label">Experience:</span> <span class="value">${trainer.experience} Years</span></p>
    <button class="btn view-profile-btn" data-id="${trainer.id}">View Profile</button>
  `;
 
  return article;
}
 
function renderTrainers(list) {
  grid.innerHTML = "";
 
  if (list.length === 0) {
    noResults.hidden = false;
    return;
  }
 
  noResults.hidden = true;
  list.forEach((trainer) => grid.appendChild(createCard(trainer)));
}
 
function filterTrainers(query) {
  const normalized = query.trim().toLowerCase();
 
  if (!normalized) return trainers;
 
  return trainers.filter(
    (t) =>
      t.name.toLowerCase().includes(normalized) ||
      t.specialty.toLowerCase().includes(normalized)
  );
}
 
function openModal(trainerId) {
  const trainer = trainers.find((t) => t.id === trainerId);
  if (!trainer) return;
 
  document.getElementById("modal-photo").src = trainer.photo;
  document.getElementById("modal-photo").alt = trainer.name;
  document.getElementById("modal-name").textContent = trainer.name;
  document.getElementById("modal-specialty").textContent = trainer.specialty;
  document.getElementById("modal-experience").textContent = `${trainer.experience} Years`;
  document.getElementById("modal-bio").textContent = trainer.bio;
 
  const scheduleList = document.getElementById("modal-schedule");
  scheduleList.innerHTML = trainer.schedule
    .map((item) => `<li>${item}</li>`)
    .join("");
 
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalCloseBtn.focus();
}
 
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
 
searchInput.addEventListener("input", (e) => {
  renderTrainers(filterTrainers(e.target.value));
});
 
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".view-profile-btn");
  if (!btn) return;
  openModal(Number(btn.dataset.id));
});
 
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
 
modalCloseBtn.addEventListener("click", closeModal);
 
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});
 
renderTrainers(trainers);