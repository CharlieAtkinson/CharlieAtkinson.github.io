/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Charlie Atkinson",
  title: "Hi all, I'm Charlie",
  subTitle: emoji(
    "A Robotics and AI graduate from the University of Hull with a passion for Artificial Intelligence, Machine Learning, and Data Science 🚀. Skilled in Python, machine learning algorithms, computer vision, and NLP."
  ),
  resumeLink: "", // Add your resume link here if available
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/charlieatkinson",
  linkedin: "https://www.linkedin.com/", // Add your LinkedIn URL if available
  gmail: "charlie@charlesxatkinson.co.uk",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA SCIENCE, MACHINE LEARNING & ROBOTICS PRACTITIONER",
  skills: [
    emoji(
      "⚡ Build robust Machine Learning and Deep Learning models for classification, NLP, and predictive tasks"
    ),
    emoji("⚡ Develop real-time computer vision systems using YOLOv11 and OpenCV"),
    emoji(
      "⚡ Implement autonomous multi-agent simulations and robotics solutions using ROS 2 Humble and Python"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "js",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Hull, UK",
      logo: require("./assets/images/HullLogo.png"),
      subHeader: "BSc Robotics and Artificial Intelligence",
      duration: "Sept 2023 – July 2026",
      desc: "Engineered real-time computer vision systems, multi-agent ROS 2 simulations, and complex AI search/reinforcement learning models.",
      descBullets: [
        "Engineered a real-time computer vision referee using YOLOv11 Nano and OpenCV, achieving 0.970 mAP@50 and 12–15 FPS on CPU.",
        "Developed an autonomous multi-agent pursuit simulation in ROS 2 Humble achieving a First-Class grade (1st).",
        "Conducted end-to-end predictive modelling and fairness evaluation applying XGBoost, SHAP, and LIME."
      ]
    },
    {
      schoolName: "Bishop Stopford School",
      logo: require("./assets/images/BishopLogo.png"),
      subHeader: "A-Levels & Extended Project Qualification (EPQ)",
      duration: "September 2021 – June 2023",
      desc: "Achieved grade B in A-Level Maths and C in Physics and Computer Science. Completed EPQ titled 'Should We Be Afraid of Artificial Intelligence?'"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Data Science", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python & Software Dev",
      progressPercentage: "85%"
    },
    {
      Stack: "Robotics & Computer Vision",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Work Experience Project",
      company: "Virgin Media O2 (UK)",
      companylogo: require("./assets/images/VirginLogo.png"),
      date: "Summer 2024",
      desc: "Completed a data science interview project involving cleaning, analysing, and processing a large dataset.",
      descBullets: [
        "Evaluated different machine learning models and decided on a Random Forest Classifier.",
        "Trained and tuned the model, evaluated performance using confusion matrices and F1 score to improve accuracy.",
        "Enhanced skills in Jupyter Notebook, Scikit-learn, Matplotlib, and Microsoft Excel."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME KEY MACHINE LEARNING, DEEP LEARNING, AND CLOUD PROJECTS THAT I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Update image if available
      projectName: "Disaster Tweet Classification",
      projectDesc: "Built a text classification model in Python using GloVe embeddings and multi-input neural networks with bidirectional LSTMs to identify disaster tweets (81.9% accuracy).",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/charlieatkinson"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Update image if available
      projectName: "Netflix Catalogue Trends Visualisation",
      projectDesc: "Analysed and visualised Netflix's catalogue data using Amazon QuickSight and AWS S3 to build interactive dashboards for insight discovery.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/charlieatkinson"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Qualifications 🏆 "),
  subtitle:
    "Competitions, Certifications, and Awards from my academic and personal journey!",

  achievementsCards: [
    {
      title: "2nd Place - Robotics Residential",
      subtitle:
        "University of Southampton (2022) run by Smallpeice Trust and sponsored by Thales. Designed, built, and coded a fully autonomous robot.",
      image: require("./assets/images/SmallpeiceLogo.png"),
      imageAlt: "Smallpeice Trust Logo",
      footerLink: []
    },
    {
      title: "Bebras Elite Top 10%",
      subtitle:
        "Ranked in the top 10% nationally in the Elite category (2021), qualifying for the Oxford University Computing Challenge.",
      image: require("./assets/images/BebrasLogo.png"),
      imageAlt: "Bebras Logo",
      footerLink: []
    },
    {
      title: "CyberCenturion Participant",
      subtitle: "Competed twice in the 6-hour cyber security challenge finding vulnerabilities across Linux virtual machines.",
      image: require("./assets/images/CyberCenturionLogo.png"),
      imageAlt: "CyberCenturion Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false // Set false to hide this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to check out or download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a graduate role in Machine Learning or just want to say hi? My Inbox is open for all.",
  number: "07504331346",
  email_address: "charlie@charlesxatkinson.co.uk"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set true since you are seeking a graduate role in Data Science

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};