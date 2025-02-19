<template>
  <form @submit.prevent="sendEmail">
    <label for="prenom">Prénom:</label>
    <input type="text" id="prenom" v-model="form.prenom" required>

    <label for="nom">Nom:</label>
    <input type="text" id="nom" v-model="form.nom" required>

    <label for="email">Email:</label>
    <input type="email" id="email" v-model="form.email" required>

    <label for="objet">Objet:</label>
    <input type="text" id="objet" v-model="form.objet" required>

    <label for="message">Message:</label>
    <textarea id="message" v-model="form.message" required></textarea>

    <button type="submit" :disabled="loading">
      {{ loading ? "Envoi en cours..." : "Envoyer" }}
    </button>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        prenom: "",
        nom: "",
        email: "",
        objet: "",
        message: "",
      },
      loading: false,
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async sendEmail() {
      this.loading = true;
      this.successMessage = "";
      this.errorMessage = "";

      try {
        const response = await fetch("http://localhost:3000/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        const data = await response.json();

        if (response.ok) {
          this.successMessage = "Votre message a été envoyé avec succès !";
          this.form = { prenom: "", nom: "", email: "", objet: "", message: "" }; // Réinitialiser le formulaire
        } else {
          this.errorMessage = data.message || "Erreur lors de l'envoi du message.";
        }
      } catch (error) {
        console.error("Erreur:", error);
        this.errorMessage = "Une erreur est survenue.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  min-width: 200px;
  width: 80%;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

label {
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

input, textarea {
  display: flex;
  text-align: center;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 15px;
  padding: 10px;
  background-color: #5c67f2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:disabled {
  background-color: #aaa;
}

.success {
  color: green;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
