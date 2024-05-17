import {Link} from 'react-router-dom';
/* import Portfolio from '../Components/Portfolio'; */ 
import Services from '../Components/Services'; 
/* import Blog from '../Components/Blog'; */ 
/* import Contact from '../Components/Contact'; */ 
import '../../src/App.css';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const subtitleRef = useRef(null);

  const wrapTextNodes = (element) => {
    if (!element) return;

    const wrapTextNode = (node) => {
      const text = node.textContent;
      return text.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        return span;
      });
    };

    const childNodes = Array.from(element.childNodes);
    childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const wrappedNodes = wrapTextNode(node);
        wrappedNodes.forEach(span => element.insertBefore(span, node));
        element.removeChild(node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        wrapTextNodes(node);
      }
    });
  };

  useEffect(() => {
    // Wrap text nodes in spans for title, paragraph, and subtitle
    wrapTextNodes(titleRef.current);
    wrapTextNodes(paragraphRef.current);
    wrapTextNodes(subtitleRef.current);

    // Select all spans in title, paragraph, and subtitle
    const titleChars = titleRef.current.querySelectorAll('span');
    const paragraphChars = paragraphRef.current.querySelectorAll('span');
    const subtitleChars = subtitleRef.current.querySelectorAll('span');

    // Animate each character in the title
    gsap.from(titleChars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Animate each character in the paragraph
    gsap.from(paragraphChars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Animate each character in the subtitle
    gsap.from(subtitleChars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power2.out"
    });
  }, []);

  return (
    <>
    <div className='home-page'>
      <h1 className='home__title' ref={titleRef}> 
        Somos <strong className='span-black-color'>Let'sDevelopMe</strong> y desarrollamos <strong className='span-black-color' >sitios web.</strong> 
      </h1>

      <p className='text-centered' ref={paragraphRef}>
      servicios de programación y desarrollo en todo tipo de proyectos web.
      </p>

      <h2 className='home__subtitle--2' ref={subtitleRef}>Te ayudamos a transformar tus ideas en una aplicación web.</h2>
      </div>
      <div className="home-page-links">
      <Link to='/contact' className='home__links'>contáctanos</Link> 
      <Link to='/portfolio' className='home__links'>Proyectos</Link>
      </div>
    
      {/* <Portfolio /> */}
      <Services />
      {/* <Blog /> */}
     {/*  <Contact /> */}
    </>
  )
}
export default Home