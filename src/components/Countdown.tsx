import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';
import stylesDark from '../styles/components/Countdown.dark.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const { 
    minutes, 
    seconds, 
    isActive, 
    hasFinished, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  const { isDarkMode } = useContext(DarkModeContext);
  

  return (
    <div>
      <div className={isDarkMode ? styles.countdownContainer : stylesDark.countdownContainerDark}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
        disabled
        className={styles.countdownButton}>
          Ciclo encerrado
          <img src="/icons/checked.svg"></img>
        </button>
      ) : (
        <>
          {isActive ? (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}>
            Abandonar ciclo
            <img src="/icons/close.svg"></img>
            </button>)

            :
      
            (<button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}>
            Iniciar um ciclo
            </button> )}
              </>
      )}
    </div>
  );
}