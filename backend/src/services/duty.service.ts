import type { IDutyService } from "../interfaces/duty.interface";
import type { Duty } from "../types/duty.types";

export class DutyService implements IDutyService {
    getDuties(): Promise<Duty[]> {
        throw new Error("Method not implemented.");
    }
    addDuty(data: any): Promise<Duty> {
        throw new Error("Method not implemented.");
    }
    updateDuty(id: string, data: any): Promise<Duty> {
        throw new Error("Method not implemented.");
    }
    deleteDuty(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}