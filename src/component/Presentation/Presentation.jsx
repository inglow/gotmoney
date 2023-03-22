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
      <PresentationLine name="Residence" value="Canada" />
      <PresentationLine name="Residence" value="Canada" />
      <PresentationLine name="test2" value="Canada" />
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
      <LinearProgressBar percentage={20} name="html" />
      <LinearProgressBar percentage={30} name="css" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
      <LinearProgressBar percentage={80} name="React" />
    </div>
  ), []);

  const RenderPresentationSoftware = React.useCallback(() => (
    <div className="presentation-software">
      <BulletText skills={['Bootstrap, Materialize', 'Stylus, Sass, Less']} />
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
          sddsdds
          <div className="FaLinkedin" />
          <FaLinkedin />

          <FaInstagram />
        </div>
      </div>

    </div>
  );
}

export default Presentation;
