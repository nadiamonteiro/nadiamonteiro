import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";
import NavBar from "../components/NavBar/NavBar";


export default function Contact(){
    return(
        <div>
            <NavBar/>
            <div className="container text-center">
                <h1>Get In Touch</h1>
                <p>To request a quote, or if you want to meet up for a coffee,<br/>
                    feel free to drop a message.<br/>
                    I’ll try my best to get back to you!</p>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4"/>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4">
                        <FiLinkedin/>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4">
                        <FiGithub/>
                    </div>
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4">
                        <FiMail/>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4"/>
                </div>
            </div>
        </div>

    )
}