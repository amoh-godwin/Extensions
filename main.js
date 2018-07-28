var img_ele = document.getElementsByClassName('FFVAD').item(0);

function onStartedDownload(id) {
    alert('started');
    console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
    console.log(`Download failed: ${error}`);
}

var downloadUrl = img_ele.src;

var downloading = browser.downloads.download({
    url : downloadUrl,
    filename : 'my-image-again.jpg',
    conflictAction : 'uniquify'
});

downloading.then(onStartedDownload, onFailed);