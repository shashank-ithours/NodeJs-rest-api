const ex = require("express");
const { route } = require("express/lib/application");
const Course = require("../models/course");
const router = ex.Router();

//creating the routers

// get all courses
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.json(error);
  }
});

//get single courses
router.get("/:courseId", async (req, res) => {
  try {
    const c = await Course.findById({ _id: req.params.courseId });
    res.json({
      msg: "success",
    });
  } catch (error) {
    res.json(error);
  }
});

// create courses

router.post("/courses", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/courses/:courseId", async (req, res) => {
  try {
    const c = await Course.findByIdAndDelete({ _id: req.params.courseId });
    res.json({ msg: "deleted successfully", c });
  } catch (error) {
    res.json(error);
  }
});

router.put("/courses/:courseId", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      { _id: req.params.courseId },
      req.body
    );
    res.json({ msg: "update successfully" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
