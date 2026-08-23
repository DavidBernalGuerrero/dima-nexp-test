import type { CreateDutyDTO, Duty, UpdateDutyDTO } from "../types/duty.types.ts";

export interface IDutyService {
    getDuties(): Promise<Duty[]>;
    addDuty(name: string): Promise<Duty>;
    updateDuty(id: string, data: CreateDutyDTO): Promise<Duty>;
    deleteDuty(id: string): Promise<void>;
}

export interface IDutyRepository {
    getDuties(): Promise<Duty[]>;
    addDuty(data: CreateDutyDTO): Promise<Duty>;
    updateDuty(id: string, data: UpdateDutyDTO): Promise<Duty>;
    deleteDuty(id: string): Promise<boolean>;
}