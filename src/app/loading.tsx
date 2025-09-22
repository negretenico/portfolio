import Image from "next/image";
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Loading...</p>
        <div className="flex justify-center my-6">
          <div className="relative">
            <Image
              src="/celebration/Nico_Sprite_Sheet_Celebration.gif"
              width={128}
              height={128}
              alt="Picture of the author"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
