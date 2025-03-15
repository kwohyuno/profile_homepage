import {useNavigate} from "react-router-dom";
import Header from '../components/Header';
import '../components/Header.css';
import { useState } from "react";
import './Career.css';

function Career(props){
    const navi = useNavigate();
    const [modalOpenStates, setModalOpenStates] = useState([false, false, false, false]);

    // Function to open a specific modal
    const openModal = (index) => {
        const newStates = [...modalOpenStates];
        newStates[index] = true;
        setModalOpenStates(newStates);
    };

    // Function to close a specific modal
    const closeModal = (index) => {
        const newStates = [...modalOpenStates];
        newStates[index] = false;
        setModalOpenStates(newStates);
    };

    return(
        <div className="project">
            <Header/>
            <div className ="project-body">
                <h1>Career</h1>
                <ul>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(3)}>
                        <h3>Software Engineer Intern</h3>
                        <p>Ameniti </p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(0)}>
                        <h3>AI Research Assistant</h3>
                        <p>University of San Francisco, Information Technology Service Division </p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(1)}>
                        <h3>Software Engineer </h3>
                        <p>FPT Software</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(2)}>
                        <h3>Demand Generation Representative</h3>
                        <p>Amazon Web Services</p>
                    </li>
                </ul>

            </div>

            {/* Modal 1 */}
            {modalOpenStates[0] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(0)}>&times;</span>
                        <h2>AI Research Assistant</h2>
                        <h4> University of San Francisco, Information Technology Service Division | Jan 2025 - Present</h4>
                        <li>Developed and optimized an AI agent prototype, increasing task efficiency by 900% through iterative performance tuning and user-driven refinements.</li>

                        <li>Conducted a comparative analysis of AI agent frameworks (Azure OpenAI, CrewAI, OpenAI Agent, Manus, BeamAI), identifying a framework that reduced operational costs by 30% while improving accuracy by 15%.
                        </li>

                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {modalOpenStates[1] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(1)}>&times;</span>
                        <h2>Software Engineer</h2>
                        <h4> FPT Software | Sep 2023 - Mar 2024</h4>
                        <li>Integrated a CloudService module as a middleware component, contributing to 60% of the overall implementation and improving system interoperability, reducing data transmission latency by 25%.

                        </li>
                        <li>
                            Authored an API guide covering HTTP, Socket, and MQTT protocols, enabling 10+ development teams to seamlessly implement data exchange, accelerating product release by 30%.
                        </li>
                        <br/>

                    </div>
                </div>
            )}

            {/* Modal 3 */}
            {modalOpenStates[2] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(2)}>&times;</span>
                        <h2>Demand Generation Representative </h2>
                        <h4>Amazon Web Services | Mar 2021 - Dec 2022</h4>
                        <li>Leveraged AWS Solutions Architect Associate certification to promote cloud products (EC2, S3, CDN, SageMaker), contributing $1.5M in annual revenue and achieving top performance in the team.

                        </li>
                        <li>
                            Delivered a technical session to 200+ customers, directly consulting 14 clients on AWS adoption strategies, resulting in a 25% increase in cloud migration efficiency.s
                        </li>
                        <br/>

                    </div>
                </div>
            )}

            {/* Modal 4 */}
            {modalOpenStates[3] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(3)}>&times;</span>
                        <h2>Software Engineer Intern </h2>
                        <h4>Ameniti | Mar 2025 - Present</h4>
                        <li>Developed software for hotels regarding customer service system.
                        </li>
                        <li>Automated generation of folio or receipt, by fetching data from database and parsing it.
                        </li>
                        <li>TypeScript, React.js, Next.js
                        </li>


                        <br/>

                    </div>
                </div>
            )}


        </div>
    );
}

export default Career;

