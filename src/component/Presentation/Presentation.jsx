import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/face.jpeg'; // with import
import CircularProgressBar from '../progressbar/CircularProgressBar';
import './Presentation.css';
import PresentationLine from './PresentationLine';

function Presentation() {
  const RenderPresentationHeader = React.useCallback(() => (
    <div className="presentation-header">
      <img className="face" src={logo} alt="Avatar" />
      <h5 className="name-txt">JOUANNY JEROME</h5>
      <text className="job-txt">Fullstack Developer</text>
      {/* <Divider /> */}
      <text className="job-txt">Mobile Apps/ Web Site</text>
    </div>
  ), []);
  const RenderPresentationDesc = React.useCallback(() => (
    <div className="presentation-desc">
      <PresentationLine name="Residence" value="Canada" />
      <PresentationLine name="Residence" value="Canada" />
      <PresentationLine name="Residence" value="Canada" />
      <CircularProgressBar />
    </div>
  ), []);

  return (
    <div className="presentation">
      <RenderPresentationHeader />
      <div className="presentation-content">
        <RenderPresentationDesc />

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
