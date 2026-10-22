export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "substack" | "resume";
  isDownload?: boolean;
}

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/negretenico", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/negretenico", icon: "linkedin" },
  { label: "Substack", url: "https://nnegrete.substack.com", icon: "substack" },
  { label: "Resume", url: "/Nicholas_Negrete_Resume2025.09.28.pdf", icon: "resume", isDownload: true },
];
