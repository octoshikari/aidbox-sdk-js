/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { dateTime } from "./dateTime";
import { Dosage } from "./Dosage";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order. */
export interface MedicationDispense extends DomainResource {
    _whenPrepared?: Element;
    statusReasonReference?: Reference<"DetectedIssue">;
    /** Type of medication dispense */
    category?: CodeableConcept;
    /** When product was given out */
    whenHandedOver?: dateTime;
    /** When product was packaged and reviewed */
    whenPrepared?: dateTime;
    /** A list of relevant lifecycle events */
    eventHistory?: Array<Reference>;
    /** Whether a substitution was performed on the dispense */
    substitution?: MedicationDispenseSubstitution;
    /** Clinical issue with action */
    detectedIssue?: Array<Reference>;
    _status?: Element;
    medicationCodeableConcept: CodeableConcept;
    /** Trial fill, partial fill, emergency fill, etc. */
    type?: CodeableConcept;
    /** Information about the dispense */
    note?: Array<Annotation>;
    statusReasonCodeableConcept?: CodeableConcept;
    /** Information that supports the dispensing of the medication */
    supportingInformation?: Array<Reference>;
    /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | declined | unknown */
    status: code;
    /** How the medication is to be used by the patient or administered by the caregiver */
    dosageInstruction?: Array<Dosage>;
    /** Amount of medication expressed as a timing amount */
    daysSupply?: SimpleQuantity;
    /** External identifier */
    identifier?: Array<Identifier>;
    /** Encounter / Episode associated with event */
    context?: Reference<"EpisodeOfCare" | "Encounter">;
    medicationReference: Reference<"Medication">;
    /** Amount dispensed */
    quantity?: SimpleQuantity;
    /** Event that dispense is part of */
    partOf?: Array<Reference>;
    _whenHandedOver?: Element;
    /** Where the dispense occurred */
    location?: Reference<"Location">;
    /** Medication order that authorizes the dispense */
    authorizingPrescription?: Array<Reference>;
    /** Who collected the medication */
    receiver?: Array<Reference>;
    /** Who the dispense is for */
    subject?: Reference<"Patient" | "Group">;
    /** Where the medication was sent */
    destination?: Reference<"Location">;
    /** Who performed event */
    performer?: Array<MedicationDispensePerformer>;
}
/** Whether a substitution was performed on the dispense */
export interface MedicationDispenseSubstitution extends BackboneElement {
    /** Whether a substitution was or was not performed on the dispense */
    wasSubstituted: boolean;
    _wasSubstituted?: Element;
    /** Code signifying whether a different drug was dispensed from what was prescribed */
    type?: CodeableConcept;
    /** Why was substitution made */
    reason?: Array<CodeableConcept>;
    /** Who is responsible for the substitution */
    responsibleParty?: Array<Reference>;
}
/** Who performed event */
export interface MedicationDispensePerformer extends BackboneElement {
    /** Who performed the dispense and what they did */
    function?: CodeableConcept;
    /** Individual who was performing */
    actor: Reference<"Patient" | "PractitionerRole" | "Organization" | "Device" | "Practitioner" | "RelatedPerson">;
}