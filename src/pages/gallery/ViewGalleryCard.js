import { useContext } from 'react';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import * as styles from './ViewGallery.styles';

import { ViewGalleryContext } from './pageGallery';

export default function ViewGalleryCard() {
  const { view, setView, defaultViewState } = useContext(ViewGalleryContext);
  const { details, imgPath } = view;
  return (
    <div style={styles.container}>
      <div style={styles.viewCard}>
        <img style={styles.img} alt={details} src={imgPath} />
        <p style={styles.details}>{details}</p>
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
