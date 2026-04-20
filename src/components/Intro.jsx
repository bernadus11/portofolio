const Intro = () => {
  // LOCK SCROLL SAAT INTRO ADA
  document.body.classList.add("intro-active");

  const handleStart = () => {
  document.body.classList.remove("intro-active");

  const intro = document.querySelector(".intro");
  intro.classList.add("intro-exit");

  setTimeout(() => {
    intro.style.display = "none";

    document.getElementById("beranda").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 1000);
};
  return (
    <section className="intro fixed inset-0 z-50 flex items-center justify-center text-center">
      <div className="code-bg"></div>
      <div className="overlay"></div>

      <div className="relative z-10 px-4">
        <h1 className="robot-text text-cyan-400 text-sm sm:text-base md:text-2xl lg:text-3xl xl:text-4xl typewriter glitch leading-relaxed"
  data-text="Welcome to My Portfolio Website">Welcome to My Portfolio Website</h1>
        <button
          onClick={handleStart}
          className="start-btn mt-12 robot-text"
        >
          START
        </button>
      </div>
    </section>
  );
};

export default Intro;
