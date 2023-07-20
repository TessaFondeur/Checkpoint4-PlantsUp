const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const plantControllers = require("./controllers/plantControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

router.get("/plant", plantControllers.browse);
router.get("/plant/:id", plantControllers.read);
router.put("/plant/:id", plantControllers.edit);
router.post("/plant", plantControllers.add);
router.delete("/plant/:id", plantControllers.destroy);

module.exports = router;
