import { useEffect, useState } from "react";
import "./App.css";
import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";
import { Otro } from "./Components/Otro.jsx";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  //   useEffect(() => {
  //     fetch(CAT_RANDOM_FACT_URL)
  //       .then((response) => response.json())
  //       .then((data) => setFact(data.fact));
  //   }, []);

  // const firstWord = fact?.split(" ")[0];
  // console.log(firstWord);
  // const threeFirstWords = fact?.split(" ").slice(0, 3).join(" "); // el signo de interrogación es para que no de error si fact es undefined
  // console.log(threeFirstWords);
  // fetch(
  //   `https://cataas.com/cat/says/${encodeURIComponent(
  //     threeFirstWords
  //   )}?size=50&color=red&json=true`
  // )
  //   .then((res) => res.json())
  //   .then((response) => {
  //     const { url } = response;
  //     setImageUrl(url);
  //   });

  const handleClick = async () => {
    refreshFact();
  };

  //     useEffect(() => {
  //     async function getRandomFact() {
  //       const response = await fetch(CAT_RANDOM_FACT_URL);
  //       const data = await response.json();
  //       const nextFact = data.fact ?? "";
  //       setFact(nextFact);

  //       const threeFirstWords = nextFact.split(" ").slice(0, 3).join(" ");
  //       const catApiUrl = `https://cataas.com/cat/says/${encodeURIComponent(
  //         threeFirstWords
  //       )}?size=50&color=red&json=true`;
  //       const catResponse = await fetch(catApiUrl);
  //       const catData = await catResponse.json();
  //       setImageUrl(`https://cataas.com${catData.url}`);
  //     }

  //     getRandomFact();
  //   }, []);

  return (
    <main>
      <h1> App de Gatitos </h1>

      <button onClick={handleClick}>Get new fact</button>
      <section>
        <p>{fact && <span>{fact}</span>}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
      <Otro />
    </main>
  );
}
