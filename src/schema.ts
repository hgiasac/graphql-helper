import { pascalToCamelCase } from "./helpers";

export interface IModelQuerySchemaOption {
  pluralName?: string;
  filterParamSchema?: string;
}

export function modelQuerySchema(name: string, options?: IModelQuerySchemaOption): string {
  const camelCaseName = pascalToCamelCase(name);
  const { pluralName = `${name}s`, filterParamSchema = "" } = { ...options };

  return `
    ${pascalToCamelCase(pluralName)}(${filterParamSchema ? filterParamSchema + ", " : ""}page: Int, first: Int,
      sortBy: String, descending: Boolean): ${name}Container
    all${pluralName}${filterParamSchema ? `(${filterParamSchema})` : ""}: [${name}]
    ${camelCaseName}(id: ID!): ${name}
  `;
}

export function modelMutationSchema(
  name: string, createInput?: string, updateInput?: string): string {

  createInput = createInput || `${name}Input`;
  updateInput = updateInput || createInput;

  return `
    create${name}(form: ${createInput}!): ${name}
    update${name}(id: ID!, form: ${updateInput}!): ${name}
    delete${name}(id: ID!, force: Boolean, updatedNote: String): Int
  `;
}
