import React from 'react';
import "./StagesOfCkd.css";
import Accordion from "react-bootstrap/Accordion";


function StagesOfCkd() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        Can CKD be reversed?
        </Accordion.Header>
        <Accordion.Body>
        CKD is a chronic and progressive condition, and complete reversal of kidney damage is not typically possible. However, early detection and proper management can help slow down the progression of the disease, preserving kidney function and improving quality of life.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How can I protect my kidneys?</Accordion.Header>
        <Accordion.Body>
        To protect your kidneys, it is essential to adopt a healthy lifestyle. This includes maintaining a balanced diet, staying hydrated, exercising regularly, avoiding smoking and excessive alcohol consumption, managing blood pressure and blood sugar levels, and avoiding nephrotoxic medications.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the risk factors for CKD?</Accordion.Header>
        <Accordion.Body>
        Several factors increase the risk of developing CKD, including diabetes, hypertension, obesity, family history of kidney disease, older age, and certain ethnicities. Regular check-ups and early intervention are crucial if you have any of these risk factors.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the role of a nephrologist in CKD management?</Accordion.Header>
        <Accordion.Body>
        A nephrologist is a medical specialist who diagnoses and treats kidney-related conditions, including CKD. They play a crucial role in managing CKD, determining the appropriate treatment plan, and monitoring the progression of the disease.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can CKD be prevented?</Accordion.Header>
        <Accordion.Body>
        While certain risk factors for CKD cannot be controlled, adopting a healthy lifestyle and managing underlying health conditions can significantly reduce the risk of developing CKD. Regular health check-ups and early intervention are key to prevention and effective management.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default StagesOfCkd;
