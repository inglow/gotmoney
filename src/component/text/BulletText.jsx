import PropTypes from 'prop-types';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheck } from 'react-icons/fa';
import colors from '../../config/colors';
import './BulletText.css';

function BulletText({ skills }) {
  return (
    <div className="skill-container">
      {skills.map((skill) => (
        <div className="skill-row" key={skill}>
          <FaCheck color={colors.secondaryColor} />
          <div className="skill-txt">
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
}
BulletText.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default BulletText;
