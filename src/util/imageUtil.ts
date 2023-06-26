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
  const data = [
    {
      title: "error",
      logo: "/icons/avatars/placeholder.png",
    },
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
    {
      title: "harvard",
      logo: "/images/harvard.png",
    },
    {
      title: "harvard university",
      logo: "/images/harvard.png",
    },
    {
      title: "English",
      logo: "/icons/flags/english.png",
    },
    {
      title: "Mandarin",
      logo: "/icons/flags/mandarin.png",
    },
    {
      title: "Cantonese Chinese",
      logo: "/icons/flags/china.png",
    },
    {
      title: "Facebook",
      logo: "/icons/social_media_platforms/Facebook.png",
    },
    {
      title: "Google",
      logo: "/icons/social_media_platforms/Google.png",
    },
  ];

  let logo: string = data[0].logo;

  data.forEach((item) => {
    if (language.toLowerCase() === item.title.toLowerCase()) {
      logo = item.logo;
      return;
    }
  });
  return logo;
};
