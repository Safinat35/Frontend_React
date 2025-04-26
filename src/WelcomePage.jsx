import logo from './assets/logo_nabih.png'; // Adjust path as needed

function WelcomePage({ onStart }) {
    return (
    <div className="page-content">
        
        {/* Logo */}
        <div className="logo-wrapper">
        <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <h1>Welcome to NABIH – Your First Line of Defense Against Malicious Links!</h1>
        <p>
        Our tool provides instant feedback on the safety of any URL. With advanced fraud detection algorithms, we help you avoid phishing, malware, and other online scams.
        </p>
        <button onClick={onStart} className="start-button">Get Started</button>
        
        {/* New Section for Extension Download */}
        <p style={{ marginTop: '20px' }}>
            Install our browser extension for real-time phishing detection and a safer browsing experience!
        </p>
        <a 
            href="https://rebrand.ly/download-extension" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="download-button"
        >
            Download Extension
        </a>
    </div>
    );
}

export default WelcomePage;
