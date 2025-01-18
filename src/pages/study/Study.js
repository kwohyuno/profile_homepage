import {useNavigate} from "react-router-dom";
import Header from "../components/Header";
import '../components/Header.css';
import { useState } from "react";
import './Study.css';

function Study(props){
    const navi = useNavigate();
    const [modalOpenStates, setModalOpenStates] = useState([false, false, false, false, false, false, false]);

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
        <div className="study">
            <Header/>
            <div className="study-body">
                <h1>My Study</h1>
                <ul>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(6)}>
                        <h3>NoSQL, Big Data, and Spark Foundations Specialization</h3>
                        <p>Online Course of Coursera</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(5)}>
                        <h3>Batch Processing with SpringBoot</h3>
                        <p>Online Course of Fast Campus</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(0)}>
                        <h3>CS 601 - Principles of Software Development</h3>
                        <p>MSCS Course in University of San Francisco</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(1)}>
                        <h3>IBM Full Stack Developer Course</h3>
                        <p>Coursera</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(4)}>
                        <h3>MLOps Pipeline</h3>
                        <p>Fast Campus</p>
                    </li>
                    <li style={{cursor: 'pointer'}} onClick={() => openModal(2)}>
                        <h3>Large Traffic Handling Course</h3>
                        <p>Fast Campus</p>
                    </li>
                    {/*<li style={{cursor: 'pointer'}} onClick={() => openModal(3)}>*/}
                    {/*    <h3>AWS Associate Solutions Architect</h3>*/}
                    {/*    <p>AWS Certificate</p>*/}
                    {/*</li>*/}
                </ul>
            </div>

            {/* Modal 1 */}
            {modalOpenStates[0] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(0)}>&times;</span>
                        <h2>Principles of Software Development</h2>
                        <h4>Date : Aug 2024 - Dec 2024</h4>
                        <div className="modal-content-li">
                            <br/>
                            •Immutability, Design Principles Content. Json Files.
                            <br/>
                            •Data Structure
                            <br/>
                            •Socket
                            <br/>
                            •Multithreading: custom locks like ReentrantReadWriteLock; wait() and notify();
                            <br/>
                            •work queue and thread pool. Thread Liveness: deadlock, starvation, livelock.
                            <br/>
                            • Sockets.
                            <br/>
                            • Http Protocol. HEAD/GET/POST.
                            <br/>
                            • Jetty/Servlets. Form processing with servlets.
                            <br/>
                            • Cookies. Session Management. HttpSession class.
                            <br/>
                            • Regular Expressions: basics; popular character classes; Pattern/Matcher, groups;
                            greedy versus reluctant quantifiers. (Lookahead, boundary anchors are not on the
                            exam).
                            <br/>
                            • SQL, including inner and outer joins.
                            <br/>
                            • JDBC. Prepared Statements.
                            <br/>
                            • Secure salted password hashing. User registration/authentication.
                            <br/>
                            <a style={{color: "blue", cursor: "pointer"}}
                               href="https://www.coursicle.com/usfca/courses/CS/601/">link</a>
                            <br/>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal 2 */}
            {modalOpenStates[1] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(1)}>&times;</span>
                        <h2>IBM Full Stack Developer Course</h2>
                        <h4>Date : Oct 2024 - Jan 2024</h4>
                        <div className="modal-content-li">
                            <li>Introduction to Software Engineering
                            </li>
                            <br/>
                            <li>Introduction to Cloud Computing
                            </li>
                            <br/>
                            <li>Introduction to HTML, CSS, & JavaScript
                            </li>
                            <br/>
                            <li>Getting Started with Git and GitHub
                            </li>
                            <br/>
                            <li>Developing Front-End Apps with React
                            </li>
                            <br/>
                            <li>Developing Back-End Apps with Node.js and Express
                            </li>
                            <br/>
                            <li>Python for Data Science, AI & Development
                            </li>
                            <br/>
                            <li>Introduction to Containers w/ Docker, Kubernetes & OpenShift
                            </li>
                            <br/>
                            <li>Application Development using Microservices and Serverless
                            </li>
                            <br/>
                            <a style={{color: "blue", cursor: "pointer"}}
                               href="https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer">link</a>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal 3 */}
            {modalOpenStates[2] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(2)}>&times;</span>
                        <h2>Redis, Kafka for large amount of traffic</h2>
                        <div className="modal-content-li">
                            <br/>
                            <li>Using Redis to compare price in Ecommerce project</li>
                            <br/>
                            <li>Kafka to track purchase history</li>
                            <br/>
                            <br/>
                            <a style={{color: "blue", cursor: "pointer"}}
                               href="https://fastcampus.co.kr/classroom/211368">link</a>
                            <br/>
                        </div>
                    </div>
                </div>
            )}

            {/*/!* Modal 4 *!/*/}
            {/*{modalOpenStates[3] && (*/}
            {/*    <div className="modal">*/}
            {/*        <div className="modal-content">*/}
            {/*            <span className="modal-close" onClick={() => closeModal(3)}>&times;</span>*/}
            {/*            <h2>AWS Associate Solutions Architect Certificate</h2>*/}
            {/*            <br/>*/}
            {/*            <div className="modal-content-li">*/}
            {/*                <li>AWS Certified Solutions Architect - Associate is focused on the design of cost and performance optimized solutions. This is an ideal starting point for candidates with AWS Cloud or strong on-premises IT experience.*/}
            {/*                </li>*/}
            {/*                <br/>*/}
            {/*                <a style={{color: "blue", cursor: "pointer"}}*/}
            {/*                   href="https://aws.amazon.com/certification/certified-solutions-architect-associate/">link</a>*/}
            {/*                <br/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}

            {modalOpenStates[4] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(4)}>&times;</span>
                        <h2>MLOps</h2>
                        <div className="modal-content-li">
                            <br/>
                            <li>Data Sampling and Cleansing</li>
                            <br/>
                            <li>Container and Orchestrator</li>
                        </div>
                        <br/>
                        <a style={{color: "blue", cursor: "pointer"}}
                           href="https://fastcampus.co.kr/classroom/233813">link</a>
                        <br/>
                    </div>
                </div>
            )}

            {modalOpenStates[5] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(5)}>&times;</span>
                        <h2>Batch Processing</h2>
                        <div className="modal-content-li">
                            <br/>
                            <li>Multithreading with Future</li>
                            <br/>
                            <li>Using JPA for batch processing</li>
                        </div>
                        <br/>
                        <a style={{color: "blue", cursor: "pointer"}}
                           href="https://github.com/kwohyuno/pass-batch">link</a>
                        <br/>
                    </div>
                </div>
            )}

            {modalOpenStates[6] && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={() => closeModal(6)}>&times;</span>
                        <h2>NoSQL, Big Data, and Spark Foundations Specialization</h2>
                        <div className="modal-content-li">
                            <br/>
                            <li>Introduction to NoSQL Databases
                            </li>
                            <br/>
                            <li>Introduction to Big Data with Spark and Hadoop
                            </li>
                            <br/>
                            <li>Machine Learning with Apache Spark
                            </li>
                        </div>
                        <br/>
                        <a style={{color: "blue", cursor: "pointer"}}
                           href="https://www.coursera.org/specializations/nosql-big-data-and-spark-foundations">link</a>
                        <br/>
                    </div>
                </div>
            )}

        </div>

    );
}

export default Study;