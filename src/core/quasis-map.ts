import type { Expression } from "@babel/types";

export class QuasisMap {
  #map: Map<string, Expression> = new Map();
  id = 0;
  get placeholder() {
    return `__embedded_quasi_${this.id++}__`;
  }
  set(key: string, expression: Expression) {
    this.#map.set(key, expression);
  }
  get(key: string) {
    return this.#map.get(key);
  }
}
