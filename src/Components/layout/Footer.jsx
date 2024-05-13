import FooterIcons from "./FooterIcons"



const Footer = () => {
  return (
    <footer className='footer'>
      <p>Escríbenos a :</p>
      <a href= 'mailto: contacto@letsdevelopme.com' className="footer__email">
      <p>contacto@letsdevelopme.com</p>
      </a>
      <p>&copy; Portfolio 2023 </p>
      <FooterIcons />
    </footer>
  )
}
export default Footer