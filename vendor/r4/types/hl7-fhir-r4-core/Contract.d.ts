/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { unsignedInt } from "./unsignedInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { uri } from "./uri";
import { Coding } from "./Coding";
import { dateTime } from "./dateTime";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { Quantity } from "./Quantity";
import { time } from "./time";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { Money } from "./Money";
import { date } from "./date";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface Contract extends DomainResource {
    _issued?: Element;
    legallyBindingAttachment?: Attachment;
    /** Source Contract Definition */
    instantiatesCanonical?: Reference<"Contract">;
    /** External Contract Definition */
    instantiatesUri?: uri;
    legallyBindingReference?: Reference<"QuestionnaireResponse" | "Composition" | "Contract" | "DocumentReference">;
    /** Specific Location */
    site?: Array<Reference>;
    /** Key event in Contract History */
    relevantHistory?: Array<Reference>;
    /** Extra Information */
    supportingInfo?: Array<Reference>;
    /** Effective time */
    applies?: Period;
    /** Computer friendly designation */
    name?: string;
    /** Authority under which this Contract has standing */
    authority?: Array<Reference>;
    /** Computable Contract Language */
    rule?: Array<ContractRule>;
    _status?: Element;
    /** Legal instrument category */
    type?: CodeableConcept;
    /** Contract Legal Language */
    legal?: Array<ContractLegal>;
    /** Content derived from the basal information */
    contentDerivative?: CodeableConcept;
    topicCodeableConcept?: CodeableConcept;
    /** Negotiation status */
    legalState?: CodeableConcept;
    /** Contract precursor content */
    contentDefinition?: ContractContentDefinition;
    /** Range of Legal Concerns */
    scope?: CodeableConcept;
    /** Human Friendly name */
    title?: string;
    /** Contract Signatory */
    signer?: Array<ContractSigner>;
    /** Source of Contract */
    author?: Reference<"Patient" | "PractitionerRole" | "Organization" | "Practitioner">;
    term?: Array<ContractTerm>;
    /** Contract Friendly Language */
    friendly?: Array<ContractFriendly>;
    /** Acronym or short name */
    alias?: Array<string>;
    /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated */
    status?: code;
    /** Subordinate Friendly name */
    subtitle?: string;
    _name?: Element;
    topicReference?: Reference;
    /** Basal definition */
    url?: uri;
    /** Contract number */
    identifier?: Array<Identifier>;
    _subtitle?: Element;
    /** Contract cessation cause */
    expirationType?: CodeableConcept;
    /** When this Contract was issued */
    issued?: dateTime;
    _title?: Element;
    /** A sphere of control governed by an authoritative jurisdiction, organization, or person */
    domain?: Array<Reference>;
    /** Subtype within the context of type */
    subType?: Array<CodeableConcept>;
    _alias?: Array<Element>;
    /** Business edition */
    version?: string;
    _version?: Element;
    /** Contract Target Entity */
    subject?: Array<Reference>;
    _url?: Element;
    _instantiatesUri?: Element;
}
/** Computable Contract Language */
export interface ContractRule extends BackboneElement {
    contentAttachment: Attachment;
    contentReference: Reference<"DocumentReference">;
}
/** Entity of the action */
export interface ContractTermSubject extends BackboneElement {
    /** Entity of the action */
    reference: Array<Reference>;
    /** Role type of the agent */
    role?: CodeableConcept;
}
/** Circumstance of the asset */
export interface ContractTermContext extends BackboneElement {
    /** Creator,custodian or owner */
    reference?: Reference;
    /** Codeable asset context */
    code?: Array<CodeableConcept>;
    /** Context description */
    text?: string;
    _text?: Element;
}
/** Contract Legal Language */
export interface ContractLegal extends BackboneElement {
    contentAttachment: Attachment;
    contentReference: Reference<"QuestionnaireResponse" | "Composition" | "DocumentReference">;
}
/** Contract precursor content */
export interface ContractContentDefinition extends BackboneElement {
    /** Publisher Entity */
    publisher?: Reference<"PractitionerRole" | "Organization" | "Practitioner">;
    /** Publication Ownership */
    copyright?: markdown;
    /** Content structure and use */
    type: CodeableConcept;
    _publicationStatus?: Element;
    _publicationDate?: Element;
    /** amended | appended | cancelled | disputed | entered-in-error | executable | executed | negotiable | offered | policy | rejected | renewed | revoked | resolved | terminated */
    publicationStatus: code;
    _copyright?: Element;
    /** Detailed Content Type Definition */
    subType?: CodeableConcept;
    /** When published */
    publicationDate?: dateTime;
}
/** Contract Term List */
export interface ContractTerm extends BackboneElement {
    _issued?: Element;
    /** Nested Contract Term Group */
    group?: Array<ContractTerm>;
    /** Contract Term Effective Time */
    applies?: Period;
    /** Context of the Contract term */
    offer: ContractTermOffer;
    /** Contract Term Type or Form */
    type?: CodeableConcept;
    topicCodeableConcept?: CodeableConcept;
    topicReference?: Reference;
    /** Contract Term Number */
    identifier?: Identifier;
    _text?: Element;
    /** Entity being ascribed responsibility */
    action?: Array<ContractTermAction>;
    /** Contract Term Issue Date Time */
    issued?: dateTime;
    /** Contract Term Type specific classification */
    subType?: CodeableConcept;
    /** Protection for the Term */
    securityLabel?: Array<ContractTermSecurityLabel>;
    /** Contract Term Asset List */
    asset?: Array<ContractTermAsset>;
    /** Term Statement */
    text?: string;
}
/** Contract Signatory */
export interface ContractSigner extends BackboneElement {
    /** Contract Signatory Role */
    type: Coding;
    /** Contract Signatory Party */
    party: Reference<"Patient" | "PractitionerRole" | "Organization" | "Practitioner" | "RelatedPerson">;
    /** Contract Documentation Signature */
    signature: Array<Signature>;
}
/** Response to offer text */
export interface ContractTermOfferAnswer extends BackboneElement {
    _valueUri: Element;
    _valueBoolean: Element;
    valueReference: Reference;
    valueUri: uri;
    valueTime: time;
    valueDecimal: decimal;
    _valueDecimal: Element;
    _valueString: Element;
    valueQuantity: Quantity;
    valueString: string;
    valueBoolean: boolean;
    valueDateTime: dateTime;
    valueDate: date;
    valueCoding: Coding;
    _valueDateTime: Element;
    _valueTime: Element;
    _valueDate: Element;
    valueInteger: integer;
    valueAttachment: Attachment;
    _valueInteger: Element;
}
/** Protection for the Term */
export interface ContractTermSecurityLabel extends BackboneElement {
    /** Link to Security Labels */
    number?: Array<unsignedInt>;
    _number?: Array<Element>;
    /** Confidentiality Protection */
    classification: Coding;
    /** Applicable Policy */
    category?: Array<Coding>;
    /** Handling Instructions */
    control?: Array<Coding>;
}
/** Offer Recipient */
export interface ContractTermParty extends BackboneElement {
    /** Referenced entity */
    reference: Array<Reference>;
    /** Participant engagement type */
    role: CodeableConcept;
}
/** Contract Term Asset List */
export interface ContractTermAsset extends BackboneElement {
    /** Asset availability types */
    periodType?: Array<CodeableConcept>;
    _securityLabelNumber?: Array<Element>;
    /** Time period */
    usePeriod?: Array<Period>;
    /** Pointer to asset text */
    linkId?: Array<string>;
    /** Kinship of the asset */
    relationship?: Coding;
    /** Asset category */
    type?: Array<CodeableConcept>;
    _linkId?: Array<Element>;
    /** Range of asset */
    scope?: CodeableConcept;
    /** Asset restriction numbers */
    securityLabelNumber?: Array<unsignedInt>;
    _condition?: Element;
    /** Associated entities */
    typeReference?: Array<Reference>;
    /** Quality desctiption of asset */
    condition?: string;
    /** Response to assets */
    answer?: Array<ContractTermOfferAnswer>;
    _text?: Element;
    /** Circumstance of the asset */
    context?: Array<ContractTermContext>;
    /** Time period of the asset */
    period?: Array<Period>;
    /** Contract Valued Item List */
    valuedItem?: Array<ContractTermValuedItem>;
    /** Asset sub-category */
    subtype?: Array<CodeableConcept>;
    /** Asset clause or question text */
    text?: string;
}
/** Context of the Contract term */
export interface ContractTermOffer extends BackboneElement {
    /** Offer Recipient */
    party?: Array<ContractTermParty>;
    _securityLabelNumber?: Array<Element>;
    /** Pointer to text */
    linkId?: Array<string>;
    /** How decision is conveyed */
    decisionMode?: Array<CodeableConcept>;
    /** Contract Offer Type or Form */
    type?: CodeableConcept;
    /** Negotiable offer asset */
    topic?: Reference;
    _linkId?: Array<Element>;
    /** Offer restriction numbers */
    securityLabelNumber?: Array<unsignedInt>;
    answer?: Array<ContractTermOfferAnswer>;
    /** Offer business ID */
    identifier?: Array<Identifier>;
    _text?: Element;
    /** Accepting party choice */
    decision?: CodeableConcept;
    /** Human readable offer text */
    text?: string;
}
/** Contract Valued Item List */
export interface ContractTermValuedItem extends BackboneElement {
    _securityLabelNumber?: Array<Element>;
    /** Pointer to specific item */
    linkId?: Array<string>;
    _effectiveTime?: Element;
    /** Terms of valuation */
    payment?: string;
    _factor?: Element;
    /** Who will receive payment */
    recipient?: Reference<"Patient" | "PractitionerRole" | "Organization" | "Practitioner" | "RelatedPerson">;
    /** Total Contract Valued Item Value */
    net?: Money;
    /** Contract Valued Item Difficulty Scaling Factor */
    points?: decimal;
    _linkId?: Array<Element>;
    /** Who will make payment */
    responsible?: Reference<"Patient" | "PractitionerRole" | "Organization" | "Practitioner" | "RelatedPerson">;
    _points?: Element;
    /** Security Labels that define affected terms */
    securityLabelNumber?: Array<unsignedInt>;
    /** Contract Valued Item Price Scaling Factor */
    factor?: decimal;
    /** When payment is due */
    paymentDate?: dateTime;
    entityCodeableConcept?: CodeableConcept;
    /** Contract Valued Item Number */
    identifier?: Identifier;
    _paymentDate?: Element;
    /** Contract Valued Item Effective Tiem */
    effectiveTime?: dateTime;
    /** Count of Contract Valued Items */
    quantity?: SimpleQuantity;
    _payment?: Element;
    /** Contract Valued Item fee, charge, or cost */
    unitPrice?: Money;
    entityReference?: Reference;
}
/** Contract Friendly Language */
export interface ContractFriendly extends BackboneElement {
    contentAttachment: Attachment;
    contentReference: Reference<"QuestionnaireResponse" | "Composition" | "DocumentReference">;
}
/** Entity being ascribed responsibility */
export interface ContractTermAction extends BackboneElement {
    /** Pointer to specific item */
    requesterLinkId?: Array<string>;
    /** Kind of service performer */
    performerType?: Array<CodeableConcept>;
    _securityLabelNumber?: Array<Element>;
    /** Pointer to specific item */
    linkId?: Array<string>;
    /** Competency of the performer */
    performerRole?: CodeableConcept;
    _contextLinkId?: Array<Element>;
    _performerLinkId?: Array<Element>;
    _reasonLinkId?: Array<Element>;
    /** Pointer to specific item */
    reasonLinkId?: Array<string>;
    _doNotPerform?: Element;
    /** Why is action (not) needed? */
    reasonCode?: Array<CodeableConcept>;
    /** Type or form of the action */
    type: CodeableConcept;
    _linkId?: Array<Element>;
    occurrenceTiming?: Timing;
    /** Comments about the action */
    note?: Array<Annotation>;
    _requesterLinkId?: Array<Element>;
    /** Why action is to be performed */
    reason?: Array<string>;
    /** Who asked for action */
    requester?: Array<Reference>;
    /** Action restriction numbers */
    securityLabelNumber?: Array<unsignedInt>;
    occurrencePeriod?: Period;
    /** State of the action */
    status: CodeableConcept;
    /** True if the term prohibits the  action */
    doNotPerform?: boolean;
    _reason?: Array<Element>;
    /** Episode associated with action */
    context?: Reference<"EpisodeOfCare" | "Encounter">;
    /** Purpose for the Contract Term Action */
    intent: CodeableConcept;
    /** Pointer to specific item */
    performerLinkId?: Array<string>;
    occurrenceDateTime?: dateTime;
    /** Entity of the action */
    subject?: Array<ContractTermSubject>;
    /** Actor that wil execute (or not) the action */
    performer?: Reference<"CareTeam" | "Patient" | "PractitionerRole" | "Organization" | "Device" | "Location" | "Substance" | "Practitioner" | "RelatedPerson">;
    /** Pointer to specific item */
    contextLinkId?: Array<string>;
    /** Why is action (not) needed? */
    reasonReference?: Array<Reference>;
    _occurrenceDateTime?: Element;
}