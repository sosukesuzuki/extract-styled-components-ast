import type { QuasisMap } from "./quasis-map.js";
import type { Expression, TaggedTemplateExpression } from "@babel/types";

export function getStylesString(
  taggedTemplateExpression: TaggedTemplateExpression,
  quasisMap: QuasisMap
) {
  let stylesString = "";
  const templateLiteral = taggedTemplateExpression.quasi;
  for (const quasi of templateLiteral.quasis) {
    stylesString += quasi.value.cooked;
    const node = templateLiteral.expressions[quasisMap.id] as Expression;
    const { placeholder } = quasisMap;
    if (node) {
      stylesString += placeholder;
      quasisMap.set(placeholder, node);
    }
  }
  return stylesString;
}
