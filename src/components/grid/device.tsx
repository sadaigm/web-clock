export const screenSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS}px)`,
  mobileM: `(min-width: ${screenSize.mobileM}px)`,
  mobileL: `(min-width: ${screenSize.mobileL}px)`,
  tablet: `(min-width: ${screenSize.tablet}px)`,
  laptop: `(min-width: ${screenSize.laptop}px)`,
  laptopL: `(min-width: ${screenSize.laptopL}px)`,
  desktop: `(min-width: ${screenSize.desktop}px)`,
  desktopL: `(min-width: ${screenSize.desktop}px)`,
};
