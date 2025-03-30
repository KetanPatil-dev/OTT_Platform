import MovieModel from "../models/movie.model.js";

export const CreateMovie = async (req, res) => {
  try {
    const newMovie = new MovieModel(req.body);
    await newMovie.save();
    return res
      .status(201)
      .json({ success: true, message: "Movie Created Successfully", newMovie });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
export const UpdateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const findMovie = await MovieModel.findById(id);
    if (!findMovie)
      return res
        .status(404)
        .json({ success: false, message: "Movie not Found" });
    const updateMovie = await MovieModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res.status(201).json({
      success: true,
      message: "Movie Updated SuccessFully",
      updateMovie,
    });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};

export const DeleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const findMovie = await MovieModel.findById(id);
    if (!findMovie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not Found" });
    }
    const deleteMovie = await MovieModel.findByIdAndDelete(id);
    return res.status(201).json({
      success: true,
      message: "Movie Deleted Successfully",
      deleteMovie,
    });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};

export const Random = async (req, res) => {
  try {
    const type = req.query.type;
    let movie;

    {
      type === "series"
        ? (movie = await MovieModel.aggregate([
            { $match: { isSeries: true } },
            { $sample: { size: 1 } },
          ]))
        : (movie = await MovieModel.aggregate([
            { $match: { isSeries: false } },
            { $sample: { size: 1 } },
          ]));
    }
    return res.status(201).json(movie)
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: true, message: "Internal Server Error" });
  }
};

export const GetAllMovies=async(req,res)=>{
    try {
        const movies= await MovieModel.find()
        return res.status(201).json(movies)
        
    } catch (error) {
        return res
        .status(500)
        .json({ success: true, message: "Internal Server Error" }); 
    }
}