import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faWhatsapp, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Adding FontAwesome icons to the library
library.add(faFacebook, faInstagram, faWhatsapp, faYoutube, faTiktok, faEnvelope);

const instagram = "https://www.instagram.com/devel0pme";
const email = "mailto:contacto@letsdevelopme.com";  // Use mailto: for email links
const whatsapp = "https://api.whatsapp.com/send?phone=56922228694";

const Contact = () => {
  return (
    <>
    {/* <div className='page'> */}
      <h1 className='h1'>Contacto</h1>
            <h2 className="link__title">Hazme click!</h2>
      <section className="links__container">
          <section className="link__container">
            <Link to={instagram} target='_blank'><FontAwesomeIcon className='contact__icons instagram' icon={['fab', 'instagram']} /></Link>
          </section>
          <section className="link__container">
            <Link to={whatsapp} target='_blank'><FontAwesomeIcon className='contact__icons whatsapp' icon={['fab', 'whatsapp']} /></Link>
          </section>
          <section className="link__container">
            <a href={email} target='_blank'><FontAwesomeIcon className='contact__icons email' icon={['fas', 'envelope']} /></a>
          </section>
      </section>
    {/* </div> */}
    </>
  );
};
export default Contact