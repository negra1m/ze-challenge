<template>
  <div class="amount">
    <button @click="add(-1)" :disabled="amount == 0" class="minus btn" type="button" name="button">-</button>
    <input :disabled="true" id="amount" type="number" name="name" v-model="this.amount" />
    <button @click="add(1)" class="plus btn" type="button" name="button">+</button>
  </div>
</template>
<script>
let uuid = 0;

export default {
  name: "Buttons",
  components: {},
  data: function() {
    return {
      amount: 0
    };
  },
  beforeCreate() {
    this.uuid = uuid.toString();
    uuid += 1;
  },
  methods: {
    add: function(value) {
      this.amount += value;
    }
  }
};
</script>
<style scoped>
#amount {
  width: 40px;
  height: 40px;
  padding: 0;
  text-align: center;
  margin: 0;
  border: none;
  text-align: right;
  font-size: 20px;
}
.amount > button {
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid yellow;
  border-radius: 50%;
  font-size: 20px;
  outline: none;
  background-color: transparent;
}

@media only screen and (min-width: 320px) and (max-width: 820px) {
  #amount {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  .amount > button {
    width: 30px;
    height: 30px;
  }
}
</style>