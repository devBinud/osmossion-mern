import React from "react";
import "./GFR.css";
import Accordion from "react-bootstrap/Accordion";

function GFR() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is GFR, and why is it important?
        </Accordion.Header>
        <Accordion.Body>
          GFR stands for glomerular filtration rate, which measures the rate at
          which blood is filtered by the kidneys. It is essential because it
          provides valuable insights into kidney function and helps diagnose and
          monitor various renal conditions.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How is GFR estimated?</Accordion.Header>
        <Accordion.Body>
          GFR can be estimated through blood tests and specialized imaging
          techniques. These methods provide quantitative measurements that allow
          medical professionals to assess kidney function accurately.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          What happens to the fluid filtered by the kidneys?
        </Accordion.Header>
        <Accordion.Body>
          The fluid filtered by the kidneys, known as filtrate, undergoes
          further processing through reabsorption in the renal tubules.
          Approximately 99% of the fluid is reabsorbed, while the remaining 1%
          forms urine, carrying waste products out of the body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the filtration barrier?</Accordion.Header>
        <Accordion.Body>
          The filtration barrier refers to the structures in the glomerulus that
          allow only substances with small molecular sizes to pass through
          during filtration. Larger molecules such as proteins and blood cells
          are unable to pass through these barriers.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          How do hydrostatic and osmotic forces affect GFR?
        </Accordion.Header>
        <Accordion.Body>
          Hydrostatic forces push fluid into the Bowman's space during
          filtration, while osmotic forces keep fluid in the plasma. The balance
          between these forces is crucial for maintaining an optimal GFR and
          efficient filtration.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default GFR;
