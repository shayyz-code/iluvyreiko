import React, { useContext } from 'react';

import * as styles from './Welcome.styles';
import WelcomeHeading from './WelcomeHeading';
import WelcomeLink from './WelcomeLink';

import { GlobalStateContext } from '../GlobalState';

import {
  faListAlt,
  faImages,
  faCaretSquareRight,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

const WelcomePage = () => {
  const { data } = useContext(GlobalStateContext);
  return (
    <React.Fragment>
      -
      <div style={styles.centerMaker}>
        {data.welcome.length
          ? data.welcome.map(({ imgs, linkDescription }, index) => (
              <div style={styles.container} key={index}>
                <WelcomeHeading imgs={imgs} />
                <WelcomeLink
                  linkName="Properties"
                  linkPath="/properties"
                  linkDescription={linkDescription.properties}
                  icon={faListAlt}
                  gridIndex={0}
                />
                <WelcomeLink
                  linkName="Gallery"
                  linkPath="/gallery"
                  linkDescription={linkDescription.gallery}
                  icon={faImages}
                  gridIndex={1}
                />
                <WelcomeLink
                  linkName="Days"
                  linkPath="/days"
                  linkDescription={linkDescription.mydays}
                  icon={faCaretSquareRight}
                  gridIndex={0}
                />
                <WelcomeLink
                  linkName="Notes"
                  linkPath="/notes"
                  linkDescription={linkDescription.notes}
                  icon={faBookmark}
                  gridIndex={1}
                />
              </div>
            ))
          : null}
      </div>
    </React.Fragment>
  );
};

export default WelcomePage;
