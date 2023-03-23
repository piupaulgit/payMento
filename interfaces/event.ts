import { IMemeber } from "./member";

export enum IStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
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

export interface IItem {
    title: string,
    value: number,
    spentBy: string,
    members: string[],
    date: string,
    status: IStatus
}