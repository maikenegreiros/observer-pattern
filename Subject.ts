import { Observer } from "./Observer"
export interface Subject
{
    attach(Observer: Observer): this
    detach(Observer: Observer): this
    notify(data: any): this
}
