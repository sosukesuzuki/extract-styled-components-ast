import { serialize, middleware } from "stylis";
import type { Element } from "stylis";
// @ts-expect-error -- why?
import generate from "@babel/generator";
import { QuasisMap } from "./quasis-map.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Replacer = (substring: string, ...args: any[]) => string;

export function embedQuasis(cssAst: Element[], quasisMap: QuasisMap) {
  serialize(
    cssAst,
    middleware([
      (element, i, children, callback) => {
        const replacer: Replacer = (substring) => {
          return "${" + generate.default(quasisMap.get(substring)).code + "}";
        };
        const regex = /__embedded_quasi_[0-9]{1,3}__/g;
        if (typeof element.props === "string") {
          element.props = element.props.replaceAll(regex, replacer);
        }
        if (typeof element.value === "string") {
          element.value = element.value.replaceAll(regex, replacer);
        }
        if (typeof element.children === "string") {
          element.children = element.children.replaceAll(regex, replacer);
        } else {
          serialize(element.children, callback);
        }
      },
    ])
  );
}
