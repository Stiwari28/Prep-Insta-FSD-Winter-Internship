const employees=[
    {
        "name": "John Doe",
        "age": 30,
        "dept": "Engineering",
        "salary": 75000
    },
    {
        "name": "Jane Smith",
        "age": 35,
        "dept": "Marketing",
        "salary": 65000
    },
    {
        "name": "Michael Johnson",
        "age": 28,
        "dept": "Sales",
        "salary": 60000
    },
    {
        "name": "Emily Brown",
        "age": 32,
        "dept": "Engineering",
        "salary": 70000
    },
    {
        "name": "David Lee",
        "age": 40,
        "dept": "Finance",
        "salary": 80000
    },
    {
        "name": "Sarah Garcia",
        "age": 29,
        "dept": "Customer Service",
        "salary": 55000
    },
    {
        "name": "Matthew Martinez",
        "age": 33,
        "dept": "Operations",
        "salary": 72000
    },
    {
        "name": "Jennifer Nguyen",
        "age": 31,
        "dept": "Product Management",
        "salary": 78000
    },
    {
        "name": "Daniel Taylor",
        "age": 36,
        "dept": "Engineering",
        "salary": 85000
    },
    {
        "name": "Amanda Wilson",
        "age": 34,
        "dept": "Research and Development",
        "salary": 69000
    }
];

function displayOutput(output) {
    document.getElementById('output').innerHTML = output;
}


function averageSalary_(){
   total=0;
   for(i=0; i<employees.length; i++){
    total+=employees[i].salary;
   }
   let average=total/employees.length;
   displayOutput(`Average Salary of Employees: ${average}`);

}
const averageSalary=document.getElementById('averageSalary');
averageSalary.addEventListener('click', averageSalary_);



function employeeindept_(){
    emp_array=[];
    for(i=0; i<employees.length; i++){
        if(employees[i].dept=='Engineering'){
            emp_array.push(employees[i].name);
        }
       }
    displayOutput(`Employees in IT are: ${emp_array}`);
}
const employeeindept=document.getElementById('employeeindept');
employeeindept.addEventListener('click', employeeindept_);



function salaryincrement_(){
    for(i=0; i<employees.length; i++){
        employees[i].salary += employees[i].salary * (10 / 100);
       }
    displayOutput(`Salaries increased by 10%!!! 🥳🥳🥳`);
}
const salaryincrement=document.getElementById('salaryincrement');
salaryincrement.addEventListener('click', salaryincrement_);



function sortbyage_(){
    employees.sort((a, b) => a.age - b.age);
    displayOutput(`Employees Sorted by Age: ${employees.map(emp => emp.name).join(', ')}`);
}
const sortbyage=document.getElementById('sortbyage');
sortbyage.addEventListener('click', sortbyage_);

