import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import React from 'react';
import { CodeBlock } from 'react-code-blocks';

export interface CodeSnippet {
  language: string
  text: string
  title: string
}

export default function CodeSnippets ({ code }: { code: CodeSnippet }): JSX.Element {
  const myCustomTheme = {
    lineNumberColor: '#ccc',
    lineNumberBgColor: '#222',
    backgroundColor: '#222',
    textColor: '#ccc',
    substringColor: '#00ff00',
    keywordColor: '#0077ff',
    attributeColor: '#ffaa00',
    selectorTagColor: '#0077ff',
    docTagColor: '#aa00ff',
    nameColor: '#f8f8f8',
    builtInColor: '#0077ff',
    literalColor: '#ffaa00',
    bulletColor: '#ffaa00',
    codeColor: '#ccc',
    additionColor: '#00ff00',
    regexpColor: '#f8f8f8',
    symbolColor: '#ffaa00',
    variableColor: '#ffaa00',
    templateVariableColor: '#ffaa00',
    linkColor: '#aa00ff',
    selectorAttributeColor: '#ffaa00',
    selectorPseudoColor: '#aa00ff',
    typeColor: '#0077ff',
    stringColor: '#00ff00',
    selectorIdColor: '#ffaa00',
    quoteColor: '#f8f8f8',
    templateTagColor: '#ccc',
    deletionColor: '#ff0000',
    titleColor: '#0077ff',
    sectionColor: '#0077ff',
    commentColor: '#777',
    metaKeywordColor: '#f8f8f8',
    metaColor: '#aa00ff',
    functionColor: '#0077ff',
    numberColor: '#ffaa00'
  };
  return (
    <>
      <MDBCard>
        <MDBCardBody style={{ height: '25rem', margin: '1rem' }}>
          <MDBCardTitle>{code.title}</MDBCardTitle>
          <MDBCardText>
            <CodeBlock
              text={code.text}
              language={code.language}
              showLineNumbers={true}
              theme={myCustomTheme}
            />
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
