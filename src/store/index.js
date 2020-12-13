import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    totalProducts: 0,
    first: 10,
    searchTerm: "",
    page: 0,
    isLoading: true
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
    },

    isLoading: state => {
      return state.isLoading;
    }
  },

  mutations: {
    setProducts: (state, { products }) => {
      state.products = products;
    },
    setTotalProducts: (state, total) => {
      state.totalProducts = total;
    },
    setSearchTerm: (state, newTerm) => {
      state.searchTerm = newTerm;
    },

    setPage: (state, newPage) => {
      state.page = newPage;
    },

    setLoading: (state, bool) => {
      state.isLoading = bool;
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
                    },
                    
                  }
                }
              }
            }
          }
        `,
          variables: {
            term: state.searchTerm,
            first: state.first
          }
        })
        .then(
          response => {
            commit("setProducts", {
              products: response.data.data.search.products.edges
            });
            commit(
              "setTotalProducts",
              response.data.data.search.products.total
            );

            return true;
          },
          err => {
            // console.log(err);
            return false;
          }
        );
    },
    getProductsByTerm: function({ commit, dispatch }, term) {
      // console.log(term); debug
      commit("setSearchTerm", term);
      dispatch("getProducts");
    },
    cleanSearch: function({ commit, dispatch }) {
      commit("setSearchTerm", "");
      dispatch("getProducts");
    },
    getLoading: function({ commit, dispatch, state }) {
      commit("setLoading", true);
      setTimeout(() => {
        commit("setLoading", false);
      }, 2000);
    }
  },
  modules: {}
});
