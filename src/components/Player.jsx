
import { useRef, useState } from "react"

export const Pause = () => (

    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" ><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = () => (
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" ><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)


export function Player() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentSong, setCurrentSong] = useState(null)
    const audioRef = useRef()

    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.src = `/music/biter.mp3`

            audioRef.current.play()
                .then(() => {
                    // La reproducción inició correctamente
                })
                .catch(error => {
                    // Hubo un error al iniciar la reproducción
                    console.error('Error al reproducir el audio:', error)
                })
        }

        setIsPlaying(!isPlaying)
    }



    return (
        <div className="flex flex-grow justify-between w-full px-4 z-50">
            <div>
                currentSong...
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center">
                    <button className=" bg-white rounded-full p-2" onClick={handleClick}>
                        {isPlaying ? <Pause /> : <Play />}

                    </button>
                </div>
            </div>


            <div>
                VOLUMEN...
            </div>
            <audio ref={audioRef} />
        </div>
    )
}
