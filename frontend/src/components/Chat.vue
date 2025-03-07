<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index" class="message">
        {{ msg }}
      </div>
    </div>
    <form @submit.prevent="handleSubmit">
      <input v-model="newMessage" placeholder="Введите сообщение..." />
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
import { connectWebSocket, sendMessage } from '../services/websocket';

export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  mounted() {
    connectWebSocket((msg) => {
      this.messages.push(msg);
    });
  },
  methods: {
    handleSubmit() {
      if (this.newMessage.trim()) {
        sendMessage(this.newMessage);
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
}
.messages {
  flex-grow: 1;
  overflow-y: auto;
}
.message {
  padding: 8px;
}
</style>
