// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from "https://deno.land/x/servest@v1.3.1/mod.ts";

const PORT = 8000;
const colores = [];
const app = createApp();

app.handle("/",async (req) =>{
    const b = `http://localhost:${PORT}`;
    const u = new URL(`${req.url}`,b);
    let color = u.searchParams.get("color");
    colores.push(color);
    //
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type":"text/html; charset=UTF-8",
        }),
        body: ReactDOMServer.renderToString(
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <title>Servest</title>
                </head>
                <body>
                    <h1>Fredy</h1>
                    lista(colores)
                </body>
            </html>
        ),
    });
});
function lista(colores:any){
    let body="";
    body+="<ul>";
    for (const color of colores) {
        body+=`<li style='color:${color};'>${color}</li>`
    }
    body+="</ul>";
    return body;
}
app.listen({port:PORT});
