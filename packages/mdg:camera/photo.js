Session.setDefault('mdg-camera-language', 'en');

MeteorCamera = {};

MeteorCamera.strings = {
  en: {
    browserNotSupportedError: "Sorry, this browser is currently not supported for camera functionality.",
    accessCameraError: "There was an error accessing the camera.",
    usePhoto: "Use Photo",
    takeNewPhoto: "Take New Photo",
    waitingForPermission: "Waiting for camera permissions...",
    cameraPermissionsDenied: "Camera Permissions Denied",
    takePhoto: "Take Photo",
    cancel: "Cancel",
    closePopup: "Close Popup",
    permissionDeniedMessage: "You have denied this app permission to use your camera. " +
    "If you would like to allow permissions, follow the directions for your " +
    "browser below.",
    permissionHowToChrome: "Google Chrome",
    permissionHowToChromeMessage: "Go to Settings > \"Show advanced settings...\" >\n" +
    "\"Content settings...\" > Media heading > \"Manage exceptions...\",\n" +
    "then find this website in the list and allow video capture.",
    permissionHowToFireFox: "Mozilla Firefox",
    permissionHowToFireFoxMessage: "Reload the page and try again.",
    permissionHowToOpera: "Opera",
    permissionHowToOperaMessage: "Go to Preferences > Websites > Media heading >\n" +
    "\"Manage exceptions...\", then find this website in the list and\n" +
    "allow video capture.",
    closePopup: "Close Popup"
  }
};

Template.camera.helpers({
  strings: function () {
    return MeteorCamera.strings[Session.get('mdg-camera-language')];
  }
});