"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logic_1 = require("./logic");
const app = (0, express_1.default)();
const port = 8000;
app.get('/split/:str', (req, res) => {
    var str = req.params.str;
    res.json({
        revisedString: (0, logic_1.split)(str),
    });
});
app.get('/concatenate/', (req, res) => {
    var { s1, s2 } = req.query;
    res.json({
        revisedString: (0, logic_1.concatenate)(String(s1), String(s2)),
    });
});
app.get('/leapYear/:year', (req, res) => {
    var year = parseInt(req.params.year);
    res.json({
        leapYear: (0, logic_1.leapYear)(year),
    });
});
app.get('/handShake/:code', (req, res) => {
    var code = parseInt(req.params.code);
    res.json({
        secret_handshake: (0, logic_1.handShake)(code),
    });
});
app.listen(port, () => {
    console.log("hi we are comfortable with node JS");
});
//# sourceMappingURL=app.js.map