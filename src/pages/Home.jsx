import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <div className="hero">
        <h1>Welcome to MentorBot-AI</h1>

        <p>
          Your AI-powered mentor for academic guidance,
          career advice, personal growth, and counseling.
        </p>

        <Link to="/chat">
          <button>Start Chatting</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;