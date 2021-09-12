import { useContext, useState } from 'react';

import Censor from '../Censor';
import { GlobalStateContext } from '../GlobalState';
import { ViewMyDaysContext } from './pageMyDays';

import * as styles from './MyDays.styles';
import { styles as themeStyles } from '../ThemeColors.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default function MyDaysCard({
  date,
  content,
  filePath,
  fileType,
  thumbnail = '',
}) {
  const [imgHeight, setImgHeight] = useState();
  const { censored } = useContext(GlobalStateContext);
  const { setView } = useContext(ViewMyDaysContext);
  return (
    <div
      style={styles.card}
      onClick={() =>
        !censored && setView({ date, content, filePath, fileType })
      }
    >
      {censored && (
        <Censor width={themeStyles.cardWidth / 2} height={imgHeight} />
      )}
      {fileType === '.jpg' ? (
        <img
          style={styles.img}
          alt={date}
          src={filePath}
          onLoad={({ target: img }) => setImgHeight(img.offsetHeight)}
        />
      ) : fileType === '.mp4' ? (
        <div style={styles.imgContainer}>
          <img
            style={styles.img}
            alt={date}
            src={thumbnail}
            onLoad={({ target: img }) => setImgHeight(img.offsetHeight)}
          />
          <div style={styles.playIcon}>
            <FontAwesomeIcon icon={faPlayCircle} />
          </div>
        </div>
      ) : null}
      <h2 style={styles.date}>{date}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
}
