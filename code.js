function startup() {
    connectButton = document.getElementByID('connectButton');
    disconnectButton = document.getElementById('disconnectButton');
    sendButton = document.getElementById('sendButton');
    messageInputBox = document.getElementById('message');
    receiveBox = document.getElementById('recievebox');
    
    connectButton.addEventListener('click', connectPeers, false);
    disconnectButton.addEventListener('click', disconnectPeers, false);
    sendButton.addEventListener('click', sendMessage, false);
}

function connectPeer() {
    localConnection = new RTCPeerConnection();
    
    sendChannel = localConnection.createDataChannel('sendChannel');
    sendChannel.onopen = handleSendChannelStatusChange;
    sendChannel.onclose = handleSendChannelStatusChange;
    
    remoteConnection = new RTCPeerConnection();
    remoteConnection.ondatachannel = receiveChannelCallback;
    
    localConnection.onicecandidate = e => !e.candidate || remoteConnection.addIceCandidate(e.candidate(e.candidate)
    
}
