import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { socials } from "@/data/socials";

const isProd = process.env.NODE_ENV === "production";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  substack: SiSubstack,
  resume: HiDocumentArrowDown,
} as const;

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2 justify-center">
      {socials.map((link) => {
        const Icon = iconMap[link.icon];
        const href = link.isDownload
          ? `/${isProd ? "portfolio/" : ""}${link.url.replace(/^\//, "")}`
          : link.url;
        return (
          <a
            key={link.label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            download={link.isDownload ? true : undefined}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-d-blue text-warm-gold text-[8px] hover:bg-n-blue transition-colors"
          >
            <Icon className="w-3 h-3" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
