import { Router } from "express";
import { DutyController } from "../controllers/duty.controller.ts";

const router = Router();
const dutyController = new DutyController;

router.get("/", dutyController.getDuties);
router.post("/", dutyController.addDuty);
router.put("/:id", dutyController.addDuty);
router.delete("/:id", dutyController.deleteDuty);

export default router;