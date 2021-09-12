import { useContext } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import * as styles from './ViewNotes.styles';

import { ViewNotesContext } from './pageNotes';

export default function ViewNotesCard() {
  const { view, setView, defaultViewState } = useContext(ViewNotesContext);
  const { heading, details, imgs } = view;
  return (
    <div style={styles.container}>
      <div style={styles.viewCard}>
        <h2 style={styles.heading}>{heading}</h2>
        <p style={styles.details}>{details}</p>
        {imgs.map((imgItem, index) => (
          <img src={imgItem} alt={heading} style={styles.img} key={index} />
        ))}
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
  );
}
