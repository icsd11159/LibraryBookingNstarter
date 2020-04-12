import React from 'react';
import ReactDOM from 'react-dom';
import Navbars from "../../../src/views/IndexSections/Navbars.jsx";


function Example() {
    
    return (
      
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <Navbars />
                        <div className="card-body">I'm an example component!LLETS FUCKING START</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
