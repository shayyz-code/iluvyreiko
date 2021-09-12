import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './Welcome.styles';

export default function WelcomeLink({
  linkName,
  linkPath,
  linkDescription,
  icon,
  gridIndex,
}) {
  return (
    <div style={styles.linkContainer}>
      <div style={styles.linkGrid}>
        <div style={styles.linkContentGrid[gridIndex]}>
          <div style={styles.linkContent}>
            <Link
              to={linkPath}
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <h3 style={styles.linkName}>{linkName}</h3>
              <p style={styles.text}>{linkDescription}</p>
            </Link>
          </div>
        </div>
        <div style={styles.linkIconsGrid[gridIndex]}>
          <div style={styles.iconContainer}>
            <Link
              to={linkPath}
              style={{ color: '#000', textDecoration: 'none' }}
            >
              <FontAwesomeIcon icon={icon} style={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
