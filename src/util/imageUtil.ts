export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
};

export const getLogoFromLanguage = (language: string): string => {
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
  let logo: string = skills[0].logo;

  skills.forEach((skill) => {
    if (language.toLowerCase() === skill.title.toLowerCase()) {
      logo = skill.logo;
      return;
    }
  });
  return logo;
};
