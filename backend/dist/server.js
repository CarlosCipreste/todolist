"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3333;
app_1.default.listen(PORT, () => { console.log("O server está rodando na porta:" + PORT); });
console.log('\x1b[36m%s\x1b[0m', 'CLIQUE AQUI: http://localhost:' + PORT);
