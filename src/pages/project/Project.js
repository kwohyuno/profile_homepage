import {useNavigate} from "react-router-dom";
import Header from '../components/Header';
import '../components/Header.css';
import { useState } from "react";
import './Project.css';

function Project(props){
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
                <h1>My Projects</h1>
                <ul>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(0)}>
                        <h3>Travel Helper - A Hotel Review Website</h3>
                        <p>React, JettyServer & Servlet, MySQL </p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(1)}>
                        <h3>Jake : Social network web service for international students landing in US </h3>
                        <p>React, SpringBoot, OpenAI API, MySQL</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(2)}>
                        <h3>Devster (Online Web Community for preliminary software engineer)</h3>
                        <p>Jenkins, Docker, React, SpringBoot</p>
                    </li>
                </ul>

            </div>

            {/* Modal 1 */}
            {modalOpenStates[0] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(0)}>&times;</span>
                        <h2>Travel Helper - A Hotel Review Website</h2>
                        <p>Individual project of CS601 Principles of Software Development Class </p>
                        <br/>
                        <div className="modal-content-li">
                            <li>Implemented useful features such as user register, login, hotel registration, hotel
                                search, leaving reviews, using map api, tracking visited sites etc with object oriented
                                design
                            </li>
                            <br/>
                            <li>Used ExecutorService threadpool and Phaser to successfully process large amount of
                                dataset in short period of time. Saved processed data in database so website can use
                                existing hotel and review information.
                            </li>
                            <br/>
                        </div>
                        <a style={{color: "blue", cursor: "pointer"}}
                           href="https://github.com/kwohyuno/Travelhelper">github link</a>
                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {modalOpenStates[1] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(1)}>&times;</span>
                        <h2>Jake : Social network web service for international students landing in US</h2>
                        <p>Individual side project </p>
                        <br/>
                        <div className="modal-content-li">
                            <li>Designed FrontEnd, BackEnd, Database, and Cloud Infrastructure of web service
                                considering purpose and user experience of the web service.

                            </li>
                            <br/>
                            <li>Leveraged OpenAI’s api to provide translation services for potential users who have
                                limited English proficiency.
                            </li>
                            <br/>
                            <li>Substituted t2.micro instance with t2.xlarge instance to solve server capacity issue and
                                successfully deployed web application. Ran service for two weeks as beta service,
                                collecting 20+ users, and got lessons to fix vulnerable areas such as web security.
                            </li>
                            <br/>
                            <a style={{color: "blue", cursor: "pointer"}}
                               href="https://github.com/kwohyuno/SideProject-Jake">github link</a>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal 3 */}
            {modalOpenStates[2] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(2)}>&times;</span>
                        <h2>Devster (Online Web Community for preliminary software engineer)</h2>
                        <p>Team leader </p>
                        <br/>
                        <div className="modal-content-li">
                            <li>Final project of a 1,032-hour coding bootcamp whose curriculum covered Java, JavaScript,
                                CSS, HTML, JSP, Cloud, React, Spring Boot, Python, SQL, and Linux


                            </li>
                            <br/>
                            <li>Leveraged OpenAI’s api to provide translation services for potential users who have
                                limited English proficiency.
                            </li>
                            <br/>
                            <li>Designed database and web architecture and implemented it utilizing Backend, Frontend,
                                Cloud, and CICD technology. Won the 1st prize in the six months of Bootcamp.

                            </li>
                            <br/>
                            <li>Led five teammates to distribute development task and congregated results in Git repository. Oversaw version control of repository and deployment.

                            </li>
                            <br/>
                            <li>Used Web Scraping of company info and updated the data in Job Posts so users can see the company info

                            </li>
                            <br/>
                            <a style={{color: "blue", cursor: "pointer"}}
                               href="https://github.com/kwohyuno/devster_final">github link</a>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Project;

