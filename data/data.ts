import IntroProject from "../public/images/IntroProject.png"
import Library from "../public/images/Library.png"
import Birthday from "../public/images/birthday.jpeg";
import CoffeeShop from "../public/images/CoffeeShop.png"
import RealEstateSite from "../public/images/RealEstateSite.png"
import RealEstateForm from "../public/images/RealEstateForm.png"
import USA from "../public/images/USA.png";
import WhatToWear from "../public/images/WhatToWear.png";
import FinalProject from "../public/images/FinalProject.png"

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

export const IntroProjectData = {
  src: IntroProject.src,
  alt: "Image of Sprint 0 Intro Project",
  title: "Sprint 0: Onboarding Project",
  description:
    "This frontend project is a personal introduction website created to showcase information about the author, including family, biography, and career highlights. Built using HTML and CSS, it features a visually engaging layout with custom images and responsive design elements. The project demonstrates fundamental web development skills and serves as a creative portfolio piece.",
  Github: "https://github.com/JohnPlamoottil/Introduction-Project-Feb2023",
  site: "https://johnplamoottil.github.io/Introduction-Project-Feb2023/",
  stack1: "HTML/CSS",
  stack2: "FrontEnd",
  stack3: "TypeScript",
};

export const LibraryData = {
  src: Library.src,
  alt: "Image of Sprint 1 Library",
  title: "Sprint 1: Library Project",
  description:
    "This frontend project is The Practicum Library webpage which is the first project in the Software Engineer program at Practicum. It was created using HTML and CSS, based on a design brief.",
  Github: "https://github.com/JohnPlamoottil/se_project_library",
  site: "https://johnplamoottil.github.io/se_project_library/",
  stack1: "HTML5/CSS",
  stack2: "Z-Index/FrontEnd",
  stack3: "Flexbox/Positioning",
};

export const SixtiethBirthdayData = {
  src: Birthday.src,
  alt: "Image of Sprint 1 Johnnys 60th Birthday",
  title: "Sprint 1: 60th Birthday Project",
  description:
    "This frontend project is a celebratory, interactive website for Johnny's 60th Birthday Bash, featuring photo and video galleries, accordions, confetti effects, background music, and a modal YouTube player. It was built using HTML, CSS, and JavaScript, with Git and GitHub for version control and Git LFS for handling large media files. The site is deployed using GitHub Pages, allowing easy public access and updates directly from the main branch.",
  Github: "https://github.com/JohnPlamoottil/Johnny-s-60th-Birthday-Bash",
  site: "https://johnplamoottil.github.io/Johnny-s-60th-Birthday-Bash/",
  stack1: "FrontEndd",
  stack2: "HTML/CSS",
  stack3: "Javascript",
};

export const CoffeeShopData = {
  src: CoffeeShop.src,
  alt: "Image of Sprint 2 Project",
  title: "Sprint 2: Coffee Shop Project",
  description:
    "This is the second project of the Software Engineering program at TripleTen. It was created using HTML and CSS, based on the design brief. It is solely frontend.",
  Github: "https://github.com/JohnPlamoottil/Johnny-s-60th-Birthday-Bash",
  site: "https://johnplamoottil.github.io/se_project_coffeeshop/",
  stack1: "HTML5/CSS",
  stack2: "Flexbox",
  stack3: "FrontEnd",
};

export const RealEstateWebsiteData = {
  src: RealEstateSite.src,
  alt: "Image of Kannas Realty",
  title: "Sprint2: Real Estate",
  description:
    "As part of the second project. I created my own frontend Real Estate Site showcasing up to date properties on a weekly basis. Methods I used were gridboxs, flexbox, and like/trash icons.",
  Github: "https://github.com/JohnPlamoottil/kanna-plamoottil-realty",
  site: "https://johnplamoottil.github.io/kanna-plamoottil-realty/",
  stack1: "Positioning",
  stack2: "BEM/FrontEnd",
  stack3: "Custom Form",
};

export const RealtyFormData = {
  src: RealEstateForm.src,
  alt: "Image of JJs RE Contact Form",
  title: "Sprint2: Contact Form",
  description:
    "Using tools that I learned in the program, I developed a frontend contact form for my real estate business for others to use.",
  Github: "https://github.com/JohnPlamoottil/contact-form",
  site: "https://johnplamoottil.github.io/contact-form/",
  stack1: "HTML/Javascript",
  stack2: "CSS Tailwind",
  stack3: "FormSpree/FrontEnd",
};

export const AroundTheUsData = {
  src: USA.src,
  alt: "Image of Around The USA",
  title: "Sprint3-9: Around US Project",
  description:
    "Around the USA is a frontend project that was crafted purely with JavaScript. With a high focus in OOP the user is greeted with a stunning aesthetic website. The website is a social media page that allows the user to make it their own! From editing the profile, adding a new profile photo, and adding or deleting photos in their feed.",
  Github: "https://github.com/JohnPlamoottil/se_project_aroundtheus",
  site: "https://johnplamoottil.github.io/se_project_aroundtheus/",
  stack1: "HTML/CSS/FrontEnd",
  stack2: "JavaScript",
  stack3: "WebPack",
};

export const WTWRData = {
  src: WhatToWear.src,
  alt: "Image of WTWR React & Express",
  title: "Sprint10-15: WTWR Project",
  description:
    "Its simple. What to wear is a project that takes a users loaction and the weather in the specified location and then suggests clothes for the user to wear. The user can add and delete clothes in their closet. The project was made using React.js and CSS. I created and programmed an entire back-end and server using node.js, express.js and mongoDB to seamlessly take care of the users requests here on the front-end.",
  Github: "https://github.com/JohnPlamoottil/se_project_express",
  site: "https://wtwr-jjsprint15.chickenkiller.com/",
  stack1: "HTML/CSS/Full Stack",
  stack2: "React/Express/Node.JS",
  stack3: "MongoDB/GoogleCloud",
};

export const FinalData = {
  src: FinalProject.src,
  alt: "Image of Samarpanam 2025",
  title: "Sprint16: Final Project",
  description:
    "Samarpanam 2025 ft. Bharatanatyam Arangetram is a Full Stack project that used React Vite and CSS styling to showcase all six dancer's 10year dance journey. EmailJS was used to enable the RSVP functionality as well as sending messaging in the FAQ page. MongoDB stored all the guestbook messages that dancers recieved from viewers. GoogleCloud and Render deployed the code online. Cloudinary stored photos and videos to display in the Gallery page. A QR code was pasted on the brochure for users to access this website to view the Repertoire and Musician biodata. GoogleAPI is used in the Venue page for directions to the venue. Youtube links showcased a livestream of the event as well as emotional videos for the dancers. A devoted page for each dancer showcased their talents and achievements earned during their time. ",
  Github: "https://github.com/JohnPlamoottil/Bharatanatyam-Project",
  site: "https://arangetram2025.onrender.com/#/",
  stack1: "HTML/CSS/Full Stack",
  stack2: "React/Express/Node.JS",
  stack3: "MongoDB/GoogleCloud",
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
