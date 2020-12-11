import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    totalProducts: 0,
    searchTerm: "",
    page: 10
  },
  getters: {
    products: state => {
      return state.products;
    },

    totalProducts: state => {
      return state.totalProducts;
    },

    searchTerm: state => {
      return state.searchTerm;
    },

    page: state => {
      return state.page;
    }
  },

  mutations: {
    setProducts: (state, { products }) => {
      state.products = products;
    },
    setSearchTerm: (state, newTerm) => {
      state.searchTerm = newTerm;
    },
    setPage: (state, { newPage }) => {
      state.page = newPage;
    }
  },
  actions: {
    getProducts: async function({ state, commit }) {
      axios
        .post("https://enjusearch.enjoei.com.br/graphql-search", {
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
            term: state.searchTerm,
            first: state.page
          }
        })
        .then(
          response => {
            commit("setProducts", {
              products: response.data.data.search.products.edges,
              totalProducts: response.data.data.search.products.total
            });
            // console.log(response);
            return true;
          },
          err => {
            console.log(err);
            return false;
          }
        );
    },
    getProductsByTerm: function({ dispatch, commit, state }, term) {
      // console.log(term) debug
      commit("setSearchTerm", term);
      dispatch("getProducts");
    },
    setNextPage: function({ dispatch, commit, state }, page) {
      // console.log(page) debug
      commit("setPage", page);
      dispatch("getProducts");
    }
  },
  modules: {}
});
