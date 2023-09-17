import gql from 'graphql-tag'

export default gql`
  query Contact {
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
