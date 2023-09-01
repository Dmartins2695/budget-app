/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onCreateCategory(filter: $filter, owner: $owner) {
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
          createdAt
          updatedAt
          categoryItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onUpdateCategory(filter: $filter, owner: $owner) {
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
          createdAt
          updatedAt
          categoryItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory(
    $filter: ModelSubscriptionCategoryFilterInput
    $owner: String
  ) {
    onDeleteCategory(filter: $filter, owner: $owner) {
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
          createdAt
          updatedAt
          categoryItemsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onCreateItems(filter: $filter, owner: $owner) {
      id
      name
      store
      details
      value
      createdAt
      updatedAt
      categoryItemsId
      owner
      __typename
    }
  }
`;
export const onUpdateItems = /* GraphQL */ `
  subscription OnUpdateItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onUpdateItems(filter: $filter, owner: $owner) {
      id
      name
      store
      details
      value
      createdAt
      updatedAt
      categoryItemsId
      owner
      __typename
    }
  }
`;
export const onDeleteItems = /* GraphQL */ `
  subscription OnDeleteItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onDeleteItems(filter: $filter, owner: $owner) {
      id
      name
      store
      details
      value
      createdAt
      updatedAt
      categoryItemsId
      owner
      __typename
    }
  }
`;
export const onCreateBalance = /* GraphQL */ `
  subscription OnCreateBalance(
    $filter: ModelSubscriptionBalanceFilterInput
    $owner: String
  ) {
    onCreateBalance(filter: $filter, owner: $owner) {
      id
      type
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateBalance = /* GraphQL */ `
  subscription OnUpdateBalance(
    $filter: ModelSubscriptionBalanceFilterInput
    $owner: String
  ) {
    onUpdateBalance(filter: $filter, owner: $owner) {
      id
      type
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteBalance = /* GraphQL */ `
  subscription OnDeleteBalance(
    $filter: ModelSubscriptionBalanceFilterInput
    $owner: String
  ) {
    onDeleteBalance(filter: $filter, owner: $owner) {
      id
      type
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
