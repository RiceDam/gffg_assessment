import "../styles/home.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-banner">
            <div className="home-layer">
                <h1>Come enjoy our food at Pho Noodle House</h1>
                <Link to="/menu" className="view-menu">View the Menu</Link>
            </div>
        </div>
    );
}

export default Home;