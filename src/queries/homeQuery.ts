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
        label
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
    Nav {
      links {
        label
        link
      }
    }
    Headshots(where: { name: { equals: "Professional" } }) {
      docs {
        alt
        sizes {
          mobile {
            url
          }
          mobileWebp {
            url
          }
          mobileAvif {
            url
          }
          mobile1_5x {
            url
          }
          mobileAvif1_5x {
            url
          }
          mobileWebp1_5x {
            url
          }
          mobile2x {
            url
          }
          mobileAvif2x {
            url
          }
          mobileWebp2x {
            url
          }
          mobile3x {
            url
          }
          mobileAvif3x {
            url
          }
          mobileWebp3x {
            url
          }
          mobile4x {
            url
          }
          mobileAvif4x {
            url
          }
          mobileWebp4x {
            url
          }
        }
      }
    }
  }
`
