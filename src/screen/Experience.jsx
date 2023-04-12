import React from 'react';
import sampleoStore from '../assets/video/sampleo-store.mp4';
import sampleoCampaign from '../assets/video/sampleo-campaign.mp4';
// import sampleoPresentation from '../assets/video/sampleo-presentation.mp4';
// import sampleoProfil from '../assets/video/sampleo-profil.mp4';
// import sampleoUnconnected from '../assets/video/sampleo-unconnected.mp4';
// import twaStore from '../assets/video/twa-store.mp4';
// import twaCampaign from '../assets/video/twa-campaign.mp4';
// import twaPresentation from '../assets/video/twa-presentation.mp4';
// import twaProfil from '../assets/video/twa-profil.mp4';
// import twaRegister from '../assets/video/twa-register.mp4';
// import bfanDrawer from '../assets/video/bfan-drawer.mp4';
// import IphoneDisplay from '../component/iphoneDisplay/IphoneDisplay';
import './Experience.css';
import PresentationIphone from '../component/presentation/PresentationIphone';

function Experience() {
  return (
    <div className="container-experience">
      <PresentationIphone video={[{ name: 'sampleostore', video: sampleoStore }, { name: 'campaign', video: sampleoCampaign }]} />
      {/* <IphoneDisplay video={[sampleoStore,
        sampleoCampaign, sampleoPresentation,
        sampleoProfil, sampleoUnconnected]}
      /> */}
      {/* <IphoneDisplay video={[twaStore,
        twaCampaign, twaPresentation,
        twaProfil, twaRegister]}
      />
      <IphoneDisplay video={[bfanDrawer]} /> */}
    </div>
  );
}
export default Experience;
