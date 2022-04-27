import { fetchGET, fetchPOST } from "./dataFetching.js";

const SERVER_HOST =
  "https://asia-northeast3-likelion-js-practice.cloudfunctions.net/api";

const NAME = "최윤한";

async function getProfileData(name) {
  const path = "/member";

  const res = await fetchGET(SERVER_HOST, path, {name : name});

  const myName = res.data.profile.name;
  const myMbti = res.data.profile.mbti;
  const myGithub = res.data.profile.github;

  document.querySelector("#fetch-name").innerHTML = myName;
  document.querySelector("#fetch-mbti").innerHTML = myMbti;
  document.querySelector("#fetch-github").innerHTML = myGithub;
  
}

async function getFootprint(name) {
  const path = "/footprint";
  const res = await fetchGET(SERVER_HOST, path, {name:name});
  
  const messages = res.data.messages;
  
for (let i=0; i < messages.length; i++) {
  const messageFormat = `<div class="board-row">
  ${messages[i]}
</div>`

document.querySelector(".board").innerHTML += messageFormat;

}
}

async function sendFootprint() {
  const path = "/footprint";

  const messageObj = {
    content: document.querySelector(".message-content").value,
    receiverName :document.querySelector(".message-sender").value,
    };
  
  const res = await fetchPOST(SERVER_HOST, path, messageObj);
  if (res.status === 200) {
    alert("메시지를 성공적으로 전송하였습니다.");
    // location.reload();
  } else {
    alert("메시지 전송에 실패하였습니다.");
  }
}

window.onload = function () {
    // // 프로필 정보를 서버에서 받아와서 DOM을 업데이트 합니다.
    // const isGetProfileSuccess = getProfileData(NAME);

    // // 메시지를 서버에서 받아와서 DOM을 업데이트 합니다.
    // const isGetFootprintSuccess = getProfileData(NAME);
  
    // if (!isGetProfileSuccess || !isGetFootprintSuccess) {
    //   alert("데이터 로딩에 실패하였습니다.");
    // }
  const sendButton = document.querySelector(".send-btn");
  sendButton.addEventListener("click", () => {
    sendFootprint();
  });
  getProfileData(NAME);
  getFootprint(NAME);
};



