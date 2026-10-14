export interface Track {
  id: string;
  number: number;
  title: string;
  summary: string;
  scope: string[];
}

export const tracks: Track[] = [
  {
    id: "smart-utilities",
    number: 1,
    title: "AI in Smart Utilities and Infrastructure",
    summary:
      "Demand forecasting, grid optimization, smart metering, and fault prediction.",
    scope: [
      "AI-driven demand forecasting and load management in power distribution networks",
      "Intelligent grid optimization, stability analysis, and fault prediction using deep learning",
      "Smart metering, AMI data analytics, and energy usage behaviour modelling",
      "AI applications in water distribution, waste management, and gas pipeline monitoring",
      "Predictive analytics and digital twins for utility asset maintenance",
    ],
  },
  {
    id: "renewable-energy",
    number: 2,
    title: "AI for Renewable Energy Systems",
    summary:
      "Solar/wind forecasting, energy storage, microgrid control, and performance monitoring.",
    scope: [
      "Solar irradiance and photovoltaic output forecasting using ML/DL models",
      "Wind speed and wind turbine power curve modelling using AI",
      "AI-based energy storage management and battery state-of-health estimation",
      "Integration of renewables into smart grids — stability and power quality challenges",
      "AI-driven microgrid energy management and autonomous dispatch algorithms",
    ],
  },
  {
    id: "industrial-automation",
    number: 3,
    title: "Industrial Automation and Robotics",
    summary:
      "Process optimization, machine vision, predictive maintenance, and human–robot collaboration.",
    scope: [
      "AI-driven process optimization in manufacturing and process industries",
      "Machine vision and deep learning for quality inspection and defect detection",
      "Predictive maintenance using vibration analysis, thermography, and deep learning",
      "Autonomous mobile robots and collaborative robots (cobots) in smart factories",
      "Industry 4.0 / 5.0 architectures and AI-enabled production systems",
    ],
  },
  {
    id: "iot-edge-ai",
    number: 4,
    title: "IoT and Edge AI for Energy & Automation",
    summary:
      "Intelligent sensor networks, digital twins, and distributed AI in cyber-physical systems.",
    scope: [
      "Intelligent sensor networks and smart transducers for energy monitoring",
      "Edge computing architectures for real-time industrial control systems",
      "IoT-based predictive diagnostics and condition monitoring platforms",
      "Digital twins for simulation and optimization of utility and automation systems",
      "Distributed AI in cyber-physical systems and multi-agent energy management",
    ],
  },
  {
    id: "data-science-optimization",
    number: 5,
    title: "Data Science and Optimization in Sustainable Systems",
    summary:
      "Neural network-based energy modelling, reinforcement learning, and carbon footprint reduction.",
    scope: [
      "AI/ML algorithms for energy efficiency enhancement and carbon footprint reduction",
      "Big Data analytics and cloud platforms for smart energy management",
      "Metaheuristic and evolutionary optimization for resource scheduling",
      "Energy consumption modelling using LSTM, Transformer, and neural network architectures",
      "Reinforcement learning and multi-objective optimization for dynamic control",
    ],
  },
  {
    id: "cybersecurity-ethics",
    number: 6,
    title: "Cybersecurity and Ethics in AI-driven Systems",
    summary:
      "Anomaly detection, privacy-preserving AI, and trustworthy, explainable AI for critical systems.",
    scope: [
      "Anomaly detection and intrusion prevention in SCADA and utility control networks",
      "Federated learning and privacy-preserving AI for critical infrastructure",
      "Secure communication protocols, zero-trust architectures, and AI compliance",
      "Ethical implications of autonomous decision-making in public utilities",
      "Explainable AI (XAI) and trustworthy AI frameworks for high-stakes systems",
    ],
  },
  {
    id: "emerging-applications",
    number: 7,
    title: "Emerging Applications of AI",
    summary:
      "Green technologies aligned with UN SDGs, Industry 5.0, and quantum computing for energy.",
    scope: [
      "AI for green technology innovation aligned with UN Sustainable Development Goals (SDGs)",
      "Industry 5.0 — human-centric, resilient, and sustainable intelligent manufacturing",
      "Quantum computing applications in energy system optimization and simulation",
      "AI for climate modelling, environmental monitoring, and disaster resilience",
    ],
  },
];
