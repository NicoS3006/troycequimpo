// error.js

import React from 'react';

function ErrorPage() {
  // Inline styles
  const containerStyle = {
    fontFamily:
      "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    background: '#fff',
    margin: 0,
  };

  const headingStyle = {
    display: 'inline-block',
    margin: '0 20px 0 0',
    paddingRight: '23px',
    fontSize: '24px',
    fontWeight: '500',
    verticalAlign: 'top',
    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
  };

  const subheadingStyle = {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '28px',
  };

  const darkModeStyles = {
    color: '#fff',
    background: '#000',
    borderRight: '1px solid rgba(255, 255, 255, 0.3)',
  };

  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply styles based on dark mode preference
  const appliedStyle = isDarkMode ? { ...containerStyle, ...darkModeStyles } : containerStyle;

  const errorPage = React.createElement(
    'div',
    { style: appliedStyle },
    React.createElement(
      'h1',
      {
        className: 'next-error-h1',
        style: isDarkMode ? { ...headingStyle, borderRight: darkModeStyles.borderRight } : headingStyle,
      },
      '404'
    ),
    React.createElement(
      'h2',
      { style: subheadingStyle },
      'This page could not be found.'
    )
  );

  return errorPage;
}

export default ErrorPage;
