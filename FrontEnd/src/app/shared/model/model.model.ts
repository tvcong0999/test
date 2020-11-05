export class TransportRequestInfor {
    refNo: string;
    placeFrom: string;
    placeTo: string;
    excutionDate: Date;
    driverName: string;
    licensePlate: string;
}
export class Surcharge{

    image: File;
    name: string;
    numContact: string;
    taxCode: string;
    price: string;
    currency: string;
    includeVAT: string;
    VATrole: string;
}
export class ListSurchage{
    id: string;
    chargeName_VN: string;
    chargeName_EN: string;
    shipmentTypeID:string;
    userCreated:string;
    datetimeCreate:string;
    inActive: boolean;
    inActiveOn: Date;
    automaticallyGenerated: boolean;
}
export class InforSurcharge{
    taxCode: string;
    ticketNumber: string;
    price: string;
}