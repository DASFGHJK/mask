"use strict";
var loginWebVerify;
var oldLogin;
$(function() {
	loginWebVerify = {
		username: '',
		passwd: '',
		target: null,
		ubauthCheck: false,
		/* Two-factor authentication，縮寫為ubauth */
		picCheck: false,
		/* 圖型驗證 */
		nc_token: '',
		/*  */
		csessionid: '',
		/*  */
		sig: '',
		/*  */
		appkey: '',
		/*  */
		langMap: {
			/*  */
			en: 'en',
			'zh-tw': 'tw',
			'zh-cn': 'cn',
			ja: 'ja_JP',
			ko: 'ko_KR',
			vi: 'vi_VN',
			th: 'th_TH'
		},
		appId: '',
		/*  */
		ticket: '',
		/*  */
		randStr: '',
		/*  */
		vId: '',
		/*  */
		v_token: '',
		/*  */
		scene: '',
		/*  */
		postToken: '',
		/*  */
		captchaId: '',
		/*  */
		validate: '',
		/*  */
		captchaIns: '',
		/*  */
		lang: 'zh-cn',
		/* 當前語系 */
		fingerprint: '',
		sr: '',
		device_id: '',
		/* 裝置ID */
		service_id: '',
		/* develop */
		/* qatest */
		/* master <- server id */
		session_id: '',
		token: '',
		formal_url_domain: '',
		/* websocket SDK app 連線位置 */
		imgCheckFristIn: false,
		smsCheckFirstIn: false,
		googleCheckFirstIn: false,
		needGetImg: true,
		ubauthBindIn: false,
		ubauthFirstIn: false,
		needChangePwdPara: 'N',
		/* API回傳是否需要修改密碼 */
		modifyPwdUrl: '/web/simple.php#/change-password',
		/* 修改密碼頁url */
		BBauthFunc: window.BBauthFunc,
		/* BBauthFunc websocket 連線function */
		inputTokenEnter: '',
		/* token input check use */
		imgCheckInputValue: '',
		bankIDInputValue: '',
		usernameStash: '',
		/* 暫存帳號 */
		passwordStash: '',
		/* 暫存密碼 */
		resultData: {},
		loginData: {},
		failTime: 0,
		smsGetting: false,
		smsTimer: null,
		websocketErrorCount: 0,
		ingress: 'pc',
		getKeyCode: function() {
			var _this = this;
			if (!_this.needGetImg) {
				return;
			}
			$.get('/infe/verify/mkcode?_=' + Math.random() + (new Date).getTime(),
			function(data) {
				var spl = data.split(";");
				_this.sr = spl[1];
				$("#vLoginPic").attr("src", "/infe/verify/macpic?SR=" + spl[1]).css("visibility", "visible");
				$("[name='rmNum']").val("");
			});
		},
		closeMethod: function() {
			var _this = this;
			if (_this.ubauthFirstIn) {
				_this.BBauthFunc.disconnect();
			}
			/* 開啟表單提交事件 */
			$(_this.target).find('input[type="submit"]').prop('disabled', false);
			$('#js-login-chk, #js-picture-check, #js-ubauth-chk, #js-sms-check, #js-google-check').hide();
			_this.maskLoadding(false);
			$('#input_token, #js-google-token').val('');
			/* 簡訊驗證重置狀態 */
			_this.smsInit();
		},
		smsInit: function() {
			var _this = this;
			$('#smsNum').val('');
			_this.inputTokenEnter = '';
			clearInterval(_this.smsTimer);
			$('#js-sms-getcode').show();
			$('#js-sms-countdown').hide().text("%s秒后重新发送");
			$('.error-msg').text('').hide();
			$('#js-sms-getcode').attr('disabled', false);
		},
		/* 頁面重整 */
		pageReload: function(res) {
			var _this = this;
			_this.maskLoadding(true);
			/* 關閉視窗 */
			_this.closeMethod();
			/* GA 流量分析 */
			dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'ga_click',
				'eventCategory': 'user_login',
				'eventAction': 'user_login',
				'eventLabel': 'user_login'
			});
			/* GA 流量分析 - 登入 */
			_this.loginDataLayer(res.data.ga_uid);
			/* 確認是否需要重新設定密碼 */
			_this.checkPasswordPeriod();
			if (_this.needChangePwdPara === 'Y') {
				top.window.location.href = _this.modifyPwdUrl;
				return false;
			}
			if (res.data.login_result === 1) {
				self.location.href = res.data.form_url;
				return false;
			}
			top.location.href = res.data.form_url;
			return false;
		},
		initMethod: function() {
			var _this = this;
			/* 取消 */
			$('.cancel-btn').on('click',
			function() {
				_this.closeMethod();
			});
			/* 當頁面離開執行 close 事件 */
			window.onbeforeunload = _this.closeMethod();
			if (!$.cookie) {
				$.getScript('/cl/js/pluging/jquery.cookie.js',
				function() {
					_this.setFingerprint();
				});
			} else {
				_this.setFingerprint();
			}
		},
		/* 登入api確認使用機制 & 一般登入 */
		getLoginVerify: function(username, passwd, target, type) {
			var _this = this;
			/* 設定暫存資料 */
			_this.username = username;
			_this.passwd = passwd;
			_this.target = target;
			var sendData = {
				'username': username,
				'password': passwd
			};
			/* 驗證視窗開啟 */
			$('#js-login-chk').show();
			_this.maskLoadding(true);
			/* F5 shape 防護機制 */
			var f5shape = {};
			try {
				f5shape = window.__xr_bmobdb();
			} catch(exception) {
				console.log('F5 shape error');
			}
			$.extend(sendData, f5shape);
			$.ajax({
				url: "/entrance/login.json?k=" + _this.fingerprint,
				type: 'post',
				data: sendData,
				success: function(res, status, xhr) {
					_this.resultData = res;
					_this.maskLoadding(false);
					/* 判斷登入入口： game_pop(遊戲大廳的登入彈跳視窗)、pc(各站登入口) */
					_this.ingress = $('.ele-pop-login-wrap').is(":visible") ? 'game_pop': 'pc';
					/* API 跳轉設定、訊息顯示 */
					var check = _this.loginFront(res, status, xhr);
					if (!check) {
						return;
					}
					if (!res.data) {
						return;
					}
					/*  */
					if (res.data.aliyunSwitch === 'Y' && (res.data.aliyunType === 1 || res.data.aliyunType === 4)) {
						_this.needGetImg = false;
					} else {
						_this.needGetImg = true;
					}
					/* 判斷為圖形驗證 or 雙重驗證 */
					var loginResult = [27, 34, 39, 42];
					if (!loginResult.includes(res.data.login_result)) {
						return;
					}
					/* 一次性session */
					if (res.data && res.data.session_id) {
						_this.session_id = res.data.session_id;
					}
					/* 需要驗證真實姓名才show欄位 */
					if (typeof res.data.data_check !== 'undefined') {
						switch (res.data.data_check) {
						case 0:
							$('#js-picture-check .login-unit-realname-input').css('display', 'none');
							$('#js-picture-check .login-unit-bankID-input').css('display', 'none');
							break;
						case 1:
							$('#js-picture-check .login-unit-realname-input').css('display', 'inline-block');
							$('#js-picture-check .login-unit-bankID-input').css('display', 'none');
							break;
						case 2:
							$('#js-picture-check .login-unit-realname-input').css('display', 'none');
							$('#js-picture-check .login-unit-bankID-input').css('display', 'inline-block');
							break;
						case 3:
							$('#js-picture-check .login-unit-realname-input').css('display', 'inline-block');
							$('#js-picture-check .login-unit-bankID-input').css('display', 'inline-block');
							break;
						}
					}
					switch (res.data.login_result) {
						/* 圖形化驗證 */
					case 34:
						_this.openPictureCheck(username, passwd, '', res.data);
						break;
						/* UBauth驗證 */
					case 27:
						_this.openUbauthPage(res.data);
						break;
					case 39:
						_this.openSmsCheck(username, res.data.session_id);
						break;
					case 42:
						_this.openGoogleCheck(username, res.data.session_id);
						break;
					default:
						break;
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.error('ad game banner api error');
				}
			});
		},
		/* 二次驗證 API */
		secendVerify: function(sendData) {
			var _this = this;
			_this.maskLoadding(true);
			/* F5 shape 防護機制 */
			var f5shape = {};
			try {
				f5shape = window.__xr_bmobdb();
			} catch(exception) {
				console.log('F5 shape error');
			}
			var tmpSendData = $.extend({},
			sendData, f5shape);
			$.ajax({
				url: "/entrance/login.json?k=" + _this.fingerprint,
				type: 'post',
				data: tmpSendData,
				success: function(res, status, xhr) {
					_this.loginData = res;
					/* API 跳轉設定、訊息顯示 */
					_this.maskLoadding(false);
					/* 設定開啟圖形驗證碼開啟按鈕 */
					if ($('#js-pic-confirm-btn').prop('disabled') === true) {
						/* 因導頁有設定 200ms 的延緩，因此需要設定 200ms 的 'disabled' */
						setTimeout(function() {
							$('#js-pic-confirm-btn').prop('disabled', false).removeClass('disabled');
						},
						200);
					}
					/* 各頁彈跳登入視窗關閉 */
					$('.ele-pop-login-wrap').hide();
					_this.loginFront(res, status, xhr);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					_this.maskLoadding(false);
					/* 設定開啟圖形驗證碼開啟按鈕 */
					if ($('#js-pic-confirm-btn').prop('disabled') === true) {
						$('#js-pic-confirm-btn').prop('disabled', false).removeClass('disabled');
					}
					console.error('ad game banner api error');
				}
			});
		},
		/* API 跳轉設定、訊息顯示 */
		loginFront: function(res, status, xhr) {
			var _this = this;
			/* 如果不是 json 型態，表示有可能維護中，執行重新整理 */
			if (!/json/.test(xhr.getResponseHeader('content-type'))) {
				window.location.reload();
				return;
			}
			if (res.status !== 'Y' || !res.data) {
				_this.loginDataLayer();
				/* 本次略過 但已綁定 */
				if (res.code === '150250076') {
					_this.closeMethod();
					alert(res.message);
					_this.getLoginVerify(_this.username, _this.passwd, _this.target);
					return false;
				}
				var resMsg = res.message;
				if (res.code === '111030528') {
					resMsg = res.msg + "(" + res.code + ")";
				}
				alert(resMsg);
				/* 111031922：驗證碼輸入錯誤 */
				if (res.code === '111031922') {
					/* 不關閉視窗，並且清空驗證碼 */
					$('#input_token').val('').focus();
					/* 輸入錯4次驗證碼，就reload */
					_this.failTime += 1;
					if (_this.failTime === 5) {
						window.location.reload();
					}
					return false;
				}
				/* 關閉視窗 */
				_this.closeMethod();
				return false;
			}
			if (res.data && res.data.hot_news && res.data.hot_news.length) {
				/* 關閉視窗 */
				_this.closeMethod();
				/* 設定延緩讓closeMethod() 可先執行 */
				setTimeout(function() {
					/* 迴圈跑公告 */
					for (var i = 0; i < res.data.hot_news.length; i++) {
						alert(res.data.hot_news[i].replace(/\\n/g, '\n'));
					}
				},
				100);
			}
			/* 登入後跳轉設定 */
			if (res.data.login_result === 1 || res.data.login_result === 16) {
				/* 設定延緩跳轉讓closeMethod() 可先執行 */
				setTimeout(function() {
					/* 頁面重整 */
					return _this.pageReload(res);
				},
				200);
			}
			return true;
		},
		/* 檢查是否需要修正密碼 */
		checkPasswordPeriod: function() {
			var _this = this;
			$.ajax({
				url: "/infe/user/pwdlogin/check",
				dataType: 'json',
				async: false,
				cache: false,
				error: function(xhr) {
					console.log(xhr);
				},
				success: function(resp) {
					if (resp.status === 'Y') {
						_this.needChangePwdPara = resp.data.changePassword;
					}
				}
			});
		},
		/* app 連動設定 */
		setAppConnect: function(formalUrlDomain, msg, serviceid, servicename, deviceid, token) {
			var _this = this;
			_this.websocketErrorCount = 0;
			_this.BBauthFunc.init(formalUrlDomain, '', msg, serviceid, servicename, deviceid, token, _this.listenDisconnect);
			if (!_this.ubauthFirstIn) {
				_this.BBauthFunc.listen("onAuth", _this.onAuth);
				_this.BBauthFunc.listen("onReject", _this.onReject);
				_this.BBauthFunc.listen("disconnect", _this.disconnect);
				_this.BBauthFunc.listen('io-error',
				function(data) {
					_this.webSocketError(formalUrlDomain, '', msg, serviceid, servicename, deviceid, token, _this.listenDisconnect, data);
				});
			}
		},
		onAuth: function(data) {
			var _this = loginWebVerify;
			_this.secendVerify({
				username: _this.username,
				ubauth_token: data.token,
				session_id: _this.session_id
			});
		},
		onReject: function(data) {
			var _this = loginWebVerify;
			if (data.route === 'onReject') {
				_this.secendVerify({
					username: _this.username,
					refuse_ubauth: 'Y',
					session_id: _this.session_id
				});
				alert("您的验证要求已被拒绝,请再试一次");
				_this.closeMethod();
			}
		},
		disconnect: function() {
			console.warn('disconnect');
		},
		listenDisconnect: function(data) {
			var _this = loginWebVerify;
			_this.showData(data);
		},
		showData: function(data) {
			if (data.code !== 200 && data.code !== 1000) {
				console.warn("装置连线失败");
			}
		},
		webSocketError: function(formalUrlDomain, msg, serviceid, servicename, deviceid, token, listenDisconnect, data) {
			var _this = this;
			if (data.type === 'error' && _this.websocketErrorCount < 5) {
				_this.websocketErrorCount = _this.websocketErrorCount + 1;
				setTimeout(function() {
					_this.BBauthFunc.init(formalUrlDomain, '', msg, serviceid, servicename, deviceid, token, listenDisconnect);
				},
				1000);
			}
			if (data.type === 'error' && _this.websocketErrorCount >= 5) {
				console.error('ws link error');
			}
		},
		/* 圖形驗證頁面 open */
		openPictureCheck: function(username, passwd, type, resData) {
			var _this = this;
			_this.usernameStash = username;
			_this.passwordStash = passwd;
			/* * aliyunSwitch Y/N 驗證開關* aliyunType 1:滑動驗證*/
			if (resData.aliyunSwitch === 'Y' && resData.aliyunType === 1) {
				var nc_token = resData.nc_token;
				var NC_Opt = {
					renderTo: "#js-nc-check-bar",
					appkey: resData.appkey,
					scene: "nc_login",
					token: nc_token,
					customWidth: 266,
					trans: {
						"key1": "code0"
					},
					elementID: ["usernameID"],
					is_Opt: 0,
					language: _this.langMap[_this.lang],
					isEnabled: true,
					timeout: 3000,
					times: 5,
					apimap: {
						/*'analyze': '//a.com/nocaptcha/analyze.jsonp','get_captcha': '//b.com/get_captcha/ver3','get_captcha': '//pin3.aliyun.com/get_captcha/ver3''get_img': '//c.com/get_img','checkcode': '//d.com/captcha/checkcode.jsonp','umid_Url': '//e.com/security/umscript/3.2.1/um.js','uab_Url': '//aeu.alicdn.com/js/uac/909.js','umid_serUrl': 'https://g.com/service/um.json'*/
					},
					callback: function(data) {
						_this.nc_token = nc_token;
						_this.csessionid = data.csessionid;
						_this.sig = data.sig;
						_this.appkey = resData.appkey;
						_this.scene = 'nc_login';
						$('#js-pic-confirm-btn').click();
					}
				};
				var nc = new noCaptcha(NC_Opt);
				nc.upLang(_this.langMap[_this.lang], {
					_startTEXT: "向右滑动即登入",
					_yesTEXT: "验证通过",
					_error300: "<a href=\"javascript:__nc.reset()\">哎呀，出错了！更新试试</a>",
					_errorNetwork: "<a href=\"javascript:__nc.reset()\">网路不给力!刷新试试</a>"
				});
				$('#js-nc-check').show();
				$('#js-pic-confirm-btn').hide();
				$('.login-unit-chk-input').hide();
				$('.captcha-msg-wrap').hide();
				$('#captcha').hide();
			} else {
				$('#js-nc-check').hide();
				$('#js-pic-confirm-btn').show();
				$('.login-unit-chk-input').show();
				$('.captcha-msg-wrap').show();
				$('#captcha').hide();
			}
			/*  */
			if (resData.aliyunSwitch === 'Y' && resData.aliyunType === 2) {
				_this.appId = resData.appId;
				new TencentCaptcha(resData.appId,
				function(res) {
					if (res.ret !== 0) {
						/* 關閉騰訊驗證時 */
						_this.closeMethod();
						return;
					}
					/* 回傳給後端 */
					_this.ticket = res.ticket;
					_this.randStr = res.randstr;
					if (_this.resultData.data.data_check > 0) {
						/* 有開啟真實姓名驗證 */
						$('#js-login-chk').show();
						$('#js-pic-confirm-btn').show();
					} else {
						/* 確認按鈕點擊 */
						$('#js-pic-confirm-btn').click();
					}
				},
				{
					needFeedBack: false
				}).show();
				$('#js-login-chk').hide();
				$('#js-nc-check').hide();
				$('#js-pic-confirm-btn').hide();
				$('.login-unit-chk-input').hide();
				$('.captcha-msg-wrap').hide();
				$('#captcha').hide();
			}
			/*  */
			if (resData.aliyunSwitch === 'Y' && resData.aliyunType === 3) {
				_this.vId = resData.vId;
				vaptcha({
					vid: resData.vId,
					type: 'invisible',
					offline_server: '',
					scene: '1',
				}).then(function(vaptchaObj) {
					vaptchaObj.validate();
					vaptchaObj.listen("pass",
					function() {
						/* 回傳後端 */
						_this.v_token = vaptchaObj.getToken();
						_this.scene = '1';
						if (_this.resultData.data.data_check > 0) {
							/* 有開啟真實姓名驗證 */
							$('#js-login-chk').show();
							$('#js-pic-confirm-btn').show();
						} else {
							/* 確認按鈕點擊 */
							$('#js-pic-confirm-btn').click();
						}
					});
					vaptchaObj.listen("close",
					function() {
						history.go(0);
					});
				});
				$('#js-login-chk').hide();
				$('#js-nc-check').hide();
				$('#js-pic-confirm-btn').hide();
				$('.login-unit-chk-input').hide();
				$('.captcha-msg-wrap').hide();
				$('#captcha').hide();
			};
			/*  */
			if (resData.aliyunSwitch === 'Y' && resData.aliyunType === 4) {
				_this.captchaId = resData.captchaId;
				initNECaptcha({
					captchaId: resData.captchaId,
					element: '#captcha',
					feedbackEnable: false,
					onVerify: function(err, data) {
						if (err) return;
						_this.validate = data.validate;
						$('#js-pic-confirm-btn').click();
					}
				},
				function(instance) {
					_this.captchaIns = instance;
				},
				function() {
					/* 必要格式, 勿刪 */
				});
				$('#captcha').show();
				$('#js-nc-check').hide();
				$('#js-pic-confirm-btn').hide();
				$('.login-unit-chk-input').hide();
				$('.captcha-msg-wrap').hide();
			};
			/* 第一次開啟 */
			if (!_this.imgCheckFristIn) {
				/* 表單 label 字暫留效果 */
				$('#js-picture-check').find('label').InputLabels();
				$('#vLoginPic').on('click',
				function() {
					$('#rmNum').focus();
				});
				$('#rmNum').on('focus',
				function() {
					_this.getKeyCode();
				});
				$('#rmNum').on('propertychange input',
				function(e) {
					const re = /^[a-zA-Z0-9]{0,6}$/;
					if (re.test(e.delegateTarget.value)) {
						_this.imgCheckInputValue = e.delegateTarget.value;
					}
					$(this).val(_this.imgCheckInputValue);
				});
				$('#bankID').on('propertychange input',
				function(e) {
					const re = /^[a-zA-Z0-9]{0,5}$/;
					if (re.test(e.delegateTarget.value)) {
						_this.bankIDInputValue = e.delegateTarget.value;
					}
					$(this).val(_this.bankIDInputValue);
				});
				/* 二次驗證登入API */
				$('#js-pic-confirm-btn').on('click',
				function() {
					if ($('.login-unit-chk-input').is(':visible') && !$('.login-unit-chk-input .img-login-input').val()) {
						alert("请输入验证码");
						return;
					}
					if ($('.login-unit-bankID-input').is(":visible") && !$('.login-unit-bankID-input .img-login-input').val()) {
						_this.captchaIns && _this.captchaIns.refresh();
						alert("请输入银行帐号末5码");
						return;
					}
					/* 防止Enter連點 */
					if ($(this).prop('disabled') === true) {
						return;
					}
					$(this).prop('disabled', true).addClass('disabled');
					/*  */
					if (resData.aliyunType === 1) {
						_this.postToken = _this.nc_token;
					} else if (resData.aliyunType === 3) {
						_this.postToken = _this.v_token;
					};
					var tempObj = {
						username: _this.usernameStash,
						password: _this.passwordStash,
						captcha: $('#rmNum').val(),
						sr: _this.sr,
						token: _this.postToken,
						csessionid: _this.csessionid,
						sig: _this.sig,
						scene: _this.scene,
						appkey: _this.appkey,
						appId: _this.appId,
						ticket: _this.ticket,
						randStr: _this.randStr,
						vId: _this.vId,
						captchaId: _this.captchaId,
						validate: _this.validate
					};
					/* 當前驗證方式為-雙重驗證 才帶skip 參數 */
					if (_this.resultData.data.login_result === 27) {
						tempObj.skip = (type === 'skip') ? 'Y': 'N';
					}
					/* 需要驗證真實姓名才傳 */
					if (_this.resultData.data.data_check) {
						switch (_this.resultData.data.data_check) {
						case 1:
							tempObj.real_name = $('.login-unit-realname-input #realname').val();
							break;
						case 2:
							tempObj.acc_num = $('.login-unit-bankID-input #bankID').val();
							break;
						case 3:
							tempObj.real_name = $('.login-unit-realname-input #realname').val();
							tempObj.acc_num = $('.login-unit-bankID-input #bankID').val();
							break;
						}
					}
					_this.secendVerify(tempObj);
				});
				/* 設定在input Enter */
				$('#rmNum').on('keypress',
				function(e) {
					if (e.keyCode === 13) {
						$('#js-pic-confirm-btn').click();
					}
				});
			}
			_this.imgCheckFristIn = true;
			$('#js-picture-check .img-login-input').val('');
			$('#js-picture-check .img-login-input').blur();
			$('#js-picture-check').show();
			_this.onFocusFirst();
		},
		/* focus 第一個欄位 */
		onFocusFirst: function(data) {
			var _this = this;
			var hasFocus = false;
			var hasFocusRmNum = false;
			$('#js-picture-check').find('.ele-login-img-check-box').find('input').each(function() {
				/* 判斷是否已focus && 此input是否有顯示 */
				if (!hasFocus && $(this).is(':visible')) {
					if ($(this).attr('id') === 'rmNum') {
						hasFocusRmNum = true;
					}
					hasFocus = true;
					$(this).focus();
				}
			});
			/* 避免進入頁面沒顯示驗證碼 */
			if (!hasFocusRmNum && $('#rmNum').is(':visible')) {
				_this.getKeyCode();
			}
		},
		/* Ubauth頁面 open */
		openUbauthPage: function(data) {
			var _this = this;
			if ((data.token || data.token === '') && data.device_id) {
				var loginAppMsg = _this.username.substr('0', '3') + '***' + '@nc' + " 进行登入";
				_this.device_id = data.device_id;
				_this.service_id = data.service_id;
				_this.session_id = data.session_id;
				_this.token = data.token;
				_this.formal_url_domain = data.formal_url_domain;
				/* 開啟ubauth連線驗證頁面 */
				$('#js-ubauth-chk').show();
				if (data.token !== '') {
					_this.setAppConnect(_this.formal_url_domain, loginAppMsg, _this.service_id, "有人尝试使用账号：", _this.device_id, _this.token);
				}
				if (!_this.ubauthFirstIn) {
					$('#confirm_token').on('click',
					function() {
						$('#confirm_token').attr('disabled', true).addClass('disabled');
						_this.secendVerify({
							username: _this.username,
							ubauth_token: $('#input_token').val(),
							session_id: _this.session_id
						});
					});
					/* 控制按鈕狀態 */
					$("#input_token").on('propertychange input',
					function(e) {
						const re = /^\d{0,6}$/g;
						if (re.test(e.delegateTarget.value)) {
							_this.inputTokenEnter = e.delegateTarget.value;
						}
						$(this).val(_this.inputTokenEnter);
						$('#confirm_token').attr('disabled', !$(this).val().length);
						if (!$(this).val().length) {
							$('#confirm_token').addClass('disabled');
						}
						if ($(this).val().length) {
							$('#confirm_token').removeClass('disabled');
						}
					});
					$('#input_token').on('keypress',
					function(e) {
						if (e.key == 'Enter') {
							var token = _this.inputTokenEnter;
							if (!token) {
								alert("请输入验证码");
								return;
							}
							$('#confirm_token').click();
						}
					});
				}
				_this.ubauthFirstIn = true;
			}
		},
		/* 打開手機簡訊驗證彈窗 */
		openSmsCheck: function(username, sessionId) {
			var _this = this;
			_this.session_id = sessionId;
			$('#js-sms-check').show();
			$('#js-sms-check').find('label').InputLabels();
			$('#js-sms-confirm-btn').attr('disabled', true);
			if (!_this.smsCheckFirstIn) {
				$('#js-sms-getcode').on('click',
				function() {
					_this.getSmscode(username);
				});
				$('#smsNum').on('propertychange input',
				function(e) {
					var regular = /^\d{0,6}$/g;
					if (regular.test(e.delegateTarget.value)) {
						_this.inputTokenEnter = e.delegateTarget.value;
					}
					$(this).val(_this.inputTokenEnter);
					$('#js-sms-confirm-btn').attr('disabled', !$(this).val().length);
					if (!$(this).val().length) {
						$('#js-sms-confirm-btn').attr('disabled', true);
					}
					if ($(this).val().length) {
						$('#js-sms-confirm-btn').attr('disabled', false);
					}
				});
				$('#smsNum').on('keypress',
				function(e) {
					if (e.key == 'Enter') {
						var smsToken = _this.inputTokenEnter;
						if (!smsToken) {
							alert("请输入验证码");
							return;
						}
						$('#js-sms-confirm-btn').click();
					}
				});
				$('#js-sms-confirm-btn').on('click',
				function() {
					var smsToken = _this.inputTokenEnter;
					if ($(this).prop('disabled') === true) {
						return;
					}
					$(this).attr('disabled', true);
					_this.secendVerify({
						username: username,
						sms_token: smsToken,
						session_id: _this.session_id
					});
				});
			}
			_this.smsCheckFirstIn = true;
			$('#smsNum').val("").blur();
		},
		/* 取得簡訊驗證碼 */
		getSmscode(username) {
			var _this = this;
			if (_this.smsGetting) {
				return;
			}
			_this.maskLoadding(true);
			_this.smsGetting = true;
			$.ajax({
				url: "/entrance/login/code/sms.json",
				type: "post",
				data: {
					username: username
				},
				success: function(res) {
					if (res.status === "N" && !res.data.countdown) {
						$('#js-sms-getcode').attr('disabled', true);
						$(".error-msg").text(res.message + '(' + res.code + ')').show();
						return;
					}
					$('#js-sms-getcode').hide();
					_this.smsCountdown(res.data.countdown);
				},
				error: function(err) {
					console.error("API Error");
				},
				complete: function() {
					_this.smsGetting = false;
					_this.maskLoadding(false);
				}
			});
		},
		/* 打開Google 驗證彈窗 */
		openGoogleCheck: function(username, sessionId) {
			var _this = this;
			_this.session_id = sessionId;
			$('#js-google-check').show();
			$('#js-google-confirm-btn').attr('disabled', true);
			if (!_this.googleCheckFirstIn) {
				$('#js-google-token').on('propertychange input',
				function(e) {
					var regular = /^\d{0,6}$/g;
					if (regular.test(e.delegateTarget.value)) {
						_this.inputTokenEnter = e.delegateTarget.value;
					}
					$(this).val(_this.inputTokenEnter);
					$('#js-google-confirm-btn').attr('disabled', !$(this).val().length);
					if (!$(this).val().length) {
						$('#js-google-confirm-btn').attr('disabled', true);
					}
					if ($(this).val().length) {
						$('#js-google-confirm-btn').attr('disabled', false);
					}
				});
				$('#js-google-token').on('keypress',
				function(e) {
					if (e.key == 'Enter') {
						var googleToken = _this.inputTokenEnter;
						if (!googleToken) {
							alert("请输入验证码");
							return;
						}
						$('#js-google-confirm-btn').click();
					}
				});
				$('#js-google-confirm-btn').on('click',
				function() {
					var googleToken = _this.inputTokenEnter;
					if ($(this).prop('disabled') === true) {
						return;
					}
					$(this).attr('disabled', true);
					_this.secendVerify({
						username: username,
						totp_token: googleToken,
						session_id: _this.session_id
					});
				});
			}
			_this.googleCheckFirstIn = true;
			$('#js-google-token').val("").blur();
		},
		/* fingerprint2 set code */
		setFingerprint: function() {
			var _this = this;
			recognition.get({
				preprocessor: function(key, value) {
					var icCache = $.cookie('ICCACHE');
					if (key === 'plugins' && icCache) {
						return value + ',' + icCache;
					}
					return value;
				}
			},
			function(components) {
				var fp = recognition.x64hash128(components.map(function(pair) {
					return pair.value;
				}).join(), 31);
				var secretCode = '';
				switch (fcacheType) {
				case 'A':
					/*  */
					secretCode = _this.handleCode(window.btoa(fp), 'int', '+', 0, 3) + '@' + fp + '*' + _this.handleCode(md5(fp), 'en', '+', 0, 5);
					break;
				case 'B':
					/*  */
					secretCode = _this.handleCode(md5(fp), 'en', '+', 0, 5) + '#' + fp + '*' + _this.handleCode(sha256(fp), 'int', '-', 0, 5);
					break;
				case 'C':
					/*  */
					secretCode = _this.handleCode(sha256(fp), 'en', '-', 0, 7) + '-' + _this.handleCode(md5(fp), 'int', '+', 0, 4) + fp;
					break;
				case 'D':
					/*  */
					secretCode = fp + '+' + _this.handleCode(md5(fp), 'en', '-', 0, 4) + _this.handleCode(sha256(fp), 'int', '+', 0, 3);
					break;
				case 'E':
					/*  */
					secretCode = _this.handleCode(fp, 'en', '+', 0, 2) + '%' + _this.handleCode(sha256(fp), 'int', '+', 0, 2) + fp;
					break;
				case 'F':
					/*  */
					secretCode = _this.handleCode(sha256('8f0' + fp + 'b7a'), 'mix', '-', 7, 8) + fp + _this.handleCode(md5('f16s' + fp + 'd'), 'mix', '+', 5, 8);
					break;
				case 'G':
					/*  */
					secretCode = _this.handleCode(sha224('9a1' + fp + 'q1'), 'mix', '+', 10, 9) + _this.handleCode(md5('e5cv' + fp + 'v1'), 'mix', '-', 7, 8) + fp;
					break;
				case 'H':
					/*  */
					secretCode = _this.handleCode(md5('eds' + fp + '874'), 'mix', '-', 4, 7) + fp + _this.handleCode(sha384('t3b' + fp + 'fe4'), 'mix', '+', 6, 8);
					break;
				case 'I':
					/*  */
					secretCode = _this.handleCode(sha224('11a' + fp + 'q1aa'), 'mix', '-', 12, 15) + fp + _this.handleCode(md5('r124' + fp + 'v'), 'mix', '-', 8, 7);
					break;
				case 'J':
					/*  */
					secretCode = fp + _this.handleCode(sha384('e5da' + fp + 'q'), 'mix', '-', 13, 5) + _this.handleCode(sha512('d31' + fp + 'l78'), 'mix', '-', 10, 9);
					break;
				case 'K':
					/*  */
					secretCode = _this.handleCode(md5('p3sa' + fp + 'ps5'), 'mix', '-', 8, 7) + _this.handleCode(sha224('vbne' + fp + '834'), 'mix', '-', 15, 10) + fp;
					break;
				case 'L':
					/*  */
					secretCode = fp + _this.handleCode(sha512('idmn' + fp + '78g'), 'mix', '-', 4, 6) + _this.handleCode(md5('d84' + fp + 'rtd'), 'mix', '-', 12, 5);
					break;
				case 'M':
					/*  */
					secretCode = _this.handleCode(sha224('dfs' + fp + 'e1y'), 'mix', '-', 10, 9) + _this.handleCode(sha512('bvs4' + fp + '12s'), 'mix', '-', 15, 7) + fp;
					break;
				case 'N':
					/*  */
					secretCode = fp + _this.handleCode(sha384('ad4f' + fp + 'qz'), 'mix', '-', 4, 6) + _this.handleCode(sha512('nqu' + fp + '7dbn'), 'mix', '-', 30, 12);
					break;
				case 'O':
					/*  */
					secretCode = _this.handleCode(sha512('7df4' + fp + '1f'), 'mix', '-', 9, 6) + fp + _this.handleCode(md5(fp + 'd3f1'), 'mix', '-', 4, 7);
					break;
				case 'P':
					/*  */
					secretCode = fp + _this.handleCode(sha512('nd8a' + fp + '1x'), 'mix', '-', 18, 7) + _this.handleCode(sha256('pa' + fp + '178a'), 'mix', '-', 7, 10);
					break;
				case 'Q':
					/*  */
					secretCode = _this.handleCode(sha224(fp + 'of555'), 'mix', '-', 4, 6) + _this.handleCode(sha512('37ol' + fp + 'j'), 'mix', '+', 15, 9) + fp;
					break;
				case 'R':
					/*  */
					secretCode = _this.handleCode(sha384('ok2' + fp + 'pzl1'), 'mix', '+', 8, 10) + fp + _this.handleCode(md5('grew5' + fp + '4'), 'mix', '-', 2, 7);
					break;
				default:
					/*  */
					secretCode = _this.handleCode(md5(fp), 'en', '+', 0, 5) + '#' + fp + '*' + _this.handleCode(sha256(fp), 'int', '-', 0, 5);
				};
				_this.fingerprint = window.btoa(secretCode);
			});
		},
		/** code: 加密字串* type: 'en' / 'int' / mix  (英/數/混合)* order: '+' / '-' (順序/倒序)* start: 取字符串開始位置* length: 取字符串结尾位置* */
		handleCode: function(code, type, order, start, length) {
			if (type !== 'mix') {
				var str = type === 'en' ? 'AAAAAAAAAA': '0000000000';
				/* 補滿不足位數 */
				var reg = type === 'en' ? /[0-9]/g: /\D/g;
				if (order === '+') {
					return code.replace(reg, '').concat(str).substr(start, length);
				}
				return (str + code).replace(reg, '').split('').reverse().join('').substr(start, length);
			}
			if (order === '+') {
				return code.substr(start, length);
			}
			return code.split('').reverse().join('').substr(start, length);
		},
		/* 手機簡訊倒數計時 */
		smsCountdown: function(countdown) {
			var _this = this;
			var countdownTime = countdown;
			$("#js-sms-countdown").show();
			var eleTxt = $('#js-sms-countdown').text();
			$('#js-sms-countdown').text(eleTxt.replace('%s', countdownTime));
			_this.smsTimer = setInterval(function() {
				var text = eleTxt.replace('%s', countdownTime - 1);
				$('#js-sms-countdown').text(text);
				countdownTime--;
				if (countdownTime <= 0) {
					clearInterval(_this.smsTimer);
					$("#js-sms-countdown").hide().text("%s秒后重新发送");
					$('#js-sms-getcode').text("重新发送").attr('title', "重新发送").show();
				}
			},
			1000);
		},
		/* 遮罩Mask_Loadding */
		maskLoadding: function(status) {
			if (!status) {
				$('.loading-mask-wrap').hide();
				return;
			}
			$('.loading-mask-wrap').show();
		},
		loginDataLayer: function(uid = '-') {
			var _this = this;
			if (window.dataLayer) {
				window.dataLayer.push({
					event: 'login',
					ingress: _this.ingress,
					hallid: '3818449',
					ga_uid: uid,
					ga_ahid: uid === '-' ? '-': cvContent(_this.username + '@nc')
				});
			}
		}
	};
	loginWebVerify.initMethod();
	/* 舊版登入框 */
	oldLogin = function() {
		var inputInfo = {
			username: $("input[name=username]").val(),
			/* 帳號欄位 */
			passwd: $("input[name=passwd]").val(),
			/* 密碼欄位 */
		};
		if (inputCheck.caller !== null) {
			var target = inputCheck.caller.arguments[0].target;
			loginWebVerify.getLoginVerify(inputInfo.username, inputInfo.passwd, target);
			/* 阻擋表單連續提交 */
			$(target).find('input[type="submit"]').prop('disabled', true);
		}
		return false;
	};
	/*  */
	let capUrl = 'https://cstaticdun.126.net/load.min.js' + '?t=' + capGetTimestamp(1 * 60 * 1000),
	capCDN = document.createElement('script');
	function capGetTimestamp(msec) {
		msec = !msec && msec !== 0 ? msec: 1;
		return parseInt((new Date()).valueOf() / msec, 10);
	};
	capCDN.setAttribute('src', capUrl);
	document.head.appendChild(capCDN);
})