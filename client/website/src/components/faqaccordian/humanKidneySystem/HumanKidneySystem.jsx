import React from "react";
import "./HumanKidneySystem.css";
import Accordion from "react-bootstrap/Accordion";

function HumanKidneySystem() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is the function of the renal system?
        </Accordion.Header>
        <Accordion.Body>
          The renal system is responsible for filtering waste from the blood,
          regulating electrolyte levels, and maintaining fluid balance in the
          body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          How do the kidneys filter waste from the blood?
        </Accordion.Header>
        <Accordion.Body>
          The kidneys employ a complex process of filtration, reabsorption, and
          secretion to remove waste products and excess water from the blood,
          producing urine.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Are there any common kidney diseases?
        </Accordion.Header>
        <Accordion.Body>
          Yes, common kidney diseases include chronic kidney disease, kidney
          stones, urinary tract infections, and kidney infections.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Can kidney health be improved through diet and lifestyle?
        </Accordion.Header>
        <Accordion.Body>
          Yes, adopting a healthy diet, staying hydrated, avoiding excessive
          salt and alcohol intake, and exercising regularly can contribute to
          kidney health.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How can I take care of my kidneys?</Accordion.Header>
        <Accordion.Body>
          To care for your kidneys, it is essential to maintain a balanced diet,
          stay hydrated, avoid smoking, limit alcohol consumption, and manage
          underlying health conditions such as diabetes and hypertension.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default HumanKidneySystem;
