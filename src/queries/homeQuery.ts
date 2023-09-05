import gql from 'graphql-tag'

export default gql`
query Home {
  UserInfo {
    fullName
    description
    titles {
      title
    }
    socials {
      icon
      link
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
    skills {
      title
      skills {
        name
        proficiency
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
