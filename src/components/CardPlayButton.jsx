import { Pause, Play } from "./Player"

export function CardPlayButton({ id }) {

    return (
        <div className=" card-play-button bg-green-500 rounded-full p-4 ">
            <Play />
        </div>
    )
}