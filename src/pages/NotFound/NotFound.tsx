import React from "react";
import { Text } from "../../components/Generic/Text";

export function NotFound() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <Text
          text={"😰404, looks like where you are trying to go doesn't exist 😰"}
          className="text-xl md:text-5xl font-bold"
        />
        <iframe
          src="https://giphy.com/embed/1094xSp23iiiv6"
          width="480"
          height="403"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/1094xSp23iiiv6">via GIPHY</a>
        </p>
      </div>
    </div>
  );
}
