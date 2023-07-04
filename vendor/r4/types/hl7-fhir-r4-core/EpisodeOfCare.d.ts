/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { positiveInt } from "./positiveInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface EpisodeOfCare extends DomainResource {
    /** The patient who is the focus of this episode of care */
    patient: Reference<"Patient">;
    /** The list of diagnosis relevant to this episode of care */
    diagnosis?: Array<EpisodeOfCareDiagnosis>;
    /** Organization that assumes care */
    managingOrganization?: Reference<"Organization">;
    _status?: Element;
    /** Type/class  - e.g. specialist referral, disease management */
    type?: Array<CodeableConcept>;
    /** The set of accounts that may be used for billing for this EpisodeOfCare */
    account?: Array<Reference>;
    /** Originating Referral Request(s) */
    referralRequest?: Array<Reference>;
    /** Other practitioners facilitating this episode of care */
    team?: Array<Reference>;
    /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
    status: code;
    /** Business Identifier(s) relevant for this EpisodeOfCare */
    identifier?: Array<Identifier>;
    /** Interval during responsibility is assumed */
    period?: Period;
    /** Care manager/care coordinator for the patient */
    careManager?: Reference<"PractitionerRole" | "Practitioner">;
    /** Past list of status codes (the current status may be included to cover the start date of the status) */
    statusHistory?: Array<EpisodeOfCareStatusHistory>;
}
/** The list of diagnosis relevant to this episode of care */
export interface EpisodeOfCareDiagnosis extends BackboneElement {
    /** Conditions/problems/diagnoses this episode of care is for */
    condition: Reference<"Condition">;
    /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
    role?: CodeableConcept;
    /** Ranking of the diagnosis (for each role type) */
    rank?: positiveInt;
    _rank?: Element;
}
/** Past list of status codes (the current status may be included to cover the start date of the status) */
export interface EpisodeOfCareStatusHistory extends BackboneElement {
    /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
    status: code;
    _status?: Element;
    /** Duration the EpisodeOfCare was in the specified status */
    period: Period;
}