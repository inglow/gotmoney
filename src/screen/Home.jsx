import './Home.css';
import React from 'react';
import IphoneDisplay from '../IphoneDisplay';

function Home() {
  return (
    <div>
      <IphoneDisplay />
      <IphoneDisplay />
    </div>
  );
}
Home.propTypes = {
};
export default Home;
