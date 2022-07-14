const calculateDamage = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      player_health: 100,
      monster_health: 100,
      rounds: 0,
    };
  },
  methods: {
    attack() {
        this.rounds++;
        const damage = calculateDamage(12, 4);
        this.monster_health -= damage;
        this.monsterAttack();
    },
    monsterAttack() {
        const damage = calculateDamage(15, 8);
        this.player_health -= damage;
    },
    specialAttack() {
        this.rounds++;
        const damage = calculateDamage(25, 15);
        this.monster_health -= damage;
        this.monsterAttack();
    }
  },
  computed: {
  }
});

app.mount("#game");
