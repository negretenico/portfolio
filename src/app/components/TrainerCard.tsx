import Image from "next/image";
import {
  SiSpringboot,
  SiPython,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaBrain, FaJava, FaAws } from "react-icons/fa";
function TrainerCardHeader() {
  return (
    <div className="bg-d-blue py-2 flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-start">
      <span className="text-center text-warm-gold md:text-left px-4">
        <p className="border-t-2 border-b-2">Trainer Card</p>
      </span>
      <span className="bg-l-blue rounded text-center md:text-right mx-2 border-n-blue border-1">
        <p>IDNo.000393</p>
      </span>
    </div>
  );
}
const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6 text-warm-gold"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const Badge = ({
  children,
  title,
}: React.PropsWithChildren<{ title: string }>) => {
  return (
    <div
      className="bg-l-blue rounded border-1 border-n-blue py-2 flex justify-center"
      title={title}
    >
      {children}
    </div>
  );
};

const Badges = () => {
  const badges = [
    { name: "Java", Icon: FaJava },
    { name: "Spring Boot", Icon: SiSpringboot },
    { name: "Python", Icon: SiPython },
    { name: "React", Icon: SiReact },
    { name: "JavaScript / TypeScript", Icon: SiTypescript },
    { name: "AI", Icon: FaBrain },
    { name: "AWS", Icon: FaAws },
    { name: "SQL / NoSQL", Icon: SiMysql },
  ];

  return (
    <div className="grid grid-cols-4 py-2 gap-2 md:flex md:flex-row md:justify-left">
      {badges.map((badge) => {
        const { Icon, name } = badge;
        return (
          <Badge key={name} title={name}>
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </Badge>
        );
      })}
    </div>
  );
};
function TrainerCardBody() {
  return (
    <div className="bg-l-blue py-2 flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-start">
      <div className="text-center md:text-left px-4 md:flex-auto flex flex-col justify-evenly space-y-1">
        <p className="underline decoration-n-blue">Name: Nico</p>
        <span className="flex flex-row justify-between max-w-48 mx-auto md:mx-0">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </span>
        <p>Pokedex: 60+</p>
        <p>Type: Fullstack, Dev Lead</p>
        <p>Level: 5 years</p>
      </div>
      <div className="mx-2">
        <Image
          src="./thinking/Nico_Sprite_Thinking.gif"
          width={128}
          height={128}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
function TrainerCardFooter() {
  return (
    <div className="bg-d-blue py-2 flex flex-col items-center gap-2 md:flex-row md:justify-between md:items-start">
      <div className="px-4">
        <p>Badges</p>
        <Badges />
      </div>
    </div>
  );
}
export default function TrainerCard() {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-[calc(100vw-8rem)] rounded overflow-hidden shadow-lg border-n-blue border-1">
      <TrainerCardHeader />
      <TrainerCardBody />
      <TrainerCardFooter />
    </div>
  );
}
