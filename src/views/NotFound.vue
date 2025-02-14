<template>
    <div class="not-found">
      <img src="/images/404.png" alt="404" />
      <h1>404 - Page non trouvée</h1>
      <p>Oups ! La page que vous cherchez n'existe pas.</p>
      <router-link to="/">Retour à l'accueil</router-link>
    </div>
</template>

<script setup>
console.log("✅ NotFound.vue est bien monté !");
</script>
  
<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  border: 2px solid red; /* Ajoute une bordure rouge */
}
</style>