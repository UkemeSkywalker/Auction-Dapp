import { useTimer } from 'react-timer-hook';


// export const SetTime =() => {
//     const time = new Date();
//     time.setSeconds(time.getSeconds() + 600);
//     console.log("Line 7:",time);
//     return time;
//   }

export const UseAuctionTimer = ({expiryTimestamp}: any) => {
    console.log("Line 11",expiryTimestamp);
    const {seconds, minutes, hours, days, isRunning,start, pause} = useTimer(
        {expiryTimestamp, onExpire : () => console.warn('onExpire called')
    });
    
    // return {seconds, minutes, hours, days, isRunning,start, pause}

}




