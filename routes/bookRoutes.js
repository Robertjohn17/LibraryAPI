const express = require("express");
const { auth, admin } = require("../middlewares/authMiddleware");
const {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", getBooks);
router.post("/", auth, admin, addBook);
router.get("/:id", auth, getBookById);
router.put("/:id", auth, admin, updateBook);
router.delete("/:id", auth, admin, deleteBook);

module.exports = router;
