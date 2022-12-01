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
        let sum = this._totalSubSalary();
        let bonus = (this.salary + sum )* multiplier;
        return bonus;
    }
    _totalSubSalary(employee = this.employees, sum = 0){
        if(employee.length === 0) return sum;
        if(employee[0] instanceof Manager){
            sum += employee[0].salary;
            return this._totalSubSalary(employee[0].employees, sum);
        }
        sum += employee[0].salary;
        return this._totalSubSalary(employee.slice(1), sum)
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

/*
Splinter is the Manager, and there employee who works under Splinter.

Leo is an employee and Splinter is his manager.
    - If Leo[0] is instance of Splinter then you would add his salary to sum.
        - If leo has an employee below him, true;

Raph is an employee and Leo is his manager.
    - If Raph has an employee undereath true;

Michelangelo and Donatello is an employee and Raph is their manager.
    if these two have an employee below them, false;

Spinter {
    employee : leo {
        manager: leo {
            employee: raph {
                manager: raph {
                    employee : mike, donnie
                }
            }
        }
    }
}
*/

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;
