class Accommodation {
  _name!: string;
  _cost!: number;

  constructor(unNombre: string, unCosto: number) {
    this.name = unNombre;
    this.cost = unCosto;
  }

  set name(unNombre: string) {
    if (typeof unNombre !== "string" || unNombre.trim() === "") {
      throw new Error("El nombre no puede ser vacio");
    }
    this._name = unNombre;
  }

  get name(): string {
    return this._name;
  }

  set cost(unCosto: number) {
    if (isNaN(unCosto) || unCosto < 0) {
      throw new Error("El costo debe ser mayor o igual a cero");
    }
    this._cost = unCosto;
  }

  get cost(): number {
    return this._cost;
  }
}
export default Accommodation;
