import type { IDutyRepository, IDutyService } from "../interfaces/duty.interface";
import type { Duty, UpdateDutyDTO } from "../types/duty.types";
import { randomUUID } from "node:crypto";

export class DutyService implements IDutyService {
    private readonly dutyRepository: IDutyRepository;

    constructor(dutyRepository: IDutyRepository) { this.dutyRepository = dutyRepository }

    async getDuties(): Promise<Duty[]> {
        return await this.dutyRepository.getDuties();
    }
    async addDuty(name: string): Promise<Duty> {
        return await this.dutyRepository.addDuty({"id": randomUUID(), name});
    }
    async updateDuty(id: string, data: UpdateDutyDTO): Promise<Duty> {
        if (!id) throw new Error("Missed ID url param.");

        return await this.dutyRepository.updateDuty(id, data);
    }
    async deleteDuty(id: string): Promise<void> {
        if (!id) throw new Error("Missed ID url param.");

        const result = await this.dutyRepository.deleteDuty(id);

        console.log("Eliminado: ", result);

        if (!result) throw new Error("Duty not found.");
    }
}