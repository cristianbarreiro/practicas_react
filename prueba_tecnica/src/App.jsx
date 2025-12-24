import { useEffect, useState } from "react";

const CAT_RANDOM_FACT_URL = "https://catfact.ninja/fact";
// const CAT_API_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

export function App() {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_RANDOM_FACT_URL)
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <main>
      <h1> App de Gatitos </h1>
      <p>{fact && <span>{fact}</span>}</p>
    </main>
  );
}
