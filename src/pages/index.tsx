import { ExperienceBar } from "../components/ExperienceBar";
import Head from 'next/head';
import { Profile } from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { GetServerSideProps } from 'next';
import React, { useContext } from "react";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { DarkModeButton } from '../components/DarkModeButton';
import { DarkModeContext, DarkModeProvider } from "../contexts/DarkModeContext";
interface HomeProps {
  level: number;
  currentExperience: number
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}>
      <DarkModeProvider>
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar></ExperienceBar>
          <CountdownProvider>
            <section>
              <div>
                <Profile></Profile>
                <CompletedChallenges></CompletedChallenges>
                <Countdown></Countdown>
              </div>
              <div>
                <ChallengeBox></ChallengeBox>
              </div>
            </section>
          </CountdownProvider>
        </div>
      </DarkModeProvider>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
} 