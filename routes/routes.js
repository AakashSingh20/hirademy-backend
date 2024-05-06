const express = require("express");
const router = express.Router();
const {
  CreateAssistant,
  GetAll,
  GetAssistant,
  UpdateAssistant,
  DeleteAssistant,
} = require("../controllers/controller.js");

router.post("/assistant", CreateAssistant);
router.get("/assistant", GetAll);
router.get("/assistant/:id", GetAssistant);
router.put("/assistant/:id", UpdateAssistant);
router.delete("/assistant/:id", DeleteAssistant);

module.exports = router;
