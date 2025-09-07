import HeroImage from "/assets/hero2-img.jpg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/docker.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/mysql.png";
import Tools6 from "/assets/tools/postgresql.png";
import Tools7 from "/assets/tools/python.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/hadoop.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Docker",
    ket: "",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "MySQL",
    ket: "",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "PostgreSQL",
    ket: "",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Python",
    ket: "",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Hadoop",
    ket: "",
    dad: "900",
  },
];

import Proyek1 from "/assets/proyek/SirosisHati.jpg";
import Proyek2 from "/assets/proyek/ICCSCI.jpg";
import Proyek3 from "/assets/proyek/Hydrotrack.jpg";
import Proyek4 from "/assets/proyek/Tixnation.jpg";
import Proyek5 from "/assets/proyek/SpotifyPersonalWrapped.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Prediksi Sirosis Hati",
    desk: "I worked on a machine learning project to predict liver cirrhosis, where I focused on data preprocessing and visualizing correlations with heatmaps to uncover important patterns in the dataset",
    tools: ["Python, Streamlit"],
    dad: "200",
    link: "https://compbio-o4f8hz2difmnkw5ktpzget.streamlit.app/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "ICCSCI 2025",
    desk: "I contributed to the ICCSCI 2025 project by authoring a research paper on homomorphic encryption, focusing on its effectiveness in securing computations across edge–cloud environments.",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
    link: "https://drive.google.com/drive/u/0/folders/1_2MwuS4OJeB6YdeUHbiGmGvKKilC5n_Y",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Hydrotrack",
    desk: "I contributed to the HydroTrack project by creating the initial app concept and outline, as well as conducting both initial and unit testing to ensure functionality and reliability",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    link: "https://drive.google.com/drive/u/0/folders/12WbNCIdltSHv9V5UH1alhr1nJFuN8oo3",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Tixnation",
    desk: "I worked on the Tixnation project by designing and implementing the database through DDL and DML, ensuring the structure and data operations supported the application’s needs",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
    link: "https://drive.google.com/drive/u/0/folders/12WbNCIdltSHv9V5UH1alhr1nJFuN8oo3",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Spotify Personal Wrapped (on progress)",
    desk: "I’m developing a personal Spotify Wrapped using Python by integrating the Spotify API, processing listening data, and storing it in a Supabase database. The insights are displayed through a Streamlit dashboard. The project currently still on progress.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
    link: "https://github.com/valerianr10/SpotifyWrapped",
  },
];
