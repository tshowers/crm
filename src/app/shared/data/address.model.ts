export interface Address {
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    province: string;
    zipCode: string;
    country?: string;
    county?: string;
    addressType?: string;
}