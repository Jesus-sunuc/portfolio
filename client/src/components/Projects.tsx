const Projects = () => {
  const projects = [
    {
      title: "DormDuty",
      description:
        "A React Native chore management app designed for roommates to easily track and manage household responsibilities. Features include task assignment, completion tracking, and fair distribution algorithms.",
      techStack: ["React Native", "TypeScript", "Expo", "Firebase Auth"],
      image: "🏠",
      github: "#",
      liveDemo: "#",
      highlights: [
        "Cross-platform mobile application",
        "Real-time synchronization between users",
        "Intelligent task distribution system",
        "User-friendly interface design",
      ],
    },
    {
      title: "ConectaHub",
      description:
        "A comprehensive business profile platform specifically designed for Guatemalan SMBs to establish their online presence and connect with customers in the digital marketplace.",
      techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
      image: "🌐",
      github: "#",
      liveDemo: "#",
      highlights: [
        "Localized for Guatemalan market",
        "Business discovery and networking",
        "Multi-language support",
        "SEO-optimized business profiles",
      ],
    },
    {
      title: "Concerts API",
      description:
        "A robust FastAPI backend system integrated with PostgreSQL and Nextcloud for managing concert events, ticket sales, and user data with cloud storage capabilities.",
      techStack: ["FastAPI", "PostgreSQL", "Nextcloud", "Docker"],
      image: "🎵",
      github: "#",
      liveDemo: "#",
      highlights: [
        "RESTful API design",
        "Cloud integration for file storage",
        "Scalable database architecture",
        "Containerized deployment",
      ],
    },
    {
      title: "IT Department Tools",
      description:
        "Internal tools and automation scripts developed during my internship at Snow College's IT department, focusing on system administration and workflow optimization.",
      techStack: ["Python", "Docker", "Kubernetes", "Azure"],
      image: "🔧",
      github: "#",
      liveDemo: "#",
      highlights: [
        "Automated deployment pipelines",
        "Infrastructure monitoring",
        "Security compliance tools",
        "Performance optimization",
      ],
    },
    {
      title: "Cybersecurity Projects",
      description:
        "Various cybersecurity initiatives including vulnerability assessments, security awareness tools, and incident response automation developed through coursework and practical experience.",
      techStack: ["Python", "Linux", "Security Tools", "Networking"],
      image: "🔒",
      github: "#",
      liveDemo: "#",
      highlights: [
        "Vulnerability scanning automation",
        "Security awareness training materials",
        "Network security monitoring",
        "Incident response procedures",
      ],
    },
    {
      title: "Event Management System",
      description:
        "A comprehensive platform for organizing and managing student events, developed through my leadership roles in student organizations at Snow College.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      image: "📅",
      github: "#",
      liveDemo: "#",
      highlights: [
        "Event registration and ticketing",
        "Attendee management system",
        "Real-time event updates",
        "Analytics and reporting",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my technical journey, from mobile apps to enterprise
              solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start space-x-2"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-600 text-sm">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex-1 bg-gray-800 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 inline mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        className="w-5 h-5 inline mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Collaborating?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and explore
                innovative solutions. Let's create something amazing together!
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
