const express = require('express');
const app = express();
var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.get('/', (req, res) => {
  // Run the GraphQL query '{ hello }' and print out the response
  graphql(schema, '{ hello }', root).then((response) => {
    res.send(response);
  });

});

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
