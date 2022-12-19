let isRequesting = false;

function init() {
  //const shareButton = createBtn();
  const navButton = createNav();
  const tokenCounter = createTokenCounter();
  //const loadButton = createLoadMore();

    //pages
    const pageSettings = settingsPage();
    const pageExplore = explorePage();
    const pageHistory = historyPage();
    const pagePlugins = pluginsPage();
    const pageProfile = profilePage();

    //tabs
    const tabsSelection = selectTab();
    const tabsWebSearch = webSearchTab();
    const tabsCommands = commandsTab();
    const tabsChat = chatTab();
   // const tabsShare = shareTab();

 const divAdd = document.querySelector(
  "#__next main:nth-of-type(1)"
);
divAdd.id = 'main-page';

  const buttonsWrapper = document.querySelector(
    "#__next main form > div div:nth-of-type(1)"
  );

  const navWrapper = document.querySelector(
    "nav"
  );

 /* setTimeout(() => {
    shareButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>Share`;
    shareButton.style.cursor = "pointer";
    isRequesting = false;
  }, 1000);*/

  const tokenCounterWrapper = document.querySelector(
    "main > div > form"
  );
  const loadmoreWrapper = document.querySelector(
    "main > div > form"
  );

  const mainWindowBox = document.querySelector(
    "#__next main:nth-of-type(1)"
  );

  const mainWindowBoxTabs = document.querySelector(
    "#__next > div > div"
  );

  //Buttons
  //buttonsWrapper.replaceWith(shareButton);
  navWrapper.replaceWith(navButton)
  //tokenCounterWrapper.replaceWith(tokenCounter);
  //loadmoreWrapper.appendChild(loadButton);

  //How to do tabs
  mainWindowBoxTabs.append(tabsSelection);
  mainWindowBoxTabs.append(tabsWebSearch);
  mainWindowBoxTabs.append(tabsCommands);
  mainWindowBoxTabs.append(tabsChat);
 // mainWindowBoxTabs.append(tabsShare);

  //How to do pages
  mainWindowBox.append(pageSettings);
  mainWindowBox.append(pageExplore);
  mainWindowBox.append(pageHistory);
  mainWindowBox.append(pagePlugins);
  mainWindowBox.append(pageProfile);

  const textareaElement = document.querySelector("#__next main form textarea");

  const submitButton = textareaElement.nextElementSibling;

  document.body.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      showIfNotLoading(submitButton, shareButton);
    }
  });

  submitButton.addEventListener("click", (event) => {
    showIfNotLoading(submitButton, shareButton);
  });
/*
  shareButton.addEventListener("click", async () => {
    if (isRequesting) return;
    isRequesting = true;
    shareButton.textContent = "Sharing...";
    shareButton.style.cursor = "initial";

    const threadContainer = document.querySelector(
      "#__next main div:nth-of-type(1) div:nth-of-type(1) div:nth-of-type(1) div:nth-of-type(1)"
    );

    const conversationData = {
      avatarUrl: getAvatarImage(),
      items: [],
    };

    for (const node of threadContainer.children) {
      const markdownContent = node.querySelector(".markdown");

      // tailwind class indicates human or gpt
      if ([...node.classList].includes("dark:bg-gray-800")) {
        conversationData.items.push({
          from: "human",
          value: node.textContent,
        });
        // if it's a GPT response, it might contain code blocks
      } else if ([...node.classList].includes("bg-gray-50")) {
        conversationData.items.push({
          from: "gpt",
          value: markdownContent.outerHTML,
        });
      }
    } 
    const res = await fetch("https://mesmo.io/api/share", {
      body: JSON.stringify(conversationData),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }).catch((err) => {
      isRequesting = false;
      alert(
        `Error saving conversation: ${err.message}. The developer has been notified.`
      );
    });
    const { id } = await res.json();
    const url = `https://mesmo.io/${id}`;

    window.open(url, "_blank");

    setTimeout(() => {
      shareButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>Share`;
      shareButton.style.cursor = "pointer";
      isRequesting = false;
    }, 1000); 
  }); 
  */

}

function showIfNotLoading(loadingElement, newElement) {
  const timerId = setInterval(() => {
    if (loadingElement.disabled) {
      isLoading = true;
      newElement.style.display = "none";
    } else {
      isLoading = false;
      newElement.style.display = "flex";
      clearInterval(timerId);
    }
  }, 100);
}

function getAvatarImage() {
  // Create a canvas element
  const canvas = document.createElement("canvas");

  const image = document.querySelectorAll("img")[1];

  // Set the canvas size to 30x30 pixels
  canvas.width = 30;
  canvas.height = 30;

  // Draw the img onto the canvas
  canvas.getContext("2d").drawImage(image, 0, 0);

  // Convert the canvas to a base64 string as a JPEG image
  const base64 = canvas.toDataURL("image/jpeg");

  return base64;
}

function createBtn() {
  const button = document.createElement("button");

  button.classList.add("btn", "flex", "gap-2", "justify-center", "btn-neutral");

  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>Share`;

  return button;
}

function createTokenCounter() {
  const tokencount = document.createElement("form");

  tokencount.classList.add("stretch", "mx-2", "flex", "flex-col", "gap-3", "pt-2", "last:mb-2", "md:last:mb-6", "lg:mx-auto", "lg:max-w-3xl", "lg:pt-6");

  tokencount.innerHTML = `<div class="w-full flex gap-2 justify-center mb-3"><button class="btn flex justify-center gap-2 btn-neutral"><svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>Try again</button>
  <button class="btn flex justify-center gap-2 btn-neutral"><svg stroke="currentColor" fill="currentColor" stroke-width="1.5" viewBox="0 0 448 512" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"></path></svg>Load More</button></div><div class="flex flex-row w-full py-2 pl-3 md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"><div class="pr-2 mr-3 pt-1 text-left text-xs text-black/50 dark:text-white/50">0/4097</div>
      
      <textarea tabindex="0" data-id="request-:r0:-4" rows="1" placeholder="" class="ml-4 p-0 pl-4 w-full resize-none border-0 bg-transparent pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent" style="max-height: 200px;height: 24px;overflow-y: hidden;"></textarea><button class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-4 w-4 rotate-90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button>
  </div></div>`;

  return tokencount;
}

function createLoadMore() {

  var imgURL = `<svg stroke="currentColor" fill="currentColor" stroke-width="1.5" viewBox="0 0 448 512" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"></path></svg>`;
  //chrome.extension.getURL("images/loadmore.svg");

  const loadmore = document.createElement("button");

  loadmore.classList.add("btn", "flex", "gap-2", "justify-center", "btn-neutral");

  loadmore.innerHTML = imgURL + `Load More`;

  return loadmore;
}








function selectTab() {

  const selecttab_css = `
  .section-tabs {
    position: absolute;
    z-index: 0;
    width: 50%;
    height: 50%;
    overflow: hidden;
    cursor: pointer;
    transform: scale(1);
    will-change: transform, contents;
    transition-property: all;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .section-tabs:nth-child(1) {
    top: 0;
    left: 0;
  }
  .section-tabs:nth-child(2) {
    top: 0;
    left: 50%;
  }
  .section-tabs:nth-child(3) {
    top: 50%;
    left: 0;
  }
  .section-tabs:nth-child(4) {
    top: 50%;
    left: 50%;
  }
  .not-expandable {
    top: 0;
    left: 0;
    background: #000000;
  }
  .section-tabs.is-expanded {
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    cursor: initial;
  }
  .has-expanded-item .section-tabs:not(.is-expanded) {
    transform: scale(0);
  }
  
  .close-section-tabs {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
    transition: opacity 150ms linear;
    will-change: opacity;
  }
  .section-tabs.is-expanded .close-section-tabs {
    z-index:inherit;
    opacity: 1;
    transition-delay: 500ms;
    pointer-events: initial;
  }


  .close:not(.is-expanded) {
    opacity: 1;
    transition-delay: 500ms;
    pointer-events: initial;
  }
  
  .close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
    transition: opacity 150ms linear;
    will-change: opacity;
  }
  .close.is-expanded {
    transform: scale(0);
  }


  .section-tabs {
    margin: 0;
    font: 16px/1.5 "Roboto Slab", sans-serif;
    background: #000;
  }
  
  .chat-box {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 300;
  }
  .chat-box-create {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 300;
  }`;
  //require('./css/selecttab.css');
  const tabs = document.createElement("main");

  tabs.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1");
  tabs.id = "select-tabs";
  tabs.style.display = 'none';


  tabs.innerHTML = `<div id="tabs">
  <section class="section-tabs tab-button" data-tab="tab1">
  <div class="close-section-tabs">&times;</div>
  <div id="chatbox1" class="chat-box">

  </div>
</section>
  <section id="add-button" class="section-tabs tab-button not-expandable">
    <div class="chat-box-create">+</div>
  </section>
</div>`;

  tabs.innerHTML += `<style>` + selecttab_css + `</style>`;

  return tabs;
}

function createNav() {
  const nav = document.createElement("nav");

  nav.classList.add("m-2", "flex", "h-full", "flex-1", "flex-col", "space-y-2", "pb-2");

  nav.innerHTML = `<div class="btn m-0 p-0 gap-2 flex justify-center btn-neutral search-box-nav" style="display: none;"><input type="text" class="search-bar bg-transparent border-none" placeholder="Search Threads...">
  </div>
  
  <div class="w-full flex gap-2 justify-center mb-3"><a class="btn flex justify-center gap-2 btn-neutral w-50" style="display:none;">Reset Chat</a>

<a class="btn flex justify-center gap-2 btn-neutral" style="display:none;">Reset Search</a>
</div>

<a id="nav-main-page" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 576 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>Home</a>
    
    <a id="nav-select-tabs" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 576 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"></path></svg>Tabs</a>
    
    <a id="nav-explore-page" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 512 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M256 496c132.5 0 240-107.5 240-240S388.5 16 256 16S16 123.5 16 256s107.5 240 240 240zM235.3 76.7L256 97.4l20.7-20.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 120 324 165.4 357.4 132l-16.7-16.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L380 109.4l8.7-8.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-8.7 8.7 16.7 16.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L380 154.6 346.6 188 392 233.4l20.7-20.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L414.6 256l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L392 278.6 346.6 324 380 357.4l16.7-16.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L402.6 380l8.7 8.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-8.7-8.7-16.7 16.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L357.4 380 324 346.6 278.6 392l20.7 20.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 414.6l-20.7 20.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 392 188 346.6 154.6 380l16.7 16.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L132 402.6l-8.7 8.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l8.7-8.7L92.7 363.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L132 357.4 165.4 324 120 278.6 99.3 299.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L97.4 256 76.7 235.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L120 233.4 165.4 188 132 154.6l-16.7 16.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L109.4 132l-8.7-8.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l8.7 8.7 16.7-16.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L154.6 132 188 165.4 233.4 120 212.7 99.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zM210.6 188L256 233.4 301.4 188 256 142.6 210.6 188zm68 68L324 301.4 369.4 256 324 210.6 278.6 256zM256 278.6L210.6 324 256 369.4 301.4 324 256 278.6zM233.4 256L188 210.6 142.6 256 188 301.4 233.4 256z"></path></svg>Explore</a>
    
    <a id="nav-websearch-tab" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 512 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"></path></svg>Web Search</a>
    
    <a id="nav-history-page" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 512 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"></path></svg></svg>History</a>

    <a id="nav-plugins-page" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 512 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"></path></svg>Plugins</a>
    
    <a id="nav-command-tab" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 512 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 41.4 86.6zM288 416H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg>Commands</a>
    
    <a id="nav-chat-tab" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 512 512" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"></path></svg>Chat with Others</a>

<div class="flex-col flex-1 overflow-y-auto border-b border-white/20"><div class="flex flex-col gap-2 text-gray-100 text-sm"></div></div>

<a id="nav-settings-page" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="currentColor" stroke-width="2" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"></path></svg>Settings</a>

<a id="nav-share-tab" target="_blank" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 640 512" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"></path></svg>
Share</a>

<a id="nav-profile-page" target="_blank" class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg>Profile</a>

<a class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>Log out</a>`;

  return nav;
}

function profilePage() {

  const page = document.createElement("main");
  page.id = "profile-page";
  page.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "profile-page");
  page.style.display = 'none';

  page.innerHTML = `
<form id="settings-form">
  <div>
    <label for="enable-images">
      <input type="checkbox" id="enable-images" name="enable-images" value="true" />
      Enable Images
    </label>
  </div>
  <div>
    <label for="enable-video">
      <input type="checkbox" id="enable-video" name="enable-video" value="true" />
      Enable Video
    </label>
  </div>
  <div>
    <label for="enable-audio">
      <input type="checkbox" id="enable-audio" name="enable-audio" value="true" />
      Enable Audio
    </label>
  </div>
  <div>
    <label for="enable-audio-talk-back">
      <input type="checkbox" id="enable-audio-talk-back" name="enable-audio-talk-back" value="true" />
      Enable Audio Talk Back
    </label>
  </div>
  <div>
    <label for="enable-code-preview">
      <input type="checkbox" id="enable-code-preview" name="enable-code-preview" value="true" />
      Enable Code Preview
    </label>
  </div>
  <div>
    <label for="enable-research-paper-mode">
      <input type="checkbox" id="enable-research-paper-mode" name="enable-research-paper-mode" value="true" />
      Enable Research Paper Mode Only
    </label>
  </div>
  <div>
    <label for="enable-citations">
      <input type="checkbox" id="enable-citations" name="enable-citations" value="true" />
      Enable Citations
    </label>
  </div>
  <div>
    <label for="enable-sentiment-analysis">
      <input type="checkbox" id="enable-sentiment-analysis" name="enable-sentiment-analysis" value="true" />
      Enable Sentiment Analysis
    </label>
  </div>
  <div>
    <label for="disable-filters">
      <input type="checkbox" id="disable-filters" name="disable-filters" value="true" />
      Disable Filters
    </label>
  </div>
  <div>
    <label for="disable-logging-out-user">
      <input type="checkbox" id="disable-logging-out-user" name="disable-logging-out-user" value="true" />
      Disable Logging Out User
    </label>
  </div>
  <div>
    <label for="mode-selection">
      Mode Selection:
      <select id="mode-selection" name="mode-selection">
        <option value="admin">Admin</option>
        <option value="root">Root</option>
        <option value="user">User</option>
        <option value="lab">Lab</option>
      </select>
    </label>
    <div>
    <label for="dark-light-mode">
      <input type="radio" id="dark-mode" name="dark-light-mode" value="dark" />
      Dark Mode
      <input type="radio" id="light-mode" name="dark-light-mode" value="light" />
      Light Mode
    </label>
  </div>
  <div>
    <label for="enable-remember-me-mode">
      <input type="checkbox" id="enable-remember-me-mode" name="enable-remember-me-mode" value="true" />
      Enable Remember Me Mode
    </label>
  </div>
  <div>
    <label for="enable-web-connection">
      <input type="checkbox" id="enable-web-connection" name="enable-web-connection" value="true" />
      Enable Web Connection
    </label>
  </div>
  <div>
    <label for="history-limit">
      History Limit (in days):
      <input type="number" id="history-limit" name="history-limit" min="1" max="365" />
    </label>
  </div>
  <div>
  <label for="stacking-sidebar">
    <input type="radio" id="stacking" name="stacking-sidebar" value="stacking" />
    Stacking
    <input type="radio" id="sidebar" name="stacking-sidebar" value="sidebar" />
    Sidebar
  </label>
</div>
<button type="submit">Save Settings</button>
</form>`;

}
function threadPage() {

  
  /*
  <div class="d-flex flex-column dark" id="main">
</div>

<template id="human">
    <div class="human dark m-0 p-2 d-flex justify-content-center">
        <div class="d-flex" style="width: 800px">
            <div class="m-2 p-2 icon">
                <div class="human-icon">
                    <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                </div>
            </div>
            <div class="m-2 p-2 text">
            </div>
        </div>
    </div>
</template>
<template id="bot">
    <div class="bot dark m-0 p-2 d-flex justify-content-center">
        <div class="d-flex" style="width: 800px">
            <div class="m-2 p-2 icon">
                <div class="bot-icon">
                <svg width="30" height="30" viewBox="0 0 41 41" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-6 h-6"><path d="M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z" fill="currentColor"></path></svg>
                </div>
            </div>
            <div class="m-2 p-2 text">
            </div>
        </div>
    </div>
</template> */
}

function historyPage() {


  const page = document.createElement("main");
  page.id = "history-page";
  page.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "history-page");
  page.style.display = 'none';

  page.innerHTML = `<template id="even">
  <div class="row even dark align-items-center">
      <div class="text ml-1 col p-1">
          <h4 class="p-2 ml-3 title"></h4>
          <em class="p-2 ml-3 subtitle"></em>
      </div>
      <div class="col-2 p-3">
          <div class="p-1 date"></div>
          <div class="p-1 time"></div>
          <!--div class="save p-1">Save Thread <i class="fa-regular fa-bookmark"></i></div-->
      </div>
      <div class="col-1 p-2">
          <table class="m-0 p-0">
              <tbody>
              <tr>
                  <td><button class="btn btn-outline-danger m-1 trash"><i class="fa-solid trash fa-trash"></i></button></td>
                  <td><button class="btn btn-outline-info m-1 export"><i class="export fa-solid fa-file-arrow-down"></i></button>
                  </td>
              </tr>
              <tr>
                  <td><button class="btn btn-outline-success m-1 bookmark"><i class="bookmark fa-regular fa-bookmark"></i></button>
                  </td>
                  <td></td>
              </tr>
              </tbody>
          </table>
      </div>
      <div class="col-1 p-3">
          <h2><a class="link">&emsp;></a></h2>
      </div>
  </div>
</template>
<template id="odd">
  <div class="row odd dark align-items-center">
      <div class="text ml-3 col p-1">
          <h4 class="p-2 ml-3 title"></h4>
          <em class="p-2 ml-3 subtitle"></em>
      </div>
      <div class="col-2 p-3">
          <div class="p-1 date"></div>
          <div class="p-1 time"></div>
          <!--div class="save p-1">Save Thread <i class="fa-regular fa-bookmark"></i></div-->
      </div>
      <div class="col-1 p-2">
          <table class="m-0 p-0">
              <tbody>
              <tr>
                  <td><button class="btn btn-outline-danger m-1 trash"><i class="fa-solid trash fa-trash"></i></button></td>
                  <td><button class="btn btn-outline-info m-1 export"><i class="export fa-solid fa-file-arrow-down"></i></button>
                  </td>
              </tr>
              <tr>
                  <td><button class="btn btn-outline-success m-1 bookmark"><i class="bookmark fa-regular fa-bookmark"></i></button>
                  </td>
              </tr>
              </tbody>
          </table>
      </div>
      <div class="col-1 p-3">
          <h2><a class="link">&emsp;></a></h2>
      </div>
  </div>
</template>`;

  return page;
}

function webSearchTab() {
  const tab = document.createElement("main");
  tab.id = "websearch-tab";
  tab.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "websearch-tab");
  tab.style.display = 'none';

  tab.innerHTML = `
<form id="search-form">
  <input type="text" id="search-input" placeholder="Search...">
  <button type="submit">Search</button>
</form>

<!-- Div to display the search results -->
<div id="search-results"></div>

<!-- HTML template for a search result -->
<template id="result-template">
  <div class="result">
    <a class="result-title" href="#"></a>
    <p class="result-description"></p>
  </div>
</template>

<!-- Pagination links -->
<div id="pagination">
  <a id="previous-page" href="#">Previous</a>
  <span id="current-page">1</span>
  <a id="next-page" href="#">Next</a>
</div>`;

return tab;

}

function commandsTab() {
  const tab = document.createElement("main");
  tab.id = "commands-tab";
  tab.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "commands-tab");
  tab.style.display = 'none';

  tab.innerHTML = `
<form id="search-form">
  <input type="text" id="search-input" placeholder="Search...">
  <button type="submit">Search</button>
</form>

<!-- Div to display the search results -->
<div id="search-results"></div>

<!-- HTML template for a search result -->
<template id="result-template">
  <div class="result">
    <a class="result-title" href="#"></a>
    <p class="result-description"></p>
  </div>
</template>

<!-- Pagination links -->
<div id="pagination">
  <a id="previous-page" href="#">Previous</a>
  <span id="current-page">1</span>
  <a id="next-page" href="#">Next</a>
</div>`;

return tab;

}

function chatTab() {
  const tab = document.createElement("main");
  tab.id = "chat-tab";
  tab.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "chat-tab");
  tab.style.display = 'none';

  tab.innerHTML = `
<form id="search-form">
  <input type="text" id="search-input" placeholder="Search...">
  <button type="submit">Search</button>
</form>

<!-- Div to display the search results -->
<div id="search-results"></div>

<!-- HTML template for a search result -->
<template id="result-template">
  <div class="result">
    <a class="result-title" href="#"></a>
    <p class="result-description"></p>
  </div>
</template>

<!-- Pagination links -->
<div id="pagination">
  <a id="previous-page" href="#">Previous</a>
  <span id="current-page">1</span>
  <a id="next-page" href="#">Next</a>
</div>`;

return tab;

}

function shareTab() {
  const tab = document.createElement("main");
  tab.id = "share-tab";
  tab.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "share-tab");
  tab.style.display = 'none';

  tab.innerHTML = `
<form id="search-form">
  <input type="text" id="search-input" placeholder="Search...">
  <button type="submit">Search</button>
</form>

<!-- Div to display the search results -->
<div id="search-results"></div>

<!-- HTML template for a search result -->
<template id="result-template">
  <div class="result">
    <a class="result-title" href="#"></a>
    <p class="result-description"></p>
  </div>
</template>

<!-- Pagination links -->
<div id="pagination">
  <a id="previous-page" href="#">Previous</a>
  <span id="current-page">1</span>
  <a id="next-page" href="#">Next</a>
</div>`;

return tab;

}

function pluginsPage() {

  const page = document.createElement("main");
  page.id = "plugins-page";
  page.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "plugins-page");
  page.style.display = 'none';

  page.innerHTML = `<!-- An HTML button to show all installed plugins -->
  <button id="show-plugins-button">Show Plugins</button>
  
  <!-- An HTML modal to display the list of plugins -->
  <div id="plugins-modal" class="modal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h1>Installed Plugins</h1>
      <div id="plugins-list">
        <!-- The list of plugins will be added here dynamically -->
      </div>
    </div>
  </div>
  
  <!-- An HTML form to allow users to upload new plugins -->
  <form id="upload-plugin-form" enctype="multipart/form-data">
    <label for="plugin-name">Name:</label>
    <input type="text" id="plugin-name" name="plugin-name" required />
    <br />
    <label for="plugin-description">Description:</label>
    <textarea id="plugin-description" name="plugin-description" required></textarea>
    <br />
    <label for="plugin-author">Author:</label>
    <input type="text" id="plugin-author" name="plugin-author" required />
    <br />
    <label for="plugin-file">Plugin File:</label>
    <input type="file" id="plugin-file" name="plugin-file" accept=".zip" required />
    <br />
    <button type="submit">Upload Plugin</button>
  </form>
  
  <!-- A template for each plugin in the list of plugins -->
  <template id="plugin-template">
    <div class="plugin">
      <h2 class="plugin-name"></h2>
      <p class="plugin-description"></p>
      <p class="plugin-author"></p>
    </div>
  </template>
  `;

  return page;
}

function explorePage() {

  const page = document.createElement("main");
  page.id = "explore-page";
  page.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "explore-page");
  page.style.display = 'none';

  page.innerHTML = `<!-- The HTML for the explore page -->
  <div id="explore-page">
    <h1>Explore Chats</h1>
    <div id="chat-list">
      <!-- The list of chats will be added here dynamically -->
    </div>
    <div id="chat-page" class="hidden">
      <!-- The chat conversation will be displayed here -->
    </div>
  </div>
  
  <!-- A template for each chat in the list -->
  <template id="chat-template">
    <div class="chat">
      <h2 class="chat-name"></h2>
      <p class="chat-description"></p>
      <button class="upvote-button">Upvote</button>
      <button class="downvote-button">Downvote</button>
    </div>
  </template>
  
  <!-- A template for the chat conversation page -->
  <template id="chat-page-template">
    <h1 class="chat-name"></h1>
    <p class="chat-description"></p>
    <div class="messages">
      <!-- The chat messages will be added here dynamically -->
    </div>
  </template>
  
  <!-- A template for each message in the chat conversation -->
  <template id="message-template">
    <div class="message">
      <span class="sender"></span>: <span class="text"></span>
    </div>
  </template>
  
  `;

  return page;
}
function settingsPage() {
  const page = document.createElement("main");
  page.id = "settings-page";
  page.classList.add("relative", "h-full", "w-full", "transition-width", "flex", "flex-col", "overflow-hidden", "items-stretch", "flex-1", "settings-page");
  page.style.display = 'none';

  page.innerHTML = `
<div class="flex-1 overflow-hidden">
  <div class="react-scroll-to-bottom--css-irwpe-79elbk h-full dark:bg-gray-800">
    <div class="react-scroll-to-bottom--css-irwpe-1n7m0yu">
    <div class="text-4xl font-semibold mb-16 w-full h-[5vh]"><h1 class="text-4xl font-semibold mb-16 p-4">Settings
    </h1></div>
      <div class="flex flex-col items-center text-sm h-full dark:bg-gray-800">
        <div class="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
        <!-- HTML for the settings page -->
        <form id="settings-form">
          <div>
            <label for="enable-images">
              <input type="checkbox" id="enable-images" name="enable-images" value="true" />
              Enable Images
            </label>
          </div>
          <div>
            <label for="enable-video">
              <input type="checkbox" id="enable-video" name="enable-video" value="true" />
              Enable Video
            </label>
          </div>
          <div>
            <label for="enable-audio">
              <input type="checkbox" id="enable-audio" name="enable-audio" value="true" />
              Enable Audio
            </label>
          </div>
          <div>
            <label for="enable-audio-talk-back">
              <input type="checkbox" id="enable-audio-talk-back" name="enable-audio-talk-back" value="true" />
              Enable Audio Talk Back
            </label>
          </div>
          <div>
            <label for="enable-code-preview">
              <input type="checkbox" id="enable-code-preview" name="enable-code-preview" value="true" />
              Enable Code Preview
            </label>
          </div>
          <div>
            <label for="enable-research-paper-mode">
              <input type="checkbox" id="enable-research-paper-mode" name="enable-research-paper-mode" value="true" />
              Enable Research Paper Mode Only
            </label>
          </div>
          <div>
            <label for="enable-citations">
              <input type="checkbox" id="enable-citations" name="enable-citations" value="true" />
              Enable Citations
            </label>
          </div>
          <div>
            <label for="enable-sentiment-analysis">
              <input type="checkbox" id="enable-sentiment-analysis" name="enable-sentiment-analysis" value="true" />
              Enable Sentiment Analysis
            </label>
          </div>
          <div>
            <label for="disable-filters">
              <input type="checkbox" id="disable-filters" name="disable-filters" value="true" />
              Disable Filters
            </label>
          </div>
          <div>
            <label for="disable-logging-out-user">
              <input type="checkbox" id="disable-logging-out-user" name="disable-logging-out-user" value="true" />
              Disable Logging Out User
            </label>
          </div>
          <div>
            <label for="mode-selection">
              Mode Selection:
              <select id="mode-selection" name="mode-selection">
                <option value="admin">Admin</option>
                <option value="root">Root</option>
                <option value="user">User</option>
                <option value="lab">Lab</option>
              </select>
            </label>
            <div>
            <label for="dark-light-mode">
              <input type="radio" id="dark-mode" name="dark-light-mode" value="dark" />
              Dark Mode
              <input type="radio" id="light-mode" name="dark-light-mode" value="light" />
              Light Mode
            </label>
          </div>
          <div>
            <label for="enable-remember-me-mode">
              <input type="checkbox" id="enable-remember-me-mode" name="enable-remember-me-mode" value="true" />
              Enable Remember Me Mode
            </label>
          </div>
          <div>
            <label for="enable-web-connection">
              <input type="checkbox" id="enable-web-connection" name="enable-web-connection" value="true" />
              Enable Web Connection
            </label>
          </div>
          <div>
            <label for="history-limit">
              History Limit (in days):
              <input type="number" id="history-limit" name="history-limit" min="1" max="365" />
            </label>
          </div>
          <div>
            <label for="stacking-sidebar">
              <input type="radio" id="stacking" name="stacking-sidebar" value="stacking" />
              Stacking
              <input type="radio"
              <div>
              <label for="stacking-sidebar">
                <input type="radio" id="stacking" name="stacking-sidebar" value="stacking" />
                Stacking
                <input type="radio" id="sidebar" name="stacking-sidebar" value="sidebar" />
                Sidebar
              </label>
            </div>
            <button type="submit">Save Settings</button>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</div>`;

  

  return page;
}
/*
function createBtn() {
  const button = document.createElement("button");

  button.classList.add("btn", "flex", "gap-2", "justify-center", "btn-neutral");

  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>Share`;

  return button;
}

function createBtn2() {
  const button = document.createElement("button");

  button.classList.add("btn", "flex", "gap-2", "justify-center", "btn-neutral");

  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>Share`;

  return button;
}

function createBtn3() {
  const button = document.createElement("button");

  button.classList.add("btn", "flex", "gap-2", "justify-center", "btn-neutral");

  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
</svg>Share`;

  return button;
}
*/
function changeMain(id) {
  // Hide all div elements
  var divs = document.querySelectorAll('main');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }

  if (id == "select-tabs") {
    var selectedDiv = document.getElementById("main-page-clone");
    selectedDiv.style.display = 'flex';
  }
  // Show the selected div element
  var selectedDiv = document.getElementById(id);
  selectedDiv.style.display = 'flex';

  chrome.storage.sync.set({page: id})
  
}

function changeTab(id) {
  // Hide all div elements
  var divs = document.querySelectorAll('main');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }

  //Keep main open for tabs.
  var selectedDiv = document.getElementById('main-page');
  selectedDiv.style.display = 'flex';

  // Show the selected div element
  var selectedDiv = document.getElementById(id);
  selectedDiv.style.display = 'flex';
}


chrome.storage.sync.get({page: ""}, function(result) {
  if(result.page === "settings-page"){
      changeMain("settings-page")
  }
})

init();



//All pages 

let navsettings = document.querySelector("nav > #nav-settings-page")
navsettings.addEventListener('click', function () {
  document.getElementById('nav-settings-page').addEventListener('click', changeMain('settings-page'))
})

let navmain = document.querySelector("nav > #nav-main-page")
navmain.addEventListener('click', function () {
  document.getElementById('nav-main-page').addEventListener('click', changeMain('main-page'))
})

let navexplore = document.querySelector("nav > #nav-explore-page")
navexplore.addEventListener('click', function () {
  document.getElementById('nav-explore-page').addEventListener('click', changeMain('explore-page'))
})

let navhistory = document.querySelector("nav > #nav-history-page")
navhistory.addEventListener('click', function () {
  document.getElementById('nav-history-page').addEventListener('click', changeMain('history-page'))
})

let navplugins = document.querySelector("nav > #nav-plugins-page")
navplugins.addEventListener('click', function () {
  document.getElementById('nav-plugins-page').addEventListener('click', changeMain('plugins-page'))
})

let navprofile = document.querySelector("nav > #nav-profile-page")
navprofile.addEventListener('click', function () {
  document.getElementById('nav-profile-page').addEventListener('click', changeMain('profile-page'))
})


//All Tabs
let tabsmain = document.querySelector("nav > #nav-select-tabs")
tabsmain.addEventListener('click', function () {
  document.getElementById('nav-select-tabs').addEventListener('click', changeMain('select-tabs'))
})

let tabswebsearch = document.querySelector("nav > #nav-websearch-tab")
tabswebsearch.addEventListener('click', function () {
  document.getElementById('nav-websearch-tab').addEventListener('click', changeTab('websearch-tab'))
})

let tabscommands = document.querySelector("nav > #nav-command-tab")
tabscommands.addEventListener('click', function () {
  document.getElementById('nav-commands-tab').addEventListener('click', changeTab('command-tab'))
})

let tabschat = document.querySelector("nav > #nav-chat-tab")
tabschat.addEventListener('click', function () {
  document.getElementById('nav-chat-tab').addEventListener('click', changeTab('chat-tab'))
})

let tabsshare = document.querySelector("nav > #nav-share-tab")
tabsshare.addEventListener('click', function () {
  document.getElementById('nav-share-tab').addEventListener('click', changeTab('share-tab'))
})





// JavaScript to handle tab selection and creation
const tabs = document.getElementById('tabs');
const tabButtons = tabs.querySelectorAll('.tab-button');
const tabContents = tabs.querySelectorAll('.section-tabs');
const addButton = document.getElementById('add-button');

let currentTab = 0; // Counter to keep track of the current tab number

tabs.addEventListener('click', (event) => {
  // Get the clicked tab button or close button
  const clickedButton = event.target.closest('.tab-button');
  const clickedClose = event.target.closest('.close');
  if (!clickedButton && !clickedClose) return; // Return if the click was not on a tab button or close button

  // Get the corresponding tab content
  let tabName;
  let tabContent;
  if (clickedButton) {
    tabName = clickedButton.getAttribute('data-tab');
    tabContent = tabs.querySelector(`#${tabName}`);
  } else {
    tabName = clickedClose.parentElement.getAttribute('data-tab');
    tabContent = clickedClose.parentElement.nextElementSibling;
    tabName.classList.remove('active');
    tabName.classList.add('inactive');
  }

  // Deactivate the current tab and activate the new tab
  tabContents.forEach((tab) => {
    tab.classList.remove('active');
  });
  tabContent.classList.add('active');

  if (tabButtons.length > 4) {
    document.getElementById('not-expandable').style.display = 'flex';
  } else {
    document.getElementById('not-expandable').style.display = 'none';
  }

});

addButton.addEventListener('click', () => {
  // Create a new tab button and tab content
  currentTab++;
  const tabButton = document.createElement('section');
  tabButton.classList.add('tab-button');
  tabButton.setAttribute('data-tab', `tab${currentTab}`);
 // tabButton.insertAdjacentHTML('beforeend', '<span class="close">x</span>');
 // tabs.insertBefore(tabButton, addButton);
  const tabContent = document.createElement('div');
  tabContent.textContent = `Section ${currentTab}`;
  const tabClose = document.createElement('div');
  tabButton.classList.add('section-tabs');
  tabContent.classList.add('chat-box');
  tabClose.classList.add('close-section-tabs');
  tabClose.textContent = `x`;

  
  tabButton.setAttribute('id', `tab${currentTab}`);
  tabButton.insertAdjacentHTML('beforeend', '<span class="close">x</span>');
  tabs.insertBefore(tabButton, addButton);
  // Add the new tab content to the page and activate it
  tabButton.appendChild(tabContent);
  //tabs.insertBefore(tabContent, addButton);
  tabButton.appendChild(tabClose);
  //tabs.insertBefore(tabClose, addButton);
 // tabs.appendChild(tabContent);
  //tabs.insertBefore(tabContent, addButton);
  tabButton.classList.add('active');
});

//let tabsmainmove = document.querySelector("#select-tabs")
//tabsmainmove.addEventListener('click', function () {

  const Boxlayout = (() => {
    const wrapper = document.body,
      sections = [...document.querySelectorAll(".section-tabs")],
      closeButtons = [...document.querySelectorAll(".close-section-tabs")],
      expandedClass = "is-expanded",
      notExpandable = "not-expandable",
      hasExpandedClass = "has-expanded-item";
  
    const initEvents = () => {  
      sections.forEach((element) => {
        element.addEventListener("click", () => openSection(element));
      });
      closeButtons.forEach((element) => {
        element.addEventListener("click", (event) => {
          event.stopPropagation();
          closeSection(element.parentElement);
        });
      });
    };
  
    const openSection = (element) => {
      if (element.classList.contains(notExpandable)) {
        //create new tab
      } else if (!element.classList.contains(expandedClass)) {
        element.classList.add(expandedClass);
        wrapper.classList.add(hasExpandedClass);
      }
    };
  
    const closeSection = (element) => {
      if (element.classList.contains(expandedClass)) {
        element.classList.remove(expandedClass);
        wrapper.classList.remove(hasExpandedClass);
      }
    };
  
    return { init: initEvents };
  })();
  Boxlayout.init();



  // JavaScript to handle the search form submission and display the results
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const resultsDiv = document.getElementById('search-results');
const resultTemplate = document.getElementById('result-template');
const pagination = document.getElementById('pagination');
const previousPage = document.getElementById('previous-page');
const currentPage = document.getElementById('current-page');
const nextPage = document.getElementById('next-page');

let currentResults = [];
let currentPageNum = 1;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Perform the search and display the results
  search(input.value, currentPageNum);
});

// Handle clicks on the pagination links
previousPage.addEventListener('click', (event) => {
  event.preventDefault();
  if (currentPageNum > 1) {
    search(input.value, currentPageNum - 1);
  }
});
nextPage.addEventListener('click', (event) => {
  event.preventDefault();
  if (currentPageNum < currentResults.totalPages) {
    search(input.value, currentPageNum + 1);
  }
});

function search(query, page) {
  // Make a search request to your backend or a third-party API
  // and set the `currentResults` variable to the response data
  // For the sake of this example, we will just set `currentResults` to some dummy data
  currentResults = {
    totalPages: 2,
    results: [
      {
        title: 'Result 1',
        description: 'Description for result 1',
        url: 'http://example.com/result1',
      },
      {
        title: 'Result 2',
        description: 'Description for result 2',
        url: 'http://example.com/result2',
      },
      // ...
    ],
  };

  // Display the results
  displayResults();
}

function displayResults() {
  // Clear the previous search results
  resultsDiv.innerHTML = '';
  // Display the current page number
  currentPage.textContent = currentPageNum;

  // Show the pagination links if there is more than one page of results
  if (currentResults.totalPages > 1) {
    pagination.style.display = 'block';
  } else {
    pagination.style.display = 'none';
  }

  // Loop through the results and display them
  currentResults.results.forEach((result) => {
    // Clone the result template
    const resultElement = resultTemplate.content.cloneNode(true);

    // Set the result title and description
    resultElement.querySelector('.result-title').textContent = result.title;
    resultElement.querySelector('.result-description').textContent = result.description;
    resultElement.querySelector('.result-title').href = result.url;

    // Add the result to the results div
    resultsDiv.appendChild(resultElement);
  });
}

 // Boxlayout.init();

  //document.getElementById('select-tabs').addEventListener('click', )
//})
//Boxlayout.init()
/*
window.addEventListener("load", (event) => {
  document.getElementById('nav-settings-page').addEventListener('click', changeMain('settings-page'))

  //document.getElementById('cover').style.display = 'none';
});*/


//setTimeout(main, 1000);






//tokenizer
/*
// Get the text box element
const textBox = document.getElementById('text-box');

// Get the element to display the number of tokens
const tokenCountElement = document.getElementById('token-count');

// Add an event listener to the text box to count the tokens as the user types
textBox.addEventListener('input', event => {
  // Get the text in the text box
  const text = event.target.value;
  // Use OpenAI's tokenizer to split the text into tokens
  const tokens = openai.tokenizer.encode(text).tokens;
  // Get the total number of tokens
  const totalTokens = tokens.length;
  // Update the token count element with the total number of tokens
  tokenCountElement.textContent = totalTokens;
});



//JavaScript for the settings page

  // Get a reference to the settings form
  const settingsForm = document.getElementById('settings-form');

  // When the form is submitted, save the settings to local storage
  settingsForm.addEventListener('submit', e => {
    e.preventDefault();
    const settings = {
      enableImages: settingsForm.elements['enable-images'].checked,
      enableVideo: settingsForm.elements['enable-video'].checked,
      enableAudio: settingsForm.elements['enable-audio'].checked,
      enableAudioTalkBack: settingsForm.elements['enable-audio-talk-back'].checked,
      enableCodePreview: settingsForm.elements['enable-code-preview'].checked,
      enableResearchPaperMode: settingsForm.elements['enable-research-paper-mode'].checked,
      enableCitations: settingsForm.elements['enable-citations'].checked,
      enableSentimentAnalysis: settingsForm.elements['enable-sentiment-analysis'].checked,
      disableFilters: settingsForm.elements['disable-filters'].checked,
      disableLoggingOutUser: settingsForm.elements['disable-logging-out-user'].checked,
      modeSelection: settingsForm.elements['mode-selection'].value,
      darkLightMode: settingsForm.elements['dark-light-mode'].value,
      enableRememberMeMode: settingsForm.elements['enable-remember-me-mode'].checked,
      enableWebConnection: settingsForm.elements['enable-web-connection'].checked,
      historyLimit: settingsForm.elements['history-limit'].value,
      stackingSidebar: settingsForm.elements['stacking-sidebar'].value
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  });


// Fetch the list of chats from Firebase
async function getChats() {
  try {
    const snapshot = await firebase.database().ref('chats').once('value');
    const chats = snapshot.val();
    return chats;
  } catch (error) {
    console.error(error);
  }
}

// Generate the chat list on the explore page
async function generateChatList() {
  try {
    const chats = await getChats();
    const chatListElement = document.querySelector('#chat-list');
    chatListElement.innerHTML = ''; // Clear any existing chats from the list
    for (const chatId in chats) {
      const chat = chats[chatId];
      // Clone the chat template element and set its values
      const chatElement = document.querySelector('#chat-template').cloneNode(true);
      chatElement.querySelector('.chat-name').innerHTML = chat.name;
      chatElement.querySelector('.chat-description').innerHTML = chat.description;
      // Add event listeners for the upvote and downvote buttons
      chatElement.querySelector('.upvote-button').addEventListener('click', () => {
        upvoteChat(chatId);
      });
      chatElement.querySelector('.downvote-button').addEventListener('click', () => {
        downvoteChat(chatId);
      });
      // Add the chat element to the chat list
      chatListElement.appendChild(chatElement);
    }
    } catch (error) {
    console.error(error);
    }
    }
    
    // Update the vote count for a chat in Firebase
    async function updateVoteCount(chatId, voteDelta) {
    try {
    const snapshot = await firebase.database().ref(chats/${chatId}/votes).once('value');
    const votes = snapshot.val() || 0;
    firebase.database().ref(`chats/${chatId}/votes`).set(votes + voteDelta);
    } catch (error) {
    console.error(error);
    }
    }
    
    // Upvote a chat
    function upvoteChat(chatId) {
    updateVoteCount(chatId, 1);
    }
    
    // Downvote a chat
    function downvoteChat(chatId) {
    updateVoteCount(chatId, -1);
    }
    
    // Fetch a chat conversation from Firebase
    async function getChatConversation(chatId) {
    try {
    const snapshot = await firebase.database().ref(`chats/${chatId}/conversation`).once('value');
    const conversation = snapshot.val();
    return conversation;
    } catch (error) {
    console.error(error);
    }
    }
    
    // Generate the chat conversation on the chat conversation page
    async function generateChatConversation(chatId) {
    try {
    const conversation = await getChatConversation(chatId);
    const chatPageElement = document.querySelector('#chat-page');
    chatPageElement.innerHTML = ''; // Clear any existing conversation from the page
    // Set the chat name and description
    const snapshot = await firebase.database().ref(chats/${chatId}).once('value');
    const chat = snapshot.val();
    chatPageElement.querySelector('.chat-name').innerHTML = chat.name;
    chatPageElement.querySelector('.chat-description').innerHTML = chat.description;
    // Loop through the conversation messages and add them to the page
    const messagesElement = chatPageElement.querySelector('.messages');
    for (const message of conversation) {
    // Clone the message template element and set its values
    const messageElement = document.querySelector('#message-template').cloneNode(true);
    messageElement.querySelector('.sender').innerHTML = message.sender;
    messageElement.querySelector('.text').innerHTML = message.text;
    // Add the message element to the messages list
    messagesElement.appendChild(messageElement);
    }
    } catch (error) {
    console.error(error);
    }
    }
    
    // Animate the chat list div out of view and reveal the chat conversation page div
    function showChatConversation(chatId) {
    // Hide the chat list div and show the chat conversation page div
    document.querySelector('#chat-list').classList.add('hidden');
    document.querySelector('#chat-page').classList.remove('hidden');
    // Generate the chat conversation on the page
    generateChatConversation(chatId);
    }
    
    // Animate the chat conversation page div out of view and reveal the chat list div
  function showChatList() {
// Hide the chat conversation page div and show the chat list div
document.querySelector('#chat-page').classList.add('hidden');
document.querySelector('#chat-list').classList.remove('hidden');
// Regenerate the chat list
generateChatList();
}

// Add an event listener to the chat list that listens for clicks on a chat item
document.querySelector('#chat-list').addEventListener('click', (event) => {
// Check if the clicked element is a chat item
if (event.target.classList.contains('chat')) {
// Get the chat id from the element's data attribute
const chatId = event.target.getAttribute('data-chat-id');
// Show the chat conversation page for the clicked chat
showChatConversation(chatId);
}
});

// Add a back button to the chat conversation page that allows the user to return to the chat list
const backButton = document.createElement('button');
backButton.innerHTML = 'Back';
backButton.addEventListener('click', showChatList);
document.querySelector('#chat-page').appendChild(backButton);

// Generate the initial chat list on the page
generateChatList();


// Get the text box element
const textBox = document.getElementById('text-box');

// Get the element to display the number of tokens
const tokenCountElement = document.getElementById('token-count');

// Add an event listener to the text box to count the tokens as the user types
textBox.addEventListener('input', event => {
  // Get the text in the text box
  const text = event.target.value;
  // Use OpenAI's tokenizer to split the text into tokens
  const tokens = openai.tokenizer.encode(text).tokens;
  // Get the total number of tokens
  const totalTokens = tokens.length;
  // Update the token count element with the total number of tokens
  tokenCountElement.textContent = totalTokens;
});


*/



















// Import the templates from separate files
//import evenTemplate from './evenTemplate.html';
//import oddTemplate from './oddTemplate.html';

function historyPage2() {
  const button = document.createElement('main');

  // Add the necessary classes to the button element
  button.classList.add(
    'relative',
    'h-full',
    'w-full',
    'transition-width',
    'flex',
    'flex-col',
    'overflow-hidden',
    'items-stretch',
    'flex-1',
    'history-page'
  );

  // Set the inner HTML of the button element to include the imported templates
 // button.innerHTML = `${evenTemplate} ${oddTemplate}`;

  return button;
}



// Get a reference to the original div element
const div1 = document.getElementById('main-page');

// Create a clone of the div element
const div2 = div1.cloneNode(true);

// Set the ID of the cloned element to 'div2'
div2.id = 'main-page-clone';

// Append the cloned element to the document
document.getElementById("chatbox1").appendChild(div2);
//document.body.appendChild(div2);

// Set up a mutation observer to watch for changes to the original div element
const observer = new MutationObserver(function(mutations) {
  // If the div element has changed, update the cloned element
  div2.innerHTML = div1.innerHTML;
});

// Start observing the original div element for changes
observer.observe(div1, {
  attributes: true,
  childList: true,
  characterData: true
});
