import {Link} from 'react-router-dom';
import '../../src/App.css';

const Home = () => {
  return (
    <div className='home-page'>
      <h2 className='home__subtitle'>Hola,</h2>

      <h1 className='home__title'> 
        mi nombre es <strong className='span-black-color'>Jorge Gamboa</strong> y soy <strong className='span-black-color'>desarrollador web.</strong> 
      </h1>

      <p className='text-centered'>
      Ofrezco servicios de programación y desarrollo en todo tipo de proyectos web.
      </p>

      <h2 className='home__subtitle--2'>Te ayudo a transformar tus ideas en una aplicación web.</h2>

      <div className="home-page-links">
      <Link to='/contact' className='home__links'>Puedes contactarme acá</Link> 
      <Link to='/portfolio' className='home__links'>Ver proyectos</Link>
      </div>
      {/* <Portfolio /> */}
    </div>
  )
}
export default Home