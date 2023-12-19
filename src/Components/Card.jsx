import Avatar from "./Avatar"
import '../index.css';
import Intro from './Intro.jsx';
import Skillset from "./Skillset.jsx";
function Card() {
    return (
        <div className="card">
            <Avatar/>
            <div className="data">
             <Intro/>
             <Skillset/>
            </div>
        </div>
    )
}

export default Card
