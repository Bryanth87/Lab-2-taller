import { Router } from "express";
import { saveAppointment, updateAppointment, cancellAppointment, getAppointmentByUser } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator, getAppointmentByUserValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.patch("/updateAppointment/:id", updateAppointmentValidator, updateAppointment);
router.get("/getAppointmentByUser/:uid", getAppointmentByUserValidator, getAppointmentByUser);
router.patch("/cancellAppointment/:id", cancellAppointment);

export default router;  