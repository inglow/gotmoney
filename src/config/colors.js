const getStyle = (element) => getComputedStyle(document.documentElement)
  .getPropertyValue(element);

export default {
  primaryColor: getStyle('--primary-color'),
  secondaryColor: getStyle('--secondary-color'),
  blackColor: getStyle('--black-color'),
  blackLightColor: getStyle('--blackLight-color'),
  grey500Color: getStyle('--grey500-color'),
  grey300Color: getStyle('--grey300-color'),
  greyBackground: getStyle('--grey-background'),
  greyContainer: getStyle('--grey-container'),
};
