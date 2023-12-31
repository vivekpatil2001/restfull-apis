import Bus from "../models/Bus.js";

const postBus = async (req, res) => {
    try {
        const { busName, busNumber, busPrice } = req.body;
        const savedbus = new Bus({
            busName, busNumber, busPrice
        })

        res.json({
            success: true,
            data: savedbus,
            message: "save bus data succesfully"
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        })
    }
}

const getBus = async (req, res) => {
    try{
      const findbus = await Bus.find()
  
      res.json({
          success: true,
          data: findbus,
          message: "save bus data succesfully"
      })
    } catch(err){
      res.status(404).json({
          success:false,
          message:err.message
      })
    }
  }

export{postBus, getBus}