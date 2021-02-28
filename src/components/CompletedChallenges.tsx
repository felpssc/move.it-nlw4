import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import styles from '../styles/components/CompletedChallenges.module.css';
import stylesDark from '../styles/components/CompletedChallenges.dark.module.css';

export function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext);
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={isDarkMode ? styles.completedChallengesContainer : stylesDark.completedChallengesContainerDark}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}