import type { CreateDutyDTO, Duty, UpdateDutyDTO } from "../types/duty.types.ts";

export interface IDutyService {
    getDuties(): Promise<Duty[]>;
    addDuty(data: any): Promise<Duty>; // TODO: Update this data with duty create DTO
    updateDuty(id: string, data: any): Promise<Duty>; // TODO: Update this data with duty update DTO
    deleteDuty(id: string): Promise<boolean>;
}

export interface IDutyRepository {
    getDuties(): Promise<Duty[]>;
    addDuty(data: CreateDutyDTO): Promise<Duty>;
    updateDuty(data: UpdateDutyDTO): Promise<Duty>;
    deleteDuty(id: string): Promise<boolean>;
}