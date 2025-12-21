import "./index.css";

const Badge = ({ badge }) => {
  return (
    <div className="badge">
      <a className="badge-link" href={badge.url} target="_blank" rel="noopener noreferrer">
        <img className="badge-img" src={badge.img} alt={badge.title} />
      </a>
      <div className="badge-title">{badge.title}</div>
      <div className="badge-issuer">Issuer: {badge.issuer}</div>
    </div>
  );
};

export default Badge;
