interface infoProfilesTypes {
  avatar: string;
  email: string;
  social_media: infoProfilesSocialTypes;
}

interface infoProfilesSocialTypes {
  tiktok?: string;
  facebook?: string;
  x?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  linkedin?: string;
}

export const info_profiles: infoProfilesTypes = {
  avatar: "/images/avatar-tenpcr.jpg",
  email: "ten.pcr@gmail.com",
  social_media: {
    facebook: "https://www.facebook.com/profile.php?id=61550624697295",
    x: "",
    instagram: "",
    youtube: "https://www.youtube.com/@tenpcr",
    github: "https://github.com/tenpcr",
    linkedin: "https://www.linkedin.com/in/tenpcr/",
  },
};
