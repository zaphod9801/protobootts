import { assert } from "chai";
import { square,cube } from "../src/calculator";

describe("Calculator Square Tests", () => {
  it("Test Square Simple", function () {
    const result = square(3);
    assert.equal(result, 9);
  });

  it("Test Wrong Square", function () {
    const result = square(3);
    assert.notEqual(result, 6);
  });

  it("Test Negative Square", function () {
    const result = square(-3);
    assert.equal(result, 9);
  });

  it("Test Wrong Negative Square", function () {
    const result = square(-3);
    assert.notEqual(result, -9);
  });
});

describe("Calculator Cube Tests", () => {
  it("Test Cube Simple", function () {
    const result = cube(3);
    assert.equal(result, 27);
  });

  it("Test Wrong Cube", function () {
    const result = cube(3);
    assert.notEqual(result, 6);
  });

  it("Test Negative Cube", function () {
    const result = cube(-3);
    assert.equal(result, -27);
  });

  it("Test Wrong Negative Cube", function () {
    const result = cube(-3);
    assert.notEqual(result, 27);
  });
});
