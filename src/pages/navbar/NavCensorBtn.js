import { useContext } from 'react';
import { GlobalStateContext } from '../GlobalState';

import Button from '../Button';

const censoredUncensoredStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 74,
  height: 26,
  color: '#fff',
  cursor: 'pointer',
  zIndex: 2,
};

export default function NavCensorBtn() {
  const { censored, setCensored } = useContext(GlobalStateContext);

  const considerActiveStyle = condition => {
    if (censored === condition) {
      return censoredUncensoredStyles;
    } else if (censored !== condition) {
      return {
        ...censoredUncensoredStyles,
        color: '#000',
      };
    }
  };

  return (
    <div style={{ position: 'absolute', bottom: 0 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 180,
          height: 30,
          fontSize: 11,
          marginLeft: 5,
        }}
      >
        <div
          style={considerActiveStyle(false)}
          onClick={() => setCensored(false)}
        >
          Uncensored
        </div>
        <div
          style={considerActiveStyle(true)}
          onClick={() => setCensored(true)}
        >
          Censored
        </div>
      </div>
      <div
        style={
          censored
            ? { transform: 'translate(95px, -30px)' }
            : { transform: 'translate(5px, -30px)' }
        }
      >
        <Button width={90} height={30} />
      </div>
    </div>
  );
}
