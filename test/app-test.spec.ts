import { assert } from "chai";
import { Calculator } from "../src/calculator";

const calc = new Calculator;

describe('Calculator Square Tests', () => {
    it('Test Square Simple', function() {
        const result=calc.square(3);
        assert.equal(result,9);
    })

    it('Test Wrong Square', function() {
        const result=calc.square(3);
        assert.notEqual(result,6);
    })

    it('Test Negative Square', function() {
        const result=calc.square(-3);
        assert.equal(result,9);
    })

    it('Test Wrong Negative Square', function() {
        const result=calc.square(-3);
        assert.notEqual(result,-9);
    })
})

describe('Calculator Cube Tests', () => {
    it('Test Cube Simple', function() {
        const result=calc.cube(3);
        assert.equal(result,27);
    })

    it('Test Wrong Cube', function() {
        const result=calc.cube(3);
        assert.notEqual(result,6);
    })

    it('Test Negative Cube', function() {
        const result=calc.cube(-3);
        assert.equal(result,-27);
    })

    it('Test Wrong Negative Cube', function() {
        const result=calc.cube(-3);
        assert.notEqual(result,27);
    })
})