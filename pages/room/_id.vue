<template>
  <div class="container">
    <div>
      <h1>ROOM: {{$route.params.id}}</h1>
      <p>
        <NLink to="/" class="button--grey">Back</NLink>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #00C48D;
}
p {
  margin-top: 20px;
}
</style>
