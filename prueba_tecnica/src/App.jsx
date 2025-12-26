import { useEffect, useState } from "react";
import "./App.css";

const CAT_RANDOM_FACT_URL = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [factError, setFactError] = useState();

  //   useEffect(() => {
  //     fetch(CAT_RANDOM_FACT_URL)
  //       .then((response) => response.json())
  //       .then((data) => setFact(data.fact));
  //   }, []);

  useEffect(() => {
    async function getRandomFact() {
      const response = await fetch(CAT_RANDOM_FACT_URL);
      if (!response.ok) {
        // Puedes lanzar un error o manejarlo aquí
        throw new Error("Error en la petición");
      }
      const data = await response.json();
      setFact(data.fact);
    }
    getRandomFact();

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
  }, []);

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
      <section>
        <p>{fact && <span>{fact}</span>}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`image extracted using the first three words for ${fact}`}
          />
        )}
      </section>
    </main>
  );
}
