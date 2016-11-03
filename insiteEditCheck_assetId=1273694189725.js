/* JavaScript Document 
    function insiteEditCheck()  Theme Script
   /3MContentRetrievalAPI/BlobServlet?lmd=1340396157000&locale=en_US&assetType=MMM_Image&assetId=1273694189725&blobAttribute=ImageFile
 */
 function insiteEditCheck() {
  var a = 'true'
}
function ss_composeSuggestUri(a, b) {
  var c = gsConstants.site,
  d = gsConstants.client;
  if (!a || !c || !d) return null;
  var e = gsConstants.access;
  e || (e = 'p');
  var f = gsConstants.apxyUri;
  return SS_OUTPUT_FORMAT_LEGACY == ss_protocol ? f = f + '&token=' + encodeURIComponent(a) + '&max_matches=' + ss_g_max_to_display : f = f + '&q=' + encodeURIComponent(a) + '&max=' + ss_g_max_to_display,
  f = f + '&site=' + encodeURIComponent(c) + '&client=' + encodeURIComponent(d) + '&access=' + encodeURIComponent(e) + '&format=' + encodeURIComponent(ss_protocol),
  f
}
function ss_suggest(qVal) {
  var startTimeMs = (new Date).getTime();
  ss_cached[qVal] || (ss_cached[qVal] = {
  });
  var suggestForm = document.getElementById(ss_form_element),
  uri = ss_composeSuggestUri(qVal, suggestForm);
  if (!uri) return;
  var url = ss_gsa_host ? 'http://' + ss_gsa_host + uri : uri;
  ss_panic && alert('ss_suggest() AJAX: ' + url);
  var xmlhttp = XH_XmlHttpCreate(),
  handler = function () {
    if (xmlhttp.readyState == XML_READY_STATE_COMPLETED) {
      ss_panic && alert('ss_suggest() AJAX: ' + xmlhttp.responseText);
      var suggested;
      try {
        suggested = eval('(' + xmlhttp.responseText + ')')
      } catch (e) {
        ss_cached[qVal].g = null,
        ss_show(qVal);
        return
      }
      if (ss_use.g) try {
        switch (ss_protocol) {
          case SS_OUTPUT_FORMAT_LEGACY:
          default:
            var suggestions = suggested;
            if (suggestions && suggestions.length > 0) {
              var found = !1;
              ss_cached[qVal].g = [
              ];
              var max = ss_g_max_to_display <= 0 ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
              for (var si = 0; si < max; si++) ss_cached[qVal].g[si] = {
                q: suggestions[si]
              },
              found = !0;
              found || (ss_cached[qVal].g = null)
            } else ss_cached[qVal].g = null;
            break;
          case SS_OUTPUT_FORMAT_OPEN_SEARCH:
            if (suggested.length > 1) {
              var suggestions = suggested[1];
              if (suggestions && suggestions.length > 0) {
                var found = !1;
                ss_cached[qVal].g = [
                ];
                var max = ss_g_max_to_display <= 0 ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
                for (var si = 0; si < max; si++) if (suggestions[si] && suggestions[si] != suggested[0]) ss_cached[qVal].g[si] = {
                  q: suggestions[si]
                },
                found = !0;
                 else if (suggested.length > 3 && ss_allow_non_query) {
                  var title = suggested[2].length > si ? null : suggested[2][si],
                  url = suggested[3].length > si ? null : suggested[3][si];
                  url && (title = title ? title : ss_non_query_empty_title, ss_cached[qVal].g[si] = {
                    t: title,
                    u: url
                  }, found = !0)
                }
                found || (ss_cached[qVal].g = null)
              } else ss_cached[qVal].g = null
            } else ss_cached[qVal].g = null;
            break;
          case SS_OUTPUT_FORMAT_RICH:
            var suggestions = suggested.results;
            if (suggestions && suggestions.length > 0) {
              var found = !1;
              ss_cached[qVal].g = [
              ];
              var max = ss_g_max_to_display <= 0 ? suggestions.length : Math.min(ss_g_max_to_display, suggestions.length);
              for (var si = 0; si < max; si++) if (suggestions[si].name && suggestions[si].name != suggested.query) ss_cached[qVal].g[si] = {
                q: suggestions[si].name
              },
              found = !0;
               else if (ss_allow_non_query) {
                var title = suggestions[si].content,
                url = suggestions[si].moreDetailsUrl;
                url && (title = title ? title : ss_non_query_empty_title, ss_cached[qVal].g[si] = {
                  t: title,
                  u: url
                }, found = !0)
              }
              found || (ss_cached[qVal].g = null)
            } else ss_cached[qVal].g = null
        }
      } catch (e) {
        ss_cached[qVal].g = null
      }
      if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
        var stopTimeMs = (new Date).getTime();
        ss_debug.addRequestDebugLine(qVal, 'suggest', stopTimeMs - startTimeMs, ss_cached[qVal])
      }
      ss_show(qVal)
    }
  };
  XH_XmlHttpPOST(xmlhttp, url, '', handler)
}
function ss_processed(a) {
  return !ss_cached[a] && ss_use.g ? !1 : !0
}
function ss_handleAllKey(a) {
  var b = window.event ? window.event.keyCode : a.keyCode;
  switch (b) {
    case 40:
    case 38:
      break;
    case 9:
    case 16:
      ss_qbackup = null,
      ss_dismissed = !0,
      ss_clear(!0);
      var c = document.getElementById(ss_form_element).q.value;
      ss_processed(c) || (ss_panic && alert('run ajax when key off'), ss_suggest(c));
      break;
    case 113:
      if (!ss_allow_debug) break;
      ss_debug && ss_debug.getDebugMode() ? ss_debug.deactivateConsole()  : ss_debug.activateConsole();
      break;
    default:
  }
}
function ss_handleKey(a, b) {
  b || (b = this.form, b || a.srcElement && a.srcElement.form && (b = a.srcElement.form));
  if (!b) return !1;
  var c = document.getElementById(ss_popup_element);
  if (b.id !== ss_form_element) {
    ss_form_element = b.id,
    c = document.getElementById(ss_popup_element),
    ss_clear(!0);
    var d = getPosition(b.q);
    c.style.left = d[0] + 'px',
    c.style.top = d[1] + b.q.offsetHeight + 'px'
  }
  var e = window.event ? window.event.keyCode : a.keyCode,
  f = ss_qbackup ? ss_qbackup : b.q.value,
  g = 0;
  switch (e) {
    case 40:
      ss_dismissed = !1;
      if (ss_processed(f)) {
        g = ss_countSuggestions(f);
        if (g > 0) {
          if (c.style.visibility == 'hidden') {
            ss_show(f);
            break
          }
          ss_qbackup ? ss_loc++ : (ss_qbackup = f, ss_loc = 0);
          while (ss_loc >= g) ss_loc -= g;
          var h = c.getElementsByTagName('tr');
          for (var i = 0; i < h.length - 1; i++) i == ss_loc ? h[i].className = SS_ROW_SELECTED_CLASS : h[i].className = SS_ROW_CLASS;
          var j = ss_locateSuggestion(f, ss_loc);
          j.q ? b.q.value = j.q : b.q.value = ss_qbackup
        }
      } else ss_panic && alert('run ajax when key down'),
      ss_suggest(f);
      break;
    case 38:
      ss_dismissed = !1;
      if (ss_processed(f)) {
        g = ss_countSuggestions(f);
        if (g > 0) {
          if (c.style.visibility == 'hidden') {
            ss_show(f);
            break
          }
          ss_qbackup ? ss_loc-- : (ss_qbackup = f, ss_loc = - 1);
          while (ss_loc < 0) ss_loc += g;
          var h = c.getElementsByTagName('tr');
          for (var i = 0; i < h.length - 1; i++) i == ss_loc ? h[i].className = SS_ROW_SELECTED_CLASS : h[i].className = SS_ROW_CLASS;
          var j = ss_locateSuggestion(f, ss_loc);
          j.q ? b.q.value = j.q : b.q.value = ss_qbackup
        }
      } else ss_panic && alert('run ajax when key up'),
      ss_suggest(f);
      break;
    case 13:
      var k = null;
      if (ss_processed(f) && ss_qbackup && ss_loc > - 1) {
        var j = ss_locateSuggestion(ss_qbackup, ss_loc);
        j.u && (k = j.u)
      }
      ss_qbackup = null,
      ss_dismissed = !0,
      ss_clear(),
      k && (window.location.href = k);
      break;
    case 27:
      ss_qbackup && (b.q.value = ss_qbackup, ss_qbackup = null),
      ss_dismissed = !0,
      ss_clear();
      break;
    case 37:
    case 39:
    case 9:
    case 16:
      break;
    default:
      ss_dismissed = !1,
      b.q.value != ss_qshown && (ss_key_handling_queue && clearTimeout(ss_key_handling_queue), ss_qbackup = null, ss_loc = - 1, ss_waiting++, ss_allow_debug && ss_debug && ss_debug.getDebugMode() && ss_debug.addWaitDebugLine(b.q.value, 'queue', ss_wait_millisec), ss_key_handling_queue = setTimeout('ss_handleQuery("' + ss_escape(b.q.value) + '", ' + ss_waiting + ')', ss_wait_millisec))
  }
}
function ss_handleQuery(a, b) {
  if (b != ss_waiting) return;
  ss_waiting = 0,
  a == '' ? ss_clear()  : ss_processed(a) ? ss_show(a)  : (ss_panic && alert('run ajax when key change'), ss_suggest(a))
}
function ss_sf() {
  var a = null;
  ss_form_element || (a = document.getElementById('gsa_suggestCapableForm'), a || (a = document.getElementById('searchIntranetForm')), a && a.q.focus()),
  ss_dismissed = !1
}
function ss_clear(a) {
  ss_qshown = null;
  var b = document.getElementById(ss_form_element),
  c = ss_qbackup ? ss_qbackup : b.q.value;
  ss_hide(c),
  a || ss_sf()
}
function ss_hide(a) {
  var b = document.getElementById(ss_popup_element);
  b.style.visibility == 'visible' && (ss_panic && alert('close suggestion box'), ss_allow_debug && ss_debug && ss_debug.getDebugMode() && ss_debug.addHideDebugLine(a, 'hide'), b.style.visibility = 'hidden')
}
function ss_show(a) {
  var b = document.getElementById(ss_form_element).q.value;
  if (b != a) {
    ss_allow_debug && ss_debug && ss_debug.getDebugMode() && ss_debug.addHideDebugLine(a, 'skip');
    return
  }
  var c = (new Date).getTime();
  if (ss_dismissed) {
    ss_qshown = null,
    ss_hide(a);
    return
  }
  if (!ss_processed(a)) return;
  if (a == '') {
    ss_hide(a);
    return
  }
  var d = ss_cached[a] ? ss_cached[a].g : null,
  e = !1;
  ss_use.g && d && (e = !0);
  if (!e) {
    ss_qshown = null,
    ss_hide(a);
    return
  }
  if (ss_painting) {
    ss_painting_queue && clearTimeout(ss_painting_queue),
    ss_allow_debug && ss_debug && ss_debug.getDebugMode() && ss_debug.addWaitDebugLine(a, 'delay', ss_delay_millisec),
    ss_painting_queue = setTimeout('ss_show("' + ss_escape(a) + '")', ss_delay_millisec);
    return
  }
  ss_painting = !0;
  var f = document.getElementById(ss_popup_element);
  for (var g = f.rows.length - 1; g > - 1; g--) f.deleteRow(g);
  var h = 0;
  for (var i = 0; i < ss_seq.length; i++) {
    switch (ss_seq[i]) {
      case 'g':
        h += ss_showSuggestion(d, h, f)
    }
    if (ss_max_to_display > 0 && h >= ss_max_to_display) break
  }
  if (h > 0) {
    var j = f.insertRow( - 1);
    j.className = 'ss-gac-e';
    var k = document.createElement('td');
    k.colSpan = 2;
    var l = document.createElement('span');
    l.onclick = function () {
      ss_qbackup = null,
      ss_clear();
      var a = document.getElementById(ss_form_element).q.value;
      ss_processed(a) || (ss_dismissed = !0, ss_panic && alert('run ajax when mouse close'), ss_suggest(a))
    },
    l.appendChild(document.createTextNode('X')),
    k.appendChild(l),
    j.appendChild(k),
    f.style.visibility = 'visible',
    ss_qshown = a,
    ss_panic && alert('open suggestion box for ' + a);
    if (ss_allow_debug && ss_debug && ss_debug.getDebugMode()) {
      var m = (new Date).getTime();
      ss_debug.addShowDebugLine(a, m - c, ss_cached[a], h)
    }
  } else ss_hide(a);
  ss_painting = !1
}
function ss_showSuggestion(a, b, c) {
  if (ss_max_to_display > 0 && b >= ss_max_to_display) return 0;
  if (a && a.length > 0) {
    for (var d = 0; d < a.length; d++) {
      var e = c.insertRow( - 1);
      e.onclick = ss_handleMouseC,
      e.onmousemove = ss_handleMouseM,
      e.className = SS_ROW_CLASS;
      var f = document.createElement('td');
      a[d].q ? f.appendChild(document.createTextNode(a[d].q))  : f.innerHTML = '<i>' + a[d].t + '</i>',
      f.className = 'ss-gac-c',
      e.appendChild(f);
      var g = '';
      d == 0 && a.length == 1 ? g = ss_g_one_name_to_display : d == 0 && (g = ss_g_more_names_to_display);
      var h = document.createElement('td');
      h.appendChild(document.createTextNode(g)),
      h.className = 'ss-gac-d',
      e.appendChild(h);
      if (ss_max_to_display > 0 && b + d + 1 >= ss_max_to_display) return d + 1
    }
    return a.length
  }
  return 0
}
function ss_handleMouseM() {
  var a = document.getElementById(ss_form_element),
  b = document.getElementById(ss_popup_element),
  c = b.getElementsByTagName('tr');
  for (var d = 0; d < c.length - 1; d++) if (c[d] == this && c[d].className != SS_ROW_SELECTED_CLASS) {
    c[d].className = SS_ROW_SELECTED_CLASS,
    ss_qbackup || (ss_qbackup = a.q.value),
    ss_loc = d;
    var e = ss_locateSuggestion(ss_qbackup, ss_loc);
    e.q ? a.q.value = e.q : a.q.value = ss_qbackup
  } else c[d] != this && (c[d].className = SS_ROW_CLASS);
  return ss_sf(),
  !0
}
function ss_handleMouseC() {
  var a = document.getElementById(ss_form_element),
  b = document.getElementById(ss_popup_element),
  c = b.getElementsByTagName('tr');
  for (var d = 0; d < c.length - 1; d++) if (c[d] == this) {
    ss_qbackup || (ss_qbackup = a.q.value),
    ss_loc = d;
    var e = ss_locateSuggestion(ss_qbackup, ss_loc);
    e.q ? (a.q.value = e.q, a.submit())  : (a.q.value = ss_qbackup, e.u && (window.location.href = e.u));
    break
  }
}
function ss_countSuggestions(a) {
  var b = 0;
  for (var c = 0; c < ss_seq.length; c++) {
    switch (ss_seq[c]) {
      case 'g':
        b += ss_cached[a].g ? ss_cached[a].g.length : 0
    }
    if (ss_max_to_display > 0 && b >= ss_max_to_display) return ss_max_to_display
  }
  return b
}
function ss_locateSuggestion(a, b) {
  var c = 0,
  d = 0,
  e = null;
  for (var f = 0; f < ss_seq.length; f++) {
    switch (ss_seq[f]) {
      case 'g':
        d += ss_cached[a].g ? ss_cached[a].g.length : 0
    }
    if (b >= c && b < d) {
      switch (ss_seq[f]) {
        case 'g':
          var g = ss_cached[a].g[b - c].q;
          return g ? {
            q: g
          }
           : {
            u: ss_cached[a].g[b - c].u
          }
      }
      break
    }
    c = d
}
return null
}
function ss_escape(a) {
return a.replace(/\\/g, '\\\\').replace(/\"/g, '\\"')
}
function ss_escapeDbg(a) {
var b = '',
c = a.split('');
for (var d = 0; d < c.length; d++) switch (c[d]) {
  case '&':
    b += '&amp;';
    break;
  case '<':
    b += '&lt;';
    break;
  case '>':
    b += '&gt;';
    break;
  default:
    b += c[d]
}
return b
}
function ss_Debugger() {
this.debugMode = !1
}
function getPosition(a, b) {
var c = 0,
d = 0,
e = a;
done = !1;
while (!done) e.offsetLeft != null && (c += e.offsetLeft),
e.offsetTop != null && (d += e.offsetTop),
e.offsetParent ? e = e.offsetParent : done = !0,
e == b && (done = !0);
done = !1,
e = a;
while (!done) document.all && e.style && parseInt(e.style.borderLeftWidth) && (c += parseInt(e.style.borderLeftWidth)),
document.all && e.style && parseInt(e.style.borderTopWidth) && (d += parseInt(e.style.borderTopWidth)),
e.parentNode ? e = e.parentNode : done = !0;
return new Array(c, d)
}
function XH_XmlHttpInit_() {
var a = [
  'MSXML2.XMLHTTP.6.0',
  'MSXML2.XMLHTTP.3.0',
  'MSXML2.XMLHTTP',
  'Microsoft.XMLHTTP'
];
if (typeof XMLHttpRequest == 'undefined' && typeof ActiveXObject != 'undefined') {
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    try {
      new ActiveXObject(c),
      XH_ieProgId_ = c;
      break
    } catch (d) {
    }
  }
  if (!XH_ieProgId_) throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed.')
}
}
function XH_XmlHttpCreate() {
return XH_ieProgId_ ? new ActiveXObject(XH_ieProgId_)  : new XMLHttpRequest
}
function XH_XmlHttpGET(a, b, c) {
a.open('GET', b, !0),
a.onreadystatechange = c,
XH_XmlHttpSend(a, null)
}
function XH_XmlHttpPOST(a, b, c, d) {
a.open('POST', b, !0),
a.onreadystatechange = d,
a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
a.setRequestHeader('Content-Length', c.length),
XH_XmlHttpSend(a, c)
}
function XH_XmlHttpOpen(a, b, c, d) {
a.open(b, c, !0),
a.onreadystatechange = d
}
function XH_XmlHttpSetRequestHeader(a, b, c) {
a.setRequestHeader(b, c)
}
function XH_XmlHttpSend(a, b) {
try {
  a.send(b)
} catch (c) {
  throw log('XMLHttpSend failed ' + c.toString() + '<br>' + c.stack),
  c
}
}
function XH_XmlHttpAbort(a) {
SafeTimeout(window, function () {
  a.onreadystatechange = function () {
  }
}, 0),
a.readyState < XML_READY_STATE_COMPLETED && a.abort()
}
var POPUP_WINDOW_WIDTH = 700,
POPUP_WINDOW_HEIGHT = 500,
TITLE_ONE_THIRD_LENGTH = 28,
BANNER_IMAGE_ONE_THIRD_WIDTH = 204,
BANNER_IMAGE_MAXIMUM_WIDTH = 408,
BANNER_IMAGE_MAXIMUM_HEIGHT = 50,
ss_form_element = 'searchIntranetForm',
ss_popup_element = 'search_suggest',
ss_seq = [
'g'
],
ss_allow_debug = !1,
ss_g_one_name_to_display = '',
ss_g_more_names_to_display = '',
ss_g_max_to_display = 10,
ss_max_to_display = 12,
ss_wait_millisec = 300,
ss_delay_millisec = 30,
ss_gsa_host = null,
SS_OUTPUT_FORMAT_LEGACY = 'legacy',
SS_OUTPUT_FORMAT_OPEN_SEARCH = 'os',
SS_OUTPUT_FORMAT_RICH = 'rich',
ss_protocol = SS_OUTPUT_FORMAT_RICH,
ss_allow_non_query = !0,
ss_non_query_empty_title = '',
gsConstants = {
site: '3msource_collection',
client: 'en_US_3msourceFrontend',
apxyUri: '/apxy/proxy?urlAlias=GSA_GOOGLE_SUGGEST',
access: 'p'
},
ss_cached = [
],
ss_qbackup = null,
ss_qshown = null,
ss_loc = - 1,
ss_waiting = 0,
ss_painting = !1,
ss_key_handling_queue = null,
ss_painting_queue = null,
ss_dismissed = !1,
ss_panic = !1,
SS_ROW_CLASS = 'ss-gac-a',
SS_ROW_SELECTED_CLASS = 'ss-gac-b';
Array.indexOf || (Array.prototype.indexOf = function (a) {
for (var b = 0; b < this.length; b++) if (this[b] == a) return b;
return - 1
});
var ss_debug = new ss_Debugger;
ss_Debugger.DEBUG_CONSOLE_ID = 'ss_debug_console',
ss_Debugger.DEBUG_CONTENT_ID = 'ss_debug_content',
ss_Debugger.DEBUG_TOGGLE_ID = 'ss_debug_toggle',
ss_Debugger.prototype.getDebugMode = function () {
return this.debugMode
},
ss_Debugger.prototype.activateConsole = function () {
var a = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
if (a) a.style.display = 'block';
 else {
  var b = document.createElement('div');
  b.id = ss_Debugger.DEBUG_CONSOLE_ID,
  b.zIndex = 100,
  b.className = 'expanded';
  var c = document.createElement('h1');
  c.appendChild(document.createTextNode('GSA Suggest Debug Console')),
  c.style.display = 'inline',
  b.appendChild(c);
  var d = document.createElement('div');
  d.style.float = 'right';
  var e = document.createElement('button');
  e.onclick = function (a) {
    var b = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
    if (b) for (var c = b.rows.length - 1; c > 0; c--) b.deleteRow(c)
  },
  e.appendChild(document.createTextNode('Clear console')),
  d.appendChild(e),
  e = document.createElement('button'),
  e.onclick = function (a) {
    ss_cached = [
    ]
  },
  e.appendChild(document.createTextNode('Clear cache')),
  d.appendChild(e),
  e = document.createElement('button'),
  e.id = ss_Debugger.DEBUG_TOGGLE_ID,
  e.onclick = function (a) {
    var b = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
    if (b) {
      var c = document.getElementById(ss_Debugger.DEBUG_TOGGLE_ID);
      b.className.indexOf('expanded') != - 1 ? (b.className = b.className.replace(/expanded/, 'contracted'), c.innerHTML = 'Maximize')  : (b.className = b.className.replace(/contracted/, 'expanded'), c.innerHTML = 'Minimize')
    }
  },
  e.appendChild(document.createTextNode('Minimize')),
  d.appendChild(e),
  d.style.display = 'inline',
  b.appendChild(d),
  b.appendChild(document.createElement('br'));
  var f = document.createElement('table');
  f.id = ss_Debugger.DEBUG_CONTENT_ID;
  var g = f.insertRow( - 1),
  h = document.createElement('th');
  h.innerHTML = 'Query',
  g.appendChild(h),
  h = document.createElement('th'),
  h.innerHTML = 'Type',
  g.appendChild(h),
  h = document.createElement('th'),
  h.innerHTML = 'Time',
  g.appendChild(h),
  h = document.createElement('th'),
  h.innerHTML = 'g',
  g.appendChild(h),
  h = document.createElement('th'),
  h.innerHTML = 'Total',
  g.appendChild(h),
  b.appendChild(f),
  document.body.appendChild(b)
}
this.debugMode = !0
},
ss_Debugger.prototype.deactivateConsole = function () {
var a = document.getElementById(ss_Debugger.DEBUG_CONSOLE_ID);
a && (a.style.display = 'none'),
this.debugMode = !1
},
ss_Debugger.prototype.addRequestDebugLine = function (a, b, c, d) {
var e = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if (e) {
  var f = e.insertRow(1),
  g = document.createElement('td');
  g.innerHTML = '&lt;' + ss_escapeDbg(a) + '&gt;',
  f.appendChild(g),
  g = document.createElement('td'),
  g.innerHTML = b,
  f.appendChild(g),
  g = document.createElement('td'),
  g.className = 'no',
  g.innerHTML = c + ' ms',
  f.appendChild(g);
  switch (b) {
    case 'suggest':
      g = document.createElement('td'),
      g.className = 'no',
      g.innerHTML = d.g ? d.g.length : 0,
      f.appendChild(g),
      g = document.createElement('td'),
      f.appendChild(g);
      break;
    default:
      g = document.createElement('td'),
      f.appendChild(g),
      g = document.createElement('td'),
      f.appendChild(g)
  }
}
},
ss_Debugger.prototype.addShowDebugLine = function (a, b, c, d) {
var e = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if (e) {
  var f = e.insertRow(1),
  g = document.createElement('td');
  g.innerHTML = '&lt;' + ss_escapeDbg(a) + '&gt;',
  f.appendChild(g),
  g = document.createElement('td'),
  g.innerHTML = '<i>show</i>',
  f.appendChild(g),
  g = document.createElement('td'),
  g.className = 'no',
  g.innerHTML = b + ' ms',
  f.appendChild(g),
  g = document.createElement('td'),
  g.className = 'no',
  g.innerHTML = c ? c.g ? c.g.length : 0 : 0,
  f.appendChild(g),
  g = document.createElement('td'),
  g.className = 'no',
  g.innerHTML = d,
  f.appendChild(g)
}
},
ss_Debugger.prototype.addHideDebugLine = function (a, b) {
var c = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if (c) {
  var d = c.insertRow(1),
  e = document.createElement('td');
  e.innerHTML = '&lt;' + ss_escapeDbg(a) + '&gt;',
  d.appendChild(e),
  e = document.createElement('td'),
  e.innerHTML = '<i>' + b + '</i>',
  d.appendChild(e),
  e = document.createElement('td'),
  e.className = 'no',
  e.innerHTML = '0 ms',
  d.appendChild(e),
  e = document.createElement('td'),
  d.appendChild(e),
  e = document.createElement('td'),
  d.appendChild(e)
}
},
ss_Debugger.prototype.addWaitDebugLine = function (a, b, c) {
var d = document.getElementById(ss_Debugger.DEBUG_CONTENT_ID);
if (d) {
  var e = d.insertRow(1),
  f = document.createElement('td');
  f.innerHTML = '&lt;' + ss_escapeDbg(a) + '&gt;',
  e.appendChild(f),
  f = document.createElement('td'),
  f.innerHTML = '<i>' + b + '</i>',
  e.appendChild(f),
  f = document.createElement('td'),
  f.className = 'no',
  f.innerHTML = c + ' ms',
  e.appendChild(f),
  f = document.createElement('td'),
  e.appendChild(f),
  f = document.createElement('td'),
  e.appendChild(f)
}
};
var ss_use = {
};
ss_use.g = ss_seq.indexOf('g') >= 0 ? !0 : !1;
var XH_ieProgId_,
XML_READY_STATE_UNINITIALIZED = 0,
XML_READY_STATE_LOADING = 1,
XML_READY_STATE_LOADED = 2,
XML_READY_STATE_INTERACTIVE = 3,
XML_READY_STATE_COMPLETED = 4;
XH_XmlHttpInit_()
