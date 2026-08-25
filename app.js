/**
 * IIC 3.0 Hackathon - Clean, Uncluttered Logic
 * Department of IoT & Intelligent Systems, Manipal University Jaipur
 */

const PROBLEM_STATEMENTS = [
  {
    id: "IIC-AI-01",
    theme: "AI & Systems",
    category: "ai",
    title: "Autonomous Agentic Workflows & Multi-Modal Intelligence",
    shortDesc: "Architect resilient autonomous multi-agent systems and multi-modal AI capable of domain task orchestration and automated reasoning under uncertainty.",
    fullDesc: "Modern enterprises and research systems are constrained by isolated single-turn AI models. This challenge calls for the design of autonomous agentic architectures that can synthesize cross-modal inputs (vision, text, telemetry, sensor feeds), manage long-term state memory, orchestrate tool workflows, and self-correct across complex decision loops in mission-critical environments.",
    objectives: [
      "Develop multi-agent orchestration architecture with dynamic role delegation.",
      "Implement multi-modal sensory inputs (visual feeds, unstructured data, sensor streams).",
      "Ensure robust guardrails and verifiable reasoning steps."
    ],
    techStack: ["Python", "LangChain / CrewAI", "PyTorch / TensorFlow", "FastAPI", "Vector DBs"],
    deliverables: ["9-Slide PPT Pitch Deck", "System Architecture Blueprint", "GitHub Prototype Repo (Optional)", "Demo Video (Optional)"],
    difficulty: "Advanced",
    tags: ["Agentic AI", "Multi-Modal", "Autonomous Systems"]
  },
  {
    id: "IIC-IOT-02",
    theme: "IoT & Smart Cities",
    category: "iot",
    title: "Low-Latency Edge IoT & Intelligent Urban Infrastructure",
    shortDesc: "Engineer intelligent Edge IoT networks with decentralized sensing for smart urban mobility, grid monitoring, and disaster resilience.",
    fullDesc: "Rapid urbanization puts immense pressure on public utilities and energy grids. Participants must design an end-to-end edge-computing IoT pipeline combining low-power microcontroller nodes, distributed edge processing, and resilient mesh/MQTT communication for proactive urban lifecycle monitoring and crisis prevention.",
    objectives: [
      "Hardware-software edge node architecture using ESP32/Raspberry Pi or simulated IoT testbeds.",
      "Fault-tolerant telemetry pipeline with secure MQTT / CoAP over TLS.",
      "Predictive edge ML inference for immediate anomaly detection without cloud latency."
    ],
    techStack: ["ESP32 / Arduino / RPi", "MQTT / WebSockets", "Embedded C++ / MicroPython", "Node-RED", "Grafana"],
    deliverables: ["9-Slide Solution PPT", "Hardware Schematic & Network Topology", "Edge Inference Demonstration"],
    difficulty: "Intermediate",
    tags: ["Edge Computing", "Smart Cities", "Sensor Networks"]
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
    deliverables: ["9-Slide Solution Presentation", "Diagnostic Flowchart", "Prototype Demo / Video"],
    difficulty: "Advanced",
    tags: ["MedTech", "Wearables", "Telemedicine"]
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
    deliverables: ["9-Slide Pitch Deck", "Microgrid Simulation or Real-world Pilot Data", "Carbon Reduction Matrix"],
    difficulty: "Intermediate",
    tags: ["CleanTech", "Smart Grids", "ESG"]
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
    techStack: ["Solidity / Rust", "Ethereum / Polygon / Starknet", "zk-SNARKs (snarkjs)", "Web3.js / Ethers.js"],
    deliverables: ["9-Slide Technical Deck", "Smart Contract Architecture / Testnet Deployment", "Security Threat Analysis"],
    difficulty: "Advanced",
    tags: ["Web3", "Zero-Knowledge", "Smart Contracts"]
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
    deliverables: ["9-Slide Defense Strategy Deck", "Threat Simulation / Response Workflow", "Prototype Code"],
    difficulty: "Advanced",
    tags: ["Zero-Trust", "Botnet Defense", "Threat Hunting"]
  },
  {
    id: "IIC-EDU-07",
    theme: "EdTech",
    category: "edtech",
    title: "Adaptive Immersive Mentorship & Inclusive Learning",
    shortDesc: "Create hyper-personalized AI tutors that adapt learning velocity, synthesize interactive spatial simulations, and support neurodiverse students.",
    fullDesc: "Traditional classrooms follow a one-size-fits-all model. Innovators in this track will engineer dynamic adaptive curricula engines, interactive WebXR / spatial learning modules, and real-time comprehension feedback systems.",
    objectives: [
      "Cognitive load and attention-aware adaptive learning pathways.",
      "Multi-modal generative explanations (text, diagram synthesis, interactive voice QA).",
      "Accessibility compliance (WCAG 2.2 AAA, text-to-speech)."
    ],
    techStack: ["Three.js / WebXR", "Generative AI API / Speech Models", "React / Next.js", "IndexedDB"],
    deliverables: ["9-Slide Solution PPT", "Interactive UX / Learning Prototype", "User Efficacy Assessment"],
    difficulty: "Intermediate",
    tags: ["Adaptive AI", "WebXR", "Personalized Tutoring"]
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
    deliverables: ["9-Slide AgriTech Proposal", "Hardware Blueprint", "Demonstration Video / Code"],
    difficulty: "All-Level",
    tags: ["Precision Agri", "LoRaWAN", "Computer Vision"]
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
    deliverables: ["9-Slide Robotics Blueprint", "ROS2 / Gazebo Simulation Package", "Hardware BOM"],
    difficulty: "Advanced",
    tags: ["ROS 2", "SLAM", "Swarm Robotics"]
  },
  {
    id: "IIC-OPN-10",
    theme: "Open Track",
    category: "open",
    title: "Wildcard Moonshot & Interdisciplinary Innovation",
    shortDesc: "Have a breakthrough solution bridging IoT, AI, Biotech, or Civic Tech that defies conventional categories? Pitch your boldest moonshot innovation.",
    fullDesc: "Groundbreaking innovations frequently emerge at the intersection of unpredicted domains. The Open Innovation track provides an open playground for audacious prototypes spanning Assistive Technologies, Space Tech, Civic Governance, or Bio-Digital interfaces.",
    objectives: [
      "Define a critical, well-researched global problem statement.",
      "Demonstrate a high-fidelity prototype combining hardware/software synergy.",
      "Articulate rigorous technical feasibility and scalability."
    ],
    techStack: ["Open Stack (Hardware / Software of choice)", "Full Stack Web/Mobile", "AI/IoT Frameworks"],
    deliverables: ["9-Slide Moonshot PPT Deck", "System Architecture Blueprint", "Prototype GitHub or Demo"],
    difficulty: "All-Level",
    tags: ["Moonshot", "Interdisciplinary", "Open Innovation"]
  }
];

let currentCategory = "all";
let currentSearch = "";

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupEvents();
  initCountdown();
  initAccordion();
});

function renderCards() {
  const grid = document.getElementById("problemGrid");
  if (!grid) return;

  const filtered = PROBLEM_STATEMENTS.filter(item => {
    const matchCat = (currentCategory === "all" || item.category === currentCategory);
    const searchLow = currentSearch.toLowerCase().trim();
    const matchSearch = !searchLow ||
      item.title.toLowerCase().includes(searchLow) ||
      item.theme.toLowerCase().includes(searchLow) ||
      item.shortDesc.toLowerCase().includes(searchLow) ||
      item.id.toLowerCase().includes(searchLow);

    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: #faf8ff; border-radius: 12px;">
        <p style="color: var(--text-muted); margin-bottom: 0.5rem;">No problem statements matched your search.</p>
        <button class="btn btn-outline btn-sm" onclick="resetSearch()">Clear Filter</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="ps-card">
      <div>
        <div class="ps-top">
          <span class="ps-theme-tag">${item.theme}</span>
          <span class="ps-id">${item.id}</span>
        </div>
        <h3 class="ps-title">${item.title}</h3>
        <p class="ps-desc">${item.shortDesc}</p>
      </div>
      <div class="ps-bottom">
        <span class="ps-diff"><i class="fa-solid fa-signal" style="color: var(--purple-primary); margin-right: 4px;"></i> ${item.difficulty}</span>
        <button class="btn btn-outline btn-sm" onclick="openProblemModal('${item.id}')">View Details →</button>
      </div>
    </div>
  `).join("");
}

function resetSearch() {
  currentCategory = "all";
  currentSearch = "";
  const input = document.getElementById("psSearchInput");
  if (input) input.value = "";
  document.querySelectorAll(".ps-pills .pill-btn").forEach(p => {
    p.classList.toggle("active", p.dataset.category === "all");
  });
  renderCards();
}

function setupEvents() {
  // Category pills
  document.querySelectorAll(".ps-pills .pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ps-pills .pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category || "all";
      renderCards();
    });
  });

  // Search
  const searchInput = document.getElementById("psSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderCards();
    });
  }

  // Close modals on backdrop click
  document.querySelectorAll(".modal-backdrop").forEach(b => {
    b.addEventListener("click", (e) => {
      if (e.target === b) {
        b.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });
}

window.openProblemModal = function(id) {
  const item = PROBLEM_STATEMENTS.find(p => p.id === id);
  if (!item) return;

  const content = document.getElementById("problemModalContent");
  if (!content) return;

  content.innerHTML = `
    <div style="margin-bottom: 1rem;">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.4rem;">
        <span class="ps-theme-tag">${item.theme}</span>
        <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">${item.id}</span>
      </div>
      <h3 style="font-size: 1.3rem; margin-bottom: 0.35rem;">${item.title}</h3>
    </div>

    <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-body); margin-bottom: 1rem;">
      ${item.fullDesc}
    </p>

    <h5 style="font-size: 0.85rem; text-transform: uppercase; color: var(--purple-primary); margin-bottom: 0.35rem;">Objectives:</h5>
    <ul style="padding-left: 1.1rem; font-size: 0.85rem; color: var(--text-body); margin-bottom: 1rem;">
      ${item.objectives.map(o => `<li>${o}</li>`).join("")}
    </ul>

    <h5 style="font-size: 0.85rem; text-transform: uppercase; color: var(--purple-primary); margin-bottom: 0.35rem;">Suggested Tech Stack:</h5>
    <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem;">
      ${item.techStack.map(t => `<span style="font-size: 0.75rem; background: var(--bg-purple-light); padding: 0.2rem 0.55rem; border-radius: 4px; color: var(--purple-dark); font-weight: 500;">${t}</span>`).join("")}
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <button class="btn btn-outline btn-sm" onclick="downloadTemplateModal()">Download 9-Slide Template</button>
      <div style="display: flex; gap: 0.4rem;">
        <button class="btn btn-subtle btn-sm" onclick="closeModal('problemModal')">Close</button>
        <button class="btn btn-primary btn-sm" onclick="openRegistrationWithTheme('${item.theme}')">Register with this Theme</button>
      </div>
    </div>
  `;

  openModal('problemModal');
};

function openRegistrationWithTheme(themeName) {
  closeModal('problemModal');
  openRegistrationModal('Non-MUJ', 799);
  const themeSelect = document.getElementById('regThemeSelect');
  if (themeSelect) {
    for (let i = 0; i < themeSelect.options.length; i++) {
      if (themeSelect.options[i].text.includes(themeName) || themeSelect.options[i].value === themeName) {
        themeSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function initCountdown() {
  const target = new Date("2026-08-25T23:59:59+05:30").getTime();

  function update() {
    const now = new Date().getTime();
    let diff = target - now;

    if (diff <= 0) {
      const finale = new Date("2026-09-08T10:00:00+05:30").getTime();
      diff = finale - now;
    }

    if (diff <= 0) return;

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

function initAccordion() {
  document.querySelectorAll(".faq-card .faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.parentElement;
      const isOpen = card.classList.contains("open");
      document.querySelectorAll(".faq-card").forEach(c => c.classList.remove("open"));
      if (!isOpen) {
        card.classList.add("open");
      }
    });
  });
}

window.openModal = function(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

window.closeModal = function(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove("open");
    document.body.style.overflow = "";
  }
};

window.openRegistrationModal = function(tier = 'Non-MUJ', amount = 799) {
  const regCat = document.getElementById('regCategory');
  if (regCat) regCat.value = tier;
  updateModalFee();
  openModal('registrationModal');
};

window.updateModalFee = function() {
  const regCat = document.getElementById('regCategory');
  const disp = document.getElementById('modalFeeDisplay');
  if (!regCat || !disp) return;

  if (regCat.value === 'MUJ') disp.textContent = '₹699 INR (Per Team)';
  else if (regCat.value === 'International') disp.textContent = '$50 USD (Per Team)';
  else disp.textContent = '₹799 INR (Per Team)';
};

window.downloadTemplateModal = function() {
  openModal('templateModal');
};

window.openSubmitModal = function() {
  openModal('submitModal');
};

window.handleRegistrationSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('regTeamName').value;
  closeModal('registrationModal');
  showToast(`Registration received for Team "${name}"!`);
};

window.handleProjectSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('subTeamCode').value;
  closeModal('submitModal');
  showToast(`Proposal submitted for Team "${name}"!`);
};

window.triggerTemplateDownload = function(type) {
  if (type === 'pptx') {
    showToast("Downloading IIC_3.0_9_Slide_Template.pptx...");
    const blob = new Blob(["IIC 3.0 Standardized 9-Slide Template - Manipal University Jaipur"], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "IIC_3.0_Standard_9_Slide_Template.pptx";
    link.click();
  } else {
    window.open("https://docs.google.com/presentation", "_blank");
  }
};

function showToast(msg) {
  const box = document.getElementById("toastBox");
  if (!box) return;
  const t = document.createElement("div");
  t.className = "toast-msg";
  t.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--purple-primary); margin-right: 6px;"></i> ${msg}`;
  box.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

window.toggleMobileNav = function() {
  const nav = document.querySelector(".main-nav");
  if (nav) {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
  }
};
