import DataImage from "./data";
import {listTools,listProyek} from './data';
function App() {

  return (
    <>
   <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="beranda">
    <div className="animate__animated animate__fadeInLeft animate__delay-1s"> 
      <div className="flex items-center gap-3 bg-zinc-800 w-fit p-4 rounded-2xl ml-1">
        <img src="/assets/masbernad.jpeg" alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
        <q>Try and work in everything with us😊</q>
      </div>
      <h1
      className="
        text-4xl md:text-5xl font-extrabold mb-4
        bg-gradient-to-r from-blue-400 via-violet-500 to-indigo-400
        bg-clip-text text-transparent
        drop-shadow-[0_0_20px_rgba(99,102,241,0.4)]
        hover:scale-[1.02] transition duration-500
      "
    >
     Hello, I am Bernadus Dewanto Utoyo
    </h1>

    {/* P */}
   <p className="
  text-base md:text-lg mb-8 px-3 opacity-60
  leading-relaxed max-w-xl
  animate-[fadeUp_1s_ease-out]
">
  Bachelor of Computer Science, Universitas Ngudi Waluyo,
  a <span className="text-violet-400 font-semibold">Fullstack Web Developer</span> focused
  on building modern web applications using
  <span className="text-violet-400 font-semibold"> React</span> on the frontend,
  <span className="text-violet-400 font-semibold"> Node.js</span> on the backend, and
  <span className="text-violet-400 font-semibold"> MySQL</span> as the database. Experienced in
  <span className="text-violet-400 font-semibold"> hosting via cPanel</span> and search engine optimization through
  <span className="text-violet-400 font-semibold"> Google Search Console & SEO</span>.
</p>
    <div className="flex flex-wrap items-center gap-5">
      <a
        href="https://cv-bernadusdw.my.canva.site/" target="blank"
        className="
          px-6 py-4 rounded-2xl font-semibold
          bg-blue-600/80 backdrop-blur-md
          shadow-[0_0_25px_rgba(59,130,246,0.45)]
          hover:shadow-[0_0_45px_rgba(59,130,246,0.8)]
          hover:scale-110 transition duration-500"
      >
        View CV
      </a>

      <a
        href="#project"
        className="
          px-6 py-4 rounded-2xl font-semibold
          border border-blue-400/40 text-blue-300
          hover:bg-blue-600 hover:text-white
          hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
          hover:scale-110 transition duration-500
        "
      >
        Show Project
      </a>
    </div>
    </div>
    <img
  src="/assets/masbernad.jpeg"
  alt="Hero Image"
  className="
    w-[500px] rounded-2xl mx-auto
    border-2 border-cyan-400
    transition-all duration-500
    hover:scale-105
    hover:border-fuchsia-500
    hover:shadow-[0_0_60px_rgba(255,0,255,0.9)]
    cursor-pointer
  "
/>
   </div>
   {/* tentang */}
   <div className="tentang mt-32 py-10" id="about">
    <div
  className="w-full md:w-2/3 mx-auto p-5 md:p-10 bg-zinc-800/80 backdrop-blur-md rounded-2xl border border-zinc-700"
  data-aos="fade-down"
  data-aos-duration="1000"
>
  <div className="grid md:grid-cols-2 gap-14 items-center">

    {/* TEXT */}
    <div>
    <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b border-zinc-700 pb-2 w-fit">
    About Me
  </h2>

     <p className="text-base/loose text-zinc-400">
    I am a S1 graduate in Computer Engineering from Universitas Ngudi Waluyo with a GPA of 3.62 and a <em>Cumlaude</em> distinction. 
    During my studies, I have gained experience building various real-world projects within UMKM and educational environments, 
    making me familiar with the challenges and needs of the actual job market. I also hold a programmer competency certificate and a TOEFL Prediction score of 447, serving as evidence of my technical and professional communication readiness.
  </p>
    </div>

    {/* ID CARD + LANYARD */}
    <div className="relative flex justify-center">
      {/* GLOW */}
      <div className="absolute inset-0 
                      bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 
                      blur-3xl rounded-3xl" />

      {/* ID CARD */}
      <div
        className="
          relative
          w-64 h-96
          bg-zinc-900
          rounded-2xl
          border border-zinc-700
          shadow-2xl
          overflow-hidden
          transition-all duration-500
          hover:rotate-2 hover:scale-105
        "
      >
    <img
          src="/assets/profil.png"
          alt="ID Card"
          loading="lazy"
          className="w-full h-72 object-cover object-top"
        />

        <div className="p-4 text-center">
          <h3 className="text-white font-semibold text-lg">
            Bernadus Dewanto
          </h3>
        </div>
      </div>

    </div>

  </div>
</div>


    {/* tools */}
    <div className="tools mt-32">
    <div className="group cursor-pointer">
  <h1 className="
    text-center text-4xl font-bold mb-2
    text-white
    transition-all duration-300
    group-hover:text-zinc-400
    group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.9)]" data-aos="fade-down" data-aos-duration="1000">
    Tools</h1>

  <p className="
    text-base/loose text-center
    text-white/40
    transition-all duration-300
    group-hover:text-zinc-300 group-hover:opacity-80
  " data-aos="fade-down"
  data-aos-duration="1000" data-aos-delay="100"
>
   Here are some tools that I often use in developing projects.
  </p>
</div>
    <div className="toolsbox mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
    {listTools.map(tool => (
       <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
       key={tool.id} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="tool.dad">
       <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
       <div>
         <h4 className="font-bold">{tool.nama}</h4>
         <p className="opacity-50">{tool.ket}</p>
       </div>
     </div>
    ))}
    </div>
    </div>
   </div>
{/* Project Section */}
<div className="project mt-32 py-10" id="project">
  <div className="group cursor-pointer">
  <h1 className="
    text-center text-4xl font-bold mb-2
    text-white
    transition-all duration-300
    group-hover:text-blue-400
    group-hover:drop-shadow-[0_0_14px_rgba(59,130,246,0.9)]
  " data-aos="fade-down" data-aos-duration="1000">
    Project
  </h1>

  <p className="
    text-base/loose text-center
    text-white/40
    transition-all duration-300
    group-hover:text-blue-300 group-hover:opacity-80" 
    data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
    Here are some projects that I have built</p>
</div>


  {/* GRID */}
  <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 group" 
  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="buttonText">
    {listProyek.map((proyek) => (
      <div 
      key={proyek.id}
        className="
          relative overflow-hidden rounded-2xl
          bg-zinc-900/80 backdrop-blur-md
          border border-zinc-800 p-4
          transition-all duration-500 ease-out
          group-hover:opacity-10
          hover:!opacity-100
          hover:!blur-0
          hover:scale-[1.04]
          hover:z-10 hover:scale-105
          hover:border-cyan-600
          hover:shadow-[0_0_60px_rgba(255,0,255,0.9)]"
      >
        {/* GLOW LAYER */}
        <div
          className="
            pointer-events-none absolute inset-0
            before:absolute before:inset-0
            before:rounded-2xl
            before:bg-gradient-to-r
            before:from-violet-500/40
            before:via-fuchsia-500/40
            before:to-indigo-500/40
            before:blur-2xl
            before:opacity-10
            hover:before:opacity-100
            before:transition-opacity before:duration-700
          "
        />

        {/* IMAGE */}
        <img
          src={proyek.gambar}
          alt="Proyek Image"
          loading="lazy"
          className="rounded-xl mb-4"
        />

        {/* CONTENT */}
        <div className="relative z-10">
          <h1 className="text-xl font-bold my-4 text-white">
            {proyek.nama}
          </h1>

          <p className="text-sm/relaxed mb-4 text-zinc-400">
            {proyek.desk}
          </p>

          {/* TOOLS */}
          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool, index) => (
              <span
                key={index}
                className="
                  px-3 py-1 text-xs font-semibold
                  rounded-full
                  bg-zinc-800 text-zinc-300
                  border border-zinc-700
                "
              >
                {tool}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <div className="mt-8 text-center">
            <a
              href={proyek.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block w-full
                rounded-xl py-3 font-semibold
                bg-gradient-to-r from-violet-600 to-fuchsia-600
                text-white
                hover:from-violet-500 hover:to-fuchsia-500
                transition-all duration-300
              "
            >
              {proyek.buttonText}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

   {/* Project Section */}
  {/* Contact */}
  <div className="kontak mt-32 p-10" id="contact">
    <h1 className="text-4xl mb-2 font-bold text-center">Contact</h1>
    <p className="text-base/loose text-center mb-10 opacity-50">Order my services</p>
    <form action="https://formsubmit.co/dewantoernad@gmail.com" method="POST" 
    className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off">
      <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Full Name</label>
        <input type="text" name="nama" placeholder="Username" className="border border-zinc-500 p-2 rounded-md" required />
      </div>
      <div  className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input type="email" name="email" placeholder="Email" className="border border-zinc-500 p-2 rounded-md" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="font-semibold">Message</label>
        <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Message" className="border border-zinc-500 p-2 rounded-md" required></textarea>
        </div>
      </div>
      <div className="text-center ">
        <button type="submit" className="bg-violet-700 p-3 mt-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
      </div>
    </form>
  </div>
  {/* Contact */}

    </>
  );
}

export default App
