import React from "react";
import "./Nephron.css";
import Accordion from "react-bootstrap/Accordion";

function Nephron() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        How many nephrons are present in each kidney?
        </Accordion.Header>
        <Accordion.Body>
        Each kidney contains approximately one million nephrons.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What are the types of nephrons?
</Accordion.Header>
        <Accordion.Body>
        There are two types of nephrons: cortical nephrons and juxtamedullary nephrons. The difference lies in the location of their glomeruli within the kidney.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        What is the main function of the glomerulus?
        </Accordion.Header>
        <Accordion.Body>
        The glomerulus acts as a filter, selectively filtering blood to separate waste products, electrolytes, and water.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
        What happens in the proximal convoluted tubule?
        </Accordion.Header>
        <Accordion.Body>
        The proximal convoluted tubule reabsorbs water and small molecules from the filtrate back into the bloodstream.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How much of the fluid filtered by the kidney actually becomes urine?</Accordion.Header>
        <Accordion.Body>
        Only 1% of the fluid filtered by the kidney becomes urine. The rest is reabsorbed and returned to the bloodstream.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Where does the collecting duct empty?</Accordion.Header>
        <Accordion.Body>
        The collecting duct empties into the ureter, which carries the urine from the kidney to the bladder.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Nephron;
