import "../socials/Socials.css"
import images from "../../constants/images"

export default function Demo() {
    return (
        <div className = "sociais">
            <div className="sociais_img">
            <img src = {images.instagram} alt = "instagram" ></img>
            </div>
            <div className="sociais_text">
                <a> - @cantina_at_home</a>
            </div>    
        </div>
    )
}