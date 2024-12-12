import "../navbar/Navbar.css"


export default function Navbar() {
  return (
    <nav className="app_navbar">
      <ul className="app_navbar_list">
        <li><a href = "#home">Home</a></li>
        <li><a href="#sobre">About Us</a></li>
        <li><a href="#demo">Demo</a></li>
        <li><a href="#avisoLegal">Aviso Legal</a></li>
      </ul>
    </nav>
  )
}