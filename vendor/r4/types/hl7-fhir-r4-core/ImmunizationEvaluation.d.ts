/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { positiveInt } from "./positiveInt";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface ImmunizationEvaluation extends DomainResource {
    /** Who this evaluation is for */
    patient: Reference<"Patient">;
    /** Evaluation notes */
    description?: string;
    seriesDosesPositiveInt?: positiveInt;
    /** Date evaluation was performed */
    date?: dateTime;
    doseNumberPositiveInt?: positiveInt;
    _doseNumberString?: Element;
    /** Name of vaccine series */
    series?: string;
    _date?: Element;
    /** Who is responsible for publishing the recommendations */
    authority?: Reference<"Organization">;
    _status?: Element;
    _doseNumberPositiveInt?: Element;
    doseNumberString?: string;
    seriesDosesString?: string;
    _description?: Element;
    /** Reason for the dose status */
    doseStatusReason?: Array<CodeableConcept>;
    /** Immunization being evaluated */
    immunizationEvent: Reference<"Immunization">;
    _seriesDosesString?: Element;
    /** completed | entered-in-error */
    status: code;
    /** Business identifier */
    identifier?: Array<Identifier>;
    /** Evaluation target disease */
    targetDisease: CodeableConcept;
    /** Status of the dose relative to published recommendations */
    doseStatus: CodeableConcept;
    _series?: Element;
    _seriesDosesPositiveInt?: Element;
}