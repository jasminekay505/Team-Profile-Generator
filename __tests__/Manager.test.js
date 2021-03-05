const Manager = require('../lib/Manager');

describe('Manager', () => { 
    it('should should assign a given number to officeNumber via constrcutor', () => { 
        const officeNumber = 150;
        const newManager = new Manager('Jasmine', 20, 'myemail@gmail.com', officeNumber);
        expect(newManager.officeNumber).toBe(officeNumber);
    });
});

describe('getOfficeNumber', () => { 
    it('should return the office number of Manager', () => { 
        const officeNumber = 150;
        const newManager = new Manager('Jasmine', 20, 'myemail@gmail.com', officeNumber);
        expect(newManager.getOfficeNumber()).toBe(officeNumber);
    });
});

describe('getRole', () => {
    it('should return Manager', () => { 
        const role = 'Manager';
        const newEmployee = new Employee('Jasmine', 20, 'myemail@gmail.com', 150);
        expect(newEmployee.getRole()).toBe(role);
    });
});