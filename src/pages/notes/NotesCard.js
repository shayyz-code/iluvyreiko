import { useContext } from 'react';
import Button from '../Button';
import Censor from '../Censor';
import { GlobalStateContext } from '../GlobalState';
import { ViewNotesContext } from './pageNotes';

import * as styles from './Notes.styles';
import { styles as themeStyles } from '../ThemeColors.styles';

export default function NotesCard({ heading, details, imgs }) {
  const { censored } = useContext(GlobalStateContext);
  const { setView } = useContext(ViewNotesContext);
  return (
    <div style={styles.card}>
      {censored && <Censor width={themeStyles.cardWidth} height={203} />}
      <div style={styles.grid}>
        {imgs.map((imgItem, index) => (
          <div style={styles.gridItems[imgs.length - 1][index]} key={index}>
            <img src={imgItem} alt={heading} style={styles.img} />
          </div>
        ))}
      </div>
      <h2 style={styles.heading}>{heading}</h2>
      <p style={styles.details}>{`${details.slice(0, 25)}...`}</p>
      <div
        style={styles.btn}
        onClick={() => !censored && setView({ heading, details, imgs })}
      >
        <Button
          width={50}
          height={30}
          content="View"
          fontSize={11}
          hover={true}
        />
      </div>
    </div>
  );
}
