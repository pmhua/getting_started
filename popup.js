// Initialize butotn with users's prefered color

console.log('popup open')

let refresh = document.getElementById("refresh");

let colorD = document.getElementById('color');
let timeD = document.getElementById('time');
let urlD = document.getElementById('url')
/*
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
  colorD.innerText = color;
});
*/
//console.log('got color in pop-up: ',test);

// chrome.storage.sync.get("time", ({ time }) => {
//   console.log('got time in pop-up: ',time);
//   timeD.innerText = `${time}`;
// });

// chrome.storage.sync.get("url", ({ url }) => {
//   console.log('got url in pop-up: ',url);
//   urlD.innerText = url;
// });






// When the button is clicked, inject setPageBackgroundColor into current page
refresh.addEventListener("click", async () => {


  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.storage.sync.get("on", ({on}) => {
    if (on === false) {
        let window = tab.id;
        chrome.storage.sync.set({ window })
        chrome.storage.sync.set({ on: true })
      // console.log(tab[0])
      /*
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
      });
      */
    } else {
      chrome.storage.sync.set({ on: false })
    }
  })

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
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("on", ({ on }) => {
//   console.log('on: ',on)
  
//   })
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
// }
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
