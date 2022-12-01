const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }
    calculateBonus(multiplier){
        let sum = this._totalSubSalary(this.employees);
        let bonus = this.salary * multiplier;
        return bonus;
    }
    _totalSubSalary(employee, sum = 0){
        if(employee.length === 0) return sum;
        if(employee[0] instanceof Manager){
            sum += employee[0].salary;
            return this._totalSubSalary(employee[0].employees, sum);
        }
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;
