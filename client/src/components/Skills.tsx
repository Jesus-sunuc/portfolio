import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-600 to-indigo-600" },
        {
          name: "JavaScript",
          level: 88,
          color: "from-yellow-500 to-orange-500",
        },
        { name: "SQL", level: 85, color: "from-green-500 to-green-600" },
        { name: "HTML/CSS", level: 92, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: "🔧",
      skills: [
        { name: "React", level: 92, color: "from-cyan-500 to-blue-500" },
        { name: "React Native", level: 85, color: "from-cyan-600 to-blue-600" },
        { name: "FastAPI", level: 90, color: "from-green-600 to-emerald-600" },
        {
          name: "TanStack Query",
          level: 80,
          color: "from-red-500 to-pink-500",
        },
        { name: "Expo", level: 85, color: "from-purple-500 to-indigo-500" },
      ],
    },
    {
      title: "Databases & Cloud",
      icon: "☁️",
      skills: [
        { name: "PostgreSQL", level: 88, color: "from-blue-600 to-indigo-700" },
        { name: "Oracle DB", level: 75, color: "from-red-600 to-orange-600" },
        { name: "Azure", level: 82, color: "from-blue-500 to-cyan-500" },
        { name: "Firebase", level: 80, color: "from-orange-500 to-yellow-500" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: "⚙️",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-500 to-cyan-600" },
        { name: "Kubernetes", level: 78, color: "from-blue-600 to-purple-600" },
        { name: "Git", level: 90, color: "from-orange-600 to-red-600" },
        { name: "Linux", level: 82, color: "from-gray-700 to-gray-900" },
      ],
    },
  ];

  const achievements = [
    {
      title: "Snow College IT Intern",
      description: "Full-stack development and system administration",
      icon: "🏢",
      period: "Current",
    },
    {
      title: "Student Leadership",
      description: "Event organization and team management",
      icon: "👥",
      period: "2022-2024",
    },
    {
      title: "Cybersecurity Experience",
      description: "Security assessments and compliance",
      icon: "🔒",
      period: "2023-2024",
    },
    {
      title: "Entrepreneurship Focus",
      description: "Building innovative solutions",
      icon: "🚀",
      period: "Ongoing",
    },
  ];

  const certifications = [
    "FastAPI Development",
    "React Development",
    "Cloud Infrastructure",
    "Database Management",
    "Cybersecurity Fundamentals",
    "Agile Methodologies",
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and
              professional capabilities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-gray-700 border border-gray-600 rounded-2xl p-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: categoryIndex * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)",
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        duration: 0.5,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-3">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            className="mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Experience & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-600 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="font-bold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    {achievement.description}
                  </p>
                  <span className="inline-block bg-blue-600 text-blue-100 px-3 py-1 rounded-full text-xs font-medium">
                    {achievement.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div
            className="bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-600 rounded-2xl p-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Certifications & Continuous Learning
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Technical Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">
                  Currently Learning
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Advanced Kubernetes</span>
                    <div className="w-24 bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Machine Learning</span>
                    <div className="w-24 bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">German Language</span>
                    <div className="w-24 bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Russian Language</span>
                    <div className="w-24 bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download */}
            <div className="text-center mt-8">
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
