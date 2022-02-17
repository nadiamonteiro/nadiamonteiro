import RightNav from "../components/NavBar/NavBar";
import {HiDownload} from "react-icons/hi";
import styles from '/styles/About.module.css';


export default function About(){
    return(
        <div>
            <NavBar/>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <img src="/about.jpg" className={styles.about}/>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-center">
                    I build websites<br/>
                    and make them look pretty.
                </div>
            </div>
            <div className="row">
                <HiDownload/>
            </div>
        </div>

    )
}