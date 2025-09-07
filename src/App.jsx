import DataImage from "./data";
import {listTools, listProyek} from "./data"


function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 ">
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[450px] rounded-3xl animate__animated animate__fadeInRight animate__delay-4s" loading="lazy"
        />
        <div className="items-center lg:ml-auto ml-6 animate__animated animate__fadeInLeft animate__delay-3s">
          <div className="flex items-center gap-3 mt-6 w-fit p-4 rounded-2xl ml-auto">
            <q className="font-mono text-rose-100">carpe diem</q>
          </div>
          <h1 className="font-mono text-lg text-rose-100">It's me</h1>
          <h1 className="font-mono text-5xl/tight font-bold mb-6 mr-auto text-rose-100">Valerian Rivaldi</h1>
          <p className="font-mono text-2xl/loose mr-auto">
            Aspiring Data Engineer | Computer Science Undergraduate
          </p>
          <p className="font-mono text-2xl/loose mb-6 mr-auto">
            Learning about SQL, databases, and data pipelines one step at a time.
          </p>
          <div className="flex flex-col items-start gap-4">
            <a href="../public/CV_ValerianRivaldi.pdf" target="_blank" className="font-mono text-rose-100 p-4 rounded-2xl hover:bg-zinc-800">Download CV <i class="ri-download-fill ri-lg"></i></a>
            <a href="#project" className="font-mono text-rose-100 p-4 rounded-2xl hover:bg-zinc-800">See Project <i class="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about mt-40 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 border border-zinc-700 rounded-lg"  data-aos="fade-up" data-aos-duration="1000">
          <p className="text-base/loose font-mono">
            Hi! I'm Valerian, a Computer Science undergraduate currently specializing in database technologies.  
            I'm passionate about working with data and understanding how information flows through systems.

            Right now, I'm exploring SQL, data modeling, and how to build efficient data pipelines.  
            I enjoy learning by doing — whether it's through class projects, tutorials, or small experiments.  
            While I'm still early in my journey, I'm eager to grow and contribute wherever I can.

            Outside of tech, I also enjoy film, reading, and a good cup of coffee.
          </p>
        </div>
      </div>

      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-mono font-bold mb-4 text-rose-100">Tools</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-70 font-mono">Still learning, still exploring —these are the tools I’ve been working with so far.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {listTools.map((tool) => (
          <div className=" flex items-center gap-2 p-3 border border-zinc-800 rounded-md group" data-aos="zoom-in" data-aos-duration="1000" key={tool.id}>
            <img src={tool.gambar} alt="Tools image" className="w-14 p-1 group " loading="lazy" />
            <div>
              <h4 className="font-mono font-bold">{tool.nama}</h4>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* project */}
      <div className="project mt-32 py-8" id="project">
        <h1 className="text-end text-4xl font-mono font-bold text-rose-100">Project</h1>
        <p className="text-base/loose text-end font-mono opacity-70">Some of my project</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 gap-10" data-aos="fade-down" data-aos-duration="2000">
          {listProyek.map((proyek) => (
            <div key={proyek.id}>
              <img className="rounded-md" src={proyek.gambar} alt="" loading="lazy" />
              <div>
                <h1 className="text-2xl font-mono font-bold my-4 text-rose-100">{proyek.nama}</h1>
                <p className="text-base/loose font-mono mb-4">{proyek.desk}</p>
                <div className="mb-3">
                  <a
                    href={proyek.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-rose-100 p-4 rounded-2xl hover:bg-zinc-800"
                  >
                    Visit Web <i className="ri-arrow-right-up-long-fill"></i>
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="contact mt-32 mb-25 sm:p-10 p-2" id="contact">
        <h1 className="text-4xl font-mono font-bold text-center text-rose-100">Contact</h1>
        <p className="text-base/loose font-mono text-center mb-10 opacity-70 mt-3">Got a question or opportunity? Feel free to reach out!</p>
        <form action="https://formsubmit.co/valerianrvd11@gmail.com" method="POST" className="border border-zinc-600 sm:p-10 p-5 sm:w-fit w-full mx-auto rounded-md">
          <div className="flex flex-col gap-5 font-mono font-bold">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input className="text-rose-100 border border-zinc-600 p-2 rounded-md" type="text" name="name" placeholder="Insert Name" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input className="text-rose-100 border border-zinc-600 p-2 rounded-md" type="email" name="email" placeholder="Insert Email" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea className="text-rose-100 border border-zinc-600 p-2 rounded-md" name="message" id="message" cols="45" rows="10" placeholder="Insert Message"></textarea>
            </div>
            <div className="text-center">
              <button className="text-rose-100 p-3 rounded-lg w-full cursor-pointer hover:bg-zinc-800" type="submit">Submit <i class="ri-send-plane-fill"></i></button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
