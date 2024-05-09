import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import Portfolio from '../Components/Portfolio';
import Services from '../Components/Services';
import Curriculum from '../Components/Curriculum';
import Contact from '../Components/Contact';
import  HeaderNav  from '../Components/layout/HeaderNav';
import  Footer  from '../Components/layout/Footer';
import  Projects  from '../Components/Projects';
const MyRoutes = () => {
    return (
        <BrowserRouter>
        {/* header and navigation */}
        <HeaderNav />
        {/* main content */}
        <section className='content'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/services' element={<Services />} />
                <Route path='/curriculum' element={<Curriculum />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects/:id' element={<Projects />} />
                <Route path='*' element={
                <div className='page'>
                    <h1 className='h1'>Error 404, page not found</h1> 
                </div>
                } />
            </Routes>
        </section>
        {/* Footer */}
        <Footer />
        </BrowserRouter>
    )
}

export default MyRoutes