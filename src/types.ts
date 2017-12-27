export interface IAuthUser {
  uid: string;
  displayName: string;
  [key: string]: any;
}

export interface IGraphqlContext<T extends IAuthUser> {
  currentUser: T;
}

export interface IPageInfo {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
}

export interface IPaginationInfo {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  total: number;
}

export interface IPagingResult<T = any> {
  data: T[];
  pagination: IPaginationInfo;
}

export interface IContainerEdge<T> {
  node: T;
  cursor?: string;
}

export interface IOffsetContainer<T> {
  totalCount: number;
  edges: Array<IContainerEdge<T>>;
  pageInfo: IPageInfo;
}

export interface IImageUrl {
  url: string;
  thumbnailUrl: string;
}
