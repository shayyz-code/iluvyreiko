import React, { useState, createContext, useContext } from 'react';
import NotesCard from './NotesCard';
import ViewNotesCard from './ViewNotesCard';

import * as styles from './Notes.styles';

import { GlobalStateContext } from '../GlobalState';

export const ViewNotesContext = createContext();

const NotesPage = () => {
  const { censored, data } = useContext(GlobalStateContext);
  const defaultViewState = {
    heading: '',
    details: '',
    imgs: [],
  };
  const [view, setView] = useState(defaultViewState);
  return (
    <React.Fragment>
      <ViewNotesContext.Provider value={{ view, setView, defaultViewState }}>
        <div style={styles.container}>
          {data.notes.length
            ? data.notes.map(({ heading, details, imgs }, index) => (
                <NotesCard
                  heading={heading}
                  details={details}
                  imgs={imgs}
                  key={index}
                />
              ))
            : null}
        </div>
        {!censored && view.heading && <ViewNotesCard />}
      </ViewNotesContext.Provider>
    </React.Fragment>
  );
};

export default NotesPage;
