//preload vars
var imageIdList;
var checkLoadInterval;

// define vars
var t = TweenMax;
var textWidth = 300;
var phase = 0;
var ctaIsVisible = false;
var maxLoops = 1;
var currentLoop = 1;
var panTime = 0.5;
var textZoomTime = 0.5;
var textCasc = 0.15;
var textScale = 6.0;
var flashTime = 0.19;
var isTonight = false;
var isExpanded = false;
var isMobile = false;

var yearOfFight = 2017;
var monthOfFight = 5;
var dayOfFight = 20;

var main = document.getElementById('main');
var collapsed = document.getElementById('collapsed');
var expanded =  document.getElementById('expanded');

var bg = document.getElementById('bg');
var fighter1a = document.getElementById('fighter_1a');
var fighter1b = document.getElementById('fighter_1b');
var fighter1Name = document.getElementById('fighter_1_name');
var fighter2Name = document.getElementById('fighter_2_name');
var mask = document.getElementById('mask'); 
var dust = document.getElementById('dust');
var matchTitle = document.getElementById('match_title');
var vs = document.getElementById('vs');
var venue = document.getElementById('venue');
var logo = document.getElementById('logo');
var date = document.getElementById('date');
var dateTonight = document.getElementById('date_tonight');
var time = document.getElementById('time');
var timeTonight = document.getElementById('time_tonight');
var cta = document.getElementById('cta');
var flash = document.getElementById('flash');

var expNonVideoContainer = document.getElementById('exp_non_video_container');
var expBg = document.getElementById('exp_bg');

var video1 = document.getElementById('video_1');
var video2 = document.getElementById('video_2');
var videoExp = document.getElementById('video_exp');
var video1Source = document.getElementById('video_1_src');
var video2Source = document.getElementById('video_2_src');
var videoExpSource = document.getElementById('video_exp_src');

var border = document.getElementById('border');
var expandBtn = document.getElementById('expand_btn');
var closeBtn = document.getElementById('close_btn');
var clickArea = document.getElementById('click_area');
var previewTag = document.getElementById('preview_tag');

// utility functions to check for mobile devices and tablets
window.mobileCheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
window.mobileAndTabletCheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

function init() {

	// collapsed images

	var bgImg = new Image();
	bgImg.src = Enabler.getUrl('bg.jpg');
	bg.appendChild(bgImg);
	bgImg.id = 'i1';

	var fighter1aImg = new Image();
	fighter1aImg.src = Enabler.getUrl('fighter_1a.png');
	fighter1a.appendChild(fighter1aImg);
	fighter1aImg.id = 'i2';

	var fighter1bImg = new Image();
	fighter1bImg.src = Enabler.getUrl('fighter_1b.png');
	fighter1b.appendChild(fighter1bImg);
	fighter1bImg.id = 'i3';

	var maskImg = new Image();
	maskImg.src = Enabler.getUrl('mask.png');
	mask.appendChild(maskImg);
	maskImg.id = 'i4';

	var dustImg = new Image();
	dustImg.src = Enabler.getUrl('dust.png');
	dust.appendChild(dustImg);
	dustImg.id = 'i5';

	var fighter1NameImg = new Image();
	fighter1NameImg.src = Enabler.getUrl('fighter_1_name.png');
	fighter1Name.appendChild(fighter1NameImg);
	fighter1NameImg.id = 'i6';

	var fighter2NameImg = new Image();
	fighter2NameImg.src = Enabler.getUrl('fighter_2_name.png');
	fighter2Name.appendChild(fighter2NameImg);
	fighter2NameImg.id = 'i7';

	var matchTitleImg = new Image();
	matchTitleImg.src = Enabler.getUrl('match_title.png');
	matchTitle.appendChild(matchTitleImg);
	matchTitleImg.id = 'i8';

	var logoImg = new Image();
	logoImg.src = Enabler.getUrl('logo.png');
	logo.appendChild(logoImg);
	logoImg.id = 'i9';

	var vsImg = new Image();
	vsImg.src = Enabler.getUrl('vs.png');
	vs.appendChild(vsImg);
	vsImg.id = 'i10';

	var venueImg = new Image();
	venueImg.src = Enabler.getUrl('venue.png');
	venue.appendChild(venueImg);
	venueImg.id = 'i11';

	var dateImg = new Image();
	dateImg.src = Enabler.getUrl('date.png');
	date.appendChild(dateImg);
	dateImg.id = 'i12';

	var dateTonightImg = new Image();
	dateTonightImg.src = Enabler.getUrl('date_tonight.png');
	dateTonight.appendChild(dateTonightImg);
	dateTonightImg.id = 'i13';

	var timeImg = new Image();
	timeImg.src = Enabler.getUrl('time.png');
	time.appendChild(timeImg);
	timeImg.id = 'i14';

	var timeTonightImg = new Image();
	timeTonightImg.src = Enabler.getUrl('time_tonight.png');
	timeTonight.appendChild(timeTonightImg);
	timeTonightImg.id = 'i15';

	// expanded images

	var expBgImg = new Image();
	expBgImg.src = Enabler.getUrl('exp_bg.jpg');
	expBg.appendChild(expBgImg);
	expBgImg.id = 'i16';


	// other images

	var expandBtnImg = new Image();
	expandBtnImg.src = Enabler.getUrl('expand_btn.png');
	expandBtn.appendChild(expandBtnImg);
	expandBtnImg.id = 'i17';

	var closeBtnImg = new Image();
	closeBtnImg.src = Enabler.getUrl('close_btn.png');
	closeBtn.appendChild(closeBtnImg);
	closeBtnImg.id = 'i18';

	var flashImg = new Image();
	flashImg.src = Enabler.getUrl('flash.png');
	flash.appendChild(flashImg);
	flashImg.id = 'i19';

	var gradientImg = new Image();
	gradientImg.src = Enabler.getUrl('gradient.png');
	gradient.appendChild(gradientImg);
	gradientImg.id = 'i20';

	// set preload variable values
 	imageIdList = new Array ( 	
								'i1', 'i2', 'i3', 'i4', 'i5', 
								'i6', 'i7', 'i8', 'i9', 'i10', 
								'i11', 'i12', 'i13', 'i14', 'i15', 
								'i16', 'i17', 'i18', 'i19', 'i20'
								
							);

 	// assure all images are loaded before calling advance
	checkLoadInterval = setInterval( checkLoad, 50 );

	// check if today is target date
	var d1 = new Date();
	d1.setFullYear(yearOfFight, monthOfFight-1, dayOfFight);
	var now = new Date();
	if(now >= d1){
		isTonight = true;
	}

	// check if mobile device
	isMobile = mobileAndTabletCheck();

	// load videos
	video1Source.setAttribute('src',Enabler.getUrl('video_1.mp4'));
	video1.load();
	video2Source.setAttribute('src',Enabler.getUrl('video_2.mp4'));
	video2.load();
	if ( isTonight ){
		videoExpSource.setAttribute('src',Enabler.getUrl('video_exp_tonight.mp4'));
	}else{
		videoExpSource.setAttribute('src',Enabler.getUrl('video_exp.mp4'));
	}
	videoExp.load();

	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
		studio.video.Reporter.attach('video_1', video_1);
		studio.video.Reporter.attach('video_2', video_2);
		studio.video.Reporter.attach('video_exp', videoExp);
	})

	// add listeners
	
	expandBtn.addEventListener('click', expandBtnClickHandler, false);
	closeBtn.addEventListener('click', closeBtnClickHandler, false);
	clickArea.addEventListener('click', clickAreaClickHandler, false);
	clickArea.addEventListener('mouseover', clickAreaMouseOverHandler, false);

	// hide elements
	hideAll();
}

//preload function
function checkLoad () {
	var totalImages = imageIdList.length;
	var imageLoadCount = 0;
	for (i = 0; i < totalImages; i++) {
		var theImage = document.getElementById(imageIdList[i]);
		var rh;
		  if (typeof theImage.naturalWidth == 'undefined') {
		  // IE 6/7/8
			var i = new Image();
			i.src = theImage.src;
			rh = i.height;
		  } else {
			// HTML5 browsers
			rh = theImage.naturalHeight;
		  }
		  if (rh) {
			  imageLoadCount++;
		  }
	}
	// if all images are loaded...
	if ( imageLoadCount >= totalImages ) {
		clearInterval( checkLoadInterval );
		// init animation
		advance();
	}
}

function hideAll(){
	hide( main);
	hide( collapsed );
	hide( expanded );

	hide( bg );
	hide( fighter1a );
	hide( fighter1b );
	hide( fighter1Name );
	hide( fighter2Name );
	hide( dust );
	hide( mask );
	hide( matchTitle );
	hide( vs );
	hide( venue );
	hide( logo );
	hide( date );
	hide( dateTonight );
	hide( time );
	hide( timeTonight );
	hide( cta );
	hide( flash );
	hide( gradient );

	hide( expBg );

	hide( video1 );
	hide( video2 );
	hide( videoExp );
	hide( border );
	hide( closeBtn );
	hide( expandBtn );
	hide( clickArea );
}

function expandBtnClickHandler() {
	if(!isExpanded){
		expandStartHandler();
	}
}
function expandStartHandler() {
	t.killAll(false, true, true);
	stopVideos();

	hideAll();

	show(main);
	show(expanded);
	show(closeBtn);
	show(clickArea);
	show(border);

	t.set(border, {width:300-2, height:250-2});
	t.set(clickArea,{width: 300, height:250});

	// play expanded animation frame
	phase = 5;
	advance();

	playVideoExp();
	expandFinishHandler();
}

function expandFinishHandler() {
	isExpanded = true;
}

function closeBtnClickHandler(){
	collapseStartHandler();
}

function collapseStartHandler() {
	t.killAll(false, true, true);
	stopVideos();

	hideAll();

	show(main);
	show(collapsed);
	show(clickArea);
	show(border);

	t.set(border, {width:300-2, height:250-2});
	t.set(clickArea,{height:250});
	phase = 0;
	advance();
	collapseFinishHandler();
}

function collapseFinishHandler() {
	isExpanded = false;
}

function clickAreaClickHandler() {
	if(isExpanded){
		Enabler.exit('Background Clickthrough');
	} else {
		//comment to test expansion during development
		expandStartHandler();
		//uncomment to test expansion during development
		//Enabler.requestExpand();
	}
}
function clickAreaMouseOverHandler() {
	goCTAFlare();
}


function exitHandler(){
	if(isExpanded){
		collapseStartHandler();
	}
}

// video functions
function playVideo1(){
	video1.addEventListener('ended', onVideoComplete, false);
	video1.load();
	video1.play();
}

function playVideo2(){
	video2.addEventListener('ended', onVideoComplete, false);
	video2.load();
	video2.play();
}

function playVideoExp(){
	hide(videoExp);
	videoExp.addEventListener('progress', onVideoExpStart, false);
	videoExp.addEventListener('ended', onVideoComplete, false);
	videoExp.load();
	videoExp.play();
}

function onVideoExpStart(){
	show(videoExp);
}

function onVideoComplete(){
	switch(this.id){
		case 'video_1':
			delay(0.01);
		break;
		case 'video_2':
			delay(0.01);
		break;
		case 'video_exp':
		break;
	}
}

function stopVideos(){
	hide(video1);
	hide(video2);
	hide(videoExp);
	video1.pause();
	video1.removeEventListener('ended', onVideoComplete);
	video2.pause();
	video2.removeEventListener('ended', onVideoComplete);
	videoExp.pause();
	videoExp.removeEventListener('ended', onVideoComplete);
	videoExp.removeEventListener('progress', onVideoExpStart);
}

function advance () {
	    
	if ( phase == 0 ) {

		// sizing and positioning --------------------------------------------------------
	    show( main );
	    t.set(main, {width:300, height:250});

	    show( border );
		t.set(border, {width:300-2, height:250-2});

		show( collapsed );
	    t.set(collapsed, {width:300, height:250});

	    t.set(expanded, {width:300, height:250});

	    t.set( expNonVideoContainer, {width:300, height:250});

		hide( video2 );
		t.to(fighter2Name, 0.0, {alpha:0.0, ease:Expo.EaseOut});

		t.set(closeBtn, {x:300-28, width:28, height:27});

		t.set(video1, {width:300, height:250});
		t.set(video2, {width:300, height:250});
		t.set(videoExp, {width:300, height:250});

		show ( clickArea );
		t.set(clickArea, {y:0, width:300, height:250});
		// -----------------------------------------------------------------------------

	    show( bg );
		t.set(bg, {x:0, y:0, alpha:1.0, scale:1.5, rotationZ:'0.01deg', force3D:true, transformOrigin:'50% 50%'});
		t.to(bg, 0.3, {x:0, y:0, scale:1.0, ease:Expo.easeIn, rotationZ:'0.01deg', force3D:true, transformOrigin:'50% 50%'});

		if ( isMobile )
		{	
			// skip this phase
			delay(0.01);
		}

	    show( fighter1a );
		t.set(fighter1a, {x:-177, y:0, alpha:1.0, transformOrigin:'top left'});
		t.to(fighter1a, panTime, {x:0, alpha:1.0, ease:Expo.easeInOut});

	    show( fighter1b );
		t.set(fighter1b, {x:59-177, y:49, alpha:1.0, rotation:90, transformOrigin:'bottom left'});
		t.to(fighter1b, panTime, {x:59, alpha:1.0, rotation:0, ease:Expo.easeInOut, delay:0.1});

	    show( dust );
		t.set(dust, {x:53+((173*0.1)/2), y:17+((201*0.1)/2), alpha:0.0, scale:0.1, transformOrigin:'50% 50%'});
		t.to(dust, panTime, {alpha:1.0, scale:1.0, ease:Elastic.easeInOut, delay:0.3});

	    show( fighter1Name );
		t.set(fighter1Name, {y:188, alpha:0.0, scale:textScale/4, rotationX:180, transformOrigin:'50% 50%'});
		t.to(fighter1Name, textZoomTime*1.7, {x:0, y:188, alpha:1.0, scale:1.0, rotationX:0, transformOrigin:'50% 50%', ease:Expo.easeInOut, delay:0.0});

	    show( gradient );
		t.set(gradient, {x:-300, y:0, alpha:0.4, transformOrigin:'top left'});
		t.to(gradient, 1.0, {x:360, ease:Expo.easeOut, delay:0.4});

		t.delayedCall(0.52, screenBurst);

	    delay(1.3);
	}
	else if ( phase == 1 ) {

		if ( isMobile )
		{	
			// don't play video
			delay(0.01);
		} else {
			// play video, goes to next phase automatically at end of video
			show (video1);
			playVideo1();
			t.delayedCall(2.08, screenBurst);
			t.delayedCall(2.45, screenBurst);
			t.delayedCall(3.20, screenBurst);
			t.delayedCall(3.45, screenBurst);
			t.delayedCall(4.45, screenBurst);
			t.delayedCall(4.50, screenBurst);
			t.delayedCall(5.35, screenBurst);
			t.delayedCall(6.00, screenBurst);
			t.delayedCall(7.57, screenBurst);
			t.delayedCall(10.30, screenBurst);
			t.delayedCall(10.60, screenBurst);
			t.delayedCall(11.19, screenBurst);	
			t.delayedCall(11.65, screenBurst);		
		}
	}
	else if ( phase == 2 ) {

		if ( isMobile )
		{
			// don't play video, skip phase
			delay(0.01);
		} else {
			// play video, goes to next phase automatically at end of video
			show( video2 );
			playVideo2();

		    show( fighter2Name );
			t.set(fighter2Name, {y:188, alpha:0.0, scale:textScale/4, rotationX:180, transformOrigin:'50% 50%'});
			t.to(fighter2Name, textZoomTime*1.7, {x:0, y:188, alpha:1.0, scale:1.0, rotationX:0, transformOrigin:'50% 50%', ease:Expo.easeInOut, delay:0.0});

			hide( video1 );
			hide( fighter1a );
			hide( fighter1b );
			hide( dust );
			hide( fighter1Name );
		}
	}
	else if ( phase == 3 ) {

		hide( video2 );
		hide( fighter2Name );

	    show( mask );

	    show( matchTitle );
		t.set(matchTitle, {y:-100, alpha:1.0});
		t.to(matchTitle, textZoomTime, {y:0, ease:Expo.easeInOut});

	    show( fighter1a );
		t.set(fighter1a, {x:-177, y:0, alpha:1.0, transformOrigin:'top left'});
		t.to(fighter1a, panTime, {x:0, alpha:1.0, ease:Expo.easeInOut});

	    show( fighter1b );
		t.set(fighter1b, {x:59-177, y:49, alpha:1.0, rotation:90, transformOrigin:'bottom left'});
		t.to(fighter1b, panTime, {x:59, alpha:1.0, rotation:0, ease:Expo.easeInOut, delay:0.2});

	    show( dust );
		t.set(dust, {x:53+((173*0.1)/2), y:17+((201*0.1)/2), alpha:0.0, scale:0.1, transformOrigin:'50% 50%'});
		t.to(dust, panTime, {alpha:1.0, scale:1.0, ease:Elastic.easeInOut, delay:0.4});

	    show( gradient );
		t.set(gradient, {x:-300, y:0, alpha:0.4, transformOrigin:'top left'});
		t.to(gradient, 1.0, {x:360, ease:Expo.easeOut, delay:0.4});

	    show( fighter1Name );
		t.set(fighter1Name, {y:150, alpha:0.0, scale:textScale, transformOrigin:'50% 50%'});
		t.to(fighter1Name, textZoomTime, {x:0, y:150, alpha:1.0, scale:1.0, transformOrigin:'50% 50%', ease:Expo.easeInOut});

		if ( isTonight ){
		    show( dateTonight );
			t.set(dateTonight, {x:0, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
			t.to(dateTonight, panTime, {y:222, ease:Elastic.easeInOut});

		    show( timeTonight );
			t.set(timeTonight, {x:172, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
			t.to(timeTonight, panTime, {y:222, ease:Elastic.easeInOut});
		} else {
		    show( date );
			t.set(date, {x:0, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
			t.to(date, panTime, {y:222, ease:Elastic.easeInOut});

		    show( time );
			t.set(time, {x:172, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
			t.to(time, panTime, {y:222, ease:Elastic.easeInOut});
		}
	    show( vs );
		t.set(vs, {x:0, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
		t.to(vs, textZoomTime, {y:200, ease:Expo.easeInOut});

	    show( venue );
		t.set(venue, {x:70, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
		t.to(venue, textZoomTime, {y:200, ease:Expo.easeInOut});

	    show( logo );
		t.set(logo, {x:0, y:250, alpha:1, scale:1.0, transformOrigin:'top left'});
		t.to(logo, textZoomTime, {y:222, ease:Elastic.easeInOut});

		t.delayedCall(0.62, screenBurst);

		/* show(cta);
		t.set(cta, {x:169, y:270, width:128, height:19, alpha:1, scale:1.0, transformOrigin:'top left'});
		t.to(cta, textZoomTime, {y:228, ease:Expo.easeInOut, delay:textCasc*5.5, transformOrigin:'top left', overwrite:false})
		t.set(ctaFlare, {x:-250}); */
		
	    delay(1.0);
	}
	else if ( phase == 4 ) {

		ctaIsVisible = true;
		goCTAFlare();
	}

	// expanded phases are below

	else if ( phase == 5 ) {

	    show( expBg );
		t.set(expBg, {x:0, y:0, alpha:1.0, scale:1.5, rotationZ:'0.01deg', force3D:true, transformOrigin:'50% 50%'});
		t.to(expBg, 0.3, {x:0, y:0, scale:1.0, ease:Expo.easeInOut, rotationZ:'0.01deg', force3D:true, transformOrigin:'50% 50%'});

		/* show(cta);
		t.set(cta, {x:169, y:270, width:128, height:19, alpha:1, scale:1.0, transformOrigin:'top left'});
		t.to(cta, textZoomTime, {y:228, ease:Expo.easeInOut, delay:textCasc*5.5, transformOrigin:'top left', overwrite:false})
		t.set(ctaFlare, {x:-250}); */

	    delay(1.0);
	}
	else if ( phase == 6 ) {

		ctaIsVisible = true;
		goCTAFlare();
	}
}

function goCTAFlare () {

	//t.set(ctaFlare, {x:-105});
	//t.to(ctaFlare, 1.3, {x:105, ease:Expo.easeOut});

	//t.set(expCtaFlare, {x:-105});
	//.to(expCtaFlare, 1.3, {x:105, ease:Expo.easeOut});
}

function screenBurst() {

	show ( flash );
	t.set(flash, {x:0, y:0, scale:1.0, opacity:0.35, transformOrigin:'top left'});
	t.to(flash, flashTime, {opacity:0});
}


// utility functions
function hide(element) {
	element.style.display = 'none';
}

function show(element) {
	element.style.display = 'block';
}

function delay(time) {
    t.delayedCall(time, advance);
    phase++;
}

//Function to call when all the javascript above is available
init();

