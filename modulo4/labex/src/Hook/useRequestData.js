import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)
    
    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then(response =>{
          setTimeout(() => {
            setIsLoading(false)
          setData(response.data)
          }, 1000);
        }).catch(error =>{
          setIsLoading(false)
          setError(error)
        })
      }, [])

    return [data,isLoading,error];
}


