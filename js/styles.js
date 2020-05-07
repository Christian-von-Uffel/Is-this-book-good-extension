(function(){
let style = `<style>
.hm-highlight-negative {
  background: tomato !important;
  color: #fff;
}

.hm-highlight-neutral {
  background: lightyellow !important;
  color: #000;
}

.hm-highlight-positive {
  background: lightgreen !important;
}

.honest_marketer_warnings {
  width: 320px;
  border: 0;
  bottom: 20px;
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

.honest_marketer_warnings img.honest_marketer_icon {
  max-width: 80px;
  display: inline-block;
  vertical-align: middle;
}

.honest_marketer_warnings p.honest_marketer_report_content {
  margin: 0px 0px 0px 10px;
  display: inline-block;
  vertical-align: middle;
  font-size: 13px;
  font-style: normal;
}

.honest_marketer_warnings span {
  font-style: bold;
}

.extra_warning {
  height: 25px;
  line-height: 1.5;
}

.close_warnings {
  text-align: right;
  background: transparent !important;
  height: 25px;
  line-height: 1.5;
  border: none;
  box-shadow: none;
  width: 20px;
}
</style>`;

document.head.insertAdjacentHTML("beforeend", style);
})();
