/**
 * Created by Lekov on 1.5.2017 г..
 */
function checkforPositive(args) {
    let negativeNums=args.map(Number).filter(x=>x<0).length;
    let nullNums=args.map(Number).filter(x=>x==0).length;
    let isPositive=true;

    if(negativeNums==0 || negativeNums==2){
        isPositive=true
    }
    else if(nullNums>0){
        isPositive=true;
    }
    else{
        isPositive=false;
    }

    if(isPositive){
        console.log("Positive");
    }
    else{
        console.log("Negative");
    }
}

function solve(args) {
    for(let i=0;i<args.length;i++){
        if(args[i]!='Stop'){
            console.log(args[i])
        }
        else{
            return;
        }
    }
}

function solve(args) {
    let size=Number(args[0]);
    let result=[size];

    for(let i=1;i<args.length;i++){
        let command=args[i].split(' - ');

        let index=Number(command[0]);
        let value=Number(command[1]);

        if(index>=0 && index<size){
            result[index]=value;
        }
    }
    for(let i=0; i<result.length;i++){
        if(result[i]==undefined){
            result[i]=0;
        }
        console.log(result[i]);
    }
}

//solve(['3','0 - 5','2 - 4','0 - 5','0 - 1']);

//11.

function solve(args) {
    let obj = {};

    for(let arg of args.slice(0,args.length-1)){
        let keyValue=arg.split(' ');

        let key=keyValue[0];
        let value=keyValue[1];

        obj[key]=value;
    }

    let key=args[args.length-1];

    console.log(obj[key] || "None");
}