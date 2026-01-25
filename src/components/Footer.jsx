const Footer = () => {
    return (
      <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
       <h1 className="text-3xl font-extrabold italic 
               bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
               bg-clip-text text-transparent">
  RNAD
</h1>

        <div className="flex gap-7">
          <a href="#beranda">Beranda</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/bernadusdewanto/"target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill ri-2x"></i></a>
          <a href="https://web.facebook.com/people/Nad/pfbid02BcLekGHBTP3fr1WjSD5wySkrNu9Atd3aDn9RPF1eFfgpXzrAxhRJ4ZVGadURsmcMl/"target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill ri-2x"></i></a>
          <a href="https://wa.me/6281330500362"target="_blank" rel="noopener noreferrer"><i className="ri-whatsapp-fill ri-2x"></i></a>
        </div>
      </div>
    )
  }
  
  export default Footer
  