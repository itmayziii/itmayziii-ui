import { gql } from 'graphql-request'

const contactPageQuery = gql`
query ContactPage {
  UserInfo {
    fullName
    description
    titles {
      title
    }
    socials {
      icon
      link
      label
    }
  }
  Nav {
    links {
      label
      link
    }
  }
  Contact {
    title
    details {
      map {
        link
        alt
      }
      location {
        icon
        title
        description
      }
      email {
        icon
        email
        description
      }
    }
  }
}
`

export default contactPageQuery
