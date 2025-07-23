
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to bottom, #00010a 50%, #0156a4 100%)"
      }}
    >
      <h1 style={{  display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "white",
    border: "1px solid white",
    padding: "1rem",
    lineHeight: "2.5rem",}}>
       <span>S</span>
  <span>C</span>
  <span>R</span>
  <span>A</span>
  <span>B</span>
  <span>B</span>
  <span>L</span>
  <span>E</span>
      </h1>
      <Link to="/game">
        <button style={{ marginTop: "2rem", fontSize: "1.5rem", padding: "0.5rem 2rem", borderRadius: "10px",border:"none"}}>
          Play
        </button>
      </Link>
    </div>
  );
}

export default Home;
