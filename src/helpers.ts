export function dateISOString(input: string | Date): string {
  const date = typeof input === "string" ? new Date(input) : input;

  return date ? date.toISOString() : null;
}

export function pascalToCamelCase(input: string): string {
  return input.substring(0, 1).toLowerCase() + input.substring(1);
}
