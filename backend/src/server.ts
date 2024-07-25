import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3333


app.listen(PORT,() => {console.log("O server está rodando na porta:"+PORT)});
console.log('\x1b[36m%s\x1b[0m', 'CLIQUE AQUI: http://localhost:'+PORT)