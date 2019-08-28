export default {
    setTurn(state, { computerTurn, turn }) {
        state.computerTurn = computerTurn;
        state.turn = turn;
    },
    setTurns(state, payload) {
        state.turns = payload;
    }
}