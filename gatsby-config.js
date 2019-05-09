module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GOT",
        fieldName: "got",
        url:
          "https://unm45ig475dlvbbyay5iq765s4.appsync-api.us-west-2.amazonaws.com/graphql",
        headers: {
          "x-api-key": "da2-risu7n6r65fttiocdur2f4gt4e",
        },
      },
    },
  ],
}
