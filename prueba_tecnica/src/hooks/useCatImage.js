import { useEffect, useState } from "react";


export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact?.split(" ").slice(0, 3).join(" "); // el signo de interrogación es para que no de error si fact es undefined

    fetch(
      `https://cataas.com/cat/says/${encodeURIComponent(
        threeFirstWords
      )}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl }
}