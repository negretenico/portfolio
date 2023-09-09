import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import React from 'react';
export interface CodeSnippet {
  language: string
  text: string
  title: string
}

export default function CodeSnippets ({ code }: { code: CodeSnippet }): JSX.Element {
  return (
    <>
      <MDBCard style={{ maxHeight: '25rem', margin: '1rem', overflowY: 'auto' }}>
        <MDBCardBody>
          <MDBCardTitle>{code.title}</MDBCardTitle>
          <MDBCardText>
            <SyntaxHighlighter language={code.language} customStyle={{ maxHeight: '100%', overflowY: 'auto' }}>
              {code.text}
            </SyntaxHighlighter>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
