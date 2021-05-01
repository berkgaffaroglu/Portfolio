import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import DownloadLink from 'react-download-link';
import { GrDocumentUser } from 'react-icons/gr';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from "../pdfs/resume.pdf"
import resume_png from "../resume.png"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {
    render() {
        return (
            <>
                <h3 className="text-center text-uppercase animate__animated animate__fadeIn"><GrDocumentUser /> <strong>özgeçmişim</strong></h3>
                <hr className="separator" />
                <center className="mb-3 p-3" style={{ border: "4px solid #e9e9e9" }}>
                    <DropdownButton variant="outline-info btn-lg" style={{float:"right", zIndex: "10"}} title="Özgeçmişimi İndir">
                        <Dropdown.Item href={resume} download="berkgaffaroglucv.pdf">.PDF</Dropdown.Item>
                        <Dropdown.Item href={resume_png} download="berkgaffaroglucv.png">.PNG</Dropdown.Item>

                    </DropdownButton>
                    <Document
                        file={resume}
                    >
                        <Page pageNumber={1} />
                    </Document>
                </center>
            </>
        );
    }
}

export default Resume;