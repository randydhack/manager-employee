class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary
        this.title = title
        this.manager = manager || null
        if(manager){
            manager.addEmployee(this)
        }
    }

    calculateBonus(multiplier){
        let bonus = this.salary * multiplier;
        return bonus;
    }
}

const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)

module.exports = Employee
