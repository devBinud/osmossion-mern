import React from "react";
import "./AcuteRenal.module.css";
import Accordion from "react-bootstrap/Accordion";


const AcuteRenal=()=> {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          How common is Acute Renal Failure (ARF)?
        </Accordion.Header>
        <Accordion.Body>
        ARF is relatively common, particularly in hospitalized patients or those with pre-existing health conditions. However, the incidence can vary depending on the underlying causes and patient population.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can ARF be reversed or cured?</Accordion.Header>
        <Accordion.Body>
        In some cases, ARF can be reversed if the underlying cause is identified and effectively treated. However, certain cases may progress to chronic kidney disease or require long-term management, such as dialysis or kidney transplantation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are there any preventive measures for ARF?</Accordion.Header>
        <Accordion.Body>
        Maintaining good overall health, staying hydrated, avoiding nephrotoxic substances, and managing underlying health conditions can help reduce the risk of ARF. It is essential to seek medical attention promptly if any symptoms or risk factors are present.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How long does it take to recover from ARF?</Accordion.Header>
        <Accordion.Body>
        The recovery time for ARF can vary depending on the severity of the condition, the underlying cause, and individual factors. Some individuals may experience a complete recovery within a few weeks, while others may require more extended periods or ongoing management.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Can ARF be fatal?</Accordion.Header>
        <Accordion.Body>
        In severe cases or when left untreated, ARF can lead to life-threatening complications and may be fatal. Timely diagnosis, appropriate management, and close monitoring are crucial to improve outcomes and prevent adverse events.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcuteRenal;
