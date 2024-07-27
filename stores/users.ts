import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userName = ref(localStorage.getItem("userName") || "");
  const users = ref<any>([]);
  const messages = ref<any>([]);
  const typingStatus = ref("");

  const setUserName = (name: any) => {
    userName.value = name;
    localStorage.setItem("userName", name);
  };

  const addUser = (user: any) => {
    users.value.push(user);
  };

  const setUsers = (newUsers: any) => {
    users.value = newUsers;
  };

  const addMessage = (message: any) => {
    messages.value.push(message);
  };

  const setTypingStatus = (status: any) => {
    typingStatus.value = status;
  };

  return {
    userName,
    users,
    messages,
    typingStatus,
    setUserName,
    addUser,
    setUsers,
    addMessage,
    setTypingStatus,
  };
});
