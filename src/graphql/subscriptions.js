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
export const onCreateBudget = /* GraphQL */ `
  subscription OnCreateBudget(
    $filter: ModelSubscriptionBudgetFilterInput
    $owner: String
  ) {
    onCreateBudget(filter: $filter, owner: $owner) {
      id
      type
      store
      details
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateBudget = /* GraphQL */ `
  subscription OnUpdateBudget(
    $filter: ModelSubscriptionBudgetFilterInput
    $owner: String
  ) {
    onUpdateBudget(filter: $filter, owner: $owner) {
      id
      type
      store
      details
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteBudget = /* GraphQL */ `
  subscription OnDeleteBudget(
    $filter: ModelSubscriptionBudgetFilterInput
    $owner: String
  ) {
    onDeleteBudget(filter: $filter, owner: $owner) {
      id
      type
      store
      details
      value
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
