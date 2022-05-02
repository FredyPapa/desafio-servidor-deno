import {serve} from 'https://deno.land/std@0.100.0/http/mod.ts';
import React from "https://dev.jspm.io/react/index.js";
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";

const PORT = 8000;
const colores = [];
const app = serve({port:PORT});
for await(const req of app){
    //req.respond({body:"Hola"});
    const b = `http://localhost:${PORT}`;
    const u = new URL(`${req.url}`,b);
    //let frase = u.searchParams.get("frase");
    //let body = frase == null?"":frase.split(" ").reverse().join(" ");
    let color = u.searchParams.get("color");
    colores.push(color);
    let body = "";
    body+="<html><head><meta charSet='utf-8'/><title>Servest</title></head><body></body><ul style='background-color:black;'>";
    for (const color of colores) {
        body+=`<li style='color:${color};'>${color}</li>`
    }
    body+="</ul></body></html>";
    req.respond({body});
}