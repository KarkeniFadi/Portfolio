import './sidebar.scss';
import LogoF from '../../assets/images/logo-f1.png'
import LogoSub from '../../assets/images/logo_sub1.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoF} alt="logo" />
            <img className='sub_logo' src={LogoSub} alt="logo_subt" />
        </Link>
        <nav>
            <NavLink  activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink  activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink  activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/fadi-karkeni/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/KarkeniFadi'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.instagram.com/karkenifedi/'>
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
           
         
        
        </ul>    

    </div>
)


export default Sidebar