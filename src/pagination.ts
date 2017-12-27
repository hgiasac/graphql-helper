import { IPagingResult} from "./types";

export function offsetModelSchema(modelName: string): string {

  return `
    type ${modelName}Edge {
      node: ${modelName}
    }

    type ${modelName}Container {
      totalCount: Int
      edges: [${modelName}Edge]
      pageInfo: PageInfo
    }
  `;
}

export function offsetResolvers<T = any>(containerName: string, edgeName?: string): object {

  if (!edgeName) {
    const name = containerName;
    containerName = `${name}Container`;
    edgeName = `${name}Edge`;
  }

  return {
    [containerName]: {
      totalCount(result: IPagingResult<T>): number {
        return result.pagination.total;
      },
      edges(result: IPagingResult<T>): T[] {
        return result.data;
      },
      pageInfo(result: IPagingResult<T>) {
        return result.pagination;
      }
    },
    [edgeName]: {
      node(item: T): T {
        return item;
      }
    },
    PageInfo: {
      totalPages(paging) {
        return paging.totalPages;
      },
      page(paging) {
        return paging.pageNumber;
      },
      hasNextPage(paging) {
        return paging.pageNumber < paging.totalPages;
      },
    }
  };
}
