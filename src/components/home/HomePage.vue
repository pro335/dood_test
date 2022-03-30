<template>
  <div class="row homeContainer">
    <div class="col-lg-9 col-md-12" v-blur="blurConfig">
      <mux-video
        playback-id="AHtNUiG600zlYSjecA5Nnp6OPitww802KLUnX023WnL118"
        metadata-video-title="Live Streaming"
        metadata-viewer-user-id="user-id-1234"
        stream-type="on-demand"
        controls
      ></mux-video>
    </div>
    <div class="col-lg-3 col-md-12">
      <div class="chatContainer">
        <div v-blur="blurConfig">
          <span class="ChatLavel">Chat</span><span class="LiveLevel">Live</span>
        </div>
        <div class="mainChatBody" v-blur="blurConfig">
          <div v-for="(item, index) in messages" :key="index" class="chat-item">
            <div class="row">
              <div class="col-sm-1">
                <img class="chat-avatar" src="/src/assets/avatar.png" />
              </div>
              <div class="col-sm-10">
                <span class="chat-content"
                  ><span class="chat-name">{{ item.name }}: </span>
                  {{ item.content }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row messageContainer">
          <input
            type="text"
            v-model="message"
            name="message"
            class="col-sm-8 messageTag"
            placeholder="Message"
          />
          <button class="col-sm-4 btn sendBtn" @click="sendMsg">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "@mux-elements/mux-video";

export default {
  components: {},
  computed: {
    ...mapState({
      messages: (state) => state.messages.all.items,
    }),
  },
  created() {
    this.getAllMessages();
  },
  data() {
    return {
      message: "",
      isBlurred: false,
      blurConfig: {
        isBlurred: false,
        opacity: 0.3,
        filter: "blur(1.2px)",
        transition: "all .3s linear",
      },
      history: [],
    };
  },
  methods: {
    ...mapActions("messages", ["getAllMessages", "addMessage"]),
    sendMsg() {
      if (!this.message.trim()) return;
      this.addMessage({
        name: JSON.parse(localStorage.getItem("user")).username,
        content: this.message,
      });
      this.message = "";
    },
    changeMsg() {
      if (this.message.trim()) this.blurConfig.isBlurred = true;
      else this.blurConfig.isBlurred = false;
    },
  },
  mounted() {},
  watch: {
    message() {
      this.changeMsg();
    },
  },
};
</script>
<style scoped>
.homeContainer {
  margin: 40px 107px 0 107px;
  max-width: 100% !important;
  width: inherit;
}

.chatContainer {
  padding: 20px 16px 0 16px;
  background-color: rgb(20, 52, 55);
  border-radius: 10px;
  color: white;
}

.ChatLavel {
  font-size: 18px;
}

.LiveLevel {
  margin-left: 10px;
  padding: 1px 8px;
  vertical-align: text-bottom;
  font-size: 12px;
  background-color: #00cb51;
  border-radius: 3px;
}

.mainChatBody {
  max-height: 555px;
  height: 555px;
  overflow-x: hidden;
  overflow-y: auto;
}

.chat-item {
  margin-top: 11px;
  font-size: 12px;
}

.chat-avatar {
  width: 20px;
}

.chat-name {
  color: rgb(0, 204, 95);
}

.chat-content {
  color: rgb(168, 181, 186);
}

.messageContainer {
  padding: 20px 16px;
}

.messageTag {
  background-color: rgb(20, 52, 55) !important;
  border: 1.5px solid #f6f8ff;
  border-right: none;
  border-radius: 8px 0 0 8px;
  font-size: 14px;
  color: white;
}

.sendBtn {
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  color: #383066;
}
</style>