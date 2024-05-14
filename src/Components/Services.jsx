import html from '../../public/images/html-5.png'
import css from '../../public/images/css-3.png'
import js from '../../public/images/js.png'
import react from '../../public/images/react2.png'
import Image1 from '../../public/images/services__img (1).jpg'
import Image2 from '../../public/images/services__img (2).jpg'
import Image3 from '../../public/images/services__img (3).jpg'
const Services = () => {
  return (
    <div className='page'>
      <h1 className='h1'>Servicios</h1>

      <section className="services">
        <article className="service service__1">
          <section className="service__content">
            <h2 className='h2'>Desarrollo de aplicaciones web</h2>
            <img className='services__logo' src={html} alt="html logo" />
            <img className='services__logo' src={css} alt="html logo" />
            <img className='services__logo' src={js} alt="html logo" />
            <img className='services__logo' src={react} alt="html logo" />
          </section>
          <p className="paragraph">El desarrollo de aplicaciones web es el proceso de crear software interactivo para navegadores web. Estas aplicaciones pueden ser simples páginas estáticas o complejas aplicaciones dinámicas con funciones avanzadas. Utilizan tecnologías como HTML, CSS, JavaScript y frameworks específicos para implementar la lógica y la interacción con el usuario.</p>
          <div className="services__image__container">
              <img src={Image1} className="services__image" alt="" />
              <img src={Image2} className="services__image middle__image" alt="" />
              <img src={Image3} className="services__image" alt="" />
          </div>
        </article>
        <article className="service service__2">
          <h2 className='h2'>Landing page</h2>
          <p className="paragraph">Una landing page es una página web diseñada para convertir visitantes en clientes potenciales. Forma parte de una estrategia de marketing digital y está optimizada para acciones específicas como suscripciones, descargas o compras. Su diseño es simple y enfocado en la acción deseada, con contenido persuasivo y claras llamadas a la acción. Su eficacia se mide por la tasa de conversión, el porcentaje de visitantes que realizan la acción deseada.</p>
          <div className="services__image__container">
              <img src={Image1} className="services__image" alt="" />
              <img src={Image2} className="services__image" alt="" />
              <img src={Image3} className="services__image" alt="" />
          </div>
        </article>
        <article className="service service__3">
          <h2 className='h2'>Desarrollo de Software Personalizado</h2>
          <p className="paragraph">El desarrollo de software personalizado es el proceso de crear soluciones de software únicas para las necesidades específicas de una empresa u organización. A diferencia del software comercial estándar, que está diseñado para un amplio mercado, el software personalizado se desarrolla desde cero o se adapta significativamente para cumplir con los requisitos específicos del cliente.</p>
          <p className="paragraph">El desarrollo de software personalizado incluye analizar los requisitos del cliente, diseñar, desarrollar, probar e implementar la solución, y trabajar estrechamente con el cliente para asegurar que el software cumpla con sus necesidades y expectativas.</p>
          <p className="paragraph">El desarrollo de software personalizado abarca aplicaciones como ERP, CRM, aplicaciones móviles, soluciones de comercio electrónico, CMS, y herramientas de análisis de datos. Su principal ventaja es ofrecer soluciones adaptadas a las necesidades específicas del cliente, mejorando la eficiencia operativa, productividad y competitividad.</p>
        </article>
        <article className="service service__3">
          <h2 className='h2'>E-commerce</h2>
          <p className="paragraph">El E-commerce es la compra y venta de bienes y servicios en línea. En el desarrollo de software, implica crear plataformas digitales para estas transacciones, desde simples tiendas en línea hasta complejos marketplaces..</p>
          <p className="paragraph">El desarrollo de software para E-commerce consiste en crear interfaces seguras y fáciles de usar para que los usuarios naveguen, compren y gestionen pedidos. Incluye características como gestión de inventario, pasarelas de pago y herramientas de marketing.</p>
          <p className="paragraph">El desarrollo de software para E-commerce es esencial para las empresas que desean expandir su alcance en línea y captar nuevos clientes. Utiliza tecnologías como HTML, CSS, JavaScript y frameworks especializados como Shopify o Magento para crear plataformas que brinden una experiencia de compra segura y conveniente.</p>
        </article>
        <article className="service service__3">
          <h2 className='h2'>Mantenimiento y Soporte</h2>
          <p className="paragraph">El mantenimiento y soporte de software asegura el funcionamiento óptimo y libre de errores de una aplicación o sistema después de su implementación inicial. Esto es crucial para mantener su rendimiento, seguridad y fiabilidad a largo plazo. Las actividades pueden incluir:</p>
          <ul className="services__ul">
            <li><p className="paragraph">Actualizaciones de software: Implementación de parches de seguridad, correcciones de errores y mejoras de funcionalidad para mantener el software actualizado y compatible con los cambios en el entorno tecnológico.</p></li>
            <li><p className="paragraph">Monitoreo y diagnóstico: Supervisión continua del rendimiento del software, identificación y resolución proactiva de problemas de rendimiento, disponibilidad o seguridad.</p></li>
            <li><p className="paragraph">Soporte técnico: Prestación de asistencia técnica y ayuda a los usuarios finales para resolver problemas, responder preguntas y proporcionar orientación sobre el uso adecuado del software.</p></li>
            <li><p className="paragraph">Optimización de rendimiento: Identificación y implementación de mejoras para optimizar el rendimiento del software, como la optimización del código, la mejora de la velocidad de carga y la escalabilidad.</p></li>
            <li><p className="paragraph">Gestión de cambios: Coordinación y documentación de cambios en el software, incluidas nuevas funcionalidades, actualizaciones y parches, para garantizar la integridad y estabilidad del sistema.</p></li>
            <li><p className="paragraph">Respaldo y recuperación de datos: Establecimiento de procedimientos de respaldo regulares y planes de recuperación de desastres para proteger los datos del usuario y garantizar la continuidad del negocio en caso de fallos del sistema o pérdida de datos.</p></li>
          </ul>
        </article>
        <article className="service service__3">
          <h2 className='h2'>Consultoría Tecnológica</h2>
          <p className="paragraph">Los consultores tecnológicos son expertos que brindan orientación especializada sobre cómo aprovechar la tecnología para alcanzar objetivos comerciales o estratégicos. Ofrecen soluciones adaptadas a desafíos tecnológicos específicos, proporcionando recomendaciones personalizadas.</p>
          <ul className="services__ul">
            <li><p className="paragraph">Análisis de necesidades: Evaluación de las necesidades y objetivos del cliente para identificar oportunidades de mejora y áreas donde la tecnología puede proporcionar beneficios significativos.</p></li>
            <li><p className="paragraph">Estrategia tecnológica: Desarrollo de una estrategia tecnológica a largo plazo que alinee los recursos tecnológicos con los objetivos comerciales de la organización.</p></li>
            <li><p className="paragraph">Evaluación de tecnología: Evaluación de productos, servicios y soluciones tecnológicas disponibles en el mercado para determinar cuáles son más adecuados para las necesidades específicas del cliente.</p></li>
            <li><p className="paragraph">Planificación e implementación de proyectos: Desarrollo de planes detallados y cronogramas para la implementación exitosa de proyectos de tecnología, como la migración a la nube, la actualización de sistemas, la implementación de software empresarial, etc.</p></li>
            <li><p className="paragraph">Gestión del cambio: Ayuda en la gestión del cambio organizacional asociado con la adopción de nuevas tecnologías, incluida la capacitación de personal y la comunicación efectiva.</p></li>
            <li><p className="paragraph">Seguridad y cumplimiento normativo: Evaluación y mejora de la postura de seguridad de la organización, así como el cumplimiento de regulaciones y normativas relacionadas con la protección de datos y la privacidad.</p></li>
            <li><p className="paragraph">Optimización de procesos: Identificación de oportunidades para mejorar la eficiencia y la productividad mediante la automatización y la optimización de procesos utilizando tecnología.</p></li>
          </ul>
        </article>
        <article className="service service__4">
          <h2 className='h2'>Fotografía</h2>
          <p className="paragraph">La fotografía web mejora la estética y la usabilidad de un sitio mediante imágenes digitales. Es fundamental para crear experiencias visuales atractivas en línea. Aspectos clave incluyen:</p>
            <ul className="services__ul">
              <li><p className="paragraph">Imágenes de fondo: El uso de imágenes de fondo de alta calidad puede agregar profundidad y personalidad a un sitio web, creando una impresión visual impactante desde el primer vistazo.</p></li>
              <li><p className="paragraph">mágenes de productos: En el caso de sitios de comercio electrónico u otros sitios que presentan productos, las imágenes de productos de alta calidad son fundamentales para atraer y convencer a los clientes potenciales.</p></li>
              <li><p className="paragraph">Fotografía de retrato: Las fotografías de retrato pueden utilizarse para agregar un toque humano y personal a un sitio web, especialmente en secciones como Acerca de nosotros o testimonios de clientes.</p></li>
              <li><p className="paragraph">Fotografía de stock: El uso de fotografías de stock puede proporcionar imágenes de alta calidad y profesionales para complementar el contenido del sitio web, cuando las imágenes personalizadas no están disponibles o no son prácticas.</p></li>
              <li><p className="paragraph">Optimización de imágenes: Es importante optimizar las imágenes para la web para garantizar tiempos de carga rápidos y un rendimiento óptimo del sitio web. Esto puede incluir la compresión de imágenes, el uso de formatos de archivo web adecuados y la implementación de técnicas de carga diferida.</p></li>
              <li><p className="paragraph">Consistencia visual: Mantener una coherencia visual en todas las imágenes del sitio web, incluida la paleta de colores, el estilo y la temática, ayuda a crear una experiencia de usuario cohesiva y profesional.</p></li>
            </ul>
        </article>
      </section>
    </div>
  )
}
export default Services