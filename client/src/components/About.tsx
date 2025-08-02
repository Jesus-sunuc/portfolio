const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Guatemala to Snow College, here's my journey in technology
              and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
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
                <p className="text-gray-700 leading-relaxed">
                  Originally from Guatemala, I've embarked on an incredible
                  journey to Snow College where I'm now entering my senior year
                  in Software Engineering. This path has shaped my perspective
                  on technology's power to connect cultures and create
                  opportunities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
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
                <p className="text-gray-700 leading-relaxed">
                  As a full-stack intern at Snow College's IT department, I work
                  with cutting-edge technologies including Python, FastAPI,
                  React, and cloud infrastructure. My experience spans
                  cybersecurity, student leadership, and event organization.
                </p>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Education & Growth
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Snow College
                      </h4>
                      <p className="text-gray-600">
                        Software Engineering • Senior Year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Technical Skills
                      </h4>
                      <p className="text-gray-600">
                        Full-stack development, Cloud infrastructure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Leadership
                      </h4>
                      <p className="text-gray-600">
                        Student organizations, Event management
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Passions & Goals
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🚀</span>
                    <span className="text-gray-700">
                      Entrepreneurship & Innovation
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌎</span>
                    <span className="text-gray-700">
                      Cultural Bridge Building
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">💼</span>
                    <span className="text-gray-700">
                      U.S. Career Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧠</span>
                    <span className="text-gray-700">Continuous Learning</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Languages & Culture
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇬🇹</div>
                    <p className="font-semibold text-gray-800">Spanish</p>
                    <p className="text-sm text-gray-600">Native</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇺🇸</div>
                    <p className="font-semibold text-gray-800">English</p>
                    <p className="text-sm text-gray-600">Fluent</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇩🇪</div>
                    <p className="font-semibold text-gray-800">German</p>
                    <p className="text-sm text-gray-600">Learning</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🇷🇺</div>
                    <p className="font-semibold text-gray-800">Russian</p>
                    <p className="text-sm text-gray-600">Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Core Values
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-bold text-gray-800 mb-2">Mentorship</h4>
                <p className="text-gray-600 text-sm">
                  Believing in the power of guidance and shared knowledge
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
                <div className="text-3xl mb-3">💬</div>
                <h4 className="font-bold text-gray-800 mb-2">Communication</h4>
                <p className="text-gray-600 text-sm">
                  Building bridges through clear and open dialogue
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl">
                <div className="text-3xl mb-3">🌱</div>
                <h4 className="font-bold text-gray-800 mb-2">Growth</h4>
                <p className="text-gray-600 text-sm">
                  Continuously evolving and embracing new challenges
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl">
                <div className="text-3xl mb-3">🙏</div>
                <h4 className="font-bold text-gray-800 mb-2">Faith</h4>
                <p className="text-gray-600 text-sm">
                  Grounded in Catholic values and open-minded perspective
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
