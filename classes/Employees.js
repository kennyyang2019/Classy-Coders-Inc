class Employees {
    #salary;
    #isHired;
    static #allEmployee = [];
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = true;
        Employees.#allEmployee.push(this)
    }
    static getEmployees(){
        console.log(this.#allEmployee)
        return this.#allEmployee;
    }
    static getTotalPayroll(){
        return this.#allEmployee.reduce((acc, curr) => {
            acc+=curr.getSalary();
            return acc;
        }, 0)
    }
    getSalary(){return this.#salary};
    setSalary(amount){this.#salary = amount};
    getStatus(){return this.#isHired};
    setStatus(command){ command == "hire" ? this.#isHired = true : command == "fire" ? this.#isHired = false : null}


    
}

module.exports = {
    Employees,
}