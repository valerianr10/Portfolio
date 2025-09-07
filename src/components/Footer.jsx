const Footer = () => {
  return (
    <div className="py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-3xl font-mono font-bold text-rose-100">Find me on</h1>
        <div className="text-lg font-mono font-bold flex gap-7">
            <a href="#home">Top <i class="ri-arrow-up-long-line"></i></a>
        </div >
        <div className="flex items-center gap-3">
            <a target="_blank" href="https://github.com/valerianr10">
                <i className="ri-github-fill ri-3x"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/valerian-rivaldi-7b2ab5228/">
                <i className="ri-linkedin-fill ri-3x"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/valerianrvd/ ">
                <i className="ri-instagram-fill ri-3x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer