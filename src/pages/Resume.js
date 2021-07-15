import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { DocWrapper } from './ResumeElements'

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <DocWrapper>
      <Document 
        file="./my_resume.pdf" 
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}/>
      </Document>
    </DocWrapper>
  )
}

export default Resume
