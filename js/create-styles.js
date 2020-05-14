function createStyle() {
  let style =

    `<style>

.resultsOverlay {
  width: 320px;
  border: 0;
  top: 20px;
  right: 20px;
  position: fixed;
  text-align: left;
  z-index: 99999999999999;
  -webkit-box-sizing: border-box;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 400;
  border-radius: 6px;
  -webkit-box-shadow: 2px 2px 10px 2px hsla(0,0%,60%,.2);
  box-shadow: 2px 2px 10px 2px hsla(0,0%,60%,.2);
  background-color: #fff;
}

.resultsOverlay img.book_icon {
  max-width: 80px;
  display: inline-block;
  vertical-align: middle;
}

.resultsOverlay p.honest_marketer_report_content {
  margin: 0px 0px 0px 10px;
  display: inline-block;
  vertical-align: middle;
  font-size: 13px;
  font-style: normal;
}

.resultsOverlay span {
  font-style: bold;
}

</style>`

  document.head.insertAdjacentHTML("beforeend", style)

}