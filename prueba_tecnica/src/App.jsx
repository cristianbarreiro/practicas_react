import { useEffect, useState } from "react";

const CAT_RANDOM_FACT_URL = "https://catfact.ninja/fact";

export function App() {
  const [fact, setFact] = useState();

  //   useEffect(() => {
  //     fetch(CAT_RANDOM_FACT_URL)
  //       .then((response) => response.json())
  //       .then((data) => setFact(data.fact));
  //   }, []);

  useEffect(() => {
    async function getRandomFact() {
      const response = await fetch(CAT_RANDOM_FACT_URL);
      const data = await response.json();
      setFact(data.fact);
    }
    getRandomFact();

    // const firstWord = fact?.split(" ")[0];
    // console.log(firstWord);
    const threeFirstWords = fact?.split(" ").slice(0, 3).join(" "); // el signo de interrogación es para que no de error si fact es undefined
    // console.log(threeFirstWords);
  }, []);

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
      <p>{fact && <span>{fact}</span>}</p>
    </main>
  );
}
