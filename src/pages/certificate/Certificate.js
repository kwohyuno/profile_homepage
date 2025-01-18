import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import './Certificate.css';


function Certificate() {
    const navi = useNavigate();

    return (
        <div className="certificate">
            <Header/>
            <div className="certificate-body">
                <h1>Certificate</h1>
                <ul>
                    <li style={{cursor: 'pointer'}}>
                        <h3>AWS Certified Solutions Architect - Associate</h3>
                        <p>Amazon Web Services (AWS) | Credential : TFXW7TDJ1FFE1ZK8 </p>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                        <h3>Supervised Machine Learning: Regression and Classification </h3>
                        <p>DeepLearning.AI, Stanford University | Credential : 5Q3TUVT3RRKF</p>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                        <h3>Developing Applications with SQL, Databases, and Django</h3>
                        <p>Coursera | Credential : 9b0f5fc3-4079-4b13-8209-c4b712c1dd4d</p>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                        <h3>Python Project for AI and Application Development</h3>
                        <p>Coursera | Credential : 32e634c2-da5b-4f6f-b6bb-e05dd66600bc/</p>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                        <h3>Introduction to Containers w/ Docker, Kubernetes & OpenShift</h3>
                        <p>IBM | Credential : BQG1EW3MON60</p>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                        <h3>Developing Back-End Apps with Node.js and Express</h3>
                        <p>IBM | Credeential : Z748KSBNHJ2D</p>
                    </li>
                    <li style={{cursor: 'pointer'}}>
                        <h3>Getting Started with Git and GitHub</h3>
                        <p>IBM | Credential : OPPEKM3BH6W6</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Certificate;