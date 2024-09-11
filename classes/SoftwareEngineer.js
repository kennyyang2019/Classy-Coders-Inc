const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
	#programmingLanguages;
	constructor(name, position, salary, programmingLanguages) {
		super(name, position, salary);
		this.#programmingLanguages = programmingLanguages;
	}
	getProgrammingLanguages(){return this.#programmingLanguages};
	setProgrammingLanguages(lang){this.#programmingLanguages.push(lang)};
}

module.exports = {
	SoftwareEngineer,
};
