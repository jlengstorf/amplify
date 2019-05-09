// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCharacter = `query GetCharacter($id: ID!) {
  getCharacter(id: $id) {
    id
    name
    description
    avatar
  }
}
`;
export const listCharacters = `query ListCharacters(
  $filter: ModelCharacterFilterInput
  $limit: Int
  $nextToken: String
) {
  listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      avatar
    }
    nextToken
  }
}
`;
