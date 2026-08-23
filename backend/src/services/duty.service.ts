import type { IDutyRepository, IDutyService } from "../interfaces/duty.interface";
import type { Duty } from "../types/duty.types";

export class DutyService implements IDutyService {
    private readonly dutyRepository: IDutyRepository;

    constructor(dutyRepository: IDutyRepository) { this.dutyRepository = dutyRepository }

    getDuties(): Promise<Duty[]> {
        return this.dutyRepository.getDuties();
    }
    addDuty(data: any): Promise<Duty> {
        return this.dutyRepository.addDuty(data);
    }
    updateDuty(id: string, data: any): Promise<Duty> {
        if (!id) throw new Error("Method not implemented.");

        return this.dutyRepository.updateDuty(data);
    }
    deleteDuty(id: string): Promise<boolean> {
        if (!id) throw new Error("Method not implemented.");

        return this.dutyRepository.deleteDuty(id);
    }
}