import type { IDutyRepository, IDutyService } from "../interfaces/duty.interface";
import { BadRequestError, NotFoundError } from "../middlewares/error.middleware.ts";
import type { Duty, UpdateDutyDTO } from "../types/duty.types";
import { randomUUID } from "node:crypto";

export class DutyService implements IDutyService {
    private readonly dutyRepository: IDutyRepository;

    constructor(dutyRepository: IDutyRepository) { this.dutyRepository = dutyRepository }

    async getDuties(): Promise<Duty[]> {
        return await this.dutyRepository.getDuties();
    }
    async addDuty(name: string): Promise<Duty> {
        if (!name) throw new BadRequestError("Missed name.");

        return await this.dutyRepository.addDuty({"id": randomUUID(), name});
    }
    async updateDuty(id: string, data: UpdateDutyDTO): Promise<Duty> {
        if (!id) throw new BadRequestError("Missed ID url param.");

        return await this.dutyRepository.updateDuty(id, data);
    }
    async deleteDuty(id: string): Promise<void> {
        if (!id) throw new BadRequestError("Missed ID url param.");

        const result = await this.dutyRepository.deleteDuty(id);

        if (!result) throw new NotFoundError("Duty not found.");
    }
}