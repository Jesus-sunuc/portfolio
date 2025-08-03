import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From Guatemala to Snow College, here's my journey in technology
              and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl border border-gray-600"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Originally from Guatemala, I've embarked on an incredible
                  journey to Snow College where I'm now entering my senior year
                  in Software Engineering. This path has shaped my perspective
                  on technology's power to connect cultures and create
                  opportunities.
                </p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl border border-gray-600"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </span>
                  Professional Experience
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  As a full-stack intern at Snow College's IT department, I work
                  with cutting-edge technologies including Python, FastAPI,
                  React, and cloud infrastructure. My experience spans
                  cybersecurity, student leadership, and event organization.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <motion.div
                className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl border border-gray-600"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Education & Growth
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Snow College</h4>
                      <p className="text-gray-300">
                        Software Engineering • Senior Year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Technical Skills
                      </h4>
                      <p className="text-gray-300">
                        Full-stack development, Cloud infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white">Leadership</h4>
                      <p className="text-gray-300">
                        Student organizations, Event management
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl border border-gray-600"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Passions & Goals
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🚀</span>
                    <span className="text-gray-300">
                      Entrepreneurship & Innovation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌎</span>
                    <span className="text-gray-300">
                      Cultural Bridge Building
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💼</span>
                    <span className="text-gray-300">
                      U.S. Career Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧠</span>
                    <span className="text-gray-300">Continuous Learning</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-2xl border border-gray-600"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Languages & Culture
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇬🇹</div>
                    <p className="font-semibold text-white">Spanish</p>
                    <p className="text-sm text-gray-300">Native</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇺🇸</div>
                    <p className="font-semibold text-white">English</p>
                    <p className="text-sm text-gray-300">Fluent</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇩🇪</div>
                    <p className="font-semibold text-white">German</p>
                    <p className="text-sm text-gray-300">Learning</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇷🇺</div>
                    <p className="font-semibold text-white">Russian</p>
                    <p className="text-sm text-gray-300">Learning</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Core Values</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl border border-gray-600">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-white mb-2">Mentorship</h4>
                <p className="text-gray-300 text-sm">
                  Believing in the power of guidance and shared knowledge
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl border border-gray-600">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-bold text-white mb-2">Communication</h4>
                <p className="text-gray-300 text-sm">
                  Building bridges through clear and open dialogue
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl border border-gray-600">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-bold text-white mb-2">Growth</h4>
                <p className="text-gray-300 text-sm">
                  Continuously evolving and embracing new challenges
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl border border-gray-600">
                <div className="text-3xl mb-3">🙏</div>
                <h4 className="font-bold text-white mb-2">Faith</h4>
                <p className="text-gray-300 text-sm">
                  Grounded in Catholic values and open-minded perspective
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
