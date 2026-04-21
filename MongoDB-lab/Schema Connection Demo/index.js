const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/schemaDemoDB';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Database Connected');

  // Define Schema
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
  });

  // Create Model
  const User = mongoose.model('User', userSchema);

  // Insert Data
  const createUser = async () => {
    const newUser = new User({
      name: 'Alice',
      email: 'alice@example.com',
      age: 28
    });

    try {
      await newUser.save();
      console.log('User inserted successfully');

      // Fetch Data
      const users = await User.find();
      console.log('Fetched Users:', users);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  // Run insert and fetch after connection
  createUser();
})
.catch((err) => {
  console.error('Connection error', err);
});
