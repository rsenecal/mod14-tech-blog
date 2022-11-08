const router = require("express").Router();
// Include the Book model with the other imports
const { User, Blog } = require("../../models");

// GET all readers for the usre
router.get("/", async (req, res) => {
  try {
    const findAllBlogs = await Blog.findAll({
      // Add Book as a second model to JOIN with
      //   include: [{ model: LibraryCard }, { model: Book }],
    });
    res.status(200).json(findAllBlogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single blog for the user
router.get("/:id", async (req, res) => {
  try {
    const getBlog = await Blog.findByPk(req.params.id, {
      // Add Book as a second model to JOIN with
      include: { model: User },
    });

    if (!getBlog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }

    res.status(200).json(getBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post("/", async (req, res) => {
  try {
    const blogData = await Reader.create(req.body);
    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blog found!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
