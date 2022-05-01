function popup_daiso() {
  var _width = "800";
  var _height = "660";
  var _left = Math.ceil((window.screen.width - _width) / 2);
  var _top = Math.ceil((window.screen.height - _height) / 2);
  var url = "files/popup_daiso.html";
  var name = "popup";
  var option =
    "width=" +
    _width +
    ", height=" +
    _height +
    ", left=" +
    _left +
    ", top=" +
    _top;
  window.open(url, name, option);
}