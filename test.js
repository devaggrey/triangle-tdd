// Import
const triangleTracker = require('./index');


describe('triangleTracker', () => {


    test('check invalid triangles', () => {
        expect(triangleTracker(0, 1, 1)).toBe('Invalid');
        expect(triangleTracker(-1, 1, 1)).toBe('Invalid');
    });

    test('check scalene triangles', () => {
        expect(triangleTracker(2, 3, 4)).toBe('Scalene');
        expect(triangleTracker(3, 4, 5)).toBe('Scalene');
    });
    
    test('check non-triangles', () => {
        expect(triangleTracker(1, 1, 3)).toBe('Not a triangle');
        expect(triangleTracker(1, 3, 2)).toBe('Not a triangle');
        expect(triangleTracker(3, 1, 1)).toBe('Not a triangle');
    });

    test('check equilateral triangles', () => {
        expect(triangleTracker(2, 2, 2)).toBe('Equilateral');
    });

    test('check isosceles triangles', () => {
        expect(triangleTracker(2, 2, 3)).toBe('Isosceles');
        expect(triangleTracker(2, 3, 2)).toBe('Isosceles');
        expect(triangleTracker(3, 2, 2)).toBe('Isosceles');
    });

  
});