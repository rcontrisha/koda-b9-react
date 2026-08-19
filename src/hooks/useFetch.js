import { useState, useEffect } from "react";
import fetchPokeData from "../utils/fetchApi";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    (async() => {
      try {
        setIsLoading(true)
        setData(await fetchPokeData(url))
        // throw new Error
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [url])

  return {
    data,
    isLoading,
    error
  }
}
