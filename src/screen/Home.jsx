import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import RecommendationCard from '../component/card/RecommendationCard';
import ServiceCard from '../component/card/ServiceCard';
import HomeImageAnimation from '../component/imageAnimation/HomeImageAnimation';
import IphoneDisplay from '../component/iphoneDisplay/IphoneDisplay';
import NumberText from '../component/text/NumberText';
import TitleText from '../component/text/TitleText';
import numberText from '../config/numberText';
import recommendation from '../config/recommendation';
import service from '../config/service';

import './Home.css';

function Home() {
  const DisplayServices = React.useCallback(() => (
    <div className="margin-home-container">
      <TitleText title="myService" />
      <Grid container spacing={2}>
        { service.map((s) => (
          <Grid item md={4} xs={6}>
            <ServiceCard title={s.title} description={s.description} />
          </Grid>
        ))}
      </Grid>
    </div>
  ), []);
  const DisplayRecommendation = React.useCallback(() => (
    <div className="margin-home-container">
      <TitleText title="recommendations" />
      <Grid container spacing={5}>
        { recommendation.map((r) => (
          <Grid item md={6} xs={12}>
            <RecommendationCard name={r.name} image={r.image} recommendation={r.recommendation} />
          </Grid>
        ))}
      </Grid>
    </div>
  ), []);

  return (
    <div>
      <div className="home-container">
        <HomeImageAnimation />
        <NumberText numberWithTxt={numberText} />
        <DisplayServices />
        <DisplayRecommendation />
        <IphoneDisplay video="../../src/assets/video/twa-1.mp4" />
      </div>
    </div>
  );
}

export default Home;
