import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            &lt;Projects&gt;
          </h2>
          <div className="grid grid-col-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Todo-List</h3>
              <p className="text-gray-400 mb-3">
                The ToDo React App is a simple and intuitive task management
                application built using React.js. It allows users to create,
                manage, and track their daily tasks efficiently. With a clean
                user interface and responsive design, this app helps users stay
                organized and productive.
              </p>
              <div className="">
                {["React", "Node.js", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors  my-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-3">
                The Weather App is a dynamic and user-friendly web application
                that provides real-time weather updates for any city entered by
                the user. Built using React.js and integrated with a weather
                API, the app fetches and displays accurate and up-to-date
                weather parameters based on the user's input.
              </p>
              <div className="">
                {["HTML", "JavaScript", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors  my-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Calculator App</h3>
              <p className="text-gray-400 mb-3">
                Calculator App is a web-based calculator built with React.js
                that performs basic arithmetic operations. Featuring a clean and
                responsive interface, it mimics a standard handheld calculator
                and helps reinforce core React concepts like components and
                state management. perferendis voluptates!
              </p>
              <div className="">
                {["HTML", "JavaScript", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors  my-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Canteen Management System UI
              </h3>
              <p className="text-gray-400 mb-3">
                I designed the Canteen Management System UI using Figma,
                focusing on a user-friendly, responsive layout for students,
                canteen owners, and admins with easy navigation, meal ordering,
                and order tracking features.
              </p>
              <div className="">
                {["Figma"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors  my-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
