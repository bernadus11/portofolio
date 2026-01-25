import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar px-8 flex items-center justify-between">
      <div className="logo">
      <h1 className="text-3xl font-bold bg-zinc p-1 text-white/50 md:text-white md:text-opacity-100 md:bg-transparent">
      Portofolio
      </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-7 md:static fixed left-1/2 
        -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl 
        md:bg-transparent transition-all md:transition-none z-50
        ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
            <li>
                <a href="#beranda" className="sm:text-lg text-base font-medium">Beranda</a>
            </li>
            <li>
                <a href="#about" className="sm:text-lg text-base font-medium">About</a>
            </li>
            <li>
                <a href="#project" className="sm:text-lg text-base font-medium">Project</a>
            </li>
            <li>
                <a href="#contact" className="sm:text-lg text-base font-medium">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
