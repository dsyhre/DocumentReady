/******************************************************************************************************************************************************************
 * ITC Site Level Scripts
 * Author: a2gt4zz / dmsyhre@mmm.com / Derek M Syhre
 * Asset Id: 1180611627131
 * Last Updated: 4/15/2016 9:22am
 ******************************************************************************************************************************************************************/
var msg = '',
consoleSupport = false,
WindowObjectReference = null,
liveChatURL = 'https://cbi.boldchat.com/aid/1615092119171191995/bc.cbi?cbdid=1172920353959976221&wdid=871851892837005995&rdid=3517553332861273848',
boldChatResult,
i,
smaller_path = '';
/**
 * This console method is for getting the 
 * correct line number on error logging
 *
 * @method log()
 * @return string or event error string
 * @param i {String} custom message / error / event object, it can take anything.
*/
(function () {
  'use strict';
  var method;
  var noop = function () {
  };
  var methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'warn'
  ];
  var length = methods.length; /* check if console exists else make one */
  var console = (window.console = window.console || {
  });
  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  } /* if it exists, use it but output correct line number to console */

  if (Function.prototype.bind) {
    window.log = Function.prototype.bind.call(console.log, console);
  } else { /* use log() to output to console with correc tline number, either will work */
    window.log = function () {
      Function.prototype.apply.call(console.log, console, arguments);
    };
  }
}) ();
/**
	* Changes the document and page title for non portal
	* org chart pages
	*
	* @object orgcharts
	* @methods rdy
	* @usage orgcharts.rdy()
*/
var orgcharts = {
  rdy: function (title) {
    log('orgchart title change function');
    document.title = title;
  }
};
/**
 * This console method is for try catch blocks
 * outputs all possible details for error
 * @method $c
 * @return string or event string
 * @param t {Event} Event thrown or error thrown.
 * @param e {String} custom message.
*/
function $c(t, e) {
  'use strict';
  log('e instanceof SyntaxError: ' + t instanceof SyntaxError),
  log('e.message: ' + t.message),
  log('e.name: ' + t.name),
  log('e.filenamer: ' + t.fileName),
  log('e.lineNumber: ' + t.lineNumber),
  log('e.columnNumber: ' + t.columnNumber),
  log('e.stack: ' + t.stack)
}
function dialogAlert() {
  'use strict';
  $('#dialog').dialog()
}
function logonsole(t) {
  'use strict';
  log(t)
}
function $debug_(t) {
  'use strict';
  log(t)
}
function lsnTwisty() {
  'use strict';
  var t,
  e = '/3M/themes/html/3M/images/lsnoff.gif',
  i = $('#mmmlsnwrap'),
  n = $('#mmmlsnwrap ul li.collapse a:nth-child(2)'),
  a = ($(i).parent(), '/3M/themes/html/3M/images/lsnoff.gif');
  $('#ITCLSN').length > 0 ? (log('lsnTwisty()'), n.on('click', function (i) {
    i.cancelBubble = !0,
    t = $(this),
    log('lsnTwisty() each'),
    'Find Support' === t.html() ? t.addClass('labelInLSN')  : (t.removeAttr('href').addClass('LSN_Label'), e = $(this).next().slideToggle('fast').prev().prev().children('img').attr('src'), a = $(this).prev().children('img').attr('src'), logonsole(a), '/3M/themes/html/3M/images/lsnoff.gif' === a ? (a = $(this).prev().children('img').attr('src'), a = '/3M/themes/html/3M/images/lsnon.gif', $(this).prev().children('img').attr('src', a))  : (a = $(this).prev().children('img').attr('src'), a = '/3M/themes/html/3M/images/lsnoff.gif', $(this).prev().children('img').attr('src', a)))
  }))  : (e = '/3M/themes/html/3M/images/lsnoff.gif', i = $('#mmmlsnwrap'), n = $('#mmmlsnwrap ul li.collapse a:nth-child(2)'), a = '/3M/themes/html/3M/images/lsnoff.gif', log('lsnTwisty() real lsn'), n.removeAttr('href').addClass('LSN_Label').on('click', function () {
    e = $(this).next().slideToggle('fast').prev().prev().children('img').attr('src'),
    a = $(this).prev().children('img').attr('src'),
    logonsole(a),
    '/3M/themes/html/3M/images/lsnoff.gif' === a ? (a = $(this).prev().children('img').attr('src'), a = '/3M/themes/html/3M/images/lsnon.gif', $(this).prev().children('img').attr('src', a))  : (a = $(this).prev().children('img').attr('src'), a = '/3M/themes/html/3M/images/lsnoff.gif', $(this).prev().children('img').attr('src', a))
  }))
}
function breadCrumbAtoZFix() {
  'use strict';
  var t = $('#cShellBcrumb p').text(),
  e = !1,
  i = window.location.pathname,
  n = ' ';
  if (t.match(/ITCenter_AtoZ/i)) {
    $('#cShellBcrumb p').css({
      visibility: 'hidden',
      height: '13px'
    });
    var a = $('h1').text();
    n = $('#cShellBcrumb p').html(),
    n += 'A to Z list of Programs and Applications, Products/Services, Reference documents, Organization charts, Workforce, Software, Information Technology, IT, Help, HelpDesk, Help Desk, Live Chat',
    $('#cShellBcrumb p').html(n + ' > ' + a)
  } else 9 === t.length && t.match(/IT Center/) && ($('#cShellBcrumb p').css({
    visibility: 'hidden',
    height: '13px'
  }), n = $('#cShellBcrumb p').html(), n += '- Information on: Applications, Apps, Products, Service, Reference, Organization, AtoZ, Workforce, Software, Information Technology, IT, Help, HelpDesk, Help Desk, Live Chat', $('#cShellBcrumb p').html(n));
  i.match('AtoZ/') && (e = !0),
  e && (msg = '&nbsp;<a href=\'/wps/myportal/3M/en_US/ITCenter-AtoZ/AtoZ/\'>Software&nbsp;/&nbsp;Applications&nbsp;A-Z&nbsp;List</a>', changeBreadCrumb(msg), i.length >= 42 && null === i.match(/search/i) && (msg = '&nbsp;<a href=\'/wps/myportal/3M/en_US/ITCenter-AtoZ/AtoZ/\'>Software&nbsp;/&nbsp;Applications A-Z List</a>&nbsp;>&nbsp;', changeBreadCrumb(msg))),
  location.pathname.match('ITHealthCareCompliance') && changeBreadCrumb('<a href="/wps/myportal/3M/en_US/ITCenter/ITCenter/ProductsServices/AdditionalServicesResources/" title="Additional Services / Resources">Additional Services / Resources</a>'),
  location.pathname.match('ITHealthCareCompliance') && location.pathname.length > 109 && changeBreadCrumb('<a href="/wps/myportal/3M/en_US/ITCenter/ITCenter/ProductsServices/AdditionalServicesResources/" title="Additional Services / Resources">Additional Services / Resources</a>&nbsp;&gt;&nbsp;<a href="/wps/myportal/3M/en_US/ITCenter/ITCenter/ProductsServices/AdditionalServicesResources/ITHealthCareCompliance/" title="IT Health Care Compliance &amp; Validation">IT Health Care Compliance &amp; Validation</a>')
}
function changeBreadCrumb(t) {
  'use strict';
  var e,
  i = '<a href="/wps/myportal/3M/en_US/ITCenter/ITCenter/">IT Center</a>&nbsp;&gt;&nbsp;',
  n = $('h1').text();
  e = t,
  window.location.pathname.match(/AtoZ/i) ? $('#cShellBcrumb p').html(i + e + n)  : $('#cShellBcrumb p').html(i + e + '&nbsp;&gt;&nbsp;' + n)
}
function breadcrumbChange_linkBinding() {
  'use strict';
  $('div#cShellBcrumb p a:first').attr('href', '/wps/myportal/3M/en_US/ITCenter/ITCenter/')
}
function css_browser_selector(t) {
  var e = t.toLowerCase(),
  i = function (t) {
    return e.indexOf(t) > - 1
  },
  n = 'gecko',
  a = 'webkit',
  s = 'safari',
  o = 'opera',
  r = 'mobile',
  l = document.documentElement,
  d = [
    !/opera|webtv/i.test(e) && /msie\s(\d)/.test(e) ? 'ie ie' + RegExp.$1 : i('firefox/2') ? n + ' ff2' : i('firefox/3.5') ? n + ' ff3 ff3_5' : i('firefox/3.6') ? n + ' ff3 ff3_6' : i('firefox/3') ? n + ' ff3' : i('gecko/') ? n : i('opera') ? o + (/version\/(\d+)/.test(e) ? ' ' + o + RegExp.$1 : /opera(\s|\/)(\d+)/.test(e) ? ' ' + o + RegExp.$2 : '')  : i('konqueror') ? 'konqueror' : i('blackberry') ? r + ' blackberry' : i('android') ? r + ' android' : i('chrome') ? a + ' chrome' : i('iron') ? a + ' iron' : i('applewebkit/') ? a + ' ' + s + (/version\/(\d+)/.test(e) ? ' ' + s + RegExp.$1 : '')  : i('mozilla/') ? n : '',
    i('j2me') ? r + ' j2me' : i('iphone') ? r + ' iphone' : i('ipod') ? r + ' ipod' : i('ipad') ? r + ' ipad' : i('mac') ? 'mac' : i('darwin') ? 'mac' : i('webtv') ? 'webtv' : i('win') ? 'win' + (i('windows nt 6.0') ? ' vista' : '')  : i('freebsd') ? 'freebsd' : i('x11') || i('linux') ? 'linux' : '',
    'js'
  ];
  return c = d.join(' '),
  l.className += ' ' + c,
  c
}
function urlCheck() {
  'use strict';
  try {
    var t,
    e,
    i = getUrlVars();
    if (i) {
      var n,
      a;
      i.form && (closeup = window.open('/wps/myportal/3M/en_US/ITCenter/Home?assetId=1273696649401&styleSheetIdParam=1273696704604&soloMode=True', 'MyWindow', '_blank', 'width=623,height=395'), close(), closeup.focus()),
      'true' === i.printable && ($(document).printerFriendly(), $('.sprite-TwistieArrow').length > 0 && $('.sprite-TwistieArrow').click(), $('#printlink') && $('#printlink').hide(), $('p.print') && $('p.print').hide(), window.print()),
      i.tab ? (c = i.tab, tabToggle(c))  : i.Tab ? (c = i.Tab, tabToggle(c))  : i.TAB ? (c = i.TAB, tabToggle(c))  : i.tp && (c = i.tp, t = !0, toggleTab_noUrlHash(c)),
      i.ITC && ($('.sprite-TwistieArrow :eq(0)').click(), $(document).scrollTop('1000')),
      i.anchor && (n = i.anchor, window.scrollTo(0, $('#' + n).position().top + 215)),
      i.anchorTo && (e = i.anchorTo, window.setTimeout(function () {
        window.scrollTo(0, $('#' + e).position().top + 215)
      }, 1000)),
      i.letter && (a = i.letter, loadLetter(a));
      var s = $('#cShellBcrumb p').text();
      s.match(/ITCenter_AtoZ/i) && (msg = '&nbsp;<a href=\'/wps/myportal/3M/en_US/ITCenter-AtoZ/AtoZ/\'>Software&nbsp;/&nbsp;Applications&nbsp;A-Z&nbsp;List</a>', changeBreadCrumb(msg))
    }
  } catch (o) {
    log(o),
    $c(o)
  }
}
function showDiv11(t, e) {
  'use strict';
  toggleTab_noUrlHash(t)
}
function showsub(t) {
}
function toggleTab_noUrlHash(t) {
  'use strict';
  showDiv1(t)
}
function applyTwisties() {
}
function bindLinks() {
}
function checkSearch() {
  'use strict';
  var t,
  e,
  i = document.mavenForm.searchtext.value;
  return '' === i ? (alert('Please enter your technical search question'), document.mavenForm.searchtext.value = '', document.mavenForm.searchtext.focus(), !1)  : (e = escape(i), void (t = document.mavenForm.action + '?q=' + e))
}
function checkSearchIT() {
  'use strict';
  var t,
  e = document.mavenFormIT.searchtextIT.value;
  return '' === e ? (alert('Please enter your technical search question'), document.mavenFormIT.searchtextIT.value = '', document.mavenFormIT.searchtextIT.focus(), !1)  : (t = escape(e), void (url = document.mavenFormIT.action + '?q=' + t))
}
function popSurvey() {
  'use strict';
  var t,
  e,
  i,
  n,
  a,
  s,
  o = document.getElementsByTagName('meta');
  for (t in o) 'site' === o[t].name && (e = o[t].content, i = e.indexOf('|'), e = e.substring(i + 1, e.length)),
  'DCS.dcsaut' === o[t].name && (n = o[t].content),
  'DCSext.locale' === o[t].name && (a = o[t].content);
  s = location.href,
  setCookie('IT_country', a),
  setCookie('USER_NAME', n),
  setCookie('IT_current_source_url', s),
  setCookie('IT_current_site', e),
  setCookie('IT_current_page_title', document.title, null),
  window.open('http://apps105.mmm.com/Groups/IT/itctrwebsurvey.nsf/hrwebfeedback_popup?OpenForm', '_blank', 'width=620,height=420')
}
function setCookie(t, e, i) {
  'use strict';
  var n = new Date;
  n.setDate(n.getDate() + i),
  document.cookie = t + '=' + escape(e) + ';path=/;domain=mmm.com;' + (null === i ? '' : 'expires=' + n.toGMTString())
}
function openRequestedPopup(t, e) {
  'use strict';
  null === WindowObjectReference || WindowObjectReference.closed ? WindowObjectReference = window.open(t, e)  : WindowObjectReference.focus()
}
function displayMyComputer() {
  'use strict';
  var t,
  e = document.getElementsByName('DCS.dcsaut') [0];
  t = 'http://gsm/Person/Person_Computer.aspx?PIN=' + e.content,
  openRequestedPopup(t, '_blank')
}
function changeTitle(t) {
  'use strict';
  document.title = t
}
function fancyToolTips() {
  'use strict';
  $(document).tooltip({
    show: {
      effect: 'explode',
      delay: 250
    },
    hide: {
      effect: 'explode',
      delay: 150
    }
  })
}
function tabToggle(t) {
  'use strict';
  var e,
  i,
  n,
  a,
  s = !1,
  o = '0',
  r = $('a[name=\'tabLinks\']'),
  l = !1;
  t || (t = '0'),
  urlHash ? (urlHash.anchor && (a = urlHash.anchor, window.scrollTo(0, $('#' + a).position().top + 215)), urlHash.tab ? e = urlHash.tab : urlHash.Tab ? e = urlHash.Tab : urlHash.TAB ? e = urlHash.TAB : urlHash.tp && (e = urlHash.tp, l = !0), l ? showDiv1(e)  : $(r).each(function () {
    n = $(this).text(),
    n = n.toLowerCase(),
    e = e.toLowerCase(),
    n.match(e) && s === !1 && (i = $(this).attr('ID'), o = i.substr(8), o = o.toString(), s = !0, showDiv1(o))
  }))  : showDiv1(t)
}
function showDiv1(t) {
  'use strict';
  t.length > 1 && ($('#tabLink-' + t.substr(0, 1)).click(), $('#tabDiv-' + t.substr(0, 1)).find('div[name=\'tabDivs\']').hide(), $('#tabDiv-' + t.substr(0, 1)).find('a.activeSubTab').removeClass('activeSubTab'), $('#tabDiv-' + t).show(), $('#tabLink-' + t).addClass('activeSubTab'), window.scrollTo(0, $('#contentwrap').position().top)),
  $('#tabLink-' + t).click()
}
function expandList3(t, e) {
  'use strict';
  'none' === $('#' + t).css('display') ? ($('#' + t).show(), $('#extra').css('display', 'none'), $('#less').css('display', 'inline'), $('#' + e).css('display', 'none'))  : ($('#' + t).hide(), $('#extra').css('display', 'inline'), $('#less').css('display', 'none'), $('#' + e).css('display', 'inline'))
}
function bindTwistieClick_Sprite() {
  'use strict';
  loadScript.twistie()
}
function bindTwistieClick_Sprite2() {
}
function bindTwistieClick_OLD() {
}
function getUrlVars() {
  'use strict';
  try {
    var t,
    e,
    i = [
    ],
    n = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (e = 0; e < n.length; e += 1) t = n[e].split('='),
    i.push(t[0]),
    i[t[0]] = t[1];
    return i
  } catch (a) {
    log(a),
    $c(i)
  }
}
function toggleHidden() {
  'use strict';
  $('a.twistie,a.sprite-TwistieArrow,a.sprite-TwistieArrowDown, .LSN_Label').click()
}
function expandList(t, e) {
  'use strict';
  return 'none' === document.getElementById(t).style.display ? ($('#' + t).slideDown('fast'), document.getElementById(e).style.background = 'url(/3MContentRetrievalAPI/BlobServlet?assetId=1180602582634&assetType=MMM_Image&blobAttribute=ImageFile) transparent no-repeat 0px 5px')  : ($('#' + t).slideUp('fast'), document.getElementById(e).style.background = 'url(/3MContentRetrievalAPI/BlobServlet?assetId=1180602582640&assetType=MMM_Image&blobAttribute=ImageFile) transparent no-repeat 1px 3px'),
  !1
}
function lightItUp2() {
  'use strict';
  lightItUp()
}
function positionIcons() {
  'use strict';
  var t = $('.cboxElement img').next(),
  e = $('a.cboxElement'),
  i = $('.cboxElement img');
  $(i).each(function () {
    $(this).addClass('nonIE_cbIconThumb')
  }),
  $(e).each(function () {
    $(this).css('position', 'relative').addClass('nonIE_cbIconLink')
  }),
  $(t).each(function () {
    $(this).css({
      position: 'absolute',
      bottom: '0px',
      right: '0px'
    })
  })
}
function createIcons() {
  'use strict';
  var t,
  e,
  i = $('a.cboxElement'),
  n = document.createElement('img'),
  a = '/3MContentRetrievalAPI/BlobServlet?assetId=1319234340295&assetType=MMM_Image&blobAttribute=ImageFile',
  s = $('a.cboxElement img');
  $(i) && ($(s).each(function () {
    $(this).addClass('addIcon')
  }), t = $('a.cboxElement img.addIcon'), $(t).each(function () {
    e = $(this).parent('a'),
    n = document.createElement('img'),
    a = '/3MContentRetrievalAPI/BlobServlet?assetId=1319234340295&assetType=MMM_Image&blobAttribute=ImageFile',
    n.setAttribute('src', a),
    n.setAttribute('class', 'cbIcon'),
    $(e).append(n)
  }), positionIcons())
}
function lightItUp() {
  'use strict';
  $('a[name=\'lightItUp\']').colorbox({
    photo: !0
  })
}
function lightboxLink() {
  'use strict';
  $('a.lblink').colorbox({
    photo: !0
  })
}
function grabVSRM() {
}
function adjustMavenSearchBox() {
  'use strict';
  var t,
  e,
  i,
  n;
  location.pathname.match(/TechnicalSearch/) && (i = $('div#title_name').next(), n = $('div#nrw_rslt').next(), $('div#title_name').next().find('table, table').css('margin-left', '0px'), $(i).css('margin-left', '10px'), $(i).css('margin-right', '10px'), $(n).css('margin-left', '0px'), $('div#division table td').attr('width', '100%'), $('div#division table td').css('padding-left', '0px'), $('div#division table td').css('padding-right', '0px'), $('div#nrw_rslt table').attr('width', '100%'), $('div#nrw_rslt table').css('margin-left', '0px'), $('div#division').css('width', '100%')),
  location.pathname.match(/ITTechSearch/) && (e = $('div#title_name').next('table').find('table tr').next('tr'), t = $(e).find('td table'), $(t).css('margin-left', '0px'), $('div#nrw_rslt table').attr('width', '100%'), $('div#nrw_rslt div').css('width', '100%'), $('div#nrw_rslt table').css('margin-left', '0px'), $('div#nrw_rslt div').each(function () {
    $(this).find('table tr td').css('padding-right', '0px'),
    $(this).find('table tr td').css('padding-left', '0px')
  }))
}
function findSupport_StaticLSNChange() {
  'use strict';
  var t = window.location.pathname;
  if (t.match(/\/wps\/myportal\/3M\/en_US\/ITCenter\/ITCenter\/Support\/FindSupport\//)) {
    $('li#FindSupport').removeClass('collapse'),
    $('li#FindSupport').addClass('selected');
    var e = $('li#FindSupport').children('a'),
    i = $(e).first().children('img'),
    n = $('li#FindSupport').children('ul');
    $(i).attr('src', '/wps/themes/html/3M.com/images/lsnon.gif'),
    $(n).first().show()
  }
}
function outages2() {
  'use strict'
}
function showIT() {
}
function ITTSCheck() {
  'use strict';
  location.pathname.match(/ContactITTS/i) && (loadScript.validate(), loadScript.lso_3m())
}
function oldSkool() {
  'use strict';
  document.getElementsByClassName = function (t) {
    var e,
    i,
    n = [
    ],
    a = new RegExp('\\showLetter' + t + '\\showLetter'),
    s = this.getElementsByTagName('*');
    for (e = 0; e < s.length; e++) i = s[e].className,
    a.test(i) && n.push(s[e]);
    return n
  };
  var t = document.getElementsByClassName('gutters'),
  e = document.getElementsByClassName('botNavs');
  for (i = 0; i < t.length; i++) t[i].style.display = 'block';
  for (i = 0; i < e.length; i++) e[i].style.display = 'none',
  e[i].innerText = '',
  e[i].innerHtml = ''
}
function loadingImg() {
  'use strict';
  $('div#contentwrap div#loadHere').empty().html('<img src=\'/3MContentRetrievalAPI/BlobServlet?assetId=1273680145693&assetType=MMM_Image&blobAttribute=ImageFile\' style=\'margin-left:18em;margin-top:3em\'/>')
}
function loadLetter(t) {
  'use strict';
  try {
    var e = t.toUpperCase(),
    i = '/wps/myportal/3M/en_US/Ajax/AtoZ/' + e + ' #grab' + e;
    '3M' === e ? $.when(loadingImg()).then($('div#contentwrap div#loadHere').load('/wps/myportal/3M/en_US/Ajax/AtoZ/Number/ #grabNumber', function (t, e, n) {
      'error' === e && (msg = 'Sorry but there was an error: ', $('div#contentwrap div#loadHere').html(msg + n.status + ' ' + n.statusText + ' ' + e + 'urlToUse: ' + i + ' did not load the correct letter page.  Click below to reload the main AtoZ list or add this to the end of the URL: \'?letter=a\' <p><a href=\'\' title=\'Reload\'>Retry</a></p>'))
    }))  : 'VIEWALL' === e ? $.when(loadingImg()).then($('div#contentwrap div#loadHere').load('/wps/myportal/3M/en_US/Ajax/AtoZ/viewAll/ #grabAll', function (t, e, n) {
      'error' === e && (msg = 'Sorry but there was an error: ', $('div#contentwrap div#loadHere').html(msg + n.status + ' ' + n.statusText + ' ' + e + 'urlToUse: ' + i + ' did not load the correct letter page.  Click below to reload the main AtoZ list or add this to the end of the URL: \'?letter=a\' <p><a href=\'\' title=\'Reload\'>Retry</a></p>'))
    }))  : $.when(loadingImg()).then($('div#contentwrap div#loadHere').load(i, function (t, e, n) {
      'error' === e && (msg = 'Sorry but there was an error: ', $('div#contentwrap div#loadHere').html(msg + n.status + ' ' + n.statusText + ' ' + e + 'urlToUse: ' + i + ' did not load the correct letter page.  Click below to reload the main AtoZ list or add this to the end of the URL: \'?letter=a\' <p><a href=\'\' title=\'Reload\'>Retry</a></p>'))
    }))
  } catch (n) {
    log(n),
    $c(n),
    $('div#contentwrap div#loadHere').html('urlToUse: ' + i + ' did not load the correct letter page.  Click below to reload the main AtoZ list or add this to the end of the URL: \'?letter=a\' <p><a href=\'\' title=\'Reload\'>Retry</a></p>')
  }
}
function AtoZCompareCB() {
  'use strict';
  if ($('#htm_cb')) {
    var t = $('#htm_cb'),
    e = $('#htm_cb h2').html();
    if (t.hide(), e.match(/page/i)) {
      var i = '';
      i = e.substring(0, e.indexOf('Chart')),
      $('#htm_cb h2').html(i)
    }
    $('a.lightItUp').colorbox({
      inline: !0,
      width: '85%',
      href: t
    })
  }
}
function isRdy() {
  'use strict';
  try {
    if (($('.twistie').length > 0 || $('.sprite-TwistieArrow').length > 0) && (loadScript.twistie2(), log(' loadScript.twistie2() within isRdy()')), $('a[name=\'lightItUp\']').length > 0 && (lightItUp(), log('lightItUp() within isRdy()'), createIcons()), $('.sprite-LiveChat').length > 0 && $('.sprite-LiveChat').on('click', function () {
      loadScript.deferOptions()
    }), window.location.pathname.match(/\/ITCenter-AtoZ\//)) {
      log('AZ match within isRdy()');
      var t,
      e = $('p.wide-tracking a');
      e.on('click', function (e) {
        log('$links on click within isRdy()'),
        e.preventDefault(),
        t = $(this),
        loadLetter('3M' !== t.text() ? t.text()  : '3M')
      }),
      ($('a.lightItUp').length > 0 || $('#htm_cb').length > 0) && ($.colorbox.remove(), AtoZCompareCB())
    }
  } catch (i) {
    log(i),
    $c(i)
  }
}
function hrDisplayCarousel() {
  'use strict';
  $('#thumbFeaturesHR').children().length > 1 && $('#thumbFeaturesHR').jshowoff({
    cssClass: 'thumbFeaturesHR',
    effect: 'slideLeft',
    autoPlay: !0,
    speed: 8000,
    hoverPause: !1
  })
}
var msg = '',
consoleSupport = !1,
WindowObjectReference = null,
liveChatURL = 'https://cbi.boldchat.com/aid/1615092119171191995/bc.cbi?cbdid=1172920353959976221&wdid=871851892837005995&rdid=3517553332861273848',
boldChatResult,
i,
smaller_path = '';
!function () {
  'use strict';
  for (var t, e = function () {
  }, i = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'warn'
  ], n = i.length, a = window.console = window.console || {
  }; n--; ) t = i[n],
  a[t] || (a[t] = e);
  Function.prototype.bind ? window.log = Function.prototype.bind.call(a.log, a)  : window.log = function () {
    Function.prototype.apply.call(a.log, a, arguments)
  }
}();
var orgcharts = {
  rdy: function (t) {
    log('orgchart title change function'),
    document.title = t
  }
},
loadScript = {
  onReady: function () {
    'use strict';
    try {
      log(' onReady before isRdy()'),
      isRdy(),
      log(' onReady call lsnfix'),
      loadScript.LSNFIX(),
      log(' onReady call  breadcrumbAtoZFix'),
      breadCrumbAtoZFix(),
      log(' onReady callin  breadcrumbChange_linkBinding'),
      breadcrumbChange_linkBinding(),
      log(' onReady calling  urlCheck()'),
      urlCheck(),
      $('#hideme').length > 0 && $('#hideme').parent().parent().parent().add($('#hideme').parent().parent().parent().next()).add($('#hideme').parent().parent().parent().next().next()).hide(),
      $('.tableFormat a') && $('.tableFormat a').on('click', function () {
        dcsMultiTrack('WT.cg_n', 'Office 365 Training Components', 'WT.cg_s', $(this).text() + ': ' + this, 'DCS.dcsuri', window.location.pathname + 'Office365TrainingComponents: ' + this, 'WT.dl', '20')
      })
    } catch (t) {
      log(t),
      $c(t, 'onReady')
    }
  },
  tracking: function () {
    'use strict';
    $('#ITCMID #Hardware a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-hardware', 'WT.cg_s', $(this).text() + ': hardware ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-hardware: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-hardware\nWT.cg_s\n' + $(this).text() + ': mid-hardware' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-hardware: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-hardware', 'WT.cg_s', $(this).text() + ': hardware ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-hardware: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-hardware\nWT.cg_s\n' + $(this).text() + ': mid-hardware' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-hardware: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #Find_Support a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown')) log('do not track these links');
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-findsupport', 'WT.cg_s', $(this).text() + ': findsupport ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-findsupport: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-findsupport\nWT.cg_s\n' + $(this).text() + ': mid-findsupport' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-findsupport: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-findsupport', 'WT.cg_s', $(this).text() + ': findsupport ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-findsupport: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-findsupport\nWT.cg_s\n' + $(this).text() + ': mid-findsupport' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-findsupport: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #Software_Application_Information a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-software', 'WT.cg_s', $(this).text() + ': software ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-software: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-software\nWT.cg_s\n' + $(this).text() + ': mid-software' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-software: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-software', 'WT.cg_s', $(this).text() + ': software ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-software: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-software\nWT.cg_s\n' + $(this).text() + ': mid-software' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-software: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #Network a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-data', 'WT.cg_s', $(this).text() + ': data ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-data: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-data\nWT.cg_s\n' + $(this).text() + ': mid-data' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-data: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-data', 'WT.cg_s', $(this).text() + ': data ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-data: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-data\nWT.cg_s\n' + $(this).text() + ': mid-data' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-data: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #ITPeopleAndNews a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-ITPeopleAndNews', 'WT.cg_s', $(this).text() + ': ITPeopleAndNews ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-ITPeopleAndNews: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-ITPeopleAndNews\nWT.cg_s\n' + $(this).text() + ': mid-ITPeopleAndNews' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-ITPeopleAndNews: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-ITPeopleAndNews', 'WT.cg_s', $(this).text() + ': ITPeopleAndNews ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-ITPeopleAndNews: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-ITPeopleAndNews\nWT.cg_s\n' + $(this).text() + ': mid-ITPeopleAndNews' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-ITPeopleAndNews: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCLSN a').on('click', function () {
      if ($(this).hasClass('LSN_Label') || $(this).hasClass('actuator'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'LSN', 'WT.cg_s', $(this).text() + ': LSN ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'LSN: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_s = ' + $(this).text() + ': LSN ' + $(this).attr('href') + ', DCS.dcsuri = ' + smaller_path + 'LSN: ' + $(this).text()))  : (log('WT.cg_s = ' + $(this).text() + ': LSN ' + $(this).attr('href') + ', DCS.dcsuri = ' + smaller_path + 'LSN: ' + $(this).text()), dcsMultiTrack('WT.cg_n', 'LSN', 'WT.cg_s', $(this).text() + ': LSN ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'LSN: ' + $(this).text(), 'WT.dl', '23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #outagesTable a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-outages', 'WT.cg_s', $(this).text() + ': outages ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-outages: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-outages\nWT.cg_s\n' + $(this).text() + ': mid-outages' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-outages: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-outages', 'WT.cg_s', $(this).text() + ': outages ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-outages: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-outages\nWT.cg_s\n' + $(this).text() + ': mid-outages' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-outages: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #comm a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-Collaboration', 'WT.cg_s', $(this).text() + ': Collaboration ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-Collaboration: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-Collaboration\nWT.cg_s\n' + $(this).text() + ': mid-Collaboration' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-Collaboration: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-Collaboration', 'WT.cg_s', $(this).text() + ': Collaboration ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-Collaboration: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-Collaboration\nWT.cg_s\n' + $(this).text() + ': mid-Collaboration' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-Collaboration: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #comm').next().find('a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-New-Hire', 'WT.cg_s', $(this).text() + ': New-Hire ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-New-Hire: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-New-Hire\nWT.cg_s\n' + $(this).text() + ': mid-New-Hire' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-New-Hire: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-New-Hire', 'WT.cg_s', $(this).text() + ': New-Hire ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-New-Hire: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-New-Hire\nWT.cg_s\n' + $(this).text() + ': mid-New-Hire' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-New-Hire: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #comm').next().next().find('a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-AppWebDev', 'WT.cg_s', $(this).text() + ': AppWebDev ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-AppWebDev: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-AppWebDev\nWT.cg_s\n' + $(this).text() + ': mid-AppWebDev' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-AppWebDev: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-AppWebDev', 'WT.cg_s', $(this).text() + ': AppWebDev ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-AppWebDev: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-AppWebDev\nWT.cg_s\n' + $(this).text() + ': mid-AppWebDev' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-AppWebDev: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #comm').next().next().next().find('a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-Additional', 'WT.cg_s', $(this).text() + ': Additional ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-Additional: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-Additional\nWT.cg_s\n' + $(this).text() + ': mid-Additional' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-Additional: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-Additional', 'WT.cg_s', $(this).text() + ': Additional ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-Additional: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-Additional\nWT.cg_s\n' + $(this).text() + ': mid-Additional' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-Additional: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    }),
    $('#ITCMID #comm').next().next().next().next().find('a').on('click', function () {
      if ($(this).hasClass('sprite-TwistieArrow') || $(this).hasClass('sprite-TwistieArrowDown'));
       else try {
        smaller_path = window.location.pathname.substr(32),
        window.location.pathname.match(/itcenter/i) ? (dcsMultiTrack('WT.cg_n', 'mid-Organization', 'WT.cg_s', $(this).text() + ': Organization ' + $(this).attr('href'), 'DCS.dcsuri', smaller_path + 'mid-Organization: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-Organization\nWT.cg_s\n' + $(this).text() + ': mid-Organization' + $(this).attr('href') + '\nDCS.dcsuri\n' + smaller_path + 'mid-Organization: ' + $(this).text() + '\nWT.dl\n23'))  : (dcsMultiTrack('WT.cg_n', 'mid-Organization', 'WT.cg_s', $(this).text() + ': Organization ' + $(this).attr('href'), 'DCS.dcsuri', window.location.pathname + 'mid-Organization: ' + $(this).text(), 'WT.dl', '23'), log('WT.cg_n\nmid-Organization\nWT.cg_s\n' + $(this).text() + ': mid-Organization' + $(this).attr('href') + '\nDCS.dcsuri\n' + window.location.pathname + 'mid-Organization: ' + $(this).text() + '\nWT.dl\n23'))
      } catch (t) {
        $c(t),
        log(t)
      }
    })
  },
  liveView: function () {
    'use strict';
    try {
      var t = $('.adminlinks'),
      e = window.location.pathname,
      i = 'http://3msource.mmm.com' + e;
      'previewint.mmm.com' === window.location.host && $(t).append(' | <a href=\'' + i + '\' title=\'See Live\' target=\'_blank\'>Live Version</a> | <a href=\'javascript:toggleHidden()\' title=\'Expand Twistys\'>Expand Twistys</a>')
    } catch (n) {
      log(n, '55')
    }
  },
  deferOptions: function () {
    'use strict';
    function t() {
      dcsMultiTrack('DCS.dcssip', 'http://3mhelp.mmm.com/', 'DCS.dcsuri', '/aid/1615092119171191995/3mhelp.mmm.com', 'WT.ti', 'bc.chat', 'WT.cg_n', 'Offsite', 'WT.cg_s', 'ITHelpDeskChat'),
      window.open('http://3mhelp.mmm.com/')
    }
    function e() {
      log('failure!')
    }
    try {
      var i,
      n,
      a,
      s,
      o,
      r,
      l,
      c,
      d,
      h,
      m = {
      },
      p = themeJSON + '?a=Attribute&name=3M_GLOBAL_CORP_DIV_CODE&name=3M_GLOBAL_PRSN_PREF_FRST_NM&name=3M_GLOBAL_PRSN_LAST_NAME&name=3M_GLOBAL_COMPANY_COLLECTION_NAME&name=telephoneNumber&name=3M_GLOBAL_EMAL_ADDR&name=3M_GLOBAL_MAILING ADDRESS&name=3M_GLOBAL_ADDRESS 2&name=3M_GLOBAL_STATE&name=3M_GLOBAL_ZIP CODE&name=cn';
      i = '/CountryIP/?TYPE=JSON',
      n = {
        areaCode: '',
        cityName: '',
        countryCode: 'XX',
        location: {
          latitude: 0,
          longitude: 0
        },
        metroCode: '',
        postalCode: '',
        regionCode: '',
        ipAddress: '128.0.0.1'
      },
      $.when($.getJSON(i, function (t) {
        a = t,
        a || (a = n),
        s = a.ipAddress
      }), $.getJSON(p, function (t, e, i) {
        m = t,
        r = m.values.cn,
        l = m.values['3M_GLOBAL_PRSN_PREF_FRST_NM'],
        c = m.values.telephoneNumber,
        d = m.values['3M_GLOBAL_EMAL_ADDR'],
        h = m.values['3M_GLOBAL_LOC_DESC'],
        o = document.referrer;
      })).then(t, e)
    } catch (u) {
      log(u + ' deferOptions')
    }
  },
  LSNFIX: function () {
    'use strict';
    try {
      $('#mmmlsnwrap ul li.collapse a:nth-child(2)').on('click', lsnTwisty())
    } catch (t) {
      log(t)
    }
  },
  twistie: function () {
    'use strict';
    try {
      $('.twistie').addClass('sprite-TwistieArrow').removeClass('twistie'),
      $('.sprite-TwistieArrow').on('click', function () {
        'none' === $(this).next().css('display') ? $(this).next().slideDown(3000, function () {
          $(this).prev().addClass('sprite-TwistieArrowDown').removeClass('sprite-TwistieArrow'),
          $(this).css('border', '2px red inset').css('background', 'yellow')
        })  : $(this).next().slideUp(3000, function () {
          $(this).prev().addClass('sprite-TwistieArrow').removeClass('sprite-TwistieArrowDown'),
          $(this).css('border', '0px red inset').css('background', 'white'),
          $(this).parent().children('ul').slideUp('slow')
        })
      })
    } catch (t) {
      log(t)
    }
  },
  twistie2: function () {
    'use strict';
    try {
      $('.twistie').length > 0 && $('.twistie').addClass('sprite-TwistieArrow').removeClass('twistie'),
      $('.sprite-TwistieArrow').on('click', function () {
        'none' === $(this).next().css('display') ? $(this).next().slideDown('slow').prev().addClass('sprite-TwistieArrowDown').removeClass('sprite-TwistieArrow')  : $(this).next().slideUp('slow').prev().addClass('sprite-TwistieArrow').removeClass('sprite-TwistieArrowDown')
      })
    } catch (t) {
      log(t),
      $c(t)
    }
  },
  validate: function () {
    'use strict';
    $('#ITTS').validate({
      rules: {
        email: '03_e-mail',
        Confirmemail: {
          equalTo: '#03_e-mail'
        },
        phone: {
          number: !0,
          minlength: 7,
          maxlength: 11
        },
        Contact_Phone: {
          number: !0,
          minlength: 7,
          maxlength: 11
        }
      }
    })
  },
  lso_3m: function () {
    'use strict';
    $('select#01_mail_subject').change(function (t) {
      'Import Course Content into LSO' === $('select#01_mail_subject option:selected').val() ? ($('#LSO').show(), $('#learn3m').hide())  : 'Import Course Content into Learn3M' === $('select#01_mail_subject option:selected').val() ? ($('#LSO').hide(), $('#learn3m').show())  : $('#learn3m').add($('#LSO')).hide()
    })
  },
  SAR: function () {
    'use strict';
    var t = {
    },
    e = themeJSON + '?a=Attribute&name=c&name=3M_GLOBAL_PRSN_LAST_NAME&name=3M_GLOBAL_COMPANY_COLLECTION_NAME&name=telephoneNumber&name=3M_GLOBAL_EMAL_ADDR&name=3M_GLOBAL_MAILING ADDRESS&name=3M_GLOBAL_ADDRESS 2&name=3M_GLOBAL_STATE&name=3M_GLOBAL_ZIP CODE';
    $.getJSON(e, function (e, i, n) {
      t = e,
      t.values.c.match(/PL/i) && $('#poland').show(),
      log('Country found is: ' + t.values.c)
    })
  },
  orgcharts: function () {
    'use strict';
    var t = $('.faq h1').text().replace('IES', 'IEUS');
    $('.faq h1').text(t)
  },
  pgi: function () {
    'use strict';
    var t,
    e = ($('#pgiform'), $('#pgiform-submit')),
    i = ($('#pgiform-txt'), ''),
    n = '';
    try {
      e.on('click', function () {
        i = $('#pgiform-txt').val(),
        i.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/) && log('Valid Email'),
        n = 'http://www.3m.com/L7/ebus/pgi?email=' + i,
        t = $.ajax({
          url: n,
          method: 'GET',
          dataType: 'jsonp'
        }),
        t.done(function (t) {
          alert('Request Done, E-mail will be sent shortly to ' + i + '!'),
          log(t)
        }),
        t.fail(function (t, e) {
          alert('Invalid Email Address Format, Please Try Again')
        })
      })
    } catch (a) {
      log(a),
      $c(a)
    }
  }
};
String.prototype.ReplaceAll = function (t, e) {
  'use strict';
  for (var i = this, n = i.indexOf(t); - 1 !== n; ) i = i.replace(t, e),
  n = i.indexOf(t);
  return i
};
var urlHash = getUrlVars();
urlHash.formname,
$(document).on('cbox_open', function () {
  'use strict';
  $('#htm_cb').show(),
  $('#cboxTitle').hide()
}),
$(document).on('cbox_closed', function () {
  'use strict';
  $('#htm_cb').hide()
}),
$(document).ready(function () {
  'use strict';
  try {
    log('this is doc ready'),
    loadScript.onReady(),
    log('loadScript.onReady() within bottom doc ready'),
    $('#thumbFeaturesHR').length > 0 && (log('hrDisplayCarousel() within bottom doc ready'), hrDisplayCarousel()),
    window.location.pathname.match(/\/Submit-a-Request\//) && (log('loadScript.SAR(); within bottom doc ready'), loadScript.SAR()),
    window.location.pathname.match(/\/IEUS\//) && (loadScript.orgcharts(), log('loadScript.orgcharts(); within bottom doc ready')),
    (window.location.pathname.match(/\/PGiGlobalMeet\//) || window.location.pathname.match(/\/WebEx\//)) && (loadScript.pgi(), log('loadScript.pgi(); within bottom doc ready')),
    $('#ITCMID').length > 0 && (loadScript.tracking(), log('loadScript.tracking(); within bottom doc ready')),
    loadScript.liveView(),
    log('loadScript.liveview(); within bottom doc ready')
  } catch (t) {
    log(t),
    $c(t)
  }
});
