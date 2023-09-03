/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      budget
      balance
      items {
        items {
          id
          name
          store
          details
          value
          date
          type
          createdAt
          updatedAt
          categoryItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      keywords
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        budget
        balance
        items {
          nextToken
          __typename
        }
        keywords
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItems = /* GraphQL */ `
  query GetItems($id: ID!) {
    getItems(id: $id) {
      id
      name
      store
      details
      value
      date
      type
      createdAt
      updatedAt
      categoryItemsId
      owner
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        store
        details
        value
        date
        type
        createdAt
        updatedAt
        categoryItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBalance = /* GraphQL */ `
  query GetBalance($id: ID!) {
    getBalance(id: $id) {
      id
      title
      type
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listBalances = /* GraphQL */ `
  query ListBalances(
    $filter: ModelBalanceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBalances(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        value
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
