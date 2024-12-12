import "../about/About.css";
import images from "../../constants/images";

export default function About() {
  return (
    <div id = "sobre" className="about">
      <div className="about_img">
        <img src = {images.about} alt = "about" ></img>
      </div>
      <div className="about_text">
        <h1>És estudante e gastas imenso tempo em filas na cantina? Então nós somos a solução!</h1>
        <p>A CantinaAtHome leva-te a qualidade e a acessibilidade de uma refeição da cantina, até ao conforto de tua casa! </p>
        <p>Procurámos desenvolver uma aplicação que te ajudasse a reduzir os teus custos mensais, juntando os preços acessíveis da cantina, ao conforto de tua casa!</p>
        <p>Com a nossa app, vais poder escolher a refeição que pretendes, e nós vamos garantir que a mesma chega até ti de uma forma rápida e eficiente!</p> 
      </div>
    </div>
  )
}