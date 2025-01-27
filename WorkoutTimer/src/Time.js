import { useEffect } from "react";
import formatTime from "./formatTime";

const Time = ({ time, setTime }) => {

    useEffect(function () {
        const id = setInterval(function () {
        setTime(formatTime(new Date()));
        }, 1000);

        return () => clearInterval(id);
    }, [setTime]);

    return (
        <time>For your workout on {time}</time>
    )
}

export default Time;