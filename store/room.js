export const state = () => ({
  roomName: "",
  isConnected: false
});

export const mutations = {
  setRoom(state, name) {
    state.roomName = name;
  }
};
