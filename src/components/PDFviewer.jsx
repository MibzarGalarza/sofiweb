import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'pdfjs-dist';

const PDFViewer = () => {
    const [pdfFile, setPdfFile] = useState(null);

    const handleFileChange = (event) => {
        setPdfFile(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="mb-4">
                <input 
                    type="file" 
                    accept="application/pdf" 
                    onChange={handleFileChange} 
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-800 file:text-white hover:file:bg-gray-700"
                />
            </div>
            <div className="w-full h-screen bg-white shadow-md rounded-lg overflow-hidden">
                {pdfFile && (
                    <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`}>
                        <Viewer fileUrl={pdfFile} />
                    </Worker>
                )}
            </div>
        </div>
    );
};

export default PDFViewer;
