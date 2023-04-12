import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import sampleoRating from '../assets/sampleoRating.png';
import sampleoStat from '../assets/sampleoStat.png';
import twaRating from '../assets/twaRating.png';
import RecommendationCard from '../component/card/RecommendationCard';
import ServiceCard from '../component/card/ServiceCard';
import HomeImageAnimation from '../component/imageAnimation/HomeImageAnimation';
import IphoneDisplay from '../component/iphoneDisplay/IphoneDisplay';
import NumberText from '../component/text/NumberText';
import TitleText from '../component/text/TitleText';
import numberText from '../config/numberText';
import recommendation from '../config/recommendation';
import service from '../config/service';
import twaStore from '../assets/video/twa-store.mp4';
import twaPresentation from '../assets/video/twa-presentation.mp4';
import sampleoStore from '../assets/video/sampleo-store.mp4';
import sampleoPresentation from '../assets/video/sampleo-presentation.mp4';

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
  const DisplayExampleProject = React.useCallback(() => (
    <div className="margin-home-container">
      <TitleText title="recommendations" />
      <Grid container spacing={5} sx={{ alignItems: 'center' }}>
        <Grid
          xs={12}
          sm={5}
        >
          <div className="example-project-iphone">
            <IphoneDisplay video={[sampleoStore, sampleoPresentation, twaStore, twaPresentation]} />
          </div>
          <Grid
            container
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Grid
              sm={6}
              item
            >
              <img
                className="example-project-rating-img"
                src={sampleoRating}
                alt="freelance"
              />
            </Grid>
            <Grid
              item
              sm={6}
            >
              <img
                className="example-project-rating-img"
                src={twaRating}
                alt="freelance"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          md={7}
          xs={12}
          sm={7}
        >
          <div className="example-project-container">
            <h5> Création de 2 applications de zéro du dévelopement à la mise en production</h5>
            <div>Langage utilisé : react native avec expo (es6)</div>
            <div>IDE : VSCODE - Android studio - Xcode</div>
            <div>
              Fonctionnalités mobile: Push notification - Deeplink
              - Universal link - Payement en ligne
            </div>
            <div>
              Librairie utilisé : react-navigation, redux (thunk), react context, native-base
            </div>
          </div>
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
