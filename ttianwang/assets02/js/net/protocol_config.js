/**
 * 网络协议定义模块
 */
define(function(require, exports, module) {
	var MID = require("lib/protobuf/protocolids");
	var ProtocolConfig = {
		heartbeat: {
			mid: MID.M_HEART,
			sid: MID.M_S_HEART,
		},
		m_login: {
			mid: MID.M_LOGIN, //模块id号
			sids: //子协议号集合
			{
				login: //登录协议
				{
					sid: MID.M_S_LOGIN,
					request_proto: "login",
					response_proto: "login", //模块对应proto文件
					request_msg_type: "SLoginRequest", //客户端请求协议消息结构
					response_msg_type: "SLoginResponse",
					callBack: "SLoginResponse",
				},
				reLogin: { ////重登录,被逼下线 //无proto文件, 无请求，无反馈
					sid: MID.M_S_LOGOUT_FORCE
				},
				changeCard: { //房卡更改
					response_proto: "userinfo",
					sid: MID.M_S_CARD_CHANGE,
					response_msg_type: "SRoomCardChange",
					callBack: "SRoomCardChange",
				},
				creatCard: { //房卡更改
					response_proto: "userinfo",
					sid: MID.M_S_CARD_CHANGE,
					response_msg_type: "SRoomCardChange",
					callBack: "SRoomCardChange",
				},
				notice: {
					sid: MID.M_S_NOTICE,
					response_proto: "login",
					response_msg_type: "SNoticeResponse",
					callBack: "SNoticeResponse",
				},
				user: {
					sid: MID.M_S_USER,
					request_proto: "login",
					response_proto: "login",
					request_msg_type: "SUserQueryRequest", //客户端请求协议消息结构
					response_msg_type: "SUserQueryResponse",
					callBack: "SUserQueryResponse",
				},
                defaultQuery: {
                    sid: MID.M_S_DEFAULT_QUERY,
                    response_proto: "login",
                    response_msg_type: "SDefValResponse",
                    callBack: "SDefValResponse",
                },
                defaultConfig: {
                    sid: MID.M_S_DEFAULT_CONFIG,
                    request_proto: "login",
                    response_proto: "common",
                    request_msg_type: "SDefValConfigRequest", //客户端请求协议消息结构
                    response_msg_type: "SCommonResponse",
                    callBack: "SCommonResponse",
                }
			}
		},
		m_room: {
			mid: MID.M_ROOM, //模块id号
			sids: //子协议号集合
			{
				createRoom: //登录协议
				{
					sid: MID.M_S_CREATE_ROOM,
					request_proto: "room",
					response_proto: "room", //模块对应proto文件
					request_msg_type: "SCreateRoomRequest", //客户端请求协议消息结构
					response_msg_type: "SRoomResponse",
					callBack: "SCreateRoomResponse",
				},
                forceSettle:{
                    sid: MID.M_S_FORCE_SETTLE,
                    request_proto: "room",
                    response_proto: "common", //模块对应proto文件
                    request_msg_type: "SForceSettleRequest", //客户端请求协议消息结构
                    response_msg_type: "SCommonResponse",
                    callBack: "forceSettleResponse",
				},
				joinRoom: {
					sid: MID.M_S_ENTER_ROOM,
					request_proto: "room",
					response_proto: "room", //模块对应proto文件
					request_msg_type: "SEnterRoomRequest", //客户端请求协议消息结构
					response_msg_type: "SRoomResponse",
					callBack: "SEnterRoomResponse", //
				},
				leaveRoom: {
					sid: MID.M_S_EXIT_ROOM,
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "leaveRoomResponse", //
				},
				queryRoom: {
					sid: MID.M_S_ROOM_INFO,
					request_proto: "room",
					response_proto: "room", //模块对应proto文件
					request_msg_type: "SRoomInfoRequest", //客户端请求协议消息结构
					response_msg_type: "SRoomResponse",
					callBack: "SRoomInfoResponse", //
				},
				createRoomCards: {
					sid: MID.M_S_CARD_MAKE,
					request_proto: "room",
					response_proto: "room", //模块对应proto文件
					request_msg_type: "SRoomCardRequest", //客户端请求协议消息结构
					response_msg_type: "SRoomCardResponse",
					callBack: "SRoomCardResponse", //
				},
				inquireRoomCards: {
					sid: MID.M_S_CARD_QUERY,
					request_proto: "room",
					response_proto: "room", //模块对应proto文件
					request_msg_type: "SQueryCardResquest", //客户端请求协议消息结构
					response_msg_type: "SQueryCardResponse",
					callBack: "SQueryCardResponse", //
				},
				receiveRoomCards: {
					sid: MID.M_S_CARD_ACCEPT,
					request_proto: "room",
					response_proto: "room", //模块对应proto文件
					request_msg_type: "SAcceptCardRequest", //客户端请求协议消息结构
					response_msg_type: "SAcceptCardResponse",
					callBack: "SAcceptCardResponse", //
				},
				recordDetail: {
					sid: MID.M_S_ROOM_DETAIL,
					request_proto: "room",
					response_proto: "room",
					request_msg_type: "SRoomDetailRequest",
					response_msg_type: "SRoomDetailResponse",
					callBack: "SRoomDetailResponse",
				},
				roomCards: {
					sid: MID.M_S_CARD_DETAIL,
					request_proto: "room",
					response_proto: "room",
					request_msg_type: "SCardDetailRequest",
					response_msg_type: "SCardDetailResponse",
					callBack: "SCardDetailResponse",
				},
				moveListCards: {
					sid: MID.M_S_TRANSFER_QUERY,
					request_proto: "room",
					response_proto: "room",
					request_msg_type: "STransferQueryRequest",
					response_msg_type: "STransferQueryResponse",
					callBack: "STransferQueryResponse",
				},
				moveCards: {
					sid: MID.M_S_TRANSFER_CARD,
					request_proto: "room",
					response_proto: "room",
					request_msg_type: "STransferRequest",
					response_msg_type: "STransferResponse",
					callBack: "STransferResponse",
				},
				gameCounts: {
					sid: MID.M_S_ROOM_QUERY,
					request_proto: "room",
					response_proto: "room",
					request_msg_type: "SQueryRoomRequest",
					response_msg_type: "SQueryRoomResponse",
					callBack: "SQueryRoomResponse",
				},
				cardGift: {
					sid: MID.M_S_CARD_GIFT,
					request_proto: "room",
					response_proto: "common",
					request_msg_type: "SCardGiftRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
			}
		},
		m_game: {
			mid: MID.M_GAME,
			sids: {
				userChangeState: {
					sid: MID.M_S_CHANGE_STATUS,
					response_proto: "game", //模块对应proto文件
					response_msg_type: "SPlayerChange",
					callBack: "SPlayerChange", //
				},
				userReady: {
					sid: MID.M_S_READY,
					response_proto: "game",
					response_msg_type: "SReadyResponse",
					callBack: "userReady", //
				},
				gameStart: {
					sid: MID.M_S_START,
					response_proto: "game",
					response_msg_type: "SStartGameResponse",
					callBack: "StartGameResponse", //
				},
				exposePoker: {
					sid: MID.M_S_EXPOSE_POKER,
					response_proto: "game",
					response_msg_type: "SExposePoker",
					callBack: "exposePoker",
				},
				gameTimer: {
					sid: MID.M_S_GAME_TIMER,
					response_proto: "game",
					response_msg_type: "SGameTimer",
					callBack: "gameTimer",
				},
				endRaise: {
					sid: MID.M_S_END_RAISE,
					callBack: "endRaise",
				},
				robBaner: {
					sid: MID.M_S_ROB_DEALER,
					request_proto: "game",
					response_proto: "common", //模块对应proto文件
					request_msg_type: "SRobDealerRequest", //客户端请求协议消息结构
					response_msg_type: "SCommonResponse",
					callBack: "robBanerResponse"
				},
				raise: {
					sid: MID.M_S_RAISE,
					request_proto: "game",
					response_proto: "game", //模块对应proto文件
					request_msg_type: "SAddCoinRequest", //客户端请求协议消息结构
					response_msg_type: "SAddCoinResponse",
					callBack: "raiseResponse"
				},
				showPoker: {
					sid: MID.M_S_SHOW_POKER,
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "showPokerResponse"
				},
				chat: {
					sid: MID.M_S_CHAT,
					request_proto: "game",
					response_proto: "common",
					request_msg_type: "SChatRequest",
					response_msg_type: "SCommonResponse",
					callBack: "chatResponse",
				},
				record: {
					sid: MID.M_S_RECORDS_QUERY,
					request_proto: "game",
					response_proto: "game",
					request_msg_type: "SRecordRequest",
					response_msg_type: "SRecordResponse",
					callBack: "SRecordResponse",
				},
				watchSeat: {
					sid: MID.M_S_WATCHSEAT,
					response_proto: "game",
					response_msg_type: "SWatchSeatsResponse",
					callBack: "watchSeatResponse",
				},
				scoreBoard: {
					sid: MID.M_S_ROOM_SUM,
					request_proto: "game",
					response_proto: "game",
					request_msg_type: "SRoomSumRequest",
					response_msg_type: "SRoomSum",
					callBack: "scoreBoardResponse",
				},
				giveBnaker: {
					sid: MID.M_S_APPOINT_DEALER,
					request_proto: "game",
					response_proto: "common",
					request_msg_type: "SAppointDealerRequest",
					response_msg_type: "SCommonResponse",
					callBack: "giveBnakerResponse",
				},
				lookPoker: {
					sid: MID.M_S_LOOK_POKER,
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "lookPokerResponse",
				},
				abandonPoker: {
					sid: MID.M_S_GIVEUP,
					response_proto: "game",
					response_msg_type: "SGiveupResponse",
					callBack: "abandonPokerResponse",
				},
				comparePoker: {
					sid: MID.M_S_COMPARE,
					request_proto: "game",
					response_proto: "game",
					request_msg_type: "SCompareRequest",
					response_msg_type: "SCompareResponse",
					callBack: "comparePokerResponse",
				},
				displayPoker: {
					sid: MID.S_DISPLAY_POKER,
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "displayPokerResponse",
				},
				ctrlPoker: {
					sid: MID.M_S_CTRLPOKER,
					request_proto: "game",
					request_msg_type: "SCtrlPokerRequest",
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "ctrlPokerResponse",
				},
				discard: {
					sid: MID.M_S_GAME_DISCARD,
					request_proto: "game",
					request_msg_type: "SDiscardResquest",
					response_proto: "game",
					response_msg_type: "SDiscardResponse",
					callBack: "discardResponse",
				},
			}
		},
		m_friend: {
			mid: MID.M_FRIEND,
			sids: {
				invitationJoin: {
					sid: MID.M_S_FRIEND_STATUS,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SFriendStatusRequest",
					response_msg_type: "SFriendStatusResponse",
					callBack: "friendStatusResponse",
				},
				friendAdd: {
					sid: MID.M_S_FRIEND_ADD,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SFriendApplyRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				friendList: {
					sid: MID.M_S_FRIEND_QUERY,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SFriendQueryResquest",
					response_msg_type: "SFriendQueryResponse",
					callBack: "SFriendQueryResponse",
				},
				friendOpenNum: {
					sid: MID.M_S_FM_CONSUME_QUERY,
					response_proto: "userinfo",
					response_msg_type: "SFMConsumeResponse",
					callBack: "SFMConsumeResponse",
				},
				friendOpen: {
					sid: MID.M_S_FRIEND_OPEN,
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				friendClose: {
					sid: MID.M_S_FRIEND_CLOSE,
					response_proto: "common",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				friendOperat: {
					sid: MID.M_S_FRIEND_OPERATE,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SFriendOperateRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
			}
		},
		m_guild: {
			mid: MID.M_CLUB,
			sids: {
				myClub: {
					sid: MID.M_S_CLUB_BELONG,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubBelongRequest",
					response_msg_type: "SClubBelongResponse",
					callBack: "SClubBelongResponse",
				},
				culbConsume: {
					sid: MID.M_S_CM_CONSUME,
					response_proto: "userinfo",
					response_msg_type: "SCMConsumeResponse",
					callBack: "SCMConsumeResponse",
				},
				culbCreat: {
					sid: MID.M_S_CLUB_CREATE,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubCreateRequest",
					response_msg_type: "SClubInfoResponse",
					callBack: "SClubInfoResponse",
				},
				culbChange: {
					sid: MID.M_S_CLUB_RENAME,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubRenameRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				culbInfo: {
					sid: MID.M_S_CLUB_INFO,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubInfoRequest",
					response_msg_type: "SClubInfoResponse",
					callBack: "SClubInfoResponse",
				},
				clubApply:{
					sid: MID.M_S_CLUB_APPLY,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubApplyRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				clubRecord:{
					sid: MID.M_S_CLUB_RECORD,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubRecordRequest",
					response_msg_type: "SClubRecordResponse",
					callBack: "SClubRecordResponse",
				},
				clubQuery:{
					sid: MID.M_S_CLUB_QUERY,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubQueryRequest",
					response_msg_type: "SClubQueryResponse",
					callBack: "SClubQueryResponse",
				},
				clubOperate:{
					sid: MID.M_S_CLUB_OPERATE,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubOperateRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				clubNote:{
					sid: MID.M_S_CLUB_NOTE,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubNoteRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				clubRole:{
					sid: MID.M_S_CLUB_ROLE,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubRoleRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				clubClose:{
					sid: MID.M_S_CLUB_CLOSE,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubCloseRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				openClose:{
					sid: MID.M_S_CLUB_OPEN,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubOpenRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				}, 
				gameQuery:{
					sid: MID.M_S_CGAME_QUERY,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SCGameQueryRequest",
					response_msg_type: "SCGameQueryResponse",
					callBack: "SCGameQueryResponse",
				},
				gameAttr:{
					sid: MID.M_S_CATTR_QUERY,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SCGameAttrRequest",
					response_msg_type: "SCGameAttrResponse",
					callBack: "SCGameAttrResponse",
				},
				gameConfig:{
					sid: MID.M_S_CGAME_CONFIG, 
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SCGameConfigRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				cattrConfig:{
					sid: MID.M_S_CATTR_CONFIG,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SCAttrConfigRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				clubBean:{
					sid: MID.M_S_CLUB_BEAN,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubBeanRequest",
					response_msg_type: "SClubBeanResponse",
					callBack: "SClubBeanResponse",
				},
				quitClub:{
					sid: MID.M_S_CLUB_QUIT,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubQuitRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				beanLog:{
					sid: MID.M_S_BEAN_LOG,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SBeanLogRequest",
					response_msg_type: "SBeanLogResponse",
					callBack: "SBeanLogResponse",
				},
				cancelClub:{
					sid: MID.M_S_CLUB_CANCEL,
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubCancelRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
				clubRoom:{
					sid: MID.M_S_CLUB_ROOM,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubRoomResquest",
					response_msg_type: "SClubRoomResponse",
					callBack: "SClubRoomResponse",
				},
				clubDetailInfo:{
					sid: MID.M_S_CLUB_DETAIL,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubDetailRequest",
					response_msg_type: "SClubDetailResponse",
					callBack: "SClubDetailResponse",
				},
				ClubStat:{
					sid: MID.M_S_CLUB_STAT,
					request_proto: "userinfo",
					response_proto: "userinfo",
					request_msg_type: "SClubStatRequest",
					response_msg_type: "SClubStatResponse",
					callBack: "SClubStatResponse",
				},
				memberConfig:{
					sid: MID.M_S_CLUB_BONUS, 
					request_proto: "userinfo",
					response_proto: "common",
					request_msg_type: "SClubBonusRequest",
					response_msg_type: "SCommonResponse",
					callBack: "SCommonResponse",
				},
                clubGoldbean :{
                    sid: MID.M_S_BEAN_GIFT,
                    request_proto: "userinfo",
                    response_proto: "common",
                    request_msg_type: "SBeanGiftRequest",
                    response_msg_type: "SCommonResponse",
                    callBack: "SCommonResponse",
                },
                clearClub :{
                    sid: MID.M_S_CLUB_CLEAR,
                    request_proto: "userinfo",
                    response_proto: "common",
                    request_msg_type: "SClubClearRequest",
                    response_msg_type: "SCommonResponse",
                    callBack: "SCommonResponse",
                },
                transFerQuery :{
                    sid: MID.M_S_CTRANSFER_QUERY,
                    response_proto: "userinfo",
                    response_msg_type: "SCTransferQueryResponse",
                    callBack: "transferQueryResponse",
                },
                transFerRequest :{
                    sid: MID.M_S_TRANSFER_CLUB,
                    request_proto: "userinfo",
                    response_proto: "common",
                    request_msg_type: "SCTransferRequest",
                    response_msg_type: "SCommonResponse",
                    callBack: "transFerResponse",
                },
                clubNotify :{
                    sid: MID.M_S_CLUB_NOTIFY,
                    request_proto: "userinfo",
                    response_proto: "userinfo",
                    request_msg_type: "SClubNotifyResquest",
                    response_msg_type: "SClubNotifyResponse",
                    callBack: "SClubNotifyResponse",
                },
                clubAdd :{
                    sid: MID.M_S_CLUB_ADD,
                    request_proto: "userinfo",
                    response_proto: "common",
                    request_msg_type: "SClubAddRequest",
                    response_msg_type: "SCommonResponse",
                    callBack: "SClubAddResponse",
                },
			}
		},

	};

	ProtocolConfig.getRequestProto = function(mid, sid) {
		if(mid === 1 && sid === 0) {
			return;
		}
		for(var key in ProtocolConfig) {
			var m = ProtocolConfig[key];
			if(m.mid === mid) {
				for(var k in m.sids) {
					var s = m.sids[k];
					if(s.sid === sid) {
						return s.request_proto;
					}
				}
			}
		}

		throw "protocol mid " + mid + " missing.";
	};
	ProtocolConfig.getResponseProto = function(mid, sid) {
		if(mid === 1 && sid === 0) {
			return;
		}
		for(var key in ProtocolConfig) {
			var m = ProtocolConfig[key];
			if(m.mid === mid) {
				for(var k in m.sids) {
					var s = m.sids[k];
					if(s.sid === sid) {
						return s.response_proto;
					}
				}
			}
		}

		throw "protocol mid " + mid + " missing.";
	};

	ProtocolConfig.getRequestMsgType = function(mid, sid) {
		if(mid === 1 && sid === 0) {
			return;
		}
		for(var key in ProtocolConfig) {
			var m = ProtocolConfig[key];
			if(m.mid === mid) {
				for(var k in m.sids) {
					var s = m.sids[k];
					if(s.sid === sid) {
						return s.request_msg_type;
					}
				}
			}
		}

		throw "protocol mid " + mid + " sid " + sid + " missing.";
	};

	ProtocolConfig.getResponseMsgType = function(mid, sid) {
		if(mid === 1 && sid === 0) {
			return;
		}
		for(var key in ProtocolConfig) {
			var m = ProtocolConfig[key];
			if(m.mid === mid) {
				for(var k in m.sids) {
					var s = m.sids[k];
					if(s.sid === sid) {
						return s.response_msg_type;
					}
				}
			}
		}

		throw "protocol mid " + mid + " sid " + sid + " missing.";
	};

	ProtocolConfig.getCallBack = function(mid, sid) {
		if(mid === 1 && sid === 0) {
			return;
		}
		for(var key in ProtocolConfig) {
			var m = ProtocolConfig[key];
			if(m.mid === mid) {
				for(var k in m.sids) {
					var s = m.sids[k];
					if(s.sid === sid) {
						return s.callBack;
					}
				}
			}
		}

		throw "protocol mid " + mid + " sid " + sid + " missing.";
	};
	module.exports = ProtocolConfig;
});