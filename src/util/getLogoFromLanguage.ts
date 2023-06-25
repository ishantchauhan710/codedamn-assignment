const skills = [
  {
    title: "HTML5",
    logo: "/icons/programming_languages/html-5.png",
  },
  {
    title: "CSS3",
    logo: "/icons/programming_languages/css.png",
  },
  {
    title: "HTML/CSS",
    logo: "/icons/programming_languages/html-5.png",
  },
  {
    title: "Javascript",
    logo: "/icons/programming_languages/javascript.png",
  },
  {
    title: "React",
    logo: "/icons/programming_languages/react.png",
  },
  {
    title: "Next.js",
    logo: "/icons/programming_languages/NextJs.png",
  },
  {
    title: "Mongo",
    logo: "/icons/programming_languages/mongodb.png",
  },
  {
    title: "NodeJs",
    logo: "/icons/programming_languages/node.png",
  },
  {
    title: "Python",
    logo: "/icons/programming_languages/python.png",
  },
  {
    title: "Java",
    logo: "/icons/programming_languages/java.png",
  },
];

export const getLogoFromLanguage = (language: string): string => {
  let logo: string = "";

  skills.forEach((skill) => {
    if (language.toLowerCase() === skill.title.toLowerCase()) {
      logo = skill.logo;
    } else {
      logo = skills[0].logo;
    }
  });

  return logo;
};
