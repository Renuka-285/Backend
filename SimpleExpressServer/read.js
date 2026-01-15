
import {readFileSync } from "fs"
export function readData(){
   const data=readFileSync("Data.txt","utf-8");
   return data

}
