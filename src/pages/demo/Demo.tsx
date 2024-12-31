import "../demo/Demo.css";
import images from "../../constants/images";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { useState, useRef } from "react";

export default function Demo() {
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar o vídeo
    const videoRef = useRef<HTMLVideoElement>(null); // Define o tipo correto para o vídeo

    const handleVideoToggle = () => {
        if (videoRef.current) { // Verifica se videoRef.current não é null
            if (isPlaying) {
                videoRef.current.pause(); // Pausa o vídeo
            } else {
                videoRef.current.play(); // Inicia o vídeo
            }
            setIsPlaying(!isPlaying); // Atualiza o estado
        }
    };

    return (
        <div id="demo" className="demo">
            <div className="video_container">
                <video
                    ref={videoRef}
                    muted
                    loop
                    id="myVideo"
                    className="video_player"
                >
                    <source src={images.demoVideo} type="video/mp4" />
                </video>
                <button
                    onClick={handleVideoToggle}
                    className="video_toggle_button"
                >
                    {isPlaying ? <BsPauseFill size={24} /> : <BsFillPlayFill size={24} />}
                </button>
            </div>
        </div>
    );
}
