import { exec } from "child_process";
import { Express } from "express";

export default function PortManagement(app: Express, port: number){
    exec(`lsof -i TCP:${port} | grep LISTEN`, (error, stdout) => {
        if (error) {
            app.listen(port, () => {
                console.log(`Server started on port ${port}`)
            })
        }
        else {
            const numberSerie = stdout.slice(7, 13)
            exec(`kill -9 ${numberSerie}`, (error2,stdout2) => {
                if (error2) {console.log(`error: ${error2.message}`);return}
                    if(stdout2.length == 0){
                        PortManagement(app, port)
                    }
                });
            }
        }
    ); 
}