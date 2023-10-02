//styling
import "./Footer.css";

//images
import headshot from "../../../images/Samantha_Figueroa.jpeg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_content">
        <div className="Footer_content_about">
          <img src={headshot} alt="Samantha_Figueroa" className="Footer_content_about_headshot" />
          <div className="Footer_content_about_text">
          <div className="Footer_content_about_text_header">The Developer 
          <div className="Footer_content_about_text_header_links">
          <a href="https://github.com/samfigueroa92"><img src="https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-github-4555889_121361.png" alt="github-icon" /></a>
          <a href="https://www.linkedin.com/in/samantha-figueroa-fs/"><img src="https://cdn0.iconfinder.com/data/icons/yooicons_set01_socialbookmarks/512/social_linkedin_button_blue.png" alt="linkedin-icon" /></a>
          <a href = "mailto: samanthafigueroa@pursuit.org"><img src="https://assets.stickpng.com/images/584856bce0bb315b0f7675ad.png" alt="email-icon" /></a>
          </div>
          </div>
          <div className="Footer_content_about_text_paragraph">
            My name is Samantha Figueroa and I am a junior web developer with experience in HTML, CSS,
            Javascript, React, Express and PostgreSQL. I recently completed a
            full-stack web development fellowship with Pursuit and continue to
            build on the foundational skills I gained by working on projects
            like this one!
          </div>
          </div>
        </div>
        <div className="Footer_content_technologies">
          <div className="Footer_content_technologies_header">Technologies Used</div>
          <div className="Footer_content_technologies_icons">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-postgresql-9-1175120.png"
              alt="postgresql"
            />
            <img
              src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
              alt="express"
            />
            <img
              src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png"
              alt="react"
            />
            <img
              src="https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-512.png"
              alt="node"
            />
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png"
              alt="javascript"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888859.png"
              alt="html"
            />
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt="css"
            />
            <img
              src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
              alt="firebase"
            />
          </div>
            <div className="Footer_content_technologies_text">
              This React netflix-clone application was built using a PERN stack: PostgreSQL,
              Express, React, Node, as well as Javascript, HTML/CSS, and
              Firebase.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
