import { graphql, useStaticQuery } from "gatsby"

const useGotCharacters = () => {
  const data = useStaticQuery(graphql`
    {
      got {
        listCharacters {
          items {
            id
            name
            description
            avatar
          }
        }
      }
    }
  `)

  return data.got.listCharacters.items
}

export default useGotCharacters
