import { Router } from "express";
import { DutyController } from "../controllers/duty.controller.ts";
import { DutyService } from "../services/duty.service.ts";

const router = Router();
const dutyService = new DutyService();
const dutyController = new DutyController(dutyService);

router.get("/", dutyController.getDuties);
router.post("/", dutyController.addDuty);
router.put("/:id", dutyController.addDuty);
router.delete("/:id", dutyController.deleteDuty);

export default router;