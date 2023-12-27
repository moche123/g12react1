import { useEffect, useState } from "react";

export const useFetchApi = (url: string) => {


  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setResults(res.results);
      });
  }, [url]);



  return [ results ];
};
