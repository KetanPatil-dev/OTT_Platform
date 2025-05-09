import ListModel from "../models/list.model.js";

export const Create = async (req, res) => {
  try {
    
    const newList = new ListModel(req.body);
    await newList.save();
    return res.status(201).json({ success: true, newList });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};

export const DeleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const findList = await ListModel.findById(id);
    if (!findList) {
      return res
        .status(404)
        .json({ success: false, message: "List Not Found" });
    }
    const DeleteList = await ListModel.findByIdAndDelete(id);
    return res.status(201).json({
      success: true,
      message: "List Deleted Successfully",
      DeleteList,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};
export const UpdateList = async (req, res) => {
  try {
    const { id } = req.params;
    const findList = await ListModel.findById(id);
    if (!findList) {
      return res
        .status(404)
        .json({ success: false, message: "List Not Found" });
    }
    const updateList = await ListModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res.status(201).json({
      success: true,
      message: "List Updated Successfully",
      updateList,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};

export const JustTenVideos = async (req, res) => {
  try {
    const typeQuery = req.query.type;
    const genreQuery = req.params.genre;
    let list = [];

    if (typeQuery) {
      if (genreQuery) {
        list = await ListModel.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await ListModel.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await ListModel.aggregate([{ $sample: { size: 10 } }]);
    }
    return res.status(201).json(list)
  } catch (error) {
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};
