import React from 'react';
import { useDispatch } from 'react-redux';
import lang from '../../config/lang';
import { changeLang } from '../../features/langSlice';
import './Lang.css';

function Lang() {
  const dispatch = useDispatch();
  return (
    <>
      {Object.keys(lang).map((item) => (
        <div
          key={item}
          type="button"
          aria-hidden="true"
          tabIndex={lang[item].id}
          onClick={() => dispatch(changeLang(lang[item].id))}
        >
          <img
            src={lang[item].flag}
            alt={lang[item].id}
            style={{
              height: 25, width: 25, borderColor: 'red',
            }}
          />
        </div>
      ))}
    </>
  );
}

export default Lang;
