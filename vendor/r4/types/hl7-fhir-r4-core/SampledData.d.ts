/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { positiveInt } from "./positiveInt";
import { SimpleQuantity } from "./SimpleQuantity";
import { Element } from "./Element";
import { decimal } from "./decimal";
/** Base StructureDefinition for SampledData Type: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
export interface SampledData extends Element {
    _period?: Element;
    _data?: Element;
    /** Upper limit of detection */
    upperLimit?: decimal;
    _lowerLimit?: Element;
    /** Lower limit of detection */
    lowerLimit?: decimal;
    _factor?: Element;
    _upperLimit?: Element;
    /** Number of sample points at each time point */
    dimensions: positiveInt;
    /** Multiply data by this before adding to origin */
    factor?: decimal;
    /** Zero value and units */
    origin: SimpleQuantity;
    /** Number of milliseconds between samples */
    period: decimal;
    _dimensions?: Element;
    /** Decimal values with spaces, or "E" | "U" | "L" */
    data?: string;
}