webpackJsonp(["app/js/auth/register/index"],{0:function(e,t){e.exports=jQuery},"6386db75dd507093b6de":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=a("9ffde76f31e1d8ca79f0"),s=n(i),r=a("bbc0ef257199acca9fed"),o=n(r);new s.default,$("#drag-btn").length&&new o.default($("#drag-btn"),$(".js-jigsaw"))},"9ffde76f31e1d8ca79f0":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a("0282bb17fb83bfbfed9b"),r=function(e){return e&&e.__esModule?e:{default:e}}(s),o=function(){function e(){n(this,e),this.initDate(),this.initValidator(),this.inEventMobile(),this.initCaptchaCode(),this.initDragCaptchaCodeRule(),this.initRegisterTypeRule(),this.initInviteCodeRule(),this.initUserTermsRule(),this.initMobileMsgVeriCodeSendBtn()}return i(e,[{key:"initValidator",value:function(){$("#register-form").validate({rules:{nickname:{required:!0,byte_minlength:4,byte_maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}},password:{minlength:5,maxlength:20}}}),$.validator.addMethod("email_or_mobile_check",function(e,t,a){var n=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,i=/^1\d{10}$/,s=!1,r=n.test(e),o=i.test(e);return o?($(".email_mobile_msg").removeClass("hidden"),$(".js-captcha, .js-drag-jigsaw").addClass("hidden")):($(".email_mobile_msg").addClass("hidden"),$(".js-captcha, .js-drag-jigsaw").removeClass("hidden")),(r||o)&&(s=!0),$.validator.messages.email_or_mobile_check=Translator.trans("请输入正确的手机／邮箱"),this.optional(t)||s},Translator.trans("validate.email_or_mobile_check.message"))}},{key:"inEventMobile",value:function(){var e=this;$("#register_emailOrMobile").blur(function(){var t=$("#register_emailOrMobile").val();e.emSmsCodeValidate(t)}),$("#register_mobile").blur(function(){var t=$("#register_mobile").val();e.emSmsCodeValidate(t)})}},{key:"initDate",value:function(){$(".date").datetimepicker({autoclose:!0,format:"yyyy-mm-dd",minView:"month",language:window.document.documentElement.lang})}},{key:"initCaptchaCode",value:function(){var e=$("#getcode_num");e.length>0&&(e.click(function(){$(this).attr("src",e.data("url")+"?"+Math.random())}),this.initCaptchaCodeRule())}},{key:"initRegisterTypeRule",value:function(){var e=$('input[name="email"]');e.length>0&&e.rules("add",{required:!0,email:!0,es_remote:{type:"get"},messages:{required:Translator.trans("validate.valid_email_input.message")}});var t=$('input[name="emailOrMobile"]');t.length>0&&t.rules("add",{required:!0,email_or_mobile_check:!0,es_remote:{type:"get",callback:function(e){e?$(".js-sms-send-btn").removeClass("disabled"):$(".js-sms-send-btn").addClass("disabled")}},messages:{required:Translator.trans("validate.phone_and_email_input.message")}});var a=$('input[name="verifiedMobile"]');a.length>0&&($(".email_mobile_msg").removeClass("hidden"),a.rules("add",{required:!0,phone:!0,es_remote:{type:"get",callback:function(e){e?$(".js-sms-send-btn").removeClass("disabled"):$(".js-sms-send-btn").addClass("disabled")}},messages:{required:Translator.trans("validate.phone.message")}}))}},{key:"initInviteCodeRule",value:function(){var e=$(".invitecode");e.length>0&&e.rules("add",{required:!1,reg_inviteCode:!0,es_remote:{type:"get"}})}},{key:"initUserTermsRule",value:function(){$("#user_terms").length&&$("#user_terms").rules("add",{required:!0,messages:{required:Translator.trans("validate.user_terms.message")}})}},{key:"initCaptchaCodeRule",value:function(){$('[name="captcha_code"]').rules("add",{required:!0,alphanumeric:!0,es_remote:{type:"get",callback:function(e){e||$("#getcode_num").attr("src",$("#getcode_num").data("url")+"?"+Math.random())}}})}},{key:"initDragCaptchaCodeRule",value:function(){$(".js-drag-img").length&&$('[name="drag_captcha_token"]').rules("add",{required:!0,messages:{required:Translator.trans("auth.register.drag_captcha_tips")}})}},{key:"initSmsCodeRule",value:function(){$('[name="sms_code"]').rules("add",{required:!0,unsigned_integer:!0,rangelength:[6,6],es_remote:{type:"get"},messages:{rangelength:Translator.trans("validate.sms_code.message")}})}},{key:"initMobileMsgVeriCodeSendBtn",value:function(){$(".js-sms-send-btn").click(function(){var e="emailOrMobile";$("[name='verifiedMobile']").length>0&&(e="verifiedMobile"),new r.default({element:".js-sms-send",url:$(".js-sms-send").data("smsUrl"),smsType:"sms_registration",dataTo:e,captcha:!1,preSmsSend:function(){return!0},additionalAction:function(e){return"captchaRequired"==e&&($(".js-sms-send").click(),!0)}})})}},{key:"emSmsCodeValidate",value:function(e){/^1\d{10}$/.test(e)?(this.initSmsCodeRule(),$('[name="captcha_code"], [name="drag_captcha_token"]').rules("remove")):(this.initCaptchaCodeRule(),this.initDragCaptchaCodeRule(),$('[name="sms_code"]').rules("remove"))}}]),e}();t.default=o},bbc0ef257199acca9fed:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("5eb223de522186da1dd9"),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=a("9181c6995ae8c5c94b7a"),u=function(){function e(t,a){i(this,e),this.$element=t,this.$target=a,this.params={top:0,left:0,currentX:0,currentY:0,flag:!1,currentLeft:0,currentTop:0},this.dragCaptchaToken=null,this.init()}return s(e,[{key:"init",value:function(){this.initDragCaptcha(),this.getLocation(this.$element[0]),this.initEvent()}},{key:"initDragCaptcha",value:function(){var e=this;o.default.dragCaptcha.get({before:function(){$(".js-jigsaw-placeholder,.js-drag-img-mask").removeClass("hidden"),$(".js-jigsaw-bg").remove(),$(".js-jigsaw").attr("src","")}}).then(function(t){e.loadingImg(t.url,t.jigsaw),e.dragCaptchaToken=t.token})}},{key:"loadingImg",value:function(e,t){var a=new Image;a.src=e,a.className="js-jigsaw-bg drag-img__bg",a.onload=function(){$(a).prependTo(".js-drag-img"),$(".js-drag-img-mask,.js-jigsaw-placeholder").addClass("hidden"),$(".js-jigsaw").attr("src",t)}}},{key:"initEvent",value:function(){var e=this;this.$element.on("mousedown touchstart",function(t){e.startDrag(t)}),$(document).on("mouseup touchend",function(t){e.stopDrag(t)}),$(document).on("mousemove touchmove",function(t){e.dragMove(t)})}},{key:"startDrag",value:function(e){e.preventDefault();var t=this.params;t.flag=!0;var a=e.clientX?e.clientX.toFixed(2):e.originalEvent.targetTouches[0].pageX.toFixed(2);t.currentX=a}},{key:"stopDrag",value:function(e){var t=this,a=this.$element,n=this.$target,i=this.params;if(i.flag&&(this.setCss(a[0],"cursor","pointer"),i.flag=!1,this.getLocation(a[0]),i.currentLeft)){var s=$(".js-jigsaw-bg"),r=this.calPositionX(s),l=this._getToken(this.dragCaptchaToken,r),u={token:l};o.default.dragCaptcha.validate({params:u}).then(function(e){t.validateSuccess(a[0],l)}).catch(function(){t.resetLocation(a[0],n[0]),t.initDragCaptcha()})}}},{key:"dragMove",value:function(e){var t=this.$element,a=this.$target,n=this.params;if(n.flag){e.preventDefault();var i=e.clientX?e.clientX.toFixed(2):e.originalEvent.targetTouches[0].pageX.toFixed(2),s=i-n.currentX,r=t.parent().width()-t.width(),o=parseInt(n.left)+s;o<=0&&(o=0),o>=r&&(o=r),n.currentLeft=o;var l=o+"px";this.setCss(t[0],"left",l),this.setCss(a[0],"left",l),this.setCss(t[0],"cursor","move"),$(".js-drag-bar-tip").addClass("hidden");var u=o+20+"px";$(".js-drag-bar-mask").css("width",u)}}},{key:"calPositionX",value:function(e){var t=(e[0].naturalWidth/e.width()).toFixed(2);return(this.params.currentLeft.toFixed(2)*t).toFixed(2)}},{key:"validateSuccess",value:function(e,t){cd.message({type:"success",message:Translator.trans("validate.success")});var a=$('[name="drag_captcha_token"]');a.val(t);var n=a.closest(".form-group");n.removeClass("has-error"),n.find(".jq-validate-error").remove(),$(document).unbind("mousemove touchmove"),$(document).unbind("mouseup touchend"),this.setCss(e,"cursor","not-allowed")}},{key:"getLocation",value:function(e){"auto"!==this.getCss(e,"left")&&(this.params.left=this.getCss(e,"left"))}},{key:"resetLocation",value:function(e,t){this.setCss(e,"left","0px"),this.setCss(t,"left","0px"),this.getLocation(e),$(".js-drag-bar-mask").css("width","0px"),$(".js-drag-bar-tip").toggleClass("hidden")}},{key:"getCss",value:function(e,t){return e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,!1)[t]}},{key:"setCss",value:function(e,t,a){e.style[t]=a}},{key:"_getToken",value:function(e,t){var a={token:e,captcha:t};return e=JSON.stringify(a),[].concat(n((0,l.strToBase64)(e))).reverse().join("")}}]),e}();t.default=u}},["6386db75dd507093b6de"]);