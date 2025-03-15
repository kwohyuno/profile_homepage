import {useNavigate} from "react-router-dom";
import Header from '../components/Header';
import '../components/Header.css';
import { useState } from "react";
import './Education.css';

function Education(props){
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
                <h1>Education</h1>
                <ul>

                    <li style={{cursor: 'pointer'}} onClick={() => openModal(0)}>
                        <h3>Univesity of San Francisco</h3>
                        <p>Masters of Science, Computer Science </p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(1)}>
                        <h3>The Cyber University of Korea </h3>
                        <p>Bachelor's of Engineering, Software Engineering</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(2)}>
                        <h3>Seoul National University</h3>
                        <p>Bachelor's of Education</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(3)}>
                        <h3>Zhejiang University</h3>
                        <p>Exchange Student</p>
                    </li>
                </ul>

            </div>

            {/* Modal 1 */}
            {modalOpenStates[0] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(0)}>&times;</span>
                        <h2>University of San Francisco</h2>
                        <p>MSCS, Computer Science</p>
                        <br/>
                        <p>Relevant coursework </p>
                        <li>Principles of Software Development
                        </li>
                        <li>Discrete Math
                        </li>
                        <li>Foundations of AI
                        </li>
                        <li>Data Structure
                        </li>
                        <li>DevOps
                        </li>

                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {modalOpenStates[1] && (
                <div className="modal">
                <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(1)}>&times;</span>
                        <h2>The Cyber University of Korea</h2>
                        <p>BS in Software Engineering </p>
                        <p>Relevant coursework </p>
                        <li>Data Structure, Operating System, Database, Security, Computer Structure, Algorithm, Web Development, Mobile App Development, Network, Cloud, Artificial Intelligence, Machine Learning</li>
                        <br/>

                    </div>
                </div>
            )}

            {/* Modal 3 */}
            {modalOpenStates[2] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(2)}>&times;</span>
                        <h2>Seoul National University</h2>
                        <p>BEd in Physical Education </p>
                        <li>Activities and societies: MCSA(Management Consulting Student Association)</li>
                        <br/>

                    </div>
                </div>
            )}

            {/* Modal 4 */}
            {modalOpenStates[3] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(3)}>&times;</span>
                        <h2>Zhejiang University</h2>
                        <p>Exchange Student(Feb 2017 - Jan 2018)</p>
                        <li>Acquired highest level of Chinese Language Proficiency (HSK Level 6)</li>
                        <br/>

                    </div>
                </div>
            )}


        </div>
    );
}

export default Education;

