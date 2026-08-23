import { DutyController } from "../controllers/duty.controller.ts";
import { pool } from "../database/postgre.ts";
import { DutyRepository } from "../repositories/duty.repository.ts";
import { DutyService } from "../services/duty.service.ts";

const dutyRepository = new DutyRepository(pool);
const dutyService = new DutyService(dutyRepository);
export const dutyController = new DutyController(dutyService);