import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FunctionsOfKidney.css";

function FunctionsOfKidney() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          How do the kidneys remove waste products from the body?
        </Accordion.Header>
        <Accordion.Body>
          The kidneys filter the blood and eliminate waste products through
          urine.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          What is the role of the kidneys in fluid regulation?
        </Accordion.Header>
        <Accordion.Body>
          The kidneys help maintain fluid balance by adjusting the volume of
          urine produced. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          How do the kidneys regulate electrolyte balance?
        </Accordion.Header>
        <Accordion.Body>
          The kidneys control the excretion and reabsorption of electrolytes to
          maintain their optimal levels in the bloodstream.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          What hormones do the kidneys produce?
        </Accordion.Header>
        <Accordion.Body>
          The kidneys produce hormones such as renin, erythropoietin (EPO), and
          calcitriol. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Why is maintaining kidney health important?
        </Accordion.Header>
        <Accordion.Body>
          Proper kidney function is crucial for overall health and well-being,
          as the kidneys perform essential functions to maintain internal
          balance. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default FunctionsOfKidney;
