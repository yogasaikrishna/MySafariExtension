document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
});

document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event) {
    let selection = window.getSelection().toString();
    safari.extension.setContextMenuEventUserInfo(event, { "selection": selection });
}

safari.self.addEventListener("message", onMessageReceive, false);

function onMessageReceive(event) {
    window.alert(event.message.response);
}
