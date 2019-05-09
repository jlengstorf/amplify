require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GOT",
        fieldName: "got",
        url: process.env.AMPLIFY_GQL_URL,
        headers: {
          "x-api-key": process.env.AMPLIFY_API_KEY,
        },
      },
    },
  ],
}
