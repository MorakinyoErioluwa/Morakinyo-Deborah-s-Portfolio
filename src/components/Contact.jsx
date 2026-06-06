import { useState } from "react";
export default function Contact() {

  const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.target);

  const response = await fetch("https://formspree.io/f/mqejwgdn", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    e.target.reset();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  }

  setLoading(false);
};
  return (
    <section
      id="contact"
      className="relative py-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >

      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* left-side */}
        <div>
          
          {/* intro to section */}
          <p className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold mb-6">
            Contact
          </p>

          {/* heading */}
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white">
            Let’s build something amazing together.
          </h2>

          {/* subheading */}
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-400 leading-8">
            I’m currently open to internships, freelance opportunities and frontend collaborations.
            Feel free to reach out if you'd like us to work together.
          </p>

          {/* contact details */}
          <div className="mt-10 space-y-4 text-gray-700 dark:text-gray-400">

            <p>📍 Lagos, Nigeria</p>

            <p>📧 erioluwamorakinyo35@gmail.com</p>

          </div>

        </div>

        {/* right-side , form section */}
        <div>

          <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-6"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="px-5 py-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-black dark:text-white outline-none focus:border-cyan-400 transition"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="px-5 py-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-black dark:text-white outline-none focus:border-cyan-400 transition"
  />

  <textarea
    rows="6"
    name="message"
    placeholder="Your Message"
    required
    className="px-5 py-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-black dark:text-white outline-none focus:border-cyan-400 transition resize-none"
  ></textarea>

  <div className="flex justify-center lg:justify-start">
    <button
      type="submit"
      disabled={loading}
      className="bg-cyan-400 text-black font-semibold py-4 rounded-xl hover:scale-[1.02] transition w-fit px-10 disabled:opacity-70"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  </div>

  {success && (
    <p className="text-green-500 font-medium">
      Message sent successfully!
    </p>
  )}
</form>

        </div>

      </div>

    </section>
  )
}