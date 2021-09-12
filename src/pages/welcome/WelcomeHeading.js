import { useContext } from 'react';
import { GlobalStateContext } from '../GlobalState';
import * as styles from './Welcome.styles';

export default function WelcomeHeading({ imgs }) {
  const { censored } = useContext(GlobalStateContext);
  return (
    <div style={styles.headingContainer}>
      <div style={styles.headingImgGrid}>
        <div style={styles.headingContentGrid}>
          <div style={styles.headingContent}>
            <h1 style={styles.name}>{!censored ? 'REIKO' : 'AZ'}</h1>
            <p style={styles.text}>{!censored ? 'Awwzayyy' : 'yes y'}</p>
          </div>
        </div>
        {imgs.map((imgItem, index) => (
          <div style={styles.headingImgGridItems[index]} key={index}>
            {!censored && <img src={imgItem} alt="" style={styles.img} />}
          </div>
        ))}
      </div>
    </div>
  );
}
