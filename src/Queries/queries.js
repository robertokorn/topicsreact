import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
  query Topic($name: String!) {
    topic(name: $name) {
        name
        stargazerCount
        relatedTopics(first:10) {
 		    id 
            name
            stargazerCount 
 		}
    }
  }
`;


export const GET_REPO_OWNER_NAME = gql `
  query { 
    viewer { 
      login
    }
  }
`;