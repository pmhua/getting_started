// Initialize butotn with users's prefered color

console.log('popup open')

let changeColor = document.getElementById("changeColor");

let colorD = document.getElementById('color');
let timeD = document.getElementById('time');
let urlD = document.getElementById('url')

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
  colorD.innerText = color;
});
//console.log('got color in pop-up: ',test);

chrome.storage.sync.get("time", ({ time }) => {
  console.log('got time in pop-up: ',time);
  //changeColor.style.backgroundColor = color;
  timeD.innerText = `${time}`;
});

chrome.storage.sync.get("url", ({ url }) => {
  console.log('got url in pop-up: ',url);
  //changeColor.style.backgroundColor = color;
  urlD.innerText = url;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    let window = tab.id;
    chrome.storage.sync.set({ window })
  // console.log(tab[0])
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
/*
chrome.storage.sync.get("on", ({ on }) => {
  console.log(on)
  if (on) {
    changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  // console.log(tab[0])
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});
  }
})
*/
// console.log('hi')
// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("on", ({ on }) => {
  console.log('on: ',on)
  /chrome.storage.sync.set({ on: !on })
  })
  /*
  let test = document.location;
  console.log(test.href)
  let url = test.href;
    // console.log("test, ",test)
    // console.log(test)
    /*
    chrome.storage.sync.get("color", ({ color }) => {
      test.style.backgroundColor = color;
      colorD.innerText = color;
      
    })

    //chrome.storage.sync.get("url", ({ url }) => {
      console.log('retrieved from storage: ', url)
      setInterval(() => {
        console.log('reloading...')
        window.location.replace(url)
      }, 3000)
    //})
    */
}
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
 
 
 //chrome.devtools.inspectedWindow.reload()
 /*
 let test = setInterval(() => {
   console.log('test')
   // chrome.tabs.reload(tab)
   chrome.tabs.reload()
 }, 3000)
}
*/
