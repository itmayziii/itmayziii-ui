import gql from 'graphql-tag'

export default gql`
query Home {
  UserInfo {
    fullName
    description
    titles {
      title
    }
  }
  Home {
    createdAt
    updatedAt
    whatIDo {
      title
      sections {
        icon
        title
        description
      }
    }
  }
  Headshots(where: { name: { equals: "Professional" } }) {
    docs {
      alt
      sizes {
        mobile {
          filename
          url
        }
      }
    }
  }
}
`
