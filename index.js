require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5001;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  const db = client.db('PC-Builder');
    const categoryCollection = db.collection('categories');
    const productCollection = db.collection('products');

    app.get('/products', async (req, res) => {
      const cursor = productCollection.find({}).sort({ publicationDate: -1 });
      const products = await cursor.toArray();

      res.send({ status: true, data: products });
    });
};

run(
  AgccLD3kpgX4c4SC
).catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
