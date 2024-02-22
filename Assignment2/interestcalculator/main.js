import { simpleInterest,compoundInterest } from "./index.js";
async function printInt(){
simpleInterest(30000,5,3);
await new Promise(res=>setTimeout(res,5000))
compoundInterest(40000,5,4,2);
}
printInt();
