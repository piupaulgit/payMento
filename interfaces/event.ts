import { IMemeber } from "./member";

export enum IStatus {
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED"
}
export interface IEventList {
    name: String,
    shortNote?: string,
    createdBy: String,
    date: string,
    group: IMemeber[],
    image?: string,
    status: IStatus
}