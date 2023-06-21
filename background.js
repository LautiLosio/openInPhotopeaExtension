chrome.contextMenus.create({
  title: "Open in Photopea",
  contexts: ["image"],
  id: "openImageInPhotopea"
});

let jsonParams = {
  "files": []
};

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "openImageInPhotopea") {

    jsonParams = {
      "files": [ info.srcUrl ]
    };

    chrome.tabs.create({
      url: "https://www.photopea.com/#" + JSON.stringify(jsonParams)
    });
    
  }
}
);

