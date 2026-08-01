export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 px-6 md:px-12 lg:px-20 overflow-hidden bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition duration-500"
    >

      <div className="absolute top-0 left-[10%] w-[250px] h-[250px] bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-[10%] w-[250px] h-[250px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        <div className="mb-14">

          {/* intro to section */}
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold mb-6">
            About Me
          </p>
          
          {/* heading */}
          <h2 className="font-['Space_Grotesk']  text-4xl md:text-6xl font-bold leading-tight max-w-[800px]">
            I build responsive interfaces and turn ideas into web experiences.
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          <div>

            {/* first paragraph, description 1 */}
            <p className="text-lg leading-9 text-gray-600 dark:text-gray-400">
              My name is MORAKINYO DEBORAH and 
              I’m a frontend developer focused on building clean and responsive web interfaces.
               I enjoy translating designs into working products that look good and function properly across
                all screen sizes.

            </p>

          </div>

          <div>
            {/* second paragraph, description 2 */}
            <p className="text-lg leading-9 text-gray-600 dark:text-gray-400">

              Currently, I’m deepening my knowledge in React and modern
              frontend workflows while building projects that improve both
              my development and design thinking.

            </p>
            
            {/* skills subsets */}
            <div className="flex flex-wrap gap-4 mt-10">

              <span className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-sm">
                React
              </span>

              <span className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-sm">
                Tailwind CSS
              </span>

              <span className="px-5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-sm">
                JavaScript
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}