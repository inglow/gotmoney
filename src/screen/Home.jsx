import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { Box } from '@mui/material';
import sampleoRating from '../assets/sampleoRating.png';
import sampleoStat from '../assets/sampleoStat.png';
import twaRating from '../assets/twaRating.png';
import sampleoPresentation from '../assets/video/sampleo-presentation.mp4';
import sampleoStore from '../assets/video/sampleo-store.mp4';
import twaPresentation from '../assets/video/twa-presentation.mp4';
import twaStore from '../assets/video/twa-store.mp4';
import RecommendationCard from '../component/card/RecommendationCard';
import ServiceCard from '../component/card/ServiceCard';
import HomeImageAnimation from '../component/imageAnimation/HomeImageAnimation';
import IphoneDisplay from '../component/iphoneDisplay/IphoneDisplay';
import NumberText from '../component/text/NumberText';
import TitleText from '../component/text/TitleText';
import numberText from '../config/numberText';
import recommendation from '../config/recommendation';
import service from '../config/service';

import { SummaryDescription } from '../component/description/IphoneDescription';
import './Home.css';

function Home() {
  const DisplayServices = React.useCallback(() => (
    <div className="margin-home-container">
      <TitleText title="myService" />
      <Grid container spacing={2}>
        { service.map((s) => (
          <Grid item md={4} xs={6} key={s.title}>
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
          <Grid item md={6} xs={12} key={r.name}>
            <RecommendationCard name={r.name} image={r.image} recommendation={r.recommendation} />
          </Grid>
        ))}
      </Grid>
    </div>
  ), []);
  const DisplayExampleProject = React.useCallback(() => (
    <div className="margin-home-container">
      <TitleText title="recommendations" />
      <Grid container spacing={2}>
        <Grid
          xs={12}
          sm={5}
        >
          <div className="example-project-iphone">
            <IphoneDisplay video={[sampleoStore, sampleoPresentation, twaStore, twaPresentation]} />
          </div>
          <Box
            className="example-project-rating"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <img
              className="example-project-rating-img"
              src={sampleoRating}
              alt="freelance"
            />
            <img
              className="example-project-rating-img"
              src={twaRating}
              alt="freelance"
            />
          </Box>
        </Grid>

        <Grid
          md={7}
          xs={12}
          sm={7}
        >
          <SummaryDescription />
          <div className="example-project-stat">
            <img
              className="example-project-stat-img"
              src={sampleoStat}
              alt="freelance"
            />
          </div>
        </Grid>

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
        <DisplayExampleProject />
      </div>
    </div>
  );
}

export default Home;
