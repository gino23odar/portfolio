import React from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import YourDocument from './YourDocument';

const DownloadButton = () => {
  const downloadPdf = async () => {
    const fileName = 'test.pdf';
    const blob = await pdf(<YourDocument />).toBlob();
    saveAs(blob, fileName);
  };

  return <button onClick={downloadPdf}>Download PDF</button>;
};

export default DownloadButton;