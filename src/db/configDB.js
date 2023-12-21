import mongoose from "mongoose";

const URI="mongodb+srv://franciscosegu:Riverplate92@cluster0.gjwkb4d.mongodb.net/DB_Coder_PrimeraPI?retryWrites=true&w=majority";

mongoose.connect(URI)
.then(()=>console.log("Conectado"))
.catch((error)=> console.log(error));