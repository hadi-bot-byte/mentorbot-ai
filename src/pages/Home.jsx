import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Meet <span>MentorBot-AI</span>
        </h1>

        <p>
          Your intelligent mentor for academic guidance,
          career growth, personal development and everyday support.
        </p>

        <div className="hero-buttons">
          <Link to="/chat">
            <button>Start Chatting</button>
          </Link>

          <Link to="/about">
            <button className="secondary-btn">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🎓 Academic Support</h3>
          <p>
            Get help with study plans,
            exams and learning strategies.
          </p>
        </div>

        <div className="feature-card">
          <h3>💼 Career Guidance</h3>
          <p>
            Explore career paths and
            receive professional advice.
          </p>
        </div>

        <div className="feature-card">
          <h3>🌱 Personal Growth</h3>
          <p>
            Build confidence, motivation
            and life skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;