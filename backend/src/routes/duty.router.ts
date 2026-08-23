import { Router } from "express";

const router = Router();

router.get("/", async (req, res)=> {
    res.json({"estado": "OK", "data": {}});
});

export default router;