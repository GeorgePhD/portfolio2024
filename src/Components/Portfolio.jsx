
import { jobs } from '../data/jobs';
import { Link } from 'react-router-dom';
//started doing different in video 119. filtered projects in home page.

const Portfolio = () => {

  const urlCLeaned = (url) => {

    return url.replace(/^https?:\/\//, '');

}

  return (

    <div>
    {/* <button className='change__language__button'>English</button> */}
    {/* <h1 className='h1'>Portafolio</h1> */}
    
    <div className='portfolio-container'>
      
      {
        jobs.map(job => { //you can return in 2 ways, the second one will be downsides.
          return (
            <a href={job.url} className='article article-link' target='_blank' rel="noreferrer" key={job.id}>
            <article className='article' key={job.id}>
              <div className="mask">
                <img className='img' src={job.img} alt='image'/>
              </div>
              <h2 className='h2'>
                <Link to={`/Projects/${job.name}`} className='link link-l'>{job.name}</Link>
              </h2>
              <p className="paragraph">{job.description}</p>
              <p to={job.url} className='link' target='_blank' rel="noreferrer">{urlCLeaned(job.url)}</p>
              <h3 className='paragraph'> tecnologías: {job.tech}</h3>
            </article>
            </a>
          );
        })
      }
      </div>
      {/*  {
        jobs.map(job => ( // second way = automatic return

          
              <article>
                <h2>{job.name}</h2>
                
              </article>
          
        ))
        
      } */}

    </div>
  )
}
export default Portfolio