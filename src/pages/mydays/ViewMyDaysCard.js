import { useContext } from 'react';
import ReactPlayer from 'react-player';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import * as styles from './ViewMyDays.styles';

import { ViewMyDaysContext } from './pageMyDays';

export default function ViewMyDaysCard() {
  const { view, setView, defaultViewState } = useContext(ViewMyDaysContext);
  const { date, content, filePath, fileType } = view;
  return (
    <div style={styles.container}>
      <div style={styles.viewCard}>
        <div style={styles.innerContainer}>
          {fileType === '.jpg' ? (
            <img style={styles.img} alt={date} src={filePath} />
          ) : fileType === '.mp4' ? (
            <ReactPlayer
              url={filePath}
              width={styles.img.width}
              height="100%"
              controls
            />
          ) : null}
          <h2 style={styles.date}>{date}</h2>
          <p style={styles.content}>{content}</p>
          <div style={styles.btn} onClick={() => setView(defaultViewState)}>
            <Button
              width={25}
              height={25}
              content={<FontAwesomeIcon icon={faChevronLeft} />}
              fontSize={12}
              hover={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
