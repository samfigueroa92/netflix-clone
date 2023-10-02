//styling
import "./Footer.css";

//images
import headshot from "../../../images/Samantha_Figueroa.jpeg";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer_content">
                <div>
                <img src={headshot} alt="Samantha_Figueroa" />
                <h1>The Developer</h1>
                <p>I am a junior web developer with experience in HTML, CSS, Javascript, React, Express and PostgreSQL. I recently completed a full-stack web development fellowship with Pursuit and continue to build on the foundational skills I gained by working on projects like this one!</p>
                </div>
                <div>
                    <h1>Technologies</h1>
                    <div>
                        <img src="https://miro.medium.com/v2/resize:fit:700/0*J0QGhOOD07afS1Dr.png" alt="postgresql"/>
                        <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt=""/>
                        <img src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png" alt=""/>
                        <img src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png" alt=""/>
                        <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <p>This clone application was built using a PERN stack: Postgres, Express, React, Node, as well as Javascript, HTML/CSS, and Firebase.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;