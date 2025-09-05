export const siteConfig = {
  name: "George Patrick Salva",
  title: "Senior Hardware Engineer",
  description:
    "Computer Engineer | Hardware Systems & Embedded Design | Passion for building and optimizing technology",
  accentColor: "rgba(4, 25, 82, 1)",
  social: {
    email: "salvageorgepatricktan@gmail.com",
    linkedin: "https://www.linkedin.com/in/george-patrick-salva-112896382/",
    twitter: "https://x.com/extrageos",
    github: "https://github.com/extrageos",
  },
  resume: {
    link: "https://example.com/GeorgePatrickSalva_CV.pdf", // 🔗 replace with your actual CV link
    fileName: "GeorgePatrickSalva_CV.pdf", // optional - for download naming
  },
  aboutMe:
    "I am a Computer Engineer with a strong interest in computer hardware, system design, and the intersection of electronics and computing. My focus is on understanding how hardware and software work together, from low-level circuits to fully integrated systems. I enjoy working on hardware design, troubleshooting, and optimization, while continuously expanding my knowledge in embedded systems, digital logic, and microcontroller-based projects. Driven by curiosity and hands-on problem solving, I aim to contribute to building reliable, efficient, and innovative hardware solutions.",
  skills: [
    "Embedded Systems Development",
    "Digital Logic Design",
    "Circuit Design & Troubleshooting",
    "Hardware-Software Integration",
    "Computer Architecture & Hardware Fundamentals",
  ],
  projects: [
    {
      name: "Modular PC Hardware Monitor",
      description:
        "A hardware-based monitoring system that tracks real-time temperature, voltage, and fan speeds of a computer. Built with microcontrollers and sensors, the system displays live data on a small LCD and logs values to a connected PC for analysis.",
      skills: ["Microcontrollers", "Sensors", "Embedded C", "PCB Design"],
    },
    {
      name: "Smart Power Strip with Load Management",
      description:
        "A custom-built power strip with integrated microcontrollers that measures current draw per outlet and prevents overloads. Features include surge protection, per-outlet switching, and USB charging with intelligent power allocation.",
      skills: ["Embedded C", "Power Electronics", "Circuit Design"],
    },
    {
      name: "FPGA-Based Retro Console Emulator",
      description:
        "A hardware implementation of a retro gaming console using an FPGA. The project recreates the original console’s CPU, memory, and graphics pipeline in Verilog/VHDL, allowing classic games to run on real hardware.",
      skills: ["FPGA", "Verilog/VHDL", "Digital Design"],
    },
  ],
  experience: [
    {
      company: "Integrated Micro-Electronics, Inc. (IMI)",
      title: "Hardware / Process Development Engineer",
      dateRange: "2026 – 2028",
      bullets: [
        "Assisted in hardware design and manufacturing process improvements for semiconductor assembly and testing operations.",
        "Collaborated on reliability testing, failure analysis, and new product introduction efforts to support EMS clients.",
        "Gained experience in PCB assembly, test calibration, and process documentation.",
      ],
    },
    {
      company: "SFA Semicon Philippines Corporation",
      title: "Semiconductor Packaging & Assembly Engineer",
      dateRange: "2028 – 2030",
      bullets: [
        "Supported packaging design and parametric testing for memory chips and power semiconductors.",
        "Developed and executed test plans for package reliability and electrical performance.",
        "Collaborated with product team to define technical requirements.",
        "Coordinated with process engineers for validation and quality assurance documentation.",
      ],
    },
    {
      company: "Amkor Technology Philippines, Inc.",
      title: "Test Development Engineer",
      dateRange: "2030 – 2033",
      bullets: [
        "Designed and optimized test programs for advanced semiconductor packages (BGA, flip-chip, SiP).",
        "Automated test systems to improve throughput and reliability of final product validation.",
        "Collaborated with global engineering teams to implement scalable test solutions.",
      ],
    },
  ],
  education: [
    {
      school: "Marinduque State University",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2021 - 2026",
      achievements: [
        "Graduated with solid foundation in both hardware and software integration.",
        "Completed multiple embedded systems and hardware-focused capstone projects.",
        "Active member of the Computer Engineering Society.",
      ],
    },
  ],
};

// 👇 safer to export default for Astro
export default siteConfig;
