/* JavaScript Document 
    GetAjaxContent() Theme Script
   /3MContentRetrievalAPI/BlobServlet?lmd=1441027125000&locale=en_US&assetType=MMM_Image&assetId=1273678671920&blobAttribute=ImageFile
 */
function GetAjXContent() {
  setTimeout('CreateAjXXMLHttp()', 10)
}
function CreateAjXXMLHttp() {
  return xmlHttp = GetXmlHttpObject(),
  null == xmlHttp ? (alert('Your browser does not support AJAX!'), void 0)  : (showCD(), void 0)
}
function init() {
  objUa = new clsUa,
  objUa.w3c && lsnInit()
}
function openOptinWindow(a) {
  a = a,
  window.open(a, '', 'width=' + POPUP_WINDOW_WIDTH + ',height=' + POPUP_WINDOW_HEIGHT + ',resizable=yes,scrollbars=yes')
}
function loadBannerImage(a, b) {
  return BannerImage = new Image,
  'null' == b ? (document.write('Invalid Image Asset ID'), void 0)  : (BannerImage.src = b, a > TITLE_ONE_THIRD_LENGTH && BannerImage.width > BANNER_IMAGE_ONE_THIRD_WIDTH ? document.write('Image not loaded')  : BannerImage.width > BANNER_IMAGE_MAXIMUM_WIDTH || BannerImage.height > BANNER_IMAGE_MAXIMUM_HEIGHT ? document.write('Image not loaded')  : document.write('<img src=' + b + ' />'), void 0)
}
function submitName() {
  document.searchForm.lastName.value = '',
  document.searchForm.firstName.value = ''
}
function submitIntranetName() {
  document.searchIntranetForm.searchIntranetName.value = ''
}
function callClearTextBox() {
  document.searchForm.lastName.value = '',
  document.searchForm.firstName.value = '',
  document.searchIntranetForm.searchIntranetName.value = ''
}
function changePage() {
  document.userForm.selectedWorkcenterAttribute.value = document.userForm.interest[document.userForm.interest.selectedIndex].name,
  window.document.userForm.action = document.userForm.interest[document.userForm.interest.selectedIndex].value,
  window.document.userForm.submit()
}
function searchWorkForce(a, b, c, d) {
  var h,
  e = 'http://connections.mmm.com/profiles/html/simpleSearch.do',
  f = window.location.pathname.split('http://3msource.mmm.com/') [4],
  g = 'en';
  if (f && - 1 != f.indexOf('_') && (g = f.split('_') [0], '' == g && (g = 'en')), a.firstName.value == c && (a.firstName.value = '*'), a.lastName.value == d && (a.lastName.value = '*'), '*' != a.firstName.value || '*' != a.lastName.value) {
    if (h = '*' == a.firstName.value && '*' != a.lastName.value ? a.lastName.value : a.firstName.value + ' ' + a.lastName.value, isElementAvailable(a, 'name') && isElementAvailable(a, 'lang')) a.name.value = h,
    a.lang.value = g;
     else {
      var i = createNewHiddenElement('name', h),
      j = createNewHiddenElement('lang', g);
      a.appendChild(i),
      a.appendChild(j)
    }
    disableElementsForConnections(a),
    e = e + '?searchBy=name&searchFor=' + h,
    a.action = e,
    a.submit()
  }
}
function searchWorkForce2(a) {
  var b = 'http://connections.mmm.com/profiles/search.jsp';
  a.action = b
}
function disableElementsForConnections(a) {
  a.actionName.disabled = 'true',
  a.searchMode.disabled = 'true',
  a.closeWindow.disabled = 'true',
  a.lastName.disabled = 'true',
  a.firstName.disabled = 'true';
  var b = document.getElementsByName('btnG');
  b[0].disabled = !0,
  b[1].disabled = !0
}
function createNewHiddenElement(a, b) {
  var c = document.createElement('input');
  return c.type = 'hidden',
  c.name = a,
  c.value = b,
  c
}
function isElementAvailable(a, b) {
  var c = !1;
  if (a) for (var d = 0; d < a.elements.length; ++d) if (a.elements[d].name == b) {
    c = !0;
    break
  }
  return c
}
function SearchIntranetSubmit(a) {
  a.submit()
}
function advancedSearchSubmit(a, b, c, d) {
  document.searchForm.searchMode.value = 'AdvancedSearch',
  document.searchForm.actionName.value = 'ShowAdvancedSearch',
  document.searchForm.firstName.value == c && (document.searchForm.firstName.value = ''),
  document.searchForm.lastName.value == d && (document.searchForm.lastName.value = ''),
  document.searchForm.action = b,
  document.searchForm.submit()
}
function getParentUrl() {
  return window.location
}
function closeWindow() {
  if (null != opener) {
    var a = new String;
    a = window.name,
    opener.location = a
  }
  self.close()
}
function SendEmailNotifications(a) {
  if (FFlagVal = 0, EmailxmlHttp = null, EmailID = a, EmailxmlHttp = EmailGetXmlHttpObject(), null == EmailxmlHttp) return alert('Your browser does not support AJAX!'),
  !1;
  var b = '<?xml version=\'1.0\' ?>';
  b += '<Request>',
  b += '<EmailID>' + EmailID + '</EmailID>',
  b += '<UserPin>' + $('meta[name="DCS.dcsaut"]').attr('content') + '</UserPin>',
  b += '</Request>';
  var c = PrimarydomServer + AgentPath;
  EmailxmlHttp.onreadystatechange = EmailstateChanged,
  EmailxmlHttp.open('POST', c, !0),
  FFlagVal = 1,
  EmailxmlHttp.send(b)
}
function EmailstateChanged() {
  if (FFlagVal = 1, 4 == EmailxmlHttp.readyState) if (200 != EmailxmlHttp.status) {
    if (1 != domServerNo) return alert('Server is unable to process your request at this time.  Try again later. 001'),
    !1;
    PrimarydomServer = SecondarydomServer,
    domServerNo = 2,
    SendEmailNotifications(EmailID)
  } else {
    var a = EmailxmlHttp.responseXML.documentElement,
    b = a.getElementsByTagName('Message') [0].childNodes[0].nodeValue;
    alert(b)
  }
}
function EmailGetXmlHttpObject() {
  var a = null;
  try {
    a = new XMLHttpRequest
  } catch (b) {
    try {
      a = new ActiveXObject('Msxml2.XMLHTTP')
    } catch (b) {
      xEmailxmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
  }
  return a
}
function SendEmailNotification(a) {
  var b = navigator.appName;
  'Microsoft Internet Explorer' == b ? SendEmailNotifications(a)  : SendEmailNotificationMozilla(a)
}
function SendEmailNotificationMozilla(a) {
  window.setTimeout('SendEmailNotifications(\'' + a + '\')', 0),
  window.setTimeout('SendEmailNotificationsSecond()', 3000),
  window.setTimeout('AlertServerErrorMsg()', 1000)
}
function SendEmailNotificationsSecond() {
  0 == FFlagVal && 1 == domServerNo && (PrimarydomServer = SecondarydomServer, domServerNo = 2, window.setTimeout('SendEmailNotificationMozilla(\'' + EmailID + '\')', 0))
}
function AlertServerErrorMsg() {
  return 0 == FFlagVal && 2 == domServerNo ? (FFlagVal = 1, alert('Server is unable to process your request at this time.  Try again later. 002  '), !1)  : void 0
}
function showCD(a) {
  if (void 0 != a && (AjXSURL = a), '' == AjXSURL) {
    if (posJ >= AjXUrls.length) return !1;
    if (posJ > 20) return !1;
    var b = AjXUrls[posJ];
    AjaxDivId = AjXDivs[posJ]
  } else {
    var c = showCD.arguments;
    if ('' == c[0]) return !1;
    if ('' == a) return !1;
    var b = a;
    c.length > 1 && (AjaxDivId = c[1])
  }
  return xmlHttp = GetXmlHttpObject(),
  null == xmlHttp ? (alert('Your browser does not support AJAX!'), void 0)  : (servernames(b), xmlHttp.onreadystatechange = stateChanged, xmlHttp.open('GET', b, !0), xmlHttp.send(null), void 0)
}
function stateChanged() {
  if (4 == xmlHttp.readyState) {
    if ('' == xmlHttp.responseText) {
      var a = document.getElementById(AjaxDivId);
      return a.innerHTML = '<font face=\'Veranda, Arial\' color=\'red\' size=\'2px\'>The data source (' + dserver + ') that provides the content for this page is not responding.  Please contact support.</font>',
      !1
    }
    document.getElementById(AjaxDivId).innerHTML = xmlHttp.responseText;
    var a = document.getElementById(AjaxDivId),
    b = a.getElementsByTagName('h1');
    if (b.length > 0 && 'Error 404' == b(0).innerHTML) return a.innerHTML = '<font face=\'Veranda, Arial\' color=\'red\' size=\'2px\'>Error Occured.  Not able to find the source document. Please contact support.</font>',
    !1;
    var c = a.getElementsByTagName('a'),
    d = window.location.href,
    e = d.split('/');
    if ('file' == e[0]) return !1;
    for (i = 0; i < c.length; i++) {
      var f = c[i].href,
      g = f.split('/'),
      f = g[0] + '//' + g[2];
      if (f == cserver) {
        var f = c[i].href,
        h = f.replace(cserver, dserver);
        (c[i].href.indexOf('.nsf') > 10 || c[i].href.indexOf('.NSF') > 10) && (c[i].href = h)
      }
    }
    var j = a.getElementsByTagName('img');
    for (i = 0; i < j.length; i++) {
      var f = j[i].src,
      h = f.replace(cserver, dserver),
      g = f.split('/'),
      f = g[0] + '//' + g[2];
      f == cserver && (j[i].src = h)
    }
    '' == AjXSURL && UpdateTable()
  }
}
function UpdateTable() {
  posJ += 1,
  xmlHttp = '',
  setTimeout('showCD()', 1)
}
function GetXmlHttpObject() {
  var a = null;
  try {
    a = new XMLHttpRequest
  } catch (b) {
    try {
      a = new ActiveXObject('Msxml2.XMLHTTP')
    } catch (b) {
      a = new ActiveXObject('Microsoft.XMLHTTP')
    }
  }
  return a
}
function servernames(a) {
  var b = window.location.href;
  return b = b.split('/'),
  'file' == b[0] ? (alert('not able to process from local computer'), !1)  : (cserver = b[0] + '//' + b[2], b = a, b = b.split('/'), 'file' == b[0] ? (alert('not able to process from local computer'), !1)  : (dserver = b[0] + '//' + b[2], void 0 != window.Proxy2Cserver && (dserver = Proxy2Cserver), void 0))
}
function showDiv(what, which, numdivs) {
  var fullImage = document.getElementById('tab' + which);
  for (i = 0; numdivs > i; i++) if (IE5 && eval('document.all.' + what + i + '.style.display=\'none\''), NN6 && eval('document.getElementById(\'' + what + i + '\').style.display=\'none\''), 'table' == what) {
    var current = document.getElementById('tab' + i);
    current.className = '',
    fullImage = document.getElementById('tab' + i)
  }
  if (IE5 && eval('document.all.' + what + which + '.style.display=\'block\''), NN6 && eval('document.getElementById(\'' + what + which + '\').style.display=\'inline\''), 'table' == what) {
    var current = document.getElementById('tab' + which);
    current.className = 'current',
    fullImage = document.getElementById('tab' + which)
  }
}
jQuery(document).ready(function () {
  var a = jQuery('<table cellpadding="0" cellspacing="0" class="ss-gac-m" style="visibility:hidden;" id="search_suggest"></table>');
  jQuery('#keywordSearchForm').append(a),
  jQuery('#searchValue').keyup(function (a) {
    ss_handleKey(a, this.form)
  }),
  jQuery('#searchValue').attr('autocomplete', 'off')
});
var EmailxmlHttp,
PrimarydomServer = '/apxy/proxy?urlAlias=APPS_105_CalendarButton',
SecondarydomServer = '/apxy/proxy?urlAlias=APPS_205_CalendarButton',
AgentPath = '',
domServerNo = 1,
EmailID,
funFlag = 0,
FFlagVal,
xmlHttp,
cserver,
dserver,
AjaxDivId = 'txtHint',
AjXSURL = '',
posJ = 0;
IE5 = NN6 = !1,
document.all ? IE5 = !0 : document.getElementById && (NN6 = !0);
