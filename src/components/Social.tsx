import React from 'react';
import type social from '../types/socialIcon';
import { MDBTypography } from 'mdb-react-ui-kit';

export default function Social ({ content, name, hover, handleHover }: { content: social, name: string, hover: boolean, handleHover: (name: string) => void }): JSX.Element {
  const hoveredStyle = {
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    marginLeft: '1rem',
    cursor: 'pointer'
  };
  const notHoveredStyle = {
    marginLeft: '1rem'
  };
  const baseStyle = { fontFamily: "'Lobster', cursive", fontSize: '2rem' };
  return (
    <>
      <MDBTypography tag={'h4'}
        onClick={() => { window.open(content.url); }}
        onMouseEnter={() => { handleHover(name); }}
        onMouseLeave={() => { handleHover(name); }}
        style={hover ? { ...baseStyle, ...hoveredStyle } : { ...baseStyle, ...notHoveredStyle }}>
        {content.text}
        {content.icon}
      </MDBTypography>
    </>
  );
}
