<!-- src/App.vue -->
<script setup>
import Modal from './components/Modal.vue';
import ContactForm from './components/ContactForm.vue';
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();

watch(route, (newRoute) => {
  console.log("Nouvelle route :", newRoute.path);
});
</script>

<template>
  <div class="page-container">
    <router-view :key="$route.fullPath" />


    <!-- Section des modales -->
    <section id="modals-section">
      <div class="modals-container">

        <!-- Curriculum Vitae -->
        <div class="modal-wrapper">
          <h2>Curriculum Vitae</h2>
          <img src="../Images/Aperçu CV.png" alt="Aperçu CV">
          <button @click="showModal1 = true">Ouvrir</button>
          <Modal :isVisible="showModal1" @update:isVisible="showModal1 = $event">
            <h2>Voici mon CV</h2>
            <p>Joint ci-dessous mon CV incluant mes compétences personnelles et professionnelles</p>
            <a href="../public/CV-main/CV.html" target="_blank" rel="noopener noreferrer"><img id="img-modal" src="../Images/Aperçu CV.png" alt="Aperçu CV"></a>
            <a href="https://github.com/CLouvrier21/CV">Lien vers le Repository GitHub</a>
          </Modal>
        </div>

        <!-- Cahier des Charges -->
        <div class="modal-wrapper">
          <h2>Cahier des Charges</h2>
          <img src="../Images/Aperçu CDC.png" alt="Aperçu Cahier des Charges">
          <button @click="showModal2 = true">Ouvrir</button>
          <Modal :isVisible="showModal2" @update:isVisible="showModal2 = $event">
            <h2>Voici mon Cahier des Charges</h2>
            <p>Voici un projet "Cahier des Charges"</p>
            <a href="../public/Cahier des Charges.pdf" target="_blank" rel="noopener noreferrer"><img src="../Images/Aperçu CDC.png" alt="Image 1"></a>
          </Modal>
        </div>

        <!-- Espace Commentaire Dynamique -->
        <div class="modal-wrapper">
          <h2>Espace Commentaire Dynamique</h2>
          <img src="../Images/Aperçu Commentaire.png" alt="Aperçu Commentaire">
          <button @click="showModal3 = true">Ouvrir</button>
          <Modal :isVisible="showModal3" @update:isVisible="showModal3 = $event">
            <h2>Voici mon Espace Commentaire Dynamique</h2>
            <p>Voici un projet comprenant un Espace Commentaire Dynamique</p>
            <a href="../public/Devoir-Commentaire-main/Commentaire.html" target="_blank" rel="noopener noreferrer"><img id="img-modal" src="../Images/Aperçu Commentaire.png" alt="Aperçu Commentaire"></a>
            <a href="https://github.com/CLouvrier21/Devoir-Commentaire">Lien vers le Repository GitHub</a>
          </Modal>
        </div>

      </div>
    </section>

    <!-- Section du formulaire de contact -->
    <section class="contact-section" id="section4">
      <ContactForm />
    </section>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import ContactForm from './components/ContactForm.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    Modal,
    ContactForm,
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
    };
  },
};
</script>

<style scoped>
/* 🌍 Structure générale */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start; 
}

/* 🗂 Section principale des modals */
#modals-section {
  width: 100%;
  margin-bottom: 200px;
  max-width: 1200px;
}

/* 🎯 Titres */
#modals-section h1,
.contact-section h1 {
  text-align: center;
  margin-bottom: 30px;
}

/* 📦 Conteneur des modals */
.modals-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  padding: 20px 0;
  width: 100%;
}

/* 📩 Section Contact */
.contact-section {
  background-color: #ffffff;
  width: 50%;
  max-width: 600px;
  min-width: 280px;
  border-radius: 20px;
  margin-bottom: 75px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

/* 📷 Images */
img {
  width: 100%;
  max-width: 300px;
  height: auto;
}

#img-modal {
  max-width: 400px;
}

/* 🏗 Modals */
.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  max-width: 300px;
  padding: 30px;
  background-color: rgb(138, 138, 138);
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 🎛 Boutons */
button {
  padding: 10px 20px;
  width: auto;
  min-width: 100px;
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease;
}

button:hover {
  background-color: rgb(70, 0, 0);
}

/* 📱 Adaptation pour écrans moyens (tablettes) */
@media (max-width: 768px) {
  .modals-container {
    gap: 30px;
  }

  .contact-section {
    width: 70%;
  }

  .modal-wrapper {
    width: 90%;
    max-width: 250px;
  }
}

/* 📲 Adaptation pour petits écrans (mobiles) */
@media (max-width: 480px) {
  .contact-section {
    width: 90%;
  }

  .modal-wrapper {
    width: 100%;
    max-width: 220px;
    padding: 20px;
  }

  img {
    max-width: 250px;
  }
}
</style>
