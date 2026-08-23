import { Router } from "express";
import { dutyController } from "../module/duty.module.ts";

const router = Router();

router.get("/", dutyController.getDuties);
router.post("/", dutyController.addDuty);
router.put("/:id", dutyController.updateDuty);
router.delete("/:id", dutyController.deleteDuty);

export default router;