import Birthday from "../public/images/birthday.jpeg";
import USA from "../public/images/USA.png";
import Flight from "../public/images/Flight.png";

export const navItems = [
  { name: "About", link: "#about", scrollPath: "about", offset: 60 },
  { name: "Projects", link: "#projects", scrollPath: "projects" },
  {
    name: "Testimonials",
    link: "#mobileTest",
    scrollPath: "mobileTest",
    offset: 60,
    className: "block md:hidden",
  },
  {
    name: "Testimonials",
    link: "#test",
    scrollPath: "test",
    offset: -10,
    className: "hidden md:block",
  },
  { name: "Contact", link: "#contact", scrollPath: "contact", offset: -10 },
];

export const SixtiethBirthdayData = {
  src: Birthday.src,
  alt: "Image of Johnnys 60th Birthday",
  title: "Sixtieth Birthday",
  description:
    "This project is a celebratory, interactive website for Johnny's 60th Birthday Bash, featuring photo and video galleries, accordions, confetti effects, background music, and a modal YouTube player. It was built using HTML, CSS, and JavaScript, with Git and GitHub for version control and Git LFS for handling large media files. The site is deployed using GitHub Pages, allowing easy public access and updates directly from the main branch.",
  Github: "https://github.com/JohnPlamoottil/Johnny-s-60th-Birthday-Bash",
  site: "https://johnplamoottil.github.io/Johnny-s-60th-Birthday-Bash/",
  stack1: "HTML",
  stack2: "CSS",
  stack3: "Javascript",
};

export const AroundTheUsData = {
  src: USA.src,
  alt: "Image of Around The USA",
  title: "Around The USA",
  description:
    "Around the MDW is a project that was crafted purely with JavaScript. With a high focus in OOP the user is greeted with a stunning aesthetic website. The website is a social media page that allows the user to make it their own! From editing the profile, adding a new profile photo, and adding or deleting photos in their feed.",
  Github: "https://github.com/JohnPlamoottil/se_project_aroundtheus",
  site: "https://johnplamoottil.github.io/se_project_aroundtheus/",
  stack1: "HTML/CSS",
  stack2: "JavaScript",
  stack3: "WebPack",
};

export const TrackerData = {
  src: Flight.src,
  alt: "Image Of Flight Tracker",
  title: "Flight Tracker",
  description:
    "Worked in a team of 3 other Engineers to create Flight Tracker. A fully responsive website that allows users to track REAL flights from anywhere. Whether you are expecting a guest, or flying yourself, you and get 24/7 flight status. Connected to multiple 3rd party APIs to fetch airport and airline data",
  Github: "https://github.com/Dillona25/flight-checker",
  site: "https://flightchecker.netlify.app/",
  stack1: "HTML",
  stack2: "Tailwind",
  stack3: "JavaScript",
};

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Kanna (JJ) during his time at our software engineering bootcamp. He is incredibly persistent, hardworking, and genuinely curious about learning. He demonstrated resilience and a strong commitment. His dedication and willingness to ask questions have allowed him to develop significantly over the course of the program. I’m confident that his curiosity and determination will continue to serve him well in his future career as a software engineer.",
    name: "Kevin Loughead",
    title: "Senior SE | Curriculum Developer",
    image: "/images/Kevin L.jpeg",
    linkedIn: "https://www.linkedin.com/in/kloughead/",
  },
  {
    quote:
      "JJ has shown himself to be an incredibly dedicated and persistent student. Even when faced with challenges, he never gave up and kept pushing forward. His willingness to try again and again,learn from mistakes, and seek out solutions is truly commendable. JJ is someone you can count on in a team — he’s always striving to do better and puts in his best effort. With this kind of attitude and determination, progress is only a matter of time. I’m confident that with his perseverance and motivation, he’ll achieve great things in the future.",
    name: "Serge Schreider",
    title: "Senior Software Engineer | Expert Tutor",
    image: "/images/Serge S.jpeg",
    linkedIn: "https://www.linkedin.com/in/serge-schreider/",
  },
  {
    quote:
      "I had the pleasure of working closely with Kanna JJ Plamoottil during his time at TripleTen, and I can confidently say he grew into a capable and well-rounded full stack developer by the end of the program. From the beginning, he demonstrated a strong willingness to learn, take feedback, and continuously improve. Throughout the course, he showed not only technical growth but also a solid understanding of how to apply that knowledge in real-world scenarios. He asked thoughtful questions, collaborated effectively, and consistently delivered quality work. His final project was a clear reflection of his skills and attention to detail. JJ is a motivated and reliable developer, and I’m excited to see where his career takes him. Any team would be lucky to have him.",
    name: "Dallin Sly",
    title: "React Developer | Tutor",
    image: "/images/dallin.jpeg",
    linkedIn: "https://www.linkedin.com/in/dallin-sly-software-engineer/",
  },
  {
    quote:
      "Just checked out my buddy’s dev portfolio — clean, fast, and actually shows off skill without the fluff. Real projects, smooth UI, and it works great on mobile too. Easily one of the better personal sites I’ve seen lately. Respect. I collaborated with JJ and 3 other developers to create the SightSee App during TripleTens July Code Jam. The project was JJs idea. His curiosity and ability to come up with unique ideas stood out during our time working together. Throughout the project, he showed a genuine willingness to learn and adapt, diving into new tools and languages with enthusiasm. His dedication made our journey from concept to execution smooth and efficient. I would recommend JJ to anyone seeking a dedicated, curious, and innovative developer.",
    name: "Donovan Jabbar",
    title: "Full Stack Developer",
    image: "/images/donovan.jpg",
    linkedIn: "https://www.linkedin.com/in/donovan-jabbar-b99955302/",
  },
];
