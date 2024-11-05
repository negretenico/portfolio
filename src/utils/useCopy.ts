import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { toast } from "react-toastify"

export const useCopy= ({filePath}:{filePath:string})=>{
    const {data,isError,isFetching,isSuccess}= useQuery({
        queryKey: [filePath],
        queryFn: ()=>{
            fetch(filePath)
        }
    })
    useEffect(()=>{
        if(isError){
            toast.error("We had an issue reading in the copy")
        }
        if(isFetching){
            toast.loading("We are loading in the file")
        }
        if(isSuccess){
            toast.success("We loaded the copy")
        }
    },[isError,isFetching,isSuccess])
    return data
}