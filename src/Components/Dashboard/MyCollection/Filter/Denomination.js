import React from 'react';
import Form  from 'react-bootstrap/Form';

function DenominationSection()  {  

  return (
       <div className="box-dropdown">
            <Form.Select aria-label="Default select example">
              <option>Denomination</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
       </div>
    )
  
  }
export default DenominationSection;