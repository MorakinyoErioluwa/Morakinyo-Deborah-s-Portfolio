export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* intro to section */}
        <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold mb-5">
          Skills
        </p>

        {/* heading */}
        <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold leading-tight max-w-[700px] mx-auto text-black dark:text-white">
          Tools & technologies I enjoy working with.
        </h2>

        {/* subheading */}
        <p className="mt-8 text-gray-700 dark:text-gray-400 leading-8 max-w-[650px] mx-auto text-lg">
          I enjoy building modern frontend interfaces with a focus on responsiveness,
          clean structure and smooth user experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-16">


          {/* skills list */}
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS",
            "React",
            "Git",
            "GitHub",
            "VS Code"
          ].map((skill) => (

            <div
              key={skill}
              className="px-6 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-black dark:text-white backdrop-blur-xl hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300"
            >
              {skill}
            </div>

          ))}

        </div>

      </div>

    </section>
  )
}