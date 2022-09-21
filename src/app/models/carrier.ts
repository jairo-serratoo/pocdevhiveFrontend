import { ICarrier } from "../interfaces/icarrier"

export class Carrier implements ICarrier {
    id!: string
    appointmentId!: string
    name!: string
    lastName!: string
    mail!: string
    phoneNumber!: string
    transportType!: string
    companyName!: string
    state!: string
    latitude!: string
    longitude!: string
}
