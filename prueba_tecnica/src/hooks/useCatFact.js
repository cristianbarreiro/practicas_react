import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact.js";

export const useCatFact = () => {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    (async () => {
      const fact = await getRandomFact();
      setFact(fact);
    })();
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
};