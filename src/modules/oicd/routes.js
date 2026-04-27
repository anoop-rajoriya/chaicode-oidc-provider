import { Router } from "express";
import * as c from "./controllers.js"
const router = Router()

router.get("/openid-configuration", c.getOpenIdConfig)
router.get("/jwks.json", c.getJwks)

export default router