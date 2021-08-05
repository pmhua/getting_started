let color = '#3aa757';
let time = 3000;
let on = false;
let window = null;
let change = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ on });
  chrome.storage.sync.set({ color });
  chrome.storage.sync.set({ time });
  chrome.storage.sync.set({ window })
  chrome.storage.sync.set({ change })
  console.log('Default background color set to %cgreen', `color: ${color}`);
  // chrome.alarms.create('refresh', {periodInMinutes: 0.5});
});

/*

chrome.alarms.onAlarm.addListener(alarm => {
  console.log(alarm.name)
  alert('hi')
})
*/

chrome.storage.onChanged.addListener((changes) => {
  console.log('changes: ',changes)
  
  if (changes.time) {


    console.log(changes.time.newValue)

  }
  if (changes.on.newValue === false) {
    chrome.storage.sync.get("intervalId", ({intervalId}) => {
      clearInterval(intervalId);
    })
  }
  if (changes.on.newValue === true || changes.change) {

    console.log('got here')
    // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //console.log(tab.id)
    
    chrome.storage.sync.get("window", ({window}) => {

      console.log('windowid, ',window)
      
      chrome.storage.sync.get("url", ({ url }) => {
      

        chrome.storage.sync.get("time", ({ time }) => {
            console.log('retrieved from storage: ', url)
            let intervalId = setInterval(async () => {
              // console.log('reloading...',url,' : window: ',window)
              await chrome.storage.sync.get("change",({change}) => {
                chrome.storage.sync.set({ change: !change })
                
              })
              chrome.tabs.reload(window)
              /*
              */
            }, time)
            chrome.storage.sync.set({ intervalId })
          })
    })
      
      
      
      /*
      chrome.scripting.executeScript({
        target: { tabId: window },
        function: test3,
      });
      */
    })
    //let test323 = chrome.extension.getBackgroundPage()
    
    
  }
})

/*
function test3() {
    // console.log('newValue: ',changes.newValue)
    chrome.storage.sync.get("url", ({ url }) => {
      
      console.log('retrieved from storage: ', url)
      setInterval(async () => {
        console.log('reloading...',url,' : window: ',window)
        await chrome.storage.sync.get("change",({change}) => {
          chrome.storage.sync.set({ change: !change })
          
        })
        window.location.replace(url)
        /*
      }, 3000)
    })
  }
  
  */

/*

chrome.runtime.onInstalled.addListener((tabId, changeInfo, tab) => {
  console.log('tabId: ',tabId)
  console.log('changeInfo: ',changeInfo)
  console.log('tab: ',tab)
    chrome.tabs.executeScript({
      target: tabId,
      function: func
    })
  

})


function func() {
  console.log('hi')
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
    chrome.storage.sync.set({ on: true })

    //chrome.storage.sync.get("url", ({ url }) => {
      console.log('retrieved from storage: ', url)
      setInterval(() => {
        console.log('reloading...')
        window.location.replace(url)
      }, 3000)
}



async function getCurrentTab() {
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}




chrome.runtime.onInstalled.addListener(() => {
  console.log('Default time set to %ctime', `time: ${time}`);
})


chrome.runtime.onInstalled.addListener(async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
  ///console.log(tab);;
  
  //console.log(JSON.stringify(tab))
  //let url = tab.url;
  chrome.storage.sync.set({"url": tab.url});
  //console.log('setting url to: ',tab.url)
  
  chrome.storage.sync.get()
  
  
})
*/


/*
chrome.browserAction.onClicked.addListener((tab) => {
  console.log(tab[0].url)
})

/*

chrome.runtime.onInstalled.addListener(() => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let url = tab.url;
  console.log('Default url is set to ?: ',url)
})
*/
/*
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get('color', ({ data }) => {
    console.log('color: ',data)
  })
})
*/
