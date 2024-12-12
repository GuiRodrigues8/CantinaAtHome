import { images } from '../../constants';
import "../home/Home.css"


export default function HomePage() {
  return (
    <div id = "home" className="app_background">
      <img src={images.logo} alt="Logo" />
      <h1>Cantina at Home</h1>
    </div>
  )
}