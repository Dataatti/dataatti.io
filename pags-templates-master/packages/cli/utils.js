const cpr = require('cpr');
const path = require('path');

const copyFiles = async (source, destination, filters) => {
  return new Promise((resolve, reject) =>
    cpr(
      source,
      destination,
      {
        filter: filters,
      },
      err => {
        if (err) {
          reject(new Error(err));
        }
        resolve(true);
      },
    ),
  );
};

const mapThemeNameToDirectory = name => {
  switch (name) {
    case 'Mobile App':
    case 'Mobile App 2':
      return 'MobileApp';
    case 'Web App':
      return 'WebApp';
    case 'Startup':
      return 'Startup';
    case 'Real Estate':
      return 'RealEstate';
    case 'Corporate':
      return 'Corporate';
    default:
      return '';
  }
};

const mapThemeNameToFile = name => {
  switch (name) {
    case 'Mobile App':
      return 'mobile-app';
    case 'Mobile App 2':
      return 'mobile-app-2';
    case 'Web App':
      return 'web-app';
    case 'Startup':
      return 'startup';
    case 'Real Estate':
      return 'real-estate';
    case 'Corporate':
      return 'corporate';
    default:
      return '';
  }
};

const pathRegExp = regexp =>
  new RegExp(regexp.join('').split('/').join(path.sep).split('\\').join('\\\\'));

module.exports = {
  copyFiles,
  mapThemeNameToDirectory,
  mapThemeNameToFile,
  pathRegExp,
};
