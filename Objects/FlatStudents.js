
const students = [
    {
        name: "Aarav",
        city: "Delhi",
        subjects: [
            { name: "Math", marks: 88 },
            { name: "Science", marks: 92 }
        ]
    },
    {
        name: "Meera",
        city: "Mumbai",
        subjects: [
            { name: "Math", marks: 95 },
            { name: "English", marks: 90 }
        ]
    }
];

const output = students.flatMap((main) => {
    const arr = main.subjects.map(({name, marks}) => {
        return {subject:name, marks,name: main.name, city: main.city}
    });
    return arr
});

console.log(output)




