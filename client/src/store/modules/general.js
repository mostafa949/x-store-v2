const General = {
  state: {
    menu: {
      activeMenu: false, // check if menu active or not ( Default not active )
      arrowColor: '#1e1e1e' // menu arrow color in sidebar
    },
  },
  getters: {
    activeMenu(state) {
      return state.menu.activeMenu;
    },
    arrowColor(state) {
      return state.menu.arrowColor;
    },
  },
  mutations: {
    setActiveMenu(state, checkMenu) {
      state.menu.activeMenu = checkMenu;
    },
  },
  actions: {
    setActiveMenu({ state, commit }) {
      const checkMenu = state.menu.activeMenu ? false : true;
      commit("setActiveMenu", checkMenu);
    },
  },
};

export default General;
