import "../demo/Demo.css"
import images from "../../constants/images"

export default function Demo() {
    return (
        <div id = "demo" className = "demo">
            <div className="demo_img">
                <img src = {images.demo} alt = "demo" ></img>
            </div>
            <div className="demo_text">
                <p>Ainda em desenvolvimento!!</p>
                <p>Esperem por novidades!!! </p>
            </div>
        </div>
    )
}