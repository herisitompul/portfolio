import React from "react";
import cert1 from '../assets/images/cert1.png';
import cert2 from '../assets/images/cert2.png';
import cert3 from '../assets/images/cert3.png';
// import cert4 from '../assets/images/cert4.png';
import '../assets/styles/Certificate.scss';

function Certificate() {
    return (
        <div className="certificates-container" id="certificates">
            <h1>Certificates</h1>
            <div className="certificates-grid">
                <div className="certificate">
                    <a href="https://www.linkedin.com/in/mickael-sitompul-4239a4290/" target="_blank" rel="noreferrer">
                        <img src={cert1} className="zoom" alt="Certificate" width="100%"/>
                    </a>
                    <a href="https://www.linkedin.com/in/mickael-sitompul-4239a4290/" target="_blank" rel="noreferrer"><h2>SanberCode Certificate</h2></a>
                    <p>I am very happy to have successfully obtained a certification: SanberCode Certificate Laravel (Web Development) from <a href="https://www.linkedin.com/company/sanbercode/" style={{ color: "blue", textDecoration: "none" }}>SanberCode!</a></p>
                </div>
                <div className="certificate">
                    <a href="https://www.linkedin.com/in/mickael-sitompul-4239a4290/" target="_blank" rel="noreferrer">
                        <img src={cert2} className="zoom" alt="Certificate" width="100%"/>
                    </a>
                    <h2>Department of Communication and Informationc</h2>
                    <p>Contributed to capturing event moments through photos and videos as part of the documentation team. Assisted in organizing and curating visual materials to highlight the success of the event.</p>
                </div>
                <div className="certificate">
                    <a href="https://www.linkedin.com/in/mickael-sitompul-4239a4290/" target="_blank" rel="noreferrer">
                        <img src={cert3} className="zoom" alt="Certificate" width="100%"/>
                    </a>
                    <h2>Information System Student Association</h2>
                    <p>Contributed to capturing event moments through photos and videos as part of the documentation team. Assisted in organizing and curating visual materials to highlight the success of the event.</p>
                </div>
                {/* <div className="certificate">
                    <a href="https://www.codecademy.com/certificates/PQR987" target="_blank" rel="noreferrer">
                        <img src={cert4} className="zoom" alt="Certificate" width="100%"/>
                    </a>
                    <h2>Data Science with Python</h2>
                    <p>Completed a data science course using Python, covering data visualization, machine learning, and statistical analysis.</p>
                </div> */}
            </div>
        </div>
    );
}

export default Certificate;
