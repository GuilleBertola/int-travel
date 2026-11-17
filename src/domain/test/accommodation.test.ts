import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Nombre", 100);
  });

  describe("Accommodation name", () => {
    test("should set name correctly", () => {
      expect(accommodation.name).toBe("Nombre");
    });
    test("Intentar poner un nombre vacio", () => {
      expect(() => (accommodation.name = "")).toThrow();
    });
  });

  describe("Accommodation cost", () => {
    test("agregar tests para el costo", () => {
      expect(accommodation.cost).toBe(100);
    });
    test("Intentar poner un costo negativo", () => {
      expect(() => (accommodation.cost = -1)).toThrow();
    });
  });
});
