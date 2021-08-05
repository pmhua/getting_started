function eventFunc() {
  let submit = document.querySelector('#submit');
  submit.addEventListener("click", () => {
  let input = document.querySelector('#input');
  let time = input.value * 1000;
  chrome.storage.sync.set({ time });
  input.value = '';
  })
}

eventFunc();