import app from './app.js';

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res)=>{
//   res.status(200).json({name: "vaibhav"});
// })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
