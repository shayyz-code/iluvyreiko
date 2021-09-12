import { useContext } from 'react';
import { GlobalStateContext } from '../GlobalState';

import * as styles from './Navbar.styles';
import NavHeader from './NavHeader';
import Navlink from './Navlink';
import NavCensorBtn from './NavCensorBtn';
import NavToggleBtn from './NavToggleBtn';

import {
  faHeart as faHeartRegular,
  faListAlt as faListAltRegular,
  faImages as faImagesRegular,
  faCaretSquareRight as faCaretSquareRightRegular,
  faBookmark as faBookMarkRegular,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as faHeartSolid,
  faListAlt as faListAltSolid,
  faImages as faImagesSolid,
  faCaretSquareRight as faCaretSquareRightSolid,
  faBookmark as faBookMarkSolid,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { censored, showNav, setShowNav } = useContext(GlobalStateContext);
  return (
    <div
      style={
        showNav
          ? { ...styles.navbar, ...styles.navbarshow }
          : { ...styles.navbar, ...styles.navbarhide }
      }
    >
      <NavHeader>Ily {!censored && 'REIKO'}</NavHeader>
      <Navlink
        pageName="welcome"
        iconSolid={faHeartSolid}
        iconRegular={faHeartRegular}
      />
      <Navlink
        pageName="properties"
        iconSolid={faListAltSolid}
        iconRegular={faListAltRegular}
      />
      <Navlink
        pageName="gallery"
        iconSolid={faImagesSolid}
        iconRegular={faImagesRegular}
      />
      <Navlink
        pageName="days"
        iconSolid={faCaretSquareRightSolid}
        iconRegular={faCaretSquareRightRegular}
      />
      <Navlink
        pageName="notes"
        iconSolid={faBookMarkSolid}
        iconRegular={faBookMarkRegular}
      />
      {showNav && <NavCensorBtn />}
      <NavToggleBtn showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
};

export default Navbar;
