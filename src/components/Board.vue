<template>
  <div class="board">
    <p class="msg">{{ currentTurn }}</p>
    <ul id="gameBoard">
      <Block
        v-for="(item, index) in turns"
        :key="index"
        :value="item"
        :id="index"
        @clicked="onBlockClickHandler"
      />
    </ul>
    <Reset @clicked="onResetClickHandler" />
  </div>
</template>

<script>
import Block from "./Block.vue";
import Reset from "./Reset.vue";
import { mapActions } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "board",
  data() {
    return {
      currentTurn: null,
      count: 0,
      gameOn: true
    };
  },
  created() {
    !this.turn && this.startTheGame();
  },
  computed: {
    turns() {
      return this.$store.state.turns;
    },
    computerTurn() {
      return this.$store.state.computerTurn;
    },
    turn() {
      return this.$store.state.turn;
    }
  },
  methods: {
    ...mapActions(["setTurns", "setTurn"]),
    startTheGame() {
      let startTurn;
      try {
        startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
      } catch {
        alert("Please Type X or O");
        startTurn = prompt("Choose Your Move", "Type X or O").toUpperCase();
      }
      let computerTurn;
      let turn;
      switch (startTurn) {
        case "X":
          computerTurn = "O";
          turn = "X";
          this.currentTurn = `Player ${turn} gets to start!`;
          this.setTurn({ computerTurn, turn });
          break;
        case "O":
          computerTurn = "X";
          turn = "O";
          this.currentTurn = `Player ${turn} gets to start!`;
          this.setTurn({ computerTurn, turn });
          break;
        case null:
          alert("Sorry. Please type X or O");
          window.location.reload(true);
          break;
        default:
          alert("Sorry. Please type X or O");
          window.location.reload(true);
          break;
      }
    },
    onBlockClickHandler(id) {
      this.playerTurn(this.turn, id);
    },
    onResetClickHandler() {
      this.reset();
    },
    computersTurn() {
      var taken = false;
      while (taken === false && this.count !== 5) {
        var computerMove = (Math.random() * 10).toFixed();
        if (this.turns[computerMove] === "#") {
          taken = true;
          let turns = [...this.turns];
          turns[computerMove] = this.computerTurn;
          this.setTurns(turns);
          // this.winCondition(turns, this.turn);
        }
      }
    },
    playerTurn(turn, id) {
      this.count++;
      let turns = [...this.turns];
      if (turns[id] === "#") {
        turns[id] = turn;
        this.setTurns(turns);
        this.winCondition(this.turns, turn);
        if (this.gameOn === false) {
          // this.currentTurn = `It's ${this.computerTurn}'s turn.`;
          // setTimeout(() => {
            this.computersTurn();
            this.currentTurn = `It's ${turn}'s turn.`;
            this.winCondition(turns, this.computerTurn);
          // }, 200);
        }
      } else {
        alert("Already Selected, please select another block, Thank you!");
      }
    },
    winCondition(trackMoves, currentMove) {
      if (
        trackMoves[0] === currentMove &&
        trackMoves[1] === currentMove &&
        trackMoves[2] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[2] === currentMove &&
        trackMoves[4] === currentMove &&
        trackMoves[6] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[0] === currentMove &&
        trackMoves[3] === currentMove &&
        trackMoves[6] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[0] === currentMove &&
        trackMoves[4] === currentMove &&
        trackMoves[8] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[1] === currentMove &&
        trackMoves[4] === currentMove &&
        trackMoves[7] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[2] === currentMove &&
        trackMoves[5] === currentMove &&
        trackMoves[8] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[2] === currentMove &&
        trackMoves[5] === currentMove &&
        trackMoves[8] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[3] === currentMove &&
        trackMoves[4] === currentMove &&
        trackMoves[5] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (
        trackMoves[6] === currentMove &&
        trackMoves[7] === currentMove &&
        trackMoves[8] === currentMove
      ) {
        this.gameOn = true;
        this.reset();
        alert("Player " + currentMove + " wins!");
      } else if (!trackMoves.includes("#")) {
        this.gameOn = true;
        this.reset();
        alert("It is a Draw!");
      } else {
        this.gameOn = false;
      }
    },
    reset() {
      this.setTurns(["#", "#", "#", "#", "#", "#", "#", "#", "#"]);
      this.count = 0;
      this.gameOn = true;
    }
  },
  components: {
    Block,
    Reset
  }
};
</script>

<style scoped>
.board {
  width: 350px;
  overflow: auto;
  margin: 40px auto;
  background: #666;
  padding-bottom: 40px;
  border-radius: 10px;
}
.msg {
  color: white;
  font-size: 16px;
  font-weight: 700;
}
</style>
