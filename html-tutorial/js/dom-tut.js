class Person {
    name;
    color;
    number;

    constructor(name, color, number) {
        this.name = name;
        this.color = color;
        this.number = number;
    }
    toTableRow() {
        let tr = "<tr>";
        tr += `<td>${this.name}</td>`;
        tr += `<td>${this.color}</td>`;
        tr += `<td>${this.number}</td>`;
        tr += "</tr>";
        return tr;
    }
}

let dbDataClass = [

 new Person("Alice", "blue", 7),
 new Person("Fred", "green", 7),
 new Person("John", "red", 7),
]

let dbData = [

    {name: "Abe", color: "black", number: 13},
    {name: "Betty", color: "red", number: 8},
    {name: "Chris", color: "orange", number: 42},
    {name: "Elyse", color: "apathy", number: 42},
    {name: "Dan", color: "gren", number: 42}
]

const loaded = () => {

    let tbody = document.getElementById("tbody");
    for(let row of dbDataClass) {
        let tr = row.toTableRow();
        tbody.innerHTML += tr;
    }
}

const add=() => {

        let operanda = document.getElementById("opa").value;
        let operandb = document.getElementById("opb").value;
        let answer = Number(operanda) + Number(operandb);
        document.getElementById("ans").value= answer;
        document.getElementById("lbl").innerHTML = "<b>Addition</b>";
        document.getElementById("lbl").style.color="green";
        document.getElementById("ans").style.color="green";
        
}
const sub=() => {

        let operanda = document.getElementById("opa").value;
        let operandb = document.getElementById("opb").value;
        let answer = Number(operanda) - Number(operandb);
        document.getElementById("ans").value= answer;
        document.getElementById("lbl").innerHTML = "<b>Subtraction</b>";
        document.getElementById("lbl").style.color="red";
        document.getElementById("ans").style.color="red";

}
const mult=() => {

        let operanda = document.getElementById("opa").value;
        let operandb = document.getElementById("opb").value;
        let answer = Number(operanda) * Number(operandb);
        document.getElementById("ans").value= answer;
        document.getElementById("lbl").innerHTML = "<b>Multiplication</b>";
        document.getElementById("lbl").style.color="purple";
        document.getElementById("ans").style.color="purple";
}

const div=() => {

        let operanda = document.getElementById("opa").value;
        let operandb = document.getElementById("opb").value;
        let answer = Number(operanda) / Number(operandb);
        document.getElementById("ans").value= answer;
        document.getElementById("lbl").innerHTML = "<b>Division</b>";
        document.getElementById("lbl").style.color="orange";
        document.getElementById("ans").style.color="orange";
}
