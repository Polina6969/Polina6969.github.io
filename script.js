console.log("Портфолио Полины запущено 🌸");

const langSwitch = document.getElementById("lang-switch");
let currentLang = "ru";

const translations = {
  kk: {
    job: "Фронтенд-әзірлеуші және дизайнер",
    aboutTitle: "Мен туралы",
    aboutText:
      "Мен — заманауи және әдемі сайттар жасайтын жас әзірлеушімін 🌸. Бағдарламалау мен шығармашылықты жақсы көремін.",
    skillsTitle: "Дағдылар",
    skillsList: [
      "🌐 HTML — сайт құрылымы",
      "🎨 CSS — дизайн және стильдер",
      "⚙️ JavaScript — интерактивтілік",
      "🐍 Python — логика мен автоматтандыру",
      "🧠 React — заманауи интерфейстер",
      "💼 GitHub — топтық жұмыс және код",
    ],
    toolsTitle: "Құралдар",
    toolsList: ["🎨 Figma", "💻 Visual Studio Code", "⚡ Git", "🧩 Canva", "🌈 Photoshop"],
    certTitle: "Менің сертификаттарым",
    button: "Русский 🇷🇺",
  },
  ru: {
    job: "Фронтенд-разработчик и дизайнер",
    aboutTitle: "Обо мне",
    aboutText:
      "Я — начинающий разработчик, создаю современные и удобные сайты с красивым дизайном 🌸. Люблю программирование и творческий подход.",
    skillsTitle: "Навыки",
    skillsList: [
      "🌐 HTML — структура сайтов",
      "🎨 CSS — дизайн и стили",
      "⚙️ JavaScript — интерактивность",
      "🐍 Python — логика и автоматизация",
      "🧠 React — современные интерфейсы",
      "💼 GitHub — командная работа и код",
    ],
    toolsTitle: "Инструменты",
    toolsList: ["🎨 Figma", "💻 Visual Studio Code", "⚡ Git", "🧩 Canva", "🌈 Photoshop"],
    certTitle: "Мои сертификаты",
    button: "Қазақ тілі 🇰🇿",
  },
};

langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "ru" ? "kk" : "ru";
  const t = translations[currentLang];

  document.getElementById("job-title").textContent = t.job;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("skills-title").textContent = t.skillsTitle;
  document.getElementById("tools-title").textContent = t.toolsTitle;
  document.getElementById("cert-title").textContent = t.certTitle;
  langSwitch.textContent = t.button;

  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = t.skillsList.map((item) => `<li>${item}</li>`).join("");

  const toolsList = document.getElementById("tools-list");
  toolsList.innerHTML = t.toolsList.map((item) => `<li>${item}</li>`).join("");
});

// Загрузка сертификатов
const fileInput = document.getElementById("fileInput");
const certContainer = document.getElementById("certContainer");

fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      certContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

