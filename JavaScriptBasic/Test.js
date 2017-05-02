function solve(args) {
    let studentData=args.map(a=>a.split(' -> ')).map(x=>{
        return {
            name:x[0],
            age: x[1],
            grade: x[2]
        }
    });

    studentData.forEach(student=>{
        console.log(`Name: ${student.name}`);
        onsole.log(`Age: ${student.age}`);
        onsole.log(`Grade: ${student.grade}`);
    })
}

solve('Pesho -> 13 -> 6.00\nIvan -> 12 -> 5.57'.split('\n'));

