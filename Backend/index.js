const express = require ('express')
const app = express()
const port = 8080
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DB_URL = "mongodb+srv://aleezeynalov:1234567A@cluster0.o0opu7t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const ClotheSchema = new Schema({
  title: { type: String, require: true },
  desc: { type: String, require: true },
  imageURL: { type: String, require: true },
});

const ClotheModel = mongoose.model('Clothe', ClotheSchema );





app.get('/api/Clothes', async (req, res) => {
  try {
const Clothes = await ClotheModel.find({});


if (Clothes.lenght > 0) {
  res.status(200).send({message: "success", data: Clothes})
} else {
  res.status(204).send({
message:"data is empty",
data:null,
  });
}

    
  } catch (error) {
    res.status(500).send({message: error.message})
  }
});
app.get('/api/Clothes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Clothe = await ClotheModel.findById(id);

    if (watch) {
      res.status(200).send({
        message: "success",
        data: watch,
      });
    } else {
      res.status(404).send({ message: "data not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/api/Clothes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedClothe = await WatchClothe.findByIdAndDelete(id);

    res.status(200).send({
      message: "deleted succesfully!",
      deletedClothe: deletedClothe,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }

});
app.post('/api/Clothes', async (req, res) => {
  try {
    const newClothe = new ClotheModel({ ...req.body });
    await newClothe.save();

    res.status(201).send({ message: "created succesfully!", data: newWatch });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});




mongoose.connect(DB_URL)
  .then(() =>{ console.log('Connected!')
  app.listen(port, () => {
    console.log(`Link: http://localhost:${port}`)
  })
  });