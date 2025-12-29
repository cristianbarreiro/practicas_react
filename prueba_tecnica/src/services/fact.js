const CAT_RANDOM_FACT_URL = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
  const response = await fetch(CAT_RANDOM_FACT_URL);
  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();
  const { fact } = data;
  return fact;
};

export default getRandomFact;