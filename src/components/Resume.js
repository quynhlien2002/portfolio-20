import React from 'react';
import resume from '../assets/resume-2022.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Resume() {
    return (
        <section id='resume'>
        <h1 class="about">Resume</h1>
        <a href={resume}><h3 class="resume">Download my resume here!</h3></a>
        {/* <Document 
        file={resume}
        onLoadError={console.error}
        style={{width: '100vw', height: 'auto'}}
        >
            <Page pageIndex={0}/>
        </Document> */}
    </section>
    );
}

export default Resume;