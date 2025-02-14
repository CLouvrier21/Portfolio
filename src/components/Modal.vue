<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <slot></slot> <!-- Contenu dynamique de la modal -->
      <button @click="closeModal">Fermer</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:isVisible', false); 
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 600px;
  align-items: center;
  text-align: center;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: rgb(70, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  align-self: center;
}
</style>
