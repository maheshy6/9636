import Location from "../model/location.model.js";
const updateLocation=(async(req, res) => {
  const { latitude, longitude } = req.body;
    try {
        const data =await Location(req.body)
        await data.save()
        res.status(201).json({message:"location updated successfully"}) 
    } 
    catch (error) {
       res.status(500).json({message:error.message}) 
    }
});

export {updateLocation}
