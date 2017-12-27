import { dateISOString } from "./helpers";

export function timestampResolvers() {

  return {
    createdAt(model): string {
      return dateISOString(model.createdAt);
    },
    updatedAt(model): string {
      return dateISOString(model.updatedAt);
    }
  };
}
