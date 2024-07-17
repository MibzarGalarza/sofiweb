import React from 'react';

const PdfDownloader = ({ pdfUrl, pdfUrl2, buttonText1, buttonText2 }) => {
    const handleDownload = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={() => handleDownload(pdfUrl)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
                {buttonText1 || 'Download PDF 1'}
            </button>
            <button
                onClick={() => handleDownload(pdfUrl2)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {buttonText2 || 'Download PDF 2'}
            </button>
        </div>
    );
};

export default PdfDownloader;
