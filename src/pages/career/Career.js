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
                        <p>Developed and optimized an AI agent prototype, increasing task efficiency by 900% through iterative performance tuning and user-driven refinements.  </p>
                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {modalOpenStates[1] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(1)}>&times;</span>
                        <h2>FPT Software</h2>
                        <p>Worked as a Software Engineer, delivering CloudService middleware module to transmit
                            data between edge and data center. </p>
                        <br/>

                    </div>
                </div>
            )}

            {/* Modal 3 */}
            {modalOpenStates[2] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(2)}>&times;</span>
                        <h2>Demand Generation Representative</h2>
                        <p>Worked as a Cloud Sales Associate. Provided cloud solutions to customers, proposed
                            AWS services, and increased AWS adoption among companies. </p>
                        <br/>

                    </div>
                </div>
            )}


        </div>
    );
}

export default Career;

