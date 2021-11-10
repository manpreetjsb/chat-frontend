import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <div>
        <div>
          <div className="card w-75">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the cards
                content.
              </p>
              <span>Card link</span>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="fixed-bottom bg-info">
          <div className="container ">
            <div className="input-group m-2">
              <input
                type="text"
                className="form-control"
                placeholder="Message"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
