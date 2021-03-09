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
      town
       district
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
         photo
        location {
      	  district
          town
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