const projects = [
  {
    title: "News Homepage",
    description: "Responsive news homepage with clean layout and typography.",
    image: "/screenshot/Newshomepgae-desktop.png",
    live: "https://interactive-dropdownproject.vercel.app",
    code: "https://github.com/MorakinyoErioluwa/Newspage-Homepage-Project.git"
  },

  {
    title: "Sunnyside Landing Page",
    description: "Modern landing page with responsive design.",
    image: "/screenshot/Sunnyside-Destop.png",
    live: "https://sunny-side-landing-page-project.vercel.app/",
    code: "https://github.com/MorakinyoErioluwa/SunnySide-LandingPage-Project.git"
  },

  {
    title: "Loopstudio",
    description: "Interactive landing page with strong visual hierarchy.",
    image: "/screenshot/Loopsided-desktop.png",
    live: "https://loopsided-landing-page.vercel.app/",
    code: "https://github.com/MorakinyoErioluwa/loopsided-landing-page.git"
  },

  {
    title: "Interactive DropDown",
    description: "Responsive interface with dynamic states and interactions.",
    image: "/screenshot/Interactive dropdown-desktop.png",
    live: "https://interactive-dropdown.vercel.app/",
    code: "https://github.com/MorakinyoErioluwa/Interactive-Dropdown-.git"
  },

  {
    title: "Calculator",
    description: " Mini app for calculating bill tips with real-time updates.",
    image: "/screenshot/Tip calculator-desktop.png",
    live: "https://tip-calculator-project-ten.vercel.app",
    code: "https://github.com/MorakinyoErioluwa/Tip-calculator-Project.git"
  },

  {
    title: "Portfolio",
    description: "Personal portfolio showcasing projects and frontend skills.",
    image: "/screenshot/portfolio.png",
    live: "https://the-loopsided-landing-page.netlify.app/",
    code: "https://github.com/Erioluwabee/THE-LOOPSIDED-LANDING.git"
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-6 md:px-12 lg:px-20 bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition duration-500"
    >

      <div className="mb-14">

        {/* intro to section */}
        <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold mb-4">
          Projects
        </p>

        {/* heading */}
        <h2 className="font-['Space_Grotesk']  text-4xl md:text-5xl font-bold">
          Selected Work
        </h2>

        {/* subheading */}
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl">
          Some projects I’ve built while learning frontend development.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:-translate-y-2 transition duration-300"
          >

            {/* project image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover object-top"
            />

            <div className="p-6">

              {/* project title */}
              <h3 className="font-['Space_Grotesk']  text-2xl font-bold mb-2">
                {project.title}
              </h3>

              {/* project description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex gap-4">

                {/* live links */}
                <a
                  href={project.live}
                  target="_blank"
                  className="text-cyan-400 hover:underline"
                >
                  Live →
                </a>

                {/* code links */}
                <a
                  href={project.code}
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Code →
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}