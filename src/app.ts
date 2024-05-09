import express , {Request, Response} from 'express';
import { leapYear, concatenate, split, handShake } from './logic';

const app = express();
const port = 8000;

app.get('/split/:str', (req: Request, res:Response)=>{
    var str: any = req.params.str;

    res.json({
        revisedString : split(str),
    })
})

app.get('/concatenate/', (req: Request, res:Response)=>{
    var {s1 ,s2} = req.query;

    res.json({
        revisedString : concatenate(String(s1),String(s2)),
    })
})

app.get('/leapYear/:year', (req: Request, res:Response)=>{
   var year: number =parseInt( req.params.year);
    res.json({
       leapYear : leapYear(year),
    })
})

app.get('/handShake/:code', (req: Request, res:Response)=>{
    var code: number =parseInt( req.params.code);
     res.json({
        secret_handshake : handShake(code),
     })
 })

app.listen(port, ()=>{
    console.log("hi we are comfortable with node JS")
})