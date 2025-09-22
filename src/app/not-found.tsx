import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen md:items-start">
      <div className="text-center">
        <div className="text-center md:text-left px-4 md:flex-auto flex flex-col justify-evenly space-y-1">
          <p className="underline decoration-n-blue">
            Hey! Wait! Don't go out there! It's unsafe! I know! Here, come with
            me!
          </p>
        </div>

        {/* Centered image container with loading placeholder */}
        <div className="flex justify-center my-6">
          <div className="relative">
            <Image
              src="/greeting/Nico_Sprite_Sheet_Greeting.gif"
              width={128}
              height={128}
              alt="Picture of the author"
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        <Link
          href="/"
          className="px-4 py-2 bg-l-blue text-white rounded hover:bg-d-blue transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
