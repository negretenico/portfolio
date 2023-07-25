import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
interface thumbNailProps { image?: string, description: string, title: string }

export default function ThumbNail ({ image, description, title }: thumbNailProps): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpand = (): void => {
    setExpanded(!expanded);
  };
  return (
    <MDBCard style={{ width: '18rem' }} onClick={handleExpand}>
      <MDBCardImage src={image} alt={title} position='top' />
      {
        expanded && (
          <>
            <MDBCardBody>
              <MDBCardTitle>{title}</MDBCardTitle>
              <MDBCardText>{description}</MDBCardText>
            </MDBCardBody>
          </>
        )
      }

    </MDBCard>);
}
