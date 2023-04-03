import PropTypes from 'prop-types';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import color from '../../config/color';
import './BulletText.css';

function BulletText({ skills }) {
  return (
    <>
      {skills.map((skill) => (
        <div className="skill-row" key={skill}>
          <FaCheck color={color.secondaryColor} />
          <div className="skill-txt">
            {skill}
          </div>
        </div>
      ))}
    </>
  );
}
BulletText.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default BulletText;
