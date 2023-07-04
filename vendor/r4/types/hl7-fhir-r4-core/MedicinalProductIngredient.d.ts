/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { DomainResource } from "./DomainResource";
import { Ratio } from "./Ratio";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** An ingredient of a manufactured item or pharmaceutical product. */
export interface MedicinalProductIngredient extends DomainResource {
    /** Identifier for the ingredient */
    identifier?: Identifier;
    /** Ingredient role e.g. Active ingredient, excipient */
    role: CodeableConcept;
    /** If the ingredient is a known or suspected allergen */
    allergenicIndicator?: boolean;
    _allergenicIndicator?: Element;
    /** Manufacturer of this Ingredient */
    manufacturer?: Array<Reference>;
    /** A specified substance that comprises this ingredient */
    specifiedSubstance?: Array<MedicinalProductIngredientSpecifiedSubstance>;
    /** The ingredient substance */
    substance?: MedicinalProductIngredientSubstance;
}
/** A specified substance that comprises this ingredient */
export interface MedicinalProductIngredientSpecifiedSubstance extends BackboneElement {
    /** The specified substance */
    code: CodeableConcept;
    /** The group of specified substance, e.g. group 1 to 4 */
    group: CodeableConcept;
    /** Confidentiality level of the specified substance as the ingredient */
    confidentiality?: CodeableConcept;
    strength?: Array<MedicinalProductIngredientSpecifiedSubstanceStrength>;
}
/** The ingredient substance */
export interface MedicinalProductIngredientSubstance extends BackboneElement {
    /** The ingredient substance */
    code: CodeableConcept;
    /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
    strength?: Array<MedicinalProductIngredientSpecifiedSubstanceStrength>;
}
/** Strength expressed in terms of a reference substance */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends BackboneElement {
    /** Relevant reference substance */
    substance?: CodeableConcept;
    /** Strength expressed in terms of a reference substance */
    strength: Ratio;
    /** Strength expressed in terms of a reference substance */
    strengthLowLimit?: Ratio;
    /** For when strength is measured at a particular point or distance */
    measurementPoint?: string;
    _measurementPoint?: Element;
    /** The country or countries for which the strength range applies */
    country?: Array<CodeableConcept>;
}
/** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
export interface MedicinalProductIngredientSpecifiedSubstanceStrength extends BackboneElement {
    /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item */
    presentation: Ratio;
    /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit */
    presentationLowLimit?: Ratio;
    /** The strength per unitary volume (or mass) */
    concentration?: Ratio;
    /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit */
    concentrationLowLimit?: Ratio;
    /** For when strength is measured at a particular point or distance */
    measurementPoint?: string;
    _measurementPoint?: Element;
    /** The country or countries for which the strength range applies */
    country?: Array<CodeableConcept>;
    /** Strength expressed in terms of a reference substance */
    referenceStrength?: Array<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength>;
}