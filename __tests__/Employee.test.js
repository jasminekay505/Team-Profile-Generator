const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Can create a new employee object', () => {
        const newEmployee = new Employee();
        expect(typeof (newEmployee)).toBe('object');
    });

    it('should assign a given string to name via constructor', () => {
        const name = 'Jasmine';
        const newEmployee = new Employee(name);
        expect(newEmployee.name).toBe(name);
    });

    it('should assign a given number to id via constructor', () => {
        const id = 20;
        const newEmployee = new Employee('Jasmine', id);
        expect(newEmployee.id.toBe(id));
    });

    it('should assign a given string to email via constructor', () => {
        const email = 'myemail@gmail.com';
        const newEmployee = new Employee('Jasmine', 20, email);
        expect(newEmployee.email).toBe(email);
    });
});

describe('getName', () => {
    it('should return name of Employee', () => {
        const name = 'Jasmine';
        const newEmployee = new Employee(name);
        expect(newEmployee.getName()).toBe(name);
    });
});

describe('getId', () => {
    it('should return Id of Employee', () => {
        const id = 20;
        const newEmployee = new Employee('Jasmine', id);
        expect(newEmployee.getId()).toBe(id);
    });
});

describe('getEmail', () => {
    it('should return email of Employee', () => {
        const email = 'myemail@gmail.com';
        const newEmployee = new Employee('Jasmine', 20, email);
        expect(newEmployee.getEmail()).toBe(email);
    });
});

describe('getRole', () => {
    it('should return Employee', () => { 
        const role = 'Employee';
        const newEmployee = new Employee('Jasmine', 20, 'myemail@gmail.com');
        expect(newEmployee.getRole()).toBe(role);
    });
});