import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import TranslatedText from '../text/TranslatedText';
import './IphoneDescription.css';

function IphoneDescription({ type }) {
  const RenderDescWebedia = React.useCallback(({
    name, downloadIos, downloadAndroid, rating, featureJob,
  }) => (
    <div>
      {name && (
      <h4>
        <TranslatedText txt="appFromScratch" />
        {' '}
        <br />
        {name}
        {' '}
        <TranslatedText txt="for" />
        {' '}
        Webedia !
      </h4>
      )}
      <div className="subtitle-iphone-description">
        { downloadIos && (
        <>
          {downloadIos}
          K
          {' '}
          <TranslatedText txt="download" />
          {' '}
          ios -
          {' '}
          {downloadAndroid}
          k
          {' '}
          <TranslatedText txt="download" />
          {' '}
          android -
          {' '}
        </>
        ) }
        {rating
        && (
        <>
          <Rating
            name="half-rating"
            defaultValue={rating}
            precision={0.5}
            color="secondary"
            readOnly
            size="small"
          />
          (
          {rating}
          )
        </>
        )}
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">
          <TranslatedText txt="languageUsed" />
          :
        </span>
        {' '}
        React native
        {' '}
        <TranslatedText txt="with" />
        {' '}
        expo (es6)
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">IDE:</span>
        {' '}
        VSCODE - Android studio - Xcode
      </div>
      <div className="block-iphone-description">
        <div>
          <span className="txt-underline-iphone-description">
            {' '}
            <TranslatedText txt="featuresMobile" />
            :

          </span>
        </div>
        {' '}
        - Push notification
        <br />
        - Deeplink
        <br />
        - Universal link
        <br />
        -
        {' '}
        <TranslatedText txt="payOnline" />
        <br />
        -
        {' '}
        <TranslatedText txt="interApp" />
        <br />
        -
        {' '}
        <TranslatedText txt="deployment" />
        <br />
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">
          <TranslatedText txt="libraryUsed" />
          :
        </span>
        {' '}
        <br />
        - React-navigation
        <br />
        - Redux (thunk)
        <br />
        - React context
        <br />
        - Native-base
      </div>
      <div>
        <span className="txt-underline-iphone-description">
          {' '}
          <TranslatedText txt="jobFeature" />
          :
        </span>
        <br />
        {featureJob.map((trans) => (
          <div key={trans}>
            -
            {' '}
            <TranslatedText txt={trans} />
            <br />

          </div>
        ))}
      </div>
    </div>
  ), []);
  const RenderDescBfan = React.useCallback(({ featureJob }) => (
    <div>

      <h4>
        <TranslatedText txt="bfanTitle" />
        {' '}
        <br />
      </h4>
      <div className="subtitle-iphone-description">
        <TranslatedText txt="bfanDesc" />
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">
          <TranslatedText txt="languageUsed" />
          :
        </span>
        {' '}
        React native
        {' '}
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">IDE:</span>
        {' '}
        VSCODE - Android studio - Xcode
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">
          <TranslatedText txt="libraryUsed" />
          :
        </span>
        {' '}
        <br />
        - React-navigation
        <br />
        - Redux (thunk)
        <br />
        - Native-base
        <br />
        - Xcodeproj (ruby)
        <br />
        - Google Maps (js)
      </div>
      <div>
        <span className="txt-underline-iphone-description">
          {' '}
          <TranslatedText txt="bfanDev" />
          :
        </span>
        <br />
        {featureJob.map((trans) => (
          <div key={trans}>
            -
            {' '}
            <TranslatedText txt={trans} />
            <br />

          </div>
        ))}
      </div>
    </div>
  ), []);

  const RenderDescByType = React.useCallback(() => {
    switch (type) {
      case 'sampleo':
        return (
          <RenderDescWebedia
            name="Sampleo"
            downloadIos="38.1"
            downloadAndroid="74"
            featureJob={['participateCampaign', 'answerSurvey', 'participationMission', 'profile', 'unConnectAccess']}
            rating={4.5}
          />
        );
      case 'twa':
        return (
          <RenderDescWebedia
            name="TWA"
            featureJob={['participateCampaignRs', 'tunnelRegister', 'linkRS', 'billing', 'answerSurvey', 'participationMission', 'profile', 'unConnectAccess']}
            rating={5}
          />
        );
      case 'bfan':
        return (
          <RenderDescBfan
            featureJob={['intReact', 'dev2View', 'updateAPP', 'mapDynamic', 'improveAuto', 'deployment']}
          />
        );

      default:
        return (
          <RenderDescWebedia
            name="SAMPLEO"
            downloadIos="38.1"
            downloadAndroid="74"
            featureJob={['participateCampaignRs', 'answerSurvey', 'participationMission', 'profile', 'unConnectAccess']}
            rating={4.5}
          />
        );
    }
  }, []);
  return (
    <RenderDescByType />
  );
}
export function SummaryDescription() {
  return (
    <div className="example-project-container">
      <h5> Création de 2 applications de zéro du dévelopement à la mise en production</h5>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">
          <TranslatedText txt="languageUsed" />
          :
        </span>
        {' '}
        React native
        {' '}
        <TranslatedText txt="with" />
        {' '}
        expo (es6)
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">IDE:</span>
        {' '}
        VSCODE - Android studio - Xcode
      </div>
      <div className="block-iphone-description">
        <div>
          <span className="txt-underline-iphone-description">
            {' '}
            <TranslatedText txt="featuresMobile" />
            :

          </span>
        </div>
        {' '}
        Push notification - Deeplink - Universal link -
        {' '}
        <TranslatedText txt="payOnline" />
        {' '}
        -
        {' '}
        <TranslatedText txt="interApp" />
        {' '}
        -
        {' '}
        <TranslatedText txt="deployment" />
        <br />
      </div>
      <div className="block-iphone-description">
        <span className="txt-underline-iphone-description">
          <TranslatedText txt="libraryUsed" />
          :
        </span>
        {' '}
        react-navigation, redux (thunk), react context, native-base
      </div>
    </div>
  );
}

IphoneDescription.propTypes = {
  type: PropTypes.string.isRequired,
};
export default IphoneDescription;
