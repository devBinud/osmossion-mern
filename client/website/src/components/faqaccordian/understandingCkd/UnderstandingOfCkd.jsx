import React from 'react';
import "./UnderstandingOfCkd.css";
import Accordion from "react-bootstrap/Accordion";


function UnderstandingOfCkd() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        Can chronic kidney disease be cured completely?
        </Accordion.Header>
        <Accordion.Body>
        Unfortunately, chronic kidney disease is generally considered irreversible. However, timely management and treatment can help slow down its progression and improve the quality of life.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Are there any lifestyle changes that can help prevent CKD?</Accordion.Header>
        <Accordion.Body>
        Yes, adopting a healthy lifestyle can reduce the risk of developing CKD. This includes maintaining a balanced diet, exercising regularly, managing blood pressure and blood sugar levels, and avoiding excessive alcohol consumption.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> Is chronic kidney disease hereditary?</Accordion.Header>
        <Accordion.Body>
        While there is a genetic component to some forms of kidney disease, not all cases of CKD have a hereditary basis. Other factors like lifestyle choices, underlying health conditions, and environmental factors can also contribute to the development of CKD.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How How often should someone with CKD undergo medical check-ups?</Accordion.Header>
        <Accordion.Body>
        The frequency of medical check-ups may vary depending on the severity and stage of CKD. However, regular monitoring of kidney function, blood pressure, and overall health is important to manage the condition effectively. Your healthcare provider can guide you on the recommended frequency of check-ups.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can children develop chronic kidney disease?</Accordion.Header>
        <Accordion.Body>
        Yes, children can develop chronic kidney disease, although it is relatively rare. In many cases, the underlying causes differ from those in adults. Early diagnosis and appropriate management are crucial for children with CKD to ensure proper growth and development.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default UnderstandingOfCkd;
