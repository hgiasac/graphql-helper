
export const commonSchema = [`

  input FileInput {
    fullPath: String
    url: String!
    bucketName: String
  }

  type PageInfo {
    hasNextPage: Boolean
    totalPages: Int
    page: Int
  }

  type ImageUrl {
    url: String
    thumbnailUrl: String
  }
`];
