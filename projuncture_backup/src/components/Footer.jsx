import '../components/Footer.css'
import fb from '../assets/fbimg.png'
import x from '../assets/ximg.png'
import linkedin from '../assets/linkedinimg.png'
import insta from '../assets/instaimg.png'

export default function Footer () {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb__footer-links-div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt="" /></p>
                            <p><img src={insta} alt="" /></p>
                            <p><img src={x} alt="" /></p>
                            <p><img src={linkedin} alt="" /></p>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Projuncture. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href=""><div><p>Terms & Conditions</p></div></a>
                        <a href=""><div><p>Privacy</p></div></a>
                        <a href=""><div><p>Security</p></div></a>
                        <a href=""><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}