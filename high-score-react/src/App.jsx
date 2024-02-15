import "./App.css";
import Scores from "./scores";

export default function App() {
  return (
    <>
      <GetScore scores={Scores} />
    </>
  );
}

function GetScore({ scores }) {
  return (
    <>
      <ul className="list-styling">
        <h2 style={{ textAlign: "center" }}>High Scores Per Country</h2>
        {scores
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country, index) => (
            <li key={index} className="li-styling">
              <h2 className="header__country">
                HIGH SCORES: {country.name.toUpperCase()}
              </h2>
              {country.scores
                .sort((a, b) => b.s - a.s)
                .map((score, index) => {
                  return (
                    <div key={index} className="playerName__score">
                      <p>{score.n.toUpperCase()}:</p> <p>{score.s}</p>
                    </div>
                  );
                })}
            </li>
          ))}
      </ul>
    </>
  );
}
