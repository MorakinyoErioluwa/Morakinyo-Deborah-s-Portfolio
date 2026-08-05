const projects = [
  {
    title: "Movie Search App",
    description: "A movie search app using OMDD API.",
    image: "/screenshot/search.jpg",
    live: "https://rud-a.vercel.app/",
    code: "https://github.com/MorakinyoErioluwa/Movie-search.git"
  },

  {
    title: "Sunnyside Landing Page",
    description: "Modern landing page with responsive design.",
    image: "/screenshot/Sunnyside-Destop.jpg",
    live: "https://sunny-side-landing-page-project.vercel.app/",
    code: "https://github.com/MorakinyoErioluwa/SunnySide-LandingPage-Project.git"
  },

  {
    title: "Loopstudio",
    description: "Interactive landing page with strong visual hierarchy.",
    image: "/screenshot/Loopsided-desktop.jpg",
    live: "https://loopsided-landing-page.vercel.app/",
    code: "https://github.com/MorakinyoErioluwa/loopsided-landing-page.git"
  },

  {
    title: "A TO-D0 App",
    description: "A to-do app that saves tasks using Local Storage,",
    image: "/screenshot/Desktop-To-Do.png",
    live: "https://to-do-virid-omega.vercel.app//",
    code: "https://github.com/MorakinyoErioluwa/To-Do.git"
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
    image: "/screenshot/portfolio.jpg",
    live: "https://morakinyo-deborah-portfolio.vercel.app",
    code: "https://github.com/MorakinyoErioluwa/Morakinyo-Deborah-s-Portfolio.git"
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
          A showcase of some of the projects that I have worked on.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:-translate-y-2 transition duration-300"
          >

            {/* project image */}
            <a
              href={project.live} className="block overflow-hidden border-4 border-red-500"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover object-top transition duration-500 hover:scale-105"
              />
            </a>
            

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