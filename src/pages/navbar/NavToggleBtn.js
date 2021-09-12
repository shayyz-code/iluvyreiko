import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

export default function NavToggleBtn({ showNav, setShowNav }) {
  return (
    <div
      style={{ position: 'absolute', top: 0, right: 0 }}
      onClick={() => setShowNav(!showNav)}
    >
      <Button
        width={30}
        height={30}
        content={
          <FontAwesomeIcon
            icon={showNav ? faAngleDoubleLeft : faAngleDoubleRight}
          />
        }
        hover={true}
      />
    </div>
  );
}
