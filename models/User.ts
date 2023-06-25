export type UserProject = {
  title: string;
  image: string;
  skills: string[];
};

export type PlaygroundSharedUser = {
  name: string;
  pic: string;
};

export type UserPlayground = {
  title: string;
  language: string;
  time: string;
  sharedWith: PlaygroundSharedUser[];
};

export type UserCertificate = {
  title: string;
  issuedDate: string;
  logo: string;
};

export type User = {
  fullname: string;
  about: string;
  location: string;
  profession: string;
  dob: string;
  gender: string;
  profilePic: string;
  coverPic: string;
  skills: string[];
  socials: {
    google: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    github: string;
    behance: string;
    dribbble: string;
  };
  configuration: {
    showFollowers: boolean;
    showXP: boolean;
    showAchievementBadges: boolean;
  };
  stats: {
    longestStreak: number;
    xp: number;
    league: string;
    karmaPoints: number;
  };
  projects: UserProject[];
  playgrounds: UserPlayground[];
  certificates: UserCertificate[];
};
