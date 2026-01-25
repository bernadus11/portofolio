import DataImage from "./data";
import {listTools,listProyek} from './data';
function App() {

  return (
    <>
   <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1" id="beranda">
    <div className="animate__animated animate__fadeInLeft animate__delay-1s"> 
      <div className="flex items-center gap-3 bg-zinc-800 w-fit p-4 rounded-2xl ml-1">
        <img src="/public/assets/masbernad.jpeg" alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
        <q>Berusaha dan berkarya dalam segala hal bersama kami😊</q>
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
      Hallo, saya Bernadus Dewanto Utoyo
    </h1>

    {/* P */}
    <p className="
  text-base md:text-lg mb-8 px-3 opacity-60
  leading-relaxed max-w-xl
  animate-[fadeUp_1s_ease-out]
">
 Bachelor of Engineering, Universitas Ngudi Waluyo,
  dengan latar belakang pendidikan di bidang teknologi informasi serta minat
  yang kuat pada pengembangan keterampilan kreatif dan teknis, meliputi
  <span className="text-violet-400 font-semibold"> Sound Engineering</span>,
  <span className="text-violet-400 font-semibold"> Design</span>,
  <span className="text-violet-400 font-semibold"> Video Editing</span>,
  <span className="text-violet-400 font-semibold"> Programming</span>,
  serta <span className="text-violet-400 font-semibold">Music & Photography</span>.
</p>

    <div className="flex flex-wrap items-center gap-5">
      <a
        href="https://cv-bernadusdw.my.canva.site/" target="blank"
        className="
          px-6 py-4 rounded-2xl font-semibold
          bg-blue-600/80 backdrop-blur-md
          shadow-[0_0_25px_rgba(59,130,246,0.45)]
          hover:shadow-[0_0_45px_rgba(59,130,246,0.8)]
          hover:scale-110 transition duration-500
        "
      >
        Lihat CV
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
        Lihat Project
      </a>
    </div>
    </div>
    <img
  src="/public/assets/masbernad.jpeg"
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
       Saya adalah lulusan Teknik Informatika Universitas Ngudi Waluyo dengan fokus pada pengembangan keterampilan di bidang 
       teknologi dan industri kreatif. Saya memiliki pengalaman dalam Sound Engineering, desain visual 
       menggunakan Canva, video editing, serta programming untuk mendukung kebutuhan digital. 
       Ketertarikan saya pada music dan photography turut membentuk cara saya dalam memperhatikan detail, 
       komposisi, dan kualitas visual, sehingga mampu menghasilkan solusi yang modern, efektif, dan sesuai 
       dengan kebutuhan pengguna.
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
          src="/public/assets/profil.png"
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
    <h1 className="text-4xl/snug text-center font-bold mb-2" data-aos="fade-down" data-aos-duration="1000">Tools yang dipakai</h1>
    <p className="xl:w-2/5 lg:2/4 mx-auto text-center md:w-2/3 sm:3/4 w-full text-base/loose opacity-50" data-aos="fade-down" 
    data-aos-duration="1000" data-aos-delay="100">Berikut ini beberapa alat dan software yang sering saya gunakan</p>
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
  <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
  <p className="text-base/loose text-center opacity-40">
    Berikut ini beberapa project yang telah saya buat
  </p>

  {/* GRID */}
  <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 group">
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
    <p className="text-base/loose text-center mb-10 opacity-50">Join with me</p>
    <form action="https://formsubmit.co/dewantoernad@gmail.com" method="POST" 
    className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off">
      <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Nama Lengkap</label>
        <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
      </div>
      <div  className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input type="email" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="pesan" className="font-semibold">Pesan</label>
        <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
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
