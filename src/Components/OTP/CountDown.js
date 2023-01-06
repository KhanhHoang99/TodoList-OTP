import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


const CountDown = ({setIsDisableConfirmOTP, timer}) => {

    const[count, setCount] = useState(timer);



    useEffect(() => {

        if(count === 0) {
            setIsDisableConfirmOTP(true);
            return;
        }

        const timerInterVal = setInterval(() => {
            timer === 0 ? setCount(0) : setCount(count - 1);
        }, 1000)
        
        return () => {clearInterval(timerInterVal)};
    })

    return(
        <CountdownCircleTimer
            isPlaying
            duration={timer}
            colors={['#4CAF50', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[timer, 5, 2, 0]}
            size={120}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    )
    
}

export default CountDown;