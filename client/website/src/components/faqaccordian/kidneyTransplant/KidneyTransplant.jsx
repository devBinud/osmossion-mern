import React from 'react';
import "./KidneyTransplant.css";
import Accordion from "react-bootstrap/Accordion";


function KidneyTransplant() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
        How long does a renal transplant surgery typically take?
        </Accordion.Header>
        <Accordion.Body>
        Renal transplant surgery typically takes around three to four hours. However, the overall duration may vary depending on individual factors and any complexities encountered during the procedure.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can a patient with HIV receive a renal transplant?</Accordion.Header>
        <Accordion.Body>
        Yes, with advancements in medical care, renal transplantation is now possible for patients with HIV. However, strict protocols and specialized care are followed to ensure the safety and effectiveness of the transplant.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Is kidney transplantation covered by insurance?</Accordion.Header>
        <Accordion.Body>
        Kidney transplantation is often covered by health insurance policies, but coverage may vary. It is essential to consult with your insurance provider to understand the specific details of coverage and any associated costs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Are there any alternative treatments for end-stage renal disease?</Accordion.Header>
        <Accordion.Body>
        In addition to kidney transplantation, other treatment options for end-stage renal disease include dialysis (hemodialysis or peritoneal dialysis) and conservative management. The choice of treatment depends on several factors, such as the patient's overall health, lifestyle, and availability of suitable donors.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What measures can be taken to prevent graft rejection?</Accordion.Header>
        <Accordion.Body>
        To prevent graft rejection, patients are prescribed immunosuppressive medications that suppress the immune system's response to the transplanted kidney. These medications need to be taken as prescribed, and regular follow-up visits and monitoring are essential to detect any signs of rejection or complications.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default KidneyTransplant;
