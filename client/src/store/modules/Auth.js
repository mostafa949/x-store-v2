import axios from "axios";

const Auth = {
  state: {},
  getters: {},
  mutations: {
    setActiveMenu(state, checkMenu) {
      state.menu.activeMenu = checkMenu;
    },
  },
  actions: {
    signup(context, authData) {
      return new Promise((resolve, reject) => {
        axios
          .post("/register", authData)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};

export default Auth;
