const router = require("express").Router();

const { policeCheck } = require("../../middleware");

const categoryController = require("./controller");

router.get("/category", categoryController.index);
router.post(
  "/category",
  policeCheck("create", "Category"),
  categoryController.store
);
router.put(
  "/category/:id",
  policeCheck("update", "Category"),
  categoryController.update
);
router.delete(
  "/category/:id",
  policeCheck("delete", "Category"),
  categoryController.destroy
);
module.exports = router;
