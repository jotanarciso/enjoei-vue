<template>
  <div>
    <a
      v-for="product in products"
      :key="product.id"
      :href="`https://www.enjoei.com.br/p/${product.path}`"
    >
      {{ product.title.name }}
    </a>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: []
      }
    },
    created() {
      axios.post('https://enjusearch.enjoei.com.br/graphql-search', {
        query: `
          query searchProducts(
            $term: String!,
            $first: Int,
            $after: String
          ) {
            search(products: {
              term: $term
            }) {
              products(first: $first, after: $after) {
                total
                edges {
                  cursor
                  node {
                    id
                    path
                    photo {
                      image_public_id
                    }
                    title {
                      name
                    }
                    brand {
                      displayable_name
                    }
                    price {
                      original
                      current
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          term: '',
          first: 10
        }
      })
    }
  }
</script>
