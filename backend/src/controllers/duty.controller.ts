import type { NextFunction, Request, Response } from "express";
import type { IDutyService } from "../interfaces/duty.interface.ts";

export class DutyController {
    private readonly dutyService: IDutyService;

    constructor(dutyService: IDutyService) {
        this.dutyService = dutyService;
    }

    getDuties = async(_req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json(await this.dutyService.getDuties());
        } catch (error) {
            next(error);
        }
    }

    addDuty = async(_req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(201).json(await this.dutyService.addDuty(_req.body));
        } catch (error) {
            next(error);
        }
    }

    updateDuty = async(_req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json(await this.dutyService.updateDuty(_req.params.id, _req.body));
        } catch (error) {
            next(error);
        }
    }

    deleteDuty = async(_req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(204).json(await this.dutyService.deleteDuty(_req.body));
        } catch (error) {
            next(error);
        }
    }
}