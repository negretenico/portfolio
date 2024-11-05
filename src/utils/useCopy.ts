import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export const useCopy= ({filePath}:{filePath:string}): {data:Record<string,any>,isLoading:boolean}=>{
    const {data,isError,isLoading,isSuccess}= useQuery({
        queryKey: [filePath],
        queryFn: async ()=>{
           const res = await fetch(filePath);
           if(!res.ok){
            throw new Error("Failed to fetch the data")
           }
           return res.json()
        }
    })
    useEffect(() => {
        if (isError) {
            toast.dismiss();
            toast.error("We had an issue reading in the copy");
        } else if (isLoading) {
            toast.loading("Loading file...");
        } else if (isSuccess) {
            toast.dismiss();
            toast.success("Copy loaded successfully!");
        }
    }, [isError, isLoading, isSuccess]);
    return {data,isLoading}
}