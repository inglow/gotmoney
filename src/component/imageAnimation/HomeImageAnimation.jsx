import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ButtonPrimary from '../button/ButtonPrimary';
import TranslatedText from '../text/TranslatedText';
import './HomeImageAnimation.css';

function HomeImageAnimation() {
  const DisplayTag = React.useCallback(({ end }) => (
    <span>
      &lt;
      {end && '/'}
      <span className="image-animation-span">code</span>
      &gt;
    </span>
  ), []);
  return (
    <div className="image-animation-container">
      <h1 className="image-animation-title">
        <TranslatedText txt="discover" />
        <br />
        <TranslatedText txt="world" />
      </h1>
      <div className="image-animation-typing">
        <DisplayTag />
        <ReactTypingEffect
          text={['Hello.', 'World!']}
        />
        <DisplayTag end />
      </div>
      <ButtonPrimary name="explore" />
    </div>
  );
}

export default HomeImageAnimation;
