import React, { useContext, useEffect } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import styles from '../styles/components/Profile.module.css';
import stylesDark from '../styles/components/Profile.dark.module.css';
import { DarkModeButton } from './DarkModeButton';
export function Profile() {

  const { level } = useContext(ChallengesContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return(
    <div className={isDarkMode ? styles.profileContainer : stylesDark.profileContainerDark}>
      <img src="https://github.com/felpssc.png" alt="Felipe Silva"></img>
      <div>
        <strong>Felipe Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level"></img>
          Level {level}
        </p>
        <DarkModeButton></DarkModeButton>
      </div>
    </div>
  );
}