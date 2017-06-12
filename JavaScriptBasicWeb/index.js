function calculate() {
    let a=document.getElementById('firstNumber').value;
    let b=document.getElementById('secondNumber').value;

    document.getElementById('result').innerHTML=Number(a)+Number(b);
}

//sum 2 numbers

function solve(args) {
    let a=Number(args[0]);
    let b=Number(args[1]);

    console.log(a+b);
}

//checking sum

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

function symmetric(args) {
    let n=Number(args[0]);

    for(let i=1;i<=n;i++){
        let number=i+"";
        if(isSymmetric(number)){
            console.log(number);
        }
    }

    function isSymmetric(num) {
        for(let i=0;i<num.length/2;i++){
            if(num[i]!=num[num.length-1-i]){
                return false;
            }
        }
        return true;
    }
}

function solve(args) {
    let nums=args.sort((a,b)=>(b-a));

    for(let i=0;i<nums.length;i++){
        if(i>2){
            return;
        }
        console.log(nums[i]);
    }
}

function capitalWords(args) {
    args=args.join(',')
    let words=args.split(/\W+/);

    words=words.filter(x=>x===x.toUpperCase());
    words=words.filter(x=>x.length>0);
    console.log(words.join(", "));
}