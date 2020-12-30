import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Global from '@pagerland/common/src/components/Global';
import SvgUtils from '@pagerland/common/src/components/SvgUtils';

import Alert from '@pagerland/common/src/components/Alert';
import Switch from '@pagerland/common/src/components/Switch';
import Box from '@pagerland/common/src/components/Box';
import theme from './theme';

const Theme = ({ children }) => {
  const darkMode = useDarkMode(false);

  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider
      theme={{
        ...theme,
        colors: {
          ...theme.colors,
          ...theme.modes[darkMode.value ? 'dark' : 'light'],
        },
        mode: darkMode.value ? 'dark' : 'light',
      }}
    >
      <Global />
      {/* This can be removed */}
      <Alert
        message={(
          <div>
            <p>
              Hello! This theme is available in 
              {' '}
              <strong>LIGHT/DARK</strong>
              {' '}
              mode. It will adjust
              automatically to your system preferences.
            </p>
            <Box flexBox alignItems="center">
              <Switch checked={darkMode.value} mr={3} onToggle={darkMode.toggle} />
              <span>Or you can switch it here</span>
            </Box>
          </div>
        )}
      />
      {children}
      <SvgUtils />
    </ThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { default as theme } from './theme';
export default Theme;
