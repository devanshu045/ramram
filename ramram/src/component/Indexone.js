import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Doctopdf from './Doctopdf';
import Exceltopdf from './Exceltopdf';
import PdftoJpg from './PdftoJpg';
import Pdfconverer from './Pdfconverter';
import Pdftodoc from './Pdftodoc';
import PdftoExcel from './PdftoExcel';
import JpftoPdf from './JpgtoPdf';
import Pdftoppt from './Pdftoppt';
import Ppttopdf from './Ppttopdf';
import Wordtopdf from './Wordtopdf';



function Indexone() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Cards/>} />

        <Route path="/Doctopdf" element={<Doctopdf/>} />
        <Route path="/Exceltopdf" element={<Exceltopdf/>} />
        <Route path="/PdftoJpg" element={<PdftoJpg/>} />
        <Route path="/Pdfconverer" element={<Pdfconverer/>} />
        <Route path="/Pdftodoc" element={<Pdftodoc/>} />
        <Route path="/PdftoExcel" element={<PdftoExcel/>} />
        <Route path="/JpftoPdf" element={<JpftoPdf/>} />
        <Route path="/Pdftoppt" element={<Pdftoppt/>} />
        <Route path="/Ppttopdf" element={<Ppttopdf/>} />
        <Route path="/Wordtopdf" element={<Wordtopdf/>} />
      </Routes>
    </Router>
  );
}

export default Indexone;
