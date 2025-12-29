import { useCatImage } from "../hooks/useCatImage.js";

export function Otro() {
  const fact = "Random fact";
  const { imageUrl } = useCatImage({ fact });
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`image extracted using the first three words for ${fact}`}
        />
      )}
    </>
  );
}
