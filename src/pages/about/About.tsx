import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTabsContent, MDBTypography } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Stack } from 'react-bootstrap';
import type social from '../../types/socialIcon';
import Social from '../../components/Social';
export default function About (): JSX.Element {
  const [hover, setHover] = useState < Record<string, boolean>>({
    linkedIn: false,
    instagram: false,
    email: false
  });
  const handleHover = (name: string): void => {
    setHover({ ...hover, [name]: !hover[name] });
  };
  const content: Record<string, social> = {
    fiver: {
      text: 'Fiverr',
      url: 'https://www.fiverr.com/niconegrete?up_rollout=true',
      icon: <MDBIcon style={{ marginLeft: '.5rem' }} fas icon="dollar-sign" />
    },
    linkedIn: {
      text: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nicholas-n-734740107/',
      icon: <MDBIcon style={{ marginLeft: '.5rem' }} fab icon="linkedin" />
    },
    email: {
      text: 'Email',
      url: 'https://www.linkedin.com/in/nicholas-n-734740107/',
      icon: <MDBIcon style={{ marginLeft: '.5rem' }} fas icon="envelope" />

    },
    instagram: {
      text: 'Instagram',
      url: 'https://www.linkedin.com/in/nicholas-n-734740107/',
      icon: <MDBIcon style={{ marginLeft: '.5rem' }} fab icon="instagram" />

    }
  };
  return (
    <MDBContainer>
      <MDBRow style={{ marginTop: '4rem' }} className='gx-5' >
        <MDBCol >
          <img src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            className='img-fluid rounded'
            alt='example'/>
        </MDBCol>
        <MDBCol>
          <MDBTypography tag={'h3'} style={{ fontFamily: "'Lobster', cursive", fontSize: '2rem' }}>
            {'Meet the Techxlporer: Nico`s Brief Introduction'}
          </MDBTypography>
          <MDBTypography tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'" }}>
            {"I'm a software engineer with a background in Artifical Intelligence but honestly I am just a guy"}
          </MDBTypography>
          <img src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            className='img-fluid rounded'
            alt='example'/>
        </MDBCol>
        <MDBCol>
          <MDBTypography tag={'h3'} style={{ fontFamily: "'Lobster', cursive", fontSize: '2rem' }}>
            {'Code Crafting: Discovering Innovation and Passion with Nico'}
          </MDBTypography>
          <MDBTypography tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'" }}>
            {"I'm a software engineer with a background in Artifical Intelligence but honestly I am just a guy"}
          </MDBTypography>
        </MDBCol>
      </MDBRow>
      <hr/>
      <MDBRow>
        <MDBTypography tag={'h2'} style={{ fontFamily: "'Lobster', cursive", textAlign: 'center', fontSize: '2rem' }}>
          {'Contact Me'}
        </MDBTypography>
        <MDBRow>
          {
            Object.entries(content).map(([name, social], index) => {
              return (
                <>
                  <MDBCol>
                    <Social name={name} content={social} handleHover={ handleHover} hover={hover[name]} />
                  </MDBCol>
                </>
              );
            })
          }
        </MDBRow>
      </MDBRow>
    </MDBContainer>
  );
}
