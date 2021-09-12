import { useState, useContext } from 'react';
import { GlobalStateContext } from '../GlobalState';

import { Link, useLocation } from 'react-router-dom';
import * as styles from './Navbar.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navlink({ pageName, iconSolid, iconRegular }) {
  const { showNav } = useContext(GlobalStateContext);

  const path = '/' + pageName;
  const pathname = useLocation().pathname;
  const url = pathname === '/' ? '/welcome' : pathname;

  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={path === '/welcome' ? '/' : path}
      style={
        url === path
          ? { ...styles.navlink, ...styles.navlinkActive }
          : hovered
          ? { ...styles.navlink, ...styles.navlinkHovered }
          : styles.navlink
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>{pageName}</div>

      {!showNav && (
        <div style={styles.navicon}>
          <FontAwesomeIcon icon={url === path ? iconSolid : iconRegular} />
        </div>
      )}
    </Link>
  );
}
