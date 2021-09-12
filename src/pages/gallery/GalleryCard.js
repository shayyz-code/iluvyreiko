import { useState, useContext } from 'react';
import Censor from '../Censor';
import { GlobalStateContext } from '../GlobalState';
import { ViewGalleryContext } from './pageGallery';

import * as styles from './Gallery.styles';
import { styles as themeStyles } from '../ThemeColors.styles';

export default function NotesCard({ details, imgPath }) {
  const [imgHeight, setImgHeight] = useState();
  const { censored } = useContext(GlobalStateContext);
  const { setView } = useContext(ViewGalleryContext);
  return (
    <div
      style={styles.card}
      onClick={() => !censored && setView({ details, imgPath })}
    >
      {censored && (
        <Censor width={themeStyles.cardWidth / 2} height={imgHeight} />
      )}
      <img
        src={imgPath}
        alt={details}
        style={styles.img}
        onLoad={({ target: img }) => setImgHeight(img.offsetHeight)}
      />
      <p style={styles.details}>{details}</p>
    </div>
  );
}
