import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/behringer.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/premiere.png";
import Tools13 from "/assets/tools/capcut.png";
import Tools14 from "/assets/tools/audition.png";
import Tools15 from "/assets/tools/studio.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Behringer",
    ket: "Hardware Mixing",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "premiere",
    ket: "Video Editing",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "capcut",
    ket: "Video Editing",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "audition",
    ket: "Sound Engineer",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Studio One",
    ket: "Sound Engineer",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/project1.png";
import Proyek2 from "/assets/proyek/project2.png";
import Proyek3 from "/assets/proyek/project3.png";
import Proyek4 from "/assets/proyek/project4.png";
import Proyek5 from "/assets/proyek/project5.png";
import Proyek6 from "/assets/proyek/project6.jpg";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Order Pesanan",
    tools: ["HTML", "CSS", "PHP", "Javascript"],
    dad: "200",
    link : "https://github.com/bernadus11/app-penjualan.git",
    buttonText: "Lihat Source Code"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website absensi CRUD",
    tools: ["HTML", "CSS", "Javascript", "Nodejs", "Bootstrap", "Expressjs"],
    dad: "300",
    link : "https://github.com/bernadus11/testaplikasi.git",
    buttonText: "Lihat Source Code"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Landing Page Company Profile",
    tools: ["Html", "CSS", "Bootstrap",],
    dad: "400",
    link : "https://github.com/bernadus11/landing-page.git",
    buttonText: "Lihat Source Code"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Mixing Music",
    tools: ["Studio One"],
    dad: "500",
    link: "https://drive.google.com/drive/folders/1V5qwbNJrrINkMTPtNBxPUtWnd4-b90_T?usp=drive_link",
    buttonText: "Lihat Project",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Mixing Mastering Music",
    tools: ["Adobe Audition"],
    dad: "600",
    link: "https://drive.google.com/drive/folders/1Oo-QqfbGaiLOlfE3opINMlUoTQdwvI0J?usp=drive_link",
    buttonText: "Lihat Project"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Design Canva",
    tools: ["Canva"],
    dad: "700",
    link: "https://drive.google.com/drive/folders/1jVV_oyziIVqyc_aNVt7iHbm_sZcwXcze?usp=drive_link",
    buttonText: "Lihat Project"
  },
];
