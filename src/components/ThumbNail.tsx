import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
interface thumbNailProps { image?: string, description: string, title: string }

export default function ThumbNail ({ image, description, title }: thumbNailProps): JSX.Element {
  const [open, setOpened] = useState<boolean>(false);
  const handleOpen = (): void => {
    setOpened(!open);
  };
  return (
    <MDBCard style={{ width: '25rem', margin: '1rem' }} onClick={handleOpen}>
      <MDBCardImage style={{ width: '25rem', height: '25rem' }} src={image} alt={title} position='top' />
      {
        open &&
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
        </MDBCardBody>}
    </MDBCard>);
}
