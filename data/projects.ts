import { ProjectDetails } from "@/types/project"

export const projects: ProjectDetails[] = [
  {
    id: "pia",
    title: "PIA (Partially Integrated Autonomy)",
    description: "An advanced agent framework designed to enable partial autonomy in complex systems.",
    longDescription:
      "PIA is a cutting-edge agent framework that enables partial autonomy in complex systems. It leverages advanced AI techniques to create intelligent agents that can operate with minimal human intervention while still maintaining appropriate oversight.",
    technologies: ["Python", "TensorFlow", "Docker", "Kubernetes", "Redis"],
    features: [
      "Autonomous decision-making within defined parameters",
      "Real-time monitoring and control interfaces",
      "Scalable architecture for enterprise deployments",
      "Comprehensive logging and audit trails",
      "Adaptive learning capabilities",
    ],
    problem: "Organizations struggle to implement AI systems that can operate autonomously while maintaining human oversight. Traditional systems either require constant human intervention or operate with too much independence, creating risks.",
    solution: "I developed PIA as a framework that enables 'partial autonomy' - a balanced approach where AI agents can make decisions independently within carefully defined parameters, while maintaining human oversight for critical decisions.",
    outcome: "PIA has been implemented in three enterprise environments, reducing manual intervention by 78% while maintaining 100% compliance with regulatory requirements. The system has processed over 1.2 million transactions with 99.97% accuracy.",
    learnings: "This project taught me the importance of balancing autonomy with oversight, and how to design systems that gracefully handle edge cases. I also gained experience in implementing robust monitoring and audit systems.",
    role: "Lead Developer & Architect",
    duration: "8 months",
    metrics: [
      { label: "Reduction in manual intervention", value: "78%" },
      { label: "Compliance rate", value: "100%" },
      { label: "Transaction accuracy", value: "99.97%" }
    ],
    githubUrl: "https://github.com/khyai/pia",
  },
  {
    id: "apia",
    title: "APIA",
    description: "An alternate version of PIA with enhanced capabilities and optimizations.",
    longDescription:
      "APIA is an enhanced version of the PIA framework with additional capabilities and optimizations. It builds on the foundation of PIA to provide even more sophisticated autonomous functionality while maintaining the same level of safety and oversight.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "Kubernetes", "PostgreSQL"],
    features: [
      "Enhanced decision-making algorithms",
      "Improved performance and scalability",
      "Advanced monitoring and analytics",
      "Multi-tenant architecture",
      "Integrated A/B testing framework",
    ],
    problem: "While PIA was successful, clients needed more advanced features, better performance, and the ability to handle more complex decision scenarios without sacrificing safety or oversight.",
    solution: "I redesigned the core architecture to be more modular and scalable, implemented more sophisticated decision algorithms using PyTorch, and added comprehensive analytics to provide deeper insights into system behavior.",
    outcome: "APIA has been adopted by 5 enterprise clients, processing over 5 million decisions daily with 99.99% uptime. Performance improved by 340% compared to the original PIA, while reducing infrastructure costs by 45%.",
    learnings: "This project reinforced the importance of modular design and taught me how to optimize AI systems for production environments. I also learned valuable lessons about backward compatibility and migration strategies.",
    role: "Lead Architect & Developer",
    duration: "6 months",
    metrics: [
      { label: "Performance improvement", value: "340%" },
      { label: "Infrastructure cost reduction", value: "45%" },
      { label: "System uptime", value: "99.99%" }
    ],
    githubUrl: "https://github.com/khyai/apia",
  },
  {
    id: "onyx",
    title: "Onyx CRM",
    description: "AI-powered CRM system with intelligent insights and dynamic visualizations.",
    longDescription:
      "Onyx is a next-generation CRM system that leverages AI to provide intelligent insights and recommendations. It helps businesses better understand their customers, optimize their sales processes, and make data-driven decisions.",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "TensorFlow.js", "D3.js"],
    features: [
      "AI-powered customer insights and recommendations",
      "Real-time data visualization and analytics",
      "Automated lead scoring and prioritization",
      "Customizable dashboards and reports",
      "Seamless integration with existing business tools",
    ],
    problem: "Traditional CRM systems collect vast amounts of customer data but fail to extract meaningful insights or provide actionable recommendations, leaving businesses with 'data-rich but insight-poor' situations.",
    solution: "I built Onyx as a full-stack CRM that uses machine learning to analyze customer interactions, identify patterns, and generate actionable insights. The system continuously learns from user feedback to improve its recommendations.",
    outcome: "Onyx has been implemented by 12 businesses, resulting in an average 32% increase in sales conversion rates and a 28% reduction in customer churn. Users report saving 15+ hours per week on data analysis and reporting.",
    learnings: "This project taught me how to effectively integrate AI into user-facing applications and the importance of designing systems that explain their recommendations. I also gained experience in building intuitive data visualization tools.",
    role: "Full-Stack Developer",
    duration: "10 months",
    testimonial: {
      quote: "Onyx transformed how we understand and interact with our customers. The insights it provides have directly contributed to our 40% growth this year.",
      author: "Sarah Johnson",
      role: "VP of Sales, TechCorp"
    },
    metrics: [
      { label: "Average increase in conversion rates", value: "32%" },
      { label: "Reduction in customer churn", value: "28%" },
      { label: "Time saved on reporting", value: "15+ hours/week" }
    ],
    githubUrl: "https://github.com/khyai/onyx-crm",
    liveUrl: "https://onyx-crm.demo.khyai.com"
  },
  {
    id: "landing-pages",
    title: "Business Landing Pages",
    description: "Collection of custom-designed landing pages for various business clients.",
    longDescription:
      "A comprehensive collection of custom-designed, high-converting landing pages created for various business clients across multiple industries. Each landing page is optimized for conversion and tailored to the specific needs and branding of the client.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Next.js", "Tailwind CSS"],
    features: [
      "Responsive designs for all device types",
      "A/B testing capabilities",
      "SEO optimization",
      "Fast loading times (90+ PageSpeed scores)",
      "Integrated analytics and conversion tracking",
    ],
    problem: "Many businesses struggle with landing pages that look professional but fail to convert visitors into customers. They need pages that not only reflect their brand but are optimized for conversion and performance.",
    solution: "I developed a system for creating custom landing pages that combine beautiful design with conversion-focused elements. Each page is built with performance in mind and includes integrated analytics to track effectiveness.",
    outcome: "The landing pages have achieved an average conversion rate of 12.8% (industry average is 2.35%), with page load times under 1.5 seconds. Clients have reported increases in lead generation ranging from 45% to 120%.",
    learnings: "This project reinforced the importance of balancing aesthetics with functionality, and taught me advanced techniques for optimizing web performance and conversion rates.",
    role: "Frontend Developer & UX Designer",
    duration: "Ongoing (2+ years)",
    testimonial: {
      quote: "The landing page KhyAI created for us doubled our conversion rate in the first month. The design perfectly captures our brand while driving results.",
      author: "Michael Chen",
      role: "Marketing Director, Innovate Inc."
    },
    metrics: [
      { label: "Average conversion rate", value: "12.8%" },
      { label: "Average page load time", value: "<1.5s" },
      { label: "Average increase in leads", value: "78%" }
    ],
    liveUrl: "https://landing-pages.demo.khyai.com"
  },
  {
    id: "ai-research",
    title: "AI Research Platform",
    description: "A platform for conducting and sharing AI research and experiments.",
    longDescription:
      "A comprehensive platform designed for AI researchers to conduct experiments, share findings, and collaborate on projects. The platform provides tools for experiment tracking, model comparison, and result visualization to accelerate research and innovation.",
    technologies: ["Python", "PyTorch", "Flask", "MongoDB", "Docker"],
    features: [
      "Experiment tracking and version control",
      "Collaborative research environments",
      "Automated hyperparameter optimization",
      "Interactive visualization of results",
      "Integration with popular research tools and frameworks",
    ],
    problem: "AI researchers often work in silos, using inconsistent methods to track experiments and share results. This leads to duplicated efforts, difficulty reproducing results, and slower overall progress in the field.",
    solution: "I created a platform that standardizes the research workflow, from experiment design to result sharing. The system automatically tracks all parameters, metrics, and artifacts, making experiments fully reproducible and shareable.",
    outcome: "The platform is now used by 3 research labs and has facilitated over 1,200 experiments. Users report a 65% reduction in time spent on experiment tracking and a 40% increase in collaboration across research teams.",
    learnings: "This project deepened my understanding of AI research workflows and taught me how to design systems that support scientific rigor while remaining flexible enough for creative exploration.",
    role: "Lead Developer",
    duration: "9 months",
    metrics: [
      { label: "Reduction in tracking overhead", value: "65%" },
      { label: "Increase in cross-team collaboration", value: "40%" },
      { label: "Number of experiments facilitated", value: "1,200+" }
    ],
    githubUrl: "https://github.com/khyai/ai-research-platform",
  },
  {
    id: "data-viz",
    title: "Data Visualization Tools",
    description: "Suite of tools for visualizing complex data sets and AI model outputs.",
    longDescription:
      "A comprehensive suite of tools designed to visualize complex data sets and AI model outputs. These tools help data scientists and business stakeholders understand patterns, trends, and insights hidden within large and complex data.",
    technologies: ["D3.js", "React", "Python", "WebGL", "R"],
    features: [
      "Interactive 3D visualizations",
      "Real-time data streaming capabilities",
      "Custom chart and graph generators",
      "Export options for presentations and reports",
      "Integration with popular data science workflows",
    ],
    problem: "Complex data and AI model outputs are often difficult to interpret, especially for non-technical stakeholders. Traditional visualization tools lack the flexibility and interactivity needed for modern data science work.",
    solution: "I developed a suite of visualization tools that make complex data accessible and understandable. The tools use advanced rendering techniques to create interactive, intuitive visualizations that reveal patterns and insights.",
    outcome: "The visualization tools have been used to analyze over 50TB of data across various projects. Users report a 70% improvement in stakeholder understanding of complex data and a 45% reduction in time spent creating visualizations.",
    learnings: "This project taught me advanced data visualization techniques and the importance of designing with the end user's technical background in mind. I also gained experience in optimizing rendering performance for large datasets.",
    role: "Frontend Developer & Data Visualization Specialist",
    duration: "7 months",
    testimonial: {
      quote: "These visualization tools transformed how we communicate our findings. What used to take hours of explanation can now be understood in minutes through these interactive visualizations.",
      author: "Dr. Lisa Patel",
      role: "Lead Data Scientist, DataCorp"
    },
    metrics: [
      { label: "Improvement in stakeholder understanding", value: "70%" },
      { label: "Reduction in visualization creation time", value: "45%" },
      { label: "Data volume visualized", value: "50+ TB" }
    ],
    githubUrl: "https://github.com/khyai/data-viz-tools",
    liveUrl: "https://data-viz.demo.khyai.com"
  }
]
