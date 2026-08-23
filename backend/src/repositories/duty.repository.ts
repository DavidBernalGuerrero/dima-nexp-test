import { IDutyRepository } from "../interfaces/duty.interface.ts";
import { Duty, CreateDutyDTO, UpdateDutyDTO } from "../types/duty.types.ts";

export class DutyRepository implements IDutyRepository {
    getDuties(): Promise<Duty[]> {
        throw new Error("Method not implemented.");
    }
    addDuty(data: CreateDutyDTO): Promise<Duty> {
        throw new Error("Method not implemented.");
    }
    updateDuty(data: UpdateDutyDTO): Promise<Duty> {
        throw new Error("Method not implemented.");
    }
    deleteDuty(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}