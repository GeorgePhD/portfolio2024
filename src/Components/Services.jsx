import html from '../../public/images/html-5.png'
import css from '../../public/images/css-3.png'
import js from '../../public/images/js.png'
import react from '../../public/images/react2.png'
import Image1 from '../../public/images/services__img (1).jpg'
import Image2 from '../../public/images/services__img (2).jpg'
import Image3 from '../../public/images/services__img (3).jpg'
import Image4 from '../../public/images/web-app-1.png'
import Image5 from '../../public/images/web-app-2.png'
import Image6 from '../../public/images/web-app-3.png'
import Image7 from '../../public/images/landing-page-1.png'
import Image8 from '../../public/images/landing-page-2.png'
import Image9 from '../../public/images/landing-page-3.png'
import Image10 from '../../public/images/ecommerce-1.png'
import Image11 from '../../public/images/ecommerce-2.png'
import Image12 from '../../public/images/ecommerce-3.png'
import Image13 from '../../public/images/support-1.png'
import Image14 from '../../public/images/support-2.png'
import Image15 from '../../public/images/support-3.png'
import Image16 from '../../public/images/consulting-1.png'
import Image17 from '../../public/images/consulting-2.png'
import Image18 from '../../public/images/consulting-3.png'
import Image19 from '../../public/images/pictures-1.png'
import Image20 from '../../public/images/pictures-2.png'
import Image21 from '../../public/images/pictures-3.png'
import Image22 from '../../public/images/translation__1.png'
import Image23 from '../../public/images/translation__2.png'
import Image24 from '../../public/images/translation__3.png'
import Faq from '../Components/faq';
import { gsap } from 'gsap';
import { useEffect } from 'react';


const Services = () => {

  useEffect(() => {

    gsap.to('.services__logo', {
      scale: 1.1, // Scale up to 1.2 times the original size
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1
    });
  }, []);


  return (
    <div className='page'>
      {/* <button className='change__language__button'>English</button> */}
      <section className="services">
        {/* <h1 className='h1 urbanist__bolder'>Servicios</h1> */}
        <article className="service service__3">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Desarrollo de Software Personalizado</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="css logo" />
            <img className='services__logo' src={js} alt="javascript logo" />
            <img className='services__logo' src={react} alt="react logo" />
          </section>
          <p className="paragraph urbanist__regular">El desarrollo de software personalizado es el proceso de crear soluciones de software únicas para las necesidades específicas de una empresa u organización. A diferencia del software comercial estándar, que está diseñado para un amplio mercado, el software personalizado se desarrolla desde cero o se adapta significativamente para cumplir con los requisitos específicos del cliente.</p>
          <p className="paragraph urbanist__regular">El desarrollo de software personalizado incluye analizar los requisitos del cliente, diseñar, desarrollar, probar e implementar la solución, y trabajar estrechamente con el cliente para asegurar que el software cumpla con sus necesidades y expectativas.</p>
          <div className="services__image__container">
            <img src={Image1} className="services__image" alt="" />
            <img src={Image2} className="services__image middle__image" alt="" />
            <img src={Image3} className="services__image" alt="" />
          </div>
        </article>
        <article className="service service__1">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Desarrollo de aplicaciones web</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">El desarrollo de aplicaciones web es el proceso de crear software interactivo para navegadores web. Estas aplicaciones pueden ser simples páginas estáticas o complejas aplicaciones dinámicas con funciones avanzadas. Utilizan tecnologías como HTML, CSS, JavaScript y frameworks específicos como React JS, VueJS, Angular, para implementar la lógica y la interacción con el usuario.</p>
          <div className="services__image__container">
            <img src={Image4} className="services__image" alt="" />
            <img src={Image5} className="services__image middle__image" alt="" />
            <img src={Image6} className="services__image" alt="" />
          </div>
        </article>
        <article className="service service__2">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Landing page</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">Una landing page es una página web diseñada para convertir visitantes en clientes potenciales. Forma parte de una estrategia de marketing digital y está optimizada para acciones específicas como suscripciones, descargas o compras. Su diseño es simple y enfocado en la acción deseada, con contenido persuasivo y claras llamadas a la acción.</p>
          <div className="services__image__container">
            <img src={Image7} className="services__image" alt="" />
            <img src={Image8} className="services__image" alt="" />
            <img src={Image9} className="services__image" alt="" />
          </div>
        </article>
        <article className="service service__3">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>E-commerce</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">El E-commerce es la compra y venta de bienes y servicios en línea. En el desarrollo de software, implica crear plataformas digitales para estas transacciones, desde simples tiendas en línea hasta complejos marketplaces.</p>
          <p className="paragraph urbanist__regular">El desarrollo de software para E-commerce consiste en crear interfaces seguras y fáciles de usar para que los usuarios naveguen, compren y gestionen pedidos. Incluye características como gestión de inventario, pasarelas de pago y herramientas de marketing.</p>
          <p className="paragraph urbanist__regular">El desarrollo de software para E-commerce es esencial para las empresas que desean expandir su alcance en línea y captar nuevos clientes. Utiliza tecnologías como HTML, CSS, JavaScript y frameworks específicos como React JS, VueJS, Angular y/o otros especializados como Shopify o Wordpress para crear plataformas que brinden una experiencia de compra segura y conveniente.</p>
          <div className="services__image__container">
            <img src={Image10} className="services__image" alt="" />
            <img src={Image11} className="services__image middle__image" alt="" />
            <img src={Image12} className="services__image" alt="" />
          </div>
        </article>
        <article className="service service__3">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Mantenimiento y Soporte</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">El mantenimiento y soporte de software asegura el funcionamiento óptimo y libre de errores de una aplicación o sistema después de su implementación inicial. Esto es crucial para mantener su rendimiento, seguridad y fiabilidad a largo plazo. Las actividades pueden incluir:</p>
          <div className="services__image__container">
            <img src={Image13} className="services__image" alt="" />
            <img src={Image14} className="services__image middle__image" alt="" />
            <img src={Image15} className="services__image" alt="" />
          </div>
          <ul className="services__ul">
            <li><p className="paragraph urbanist__regular">Actualizaciones de software: Implementación de parches de seguridad, correcciones de errores y mejoras de funcionalidad para mantener el software actualizado y compatible con los cambios en el entorno tecnológico.</p></li>
            <li><p className="paragraph urbanist__regular">Monitoreo y diagnóstico: Supervisión continua del rendimiento del software, identificación y resolución proactiva de problemas de rendimiento, disponibilidad o seguridad.</p></li>
            <li><p className="paragraph urbanist__regular">Soporte técnico: Prestación de asistencia técnica y ayuda a los usuarios finales para resolver problemas, responder preguntas y proporcionar orientación sobre el uso adecuado del software.</p></li>
            <li><p className="paragraph urbanist__regular">Optimización de rendimiento: Identificación y implementación de mejoras para optimizar el rendimiento del software, como la optimización del código, la mejora de la velocidad de carga y la escalabilidad.</p></li>
            <li><p className="paragraph urbanist__regular">Gestión de cambios: Coordinación y documentación de cambios en el software, incluidas nuevas funcionalidades, actualizaciones y parches, para garantizar la integridad y estabilidad del sistema.</p></li>
            <li><p className="paragraph urbanist__regular">Respaldo y recuperación de datos: Establecimiento de procedimientos de respaldo regulares y planes de recuperación de desastres para proteger los datos del usuario y garantizar la continuidad del negocio en caso de fallos del sistema o pérdida de datos.</p></li>
          </ul>
        </article>
        <article className="service service__3">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Consultoría Tecnológica</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">Los consultores tecnológicos son expertos que brindan orientación especializada sobre cómo aprovechar la tecnología para alcanzar objetivos comerciales o estratégicos. Ofrecen soluciones adaptadas a desafíos tecnológicos específicos, proporcionando recomendaciones personalizadas.</p>
          <div className="services__image__container">
            <img src={Image16} className="services__image" alt="" />
            <img src={Image17} className="services__image middle__image" alt="" />
            <img src={Image18} className="services__image" alt="" />
          </div>
          <ul className="services__ul">
            <li><p className="paragraph urbanist__regular">Análisis de necesidades: Evaluación de las necesidades y objetivos del cliente para identificar oportunidades de mejora y áreas donde la tecnología puede proporcionar beneficios significativos.</p></li>
            <li><p className="paragraph urbanist__regular">Estrategia tecnológica: Desarrollo de una estrategia tecnológica a largo plazo que alinee los recursos tecnológicos con los objetivos comerciales de la organización.</p></li>
            <li><p className="paragraph urbanist__regular">Evaluación de tecnología: Evaluación de productos, servicios y soluciones tecnológicas disponibles en el mercado para determinar cuáles son más adecuados para las necesidades específicas del cliente.</p></li>
            <li><p className="paragraph urbanist__regular">Planificación e implementación de proyectos: Desarrollo de planes detallados y cronogramas para la implementación exitosa de proyectos de tecnología, como la migración a la nube, la actualización de sistemas, la implementación de software empresarial, etc.</p></li>
            <li><p className="paragraph urbanist__regular">Gestión del cambio: Ayuda en la gestión del cambio organizacional asociado con la adopción de nuevas tecnologías, incluida la capacitación de personal y la comunicación efectiva.</p></li>
            <li><p className="paragraph urbanist__regular">Seguridad y cumplimiento normativo: Evaluación y mejora de la postura de seguridad de la organización, así como el cumplimiento de regulaciones y normativas relacionadas con la protección de datos y la privacidad.</p></li>
            <li><p className="paragraph urbanist__regular">Optimización de procesos: Identificación de oportunidades para mejorar la eficiencia y la productividad mediante la automatización y la optimización de procesos utilizando tecnología.</p></li>
          </ul>
        </article>
        <article className="service service__4">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Fotografía</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">La fotografía web mejora la estética y la usabilidad de un sitio mediante imágenes digitales. Es fundamental para crear experiencias visuales atractivas en línea. Aspectos clave incluyen:</p>
          <div className="services__image__container">
            <img src={Image19} className="services__image" alt="" />
            <img src={Image20} className="services__image middle__image" alt="" />
            <img src={Image21} className="services__image" alt="" />
          </div>
          <ul className="services__ul">
            <li><p className="paragraph urbanist__regular">Imágenes de fondo: El uso de imágenes de fondo de alta calidad puede agregar profundidad y personalidad a un sitio web, creando una impresión visual impactante desde el primer vistazo.</p></li>
            <li><p className="paragraph urbanist__regular">Imágenes de productos: En el caso de sitios de comercio electrónico u otros sitios que presentan productos, las imágenes de productos de alta calidad son fundamentales para atraer y convencer a los clientes potenciales.</p></li>
            <li><p className="paragraph urbanist__regular">Fotografía de retrato: Las fotografías de retrato pueden utilizarse para agregar un toque humano y personal a un sitio web, especialmente en secciones como Acerca de nosotros o testimonios de clientes.</p></li>
            <li><p className="paragraph urbanist__regular">Fotografía de stock: El uso de fotografías de stock puede proporcionar imágenes de alta calidad y profesionales para complementar el contenido del sitio web, cuando las imágenes personalizadas no están disponibles o no son prácticas.</p></li>
            <li><p className="paragraph urbanist__regular">Optimización de imágenes: Es importante optimizar las imágenes para la web para garantizar tiempos de carga rápidos y un rendimiento óptimo del sitio web. Esto puede incluir la compresión de imágenes, el uso de formatos de archivo web adecuados y la implementación de técnicas de carga diferida.</p></li>
            <li><p className="paragraph urbanist__regular">Consistencia visual: Mantener una coherencia visual en todas las imágenes del sitio web, incluida la paleta de colores, el estilo y la temática, ayuda a crear una experiencia de usuario cohesiva y profesional.</p></li>
          </ul>
        </article>
        <article className="service service__4">
          <section className="service__content">
            <h2 className='h2 urbanist__bold'>Traducciones web</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph urbanist__regular">En Let´sDevelopme, entendemos la importancia de una presencia global en línea. Nuestro equipo de traductores expertos está dedicado a proporcionar traducciones precisas y culturalmente adaptadas de su contenido web del español al inglés. Nos especializamos en transformar su sitio web para atraer y cautivar a audiencias de habla inglesa, asegurando que su mensaje se mantenga consistente y atractivo en todos los idiomas.</p>
          <div className="services__image__container">
            <img src={Image22} className="services__image" alt="" />
            <img src={Image23} className="services__image middle__image" alt="" />
            <img src={Image24} className="services__image" alt="" />
          </div>
          <ul className="services__ul">
            <p className="paragraph urbanist__regular">¿Qué Ofrecemos?</p>
            <li><p className="paragraph urbanist__regular">Traducción Profesional:
              Cada proyecto de traducción es realizado por traductores nativos de inglés con un profundo conocimiento del español, garantizando una traducción precisa y natural. Nos aseguramos de que el tono y el estilo de su contenido original se mantengan intactos.</p></li>
            <li><p className="paragraph urbanist__regular">Localización Cultural:
              No solo traducimos palabras, sino que adaptamos su contenido para resonar con la cultura y las expectativas del mercado angloparlante. Esto incluye ajustes en expresiones idiomáticas, referencias culturales y otros matices lingüísticos.</p></li>
            <li><p className="paragraph urbanist__regular">Optimización SEO:
              Entendemos la importancia del SEO para el éxito de su sitio web. Nuestros traductores están capacitados en SEO, garantizando que las palabras clave y frases relevantes se integren de manera efectiva en la traducción para mejorar su visibilidad en los motores de búsqueda.</p></li>
            <li><p className="paragraph urbanist__regular">Adaptación Técnica:
              Nuestros servicios no se limitan a la traducción de texto. También adaptamos y verificamos todos los elementos técnicos, incluyendo meta descripciones, etiquetas alt de imágenes, y cualquier otro contenido integrado en su sitio web.</p></li>
            {/* <li><p className="paragraph urbanist__regular">Revisión y Control de Calidad:
              Cada proyecto pasa por un riguroso proceso de revisión y control de calidad. Nuestros editores revisan cada traducción para garantizar precisión, coherencia y fluidez, proporcionando un producto final impecable.</p></li> */}
            <p className="paragraph urbanist__regular">¿Por Qué Elegirnos?</p>
            <li><p className="paragraph urbanist__regular">Experiencia y Profesionalismo: Contamos con años de experiencia en la industria de la traducción y un equipo de profesionales altamente capacitados.
              <li><p className="paragraph urbanist__regular">Enfoque Personalizado: Adaptamos nuestros servicios para satisfacer sus necesidades específicas y brindar resultados excepcionales.</p></li>
              <li><p className="paragraph urbanist__regular">Tecnología Avanzada: Utilizamos herramientas de traducción asistida por computadora (CAT) para mejorar la eficiencia y consistencia de nuestros proyectos.</p></li>
              <li><p className="paragraph urbanist__regular">Compromiso con la Calidad: Garantizamos traducciones de alta calidad que reflejan fielmente el contenido y la intención de su mensaje original.</p></li></p></li>
          </ul>
        </article>
        <Faq />
      </section>
    </div>
  )
}
export default Services