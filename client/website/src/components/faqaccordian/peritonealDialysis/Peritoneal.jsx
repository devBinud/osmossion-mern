import React from 'react';
import "./Peritoneal.css";
import Accordion from "react-bootstrap/Accordion";

const Peritoneal = () => {
  return (
    <>
      <div className="peritoneal__dialysis__wrapper">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        How long does it take to learn to perform peritoneal dialysis at home? 
        </Accordion.Header>
        <Accordion.Body>
        Learning to perform peritoneal dialysis at home usually takes a few weeks of training and practice under the guidance of healthcare professionals. The duration may vary depending on individual aptitude and the level of support available.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I switch from hemodialysis to peritoneal dialysis if I have a functioning arteriovenous fistula? 
</Accordion.Header>
        <Accordion.Body>
        In some cases, individuals with a functioning arteriovenous fistula may still choose to switch to peritoneal dialysis. It's essential to consult with your healthcare team to determine the most suitable treatment option based on your specific circumstances.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
        Is peritoneal dialysis painful? 
        </Accordion.Header>
        <Accordion.Body>
        Peritoneal dialysis is generally well-tolerated and should not cause significant pain. However, some individuals may experience discomfort during the fill or drain phases. It is important to communicate any pain or discomfort to your healthcare provider.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
        Can peritoneal dialysis be performed during travel? 
        </Accordion.Header>
        <Accordion.Body>
        Yes, peritoneal dialysis can be performed during travel. With proper planning and coordination, individuals on peritoneal dialysis can continue their treatment even when away from home. It's crucial to inform your healthcare team in advance to ensure a smooth travel experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How often should I undergo peritoneal equilibration tests (PET)? </Accordion.Header>
        <Accordion.Body>
        Peritoneal equilibration tests (PET) are typically conducted within the first six weeks of initiating peritoneal dialysis. The exact frequency and timing of subsequent PET tests may vary depending on your healthcare provider's recommendations and your individual needs.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </>
  )
}

export default Peritoneal
