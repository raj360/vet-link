import {gql} from '@apollo/client';

export const USER = gql`
query getFarmer($id: Int!) {
  getFarmer(id: $id) {
    id
    fullName
    telephone
    email
    farms {
      id
      name
      latitude
      longitude
      type {
        id
        name
      }
    }
    appointments {
      id
      status
      createdAt
      updatedAt
      vet {
        id
        email
        fullName
        telephone
        location {
          latitude
          longitude
        }
        specialization {
          id
          name
        }
      }
    }
  }
}

`;