import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function TranslatedText({ txt }) {
  const dictionary = useSelector((state) => state.lang.dictionary);
  if (dictionary[txt]) {
    return (
      dictionary[txt]
    );
  }
  return txt;
}
TranslatedText.propTypes = {
  txt: PropTypes.string.isRequired,
};
export default TranslatedText;
