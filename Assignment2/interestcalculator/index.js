let simpleInterest=(principal,time,rate)=>{
    console.log("Principal:"+principal);
    console.log("Time:"+time);
    console.log("Rate:"+rate);
    const amount=(principal*time*rate)/100;
    console.log("Simple Interest is"+amount);
}

let compoundInterest=(principal,time,rate)=>{
    console.log("Principal:"+principal);
    console.log("Time:"+time);
    console.log("Rate:"+rate);

    const totalAmount=principal*((1+rate/100)^time);
    console.log("Compound Interest is:"+totalAmount);
}

export{simpleInterest,compoundInterest};