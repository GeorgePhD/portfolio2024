import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faWhatsapp, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// Add the icons you imported to the library
// Add the icons you imported to the library
library.add(faFacebook, faInstagram, faWhatsapp, faYoutube, faTiktok);
/* const facebook = "https://www.facebook.com/profile.php?id=61554488474975&mibextid=YMEMSu";*/
const instagram = "https://www.instagram.com/devel0pme";
/* const youtube = "https://www.youtube.com/@losmaitenes";*/
/* const tiktok = "https://www.tiktok.com/@losmaitenesairsoft"; */
const whatsapp = "https://api.whatsapp.com/send?phone=56922228694";

const FooterIcons = () => {
    return (
        <div className='footer__icons__container'>
            {/* Brand icons */}
            {/* <Link to={facebook} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'facebook']} /></Link> */}
            <Link to={instagram} target='_blank'><FontAwesomeIcon className='footer__icons instagram' icon={['fab', 'instagram']} /></Link>
            <Link to={whatsapp} target='_blank'><FontAwesomeIcon className='footer__icons whatsapp' icon={['fab', 'whatsapp']} /></Link>
            {/* <Link to={tiktok} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'tiktok']} /></Link> */}
            {/* <Link to={youtube} target='_blank'><FontAwesomeIcon className='footer__icons' icon={['fab', 'youtube']} /></Link> */}
        </div>
    );
};

export default FooterIcons;
