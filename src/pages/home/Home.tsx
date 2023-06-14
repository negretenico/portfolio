import React from 'react';
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Home (): JSX.Element {
  return (<>
    <MDBContainer>
      <img src={'/poliwrathWalkingRight.gif'} alt="poliwrathWalkingRight" />
      <img src={'/poliwrathWalkingLeft.gif'} alt="poliwrathWalkingLeft" />

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
              <MDBTypography tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'", margin: '.5rem' }}>
                Check out my work
              </MDBTypography>
              <MDBTypography tag='medium' className='text-muted' style={{ fontFamily: "'Roboto'", margin: '.5rem' }}>
                Learn more about me
              </MDBTypography>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </>);
}
export default Home;
