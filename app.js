/**
 * IIC 3.0 Hackathon - Problem Statements & Prototype Engine
 * Department of IoT & Intelligent Systems, Manipal University Jaipur
 */

const PROBLEM_STATEMENTS = [
  {
    id: "IIC-AI-01",
    theme: "AI & Systems",
    category: "ai",
    title: "Autonomous Agentic Workflows & Multi-Modal Intelligence",
    shortDesc: "Architect resilient autonomous multi-agent systems and multi-modal AI capable of proactive domain task orchestration and automated reasoning under uncertainty.",
    fullDesc: "Modern enterprises and research systems are constrained by isolated single-turn AI models. This challenge calls for the design of autonomous agentic architectures that can synthesize cross-modal inputs (vision, text, telemetry, sensor feeds), manage long-term state memory, orchestrate tool workflows, and self-correct across complex decision loops in mission-critical environments.",
    objectives: [
      "Develop multi-agent orchestration architecture with dynamic role delegation.",
      "Implement multi-modal sensory inputs (visual feeds, unstructured data, sensor streams).",
      "Ensure robust guardrails, audit logging, and verifiable reasoning steps."
    ],
    techStack: ["Python", "LangChain / CrewAI / AutoGen", "PyTorch / TensorFlow", "FastAPI", "Vector DBs (Chroma / Pinecone)"],
    deliverables: ["Working Autonomous Agent Pipeline", "GitHub Source Code", "Live Jury Demonstration"],
    difficulty: "Advanced",
    tags: ["Agentic AI", "Multi-Modal", "Autonomous Systems", "LLMs"]
  },
  {
    id: "IIC-IOT-02",
    theme: "IoT & Smart Cities",
    category: "iot",
    title: "Low-Latency Edge IoT & Intelligent Urban Infrastructure",
    shortDesc: "Engineer intelligent Edge IoT networks with decentralized sensing for smart urban mobility, grid monitoring, and automated disaster resilience.",
    fullDesc: "Rapid urbanization puts immense pressure on public utilities and energy grids. Participants must design an end-to-end edge-computing IoT pipeline combining low-power microcontroller nodes, distributed edge processing, and resilient mesh/MQTT communication for proactive urban lifecycle monitoring and crisis prevention.",
    objectives: [
      "Hardware-software edge node architecture using ESP32/Raspberry Pi or simulated IoT testbeds.",
      "Fault-tolerant telemetry pipeline with secure MQTT / CoAP over TLS.",
      "Predictive edge ML inference for immediate anomaly detection without cloud latency."
    ],
    techStack: ["ESP32 / Arduino / RPi", "MQTT / WebSockets", "Embedded C++ / MicroPython", "Node-RED", "Grafana / InfluxDB"],
    deliverables: ["Hardware / Simulation Edge Node", "Live Telemetry Dashboard", "GitHub Repository"],
    difficulty: "Intermediate",
    tags: ["Edge Computing", "Smart Cities", "Sensor Networks", "MQTT"]
  },
  {
    id: "IIC-MED-03",
    theme: "Healthcare",
    category: "health",
    title: "Remote Clinical Diagnostics & Wearable Health Telemetry",
    shortDesc: "Develop non-invasive wearable health monitoring and predictive clinical diagnostic engines to detect vitals anomalies in underserved regions.",
    fullDesc: "Inequitable access to medical specialists in rural communities leads to delayed diagnosis. This challenge invites solutions that leverage compact biosensors, smart edge wearables, and federated learning to continuously track vital signs, predict cardiac/respiratory distress, and alert caregivers in real-time.",
    objectives: [
      "Non-invasive continuous vitals analysis (ECG, PPG, SpO2, HRV, respiration).",
      "Explainable AI diagnostic assistant with clinical confidence scores.",
      "Privacy-first edge architecture (HIPAA / GDPR compliant design)."
    ],
    techStack: ["Bio-Sensors (MAX30102 / AD8232)", "Edge ML (TensorFlow Lite)", "Flutter / React Native", "FHIR Standards"],
    deliverables: ["Diagnostic App / Wearable Prototype", "Telemetry Pipeline", "Live Demonstration"],
    difficulty: "Advanced",
    tags: ["MedTech", "Wearables", "Federated Learning", "Telemedicine"]
  },
  {
    id: "IIC-ECO-04",
    theme: "CleanTech",
    category: "sustainability",
    title: "Smart Grid Renewable Balancing & Carbon Footprint Optimization",
    shortDesc: "Design algorithmic power scheduling and smart IoT sub-metering to optimize solar/wind integration and curtail carbon emissions dynamically.",
    fullDesc: "Renewable energy sources suffer from intermittency and grid load volatility. Participants will create an intelligent microgrid management system combining predictive weather/generation forecasting, automated demand-response algorithms, and smart battery storage optimization.",
    objectives: [
      "Predictive load forecasting and solar/wind harvest optimization.",
      "Decentralized peer-to-peer microgrid or automated load shedding algorithm.",
      "Carbon accounting dashboard with auditable ESG reporting metrics."
    ],
    techStack: ["Time-Series AI (Prophet / LSTM / XGBoost)", "Smart Energy Meters", "IoT Edge Gateways", "Python / React"],
    deliverables: ["Microgrid Optimization Algorithm", "Interactive ESG Dashboard", "Simulation Prototype"],
    difficulty: "Intermediate",
    tags: ["CleanTech", "Smart Grids", "Renewable Energy", "ESG"]
  },
  {
    id: "IIC-FIN-05",
    theme: "FinTech & Web3",
    category: "fintech",
    title: "Decentralized Fraud Immunity, Smart Escrows & Micro-Credit",
    shortDesc: "Build zero-knowledge verified financial identity protocols and automated micro-lending contracts to prevent transaction fraud and expand credit access.",
    fullDesc: "Financial fraud and the exclusion of unbanked populations from credit scoring stifle economic growth. This track challenges teams to engineer decentralized identity credentials, zero-knowledge verification frameworks, or automated liquidity/lending escrows for transparent micro-commerce.",
    objectives: [
      "Zero-Knowledge Proof (ZKP) identity or transaction verification.",
      "Smart contract escrow with multi-sig security and automated dispute resolution.",
      "Alternative credit underwriting scoring based on verifiable telemetry."
    ],
    techStack: ["Solidity / Rust", "Ethereum / Polygon / Starknet", "zk-SNARKs (snarkjs)", "Web3.js / Ethers.js", "Node.js"],
    deliverables: ["Smart Contract on Testnet", "dApp Frontend Interface", "Threat Analysis & Verification"],
    difficulty: "Advanced",
    tags: ["Web3", "Zero-Knowledge", "Smart Contracts", "DeFi"]
  },
  {
    id: "IIC-SEC-06",
    theme: "Cybersecurity",
    category: "security",
    title: "Proactive Zero-Trust Threat Hunting & IoT Botnet Defense",
    shortDesc: "Develop automated AI threat hunting, firmware integrity verification, and anomaly detection to neutralize ransomware and distributed IoT botnets.",
    fullDesc: "With billions of connected devices, modern networks face exponential surface attacks. This track challenges students to build automated cyber defense systems capable of behavioral packet inspection, automated honeypots, and software bill of materials (SBOM) scanning.",
    objectives: [
      "Real-time telemetry packet inspection for abnormal DNS / C2 channel behavior.",
      "Automated containment workflows isolating infected endpoints in sub-seconds.",
      "Hardware root-of-trust and secure boot verification for embedded endpoints."
    ],
    techStack: ["eBPF / Scapy / Wireshark APIs", "Snort / Suricata Integration", "Python / Go", "Docker / K8s Security"],
    deliverables: ["Threat Hunting Engine", "Automated Quarantine Workflow", "Live Incident Simulation"],
    difficulty: "Advanced",
    tags: ["Zero-Trust", "Botnet Defense", "eBPF", "Threat Hunting"]
  },
  {
    id: "IIC-EDU-07",
    theme: "EdTech",
    category: "edtech",
    title: "Adaptive Immersive Mentorship & Neuro-Inclusive Learning",
    shortDesc: "Create hyper-personalized AI tutors that adapt learning velocity, synthesize interactive spatial simulations, and support neurodiverse students.",
    fullDesc: "Traditional classrooms follow a one-size-fits-all model. Innovators in this track will engineer dynamic adaptive curricula engines, interactive WebXR / spatial learning modules, and real-time comprehension feedback systems.",
    objectives: [
      "Cognitive load and attention-aware adaptive learning pathways.",
      "Multi-modal generative explanations (text, diagram synthesis, interactive voice QA).",
      "Accessibility compliance (WCAG 2.2 AAA, text-to-speech)."
    ],
    techStack: ["Three.js / WebXR", "Generative AI API / Speech Models", "React / Next.js", "IndexedDB"],
    deliverables: ["Interactive Learning Web Application", "AI Tutoring Engine", "Live Demonstration"],
    difficulty: "Intermediate",
    tags: ["Adaptive AI", "Neurodiversity", "WebXR", "Personalized Tutoring"]
  },
  {
    id: "IIC-AGR-08",
    theme: "AgriTech",
    category: "agritech",
    title: "Precision Farming with Drone Imagery & Soil Telemetry",
    shortDesc: "Engineer low-cost IoT soil moisture probes and computer vision drone analysis to detect crop blights early and automate precision irrigation.",
    fullDesc: "Global climate shifts threaten smallholder farmer yields. This track targets scalable smart agriculture systems combining multi-depth NPK/moisture soil probes, solar-powered LoRa mesh nodes, and satellite/drone NDVI crop health analytics.",
    objectives: [
      "Long-range low-power LoRaWAN soil telemetry network.",
      "Computer vision leaf disease diagnosis running on low-cost edge hardware.",
      "Localized vernacular farmer advisory engine via SMS / WhatsApp bot."
    ],
    techStack: ["LoRa / LoRaWAN", "OpenCV / YOLOv8", "ESP32 + Capacitive Soil Sensors", "Twilio API"],
    deliverables: ["Working Hardware Probe / CV Model", "Farmer Advisory Interface", "Live Test Demonstration"],
    difficulty: "All-Level",
    tags: ["Precision Agri", "LoRaWAN", "Computer Vision", "Rural Tech"]
  },
  {
    id: "IIC-ROB-09",
    theme: "Robotics",
    category: "robotics",
    title: "Autonomous Swarm Robotics & Aerial Navigation",
    shortDesc: "Design cooperative SLAM navigation and obstacle-avoidance algorithms for autonomous ground rovers and UAVs operating in disaster relief zones.",
    fullDesc: "During natural disasters, satellite GPS signals are unavailable. Participants will formulate collaborative Simultaneous Localization and Mapping (SLAM), LiDAR/Visual Inertial Odometry, and decentralized swarm communication to map unknown environments.",
    objectives: [
      "Visual-Inertial Odometry (VIO) / LiDAR SLAM in GPS-denied environments.",
      "Decentralized peer-to-peer rover/drone swarm synchronization.",
      "Real-time 3D occupancy grid generation and survivor heatmap."
    ],
    techStack: ["ROS 2", "Gazebo Simulation", "C++ / Python", "LiDAR / Depth Cameras"],
    deliverables: ["ROS 2 Package / Simulation", "Hardware Rover Demonstration", "Code Repository"],
    difficulty: "Advanced",
    tags: ["ROS 2", "SLAM", "Swarm Robotics", "Drones"]
  },
  {
    id: "IIC-OPN-10",
    theme: "Open Track",
    category: "open",
    title: "Wildcard Moonshot & High-Impact Innovation",
    shortDesc: "Have a breakthrough solution bridging IoT, AI, Biotech, or Civic Tech that defies conventional categories? Pitch your boldest moonshot innovation.",
    fullDesc: "Groundbreaking innovations frequently emerge at the intersection of unpredicted domains. The Open Innovation track provides an open playground for audacious prototypes spanning Assistive Technologies, Space Tech, Civic Governance, or Bio-Digital interfaces.",
    objectives: [
      "Define a critical, well-researched global problem statement.",
      "Demonstrate a high-fidelity prototype combining hardware/software synergy.",
      "Articulate rigorous technical feasibility and scalability."
    ],
    techStack: ["Open Stack (Hardware / Software of choice)", "Full Stack Web/Mobile", "AI/IoT Frameworks"],
    deliverables: ["Functional Working Prototype", "GitHub Repository", "Live Jury Pitch & Demo"],
    difficulty: "All-Level",
    tags: ["Moonshot", "Interdisciplinary", "Open Innovation"]
  }
];

let selectedCategory = "all";
let searchFilter = "";

document.addEventListener("DOMContentLoaded", () => {
  renderProblemGrid();
  initFiltersAndEvents();
  initKickoffCountdown();
});

function renderProblemGrid() {
  const container = document.getElementById("problemCardsContainer");
  const countEl = document.getElementById("problemCounter");
  if (!container) return;

  const filtered = PROBLEM_STATEMENTS.filter(item => {
    const matchCat = (selectedCategory === "all" || item.category === selectedCategory);
    const key = searchFilter.toLowerCase().trim();
    const matchSearch = !key ||
      item.title.toLowerCase().includes(key) ||
      item.theme.toLowerCase().includes(key) ||
      item.shortDesc.toLowerCase().includes(key) ||
      item.id.toLowerCase().includes(key) ||
      item.tags.some(t => t.toLowerCase().includes(key)) ||
      item.techStack.some(ts => ts.toLowerCase().includes(key));

    return matchCat && matchSearch;
  });

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${PROBLEM_STATEMENTS.length} Official Problem Statements`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; background: var(--bg-subtle); border-radius: 12px; border: 1px dashed var(--purple-border);">
        <p style="color: var(--text-muted); margin-bottom: 0.75rem;">No problem statements matched your search filter.</p>
        <button class="btn btn-outline btn-sm" onclick="resetAllFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="problem-card" data-id="${item.id}">
      <div>
        <div class="problem-card-top">
          <span class="problem-id-chip">${item.id}</span>
          <span class="problem-track-name">${item.theme}</span>
        </div>
        <h3 class="problem-title">${item.title}</h3>
        <p class="problem-desc">${item.shortDesc}</p>
        
        <div class="problem-tags-row">
          ${item.tags.map(t => `<span class="problem-tag">${t}</span>`).join("")}
        </div>
      </div>

      <div class="problem-card-bottom">
        <div class="problem-difficulty">
          <i class="fa-solid fa-gauge" style="color: var(--purple-primary);"></i>
          <span>${item.difficulty}</span>
        </div>
        <button class="btn btn-outline btn-sm" onclick="openProblemDetailModal('${item.id}')">
          View Track Brief →
        </button>
      </div>
    </div>
  `).join("");
}

window.selectTrackCategory = function (catKey) {
  selectedCategory = catKey;
  document.querySelectorAll(".cat-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.cat === catKey);
  });
  renderProblemGrid();
  const sec = document.getElementById("problems");
  if (sec) sec.scrollIntoView({ behavior: "smooth" });
};

function resetAllFilters() {
  selectedCategory = "all";
  searchFilter = "";
  const input = document.getElementById("problemSearchInput");
  if (input) input.value = "";
  document.querySelectorAll(".cat-pill").forEach(p => {
    p.classList.toggle("active", p.dataset.cat === "all");
  });
  renderProblemGrid();
}

function initFiltersAndEvents() {
  // Category pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      selectedCategory = pill.dataset.cat || "all";
      renderProblemGrid();
    });
  });

  // Search input
  const searchInput = document.getElementById("problemSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchFilter = e.target.value;
      renderProblemGrid();
    });
  }

  // Close modals on backdrop click
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });
}

// Problem Details Modal
window.openProblemDetailModal = function (id) {
  const item = PROBLEM_STATEMENTS.find(p => p.id === id);
  if (!item) return;

  const body = document.getElementById("problemModalBody");
  if (!body) return;

  body.innerHTML = `
    <div style="margin-bottom: 1.2rem; border-bottom: 1px solid var(--border-light); padding-bottom: 1rem;">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.4rem; align-items: center;">
        <span class="problem-id-chip">${item.id}</span>
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--purple-primary);">${item.theme} Track</span>
        <span style="font-size: 0.75rem; color: var(--text-muted);">• ${item.difficulty}</span>
      </div>
      <h2 style="font-size: 1.35rem; color: var(--text-main);">${item.title}</h2>
    </div>

    <div style="margin-bottom: 1.2rem;">
      <h5 style="font-size: 0.78rem; text-transform: uppercase; color: var(--purple-primary); margin-bottom: 0.35rem; font-weight: 700;">Challenge Background & Problem Context</h5>
      <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-body);">
        ${item.fullDesc}
      </p>
    </div>

    <div style="margin-bottom: 1.2rem;">
      <h5 style="font-size: 0.78rem; text-transform: uppercase; color: var(--purple-primary); margin-bottom: 0.35rem; font-weight: 700;">Key Objectives & Expected Scope</h5>
      <ul style="padding-left: 1.1rem; font-size: 0.85rem; color: var(--text-body); display: flex; flex-direction: column; gap: 0.3rem;">
        ${item.objectives.map(o => `<li>${o}</li>`).join("")}
      </ul>
    </div>

    <div style="margin-bottom: 1.2rem;">
      <h5 style="font-size: 0.78rem; text-transform: uppercase; color: var(--purple-primary); margin-bottom: 0.35rem; font-weight: 700;">Recommended Tech Stack & Hardware</h5>
      <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
        ${item.techStack.map(ts => `<span style="font-size: 0.75rem; background: var(--bg-purple-light); color: var(--purple-primary); font-weight: 600; padding: 0.2rem 0.55rem; border-radius: 4px; border: 1px solid var(--purple-border);">${ts}</span>`).join("")}
      </div>
    </div>

    <div style="background: var(--bg-subtle); padding: 0.85rem 1rem; border-radius: 8px; border: 1px solid var(--border-light); margin-bottom: 1.5rem;">
      <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">
        <i class="fa-solid fa-laptop-code" style="color: var(--purple-primary);"></i> Venue Prototype Deliverables:
      </div>
      <div style="font-size: 0.8rem; color: var(--text-body);">
        ${item.deliverables.join(" • ")}
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; align-items: center; border-top: 1px solid var(--border-light); padding-top: 1rem; gap: 0.5rem;">
      <button class="btn btn-subtle btn-sm" onclick="closeModal('problemModal')">Close</button>
      <button class="btn btn-primary btn-sm" onclick="openPrototypeSubmitModalWithTrack('${item.theme}')">
        <i class="fa-solid fa-cloud-arrow-up"></i> Submit Prototype for this Track
      </button>
    </div>
  `;

  openModal('problemModal');
};

function openPrototypeSubmitModalWithTrack(trackName) {
  closeModal('problemModal');
  const select = document.getElementById('subTrackSelect');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(trackName) || select.options[i].value === trackName) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  openModal('submitModal');
}

// Countdown to Hackathon Kickoff on 08 September 2026, 10:00 AM IST
function initKickoffCountdown() {
  const kickoffDate = new Date("2026-09-08T10:00:00+05:30").getTime();

  function update() {
    const now = new Date().getTime();
    let diff = kickoffDate - now;

    if (diff <= 0) {
      const dEl = document.getElementById("days");
      const hEl = document.getElementById("hours");
      const mEl = document.getElementById("minutes");
      const sEl = document.getElementById("seconds");
      if (dEl) dEl.textContent = "00";
      if (hEl) hEl.textContent = "00";
      if (mEl) mEl.textContent = "00";
      if (sEl) sEl.textContent = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("minutes");
    const sEl = document.getElementById("seconds");

    if (dEl) dEl.textContent = String(d).padStart(2, '0');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Modals
window.openModal = function (id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

window.closeModal = function (id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove("open");
    document.body.style.overflow = "";
  }
};

window.openPrototypeSubmitModal = function () {
  openModal('submitModal');
};

// ────────────────────────────────────────────────────────────────────
// BACKEND: Paste your Google Apps Script Web App URL below after deploying.
// See google_apps_script.gs for deployment instructions.
// ────────────────────────────────────────────────────────────────────
const SUBMIT_ENDPOINT = https://script.google.com/macros/s/AKfycbzP3_sA0qF0HukrnVhPqrjnMYtQReIJhxoKMI43mznZGf4riif-AvwVxP0uQwyJH9Tk/exec";

  window.handlePrototypeSubmission = async function (e) {
    e.preventDefault();

    const teamName = document.getElementById('subTeamName').value.trim();
    const track = document.getElementById('subTrackSelect').value;
    const github = document.getElementById('subGithub').value.trim();
    const demo = document.getElementById('subDemo').value.trim();

    const submitBtn = e.target.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting…";

    // If no real endpoint configured, show info toast
    if (!SUBMIT_ENDPOINT || SUBMIT_ENDPOINT === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Prototype";
      closeModal('submitModal');
      showToast("⚠️ Backend not configured. Deploy google_apps_script.gs and add the URL to app.js.");
      return;
    }

    try {
      const response = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamName, track, github, demo })
      });

      const result = await response.json();

      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Prototype";

      if (result.status === "success") {
        closeModal('submitModal');
        e.target.reset();
        showToast(`✅ Prototype submitted for Team "${teamName}"! Logged to organiser sheet.`);
      } else {
        showToast(`❌ Submission failed: ${result.message}`);
      }
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Prototype";
      showToast("❌ Network error. Please check your connection and try again.");
    }
  };

function showToast(msg) {
  const box = document.getElementById("toastContainer");
  if (!box) return;
  const t = document.createElement("div");
  t.className = "toast";
  t.innerHTML = msg;
  box.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}
