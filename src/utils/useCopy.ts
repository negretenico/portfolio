import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useCopy = ({
  filePath,
}: {
  filePath: string;
}): { data: Record<string, any> } => {
  const { data, isError, isSuccess, isFetching } = useSuspenseQuery({
    queryKey: [filePath],
    queryFn: async () => {
      const res = await fetch(filePath);
      if (!res.ok) {
        throw new Error("Failed to fetch the data");
      }
      return res.json();
    },
    staleTime: Infinity,
  });
  useEffect(() => {
    if (!isFetching) return;
    if (isError) {
      toast.error("We had an issue reading in the copy");
    }
    if (isSuccess) {
      toast.success("Copy loaded successfully!");
    }
  }, [isError, isSuccess, isFetching]);
  return { data };
};
