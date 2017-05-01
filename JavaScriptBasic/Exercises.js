/**
 * Created by Lekov on 30.4.2017 г..
 */
//Sum two numbers
//Ex: solve['10', '20']

function sumNumbers(args) {
    let firstNum=document.getElementById('firstNumber').value;
    let secondNum=document.getElementById('secondNumber').value;

    let sum=Number(firstNum)+Number(secondNum);

    document.getElementById('result').innerHTML=sum;
}

function diffNumbers(args) {
    let firstNum=document.getElementById('firstNumber').value;
    let secondNum=document.getElementById('secondNumber').value;

    let sum=Number(firstNum)-Number(secondNum);

    document.getElementById('result').innerHTML=sum;
}

function multiplyNumbers(args) {
    let firstNum=document.getElementById('firstNumber').value;
    let secondNum=document.getElementById('secondNumber').value;

    let sum=Number(firstNum)*Number(secondNum);

    document.getElementById('result').innerHTML=sum;
}

function divideNumbers(args) {
    let firstNum=document.getElementById('firstNumber').value;
    let secondNum=document.getElementById('secondNumber').value;

    let sum=Number(firstNum)/Number(secondNum);

    document.getElementById('result').innerHTML=sum;
}

function solve(args) {
    let firstNum=Number(args[0]);
    let secondNum=Number(args[1]);

    return firstNum+secondNum;
}

//Three integers sum
//sum(['8 15 7'])

function sum(args) {
    let nums=args[0].split(' ').map(Number);

    console.log(check(nums[0],nums[1],nums[2])
        ||check(nums[1],nums[2],nums[0])
        ||check(nums[2],nums[0],nums[1])
        ||("No"));


    function check(num1,num2,sum) {
        if(num1+num2!=sum){
            return false;
        }
            if(num1>num2)
                [num1,num2]=[num2,num1];

         return `${num1} + ${num2} = ${sum}`;
    }
}

//Symmetric Numbers
//symetric(750);

function symetric(args) {
    let n=Number(args[0]);
    let result="".toString();

    for(let i=1;i<=n;i++) {
        if(isSymetric(i+"")){
            result+=i+" ";
        }
    }
    console.log(result);

    function isSymetric(args){
        for(let i=0;i<(args.length-1)/2;i++){
            if(args[i]!=args[args.length-1-i]){
                return false;
            }
        }
        return true;
    }
}

//Largest 3 Numbers
//solve(['20','8','53','40']);
function largestThree(args) {
    let nums=args.sort((a,b)=>(b-a));

    for(let i=0; i<nums.length;i++){
        if(i>2){
            break;
        }
        console.log(nums[i]);
    }
}

//capitalWords(['PHP, Java and HTML']);

function capitalWords(args) {
    args=args.join(',')
    let words=args.split(/\W+/);

    words=words.filter(x=>x===x.toUpperCase());
    words=words.filter(x=>x.length>0);
    console.log(words.join(", "));
}
