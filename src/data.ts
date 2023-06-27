export const DummyUser = {
  fullname: "Anna Cheng",
  about: `Full stack dev at codedamn | Harvard'22"`,
  location: "Mumbai, India",
  profession: "Student",
  dob: "21/12/1952",
  gender: "Male",
  profilePic: "",
  coverPic: "",
  proAccountActivated: true,
  skills: [
    "HTML5",
    "CSS3",
    "Javascript",
    "React",
    "Next.js",
    "Mongo",
    "NodeJs",
    "Python",
    "Java",
  ],
  socials: {
    google: "https://www.google.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    linkedin: "https://www.linkedin.com",
    youtube: "https://www.youtube.com",
    github: "https://www.github.com",
    behance: "https://www.behance.com",
    dribbble: "https://www.dribbble.com",
  },
  configuration: {
    // Since there was no follower section provided in design file, I'm using this to toggle the project section
    showFollowers: true,
    // Since there was no XP section provided in design file, I'm using this to toggle the playground section
    showXP: true,
    // Since there was no achievement badges section provided in design file, I'm using this to toggle the certificate section
    showAchievementBadges: true,
  },
  stats: {
    longestStreak: 2,
    xp: 1200,
    league: "Novice",
    karmaPoints: 120,
  },
  projects: [
    {
      title: "Personal Portfolio Website",
      about: null,
      image: "/images/project_img.png",
      skills: ["HTML/CSS", "React"],
    },
    {
      title: "SpaceFeed",
      about: null,
      image: "/images/spacefeed_project_cover.jpg",
      skills: ["HTML/CSS", "React"],
    },
    {
      title: "WriterAI",
      about: null,
      image: "/images/writerai_project_cover.jpg",
      skills: ["HTML/CSS", "React"],
    },
    {
      title: "DeskViewer",
      about: null,
      image: "/images/deskviewer_project_cover.jpg",
      skills: ["HTML/CSS", "React"],
    },
  ],
  playgrounds: [
    {
      title: "Playground title",
      language: "HTML/CSS",
      time: "1min ago",
      sharedWith: [
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser2.png" },
      ],
    },
    {
      title: "Web Playground",
      language: "HTML/CSS",
      time: "1min ago",
      sharedWith: [
        { name: "Ishant", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser1.png" },
      ],
    },
    {
      title: "App Playground",
      language: "HTML/CSS",
      time: "1min ago",
      sharedWith: [
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser2.png" },
      ],
    },
    {
      title: "Backend Playground",
      language: "HTML/CSS",
      time: "1min ago",
      sharedWith: [
        { name: "Adam", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Adam", pic: "/icons/avatars/dummyuser2.png" },
        { name: "Anna", pic: "/icons/avatars/dummyuser1.png" },
        { name: "Ishant", pic: "/icons/avatars/dummyuser2.png" },
      ],
    },
  ],
  certificates: [
    {
      title: "Advanced theoritical Javascript",
      issuedDate: "Dec 16th, 2022",
      logo: "/icons/programming_languages/javascript.png",
    },
    {
      title: "HTML5 basic mastery",
      issuedDate: "Jan 12th, 2022",
      logo: "/icons/programming_languages/html-5.png",
    },
    {
      title: "HTML5 advanced mastery",
      issuedDate: "Apr 12th, 2022",
      logo: "/icons/programming_languages/html-5.png",
    },
    {
      title: "Basic theoritical Javascript",
      issuedDate: "Feb 16th, 2022",
      logo: "/icons/programming_languages/javascript.png",
    },
  ],
  resume: {
    shortIntro:
      "A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done. A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done",
    longIntro:
      "A student who is passionate and with a keen eye for design. A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done. A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done",
    experience: [
      {
        role: "Front-end developer",
        company: "Google",
        type: "inc",
        location: "London",
        duration: "May 2021 - Present",
        description:
          "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, JavaScript, jQuery, PHP/WordPress.",
        responsiblities: [],
      },
      {
        role: "Junior Front-end developer",
        company: "Meta",
        type: "inc",
        location: "New York",
        duration: "July 2020 - May 2021",
        description:
          "This role would be great for a web developer with 3+ years' experience in designing and developing responsive websites. ",
        responsiblities: [
          "Create an appealing design and turn it into a WordPress plugin",
          "Manage all technical aspects of the CMS",
          "Conducting website/application tests",
        ],
      },
    ],
    education: [
      {
        schoolName: "Harvard University",
        schoolLocation: "Cambridge, GA",
        certification: "Bachelor Degree, Computer Science (Bsc)",
        duration: "May 2020 - Present",
        description:
          "Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website",
      },
      {
        schoolName: "Mister Bim High School",
        schoolLocation: "Atlanta, GA",
        certification: null,
        duration: "September 2016 - 2020",
        description: null,
      },
    ],
    interests: [
      "Semantics",
      "TED Talks",
      "Udemy",
      "Behavioral",
      "Economics",
      "Hiking",
    ],
    languages: ["English", "Mandarin", "Cantonese Chinese"],
    isLookingForJob: true,
  },
};
