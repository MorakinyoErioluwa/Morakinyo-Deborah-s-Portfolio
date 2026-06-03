export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 px-6 md:px-12 lg:px-20 pt-32">

        <div className="flex-1 text-center lg:text-left">

          {/* title */}
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold mb-6">
            Frontend Developer
          </p>

          {/* heading */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-7xl leading-tight font-bold max-w-[700px] mx-auto lg:mx-0">
             Turning ideas into interactive web interfaces.
          </h1>

          {/* subheading */}
          <p className="mt-8 text-lg leading-8 text-gray-400 max-w-[600px] mx-auto lg:mx-0">
            From concept to screen, I enjoy building digital experiences that are clean, engaging and easy to use.
          </p>


          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 mb-4 justify-center lg:justify-start">

          <a
          href="#projects"
          className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition dark:bg-cyan-400 dark:text-black"
          >
          View Projects
         </a>

          <a
          href="#contact"
          className="border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-8 py-4 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition"
          >
          Let's Talk
          </a>

        </div>

        </div>

        <div className="flex-1 flex justify-center">

          {/* profile picture*/}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-[40px]"></div>

            <img
              src="/picture.jpg"
              alt="Deborah"
              className="relative mb-2 w-[320px] md:w-[400px] lg:w-[430px] h-[450px] md:h-[520px] object-cover rounded-[40px] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  )
}