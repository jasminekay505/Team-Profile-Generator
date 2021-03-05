const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should assign a given string to school via constrcutor', () => {
        const school = 'UW';
        const newIntern = new Intern('Jasmine', 20, 'myemail@gmail.com', school);
        expect(newIntern.school).toBe(school);
    });
});

describe('getSchool', () => {
    it('should return the school of Intern', () => {
        const school = 'UW';
        const newIntern = new Intern('Jasmine', 20, 'myemail@gmail.com', school);
        expect(newIntern.getSchool()).toBe(school);
    });
});

describe('getRole', () => {
    it('should return Intern', () => {
        const role = 'Intern';
        const newEmployee = new Employee('Jasmine', 20, 'myemail@gmail.com', 'UW');
        expect(newEmployee.getRole()).toBe(role);
    });
});