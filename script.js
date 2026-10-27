// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===== TYPING EFFECT =====
const phrases = [
  'Python Development',
  'SAS → Python Migration',
  'Data Engineering',
  'Azure Cloud Solutions',
  'ML & Analytics',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed');

function type() {
  const current = phrases[phraseIdx];
  typedEl.textContent = deleting
    ? current.substring(0, charIdx--)
    : current.substring(0, charIdx++);

  let delay = deleting ? 60 : 100;

  if (!deleting && charIdx === current.length + 1) {
    delay = 1800; deleting = true;
  } else if (deleting && charIdx === 0) {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

// ===== SCROLL ANIMATIONS =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-card, .project-card, .timeline-item, .about-grid, .contact-grid')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

// ===== SKILL BAR ANIMATION =====
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => barObserver.observe(el));

// ===== CONTACT FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
  btn.style.color = '#0a0e1a';
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (!link) return;
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
      link.style.color = 'var(--accent)';
    }
  });
});

// ===== CHATBOT =====
const faqs = [
  {
    keys: ['skill', 'tech', 'know', 'technology', 'stack'],
    answer: '🛠️ Yogesh is skilled in:\n• Python, Pandas, NumPy, Scikit-learn\n• Matplotlib, Seaborn, Plotly\n• SQL, Oracle DB\n• Azure (ADF, Blob, SQL)\n• Git & AI/LLM Tools'
  },
  {
    keys: ['experience', 'year', 'work', 'background', 'how long'],
    answer: '💼 Yogesh has 9+ years of experience as a Sr. Technical Lead Engineer at HCL Technologies, specializing in Python-based data engineering and SAS to Python migration.'
  },
  {
    keys: ['project', 'built', 'portfolio', 'work done', 'github'],
    answer: '🚀 Key projects:\n• SAS → Python Migration Engine\n• Sales Dashboard (Power BI)\n• Stock Trend Analyzer (Python)\n• Azure Data Pipeline\n\nCheck them at github.com/Yogesh1593'
  },
  {
    keys: ['contact', 'email', 'phone', 'reach', 'hire', 'connect', 'linkedin'],
    answer: '📬 You can reach Yogesh at:\n• Email: yogeshkumar1593@gmail.com\n• Phone: (+91) 8700148175\n• LinkedIn: linkedin.com/in/yogesh-kumar-6ab737123\n• GitHub: github.com/Yogesh1593'
  },
  {
    keys: ['python', 'pandas', 'numpy', 'scikit', 'matplotlib', 'seaborn', 'plotly'],
    answer: '🐍 Yogesh is an expert in Python data stack — Pandas & NumPy for data manipulation, Scikit-learn for ML, and Matplotlib/Seaborn/Plotly for visualization.'
  },
  {
    keys: ['sas', 'migration', 'reengineering', 're-engineering'],
    answer: '🔄 Yogesh specializes in re-engineering legacy SAS-based analytical systems into modern Python solutions, reducing processing time significantly using Pandas, NumPy & SQL.'
  },
  {
    keys: ['azure', 'cloud', 'adf', 'blob', 'microsoft'],
    answer: '☁️ Yogesh works with Azure services including Azure Data Factory (ADF), Azure Blob Storage, and Azure SQL to build scalable cloud data pipelines.'
  },
  {
    keys: ['sql', 'oracle', 'database', 'db', 'query'],
    answer: '🗄️ Yogesh has strong expertise in SQL and Oracle DB — complex queries, stored procedures, data modeling, and query optimization.'
  },
  {
    keys: ['ai', 'ml', 'machine learning', 'llm', 'artificial'],
    answer: '🤖 Yogesh works with AI/LLM tools for prompt engineering and AI-assisted development. He also builds ML models using Scikit-learn for predictive analytics.'
  },
  {
    keys: ['resume', 'cv', 'download'],
    answer: '📄 You can download Yogesh\'s resume directly from the hero section using the green "Resume" button at the top of this page!'
  },
  {
    keys: ['name', 'who', 'about', 'introduce', 'tell me'],
    answer: '👋 Yogesh Kumar is a Sr. Technical Lead Engineer with 9+ years of experience at HCL Technologies. He specializes in Python data engineering, SAS migration, and Azure cloud solutions.'
  },
  {
    keys: ['hcl', 'company', 'employer', 'organization'],
    answer: '🏢 Yogesh currently works at HCL Technologies as a Sr. Technical Lead Engineer, leading data engineering projects and SAS to Python migrations.'
  },
];

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function toggleChat() {
  const box = document.getElementById('chat-box');
  const icon = document.getElementById('chat-icon');
  box.classList.toggle('open');
  icon.className = box.classList.contains('open') ? 'fas fa-times' : 'fas fa-robot';
}

function appendMsg(text, type) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerHTML = `<p>${text.replace(/\n/g, '<br>')}</p><span class="time">${getTime()}</span>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg bot typing';
  div.id = 'typing-indicator';
  div.innerHTML = `<p><div class="typing-dots"><span></span><span></span><span></span></div></p>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

function getBotReply(input) {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.keys.some(k => lower.includes(k))) return faq.answer;
  }
  return "🤔 I'm not sure about that. Try asking about Yogesh's skills, experience, projects, or contact info! Or reach him directly at yogeshkumar1593@gmail.com";
}

function sendMsg() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  appendMsg(text, 'user');
  input.value = '';
  showTyping();
  setTimeout(() => {
    removeTyping();
    appendMsg(getBotReply(text), 'bot');
  }, 900);
}

function quickAsk(topic) {
  const map = {
    skills: 'What are his skills?',
    experience: 'Tell me about his experience',
    projects: 'What projects has he built?',
    contact: 'How can I contact him?'
  };
  document.getElementById('chat-input').value = map[topic];
  sendMsg();
}
