import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/face.jpeg'; // with import
import Divider from '../divider/Divider';
import CircularProgressBar from '../progressbar/CircularProgressBar';
import LinearProgressBar from '../progressbar/LinearProgressBar';
import BulletText from '../text/BulletText';
import TranslatedText from '../text/TranslatedText';
import './Presentation.css';
import PresentationLine from './PresentationLine';

function Presentation() {
  const RenderPresentationHeader = React.useCallback(() => (
    <div className="presentation-header">
      <img className="face" src={logo} alt="Avatar" />
      <h5 className="name-txt">Jérôme Jouanny</h5>
      <div className="job-txt">
        <TranslatedText txt="work" />
      </div>

      <div className="job-txt">
        <TranslatedText txt="workDelivery" />
      </div>

    </div>
  ), []);
  const RenderPresentationDesc = React.useCallback(() => (
    <div className="presentation-desc">
      <PresentationLine name="residence" value="france" />
      <PresentationLine name="city" value="paris" />
      <PresentationLine name="age" value="28" />
    </div>
  ), []);

  const RenderPresentationLang = React.useCallback(() => (
    <div className="presentation-lang">
      <CircularProgressBar percentage={100} name="french" />
      <CircularProgressBar percentage={70} name="english" />
      <CircularProgressBar percentage={20} name="german" />
    </div>
  ), []);

  const RenderPresentationSkill = React.useCallback(() => (
    <div className="presentation-skill">
      <LinearProgressBar percentage={80} name="React Native" />
      <LinearProgressBar percentage={70} name="React js" />
      <LinearProgressBar percentage={90} name="JavaScript" />
      <LinearProgressBar percentage={60} name="TypeScript" />
      <LinearProgressBar percentage={60} name="Php" />
      <LinearProgressBar percentage={50} name="Swift/Objective-c" />
      <LinearProgressBar percentage={90} name="Git" />
      <LinearProgressBar percentage={60} name="Node" />
      <LinearProgressBar percentage={90} name="Html" />
      <LinearProgressBar percentage={90} name="Css" />
      <LinearProgressBar percentage={70} name="Docker" />
    </div>
  ), []);

  const RenderPresentationSoftware = React.useCallback(() => (
    <div className="presentation-software">
      <BulletText skills={['VSCode, WebStorm']} />
      <BulletText skills={['Xcode, Android-Studio']} />
      <BulletText skills={['GitLab, GitHub']} />
      <BulletText skills={['Jenkins, Bitrise']} />
      <BulletText skills={['Aws, Postman']} />
      <BulletText skills={['Bootstrap, Materialize']} />
      <BulletText skills={['CSS, Sass, Less']} />
    </div>
  ), []);

  return (
    <div className="presentation">
      <RenderPresentationHeader />
      <div className="presentation-content">
        <RenderPresentationDesc />
        <Divider marginVertical={25} />
        <RenderPresentationLang />
        <Divider marginVertical={25} />
        <RenderPresentationSkill />
        <Divider marginVertical={25} />
        <RenderPresentationSoftware />
        <div className="presentation-footer">
          <FaLinkedin size={20} />
          <FaInstagram size={20} />
        </div>
      </div>

    </div>
  );
}

export default Presentation;
