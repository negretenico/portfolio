"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Aurora from "../backgrounds/Aurora/Aurora";
const isProd = process.env.NODE_ENV === "production";
type PokemonCenterBtnProps = {
  isProcessing: boolean;
  handleClick: (v: string) => void;
  text: string;
};
const PokemonCenterBtn = ({
  isProcessing,
  handleClick,
  text,
}: PokemonCenterBtnProps) => {
  return (
    <button
      className="cursor-pointer bg-pokemon-center-l-red hover:bg-pokemon-center-d-red text-pokemon-center-white py-2 rounded"
      onClick={() => handleClick(text)}
      disabled={isProcessing}
    >
      {text}
    </button>
  );
};
const btns = ["Github", "LinkedIn", "Email", "Home"];

const GITHUB_URL = "https://github.com/negretenico";
const LINKEDIN_URL = "https://linkedin.com/in/negretenico";
const EMAIL_ADDRESS = "negretenico0@gmail.com";

export default function PokemonCenter() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleClick = (action: string) => {
    setIsProcessing(true);
    setStatusMessage("");
    try {
      switch (action) {
        case "Github":
          window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
          setStatusMessage("Your message is being delivered by Pidgey!");
          break;

        case "LinkedIn":
          window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
          setStatusMessage("Your message is being delivered by Pidgey!");
          break;

        case "Email":
          // Create mailto link with optional subject and body
          const subject = encodeURIComponent("Hello! I found your portfolio");
          const body = encodeURIComponent(
            "Hi there,\n\nI came across your portfolio and would like to connect!\n\nBest regards,"
          );
          const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

          // Try to open email client
          window.location.href = mailtoLink;
          setStatusMessage("Getting your Pidgey ready!");
          break;
        case "Home":
          setTimeout(() => {
            router.push("/");
          }, 2000);
          setStatusMessage("Taking you back to Pallet town!");
          break;
        default:
          setStatusMessage("Unknown");
      }
    } catch (error) {
      console.error("Error handling click:", error);
      setStatusMessage(
        "Something went wrong. Please take care of your Pidgey!"
      );
    }
    setTimeout(() => {
      setIsProcessing(false);
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }, 1000); // Reduced from 2000ms for better UX
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8">
        {/* Background Particles */}
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#C85048", "#F0F0F8", "#70B8F0"]}
            blend={1.5}
            speed={1.0}
          />
        </div>
        <div className="rounded overflow-hidden shadow-lg border-pokemon-center-gray border-2 p-6 w-full max-w-md flex flex-col items-center">
          <h1 className="text-xl text-pokemon-center-sky-blue font-bold mb-4 text-center">
            How would you like to connect?
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Sprite */}
            <div className="flex justify-center mb-4 md:mb-0">
              <div className="w-32 h-32 flex items-center justify-center">
                <Image
                  src={
                    isProcessing
                      ? `/${
                          isProd ? "portfolio/" : ""
                        }greeting/Nico_Sprite_Sheet_Greeting.gif`
                      : `/${
                          isProd ? "portfolio/" : ""
                        }greeting/Nico_Sprite_Sheet_Greeting.png`
                  }
                  alt="Your Sprite"
                  width={512}
                  height={512}
                  className={
                    isProcessing
                      ? "object-contain w-full h-full"
                      : "object-cover w-full h-full"
                  }
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {btns.map((btn) => {
                return (
                  <PokemonCenterBtn
                    key={btn}
                    isProcessing={isProcessing}
                    handleClick={handleClick}
                    text={btn}
                  />
                );
              })}
            </div>
          </div>

          {isProcessing && (
            <p className="mt-4 text-center animate-pulse">Processing...</p>
          )}

          {statusMessage && !isProcessing && (
            <p className="mt-4 text-center text-pokemon-center-sky-blue font-semibold">
              {statusMessage}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
