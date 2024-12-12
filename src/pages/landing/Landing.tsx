import Home from '../home/Home';
import Navbar from '../../components/navbar/Navbar';
import About from '../about/About';
import Demo from '../demo/Demo';
import Socials from '../socials/Socials';
import AvisoLegal from '../avisoLegal/AvisoLegal';

export default function Landing() {
    return (
      <>
        <Home />
        <Navbar />
        <About />
        <Demo />
        <AvisoLegal />
        <Socials />
      </>
    )
  }