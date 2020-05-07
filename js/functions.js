function scan(wordType) {
  var words = window[wordType + 'Words'];

  for (var i=0, max=elements.length; i < max; i++) {
    var el = elements[i];

    if (el.textContent.length > 0) {
      words.forEach(function(word) {
        if (el.textContent.toLowerCase().indexOf(word) > -1) {
          highlight(el, word, wordType);
          logTextWarning(wordType);
        }
      })
    }
  }
}

function logTextWarning(type) {
  window[type + 'Highlights'] += 1
}

function highlight(el, word, type) {
  var newText = wrapText(el, word, type);
  el.innerHTML = newText;
}

function wrapText(el, word, type) {
  var regex = new RegExp( '(' + word + ')', 'gi' );
  var wrapper = '<span class="hm-highlight-' + type + '">$1</span>';

  return el.innerHTML.replace(regex, wrapper);
}

function allNotifications() {
  return Array.from(document.getElementsByClassName('honest_marketer_warnings'));
}

function setupClickListeners(el) {
  el.addEventListener('click', function() {
    removeHighlights();

    if (el.classList.value.indexOf('close_warnings') > -1) { hideAllNotifications() }
    else { el.remove() }
  });
}

function hideAllNotifications() {
  allNotifications().forEach(function(el) { el.remove(); })
}

function removeHighlights() {
  wordTypes.forEach(function(wordType) {
    allHighlights(wordType).forEach(function(el) { el.classList.remove('hm-highlight-' + wordType) })
  })
}

function allHighlights(wordType) {
  return Array.from(document.getElementsByClassName('hm-highlight-' + wordType))
}

function pageText() {
  return document.body.textContent.toLowerCase();
}

function hasCountdownTimer() {
  var text = pageText();
  return ((text.indexOf('hour') > -1) && (text.indexOf('minute') > -1) && (text.indexOf('second') > -1));
}

function hasExitIntentPopups() {
  var found = false;
  var text = pageText();

  exitIntentKeywords.forEach(function(keyword) {
    if (text.indexOf(keyword) > -1) { found = true }
  });

  return found;
}

function buildNotification(extraClass) {
  var div = document.createElement('div')
  div.classList.add('honest_marketer_warnings')

  var content = document.createElement('p')
  content.classList.add('honest_marketer_report_content')
  div.append(content);

  if (extraClass) { div.classList.add(extraClass); }
  setupClickListeners(div);

  return div;
}

function calculateOffsetHeight() {
  var space = 0;

  allNotifications().forEach(function(el) {
    if ((window.innerHeight - el.offsetTop) > space) {
      space = (window.innerHeight - el.offsetTop);
    }
  })

  return (space + notificationSpacer);
}

function buildIcon() {
  var honestMarketerIcon = document.createElement('img')
  honestMarketerIcon.classList.add('honest_marketer_icon')
  honestMarketerIcon.src = chrome.extension.getURL('images/hm-128.png');

  return honestMarketerIcon;
}

function statsContent() {
  var innerHTML = '<span style="color: tomato">Hyperbole</span>: ' + negativeHighlights + ' instances<br>'
  innerHTML += '<span style="color: darkgrey">Neutral</span>: ' + neutralHighlights + ' words<br>'
  innerHTML += '<span style="color: green">Honesty</span>: ' + positiveHighlights + ' examples'

  return innerHTML;
}

function createReports() {
  buildBasicReports();
  buildToolReports();
}

function buildBasicReports() {
  var div = buildNotification();
  var icon = buildIcon();

  var content = div.getElementsByClassName('honest_marketer_report_content')[0]
  content.innerHTML = statsContent();

  div.append(icon);
  div.append(content);
  document.body.append(div);
}

// let 3rd party tools load before checking
function buildToolReports() {
  setTimeout(function(){
    if (hasCountdownTimer()) { // extend to other tool checks
      var countdown = buildNotification('extra_warning');
      countdown.style.bottom = calculateOffsetHeight() + 'px';

      var content = countdown.getElementsByClassName('honest_marketer_report_content')[0]
      content.innerHTML = '<strong>Warning</strong> - countdown timer detected'

      countdown.append(content);
      document.body.append(countdown);
    }

    if (hasExitIntentPopups()) {
      var exitPopup = buildNotification('extra_warning');
      exitPopup.style.bottom = calculateOffsetHeight() + 'px';

      var content = exitPopup.getElementsByClassName('honest_marketer_report_content')[0]
      content.innerHTML = '<strong>Warning</strong> - exit intent popup detected'

      exitPopup.append(content);
      document.body.append(exitPopup);
    }

    // skip 'bulk close' option if only regular report is present
    if (hasCountdownTimer() || hasExitIntentPopups()) {
      showCloseAll();
    }
  }, toolCheckDelay);
}

function showCloseAll() {
  var closeAll = buildNotification('close_warnings');
  closeAll.style.bottom = (calculateOffsetHeight() - 10) + 'px';

  var content = closeAll.getElementsByClassName('honest_marketer_report_content')[0]
  content.innerHTML = '<strong style="text-align: right">X</strong>'

  closeAll.append(content);
  document.body.append(closeAll);
}
