import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Cards.css'

const Cards = () => {
  return (
    <div>
        <div class="container">
             <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Doctopdf</h3>
                 <button>
                 <Link to="/Doctopdf">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Exceltopdf</h3>
                 <button>
                 <Link to="/Exceltopdf">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>PdftoJpg</h3>
                 <button>
                 <Link to="/PdftoJpg">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Pdfconverer</h3>
                 <button>
                 <Link to="/Pdfconverer">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Pdftodoc</h3>
                 <button>
                 <Link to="/Pdftodoc">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>PdftoExcel</h3>
                 <button>
                 <Link to="/PdftoExcel">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>JpftoPdf</h3>
                 <button>
                 <Link to="/JpftoPdf">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Pdftoppt</h3>
                 <button>
                 <Link to="/Pdftoppt">CONVERT</Link>
                  </button>
            </div>


            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Ppttopdf</h3>
                 <button>
                 <Link to="/Ppttopdf">CONVERT</Link>
                  </button>
            </div>

            <div className="card">
                  <img src="image1.jpg" alt="Card Image" />
                 <h3>Wordtopdf</h3>
                 <button>
                 <Link to="/Wordtopdf">CONVERT</Link>
                  </button>
            </div>
         </div>
    </div>
    
  )
}

export default Cards;