import React, { useState, createContext, useContext } from 'react';

import GalleryCard from './GalleryCard';
import ViewGalleryCard from './ViewGalleryCard';

import * as styles from './Gallery.styles';

import { GlobalStateContext } from '../GlobalState';

export const ViewGalleryContext = createContext();

const GalleryPage = () => {
  const { censored, data } = useContext(GlobalStateContext);
  const defaultViewState = {
    details: '',
    imgPath: '',
  };
  const [view, setView] = useState(defaultViewState);
  return (
    <React.Fragment>
      <ViewGalleryContext.Provider value={{ view, setView, defaultViewState }}>
        <div style={styles.container}>
          {data.gallery.length
            ? data.gallery.map(({ heading, imgPath }, index) => (
                <GalleryCard details={heading} imgPath={imgPath} key={index} />
              ))
            : null}
        </div>
        {!censored && view.imgPath && <ViewGalleryCard />}
      </ViewGalleryContext.Provider>
    </React.Fragment>
  );
};

export default GalleryPage;
