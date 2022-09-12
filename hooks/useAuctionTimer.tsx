import { useTimer } from 'react-timer-hook';




function UseAuctionTimer({ expiryTimestamp }: any) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div>
      <div style={{fontSize: '40px'}}>
        <span className ="countDown">{days}</span>:<span className ="countDown">{hours}</span>:<span className ="countDown">{minutes}</span>:<span className ="countDown">{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}



export default UseAuctionTimer

