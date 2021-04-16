const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://Mostafa:SqL42re0wDJ8ZsRG@cluster0.hsjqj.mongodb.net/x-store?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})
