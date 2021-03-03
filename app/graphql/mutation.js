import {gql} from '@apollo/client';


export const SIGN_USER = gql`
mutation farmerSignIn($telephone: String!, $password: String!) {
  farmerSignIn(telephone: $telephone, password: $password) {
    id
    fullName
    email
    telephone
    photo
  }
}
`;





