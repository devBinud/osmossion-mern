import React from "react";
import "./KidneyHealthInner.css";
import kidney__transplant from "../../assets/kidneyeducation/kidney_transplant.jpeg";
import human__kidney__system from "../../assets/kidneyeducation/human_kidneys.jpg";
import nephron from "../../assets/kidneyeducation/nephron.png";
import human__kidney__functions from "../../assets/kidneyeducation/human_kidney_functions.jpg";
import stages__of__ckd from "../../assets/kidneyeducation/stages_of_ckd.jpg";
import ckd from "../../assets/kidneyeducation/ckd.png";
// import acute__renal__failure from "../../assets/kidneyeducation/acute__renal__failure.png";
import acute_renal from "../../assets/kidneyeducation/acute_renal.jpeg";
import gfr from "../../assets/kidneyeducation/gfr.png";
import peritoneal_img from "../../assets/kidneyeducation/peritoneal.jpeg";


const KidneyHealthInner = () => {
  return (
    <div className="kidney__health__inner__wrapper">
      <div className="container">
        <div className="kidney__health__inner">
          <div className="kidney__health__inner__title">
            <h3>Kidney Health Education</h3>
            <p>
            Kidney health education is a vital aspect of promoting and maintaining optimal kidney function and overall well-being. It involves providing individuals with knowledge and resources to understand the importance of kidney health, recognize potential risk factors, and adopt preventive measures to reduce the likelihood of kidney disease.
            </p>
          </div>
          <div className="kidney__health__inner__accordian__content">
            <div className="col-lg-12">
              <ul className="nav nav-tabs flex-wrap">
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Acute Renal Failure
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Basic Functions of Kidney
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Human Kidney System
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                    Kidney Transplant
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                    Stages Of CKD
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-6">
                    Understanding of CKD
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-7">
                    Know About Nephron
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-8">
                    Glomerular Filtration Rate
                  </a>
                </li>
                <li className="nav-item col-lg-3 col-6 mt-3">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-9">
                  Peritoneal Dialysis
                  </a>
                </li>
              </ul>
            </div>

            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Acute Renal Failure
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={acute_renal}
                              className="img-fluid"
                              alt="acute-renal-failure" />
                              <p className="image__description">Image : Acute Renal Failure</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Understanding Acute Renal Failure (ARF): Causes,
                            Symptoms, Diagnosis, and Management
                          </h5>
                          <p>
                            Acute Renal Failure (ARF), also known as Acute
                            Kidney Injury (AKI), is a condition characterized by
                            a sudden and abrupt loss of kidney function that
                            develops within 48 hours. It is essential to
                            understand the causes, symptoms, diagnosis, and
                            management of ARF to promote early detection and
                            provide appropriate medical interventions. This
                            article will delve into the various types of ARF and
                            discuss the necessary steps for effective
                            management.
                          </p>
                          <h6>1. Introduction</h6>
                          <p>
                            Acute Renal Failure (ARF) refers to the sudden
                            impairment or loss of kidney function, which can
                            occur due to various factors. It is crucial to
                            identify and address ARF promptly to prevent
                            complications and ensure the best possible outcome
                            for the patient. This article aims to provide a
                            comprehensive understanding of the causes, symptoms,
                            diagnosis, and management of ARF.
                          </p>
                          <h6>2. Types of ARF</h6>
                          <h6>2.1 Pre-renal Causes</h6>
                          <p>
                            Pre-renal causes of ARF are related to decreased
                            blood supply to the kidneys. These causes include :
                          </p>
                          <ul>
                            <li>Low blood volume</li>
                            <li>Hypotension (low blood pressure)</li>
                            <li>Cardiac failure</li>
                            <li>Liver cirrhosis</li>
                            <li>Renal artery stenosis</li>
                            <li>Renal vein thrombosis</li>
                            <li>Sepsis</li>
                            <li>Dehydration</li>
                          </ul>
                          <h6>2.2 Intrarenal or Intrinsic Causes</h6>
                          <p>
                            Intrarenal or intrinsic causes of ARF involve damage
                            to the kidney's glomeruli, renal tubules, or
                            interstitium. The following conditions can
                            contribute to ARF :
                          </p>
                          <ul>
                            <li>Glomerulonephritis</li>
                            <li>Acute Tubular Necrosis (ATN)</li>
                            <li>Acute Interstitial Nephritis (AIN)</li>
                            <li>Nephrotoxic drugs</li>
                            <li>Renal artery stenosis</li>
                            <li>Renal vein thrombosis</li>
                            <li>Sepsis</li>
                            <li>Dehydration</li>
                          </ul>
                          <h6>2.3 Post-renal Causes</h6>
                          <p>
                            Post-renal causes of ARF occur due to urinary tract
                            obstruction, hindering the normal flow of urine.
                            These causes include :
                          </p>
                          <ul>
                            <li>Urinary tract infection (UTI)</li>
                            <li>Benign Prostatic Hyperplasia (BPH)</li>
                            <li>Kidney stones</li>
                            <li>Ureteral or renal malignancy</li>
                          </ul>

                          <h6>3. Signs and Symptoms of ARF</h6>
                          <p>
                            Recognizing the signs and symptoms of ARF is crucial
                            for early detection and timely intervention. Some
                            common indications of ARF include :
                          </p>
                          <ul>
                            <li>Fatigue</li>
                            <li>Nausea</li>
                            <li>Anorexia (loss of appetite)</li>
                            <li>Cardiac arrhythmia</li>
                            <li>Oliguria (reduced urine output)</li>
                            <li>Edema (swelling)</li>
                            <li>Pruritus (itchiness)</li>
                            <li>Anemia</li>
                            <li>Tachypnea (rapid breathing)</li>
                            <li>Cool, pale, moist skin</li>
                          </ul>

                          <h6>4. Diagnosis of ARF</h6>
                          <p>
                            The diagnosis of ARF involves a combination of
                            clinical evaluation and diagnostic tests. The
                            following approaches are commonly used :
                          </p>
                          <p>
                            Biochemistry evaluation: Blood tests to assess
                            kidney function by measuring creatinine, blood urea
                            nitrogen (BUN), and electrolyte levels. Renal
                            Ultrasonography (USG): Imaging technique to evaluate
                            the structure and size of the kidneys. Renal Biopsy:
                            In some cases, a small tissue sample may be obtained
                            for further examination under a microscope.
                          </p>
                          <h6>5. Management of ARF</h6>
                          <p>
                            The management of ARF aims to address the underlying
                            cause, restore kidney function, and prevent
                            complications. The following interventions are
                            typically employed :
                          </p>
                          <p>
                            Treat life-threatening conditions: Stabilize the
                            patient's condition by addressing any immediate
                            threats to their health. Intravenous (IV) fluids:
                            Administer fluids to maintain adequate hydration and
                            promote kidney function. Inotropes: Medications that
                            can support heart function and blood pressure.
                            Discontinue nephrotoxic drugs: Identify and stop any
                            medications that may contribute to kidney damage.
                            Steroids: In certain cases, corticosteroids may be
                            prescribed to reduce inflammation and promote renal
                            recovery. Nephrostomy or catheterization: In severe
                            cases, a tube may be inserted directly into the
                            kidney to drain urine. Diuretics: Medications that
                            help increase urine output and eliminate excess
                            fluid. Renal Replacement Therapy (RRT): In advanced
                            cases, dialysis or other forms of RRT may be
                            necessary to replace kidney function temporarily or
                            permanently.
                          </p>
                          <h6>6. Conclusion</h6>
                          <p>
                            Acute Renal Failure (ARF), also known as Acute
                            Kidney Injury (AKI), is a condition characterized by
                            a sudden loss of kidney function within 48 hours. It
                            is crucial to understand the different types of ARF,
                            recognize the signs and symptoms, and implement
                            appropriate diagnostic and management strategies.
                            Early detection and timely intervention can
                            significantly improve outcomes and reduce the risk
                            of complications associated with ARF.
                          </p>
                          <p>
                            In conclusion, Acute Renal Failure (ARF) is a
                            serious condition characterized by the abrupt loss
                            of kidney function within 48 hours. Understanding
                            the causes, symptoms, diagnosis, and management of
                            ARF is essential for healthcare professionals and
                            individuals alike. By promoting awareness and early
                            detection, we can improve patient outcomes and
                            minimize the impact of this condition on overall
                            health and well-being.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Basic Functions of Kidney
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={human__kidney__functions}
                              className="img-fluid"
                              alt="kidney-transplant" />
                              <p className="image__description">Image : Basic Functions of Kidney</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Basic Functions of the Kidneys: Remove, Regulate,
                            and Endocrine
                          </h5>
                          <p>
                            The kidneys are vital organs in the human body that
                            perform several essential functions to maintain
                            overall health and well-being. In this article, we
                            will explore the basic functions of the kidneys,
                            focusing on their ability to remove waste products,
                            regulate various bodily processes, and serve as an
                            endocrine organ. Understanding these functions is
                            crucial for appreciating the kidneys' role in
                            maintaining the body's internal balance.
                          </p>
                          <h6>1. Introduction</h6>
                          <p>
                            The kidneys, a pair of bean-shaped organs located in
                            the upper abdominal cavity, play a crucial role in
                            maintaining the body's internal environment. They
                            act as sophisticated filters that remove waste
                            products, regulate fluid and electrolyte balance,
                            and produce hormones that contribute to overall
                            homeostasis.
                          </p>
                          <h6>2. Removal Function of the Kidneys</h6>
                          <p>
                            One of the primary functions of the kidneys is the
                            removal of waste products from the body. Nitrogenous
                            waste products, such as urea and creatinine, are
                            byproducts of protein metabolism. These waste
                            products are harmful if allowed to accumulate in the
                            bloodstream. The kidneys filter the blood and remove
                            these waste products through the urine, ensuring
                            their elimination from the body.
                          </p>
                          <p>
                            In addition to waste removal, the kidneys also play
                            a crucial role in regulating the fluid balance in
                            the body. They help eliminate excess fluid,
                            primarily in the form of water, by adjusting the
                            volume of urine produced. This process ensures that
                            the body maintains an appropriate fluid level,
                            preventing conditions such as fluid overload or
                            dehydration.
                          </p>
                          <h6>3. Regulation Function of the Kidneys</h6>
                          <p>
                            Maintaining homeostasis, or the body's internal
                            balance, is another vital function of the kidneys.
                            They help regulate fluid balance by adjusting the
                            concentration of water and electrolytes in the
                            blood. Through a complex mechanism involving the
                            reabsorption and excretion of ions and water, the
                            kidneys ensure that the body maintains optimal fluid
                            levels.
                          </p>
                          <p>
                            Electrolyte balance is also crucial for the proper
                            functioning of various bodily processes. The kidneys
                            play a central role in maintaining the right levels
                            of electrolytes, such as sodium, potassium, calcium,
                            and phosphate, in the bloodstream. Imbalances in
                            these electrolytes can lead to serious health
                            complications, but the kidneys help prevent such
                            imbalances by regulating their excretion and
                            reabsorption.
                          </p>
                          <p>
                            Furthermore, the kidneys actively contribute to
                            maintaining the acid-base pH balance in the body.
                            They help eliminate excess acids or bases through
                            the excretion of hydrogen ions or bicarbonate ions,
                            respectively. This regulation of pH ensures that the
                            body's internal environment remains within the
                            optimal range, preventing conditions like metabolic
                            acidosis.
                          </p>
                          <h6>4. Endocrine Function of the Kidneys</h6>
                          <p>
                            In addition to their filtration and regulatory
                            functions, the kidneys also serve as an endocrine
                            organ. They produce and release various hormones
                            that play vital roles in different physiological
                            processes. One such hormone is renin, an enzyme
                            responsible for regulating blood pressure. Renin
                            acts by initiating a cascade of biochemical
                            reactions that eventually leads to the constriction
                            of blood vessels, helping to maintain blood pressure
                            within a normal range.
                          </p>
                          <p>
                            The kidneys also produce erythropoietin (EPO), a
                            hormone that stimulates the production of red blood
                            cells (RBCs) in the bone marrow. EPO ensures that
                            the body has an adequate supply of oxygen-carrying
                            RBCs, crucial for maintaining overall health and
                            vitality.
                          </p>
                          <p>
                            Furthermore, the kidneys are involved in the
                            activation of vitamin D. They produce an enzyme
                            called calcitriol, which converts inactive vitamin D
                            into its active form. This active form of vitamin D
                            enhances the absorption of calcium from the
                            intestine, contributing to healthy bone formation
                            and maintenance.
                          </p>

                          <h6>5. Conclusion</h6>
                          <p>
                            The kidneys are remarkable organs that perform
                            multiple functions critical to maintaining the
                            body's internal balance. Their ability to remove
                            waste products, regulate fluid and electrolyte
                            balance, and serve as an endocrine organ makes them
                            indispensable for overall health. Understanding the
                            basic functions of the kidneys highlights their
                            importance and underscores the need for their proper
                            care and maintenance.
                          </p>
                          <p>
                            Proper kidney function is crucial for overall health
                            and well-being, as the kidneys perform essential
                            functions to maintain internal balance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Human Kidney System
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={human__kidney__system}
                              className="img-fluid"
                              alt="kidney-transplant" />
                              <p className="image__description">Image : Human Kidney System</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Basics of the Human Kidney System: Unveiling the
                            Marvels Within
                          </h5>
                          <p>
                            The human kidney system, also known as the renal
                            system, the urinary system, or the excretory system,
                            is a captivating masterpiece within our bodies. It
                            consists of several organs that work harmoniously to
                            maintain the delicate balance required for our
                            well-being. Let us embark on a journey to explore
                            the wonders of this intricate system.
                          </p>
                          <h5>
                            Organs of the Renal System: Guardians of Purity
                          </h5>
                          <p>
                            The renal system comprises four primary organs: the
                            kidneys, ureters, urethra, and urinary bladder. Each
                            plays a unique role in the filtration and
                            elimination of waste from our bodies, ensuring the
                            preservation of vitality and equilibrium.
                          </p>
                          <h6>1. Kidneys: The Architectural Marvels</h6>
                          <p>
                            The kidneys, like two precious beans, reside within
                            the abdominal cavity. Weighing between 150 g to 170
                            g in males and 115 g to 155 g in females, these
                            remarkable organs exhibit stunning craftsmanship. An
                            adult kidney measures approximately 10 cm in length,
                            6 cm in breadth, and 4 cm in thickness.
                          </p>
                          <h6>2. Ureters: The Silent Transporters</h6>
                          <p>
                            Nestled alongside the kidneys, the ureters perform
                            their duty with silent grace. They serve as
                            conduits, transporting urine from the kidneys to its
                            eventual destination. Their tireless efforts ensure
                            the smooth flow of waste, guiding it towards
                            elimination.
                          </p>

                          <h6>
                            3. Urinary Bladder: A Reservoir of Life's Byproduct
                          </h6>
                          <p>
                            The urinary bladder patiently awaits its precious
                            cargo. It acts as a reservoir, accumulating urine
                            until the opportune moment arrives for its release.
                            Through its elastic walls, it gracefully expands and
                            contracts, offering us control over this natural
                            process.
                          </p>

                          <h6>4. Urethra: The Gateway to Liberation</h6>
                          <p>
                            Finally, the urethra takes center stage as the
                            gateway to liberation. It serves as the passage
                            through which waste bids farewell to our bodies.
                            With each release, the urethra embodies the
                            cleansing power of renewal, paving the way for a
                            refreshed existence.
                          </p>
                          <p>
                            <strong style={{color:'#74b3ee'}}>
                              {" "}
                              Fascinating Facts about Kidneys : The Unsung
                              Heroes{" "}
                            </strong>
                            The kidneys, in their silent glory, harbor
                            astonishing secrets that captivate the mind and
                            soul. Let us unveil some remarkable facts that
                            elevate our appreciation for these guardians of
                            purity.
                          </p>
                          <p>
                            <strong style={{color:'#74b3ee'}}>Intricate Placement :</strong>
                            Positioned within the abdominal cavity, the kidneys
                            reside beneath the protective ribs, nestled against
                            the costal margin. This placement shields them from
                            harm, allowing them to carry out their vital
                            functions undisturbed.
                          </p>
                          <p>
                            <strong style={{color:'#74b3ee'}}>Left and Right Distinctions: :</strong>
                            Nature's artistry is revealed through the subtle
                            asymmetry of the kidneys. The left kidney, slightly
                            larger than its counterpart, finds its place higher
                            within the abdominal cavity. The liver's presence
                            accounts for the lower position of the right kidney,
                            embracing these organs in perfect harmony.
                          </p>
                          <p>
                            <strong style={{color:'#74b3ee'}}>Retroperitoneal Residence :</strong>
                            The kidneys, situated at the level of thoracic 12 to
                            lumbar 3, exist in a unique realm called the
                            retroperitoneal space. This positioning ensures
                            their stability and protection, allowing them to
                            fulfill their duties with unwavering dedication.
                          </p>
                          <p>
                            In the captivating symphony of our bodies, the human
                            kidney system emerges as a testament to the
                            intricacies of life. Its organs work in unison,
                            purifying and eliminating waste, allowing us to
                            thrive. Let us honor and care for this marvelous
                            system, embracing the balance and vitality it
                            bestows upon us.
                          </p>

                          <h6>5. Conclusion</h6>
                          <p>
                            The human kidney system, also known as the renal
                            system or the urinary system, is a testament to the
                            extraordinary wonders within us. Its organs,
                            including the kidneys, ureters, urethra, and urinary
                            bladder, work tirelessly to maintain balance and
                            eliminate waste from our bodies. Let us treasure and
                            nurture this remarkable system, for it is through
                            its harmonious symphony that we find wellness and
                            vitality.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Kidney Transplant
                        </h3>
                        <div className="kidney__health__innner__tab__contents">
                          <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={kidney__transplant}
                              className="img-fluid"
                              alt="kidney-transplant" />
                              <p className="image__description">Image : Kidney Transplant</p>
                          </div>
                          <h5>
                            Renal Transplant: A Life-Saving Procedure for
                            End-Stage Renal Disease
                          </h5>
                          <p>
                            Kidney transplantation, also known as renal
                            transplant or renal transplantation, is a crucial
                            medical procedure that involves transplanting a
                            healthy kidney into a patient suffering from
                            end-stage renal disease (ESRD). This life-saving
                            treatment option offers hope and a chance for a
                            better quality of life for individuals with severe
                            kidney dysfunction. In this article, we will explore
                            the various aspects of renal transplantation,
                            including patient selection, donor criteria,
                            evaluation procedures, and potential risks. Let's
                            delve into this remarkable medical procedure that
                            has transformed the lives of countless individuals.
                          </p>
                          <h6>1. Introduction</h6>
                          <p>
                            Renal transplantation is a surgical procedure that
                            involves replacing a patient's failed kidney with a
                            healthy kidney from a living or deceased donor. This
                            procedure offers a new lease on life for individuals
                            suffering from end-stage renal disease (ESRD), a
                            condition where the kidneys lose their ability to
                            function adequately.
                          </p>
                          <p>
                            Kidney transplantation is considered the gold
                            standard treatment for ESRD, offering numerous
                            benefits such as improved quality of life, increased
                            life expectancy, and the potential for freedom from
                            dialysis. It enables patients to regain their
                            independence, resume regular activities, and enjoy a
                            more normal lifestyle.
                          </p>
                          <h6>
                            2. Patient Selection for Renal Transplantation
                          </h6>
                          <h6 className="mt-3">2.1  Eligibility Criteria for Patients with ESRD </h6>
                          <p>
                            Patients with ESRD are generally considered
                            potential candidates for renal transplantation
                            unless they have certain conditions such as systemic
                            malignancy, chronic infections, severe
                            cardiovascular disease, neuropsychiatric disorders,
                            or are at the extremes of age. However, each case is
                            evaluated individually to determine the suitability
                            for transplantation.
                          </p>

                          <h6>2.2 Contraindications for Renal Transplantation</h6>
                          <p>
                            While renal transplantation offers hope for patients
                            with ESRD, certain contraindications must be
                            considered. Factors such as ABO blood type
                            incompatibility, cytotoxic antibodies against the
                            donor's HLA antigens, recent or metastatic
                            malignancy, active infection, AIDS, severe
                            extrarenal diseases, active vasculitis or
                            glomerulonephritis, uncorrectable lower urinary
                            tract disease, non-compliance, psychiatric illnesses
                            including alcoholism and drug addiction, morbid
                            obesity , age over 70 years, primary oxalosis, and
                            persistent coagulation disorders can restrict a
                            patient's eligibility for the procedure.
                          </p>

                          <h6>3. Donor Selection for Renal Transplantation</h6>
                          <p>
                            Renal transplantation requires a suitable kidney
                            donor, which can be a living related donor, a living
                            unrelated donor motivated by emotional reasons, or a
                            cadaveric donor.
                          </p>
                          <h6>3.1 Living Donors</h6>
                          <p>
                            Living donors are individuals who voluntarily offer
                            to donate one of their kidneys to a patient in need.
                            They can be blood relatives or unrelated individuals
                            who are emotionally motivated to help.
                          </p>
                          <h6>3.2 Living Related Donors </h6>
                          <p>
                            Blood relatives of the patient, such as parents,
                            siblings, or children, are often the first choice
                            for living-related kidney donation. They usually
                            share similar genetic profiles, increasing the
                            chances of a successful transplant.
                          </p>
                          <h6>3.3 Living Unrelated Donors </h6>
                          <p>
                            Living unrelated donors are individuals who have a
                            personal connection with the recipient and are
                            motivated by emotional reasons to donate a kidney.
                            They may be friends, colleagues, or even strangers
                            who are inspired to make a difference in someone's
                            life.
                          </p>
                          <h6>3.4 Cadaveric Donors</h6>
                          <p>
                            Cadaveric donors are deceased individuals who have
                            chosen to donate their organs before death or whose
                            families have consented to organ donation. These
                            organs are carefully evaluated for viability and
                            suitability before transplantation.
                          </p>

                          <h6>4. Living Donor Selection Criteria</h6>
                          <p>
                            When evaluating potential living donors, several
                            criteria are taken into consideration to ensure the
                            success and safety of the transplantation procedure.
                          </p>
                          <h6>4.1 Blood Relatives as Donors</h6>
                          <p>
                            Blood relatives are preferred as donors due to
                            genetic compatibility, which increases the
                            likelihood of a successful transplant. Compatibility
                            testing involves matching blood types and checking
                            for HLA compatibility.
                          </p>
                          <h6>4.2 Motivation and Compatibility Factors</h6>
                          <p>
                            Living donors must be highly motivated to undergo
                            the procedure voluntarily. In addition to
                            motivation, ABO blood group compatibility, HLA
                            identity or haplo-identity with a negative
                            cross-match, and excellent overall medical condition
                            with normal renal function are vital factors
                            considered during the selection process.
                          </p>
                          <h6>
                            4.3 Understanding HLA(Human leukocyte antigen) Typing
                          </h6>
                          <p>
                            HLA typing is a crucial procedure used to match
                            donors with recipients for organ and bone marrow
                            transplants. Unlike ABO blood typing, HLA typing
                            focuses on identifying specific proteins or markers
                            found on most cells in the body. These markers help
                            the immune system distinguish between "self" and
                            "non-self" cells.
                          </p>

                          <h6>5. Cadaver Donor Selection Criteria</h6>
                          <p>
                            Cadaver donors undergo rigorous evaluation to
                            determine the suitability of their kidneys for
                            transplantation.
                          </p>
                          <h6>5.1 Evaluating the Viability of Cadaveric Kidneys</h6>
                          <p>
                            Cadaveric kidneys are carefully assessed to ensure
                            they meet specific criteria. The evaluation process
                            includes determining the absence of pre-existing
                            renal disease, assessing normal renal function
                            appropriate for the donor's age, and confirming the
                            absence of transmissible diseases.
                          </p>
                          <h6>5.2 Compatibility Factors for Cadaveric Donation</h6>
                          <p>
                            ABO blood group compatibility, negative cross-match
                            results, and the best possible HLA match are
                            essential factors when considering cadaveric donors.
                          </p>
                          <h6>6. Evaluating the Donor</h6>
                          <p>
                            The evaluation of potential donors involves
                            assessing their overall medical condition and
                            identifying any risk factors associated with the
                            donation process.
                          </p>
                          <h6>6.1 Assessing Medical Conditions and Risk Factors</h6>
                          <p>
                            Medical conditions that may increase the donor's
                            risk during general anesthesia or surgery are
                            thoroughly evaluated. The assessment also considers
                            whether the removal of one kidney will significantly
                            impact the donor's risk of developing renal
                            insufficiency in the future.
                          </p>
                          <h6>6.2 Kidney Function Evaluation</h6>
                          <p>
                            To ensure the donor's kidney is healthy and
                            functioning optimally, various tests are performed,
                            including serum creatinine levels, creatinine
                            clearance, radionuclide GFR (glomerular filtration
                            rate), urine analysis, and urine culture. A minimum
                            GFR of over 70 ml/min is typically required for
                            donation eligibility.
                          </p>
                          <h6>6.3 Exclusion Criteria for Kidney Donation</h6>
                          <p>
                            Certain conditions, such as renal parenchymal
                            disease, a history of kidney stones or frequent
                            urinary tract infections, hypertension, diabetes
                            mellitus, conditions that increase the risk of
                            anesthesia and surgery, and recent malignancy, can
                            exclude individuals from donating their kidneys.
                          </p>
                          <h6>7. Potential Threats to the Donor</h6>
                          <p>
                            After the removal of one kidney, the remaining
                            kidney compensates by undergoing hypertrophy and
                            increasing its glomerular filtration rate (GFR).
                            While this adaptation is generally well-tolerated,
                            there is a slight risk of proteinuria and
                            hypertension in the long term. However,
                            comprehensive studies spanning over 20 years have
                            confirmed the overall safety of kidney donation.
                          </p>
                          <h6>8. Contraindications of Renal Transplantation</h6>
                          <p>
                            Several factors can contraindicate renal
                            transplantation due to potential risks and
                            complications.
                          </p>
                          <h6>8.1 ABO Incompatibility</h6>
                          <p>
                            Incompatible ABO blood types between the donor and
                            recipient can lead to significant complications and
                            increase the risk of graft rejection.
                          </p>
                          <h6>8.2 Cytotoxic Antibodies against HLA Antigens</h6>
                          <p>
                            Cytotoxic antibodies that target the donor's HLA
                            antigens can result in severe immune reactions and
                            compromise the success of the transplant.
                          </p>
                          <h6>8.3 Recent or Metastatic Malignancy</h6>
                          <p>
                            Active malignancy or metastatic cancer is a
                            contraindication for renal transplantation due to
                            the risk of disease progression and poor outcomes.
                          </p>
                          <h6>
                            8.4 Active Infection, AIDS, and Extra Renal Diseases
                          </h6>
                          <p>
                            Active infections, AIDS, severe cardiovascular,
                            pulmonary, or hepatic diseases, active vasculitis or
                            glomerulonephritis, uncorrectable lower urinary
                            tract disease, non-compliance, psychiatric illnesses
                            including alcoholism and drug addiction, morbid
                            obesity, and age over 70 years are considered
                            contraindications for renal transplantation.
                          </p>
                          <h6>8.5 Other Contraindications</h6>
                          <p>
                            Primary oxalosis, persistent coagulation disorders,
                            and conditions that increase the risk of anesthesia
                            and surgery are additional factors that may prevent
                            a patient from undergoing renal transplantation.
                          </p>
                          <h6>9. Blood Type Compatibility Chart</h6>
                          <p>
                            Blood type compatibility is a critical aspect of
                            successful kidney transplantation. The following
                            chart illustrates the compatibility between
                            different blood types for organ donation.
                          </p>
                          <ul>
                            <li>
                              {" "}
                              Blood Type O: Can donate to A, B, AB, or O and can
                              receive from O (A)*
                            </li>
                            <li>
                              Blood Type A: Can donate to A or AB (O)* and can
                              receive from A or O
                            </li>
                            <li>
                              Blood Type B: Can donate to B or AB and can
                              receive from B or O
                            </li>
                            <li>
                              Blood Type AB: Can donate to AB and can receive
                              from A, B, AB, or O
                            </li>
                          </ul>
                          <h6>
                            10. Common Causes of Death after Renal
                            Transplantation
                          </h6>
                          <p>
                            Cardiovascular disease and infections are the most
                            prevalent causes of death in individuals who have
                            undergone renal transplantation. Close monitoring
                            and appropriate medical management can help reduce
                            the risk of these complications.
                          </p>
                          <h6>
                            11. Factors Influencing Longevity of Transplanted
                            Kidneys
                          </h6>
                          <p>
                            Various factors can influence the long-term success
                            and longevity of transplanted kidneys.
                          </p>
                          <h6>11.1 Age</h6>
                          <p>
                            Advancing age of the recipient and the donor can
                            impact the longevity of the transplanted kidney.
                            Older kidneys are generally more susceptible to
                            complications and may have a shorter functional
                            lifespan.
                          </p>
                          <h6>11.2 HLA Matching</h6>
                          <p>
                            The degree of HLA matching between the donor and
                            recipient plays a significant role in the success of
                            the transplant. A closer match decreases the risk of
                            rejection and improves the chances of long-term
                            graft survival.
                          </p>
                          <h6>11.3 Delayed Graft Function and Ischemia Time</h6>
                          <p>
                            Delayed graft function and prolonged ischemia time
                            during transplantation can negatively affect the
                            long-term function of the transplanted kidney.
                          </p>
                          <h6>11.4 Number of Acute Rejection Episodes</h6>
                          <p>
                            Episodes of acute rejection, if not promptly treated
                            and managed, can contribute to the long-term decline
                            in kidney function and graft failure.
                          </p>
                          <h6>11.5 Native Kidney Disease and Ethnicity</h6>
                          <p>
                            The underlying native kidney disease and the
                            recipient's ethnicity can influence the longevity of
                            the transplanted kidney.
                          </p>
                          <h6>12. Long-Term Causes of Graft Failure</h6>
                          <p>
                            Chronic rejection, characterized by the gradual
                            deterioration of the transplanted kidney, is one of
                            the primary long-term causes of graft failure. Death
                            with a functioning graft, often due to
                            cardiovascular disease, is another significant
                            factor contributing to graft failure over time.
                          </p>
                          <h6>13. Types of Renal Graft Rejection</h6>
                          <p>
                            Renal graft rejection can occur in three forms:
                            hyperacute rejection, acute rejection, and chronic
                            rejection.
                          </p>
                          <h6>13.1 Hyperacute Rejection</h6>
                          <p>
                            Hyperacute rejection is an immediate rejection
                            response mediated by preformed antibodies that
                            recognize HLA antigens in the donor organ. It leads
                            to the rapid loss of the graft and requires
                            immediate intervention.
                          </p>
                          <h6>13.2 Acute Rejection</h6>
                          <p>
                            Acute rejection occurs within the first few weeks
                            after transplantation. It is typically caused by the
                            recipient's immune system recognizing the
                            transplanted kidney as foreign and mounting an
                            immune response against it. Acute rejection episodes
                            can be effectively managed with immunosuppressive
                            medications.
                          </p>
                          <h6>13.3 Chronic Rejection</h6>
                          <p>
                            Chronic rejection is a slow and progressive process
                            characterized by the gradual deterioration of the
                            transplanted kidney's function over an extended
                            period. It may occur months or years after
                            transplantation and can eventually lead to graft
                            failure.
                          </p>
                          <h6>14. Conclusion</h6>
                          <p>
                            Renal transplantation is a life-saving procedure
                            that offers hope and improved quality of life for
                            individuals suffering from end-stage renal disease.
                            The meticulous process of patient and donor
                            selection, rigorous evaluations, and comprehensive
                            post-transplant care contribute to the success and
                            long-term viability of transplanted kidneys. This
                            procedure has transformed the lives of countless
                            patients, enabling them to regain their health,
                            independence, and freedom from dialysis.
                          </p>
                          <p>
                            In conclusion, renal transplantation is a remarkable
                            medical procedure that offers hope and a new lease
                            on life for individuals suffering from end-stage
                            renal disease. By understanding the patient and
                            donor selection process, evaluating potential risks,
                            and managing post-transplant care, medical
                            professionals have made tremendous strides in
                            improving the success rates and long-term outcomes
                            of renal transplantation. This life-saving procedure
                            continues to transform lives and provide renewed
                            hope for patients in need.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Stages Of Chronic Kidney Disease
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={stages__of__ckd}
                              className="img-fluid"
                              alt="stages-of-ckd" />
                              <p className="image__description">Image : Stages Of Chronic Kidney Disease</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Understanding the Stages of CKD: A Comprehensive
                            Guide
                          </h5>
                          <p>
                            Chronic Kidney Disease (CKD) is a progressive
                            condition that affects the functioning of the
                            kidneys. It is crucial to understand the different
                            stages of CKD to ensure early detection and
                            appropriate management. This article will provide an
                            overview of the various stages of CKD, highlighting
                            the key characteristics and implications associated
                            with each stage.
                          </p>

                          <h6>1. Introduction</h6>
                          <p>
                            Chronic Kidney Disease is a long-term condition in
                            which the kidneys gradually lose their ability to
                            function effectively. It is often a result of
                            underlying health conditions such as diabetes,
                            hypertension, or glomerulonephritis. CKD progresses
                            through different stages, each characterized by
                            specific levels of kidney damage and declining
                            glomerular filtration rate (GFR). Let's explore each
                            stage in detail.
                          </p>
                          <h6>2. Stage 1 - Slightly Diminished Function</h6>
                          <p>
                            In Stage 1 of CKD, individuals may have kidney
                            damage but still maintain a normal or relatively
                            high GFR (≥90 ml/minute/1.73m²). The damage can be
                            identified through pathological abnormalities or
                            markers found in blood or urine tests, as well as
                            imaging studies. At this stage, the kidneys are
                            still able to perform their vital functions, and the
                            progression of CKD can be slowed down with
                            appropriate measures.
                          </p>

                          <h6>3. Stage 2 - Mild Reduction in GFR</h6>
                          <p>
                            Stage 2 of CKD is characterized by a mild reduction
                            in GFR (60 to 89 ml/min/1.73m²) along with kidney
                            damage. Similar to Stage 1, kidney damage is
                            identified through pathological abnormalities or
                            markers found in diagnostic tests. Individuals in
                            this stage may start experiencing mild symptoms such
                            as fatigue, increased blood pressure, or changes in
                            urinary patterns. It is crucial to monitor the
                            condition closely and adopt lifestyle changes to
                            manage the progression of CKD.
                          </p>

                          <h6>4. Stage 3 - Moderate Reduction in GFR</h6>
                          <p>
                            Stage 3 of CKD signifies a moderate reduction in GFR
                            (30 to 59 ml/min/1.73m²). In British guidelines,
                            this stage is further divided into two categories:
                            Stage 3A (GFR of 45 to 59 ml/min/1.73m²) and Stage
                            3B (GFR of 30 to 44 ml/min/1.73m²). This
                            classification helps in screening and determining
                            the need for referral to a specialist. As the kidney
                            function further declines, individuals may
                            experience noticeable symptoms and complications.
                            Close monitoring and appropriate management become
                            essential at this stage.
                          </p>

                          <h6>5. Stage 4 - Severe Reduction in GFR</h6>
                          <p>
                            Stage 4 of CKD is characterized by a severe
                            reduction in GFR (15 to 29 ml/min/1.73m²). At this
                            point, the kidneys are significantly impaired, and
                            the body starts to accumulate waste and toxins.
                            Individuals may experience severe symptoms,
                            including fatigue, fluid retention, anemia, and bone
                            disorders. It is during this stage that preparation
                            for renal replacement therapy (RRT) becomes
                            necessary. Depending on the individual's condition,
                            their doctor may suggest creating an Arteriovenous
                            Fistula (AVF) to facilitate dialysis treatments in
                            the future.
                          </p>

                          <h6>6. Stage 5 - Established Kidney Failure</h6>
                          <p>
                            Stage 5 of CKD, also known as End-Stage Renal
                            Disease (ESRD), represents established kidney
                            failure with a GFR of less than 15 ml/min/1.73m². At
                            this advanced stage, the kidneys have lost their
                            ability to function adequately, and renal
                            replacement therapy (RRT) becomes a necessity for
                            survival. The two primary treatment options for
                            Stage 5 CKD are kidney transplantation or dialysis
                            therapy. Prompt intervention and access to
                            specialized care are critical for individuals in
                            this stage.
                          </p>

                          <h6>7. Slowing Down the Progression of CKD</h6>
                          <p>
                            While CKD is a progressive condition, it is possible
                            to slow down its progression, particularly in the
                            early stages. Early diagnosis, lifestyle
                            modifications, and proper management can
                            significantly impact the course of the disease. This
                            includes controlling blood pressure, managing blood
                            sugar levels, adopting a healthy diet, regular
                            exercise, and avoiding nephrotoxic substances. It is
                            crucial to work closely with healthcare
                            professionals to develop a personalized treatment
                            plan.
                          </p>

                          <h6>8. Conclusion</h6>
                          <p>
                            Understanding the stages of Chronic Kidney Disease
                            is vital for timely intervention and appropriate
                            management. From the initial stages with slight
                            kidney damage to the advanced stages requiring renal
                            replacement therapy, each stage requires specific
                            attention and care. By promoting awareness and
                            providing access to comprehensive healthcare, we can
                            strive to improve the quality of life for
                            individuals living with CKD.
                          </p>
                          <p>
                            In conclusion, understanding the stages of CKD is
                            essential for individuals, healthcare professionals,
                            and caregivers involved in the management of this
                            condition. By identifying the stage of CKD and
                            implementing appropriate measures, we can improve
                            the prognosis and quality of life for those affected
                            by this chronic disease. Remember, early detection
                            and timely intervention can make a significant
                            difference in slowing down the progression of CKD
                            and preserving kidney function.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-6">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Understanding of Chronic Kidney Disease
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={ckd}
                              className="img-fluid"
                              alt="chronic-kidney-disease" />
                              <p className="image__description">Image : Understanding Of Chronic Kidney Disease</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Understanding Chronic Kidney Disease: A Journey of
                            Silent Decline
                          </h5>
                          <p>
                            Chronic kidney disease (CKD), also referred to as
                            chronic renal disease, is a condition characterized
                            by the gradual and progressive loss of renal
                            function over a period of months or even years. Like
                            a slow and steady current eroding the strength of a
                            riverbank, CKD quietly impairs the vital work
                            performed by our kidneys, which play a crucial role
                            in maintaining our overall health and well-being. In
                            this exploration, we unravel the intricate tapestry
                            of CKD, from its causes and symptoms to its
                            complications, diagnosis, and treatment.
                          </p>

                          <h6>1. Unraveling the Causes of CKD</h6>
                          <p>
                            CKD can have various underlying causes, each leaving
                            its distinct mark on the intricate symphony of renal
                            function. Diabetes mellitus, a chronic metabolic
                            disorder affecting blood sugar control, stands as
                            one of the prominent culprits behind CKD. High blood
                            pressure, known as hypertension, places relentless
                            strain on the delicate structures within the
                            kidneys, gradually impairing their ability to filter
                            waste and excess fluid. Glomerulonephritis, an
                            inflammation of the kidney's filtering units, joins
                            the chorus of causes, further compromising renal
                            function. Other factors, such as bilateral renal
                            artery stenosis, ischemic nephropathy, hemolytic
                            uremic syndrome, and focal segmental
                            glomerulosclerosis, add their own melancholic notes
                            to this symphony of decline.
                          </p>
                          <h6>
                            2. The Symphony of Symptoms: Unveiling the Signs of
                            CKD
                          </h6>
                          <p>
                            As CKD orchestrates its silent symphony of decline
                            within the body, it reveals itself through a range
                            of symptoms that often go unnoticed until the
                            disease has progressed. Hypertension, a common
                            comorbidity, raises its ominous voice as an early
                            sign of renal distress. Uremia, a condition
                            characterized by the buildup of waste products in
                            the blood, manifests through symptoms like uremic
                            frost, a crystalline frost-like appearance on the
                            skin, and encephalopathy, which causes cognitive
                            impairment. The loss of appetite, known as anorexia,
                            dances in tandem with arrhythmia, an irregular
                            heartbeat, setting a dissonant rhythm within the
                            body. Anemia, characterized by a deficiency in red
                            blood cells, contributes to the symphony,
                            accompanied by the ominous presence of hyperkalemia,
                            an excess of potassium in the blood. The reduced
                            production of erythropoietin (EPO), a hormone
                            responsible for red blood cell production, further
                            complicates the harmonious balance. Fluid volume
                            overload, hypophosphatemia, metabolic acidosis, and
                            iron deficiency add their own layers of complexity
                            to this intricate composition.
                          </p>

                          <h6>3. Complications: The Shadows Cast by CKD</h6>
                          <p>
                            As CKD progresses, it casts its shadows upon the
                            body, creating a host of complications that further
                            challenge the symphony of life. Pulmonary edema, an
                            accumulation of fluid in the lungs, looms as a dire
                            consequence of impaired kidney function.
                            Hyperkalemia continues its disruptive presence,
                            posing a risk of dangerous disturbances in the
                            heart's electrical system. Cardiovascular disease
                            (CVD), a menacing companion of CKD, increases the
                            likelihood of heart-related complications.
                            Osteodystrophy, a disorder affecting bone health,
                            weakens the skeletal structure, while low libido
                            dampens intimate connections. Anemia persists,
                            perpetuating fatigue and reduced vitality, while the
                            central nervous system (CNS) suffers its own toll.
                            The haunting presence of pericarditis, inflammation
                            of the lining around the heart, adds a somber melody
                            to this symphony of complications.
                          </p>

                          <h6>
                            4. Through the Lens of Diagnosis: Unveiling CKD's
                            Secrets
                          </h6>
                          <p>
                            The diagnosis of CKD requires a careful examination
                            through various diagnostic tools and tests.
                            Abdominal ultrasound (USG) acts as a window,
                            offering a visual representation of the kidneys and
                            their structures. Biochemical analysis, a delicate
                            interplay of numbers and markers, provides valuable
                            insights into the body's chemistry and the impact of
                            CKD. In some cases, a renal biopsy, a surgical
                            procedure, becomes necessary to obtain a microscopic
                            glimpse into the kidney's journey, unraveling its
                            hidden truths.
                          </p>

                          <h6>
                            5. Treatment: The Symphony of Restoring Harmony
                          </h6>
                          <p>
                            In the face of CKD's relentless symphony of decline,
                            the realm of treatment seeks to restore harmony and
                            regain control. Managing hyperlipidemia, the
                            presence of high levels of lipids in the blood,
                            becomes a cornerstone in the battle against CKD. The
                            control of blood pressure, through a combination of
                            lifestyle modifications and medications, aims to
                            tame the turbulent waters within. Erythropoietin
                            (EPO) and calcitriol, hormonal agents, awaken the
                            regenerative powers of the body, encouraging the
                            production of red blood cells and maintaining bone
                            health. Intravenous (IV) iron infusions breathe life
                            into the weary spirit, combating the iron deficiency
                            that often accompanies CKD. Phosphate binders step
                            in as guardians of balance, ensuring the proper
                            regulation of phosphate levels. Renal replacement
                            therapy (RRT), in the form of dialysis or
                            transplantation, emerges as a lifeline for those in
                            critical need of support. The possibility of renal
                            transplantation (RT) offers the promise of a new
                            beginning, a chance for the symphony of life to
                            regain its harmonious melody.
                          </p>

                          <h6>6. Conclusion</h6>
                          <p>
                            Chronic kidney disease, known as the silent symphony
                            of decline, weaves its intricate tapestry of loss
                            and struggle within the body. From its underlying
                            causes to the wide array of symptoms, complications,
                            diagnosis, and treatment, CKD paints a somber yet
                            enlightening portrait of the human condition. Let us
                            recognize the resilience of those engaged in this
                            symphony, the unwavering spirit that seeks harmony
                            amidst discord, and the hope that emerges in the
                            face of adversity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-7">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Know About Nephron
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={nephron}
                              className="img-fluid"
                              alt="nephron" />
                              <p className="image__description">Image : Nephron</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Article: What Is a Nephron? Understanding the
                            Filtering Units in the Kidney
                          </h5>
                          <p>
                            The human body is a remarkable system with various
                            organs performing vital functions. One such organ,
                            the kidney, plays a crucial role in maintaining the
                            body's internal balance. Within the kidney, there
                            are numerous filtering units known as nephrons.
                            These nephrons act as the building blocks
                            responsible for the filtration and regulation of our
                            body fluids. In this article, we will explore the
                            structure, functions, and significance of nephrons
                            in detail.
                          </p>

                          <h6>1. Introduction to Nephron</h6>
                          <p>
                            The nephron is the fundamental structural and
                            functional unit of the kidney. Each kidney houses
                            approximately one million nephrons, and together
                            they form the intricate network responsible for
                            maintaining fluid balance and eliminating waste
                            products from the body. Understanding the structure
                            and functions of the nephron is essential in
                            comprehending the kidney's overall role in
                            maintaining homeostasis.
                          </p>
                          <h6>2. Structure of a Nephron</h6>
                          <p>
                            A nephron is a hollow tube about 50 mm in length,
                            consisting of several distinct components. Let's
                            take a closer look at these components:
                          </p>

                          <h6>2.1 Glomerulus</h6>
                          <p>
                            The nephron begins with a specialized structure
                            called the glomerulus. The glomerulus acts as a
                            filter with extremely tiny pores, allowing for
                            selective filtration. This filtration process allows
                            water and small-sized substances to pass through
                            while retaining larger molecules like proteins and
                            blood cells.
                          </p>

                          <h6>2.2 Proximal Convoluted Tubule (PCT)</h6>
                          <p>
                            After filtration in the glomerulus, the filtrate
                            enters the proximal convoluted tubule (PCT). The PCT
                            is responsible for the reabsorption of water and
                            small molecules from the filtrate back into the
                            bloodstream. This reabsorption process ensures that
                            essential substances are retained while waste
                            products continue their journey through the nephron.
                          </p>

                          <h6>2.3 Loop of Henle</h6>
                          <p>
                            The filtrate then moves into the loop of Henle, a
                            U-shaped structure that extends into the medulla of
                            the kidney. The loop of Henle plays a crucial role
                            in establishing a concentration gradient within the
                            kidney, which aids in the reabsorption of water and
                            electrolytes.
                          </p>

                          <h6>2.4 Distal Convoluted Tubule (DCT)</h6>
                          <p>
                            Next, the filtrate passes through the distal
                            convoluted tubule (DCT). The DCT is involved in
                            further reabsorption and secretion processes,
                            contributing to the fine-tuning of electrolyte and
                            acid-base balance in the body.
                          </p>
                          <h6>2.5 Collecting Duct</h6>
                          <p>
                            The final part of the nephron is the collecting
                            duct. The collecting duct receives urine from
                            multiple nephrons and carries it towards the renal
                            pelvis, ultimately leading to the ureter. This duct
                            plays a significant role in determining the final
                            concentration and volume of urine.
                          </p>
                          <h6>3. Functions of Nephron</h6>
                          <p>
                            The nephron serves several crucial functions that
                            contribute to the overall well-being of the body.
                            Let's explore these functions in detail:
                          </p>
                          <h6>3.1 Filtration of Blood</h6>
                          <p>
                            The glomerulus acts as the initial filtration
                            component of the nephron, filtering blood that
                            enters the kidney. This filtration process separates
                            waste products, electrolytes, and water from the
                            bloodstream, allowing further processing in the
                            subsequent nephron components .
                          </p>
                          <h6>3.2 Reabsorption and Secretion</h6>
                          <p>
                            The specialized cells lining the nephron are
                            responsible for the reabsorption of water and small
                            molecules from the filtrate back into the
                            bloodstream. Simultaneously, they secrete waste
                            products into the urine, ensuring their elimination
                            from the body.
                          </p>

                          <h6>3.3 Regulation of Intravascular Volume</h6>
                          <p>
                            One of the nephron's primary functions is to
                            regulate the volume of fluid within the blood
                            vessels. By selectively reabsorbing or excreting
                            water and electrolytes, the nephron helps maintain
                            an optimal intravascular volume, ensuring adequate
                            blood flow to various organs and tissues.
                          </p>
                          <h6>3.4 Maintenance of Osmolality</h6>
                          <p>
                            Osmolality refers to the concentration of solutes in
                            body fluids. The nephron plays a vital role in
                            regulating osmolality by selectively reabsorbing or
                            excreting solutes like sodium, potassium, and
                            chloride. This process helps maintain the body's
                            fluid and electrolyte balance.
                          </p>
                          <h6>3.5 Acid-Base Balance</h6>
                          <p>
                            The nephron contributes significantly to the
                            regulation of the body's acid-base balance. It
                            selectively reabsorbs bicarbonate ions, which act as
                            a buffer to maintain the pH of the blood within a
                            narrow range. This balance is crucial for normal
                            physiological functioning.
                          </p>
                          <h6>3.6 Excretion of Waste Products</h6>
                          <p>
                            The nephron eliminates waste products such as urea,
                            creatinine, and excess ions from the body by
                            excreting them into the urine. This process ensures
                            the removal of harmful substances and helps maintain
                            overall health.
                          </p>
                          <h6>3.7 Urine Formation</h6>
                          <p>
                            Urine formation involves a combination of glomerular
                            ultrafiltration, tubular reabsorption, and tubular
                            secretion. The glomerulus filters the blood,
                            allowing small molecules and water to enter the
                            nephron. As the filtrate moves along the tubular
                            structures, the nephron selectively reabsorbs
                            essential substances back into the bloodstream and
                            secretes waste products into the urine. This
                            intricate process ultimately leads to the formation
                            of urine.
                          </p>
                          <h6>4. Other Roles of Nephron</h6>
                          <p>
                            Apart from its primary functions, the nephron also
                            plays additional roles in the body. These include:
                          </p>
                          <h6>4.1 Fluid Homeostasis</h6>
                          <p>
                            The nephron helps maintain the balance of fluids
                            within the body, ensuring adequate hydration and
                            preventing dehydration or overhydration.
                          </p>
                          <h6>4.2 Bone Metabolism</h6>
                          <p>
                            The nephron contributes to bone health by regulating
                            the levels of calcium and phosphate in the blood.
                            Imbalances in these minerals can lead to conditions
                            like osteoporosis or kidney stones.
                          </p>
                          <h6>4.3 Hematopoiesis</h6>
                          <p>
                            In certain pathological conditions, the nephron can
                            produce erythropoietin, a hormone responsible for
                            stimulating the production of red blood cells in the
                            bone marrow.
                          </p>
                          <h6>5. Conclusion</h6>
                          <p>
                            Nephrons are the intricate filtering units within
                            the kidney that perform essential functions for
                            maintaining overall health. Understanding the
                            structure and functions of nephrons helps us
                            appreciate the vital role the kidney plays in
                            regulating fluid balance, waste elimination, and
                            various physiological processes. By comprehending
                            the significance of nephrons, we can better
                            appreciate the complexity of our body's internal
                            workings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-8">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                          Glomerular Filtration Rate ( GFR )
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={gfr}
                              className="img-fluid"
                              alt="glomerular-filtration-rate" />
                              <p className="image__description">Image : Glomerular Filtration Rate</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                            Understanding What Is GFR and Its Importance in
                            Renal Function Assessment
                          </h5>
                          <p>
                            The process of filtering blood at a microscopic
                            level is a crucial function performed by the
                            kidneys. This filtration is carried out by numerous
                            filtration units known as renal corpuscles, which
                            consist of a glomerulus and a Bowman's capsule. To
                            assess the overall renal function, a global
                            assessment is often done by estimating the rate of
                            filtration, which is referred to as the glomerular
                            filtration rate (GFR). In this article, we will
                            delve deeper into understanding what GFR is and its
                            significance in evaluating kidney function.
                          </p>

                          <h6>1. Introduction</h6>
                          <p>
                            The kidneys play a vital role in maintaining the
                            body's internal environment. They are responsible
                            for filtering waste products, toxins, and excess
                            substances from the bloodstream. GFR serves as a
                            crucial indicator of the kidney's ability to perform
                            this filtration process effectively.
                          </p>
                          <h6>2. Renal Corpuscles and Filtration Units</h6>
                          <p>
                            Renal corpuscles are the fundamental units involved
                            in the filtration of blood. Each renal corpuscle
                            comprises a glomerulus and a Bowman's capsule. The
                            glomerulus acts as a network of tiny blood vessels,
                            while the Bowman's capsule serves as a structure
                            surrounding the glomerulus.
                          </p>

                          <h6>3. Estimating GFR</h6>
                          <p>
                            GFR is a quantitative measurement used to determine
                            the rate at which blood is filtered by the kidneys.
                            It provides valuable information about kidney
                            function and helps diagnose and monitor various
                            renal conditions. Several methods are available for
                            estimating GFR, including blood tests and
                            specialized imaging techniques.
                          </p>

                          <h6>4. Urine Formation in Glomeruli</h6>
                          <p>
                            The initial step of urine formation takes place in
                            the glomeruli. Here, approximately 125 milliliters
                            of fluid are filtered out every minute. This amounts
                            to an astounding 180 liters of fluid being filtered
                            out by the glomeruli in the kidneys over a span of
                            24 hours. This fluid, known as filtrate, contains
                            waste products, toxins, glucose, and other useful
                            substances.
                          </p>

                          <h6>
                            5. Reabsorption in Henle of Loop and Convoluted
                            Tubules
                          </h6>
                          <p>
                            After filtration in the glomeruli, further
                            processing occurs in the Henle of Loop and
                            convoluted tubules. These tubules play a crucial
                            role in selective reabsorption, where essential
                            substances are reabsorbed back into the bloodstream.
                            This process ultimately leads to the production of
                            urine.
                          </p>

                          <h6>6. Urine Production and Waste Removal</h6>
                          <p>
                            Out of the 180 liters of fluid filtered by the
                            kidneys in 24 hours, only about 1.8 liters of urine
                            are excreted. This means that approximately 99% of
                            the fluid is reabsorbed through the renal tubules,
                            leaving behind waste and unwanted substances. The
                            urine produced carries these waste products out of
                            the body, helping to maintain proper bodily
                            functions.
                          </p>
                          <h6>7. Filtration Barrier</h6>
                          <p>
                            During filtration in each glomerulus, only
                            substances with small molecular sizes can diffuse
                            out. Larger molecules such as proteins, red blood
                            cells, white blood cells, and platelets are unable
                            to pass through the tiny holes in the filtration
                            barrier. In cases of kidney disease, the passage of
                            such substances may become possible, indicating a
                            compromised filtration barrier.
                          </p>
                          <h6>8. Factors Affecting GFR</h6>
                          <p>
                            The normal GFR level in males is approximately 125
                            milliliters per minute per 1.73m². However, it is
                            about 10% lower in females. The difference in GFR
                            between genders is influenced by various factors,
                            including hormonal variations. Additionally, the
                            permeability of the filtration barrier plays a
                            significant role in determining GFR.
                          </p>
                          <h6>9. Hydrostatic and Osmotic Forces</h6>
                          <p>
                            The movement of fluid in the glomerulus is regulated
                            by a balance between hydrostatic pressure, which
                            pushes fluid into the Bowman's space, and osmotic
                            forces, which keep fluid in the plasma. This
                            delicate equilibrium is essential for maintaining an
                            optimal GFR and ensuring efficient filtration.
                          </p>
                          <h6>10. Conclusion</h6>
                          <p>
                            In conclusion, understanding the concept of GFR is
                            essential in comprehending the functioning of the
                            kidneys and assessing renal health. GFR serves as a
                            valuable tool in diagnosing and monitoring kidney
                            conditions. By evaluating the filtration of blood
                            and the selective reabsorption processes, medical
                            professionals can gain insights into overall kidney
                            function. Maintaining a healthy GFR is crucial for
                            optimal renal health and the elimination of waste
                            products from the body.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-9">
                    <div className="row gy-4">
                      <div className="col-lg-12 details order-2 order-lg-1">
                        <h3 className="kidney__health__inner__tab__content__title">
                        Peritoneal Dialysis
                        </h3>
                        <div className="kidney__health__innner__tab__contents__image">
                              <img 
                              src={peritoneal_img}
                              className="img-fluid"
                              alt="peritoneal-dialysis" />
                              <p className="image__description">Image : Peritoneal Dialysis</p>
                          </div>
                        <div className="kidney__health__innner__tab__contents">
                          <h5>
                          Understanding Peritoneal Dialysis: A Life-Changing Alternative to Hemodialysis
                          </h5>
                          <h6>1. Introduction</h6>
                          <p>
                          Are you or a loved one in need of renal replacement therapy? If so, peritoneal dialysis (PD) could be the solution you've been searching for. In this article, we will explore the world of peritoneal dialysis, a remarkable treatment that offers patients the opportunity to perform dialysis in the comfort of their own homes. Say goodbye to the burdensome visits to dialysis centers and embrace a more flexible, independent approach to managing kidney failure. Join us as we delve into the fascinating realm of peritoneal dialysis and discover how it can transform lives.

                          </p>
                          <h6>2. The Basics of Peritoneal Dialysis</h6>
                          <h6>2.1 What is Peritoneal Dialysis? ?</h6>
                          <p>
                          Peritoneal dialysis is a type of renal replacement therapy that utilizes the peritoneal membrane, a thin lining surrounding the abdominal cavity, to clean the blood and remove waste products. Unlike hemodialysis, which involves an external machine, peritoneal dialysis is an intracorporeal therapy, meaning it takes place inside the body.
                          </p>

                          <h6>2.2 The Peritoneal Membrane: An Incredible Filter</h6>
                          <p>
                          The peritoneal membrane acts as a dialyzing membrane during peritoneal dialysis. It allows waste products from the body to pass through it and empty into a specially infused fluid called dialysate. This fluid, which is instilled into the peritoneal cavity, facilitates the cleansing process, providing an effective alternative to hemodialysis.
                          </p>

                          <h6>2.3 Learning to Perform PD at Home</h6>
                          <p>
                          One of the key advantages of peritoneal dialysis is that patients can perform the procedure in the comfort of their own homes. With proper training and guidance from healthcare professionals, individuals can learn how to administer peritoneal dialysis themselves, empowering them to take control of their treatment and daily routines.
                          </p>

                          <h6>
                            2.4 Nephrologist Follow-Up: Ensuring Optimal Care
                          </h6>
                          <p>
                          While patients can manage peritoneal dialysis at home, it's essential to maintain regular contact with a nephrologist—a specialist in kidney diseases. Nephrologists play a crucial role in monitoring patients' progress, adjusting treatment plans as needed, and ensuring optimal outcomes.
                          </p>

                          <h6>3. The Intricate Anatomy of the Peritoneal Membrane</h6>
                          <p>
                            Out of the 180 liters of fluid filtered by the
                            kidneys in 24 hours, only about 1.8 liters of urine
                            are excreted. This means that approximately 99% of
                            the fluid is reabsorbed through the renal tubules,
                            leaving behind waste and unwanted substances. The
                            urine produced carries these waste products out of
                            the body, helping to maintain proper bodily
                            functions.
                          </p>
                          <h6>3.1 Layers of the Peritoneal Membrane</h6>
                          <p>
                          The peritoneal membrane consists of two layers: the visceral layer and the parietal layer. These layers work in harmony to create a semipermeable barrier, allowing the exchange of fluids and solutes during peritoneal dialysis.
                          </p>
                          <h6>3.2 Exploring Peritoneal Membrane Anatomy</h6>
                          <p>
                          Did you know that the peritoneal membrane has an impressive size of 1 to 2 square meters? Moreover, it presents an intriguing anatomical difference between males and females. In males, the peritoneal cavity is closed, while in females, it remains open, making peritoneal dialysis an option for both genders.

                          </p>
                          <h6>3.3 The Normal Peritoneal Cavity: A Home for Exudate</h6>
                          <p>
                          Under normal circumstances, the peritoneal cavity contains approximately 100 ml of exudate. This fluid helps maintain the delicate balance necessary for optimal peritoneal dialysis and overall well-being.
                          </p>
                          <h6>4. The Principles Behind Peritoneal Dialysis</h6>
                          <h6>4.1 The Power of Diffusion, Osmosis, and Ultrafiltration</h6>
                          <p>
                          Peritoneal dialysis operates on three essential principles: diffusion, osmosis, and ultrafiltration. Together, these processes enable the removal of waste products and excess fluids from the body, mimicking the natural filtration function of healthy kidneys.
                          </p>
                          <h6>4.2 The Three Phases of the PD Process</h6>
                          <p>
                          Peritoneal dialysis consists of three distinct phases: fill, dwell, and drain. During the fill phase, the dialysate solution is infused into the peritoneal cavity. The dwell phase follows, allowing time for waste products to be exchanged across the peritoneal membrane. Finally, during the drain phase, the used dialysate is drained out of the body.
                          </p>
                          <h6>4.3 Unlocking the Mechanics of PD</h6>
                          <p>
                          How does peritoneal dialysis actually work? The semipermeable and highly vascular peritoneal membrane acts as a filter, facilitating the transfer (diffusion) of toxins from the blood into the dialysate fluid. Simultaneously, fluid removal (ultrafiltration) occurs through osmosis, driven by the osmotic gradient between the hyperosmolar dialysis fluid and the capillary bed.
                          </p>
                          <h6>5 Candidacy for Peritoneal Dialysis</h6>
                          <h6>5.1 Choosing PD as a Renal Replacement Therapy</h6>
                          <p>
                          Peritoneal dialysis is an excellent choice for patients seeking a reliable renal replacement therapy (RRT) option. It offers a practical alternative to hemodialysis and allows individuals to experience greater independence in managing their condition.
                          </p>
                          <h6>5.2 PD for Patients with Hemodialysis Challenges</h6>
                          <p>
                          Patients who face difficulties accessing hemodialysis centers, such as those living in remote areas or with limited mobility, can find peritoneal dialysis to be a life-changing solution. With proper training, these individuals can administer PD in the comfort of their own homes, eliminating the need for regular hospital visits .
                          </p>
                          <h6>5.3 PD as an Option for Transplant Failure and Other Conditions</h6>
                          <p>
                          Peritoneal dialysis also serves as a valuable alternative when renal transplant failure occurs. Additionally, patients with congestive heart failure (CHF) or cardiovascular diseases (CVD) may find peritoneal dialysis to be a suitable treatment option.
                          </p>
                          <h6>5.4 Patient Selection Criteria for PD</h6>
                          <p>
                          When selecting candidates for peritoneal dialysis, several factors come into play. Patients with residual renal function, cardiovascular diseases, congestive heart failure, vascular access failure, as well as geriatric and pediatric populations, may be suitable candidates for PD.
                          </p>
                          <h6>5.5 Exclusion Criteria for PD</h6>
                          <p>
                          While peritoneal dialysis offers many benefits, it may not be appropriate for everyone. Patients with dermatological diseases affecting the abdominal wall, morbid abdominal obesity, multiple abdominal surgeries or adhesions, ostomies, or recurrent hernias may not be eligible for PD due to potential complications .
                          </p>
                          <h6>6. Catheters and Complications in PD</h6>
                          <h6>6.1 Catheters: The Gateway to Peritoneal Dialysis</h6>
                          <p>
                          Catheters play a crucial role in peritoneal dialysis, providing a conduit for the infusion and drainage of dialysis fluid. Several types of catheters are available, including straight, coiled, swan neck, pre-sternal swan neck, toronto western catheters, missouri catheters, and disc catheters.
                          </p>
                          <h6>6.2 Understanding Catheter Components</h6>
                          <p>
                          Catheters come in various configurations, featuring single or double cuffs, elongated shapes, bead or flange configurations, and different types of adaptors, such as plastic or titanium. Understanding these components is essential for ensuring successful peritoneal dialysis.
                          </p>
                          <h6>6.3 Potential Complications and How to Address Them</h6>
                          <p>
                          Like any medical procedure, peritoneal dialysis carries potential risks and complications. Immediate or early complications may include bloody effluent, pain with infusion, exit site leakage, infections, malpositioned catheter tip, or poor fill and drain outcomes. Later complications may involve leaks, excessive granulation tissue, funnel infections, peritonitis, or even bowel perforation.
                          </p>
                          <h6>7. Exploring Peritoneal Dialysis Modalities</h6>
                          <h6>7.1 IPD, CAPD, and CCPD: Different Modalities of PD</h6>
                          <p>
                          Peritoneal dialysis offers various modalities to suit different patients' needs. Intermittent PD (IPD), Continuous Ambulatory Peritoneal Dialysis (CAPD), and Continuous Cyclic Peritoneal Dialysis (CCPD), also known as Automated Peritoneal Dialysis (APD), are some of the available options. Each modality offers unique advantages and considerations.
                          </p>
                          <h6>7.2 PD Equilibration Test (PET): Assessing Membrane Transport</h6>
                          <p>
                          The PD Equilibration Test (PET) is a four-hour study that assesses the transport characteristics of the peritoneal membrane. Typically conducted within the first six weeks of initiating peritoneal dialysis, the PET provides valuable information to tailor treatment plans and ensure optimal outcomes.
                          </p>
                          <h6>7.3 KT/V Test: Measuring Dialysis Adequacy</h6>
                          <p>
                          To determine the adequacy of peritoneal dialysis, the KT/V test is employed. This test utilizes serum values of blood urea nitrogen (BUN) and creatinine to calculate the dose of dialysis required, ensuring that patients receive the appropriate treatment and maintain good overall health.
                          </p>
                          <h6>8. Conclusion</h6>
                          <p>
                          In conclusion, peritoneal dialysis is a remarkable treatment option for individuals with kidney failure, offering a flexible, home-based approach to renal replacement therapy. By leveraging the peritoneal membrane's natural filtration abilities, patients can regain a sense of independence and control over their treatment. However, it's important to remember that peritoneal dialysis is not suitable for everyone, and careful patient selection and monitoring are vital for achieving successful outcomes.
                          </p>
                          <p>
                          Remember, always consult with your healthcare provider for personalized advice and guidance regarding peritoneal dialysis or any medical treatment.
                          </p>
                          <h6 className="text-uppercase">Some Frequently Asked Questions</h6>
                          <h6>1. How long does it take to learn to perform peritoneal dialysis at home? </h6>
                          <p>
                          Learning to perform peritoneal dialysis at home usually takes a few weeks of training and practice under the guidance of healthcare professionals. The duration may vary depending on individual aptitude and the level of support available.
                          </p>
                          <h6>
                          2. Can I switch from hemodialysis to peritoneal dialysis if I have a functioning arteriovenous fistula? 
                          </h6>
                          <p>
                          In some cases, individuals with a functioning arteriovenous fistula may still choose to switch to peritoneal dialysis. It's essential to consult with your healthcare team to determine the most suitable treatment option based on your specific circumstances.
                          </p>
                          <h6>
                          3. Is peritoneal dialysis painful ? 
                          </h6>
                          <p>
                          Peritoneal dialysis is generally well-tolerated and should not cause significant pain. However, some individuals may experience discomfort during the fill or drain phases. It is important to communicate any pain or discomfort to your healthcare provider.
                          </p>
                          <h6>
                          4. Can peritoneal dialysis be performed during travel ? 
                          </h6>
                          <p>
                          ? Yes, peritoneal dialysis can be performed during travel. With proper planning and coordination, individuals on peritoneal dialysis can continue their treatment even when away from home. It's crucial to inform your healthcare team in advance to ensure a smooth travel experience.
                          </p>
                          <h6>
                          5. How often should I undergo peritoneal equilibration tests (PET) ? 
                          </h6>
                          <p>
                          Peritoneal equilibration tests (PET) are typically conducted within the first six weeks of initiating peritoneal dialysis. The exact frequency and timing of subsequent PET tests may vary depending on your healthcare provider's recommendations and your individual needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidneyHealthInner;
