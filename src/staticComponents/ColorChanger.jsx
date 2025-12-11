import "./ColorChanger.css";

const ColorChanger = ({ string, tick }) => {
  const safeString = string || "";
  const seed = safeString + tick;
  const hash = Array.from(seed).reduce((acc, char) => ((acc << 5) - acc + char.charCodeAt(0)) | 0, 0);
  const randomLetterIndex = safeString.length > 0 ? Math.abs(hash) % safeString.length : 0;

  return (
    <>
      {safeString.split("").map((letter, index) => (
        <span key={index} className={`fadeletter ${index === randomLetterIndex ? "highlighted" : ""}`}>
          {letter}
        </span>
      ))}
    </>
  );
};

export default ColorChanger;
