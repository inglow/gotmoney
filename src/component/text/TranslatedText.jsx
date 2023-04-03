import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { dictionary } from '../../features/langSlice';

function TranslatedText({ txt }) {
  const dictionaryLang = useSelector(dictionary);
  if (dictionaryLang[txt]) {
    return (
      dictionaryLang[txt]
    );
  }
  return txt;
}
TranslatedText.propTypes = {
  txt: PropTypes.string.isRequired,
};
export default TranslatedText;
