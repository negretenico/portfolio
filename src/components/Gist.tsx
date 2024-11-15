import React, { ComponentProps } from "react";
import ReactEmbedGist from "react-embed-gist";

const Loading = () => {
  return (
    <>
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    </>
  );
};

const defaultProps = {
  loadingClass: "loading__screen",
  loadingFallback: <Loading />,
};

export const Gist = ({
  gistProps,
}: {
  gistProps: ComponentProps<typeof ReactEmbedGist>;
}) => {
  const mergedProps = {
    ...defaultProps,
    ...gistProps,
  };
  return <ReactEmbedGist {...mergedProps} />;
};
