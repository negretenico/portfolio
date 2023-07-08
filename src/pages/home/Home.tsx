import React, { useState } from 'react';
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useSpring, animated } from '@react-spring/web';
import { useLocation, useNavigate } from 'react-router';

function Home (): JSX.Element {
  const navigate = useNavigate();
  return (<>
    <MDBContainer>
      <MDBRow style={{ minHeight: '100vh' }} className='d-flex justify-content-center text-center align-items-center' >
        <MDBCol md='6' >
          <MDBRow className='mb-3'>
            <MDBTypography tag={'h3'} style={{ fontFamily: "'Lobster', cursive", fontSize: '2rem' }}>
              {'Yooooooo, I\'m Nicholas Negrete but I\'d perfer to be called Nico'}
            </MDBTypography>
            <MDBTypography tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'" }}>
              {"I'm a software engineer with a background in Artifical Intelligence but honestly I am just a guy"}
            </MDBTypography>
          </MDBRow>
          <MDBRow className='mb-3'>
            <MDBCol>
              <MDBRow>
                <MDBCol>
                  <MDBTypography onClick={() => { navigate('/work'); }} tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'", margin: '.5rem', cursor: 'pointer' }}>
                  Check out my work
                  </MDBTypography>
                </MDBCol>
                <MDBCol>
                  <MDBTypography onClick={() => { navigate('/about'); }} tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'", margin: '.5rem', cursor: 'pointer' }}>
                Learn more about me
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>);
}
export default Home;
