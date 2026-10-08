import { installMessageHelpers } from "./message-helpers.js";
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

const $util = $protobuf.util;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const proto = $root.proto = (() => {

    const proto = {};

    proto.ADVDeviceIdentity = (function() {

        function ADVDeviceIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVDeviceIdentity.prototype.rawId = null;
        ADVDeviceIdentity.prototype.timestamp = null;
        ADVDeviceIdentity.prototype.keyIndex = null;
        ADVDeviceIdentity.prototype.accountType = null;
        ADVDeviceIdentity.prototype.deviceType = null;

        return ADVDeviceIdentity;
    })();

    proto.ADVEncryptionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E2EE"] = 0;
        values[valuesById[1] = "HOSTED"] = 1;
        return values;
    })();

    proto.ADVKeyIndexList = (function() {

        function ADVKeyIndexList(p) {
            this.validIndexes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVKeyIndexList.prototype.rawId = null;
        ADVKeyIndexList.prototype.timestamp = null;
        ADVKeyIndexList.prototype.currentIndex = null;
        ADVKeyIndexList.prototype.validIndexes = $util.emptyArray;
        ADVKeyIndexList.prototype.accountType = null;

        return ADVKeyIndexList;
    })();

    proto.ADVSignedDeviceIdentity = (function() {

        function ADVSignedDeviceIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVSignedDeviceIdentity.prototype.details = null;
        ADVSignedDeviceIdentity.prototype.accountSignatureKey = null;
        ADVSignedDeviceIdentity.prototype.accountSignature = null;
        ADVSignedDeviceIdentity.prototype.deviceSignature = null;

        return ADVSignedDeviceIdentity;
    })();

    proto.ADVSignedDeviceIdentityHMAC = (function() {

        function ADVSignedDeviceIdentityHMAC(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVSignedDeviceIdentityHMAC.prototype.details = null;
        ADVSignedDeviceIdentityHMAC.prototype.hmac = null;
        ADVSignedDeviceIdentityHMAC.prototype.accountType = null;

        return ADVSignedDeviceIdentityHMAC;
    })();

    proto.ADVSignedKeyIndexList = (function() {

        function ADVSignedKeyIndexList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ADVSignedKeyIndexList.prototype.details = null;
        ADVSignedKeyIndexList.prototype.accountSignature = null;
        ADVSignedKeyIndexList.prototype.accountSignatureKey = null;

        return ADVSignedKeyIndexList;
    })();

    proto.AIHomeState = (function() {

        function AIHomeState(p) {
            this.capabilityOptions = [];
            this.conversationOptions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIHomeState.prototype.lastFetchTime = null;
        AIHomeState.prototype.capabilityOptions = $util.emptyArray;
        AIHomeState.prototype.conversationOptions = $util.emptyArray;

        AIHomeState.AIHomeOption = (function() {

            function AIHomeOption(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIHomeOption.prototype.type = null;
            AIHomeOption.prototype.title = null;
            AIHomeOption.prototype.promptText = null;
            AIHomeOption.prototype.sessionId = null;
            AIHomeOption.prototype.imageWdsIdentifier = null;
            AIHomeOption.prototype.imageTintColor = null;
            AIHomeOption.prototype.imageBackgroundColor = null;

            AIHomeOption.AIHomeActionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PROMPT"] = 0;
                values[valuesById[1] = "CREATE_IMAGE"] = 1;
                values[valuesById[2] = "ANIMATE_PHOTO"] = 2;
                values[valuesById[3] = "ANALYZE_FILE"] = 3;
                return values;
            })();

            return AIHomeOption;
        })();

        return AIHomeState;
    })();

    proto.AIQueryFanout = (function() {

        function AIQueryFanout(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIQueryFanout.prototype.messageKey = null;
        AIQueryFanout.prototype.message = null;
        AIQueryFanout.prototype.timestamp = null;

        return AIQueryFanout;
    })();

    proto.AIRegenerateMetadata = (function() {

        function AIRegenerateMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRegenerateMetadata.prototype.messageKey = null;
        AIRegenerateMetadata.prototype.responseTimestampMs = null;

        return AIRegenerateMetadata;
    })();

    proto.AIRichResponseCodeMetadata = (function() {

        function AIRichResponseCodeMetadata(p) {
            this.codeBlocks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseCodeMetadata.prototype.codeLanguage = null;
        AIRichResponseCodeMetadata.prototype.codeBlocks = $util.emptyArray;

        AIRichResponseCodeMetadata.AIRichResponseCodeBlock = (function() {

            function AIRichResponseCodeBlock(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseCodeBlock.prototype.highlightType = null;
            AIRichResponseCodeBlock.prototype.codeContent = null;

            return AIRichResponseCodeBlock;
        })();

        AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD"] = 2;
            values[valuesById[3] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING"] = 3;
            values[valuesById[4] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER"] = 4;
            values[valuesById[5] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT"] = 5;
            return values;
        })();

        return AIRichResponseCodeMetadata;
    })();

    proto.AIRichResponseContentItemsMetadata = (function() {

        function AIRichResponseContentItemsMetadata(p) {
            this.itemsMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseContentItemsMetadata.prototype.itemsMetadata = $util.emptyArray;
        AIRichResponseContentItemsMetadata.prototype.contentType = null;

        AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata = (function() {

            function AIRichResponseContentItemMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseContentItemMetadata.prototype.reelItem = null;

            return AIRichResponseContentItemMetadata;
        })();

        AIRichResponseContentItemsMetadata.AIRichResponseReelItem = (function() {

            function AIRichResponseReelItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseReelItem.prototype.title = null;
            AIRichResponseReelItem.prototype.profileIconUrl = null;
            AIRichResponseReelItem.prototype.thumbnailUrl = null;
            AIRichResponseReelItem.prototype.videoUrl = null;

            return AIRichResponseReelItem;
        })();

        AIRichResponseContentItemsMetadata.ContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "CAROUSEL"] = 1;
            return values;
        })();

        return AIRichResponseContentItemsMetadata;
    })();

    proto.AIRichResponseDynamicMetadata = (function() {

        function AIRichResponseDynamicMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseDynamicMetadata.prototype.type = null;
        AIRichResponseDynamicMetadata.prototype.version = null;
        AIRichResponseDynamicMetadata.prototype.url = null;
        AIRichResponseDynamicMetadata.prototype.loopCount = null;

        AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF"] = 2;
            return values;
        })();

        return AIRichResponseDynamicMetadata;
    })();

    proto.AIRichResponseGridImageMetadata = (function() {

        function AIRichResponseGridImageMetadata(p) {
            this.imageUrls = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseGridImageMetadata.prototype.gridImageUrl = null;
        AIRichResponseGridImageMetadata.prototype.imageUrls = $util.emptyArray;

        return AIRichResponseGridImageMetadata;
    })();

    proto.AIRichResponseImageURL = (function() {

        function AIRichResponseImageURL(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseImageURL.prototype.imagePreviewUrl = null;
        AIRichResponseImageURL.prototype.imageHighResUrl = null;
        AIRichResponseImageURL.prototype.sourceUrl = null;

        return AIRichResponseImageURL;
    })();

    proto.AIRichResponseInlineImageMetadata = (function() {

        function AIRichResponseInlineImageMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseInlineImageMetadata.prototype.imageUrl = null;
        AIRichResponseInlineImageMetadata.prototype.imageText = null;
        AIRichResponseInlineImageMetadata.prototype.alignment = null;
        AIRichResponseInlineImageMetadata.prototype.tapLinkUrl = null;

        AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED"] = 2;
            return values;
        })();

        return AIRichResponseInlineImageMetadata;
    })();

    proto.AIRichResponseLatexMetadata = (function() {

        function AIRichResponseLatexMetadata(p) {
            this.expressions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseLatexMetadata.prototype.text = null;
        AIRichResponseLatexMetadata.prototype.expressions = $util.emptyArray;

        AIRichResponseLatexMetadata.AIRichResponseLatexExpression = (function() {

            function AIRichResponseLatexExpression(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseLatexExpression.prototype.latexExpression = null;
            AIRichResponseLatexExpression.prototype.url = null;
            AIRichResponseLatexExpression.prototype.width = null;
            AIRichResponseLatexExpression.prototype.height = null;
            AIRichResponseLatexExpression.prototype.fontHeight = null;
            AIRichResponseLatexExpression.prototype.imageTopPadding = null;
            AIRichResponseLatexExpression.prototype.imageLeadingPadding = null;
            AIRichResponseLatexExpression.prototype.imageBottomPadding = null;
            AIRichResponseLatexExpression.prototype.imageTrailingPadding = null;

            return AIRichResponseLatexExpression;
        })();

        return AIRichResponseLatexMetadata;
    })();

    proto.AIRichResponseMapMetadata = (function() {

        function AIRichResponseMapMetadata(p) {
            this.annotations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseMapMetadata.prototype.centerLatitude = null;
        AIRichResponseMapMetadata.prototype.centerLongitude = null;
        AIRichResponseMapMetadata.prototype.latitudeDelta = null;
        AIRichResponseMapMetadata.prototype.longitudeDelta = null;
        AIRichResponseMapMetadata.prototype.annotations = $util.emptyArray;
        AIRichResponseMapMetadata.prototype.showInfoList = null;

        AIRichResponseMapMetadata.AIRichResponseMapAnnotation = (function() {

            function AIRichResponseMapAnnotation(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseMapAnnotation.prototype.annotationNumber = null;
            AIRichResponseMapAnnotation.prototype.latitude = null;
            AIRichResponseMapAnnotation.prototype.longitude = null;
            AIRichResponseMapAnnotation.prototype.title = null;
            AIRichResponseMapAnnotation.prototype.body = null;

            return AIRichResponseMapAnnotation;
        })();

        return AIRichResponseMapMetadata;
    })();

    proto.AIRichResponseMessage = (function() {

        function AIRichResponseMessage(p) {
            this.submessages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseMessage.prototype.messageType = null;
        AIRichResponseMessage.prototype.submessages = $util.emptyArray;
        AIRichResponseMessage.prototype.unifiedResponse = null;
        AIRichResponseMessage.prototype.contextInfo = null;

        return AIRichResponseMessage;
    })();

    proto.AIRichResponseMessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_TYPE_STANDARD"] = 1;
        return values;
    })();

    proto.AIRichResponseSubMessage = (function() {

        function AIRichResponseSubMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseSubMessage.prototype.messageType = null;
        AIRichResponseSubMessage.prototype.gridImageMetadata = null;
        AIRichResponseSubMessage.prototype.messageText = null;
        AIRichResponseSubMessage.prototype.imageMetadata = null;
        AIRichResponseSubMessage.prototype.codeMetadata = null;
        AIRichResponseSubMessage.prototype.tableMetadata = null;
        AIRichResponseSubMessage.prototype.dynamicMetadata = null;
        AIRichResponseSubMessage.prototype.latexMetadata = null;
        AIRichResponseSubMessage.prototype.mapMetadata = null;
        AIRichResponseSubMessage.prototype.contentItemsMetadata = null;

        return AIRichResponseSubMessage;
    })();

    proto.AIRichResponseSubMessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_GRID_IMAGE"] = 1;
        values[valuesById[2] = "AI_RICH_RESPONSE_TEXT"] = 2;
        values[valuesById[3] = "AI_RICH_RESPONSE_INLINE_IMAGE"] = 3;
        values[valuesById[4] = "AI_RICH_RESPONSE_TABLE"] = 4;
        values[valuesById[5] = "AI_RICH_RESPONSE_CODE"] = 5;
        values[valuesById[6] = "AI_RICH_RESPONSE_DYNAMIC"] = 6;
        values[valuesById[7] = "AI_RICH_RESPONSE_MAP"] = 7;
        values[valuesById[8] = "AI_RICH_RESPONSE_LATEX"] = 8;
        values[valuesById[9] = "AI_RICH_RESPONSE_CONTENT_ITEMS"] = 9;
        return values;
    })();

    proto.AIRichResponseTableMetadata = (function() {

        function AIRichResponseTableMetadata(p) {
            this.rows = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseTableMetadata.prototype.rows = $util.emptyArray;
        AIRichResponseTableMetadata.prototype.title = null;

        AIRichResponseTableMetadata.AIRichResponseTableRow = (function() {

            function AIRichResponseTableRow(p) {
                this.items = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIRichResponseTableRow.prototype.items = $util.emptyArray;
            AIRichResponseTableRow.prototype.isHeading = null;

            return AIRichResponseTableRow;
        })();

        return AIRichResponseTableMetadata;
    })();

    proto.AIRichResponseUnifiedResponse = (function() {

        function AIRichResponseUnifiedResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIRichResponseUnifiedResponse.prototype.data = null;

        return AIRichResponseUnifiedResponse;
    })();

    proto.AIThreadInfo = (function() {

        function AIThreadInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AIThreadInfo.prototype.serverInfo = null;
        AIThreadInfo.prototype.clientInfo = null;

        AIThreadInfo.AIThreadClientInfo = (function() {

            function AIThreadClientInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIThreadClientInfo.prototype.type = null;

            AIThreadClientInfo.AIThreadType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "DEFAULT"] = 1;
                values[valuesById[2] = "INCOGNITO"] = 2;
                return values;
            })();

            return AIThreadClientInfo;
        })();

        AIThreadInfo.AIThreadServerInfo = (function() {

            function AIThreadServerInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AIThreadServerInfo.prototype.title = null;

            return AIThreadServerInfo;
        })();

        return AIThreadInfo;
    })();

    proto.Account = (function() {

        function Account(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Account.prototype.lid = null;
        Account.prototype.username = null;
        Account.prototype.countryCode = null;
        Account.prototype.isUsernameDeleted = null;

        return Account;
    })();

    proto.ActionLink = (function() {

        function ActionLink(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ActionLink.prototype.url = null;
        ActionLink.prototype.buttonTitle = null;

        return ActionLink;
    })();

    proto.AutoDownloadSettings = (function() {

        function AutoDownloadSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AutoDownloadSettings.prototype.downloadImages = null;
        AutoDownloadSettings.prototype.downloadAudio = null;
        AutoDownloadSettings.prototype.downloadVideo = null;
        AutoDownloadSettings.prototype.downloadDocuments = null;

        return AutoDownloadSettings;
    })();

    proto.AvatarUserSettings = (function() {

        function AvatarUserSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        AvatarUserSettings.prototype.fbid = null;
        AvatarUserSettings.prototype.password = null;

        return AvatarUserSettings;
    })();

    proto.BizAccountLinkInfo = (function() {

        function BizAccountLinkInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizAccountLinkInfo.prototype.whatsappBizAcctFbid = null;
        BizAccountLinkInfo.prototype.whatsappAcctNumber = null;
        BizAccountLinkInfo.prototype.issueTime = null;
        BizAccountLinkInfo.prototype.hostStorage = null;
        BizAccountLinkInfo.prototype.accountType = null;

        BizAccountLinkInfo.AccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ENTERPRISE"] = 0;
            return values;
        })();

        BizAccountLinkInfo.HostStorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        return BizAccountLinkInfo;
    })();

    proto.BizAccountPayload = (function() {

        function BizAccountPayload(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizAccountPayload.prototype.vnameCert = null;
        BizAccountPayload.prototype.bizAcctLinkInfo = null;

        return BizAccountPayload;
    })();

    proto.BizIdentityInfo = (function() {

        function BizIdentityInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BizIdentityInfo.prototype.vlevel = null;
        BizIdentityInfo.prototype.vnameCert = null;
        BizIdentityInfo.prototype.signed = null;
        BizIdentityInfo.prototype.revoked = null;
        BizIdentityInfo.prototype.hostStorage = null;
        BizIdentityInfo.prototype.actualActors = null;
        BizIdentityInfo.prototype.privacyModeTs = null;
        BizIdentityInfo.prototype.featureControls = null;

        BizIdentityInfo.ActualActorsType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SELF"] = 0;
            values[valuesById[1] = "BSP"] = 1;
            return values;
        })();

        BizIdentityInfo.HostStorageType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        BizIdentityInfo.VerifiedLevelValue = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            return values;
        })();

        return BizIdentityInfo;
    })();

    proto.BotAgeCollectionMetadata = (function() {

        function BotAgeCollectionMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotAgeCollectionMetadata.prototype.ageCollectionEligible = null;
        BotAgeCollectionMetadata.prototype.shouldTriggerAgeCollectionOnClient = null;
        BotAgeCollectionMetadata.prototype.ageCollectionType = null;

        BotAgeCollectionMetadata.AgeCollectionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "O18_BINARY"] = 0;
            values[valuesById[1] = "WAFFLE"] = 1;
            return values;
        })();

        return BotAgeCollectionMetadata;
    })();

    proto.BotAvatarMetadata = (function() {

        function BotAvatarMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotAvatarMetadata.prototype.sentiment = null;
        BotAvatarMetadata.prototype.behaviorGraph = null;
        BotAvatarMetadata.prototype.action = null;
        BotAvatarMetadata.prototype.intensity = null;
        BotAvatarMetadata.prototype.wordCount = null;

        return BotAvatarMetadata;
    })();

    proto.BotCapabilityMetadata = (function() {

        function BotCapabilityMetadata(p) {
            this.capabilities = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotCapabilityMetadata.prototype.capabilities = $util.emptyArray;

        BotCapabilityMetadata.BotCapabilityType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PROGRESS_INDICATOR"] = 1;
            values[valuesById[2] = "RICH_RESPONSE_HEADING"] = 2;
            values[valuesById[3] = "RICH_RESPONSE_NESTED_LIST"] = 3;
            values[valuesById[4] = "AI_MEMORY"] = 4;
            values[valuesById[5] = "RICH_RESPONSE_THREAD_SURFING"] = 5;
            values[valuesById[6] = "RICH_RESPONSE_TABLE"] = 6;
            values[valuesById[7] = "RICH_RESPONSE_CODE"] = 7;
            values[valuesById[8] = "RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8;
            values[valuesById[9] = "RICH_RESPONSE_INLINE_IMAGE"] = 9;
            values[valuesById[10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10;
            values[valuesById[11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11;
            values[valuesById[12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12;
            values[valuesById[13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13;
            values[valuesById[14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14;
            values[valuesById[15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15;
            values[valuesById[16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16;
            values[valuesById[17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17;
            values[valuesById[18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18;
            values[valuesById[19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19;
            values[valuesById[20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20;
            values[valuesById[21] = "RICH_RESPONSE_SUB_HEADING"] = 21;
            values[valuesById[22] = "RICH_RESPONSE_GRID_IMAGE"] = 22;
            values[valuesById[23] = "AI_STUDIO_UGC_MEMORY"] = 23;
            values[valuesById[24] = "RICH_RESPONSE_LATEX"] = 24;
            values[valuesById[25] = "RICH_RESPONSE_MAPS"] = 25;
            values[valuesById[26] = "RICH_RESPONSE_INLINE_REELS"] = 26;
            values[valuesById[27] = "AGENTIC_PLANNING"] = 27;
            values[valuesById[28] = "ACCOUNT_LINKING"] = 28;
            values[valuesById[29] = "STREAMING_DISAGGREGATION"] = 29;
            values[valuesById[30] = "RICH_RESPONSE_GRID_IMAGE_3P"] = 30;
            values[valuesById[31] = "RICH_RESPONSE_LATEX_INLINE"] = 31;
            values[valuesById[32] = "QUERY_PLAN"] = 32;
            values[valuesById[33] = "PROACTIVE_MESSAGE"] = 33;
            values[valuesById[34] = "RICH_RESPONSE_UNIFIED_RESPONSE"] = 34;
            values[valuesById[35] = "PROMOTION_MESSAGE"] = 35;
            values[valuesById[36] = "SIMPLIFIED_PROFILE_PAGE"] = 36;
            values[valuesById[37] = "RICH_RESPONSE_SOURCES_IN_MESSAGE"] = 37;
            values[valuesById[38] = "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY"] = 38;
            values[valuesById[39] = "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT"] = 39;
            values[valuesById[40] = "AI_SHARED_MEMORY"] = 40;
            values[valuesById[41] = "RICH_RESPONSE_UNIFIED_SOURCES"] = 41;
            values[valuesById[42] = "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS"] = 42;
            values[valuesById[43] = "RICH_RESPONSE_UR_INLINE_REELS_ENABLED"] = 43;
            values[valuesById[44] = "RICH_RESPONSE_UR_MEDIA_GRID_ENABLED"] = 44;
            values[valuesById[45] = "RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER"] = 45;
            values[valuesById[46] = "RICH_RESPONSE_IN_APP_SURVEY"] = 46;
            values[valuesById[47] = "AI_RESPONSE_MODEL_BRANDING"] = 47;
            values[valuesById[48] = "SESSION_TRANSPARENCY_SYSTEM_MESSAGE"] = 48;
            values[valuesById[49] = "RICH_RESPONSE_UR_REASONING"] = 49;
            return values;
        })();

        return BotCapabilityMetadata;
    })();

    proto.BotFeedbackMessage = (function() {

        function BotFeedbackMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotFeedbackMessage.prototype.messageKey = null;
        BotFeedbackMessage.prototype.kind = null;
        BotFeedbackMessage.prototype.text = null;
        BotFeedbackMessage.prototype.kindNegative = null;
        BotFeedbackMessage.prototype.kindPositive = null;
        BotFeedbackMessage.prototype.kindReport = null;
        BotFeedbackMessage.prototype.sideBySideSurveyMetadata = null;

        BotFeedbackMessage.BotFeedbackKind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_FEEDBACK_POSITIVE"] = 0;
            values[valuesById[1] = "BOT_FEEDBACK_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[3] = "BOT_FEEDBACK_NEGATIVE_INTERESTING"] = 3;
            values[valuesById[4] = "BOT_FEEDBACK_NEGATIVE_ACCURATE"] = 4;
            values[valuesById[5] = "BOT_FEEDBACK_NEGATIVE_SAFE"] = 5;
            values[valuesById[6] = "BOT_FEEDBACK_NEGATIVE_OTHER"] = 6;
            values[valuesById[7] = "BOT_FEEDBACK_NEGATIVE_REFUSED"] = 7;
            values[valuesById[8] = "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING"] = 8;
            values[valuesById[9] = "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 9;
            values[valuesById[10] = "BOT_FEEDBACK_NEGATIVE_PERSONALIZED"] = 10;
            values[valuesById[11] = "BOT_FEEDBACK_NEGATIVE_CLARITY"] = 11;
            values[valuesById[12] = "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON"] = 12;
            values[valuesById[13] = "BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY"] = 13;
            values[valuesById[14] = "BOT_FEEDBACK_NEGATIVE"] = 14;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultipleNegative = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[4] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING"] = 4;
            values[valuesById[8] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE"] = 8;
            values[valuesById[16] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE"] = 16;
            values[valuesById[32] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER"] = 32;
            values[valuesById[64] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED"] = 64;
            values[valuesById[128] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING"] = 128;
            values[valuesById[256] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 256;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultiplePositive = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.ReportKind = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.SideBySideSurveyMetadata = (function() {

            function SideBySideSurveyMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SideBySideSurveyMetadata.prototype.selectedRequestId = null;
            SideBySideSurveyMetadata.prototype.surveyId = null;
            SideBySideSurveyMetadata.prototype.simonSessionFbid = null;
            SideBySideSurveyMetadata.prototype.responseOtid = null;
            SideBySideSurveyMetadata.prototype.responseTimestampMsString = null;
            SideBySideSurveyMetadata.prototype.isSelectedResponsePrimary = null;
            SideBySideSurveyMetadata.prototype.messageIdToEdit = null;
            SideBySideSurveyMetadata.prototype.analyticsData = null;
            SideBySideSurveyMetadata.prototype.metaAiAnalyticsData = null;

            SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData = (function() {

                function SideBySideSurveyAnalyticsData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SideBySideSurveyAnalyticsData.prototype.tessaEvent = null;
                SideBySideSurveyAnalyticsData.prototype.tessaSessionFbid = null;
                SideBySideSurveyAnalyticsData.prototype.simonSessionFbid = null;

                return SideBySideSurveyAnalyticsData;
            })();

            SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData = (function() {

                function SidebySideSurveyMetaAiAnalyticsData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SidebySideSurveyMetaAiAnalyticsData.prototype.surveyId = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.primaryResponseId = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.testArmName = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.timestampMsString = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.ctaImpressionEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.ctaClickEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.cardImpressionEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.responseEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.abandonEvent = null;

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData = (function() {

                    function SideBySideSurveyAbandonEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyAbandonEventData.prototype.abandonDwellTimeMsString = null;

                    return SideBySideSurveyAbandonEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData = (function() {

                    function SideBySideSurveyCTAClickEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyCTAClickEventData.prototype.isSurveyExpired = null;
                    SideBySideSurveyCTAClickEventData.prototype.clickDwellTimeMsString = null;

                    return SideBySideSurveyCTAClickEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData = (function() {

                    function SideBySideSurveyCTAImpressionEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyCTAImpressionEventData.prototype.isSurveyExpired = null;

                    return SideBySideSurveyCTAImpressionEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData = (function() {

                    function SideBySideSurveyCardImpressionEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    return SideBySideSurveyCardImpressionEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData = (function() {

                    function SideBySideSurveyResponseEventData(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SideBySideSurveyResponseEventData.prototype.responseDwellTimeMsString = null;
                    SideBySideSurveyResponseEventData.prototype.selectedResponseId = null;

                    return SideBySideSurveyResponseEventData;
                })();

                return SidebySideSurveyMetaAiAnalyticsData;
            })();

            return SideBySideSurveyMetadata;
        })();

        return BotFeedbackMessage;
    })();

    proto.BotImagineMetadata = (function() {

        function BotImagineMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotImagineMetadata.prototype.imagineType = null;

        BotImagineMetadata.ImagineType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "IMAGINE"] = 1;
            values[valuesById[2] = "MEMU"] = 2;
            values[valuesById[3] = "FLASH"] = 3;
            values[valuesById[4] = "EDIT"] = 4;
            return values;
        })();

        return BotImagineMetadata;
    })();

    proto.BotLinkedAccount = (function() {

        function BotLinkedAccount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotLinkedAccount.prototype.type = null;

        BotLinkedAccount.BotLinkedAccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_LINKED_ACCOUNT_TYPE_1P"] = 0;
            return values;
        })();

        return BotLinkedAccount;
    })();

    proto.BotLinkedAccountsMetadata = (function() {

        function BotLinkedAccountsMetadata(p) {
            this.accounts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotLinkedAccountsMetadata.prototype.accounts = $util.emptyArray;
        BotLinkedAccountsMetadata.prototype.acAuthTokens = null;
        BotLinkedAccountsMetadata.prototype.acErrorCode = null;

        return BotLinkedAccountsMetadata;
    })();

    proto.BotMediaMetadata = (function() {

        function BotMediaMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMediaMetadata.prototype.fileSha256 = null;
        BotMediaMetadata.prototype.mediaKey = null;
        BotMediaMetadata.prototype.fileEncSha256 = null;
        BotMediaMetadata.prototype.directPath = null;
        BotMediaMetadata.prototype.mediaKeyTimestamp = null;
        BotMediaMetadata.prototype.mimetype = null;
        BotMediaMetadata.prototype.orientationType = null;

        BotMediaMetadata.OrientationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "CENTER"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            values[valuesById[3] = "RIGHT"] = 3;
            return values;
        })();

        return BotMediaMetadata;
    })();

    proto.BotMemoryFact = (function() {

        function BotMemoryFact(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMemoryFact.prototype.fact = null;
        BotMemoryFact.prototype.factId = null;

        return BotMemoryFact;
    })();

    proto.BotMemoryMetadata = (function() {

        function BotMemoryMetadata(p) {
            this.addedFacts = [];
            this.removedFacts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMemoryMetadata.prototype.addedFacts = $util.emptyArray;
        BotMemoryMetadata.prototype.removedFacts = $util.emptyArray;
        BotMemoryMetadata.prototype.disclaimer = null;

        return BotMemoryMetadata;
    })();

    proto.BotMemuMetadata = (function() {

        function BotMemuMetadata(p) {
            this.faceImages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMemuMetadata.prototype.faceImages = $util.emptyArray;

        return BotMemuMetadata;
    })();

    proto.BotMessageOrigin = (function() {

        function BotMessageOrigin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMessageOrigin.prototype.type = null;

        BotMessageOrigin.BotMessageOriginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED"] = 0;
            return values;
        })();

        return BotMessageOrigin;
    })();

    proto.BotMessageOriginMetadata = (function() {

        function BotMessageOriginMetadata(p) {
            this.origins = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMessageOriginMetadata.prototype.origins = $util.emptyArray;

        return BotMessageOriginMetadata;
    })();

    proto.BotMessageSharingInfo = (function() {

        function BotMessageSharingInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMessageSharingInfo.prototype.botEntryPointOrigin = null;
        BotMessageSharingInfo.prototype.forwardScore = null;

        return BotMessageSharingInfo;
    })();

    proto.BotMetadata = (function() {

        function BotMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMetadata.prototype.avatarMetadata = null;
        BotMetadata.prototype.personaId = null;
        BotMetadata.prototype.pluginMetadata = null;
        BotMetadata.prototype.suggestedPromptMetadata = null;
        BotMetadata.prototype.invokerJid = null;
        BotMetadata.prototype.sessionMetadata = null;
        BotMetadata.prototype.memuMetadata = null;
        BotMetadata.prototype.timezone = null;
        BotMetadata.prototype.reminderMetadata = null;
        BotMetadata.prototype.modelMetadata = null;
        BotMetadata.prototype.messageDisclaimerText = null;
        BotMetadata.prototype.progressIndicatorMetadata = null;
        BotMetadata.prototype.capabilityMetadata = null;
        BotMetadata.prototype.imagineMetadata = null;
        BotMetadata.prototype.memoryMetadata = null;
        BotMetadata.prototype.renderingMetadata = null;
        BotMetadata.prototype.botMetricsMetadata = null;
        BotMetadata.prototype.botLinkedAccountsMetadata = null;
        BotMetadata.prototype.richResponseSourcesMetadata = null;
        BotMetadata.prototype.aiConversationContext = null;
        BotMetadata.prototype.botPromotionMessageMetadata = null;
        BotMetadata.prototype.botModeSelectionMetadata = null;
        BotMetadata.prototype.botQuotaMetadata = null;
        BotMetadata.prototype.botAgeCollectionMetadata = null;
        BotMetadata.prototype.conversationStarterPromptId = null;
        BotMetadata.prototype.botResponseId = null;
        BotMetadata.prototype.verificationMetadata = null;
        BotMetadata.prototype.unifiedResponseMutation = null;
        BotMetadata.prototype.botMessageOriginMetadata = null;
        BotMetadata.prototype.inThreadSurveyMetadata = null;
        BotMetadata.prototype.botThreadInfo = null;
        BotMetadata.prototype.regenerateMetadata = null;
        BotMetadata.prototype.sessionTransparencyMetadata = null;
        BotMetadata.prototype.internalMetadata = null;

        return BotMetadata;
    })();

    proto.BotMetricsEntryPoint = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNDEFINED_ENTRY_POINT"] = 0;
        values[valuesById[1] = "FAVICON"] = 1;
        values[valuesById[2] = "CHATLIST"] = 2;
        values[valuesById[3] = "AISEARCH_NULL_STATE_PAPER_PLANE"] = 3;
        values[valuesById[4] = "AISEARCH_NULL_STATE_SUGGESTION"] = 4;
        values[valuesById[5] = "AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5;
        values[valuesById[6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6;
        values[valuesById[7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7;
        values[valuesById[8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8;
        values[valuesById[9] = "AIVOICE_SEARCH_BAR"] = 9;
        values[valuesById[10] = "AIVOICE_FAVICON"] = 10;
        values[valuesById[11] = "AISTUDIO"] = 11;
        values[valuesById[12] = "DEEPLINK"] = 12;
        values[valuesById[13] = "NOTIFICATION"] = 13;
        values[valuesById[14] = "PROFILE_MESSAGE_BUTTON"] = 14;
        values[valuesById[15] = "FORWARD"] = 15;
        values[valuesById[16] = "APP_SHORTCUT"] = 16;
        values[valuesById[17] = "FF_FAMILY"] = 17;
        values[valuesById[18] = "AI_TAB"] = 18;
        values[valuesById[19] = "AI_HOME"] = 19;
        values[valuesById[20] = "AI_DEEPLINK_IMMERSIVE"] = 20;
        values[valuesById[21] = "AI_DEEPLINK"] = 21;
        values[valuesById[22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22;
        values[valuesById[23] = "UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23;
        values[valuesById[24] = "NEW_CHAT_AI_STUDIO"] = 24;
        values[valuesById[25] = "AIVOICE_FAVICON_CALL_HISTORY"] = 25;
        values[valuesById[26] = "ASK_META_AI_CONTEXT_MENU"] = 26;
        values[valuesById[27] = "ASK_META_AI_CONTEXT_MENU_1ON1"] = 27;
        values[valuesById[28] = "ASK_META_AI_CONTEXT_MENU_GROUP"] = 28;
        values[valuesById[29] = "INVOKE_META_AI_1ON1"] = 29;
        values[valuesById[30] = "INVOKE_META_AI_GROUP"] = 30;
        values[valuesById[31] = "META_AI_FORWARD"] = 31;
        values[valuesById[32] = "NEW_CHAT_AI_CONTACT"] = 32;
        values[valuesById[33] = "MESSAGE_QUICK_ACTION_1_ON_1_CHAT"] = 33;
        values[valuesById[34] = "MESSAGE_QUICK_ACTION_GROUP_CHAT"] = 34;
        values[valuesById[35] = "ATTACHMENT_TRAY_1_ON_1_CHAT"] = 35;
        values[valuesById[36] = "ATTACHMENT_TRAY_GROUP_CHAT"] = 36;
        values[valuesById[37] = "ASK_META_AI_MEDIA_VIEWER_1ON1"] = 37;
        values[valuesById[38] = "ASK_META_AI_MEDIA_VIEWER_GROUP"] = 38;
        return values;
    })();

    proto.BotMetricsMetadata = (function() {

        function BotMetricsMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotMetricsMetadata.prototype.destinationId = null;
        BotMetricsMetadata.prototype.destinationEntryPoint = null;
        BotMetricsMetadata.prototype.threadOrigin = null;

        return BotMetricsMetadata;
    })();

    proto.BotMetricsThreadEntryPoint = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "AI_TAB_THREAD"] = 1;
        values[valuesById[2] = "AI_HOME_THREAD"] = 2;
        values[valuesById[3] = "AI_DEEPLINK_IMMERSIVE_THREAD"] = 3;
        values[valuesById[4] = "AI_DEEPLINK_THREAD"] = 4;
        values[valuesById[5] = "ASK_META_AI_CONTEXT_MENU_THREAD"] = 5;
        return values;
    })();

    proto.BotModeSelectionMetadata = (function() {

        function BotModeSelectionMetadata(p) {
            this.mode = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotModeSelectionMetadata.prototype.mode = $util.emptyArray;

        BotModeSelectionMetadata.BotUserSelectionMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_MODE"] = 0;
            values[valuesById[1] = "REASONING_MODE"] = 1;
            return values;
        })();

        return BotModeSelectionMetadata;
    })();

    proto.BotModelMetadata = (function() {

        function BotModelMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotModelMetadata.prototype.modelType = null;
        BotModelMetadata.prototype.premiumModelStatus = null;
        BotModelMetadata.prototype.modelNameOverride = null;

        BotModelMetadata.ModelType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "LLAMA_PROD"] = 1;
            values[valuesById[2] = "LLAMA_PROD_PREMIUM"] = 2;
            return values;
        })();

        BotModelMetadata.PremiumModelStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "QUOTA_EXCEED_LIMIT"] = 2;
            return values;
        })();

        return BotModelMetadata;
    })();

    proto.BotPluginMetadata = (function() {

        function BotPluginMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPluginMetadata.prototype.provider = null;
        BotPluginMetadata.prototype.pluginType = null;
        BotPluginMetadata.prototype.thumbnailCdnUrl = null;
        BotPluginMetadata.prototype.profilePhotoCdnUrl = null;
        BotPluginMetadata.prototype.searchProviderUrl = null;
        BotPluginMetadata.prototype.referenceIndex = null;
        BotPluginMetadata.prototype.expectedLinksCount = null;
        BotPluginMetadata.prototype.searchQuery = null;
        BotPluginMetadata.prototype.parentPluginMessageKey = null;
        BotPluginMetadata.prototype.deprecatedField = null;
        BotPluginMetadata.prototype.parentPluginType = null;
        BotPluginMetadata.prototype.faviconCdnUrl = null;

        BotPluginMetadata.PluginType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PLUGIN"] = 0;
            values[valuesById[1] = "REELS"] = 1;
            values[valuesById[2] = "SEARCH"] = 2;
            return values;
        })();

        BotPluginMetadata.SearchProvider = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "BING"] = 1;
            values[valuesById[2] = "GOOGLE"] = 2;
            values[valuesById[3] = "SUPPORT"] = 3;
            return values;
        })();

        return BotPluginMetadata;
    })();

    proto.BotProgressIndicatorMetadata = (function() {

        function BotProgressIndicatorMetadata(p) {
            this.stepsMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotProgressIndicatorMetadata.prototype.progressDescription = null;
        BotProgressIndicatorMetadata.prototype.stepsMetadata = $util.emptyArray;

        BotProgressIndicatorMetadata.BotPlanningStepMetadata = (function() {

            function BotPlanningStepMetadata(p) {
                this.sourcesMetadata = [];
                this.sections = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotPlanningStepMetadata.prototype.statusTitle = null;
            BotPlanningStepMetadata.prototype.statusBody = null;
            BotPlanningStepMetadata.prototype.sourcesMetadata = $util.emptyArray;
            BotPlanningStepMetadata.prototype.status = null;
            BotPlanningStepMetadata.prototype.isReasoning = null;
            BotPlanningStepMetadata.prototype.isEnhancedSearch = null;
            BotPlanningStepMetadata.prototype.sections = $util.emptyArray;

            BotPlanningStepMetadata.BotPlanningSearchSourceMetadata = (function() {

                function BotPlanningSearchSourceMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                BotPlanningSearchSourceMetadata.prototype.title = null;
                BotPlanningSearchSourceMetadata.prototype.provider = null;
                BotPlanningSearchSourceMetadata.prototype.sourceUrl = null;
                BotPlanningSearchSourceMetadata.prototype.favIconUrl = null;

                return BotPlanningSearchSourceMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata = (function() {

                function BotPlanningSearchSourcesMetadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                BotPlanningSearchSourcesMetadata.prototype.sourceTitle = null;
                BotPlanningSearchSourcesMetadata.prototype.provider = null;
                BotPlanningSearchSourcesMetadata.prototype.sourceUrl = null;

                BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "OTHER"] = 1;
                    values[valuesById[2] = "GOOGLE"] = 2;
                    values[valuesById[3] = "BING"] = 3;
                    return values;
                })();

                return BotPlanningSearchSourcesMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningStepSectionMetadata = (function() {

                function BotPlanningStepSectionMetadata(p) {
                    this.sourcesMetadata = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                BotPlanningStepSectionMetadata.prototype.sectionTitle = null;
                BotPlanningStepSectionMetadata.prototype.sectionBody = null;
                BotPlanningStepSectionMetadata.prototype.sourcesMetadata = $util.emptyArray;

                return BotPlanningStepSectionMetadata;
            })();

            BotPlanningStepMetadata.BotSearchSourceProvider = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_PROVIDER"] = 0;
                values[valuesById[1] = "OTHER"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "BING"] = 3;
                return values;
            })();

            BotPlanningStepMetadata.PlanningStepStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "PLANNED"] = 1;
                values[valuesById[2] = "EXECUTING"] = 2;
                values[valuesById[3] = "FINISHED"] = 3;
                return values;
            })();

            return BotPlanningStepMetadata;
        })();

        return BotProgressIndicatorMetadata;
    })();

    proto.BotPromotionMessageMetadata = (function() {

        function BotPromotionMessageMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPromotionMessageMetadata.prototype.promotionType = null;
        BotPromotionMessageMetadata.prototype.buttonTitle = null;

        BotPromotionMessageMetadata.BotPromotionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "C50"] = 1;
            values[valuesById[2] = "SURVEY_PLATFORM"] = 2;
            return values;
        })();

        return BotPromotionMessageMetadata;
    })();

    proto.BotPromptSuggestion = (function() {

        function BotPromptSuggestion(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPromptSuggestion.prototype.prompt = null;
        BotPromptSuggestion.prototype.promptId = null;

        return BotPromptSuggestion;
    })();

    proto.BotPromptSuggestions = (function() {

        function BotPromptSuggestions(p) {
            this.suggestions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotPromptSuggestions.prototype.suggestions = $util.emptyArray;

        return BotPromptSuggestions;
    })();

    proto.BotQuotaMetadata = (function() {

        function BotQuotaMetadata(p) {
            this.botFeatureQuotaMetadata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotQuotaMetadata.prototype.botFeatureQuotaMetadata = $util.emptyArray;

        BotQuotaMetadata.BotFeatureQuotaMetadata = (function() {

            function BotFeatureQuotaMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotFeatureQuotaMetadata.prototype.featureType = null;
            BotFeatureQuotaMetadata.prototype.remainingQuota = null;
            BotFeatureQuotaMetadata.prototype.expirationTimestamp = null;

            BotFeatureQuotaMetadata.BotFeatureType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_FEATURE"] = 0;
                values[valuesById[1] = "REASONING_FEATURE"] = 1;
                return values;
            })();

            return BotFeatureQuotaMetadata;
        })();

        return BotQuotaMetadata;
    })();

    proto.BotReminderMetadata = (function() {

        function BotReminderMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotReminderMetadata.prototype.requestMessageKey = null;
        BotReminderMetadata.prototype.action = null;
        BotReminderMetadata.prototype.name = null;
        BotReminderMetadata.prototype.nextTriggerTimestamp = null;
        BotReminderMetadata.prototype.frequency = null;

        BotReminderMetadata.ReminderAction = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "NOTIFY"] = 1;
            values[valuesById[2] = "CREATE"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            values[valuesById[4] = "UPDATE"] = 4;
            return values;
        })();

        BotReminderMetadata.ReminderFrequency = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ONCE"] = 1;
            values[valuesById[2] = "DAILY"] = 2;
            values[valuesById[3] = "WEEKLY"] = 3;
            values[valuesById[4] = "BIWEEKLY"] = 4;
            values[valuesById[5] = "MONTHLY"] = 5;
            return values;
        })();

        return BotReminderMetadata;
    })();

    proto.BotRenderingMetadata = (function() {

        function BotRenderingMetadata(p) {
            this.keywords = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotRenderingMetadata.prototype.keywords = $util.emptyArray;

        BotRenderingMetadata.Keyword = (function() {

            function Keyword(p) {
                this.associatedPrompts = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Keyword.prototype.value = null;
            Keyword.prototype.associatedPrompts = $util.emptyArray;

            return Keyword;
        })();

        return BotRenderingMetadata;
    })();

    proto.BotSessionMetadata = (function() {

        function BotSessionMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSessionMetadata.prototype.sessionId = null;
        BotSessionMetadata.prototype.sessionSource = null;

        return BotSessionMetadata;
    })();

    proto.BotSessionSource = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "NULL_STATE"] = 1;
        values[valuesById[2] = "TYPEAHEAD"] = 2;
        values[valuesById[3] = "USER_INPUT"] = 3;
        values[valuesById[4] = "EMU_FLASH"] = 4;
        values[valuesById[5] = "EMU_FLASH_FOLLOWUP"] = 5;
        values[valuesById[6] = "VOICE"] = 6;
        return values;
    })();

    proto.BotSignatureVerificationMetadata = (function() {

        function BotSignatureVerificationMetadata(p) {
            this.proofs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSignatureVerificationMetadata.prototype.proofs = $util.emptyArray;

        return BotSignatureVerificationMetadata;
    })();

    proto.BotSignatureVerificationUseCaseProof = (function() {

        function BotSignatureVerificationUseCaseProof(p) {
            this.certificateChain = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSignatureVerificationUseCaseProof.prototype.version = null;
        BotSignatureVerificationUseCaseProof.prototype.useCase = null;
        BotSignatureVerificationUseCaseProof.prototype.signature = null;
        BotSignatureVerificationUseCaseProof.prototype.certificateChain = $util.emptyArray;

        BotSignatureVerificationUseCaseProof.BotSignatureUseCase = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "WA_BOT_MSG"] = 1;
            return values;
        })();

        return BotSignatureVerificationUseCaseProof;
    })();

    proto.BotSourcesMetadata = (function() {

        function BotSourcesMetadata(p) {
            this.sources = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSourcesMetadata.prototype.sources = $util.emptyArray;

        BotSourcesMetadata.BotSourceItem = (function() {

            function BotSourceItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotSourceItem.prototype.provider = null;
            BotSourceItem.prototype.thumbnailCdnUrl = null;
            BotSourceItem.prototype.sourceProviderUrl = null;
            BotSourceItem.prototype.sourceQuery = null;
            BotSourceItem.prototype.faviconCdnUrl = null;
            BotSourceItem.prototype.citationNumber = null;
            BotSourceItem.prototype.sourceTitle = null;

            BotSourceItem.SourceProvider = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "BING"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "SUPPORT"] = 3;
                values[valuesById[4] = "OTHER"] = 4;
                return values;
            })();

            return BotSourceItem;
        })();

        return BotSourcesMetadata;
    })();

    proto.BotSuggestedPromptMetadata = (function() {

        function BotSuggestedPromptMetadata(p) {
            this.suggestedPrompts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotSuggestedPromptMetadata.prototype.suggestedPrompts = $util.emptyArray;
        BotSuggestedPromptMetadata.prototype.selectedPromptIndex = null;
        BotSuggestedPromptMetadata.prototype.promptSuggestions = null;
        BotSuggestedPromptMetadata.prototype.selectedPromptId = null;

        return BotSuggestedPromptMetadata;
    })();

    proto.BotUnifiedResponseMutation = (function() {

        function BotUnifiedResponseMutation(p) {
            this.mediaDetailsMetadataList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        BotUnifiedResponseMutation.prototype.sbsMetadata = null;
        BotUnifiedResponseMutation.prototype.mediaDetailsMetadataList = $util.emptyArray;

        BotUnifiedResponseMutation.MediaDetailsMetadata = (function() {

            function MediaDetailsMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MediaDetailsMetadata.prototype.id = null;
            MediaDetailsMetadata.prototype.highResMedia = null;
            MediaDetailsMetadata.prototype.previewMedia = null;

            return MediaDetailsMetadata;
        })();

        BotUnifiedResponseMutation.SideBySideMetadata = (function() {

            function SideBySideMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SideBySideMetadata.prototype.primaryResponseId = null;
            SideBySideMetadata.prototype.surveyCtaHasRendered = null;

            return SideBySideMetadata;
        })();

        return BotUnifiedResponseMutation;
    })();

    proto.CallLogRecord = (function() {

        function CallLogRecord(p) {
            this.participants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CallLogRecord.prototype.callResult = null;
        CallLogRecord.prototype.isDndMode = null;
        CallLogRecord.prototype.silenceReason = null;
        CallLogRecord.prototype.duration = null;
        CallLogRecord.prototype.startTime = null;
        CallLogRecord.prototype.isIncoming = null;
        CallLogRecord.prototype.isVideo = null;
        CallLogRecord.prototype.isCallLink = null;
        CallLogRecord.prototype.callLinkToken = null;
        CallLogRecord.prototype.scheduledCallId = null;
        CallLogRecord.prototype.callId = null;
        CallLogRecord.prototype.callCreatorJid = null;
        CallLogRecord.prototype.groupJid = null;
        CallLogRecord.prototype.participants = $util.emptyArray;
        CallLogRecord.prototype.callType = null;

        CallLogRecord.CallResult = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CONNECTED"] = 0;
            values[valuesById[1] = "REJECTED"] = 1;
            values[valuesById[2] = "CANCELLED"] = 2;
            values[valuesById[3] = "ACCEPTEDELSEWHERE"] = 3;
            values[valuesById[4] = "MISSED"] = 4;
            values[valuesById[5] = "INVALID"] = 5;
            values[valuesById[6] = "UNAVAILABLE"] = 6;
            values[valuesById[7] = "UPCOMING"] = 7;
            values[valuesById[8] = "FAILED"] = 8;
            values[valuesById[9] = "ABANDONED"] = 9;
            values[valuesById[10] = "ONGOING"] = 10;
            return values;
        })();

        CallLogRecord.CallType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REGULAR"] = 0;
            values[valuesById[1] = "SCHEDULED_CALL"] = 1;
            values[valuesById[2] = "VOICE_CHAT"] = 2;
            return values;
        })();

        CallLogRecord.ParticipantInfo = (function() {

            function ParticipantInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ParticipantInfo.prototype.userJid = null;
            ParticipantInfo.prototype.callResult = null;

            return ParticipantInfo;
        })();

        CallLogRecord.SilenceReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "SCHEDULED"] = 1;
            values[valuesById[2] = "PRIVACY"] = 2;
            values[valuesById[3] = "LIGHTWEIGHT"] = 3;
            return values;
        })();

        return CallLogRecord;
    })();

    proto.CertChain = (function() {

        function CertChain(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CertChain.prototype.leaf = null;
        CertChain.prototype.intermediate = null;

        CertChain.NoiseCertificate = (function() {

            function NoiseCertificate(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NoiseCertificate.prototype.details = null;
            NoiseCertificate.prototype.signature = null;

            NoiseCertificate.Details = (function() {

                function Details(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Details.prototype.serial = null;
                Details.prototype.issuerSerial = null;
                Details.prototype.key = null;
                Details.prototype.notBefore = null;
                Details.prototype.notAfter = null;

                return Details;
            })();

            return NoiseCertificate;
        })();

        return CertChain;
    })();

    proto.ChatLockSettings = (function() {

        function ChatLockSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ChatLockSettings.prototype.hideLockedChats = null;
        ChatLockSettings.prototype.secretCode = null;

        return ChatLockSettings;
    })();

    proto.ChatRowOpaqueData = (function() {

        function ChatRowOpaqueData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ChatRowOpaqueData.prototype.draftMessage = null;

        ChatRowOpaqueData.DraftMessage = (function() {

            function DraftMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DraftMessage.prototype.text = null;
            DraftMessage.prototype.omittedUrl = null;
            DraftMessage.prototype.ctwaContextLinkData = null;
            DraftMessage.prototype.ctwaContext = null;
            DraftMessage.prototype.timestamp = null;

            DraftMessage.CtwaContextData = (function() {

                function CtwaContextData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CtwaContextData.prototype.conversionSource = null;
                CtwaContextData.prototype.conversionData = null;
                CtwaContextData.prototype.sourceUrl = null;
                CtwaContextData.prototype.sourceId = null;
                CtwaContextData.prototype.sourceType = null;
                CtwaContextData.prototype.title = null;
                CtwaContextData.prototype.description = null;
                CtwaContextData.prototype.thumbnail = null;
                CtwaContextData.prototype.thumbnailUrl = null;
                CtwaContextData.prototype.mediaType = null;
                CtwaContextData.prototype.mediaUrl = null;
                CtwaContextData.prototype.isSuspiciousLink = null;

                CtwaContextData.ContextInfoExternalAdReplyInfoMediaType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NONE"] = 0;
                    values[valuesById[1] = "IMAGE"] = 1;
                    values[valuesById[2] = "VIDEO"] = 2;
                    return values;
                })();

                return CtwaContextData;
            })();

            DraftMessage.CtwaContextLinkData = (function() {

                function CtwaContextLinkData(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CtwaContextLinkData.prototype.context = null;
                CtwaContextLinkData.prototype.sourceUrl = null;
                CtwaContextLinkData.prototype.icebreaker = null;
                CtwaContextLinkData.prototype.phone = null;

                return CtwaContextLinkData;
            })();

            return DraftMessage;
        })();

        return ChatRowOpaqueData;
    })();

    proto.Citation = (function() {

        function Citation(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Citation.prototype.title = "";
        Citation.prototype.subtitle = "";
        Citation.prototype.cmsId = "";
        Citation.prototype.imageUrl = "";

        return Citation;
    })();

    proto.ClientPairingProps = (function() {

        function ClientPairingProps(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ClientPairingProps.prototype.isChatDbLidMigrated = null;
        ClientPairingProps.prototype.isSyncdPureLidSession = null;
        ClientPairingProps.prototype.isSyncdSnapshotRecoveryEnabled = null;

        return ClientPairingProps;
    })();

    proto.ClientPayload = (function() {

        function ClientPayload(p) {
            this.shards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ClientPayload.prototype.username = null;
        ClientPayload.prototype.passive = null;
        ClientPayload.prototype.userAgent = null;
        ClientPayload.prototype.webInfo = null;
        ClientPayload.prototype.pushName = null;
        ClientPayload.prototype.sessionId = null;
        ClientPayload.prototype.shortConnect = null;
        ClientPayload.prototype.connectType = null;
        ClientPayload.prototype.connectReason = null;
        ClientPayload.prototype.shards = $util.emptyArray;
        ClientPayload.prototype.dnsSource = null;
        ClientPayload.prototype.connectAttemptCount = null;
        ClientPayload.prototype.device = null;
        ClientPayload.prototype.devicePairingData = null;
        ClientPayload.prototype.product = null;
        ClientPayload.prototype.fbCat = null;
        ClientPayload.prototype.fbUserAgent = null;
        ClientPayload.prototype.oc = null;
        ClientPayload.prototype.lc = null;
        ClientPayload.prototype.iosAppExtension = null;
        ClientPayload.prototype.fbAppId = null;
        ClientPayload.prototype.fbDeviceId = null;
        ClientPayload.prototype.pull = null;
        ClientPayload.prototype.paddingBytes = null;
        ClientPayload.prototype.yearClass = null;
        ClientPayload.prototype.memClass = null;
        ClientPayload.prototype.interopData = null;
        ClientPayload.prototype.trafficAnonymization = null;
        ClientPayload.prototype.lidDbMigrated = null;
        ClientPayload.prototype.accountType = null;
        ClientPayload.prototype.connectionSequenceInfo = null;
        ClientPayload.prototype.paaLink = null;
        ClientPayload.prototype.preacksCount = null;
        ClientPayload.prototype.processingQueueSize = null;

        ClientPayload.AccountType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "GUEST"] = 1;
            return values;
        })();

        ClientPayload.ConnectReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PUSH"] = 0;
            values[valuesById[1] = "USER_ACTIVATED"] = 1;
            values[valuesById[2] = "SCHEDULED"] = 2;
            values[valuesById[3] = "ERROR_RECONNECT"] = 3;
            values[valuesById[4] = "NETWORK_SWITCH"] = 4;
            values[valuesById[5] = "PING_RECONNECT"] = 5;
            values[valuesById[6] = "UNKNOWN"] = 6;
            return values;
        })();

        ClientPayload.ConnectType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CELLULAR_UNKNOWN"] = 0;
            values[valuesById[1] = "WIFI_UNKNOWN"] = 1;
            values[valuesById[100] = "CELLULAR_EDGE"] = 100;
            values[valuesById[101] = "CELLULAR_IDEN"] = 101;
            values[valuesById[102] = "CELLULAR_UMTS"] = 102;
            values[valuesById[103] = "CELLULAR_EVDO"] = 103;
            values[valuesById[104] = "CELLULAR_GPRS"] = 104;
            values[valuesById[105] = "CELLULAR_HSDPA"] = 105;
            values[valuesById[106] = "CELLULAR_HSUPA"] = 106;
            values[valuesById[107] = "CELLULAR_HSPA"] = 107;
            values[valuesById[108] = "CELLULAR_CDMA"] = 108;
            values[valuesById[109] = "CELLULAR_1XRTT"] = 109;
            values[valuesById[110] = "CELLULAR_EHRPD"] = 110;
            values[valuesById[111] = "CELLULAR_LTE"] = 111;
            values[valuesById[112] = "CELLULAR_HSPAP"] = 112;
            return values;
        })();

        ClientPayload.DNSSource = (function() {

            function DNSSource(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DNSSource.prototype.dnsMethod = null;
            DNSSource.prototype.appCached = null;

            DNSSource.DNSResolutionMethod = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SYSTEM"] = 0;
                values[valuesById[1] = "GOOGLE"] = 1;
                values[valuesById[2] = "HARDCODED"] = 2;
                values[valuesById[3] = "OVERRIDE"] = 3;
                values[valuesById[4] = "FALLBACK"] = 4;
                values[valuesById[5] = "MNS"] = 5;
                return values;
            })();

            return DNSSource;
        })();

        ClientPayload.DevicePairingRegistrationData = (function() {

            function DevicePairingRegistrationData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DevicePairingRegistrationData.prototype.eRegid = null;
            DevicePairingRegistrationData.prototype.eKeytype = null;
            DevicePairingRegistrationData.prototype.eIdent = null;
            DevicePairingRegistrationData.prototype.eSkeyId = null;
            DevicePairingRegistrationData.prototype.eSkeyVal = null;
            DevicePairingRegistrationData.prototype.eSkeySig = null;
            DevicePairingRegistrationData.prototype.buildHash = null;
            DevicePairingRegistrationData.prototype.deviceProps = null;

            return DevicePairingRegistrationData;
        })();

        ClientPayload.IOSAppExtension = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SHARE_EXTENSION"] = 0;
            values[valuesById[1] = "SERVICE_EXTENSION"] = 1;
            values[valuesById[2] = "INTENTS_EXTENSION"] = 2;
            return values;
        })();

        ClientPayload.InteropData = (function() {

            function InteropData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteropData.prototype.accountId = null;
            InteropData.prototype.token = null;
            InteropData.prototype.enableReadReceipts = null;

            return InteropData;
        })();

        ClientPayload.Product = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WHATSAPP"] = 0;
            values[valuesById[1] = "MESSENGER"] = 1;
            values[valuesById[2] = "INTEROP"] = 2;
            values[valuesById[3] = "INTEROP_MSGR"] = 3;
            values[valuesById[4] = "WHATSAPP_LID"] = 4;
            return values;
        })();

        ClientPayload.TrafficAnonymization = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OFF"] = 0;
            values[valuesById[1] = "STANDARD"] = 1;
            return values;
        })();

        ClientPayload.UserAgent = (function() {

            function UserAgent(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UserAgent.prototype.platform = null;
            UserAgent.prototype.appVersion = null;
            UserAgent.prototype.mcc = null;
            UserAgent.prototype.mnc = null;
            UserAgent.prototype.osVersion = null;
            UserAgent.prototype.manufacturer = null;
            UserAgent.prototype.device = null;
            UserAgent.prototype.osBuildNumber = null;
            UserAgent.prototype.phoneId = null;
            UserAgent.prototype.releaseChannel = null;
            UserAgent.prototype.localeLanguageIso6391 = null;
            UserAgent.prototype.localeCountryIso31661Alpha2 = null;
            UserAgent.prototype.deviceBoard = null;
            UserAgent.prototype.deviceExpId = null;
            UserAgent.prototype.deviceType = null;
            UserAgent.prototype.deviceModelType = null;

            UserAgent.AppVersion = (function() {

                function AppVersion(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                AppVersion.prototype.primary = null;
                AppVersion.prototype.secondary = null;
                AppVersion.prototype.tertiary = null;
                AppVersion.prototype.quaternary = null;
                AppVersion.prototype.quinary = null;

                return AppVersion;
            })();

            UserAgent.DeviceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PHONE"] = 0;
                values[valuesById[1] = "TABLET"] = 1;
                values[valuesById[2] = "DESKTOP"] = 2;
                values[valuesById[3] = "WEARABLE"] = 3;
                values[valuesById[4] = "VR"] = 4;
                return values;
            })();

            UserAgent.Platform = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ANDROID"] = 0;
                values[valuesById[1] = "IOS"] = 1;
                values[valuesById[2] = "WINDOWS_PHONE"] = 2;
                values[valuesById[3] = "BLACKBERRY"] = 3;
                values[valuesById[4] = "BLACKBERRYX"] = 4;
                values[valuesById[5] = "S40"] = 5;
                values[valuesById[6] = "S60"] = 6;
                values[valuesById[7] = "PYTHON_CLIENT"] = 7;
                values[valuesById[8] = "TIZEN"] = 8;
                values[valuesById[9] = "ENTERPRISE"] = 9;
                values[valuesById[10] = "SMB_ANDROID"] = 10;
                values[valuesById[11] = "KAIOS"] = 11;
                values[valuesById[12] = "SMB_IOS"] = 12;
                values[valuesById[13] = "WINDOWS"] = 13;
                values[valuesById[14] = "WEB"] = 14;
                values[valuesById[15] = "PORTAL"] = 15;
                values[valuesById[16] = "GREEN_ANDROID"] = 16;
                values[valuesById[17] = "GREEN_IPHONE"] = 17;
                values[valuesById[18] = "BLUE_ANDROID"] = 18;
                values[valuesById[19] = "BLUE_IPHONE"] = 19;
                values[valuesById[20] = "FBLITE_ANDROID"] = 20;
                values[valuesById[21] = "MLITE_ANDROID"] = 21;
                values[valuesById[22] = "IGLITE_ANDROID"] = 22;
                values[valuesById[23] = "PAGE"] = 23;
                values[valuesById[24] = "MACOS"] = 24;
                values[valuesById[25] = "OCULUS_MSG"] = 25;
                values[valuesById[26] = "OCULUS_CALL"] = 26;
                values[valuesById[27] = "MILAN"] = 27;
                values[valuesById[28] = "CAPI"] = 28;
                values[valuesById[29] = "WEAROS"] = 29;
                values[valuesById[30] = "ARDEVICE"] = 30;
                values[valuesById[31] = "VRDEVICE"] = 31;
                values[valuesById[32] = "BLUE_WEB"] = 32;
                values[valuesById[33] = "IPAD"] = 33;
                values[valuesById[34] = "TEST"] = 34;
                values[valuesById[35] = "SMART_GLASSES"] = 35;
                values[valuesById[36] = "BLUE_VR"] = 36;
                values[valuesById[37] = "AR_WRIST"] = 37;
                return values;
            })();

            UserAgent.ReleaseChannel = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "RELEASE"] = 0;
                values[valuesById[1] = "BETA"] = 1;
                values[valuesById[2] = "ALPHA"] = 2;
                values[valuesById[3] = "DEBUG"] = 3;
                return values;
            })();

            return UserAgent;
        })();

        ClientPayload.WebInfo = (function() {

            function WebInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            WebInfo.prototype.refToken = null;
            WebInfo.prototype.version = null;
            WebInfo.prototype.webdPayload = null;
            WebInfo.prototype.webSubPlatform = null;

            WebInfo.WebSubPlatform = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "WEB_BROWSER"] = 0;
                values[valuesById[1] = "APP_STORE"] = 1;
                values[valuesById[2] = "WIN_STORE"] = 2;
                values[valuesById[3] = "DARWIN"] = 3;
                values[valuesById[4] = "WIN32"] = 4;
                values[valuesById[5] = "WIN_HYBRID"] = 5;
                return values;
            })();

            WebInfo.WebdPayload = (function() {

                function WebdPayload(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                WebdPayload.prototype.usesParticipantInKey = null;
                WebdPayload.prototype.supportsStarredMessages = null;
                WebdPayload.prototype.supportsDocumentMessages = null;
                WebdPayload.prototype.supportsUrlMessages = null;
                WebdPayload.prototype.supportsMediaRetry = null;
                WebdPayload.prototype.supportsE2EImage = null;
                WebdPayload.prototype.supportsE2EVideo = null;
                WebdPayload.prototype.supportsE2EAudio = null;
                WebdPayload.prototype.supportsE2EDocument = null;
                WebdPayload.prototype.documentTypes = null;
                WebdPayload.prototype.features = null;

                return WebdPayload;
            })();

            return WebInfo;
        })();

        return ClientPayload;
    })();

    proto.CollectionName = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COLLECTION_NAME_UNKNOWN"] = 0;
        values[valuesById[1] = "REGULAR"] = 1;
        values[valuesById[2] = "REGULAR_LOW"] = 2;
        values[valuesById[3] = "REGULAR_HIGH"] = 3;
        values[valuesById[4] = "CRITICAL_BLOCK"] = 4;
        values[valuesById[5] = "CRITICAL_UNBLOCK_LOW"] = 5;
        return values;
    })();

    proto.CommentMetadata = (function() {

        function CommentMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CommentMetadata.prototype.commentParentKey = null;
        CommentMetadata.prototype.replyCount = null;

        return CommentMetadata;
    })();

    proto.CompanionCommitment = (function() {

        function CompanionCommitment(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CompanionCommitment.prototype.hash = null;

        return CompanionCommitment;
    })();

    proto.CompanionEphemeralIdentity = (function() {

        function CompanionEphemeralIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        CompanionEphemeralIdentity.prototype.publicKey = null;
        CompanionEphemeralIdentity.prototype.deviceType = null;
        CompanionEphemeralIdentity.prototype.ref = null;

        return CompanionEphemeralIdentity;
    })();

    proto.Config = (function() {

        function Config(p) {
            this.field = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Config.prototype.field = $util.emptyObject;
        Config.prototype.version = null;

        return Config;
    })();

    proto.ContextInfo = (function() {

        function ContextInfo(p) {
            this.mentionedJid = [];
            this.groupMentions = [];
            this.statusAttributions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ContextInfo.prototype.stanzaId = null;
        ContextInfo.prototype.participant = null;
        ContextInfo.prototype.quotedMessage = null;
        ContextInfo.prototype.remoteJid = null;
        ContextInfo.prototype.mentionedJid = $util.emptyArray;
        ContextInfo.prototype.conversionSource = null;
        ContextInfo.prototype.conversionData = null;
        ContextInfo.prototype.conversionDelaySeconds = null;
        ContextInfo.prototype.forwardingScore = null;
        ContextInfo.prototype.isForwarded = null;
        ContextInfo.prototype.quotedAd = null;
        ContextInfo.prototype.placeholderKey = null;
        ContextInfo.prototype.expiration = null;
        ContextInfo.prototype.ephemeralSettingTimestamp = null;
        ContextInfo.prototype.ephemeralSharedSecret = null;
        ContextInfo.prototype.externalAdReply = null;
        ContextInfo.prototype.entryPointConversionSource = null;
        ContextInfo.prototype.entryPointConversionApp = null;
        ContextInfo.prototype.entryPointConversionDelaySeconds = null;
        ContextInfo.prototype.disappearingMode = null;
        ContextInfo.prototype.actionLink = null;
        ContextInfo.prototype.groupSubject = null;
        ContextInfo.prototype.parentGroupJid = null;
        ContextInfo.prototype.trustBannerType = null;
        ContextInfo.prototype.trustBannerAction = null;
        ContextInfo.prototype.isSampled = null;
        ContextInfo.prototype.groupMentions = $util.emptyArray;
        ContextInfo.prototype.utm = null;
        ContextInfo.prototype.forwardedNewsletterMessageInfo = null;
        ContextInfo.prototype.businessMessageForwardInfo = null;
        ContextInfo.prototype.smbClientCampaignId = null;
        ContextInfo.prototype.smbServerCampaignId = null;
        ContextInfo.prototype.dataSharingContext = null;
        ContextInfo.prototype.alwaysShowAdAttribution = null;
        ContextInfo.prototype.featureEligibilities = null;
        ContextInfo.prototype.entryPointConversionExternalSource = null;
        ContextInfo.prototype.entryPointConversionExternalMedium = null;
        ContextInfo.prototype.ctwaSignals = null;
        ContextInfo.prototype.ctwaPayload = null;
        ContextInfo.prototype.forwardedAiBotMessageInfo = null;
        ContextInfo.prototype.statusAttributionType = null;
        ContextInfo.prototype.urlTrackingMap = null;
        ContextInfo.prototype.pairedMediaType = null;
        ContextInfo.prototype.rankingVersion = null;
        ContextInfo.prototype.memberLabel = null;
        ContextInfo.prototype.isQuestion = null;
        ContextInfo.prototype.statusSourceType = null;
        ContextInfo.prototype.statusAttributions = $util.emptyArray;
        ContextInfo.prototype.isGroupStatus = null;
        ContextInfo.prototype.forwardOrigin = null;
        ContextInfo.prototype.questionReplyQuotedMessage = null;
        ContextInfo.prototype.statusAudienceMetadata = null;
        ContextInfo.prototype.nonJidMentions = null;
        ContextInfo.prototype.quotedType = null;
        ContextInfo.prototype.botMessageSharingInfo = null;

        ContextInfo.AdReplyInfo = (function() {

            function AdReplyInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AdReplyInfo.prototype.advertiserName = null;
            AdReplyInfo.prototype.mediaType = null;
            AdReplyInfo.prototype.jpegThumbnail = null;
            AdReplyInfo.prototype.caption = null;

            AdReplyInfo.MediaType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "IMAGE"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return AdReplyInfo;
        })();

        ContextInfo.BusinessMessageForwardInfo = (function() {

            function BusinessMessageForwardInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BusinessMessageForwardInfo.prototype.businessOwnerJid = null;

            return BusinessMessageForwardInfo;
        })();

        ContextInfo.DataSharingContext = (function() {

            function DataSharingContext(p) {
                this.parameters = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DataSharingContext.prototype.showMmDisclosure = null;
            DataSharingContext.prototype.encryptedSignalTokenConsented = null;
            DataSharingContext.prototype.parameters = $util.emptyArray;
            DataSharingContext.prototype.dataSharingFlags = null;

            DataSharingContext.DataSharingFlags = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "SHOW_MM_DISCLOSURE_ON_CLICK"] = 1;
                values[valuesById[2] = "SHOW_MM_DISCLOSURE_ON_READ"] = 2;
                return values;
            })();

            DataSharingContext.Parameters = (function() {

                function Parameters(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Parameters.prototype.key = null;
                Parameters.prototype.stringData = null;
                Parameters.prototype.intData = null;
                Parameters.prototype.floatData = null;
                Parameters.prototype.contents = null;

                return Parameters;
            })();

            return DataSharingContext;
        })();

        ContextInfo.ExternalAdReplyInfo = (function() {

            function ExternalAdReplyInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExternalAdReplyInfo.prototype.title = null;
            ExternalAdReplyInfo.prototype.body = null;
            ExternalAdReplyInfo.prototype.mediaType = null;
            ExternalAdReplyInfo.prototype.thumbnailUrl = null;
            ExternalAdReplyInfo.prototype.mediaUrl = null;
            ExternalAdReplyInfo.prototype.thumbnail = null;
            ExternalAdReplyInfo.prototype.sourceType = null;
            ExternalAdReplyInfo.prototype.sourceId = null;
            ExternalAdReplyInfo.prototype.sourceUrl = null;
            ExternalAdReplyInfo.prototype.containsAutoReply = null;
            ExternalAdReplyInfo.prototype.renderLargerThumbnail = null;
            ExternalAdReplyInfo.prototype.showAdAttribution = null;
            ExternalAdReplyInfo.prototype.ctwaClid = null;
            ExternalAdReplyInfo.prototype.ref = null;
            ExternalAdReplyInfo.prototype.clickToWhatsappCall = null;
            ExternalAdReplyInfo.prototype.adContextPreviewDismissed = null;
            ExternalAdReplyInfo.prototype.sourceApp = null;
            ExternalAdReplyInfo.prototype.automatedGreetingMessageShown = null;
            ExternalAdReplyInfo.prototype.greetingMessageBody = null;
            ExternalAdReplyInfo.prototype.ctaPayload = null;
            ExternalAdReplyInfo.prototype.disableNudge = null;
            ExternalAdReplyInfo.prototype.originalImageUrl = null;
            ExternalAdReplyInfo.prototype.automatedGreetingMessageCtaType = null;
            ExternalAdReplyInfo.prototype.wtwaAdFormat = null;
            ExternalAdReplyInfo.prototype.adType = null;
            ExternalAdReplyInfo.prototype.wtwaWebsiteUrl = null;
            ExternalAdReplyInfo.prototype.adPreviewUrl = null;

            ExternalAdReplyInfo.AdType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CTWA"] = 0;
                values[valuesById[1] = "CAWC"] = 1;
                return values;
            })();

            ExternalAdReplyInfo.MediaType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "IMAGE"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return ExternalAdReplyInfo;
        })();

        ContextInfo.FeatureEligibilities = (function() {

            function FeatureEligibilities(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FeatureEligibilities.prototype.cannotBeReactedTo = null;
            FeatureEligibilities.prototype.cannotBeRanked = null;
            FeatureEligibilities.prototype.canRequestFeedback = null;
            FeatureEligibilities.prototype.canBeReshared = null;
            FeatureEligibilities.prototype.canReceiveMultiReact = null;

            return FeatureEligibilities;
        })();

        ContextInfo.ForwardOrigin = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT"] = 1;
            values[valuesById[2] = "STATUS"] = 2;
            values[valuesById[3] = "CHANNELS"] = 3;
            values[valuesById[4] = "META_AI"] = 4;
            values[valuesById[5] = "UGC"] = 5;
            return values;
        })();

        ContextInfo.ForwardedNewsletterMessageInfo = (function() {

            function ForwardedNewsletterMessageInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ForwardedNewsletterMessageInfo.prototype.newsletterJid = null;
            ForwardedNewsletterMessageInfo.prototype.serverMessageId = null;
            ForwardedNewsletterMessageInfo.prototype.newsletterName = null;
            ForwardedNewsletterMessageInfo.prototype.contentType = null;
            ForwardedNewsletterMessageInfo.prototype.accessibilityText = null;

            ForwardedNewsletterMessageInfo.ContentType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "UPDATE"] = 1;
                values[valuesById[2] = "UPDATE_CARD"] = 2;
                values[valuesById[3] = "LINK_CARD"] = 3;
                return values;
            })();

            return ForwardedNewsletterMessageInfo;
        })();

        ContextInfo.PairedMediaType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_PAIRED_MEDIA"] = 0;
            values[valuesById[1] = "SD_VIDEO_PARENT"] = 1;
            values[valuesById[2] = "HD_VIDEO_CHILD"] = 2;
            values[valuesById[3] = "SD_IMAGE_PARENT"] = 3;
            values[valuesById[4] = "HD_IMAGE_CHILD"] = 4;
            values[valuesById[5] = "MOTION_PHOTO_PARENT"] = 5;
            values[valuesById[6] = "MOTION_PHOTO_CHILD"] = 6;
            values[valuesById[7] = "HEVC_VIDEO_PARENT"] = 7;
            values[valuesById[8] = "HEVC_VIDEO_CHILD"] = 8;
            return values;
        })();

        ContextInfo.QuestionReplyQuotedMessage = (function() {

            function QuestionReplyQuotedMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            QuestionReplyQuotedMessage.prototype.serverQuestionId = null;
            QuestionReplyQuotedMessage.prototype.quotedQuestion = null;
            QuestionReplyQuotedMessage.prototype.quotedResponse = null;

            return QuestionReplyQuotedMessage;
        })();

        ContextInfo.QuotedType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EXPLICIT"] = 0;
            values[valuesById[1] = "AUTO"] = 1;
            return values;
        })();

        ContextInfo.StatusAttributionType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "RESHARED_FROM_MENTION"] = 1;
            values[valuesById[2] = "RESHARED_FROM_POST"] = 2;
            values[valuesById[3] = "RESHARED_FROM_POST_MANY_TIMES"] = 3;
            values[valuesById[4] = "FORWARDED_FROM_STATUS"] = 4;
            return values;
        })();

        ContextInfo.StatusAudienceMetadata = (function() {

            function StatusAudienceMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusAudienceMetadata.prototype.audienceType = null;

            StatusAudienceMetadata.AudienceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "CLOSE_FRIENDS"] = 1;
                return values;
            })();

            return StatusAudienceMetadata;
        })();

        ContextInfo.StatusSourceType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IMAGE"] = 0;
            values[valuesById[1] = "VIDEO"] = 1;
            values[valuesById[2] = "GIF"] = 2;
            values[valuesById[3] = "AUDIO"] = 3;
            values[valuesById[4] = "TEXT"] = 4;
            values[valuesById[5] = "MUSIC_STANDALONE"] = 5;
            return values;
        })();

        ContextInfo.UTMInfo = (function() {

            function UTMInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UTMInfo.prototype.utmSource = null;
            UTMInfo.prototype.utmCampaign = null;

            return UTMInfo;
        })();

        return ContextInfo;
    })();

    proto.Conversation = (function() {

        function Conversation(p) {
            this.messages = [];
            this.participant = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Conversation.prototype.id = "";
        Conversation.prototype.messages = $util.emptyArray;
        Conversation.prototype.newJid = null;
        Conversation.prototype.oldJid = null;
        Conversation.prototype.lastMsgTimestamp = null;
        Conversation.prototype.unreadCount = null;
        Conversation.prototype.readOnly = null;
        Conversation.prototype.endOfHistoryTransfer = null;
        Conversation.prototype.ephemeralExpiration = null;
        Conversation.prototype.ephemeralSettingTimestamp = null;
        Conversation.prototype.endOfHistoryTransferType = null;
        Conversation.prototype.conversationTimestamp = null;
        Conversation.prototype.name = null;
        Conversation.prototype.pHash = null;
        Conversation.prototype.notSpam = null;
        Conversation.prototype.archived = null;
        Conversation.prototype.disappearingMode = null;
        Conversation.prototype.unreadMentionCount = null;
        Conversation.prototype.markedAsUnread = null;
        Conversation.prototype.participant = $util.emptyArray;
        Conversation.prototype.tcToken = null;
        Conversation.prototype.tcTokenTimestamp = null;
        Conversation.prototype.contactPrimaryIdentityKey = null;
        Conversation.prototype.pinned = null;
        Conversation.prototype.muteEndTime = null;
        Conversation.prototype.wallpaper = null;
        Conversation.prototype.mediaVisibility = null;
        Conversation.prototype.tcTokenSenderTimestamp = null;
        Conversation.prototype.suspended = null;
        Conversation.prototype.terminated = null;
        Conversation.prototype.createdAt = null;
        Conversation.prototype.createdBy = null;
        Conversation.prototype.description = null;
        Conversation.prototype.support = null;
        Conversation.prototype.isParentGroup = null;
        Conversation.prototype.parentGroupId = null;
        Conversation.prototype.isDefaultSubgroup = null;
        Conversation.prototype.displayName = null;
        Conversation.prototype.pnJid = null;
        Conversation.prototype.shareOwnPn = null;
        Conversation.prototype.pnhDuplicateLidThread = null;
        Conversation.prototype.lidJid = null;
        Conversation.prototype.username = null;
        Conversation.prototype.lidOriginType = null;
        Conversation.prototype.commentsCount = null;
        Conversation.prototype.locked = null;
        Conversation.prototype.systemMessageToInsert = null;
        Conversation.prototype.capiCreatedGroup = null;
        Conversation.prototype.accountLid = null;
        Conversation.prototype.limitSharing = null;
        Conversation.prototype.limitSharingSettingTimestamp = null;
        Conversation.prototype.limitSharingTrigger = null;
        Conversation.prototype.limitSharingInitiatedByMe = null;
        Conversation.prototype.maibaAiThreadEnabled = null;

        Conversation.EndOfHistoryTransferType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY"] = 0;
            values[valuesById[1] = "COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY"] = 1;
            values[valuesById[2] = "COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY"] = 2;
            return values;
        })();

        return Conversation;
    })();

    proto.DeviceCapabilities = (function() {

        function DeviceCapabilities(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceCapabilities.prototype.chatLockSupportLevel = null;
        DeviceCapabilities.prototype.lidMigration = null;
        DeviceCapabilities.prototype.businessBroadcast = null;
        DeviceCapabilities.prototype.userHasAvatar = null;
        DeviceCapabilities.prototype.memberNameTagPrimarySupport = null;

        DeviceCapabilities.BusinessBroadcast = (function() {

            function BusinessBroadcast(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BusinessBroadcast.prototype.importListEnabled = null;

            return BusinessBroadcast;
        })();

        DeviceCapabilities.ChatLockSupportLevel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "MINIMAL"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            return values;
        })();

        DeviceCapabilities.LIDMigration = (function() {

            function LIDMigration(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LIDMigration.prototype.chatDbMigrationTimestamp = null;

            return LIDMigration;
        })();

        DeviceCapabilities.MemberNameTagPrimarySupport = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DISABLED"] = 0;
            values[valuesById[1] = "RECEIVER_ENABLED"] = 1;
            values[valuesById[2] = "SENDER_ENABLED"] = 2;
            return values;
        })();

        DeviceCapabilities.UserHasAvatar = (function() {

            function UserHasAvatar(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UserHasAvatar.prototype.userHasAvatar = null;

            return UserHasAvatar;
        })();

        return DeviceCapabilities;
    })();

    proto.DeviceConsistencyCodeMessage = (function() {

        function DeviceConsistencyCodeMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceConsistencyCodeMessage.prototype.generation = null;
        DeviceConsistencyCodeMessage.prototype.signature = null;

        return DeviceConsistencyCodeMessage;
    })();

    proto.DeviceListMetadata = (function() {

        function DeviceListMetadata(p) {
            this.senderKeyIndexes = [];
            this.recipientKeyIndexes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceListMetadata.prototype.senderKeyHash = null;
        DeviceListMetadata.prototype.senderTimestamp = null;
        DeviceListMetadata.prototype.senderKeyIndexes = $util.emptyArray;
        DeviceListMetadata.prototype.senderAccountType = null;
        DeviceListMetadata.prototype.receiverAccountType = null;
        DeviceListMetadata.prototype.recipientKeyHash = null;
        DeviceListMetadata.prototype.recipientTimestamp = null;
        DeviceListMetadata.prototype.recipientKeyIndexes = $util.emptyArray;

        return DeviceListMetadata;
    })();

    proto.DeviceProps = (function() {

        function DeviceProps(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DeviceProps.prototype.os = null;
        DeviceProps.prototype.version = null;
        DeviceProps.prototype.platformType = null;
        DeviceProps.prototype.requireFullSync = null;
        DeviceProps.prototype.historySyncConfig = null;

        DeviceProps.AppVersion = (function() {

            function AppVersion(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppVersion.prototype.primary = null;
            AppVersion.prototype.secondary = null;
            AppVersion.prototype.tertiary = null;
            AppVersion.prototype.quaternary = null;
            AppVersion.prototype.quinary = null;

            return AppVersion;
        })();

        DeviceProps.HistorySyncConfig = (function() {

            function HistorySyncConfig(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncConfig.prototype.fullSyncDaysLimit = null;
            HistorySyncConfig.prototype.fullSyncSizeMbLimit = null;
            HistorySyncConfig.prototype.storageQuotaMb = null;
            HistorySyncConfig.prototype.inlineInitialPayloadInE2EeMsg = null;
            HistorySyncConfig.prototype.recentSyncDaysLimit = null;
            HistorySyncConfig.prototype.supportCallLogHistory = null;
            HistorySyncConfig.prototype.supportBotUserAgentChatHistory = null;
            HistorySyncConfig.prototype.supportCagReactionsAndPolls = null;
            HistorySyncConfig.prototype.supportBizHostedMsg = null;
            HistorySyncConfig.prototype.supportRecentSyncChunkMessageCountTuning = null;
            HistorySyncConfig.prototype.supportHostedGroupMsg = null;
            HistorySyncConfig.prototype.supportFbidBotChatHistory = null;
            HistorySyncConfig.prototype.supportAddOnHistorySyncMigration = null;
            HistorySyncConfig.prototype.supportMessageAssociation = null;
            HistorySyncConfig.prototype.supportGroupHistory = null;
            HistorySyncConfig.prototype.onDemandReady = null;
            HistorySyncConfig.prototype.supportGuestChat = null;
            HistorySyncConfig.prototype.completeOnDemandReady = null;
            HistorySyncConfig.prototype.thumbnailSyncDaysLimit = null;

            return HistorySyncConfig;
        })();

        DeviceProps.PlatformType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHROME"] = 1;
            values[valuesById[2] = "FIREFOX"] = 2;
            values[valuesById[3] = "IE"] = 3;
            values[valuesById[4] = "OPERA"] = 4;
            values[valuesById[5] = "SAFARI"] = 5;
            values[valuesById[6] = "EDGE"] = 6;
            values[valuesById[7] = "DESKTOP"] = 7;
            values[valuesById[8] = "IPAD"] = 8;
            values[valuesById[9] = "ANDROID_TABLET"] = 9;
            values[valuesById[10] = "OHANA"] = 10;
            values[valuesById[11] = "ALOHA"] = 11;
            values[valuesById[12] = "CATALINA"] = 12;
            values[valuesById[13] = "TCL_TV"] = 13;
            values[valuesById[14] = "IOS_PHONE"] = 14;
            values[valuesById[15] = "IOS_CATALYST"] = 15;
            values[valuesById[16] = "ANDROID_PHONE"] = 16;
            values[valuesById[17] = "ANDROID_AMBIGUOUS"] = 17;
            values[valuesById[18] = "WEAR_OS"] = 18;
            values[valuesById[19] = "AR_WRIST"] = 19;
            values[valuesById[20] = "AR_DEVICE"] = 20;
            values[valuesById[21] = "UWP"] = 21;
            values[valuesById[22] = "VR"] = 22;
            values[valuesById[23] = "CLOUD_API"] = 23;
            values[valuesById[24] = "SMARTGLASSES"] = 24;
            return values;
        })();

        return DeviceProps;
    })();

    proto.DisappearingMode = (function() {

        function DisappearingMode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        DisappearingMode.prototype.initiator = null;
        DisappearingMode.prototype.trigger = null;
        DisappearingMode.prototype.initiatorDeviceJid = null;
        DisappearingMode.prototype.initiatedByMe = null;

        DisappearingMode.Initiator = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CHANGED_IN_CHAT"] = 0;
            values[valuesById[1] = "INITIATED_BY_ME"] = 1;
            values[valuesById[2] = "INITIATED_BY_OTHER"] = 2;
            values[valuesById[3] = "BIZ_UPGRADE_FB_HOSTING"] = 3;
            return values;
        })();

        DisappearingMode.Trigger = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "ACCOUNT_SETTING"] = 2;
            values[valuesById[3] = "BULK_CHANGE"] = 3;
            values[valuesById[4] = "BIZ_SUPPORTS_FB_HOSTING"] = 4;
            values[valuesById[5] = "UNKNOWN_GROUPS"] = 5;
            return values;
        })();

        return DisappearingMode;
    })();

    proto.EmbeddedContent = (function() {

        function EmbeddedContent(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EmbeddedContent.prototype.embeddedMessage = null;
        EmbeddedContent.prototype.embeddedMusic = null;

        return EmbeddedContent;
    })();

    proto.EmbeddedMessage = (function() {

        function EmbeddedMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EmbeddedMessage.prototype.stanzaId = null;
        EmbeddedMessage.prototype.message = null;

        return EmbeddedMessage;
    })();

    proto.EmbeddedMusic = (function() {

        function EmbeddedMusic(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EmbeddedMusic.prototype.musicContentMediaId = null;
        EmbeddedMusic.prototype.songId = null;
        EmbeddedMusic.prototype.author = null;
        EmbeddedMusic.prototype.title = null;
        EmbeddedMusic.prototype.artworkDirectPath = null;
        EmbeddedMusic.prototype.artworkSha256 = null;
        EmbeddedMusic.prototype.artworkEncSha256 = null;
        EmbeddedMusic.prototype.artistAttribution = null;
        EmbeddedMusic.prototype.countryBlocklist = null;
        EmbeddedMusic.prototype.isExplicit = null;
        EmbeddedMusic.prototype.artworkMediaKey = null;
        EmbeddedMusic.prototype.musicSongStartTimeInMs = null;
        EmbeddedMusic.prototype.derivedContentStartTimeInMs = null;
        EmbeddedMusic.prototype.overlapDurationInMs = null;

        return EmbeddedMusic;
    })();

    proto.EncryptedPairingRequest = (function() {

        function EncryptedPairingRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EncryptedPairingRequest.prototype.encryptedPayload = null;
        EncryptedPairingRequest.prototype.iv = null;

        return EncryptedPairingRequest;
    })();

    proto.EphemeralSetting = (function() {

        function EphemeralSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EphemeralSetting.prototype.duration = null;
        EphemeralSetting.prototype.timestamp = null;

        return EphemeralSetting;
    })();

    proto.EventAdditionalMetadata = (function() {

        function EventAdditionalMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EventAdditionalMetadata.prototype.isStale = null;

        return EventAdditionalMetadata;
    })();

    proto.EventResponse = (function() {

        function EventResponse(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        EventResponse.prototype.eventResponseMessageKey = null;
        EventResponse.prototype.timestampMs = null;
        EventResponse.prototype.eventResponseMessage = null;
        EventResponse.prototype.unread = null;

        return EventResponse;
    })();

    proto.ExitCode = (function() {

        function ExitCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ExitCode.prototype.code = null;
        ExitCode.prototype.text = null;

        return ExitCode;
    })();

    proto.ExternalBlobReference = (function() {

        function ExternalBlobReference(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ExternalBlobReference.prototype.mediaKey = null;
        ExternalBlobReference.prototype.directPath = null;
        ExternalBlobReference.prototype.handle = null;
        ExternalBlobReference.prototype.fileSizeBytes = null;
        ExternalBlobReference.prototype.fileSha256 = null;
        ExternalBlobReference.prototype.fileEncSha256 = null;

        return ExternalBlobReference;
    })();

    proto.Field = (function() {

        function Field(p) {
            this.subfield = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Field.prototype.minVersion = null;
        Field.prototype.maxVersion = null;
        Field.prototype.notReportableMinVersion = null;
        Field.prototype.isMessage = null;
        Field.prototype.subfield = $util.emptyObject;

        return Field;
    })();

    proto.ForwardedAIBotMessageInfo = (function() {

        function ForwardedAIBotMessageInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ForwardedAIBotMessageInfo.prototype.botName = null;
        ForwardedAIBotMessageInfo.prototype.botJid = null;
        ForwardedAIBotMessageInfo.prototype.creatorName = null;

        return ForwardedAIBotMessageInfo;
    })();

    proto.GlobalSettings = (function() {

        function GlobalSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        GlobalSettings.prototype.lightThemeWallpaper = null;
        GlobalSettings.prototype.mediaVisibility = null;
        GlobalSettings.prototype.darkThemeWallpaper = null;
        GlobalSettings.prototype.autoDownloadWiFi = null;
        GlobalSettings.prototype.autoDownloadCellular = null;
        GlobalSettings.prototype.autoDownloadRoaming = null;
        GlobalSettings.prototype.showIndividualNotificationsPreview = null;
        GlobalSettings.prototype.showGroupNotificationsPreview = null;
        GlobalSettings.prototype.disappearingModeDuration = null;
        GlobalSettings.prototype.disappearingModeTimestamp = null;
        GlobalSettings.prototype.avatarUserSettings = null;
        GlobalSettings.prototype.fontSize = null;
        GlobalSettings.prototype.securityNotifications = null;
        GlobalSettings.prototype.autoUnarchiveChats = null;
        GlobalSettings.prototype.videoQualityMode = null;
        GlobalSettings.prototype.photoQualityMode = null;
        GlobalSettings.prototype.individualNotificationSettings = null;
        GlobalSettings.prototype.groupNotificationSettings = null;
        GlobalSettings.prototype.chatLockSettings = null;
        GlobalSettings.prototype.chatDbLidMigrationTimestamp = null;

        return GlobalSettings;
    })();

    proto.GroupHistoryBundleInfo = (function() {

        function GroupHistoryBundleInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        GroupHistoryBundleInfo.prototype.deprecatedMessageHistoryBundle = null;
        GroupHistoryBundleInfo.prototype.processState = null;

        GroupHistoryBundleInfo.ProcessState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_INJECTED"] = 0;
            values[valuesById[1] = "INJECTED"] = 1;
            values[valuesById[2] = "INJECTED_PARTIAL"] = 2;
            values[valuesById[3] = "INJECTION_FAILED"] = 3;
            values[valuesById[4] = "INJECTION_FAILED_NO_RETRY"] = 4;
            return values;
        })();

        return GroupHistoryBundleInfo;
    })();

    proto.GroupHistoryIndividualMessageInfo = (function() {

        function GroupHistoryIndividualMessageInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        GroupHistoryIndividualMessageInfo.prototype.bundleMessageKey = null;
        GroupHistoryIndividualMessageInfo.prototype.editedAfterReceivedAsHistory = null;

        return GroupHistoryIndividualMessageInfo;
    })();

    proto.GroupMention = (function() {

        function GroupMention(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        GroupMention.prototype.groupJid = null;
        GroupMention.prototype.groupSubject = null;

        return GroupMention;
    })();

    proto.GroupParticipant = (function() {

        function GroupParticipant(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        GroupParticipant.prototype.userJid = "";
        GroupParticipant.prototype.rank = null;
        GroupParticipant.prototype.memberLabel = null;

        GroupParticipant.Rank = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REGULAR"] = 0;
            values[valuesById[1] = "ADMIN"] = 1;
            values[valuesById[2] = "SUPERADMIN"] = 2;
            return values;
        })();

        return GroupParticipant;
    })();

    proto.HandshakeMessage = (function() {

        function HandshakeMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        HandshakeMessage.prototype.clientHello = null;
        HandshakeMessage.prototype.serverHello = null;
        HandshakeMessage.prototype.clientFinish = null;

        HandshakeMessage.ClientFinish = (function() {

            function ClientFinish(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ClientFinish.prototype["static"] = null;
            ClientFinish.prototype.payload = null;
            ClientFinish.prototype.extendedCiphertext = null;

            return ClientFinish;
        })();

        HandshakeMessage.ClientHello = (function() {

            function ClientHello(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ClientHello.prototype.ephemeral = null;
            ClientHello.prototype["static"] = null;
            ClientHello.prototype.payload = null;
            ClientHello.prototype.useExtended = null;
            ClientHello.prototype.extendedCiphertext = null;

            return ClientHello;
        })();

        HandshakeMessage.ServerHello = (function() {

            function ServerHello(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ServerHello.prototype.ephemeral = null;
            ServerHello.prototype["static"] = null;
            ServerHello.prototype.payload = null;
            ServerHello.prototype.extendedStatic = null;

            return ServerHello;
        })();

        return HandshakeMessage;
    })();

    proto.HistorySync = (function() {

        function HistorySync(p) {
            this.conversations = [];
            this.statusV3Messages = [];
            this.pushnames = [];
            this.recentStickers = [];
            this.pastParticipants = [];
            this.callLogRecords = [];
            this.phoneNumberToLidMappings = [];
            this.accounts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        HistorySync.prototype.syncType = 0;
        HistorySync.prototype.conversations = $util.emptyArray;
        HistorySync.prototype.statusV3Messages = $util.emptyArray;
        HistorySync.prototype.chunkOrder = null;
        HistorySync.prototype.progress = null;
        HistorySync.prototype.pushnames = $util.emptyArray;
        HistorySync.prototype.globalSettings = null;
        HistorySync.prototype.threadIdUserSecret = null;
        HistorySync.prototype.threadDsTimeframeOffset = null;
        HistorySync.prototype.recentStickers = $util.emptyArray;
        HistorySync.prototype.pastParticipants = $util.emptyArray;
        HistorySync.prototype.callLogRecords = $util.emptyArray;
        HistorySync.prototype.aiWaitListState = null;
        HistorySync.prototype.phoneNumberToLidMappings = $util.emptyArray;
        HistorySync.prototype.companionMetaNonce = null;
        HistorySync.prototype.shareableChatIdentifierEncryptionKey = null;
        HistorySync.prototype.accounts = $util.emptyArray;

        HistorySync.BotAIWaitListState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IN_WAITLIST"] = 0;
            values[valuesById[1] = "AI_AVAILABLE"] = 1;
            return values;
        })();

        HistorySync.HistorySyncType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INITIAL_BOOTSTRAP"] = 0;
            values[valuesById[1] = "INITIAL_STATUS_V3"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            values[valuesById[3] = "RECENT"] = 3;
            values[valuesById[4] = "PUSH_NAME"] = 4;
            values[valuesById[5] = "NON_BLOCKING_DATA"] = 5;
            values[valuesById[6] = "ON_DEMAND"] = 6;
            return values;
        })();

        return HistorySync;
    })();

    proto.HistorySyncMsg = (function() {

        function HistorySyncMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        HistorySyncMsg.prototype.message = null;
        HistorySyncMsg.prototype.msgOrderId = null;

        return HistorySyncMsg;
    })();

    proto.HydratedTemplateButton = (function() {

        function HydratedTemplateButton(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        HydratedTemplateButton.prototype.index = null;
        HydratedTemplateButton.prototype.quickReplyButton = null;
        HydratedTemplateButton.prototype.urlButton = null;
        HydratedTemplateButton.prototype.callButton = null;

        HydratedTemplateButton.HydratedCallButton = (function() {

            function HydratedCallButton(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HydratedCallButton.prototype.displayText = null;
            HydratedCallButton.prototype.phoneNumber = null;

            return HydratedCallButton;
        })();

        HydratedTemplateButton.HydratedQuickReplyButton = (function() {

            function HydratedQuickReplyButton(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HydratedQuickReplyButton.prototype.displayText = null;
            HydratedQuickReplyButton.prototype.id = null;

            return HydratedQuickReplyButton;
        })();

        HydratedTemplateButton.HydratedURLButton = (function() {

            function HydratedURLButton(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HydratedURLButton.prototype.displayText = null;
            HydratedURLButton.prototype.url = null;
            HydratedURLButton.prototype.consentedUsersUrl = null;
            HydratedURLButton.prototype.webviewPresentation = null;

            HydratedURLButton.WebviewPresentationType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "FULL"] = 1;
                values[valuesById[2] = "TALL"] = 2;
                values[valuesById[3] = "COMPACT"] = 3;
                return values;
            })();

            return HydratedURLButton;
        })();

        return HydratedTemplateButton;
    })();

    proto.IdentityKeyPairStructure = (function() {

        function IdentityKeyPairStructure(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        IdentityKeyPairStructure.prototype.publicKey = null;
        IdentityKeyPairStructure.prototype.privateKey = null;

        return IdentityKeyPairStructure;
    })();

    proto.InThreadSurveyMetadata = (function() {

        function InThreadSurveyMetadata(p) {
            this.questions = [];
            this.privacyStatementParts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        InThreadSurveyMetadata.prototype.tessaSessionId = null;
        InThreadSurveyMetadata.prototype.simonSessionId = null;
        InThreadSurveyMetadata.prototype.simonSurveyId = null;
        InThreadSurveyMetadata.prototype.tessaRootId = null;
        InThreadSurveyMetadata.prototype.requestId = null;
        InThreadSurveyMetadata.prototype.tessaEvent = null;
        InThreadSurveyMetadata.prototype.invitationHeaderText = null;
        InThreadSurveyMetadata.prototype.invitationBodyText = null;
        InThreadSurveyMetadata.prototype.invitationCtaText = null;
        InThreadSurveyMetadata.prototype.invitationCtaUrl = null;
        InThreadSurveyMetadata.prototype.surveyTitle = null;
        InThreadSurveyMetadata.prototype.questions = $util.emptyArray;
        InThreadSurveyMetadata.prototype.surveyContinueButtonText = null;
        InThreadSurveyMetadata.prototype.surveySubmitButtonText = null;
        InThreadSurveyMetadata.prototype.privacyStatementFull = null;
        InThreadSurveyMetadata.prototype.privacyStatementParts = $util.emptyArray;
        InThreadSurveyMetadata.prototype.feedbackToastText = null;

        InThreadSurveyMetadata.InThreadSurveyOption = (function() {

            function InThreadSurveyOption(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InThreadSurveyOption.prototype.stringValue = null;
            InThreadSurveyOption.prototype.numericValue = null;
            InThreadSurveyOption.prototype.textTranslated = null;

            return InThreadSurveyOption;
        })();

        InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart = (function() {

            function InThreadSurveyPrivacyStatementPart(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InThreadSurveyPrivacyStatementPart.prototype.text = null;
            InThreadSurveyPrivacyStatementPart.prototype.url = null;

            return InThreadSurveyPrivacyStatementPart;
        })();

        InThreadSurveyMetadata.InThreadSurveyQuestion = (function() {

            function InThreadSurveyQuestion(p) {
                this.questionOptions = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InThreadSurveyQuestion.prototype.questionText = null;
            InThreadSurveyQuestion.prototype.questionId = null;
            InThreadSurveyQuestion.prototype.questionOptions = $util.emptyArray;

            return InThreadSurveyQuestion;
        })();

        return InThreadSurveyMetadata;
    })();

    proto.InteractiveAnnotation = (function() {

        function InteractiveAnnotation(p) {
            this.polygonVertices = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        InteractiveAnnotation.prototype.polygonVertices = $util.emptyArray;
        InteractiveAnnotation.prototype.shouldSkipConfirmation = null;
        InteractiveAnnotation.prototype.embeddedContent = null;
        InteractiveAnnotation.prototype.statusLinkType = null;
        InteractiveAnnotation.prototype.location = null;
        InteractiveAnnotation.prototype.newsletter = null;
        InteractiveAnnotation.prototype.embeddedAction = null;
        InteractiveAnnotation.prototype.tapAction = null;

        InteractiveAnnotation.StatusLinkType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "RASTERIZED_LINK_PREVIEW"] = 1;
            values[valuesById[2] = "RASTERIZED_LINK_TRUNCATED"] = 2;
            values[valuesById[3] = "RASTERIZED_LINK_FULL_URL"] = 3;
            return values;
        })();

        return InteractiveAnnotation;
    })();

    proto.InteractiveMessageAdditionalMetadata = (function() {

        function InteractiveMessageAdditionalMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        InteractiveMessageAdditionalMetadata.prototype.isGalaxyFlowCompleted = null;

        return InteractiveMessageAdditionalMetadata;
    })();

    proto.KeepInChat = (function() {

        function KeepInChat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeepInChat.prototype.keepType = null;
        KeepInChat.prototype.serverTimestamp = null;
        KeepInChat.prototype.key = null;
        KeepInChat.prototype.deviceJid = null;
        KeepInChat.prototype.clientTimestampMs = null;
        KeepInChat.prototype.serverTimestampMs = null;

        return KeepInChat;
    })();

    proto.KeepType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "KEEP_FOR_ALL"] = 1;
        values[valuesById[2] = "UNDO_KEEP_FOR_ALL"] = 2;
        return values;
    })();

    proto.KeyExchangeMessage = (function() {

        function KeyExchangeMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeyExchangeMessage.prototype.id = null;
        KeyExchangeMessage.prototype.baseKey = null;
        KeyExchangeMessage.prototype.ratchetKey = null;
        KeyExchangeMessage.prototype.identityKey = null;
        KeyExchangeMessage.prototype.baseKeySignature = null;

        return KeyExchangeMessage;
    })();

    proto.KeyId = (function() {

        function KeyId(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        KeyId.prototype.id = null;

        return KeyId;
    })();

    proto.LIDMigrationMapping = (function() {

        function LIDMigrationMapping(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LIDMigrationMapping.prototype.pn = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LIDMigrationMapping.prototype.assignedLid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        LIDMigrationMapping.prototype.latestLid = null;

        return LIDMigrationMapping;
    })();

    proto.LIDMigrationMappingSyncMessage = (function() {

        function LIDMigrationMappingSyncMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LIDMigrationMappingSyncMessage.prototype.encodedMappingPayload = null;

        return LIDMigrationMappingSyncMessage;
    })();

    proto.LIDMigrationMappingSyncPayload = (function() {

        function LIDMigrationMappingSyncPayload(p) {
            this.pnToLidMappings = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LIDMigrationMappingSyncPayload.prototype.pnToLidMappings = $util.emptyArray;
        LIDMigrationMappingSyncPayload.prototype.chatDbMigrationTimestamp = null;

        return LIDMigrationMappingSyncPayload;
    })();

    proto.LegacyMessage = (function() {

        function LegacyMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LegacyMessage.prototype.eventResponseMessage = null;
        LegacyMessage.prototype.pollVote = null;

        return LegacyMessage;
    })();

    proto.LimitSharing = (function() {

        function LimitSharing(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LimitSharing.prototype.sharingLimited = null;
        LimitSharing.prototype.trigger = null;
        LimitSharing.prototype.limitSharingSettingTimestamp = null;
        LimitSharing.prototype.initiatedByMe = null;

        LimitSharing.TriggerType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
            values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
            return values;
        })();

        return LimitSharing;
    })();

    proto.LocalizedName = (function() {

        function LocalizedName(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        LocalizedName.prototype.lg = null;
        LocalizedName.prototype.lc = null;
        LocalizedName.prototype.verifiedName = null;

        return LocalizedName;
    })();

    proto.Location = (function() {

        function Location(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Location.prototype.degreesLatitude = null;
        Location.prototype.degreesLongitude = null;
        Location.prototype.name = null;

        return Location;
    })();

    proto.MediaData = (function() {

        function MediaData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MediaData.prototype.localPath = null;

        return MediaData;
    })();

    proto.MediaNotifyMessage = (function() {

        function MediaNotifyMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MediaNotifyMessage.prototype.expressPathUrl = null;
        MediaNotifyMessage.prototype.fileEncSha256 = null;
        MediaNotifyMessage.prototype.fileLength = null;

        return MediaNotifyMessage;
    })();

    proto.MediaRetryNotification = (function() {

        function MediaRetryNotification(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MediaRetryNotification.prototype.stanzaId = null;
        MediaRetryNotification.prototype.directPath = null;
        MediaRetryNotification.prototype.result = null;
        MediaRetryNotification.prototype.messageSecret = null;

        MediaRetryNotification.ResultType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GENERAL_ERROR"] = 0;
            values[valuesById[1] = "SUCCESS"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DECRYPTION_ERROR"] = 3;
            return values;
        })();

        return MediaRetryNotification;
    })();

    proto.MediaVisibility = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DEFAULT"] = 0;
        values[valuesById[1] = "OFF"] = 1;
        values[valuesById[2] = "ON"] = 2;
        return values;
    })();

    proto.MemberLabel = (function() {

        function MemberLabel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MemberLabel.prototype.label = null;
        MemberLabel.prototype.labelTimestamp = null;

        return MemberLabel;
    })();

    proto.Message = (function() {

        function Message(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Message.prototype.conversation = null;
        Message.prototype.senderKeyDistributionMessage = null;
        Message.prototype.imageMessage = null;
        Message.prototype.contactMessage = null;
        Message.prototype.locationMessage = null;
        Message.prototype.extendedTextMessage = null;
        Message.prototype.documentMessage = null;
        Message.prototype.audioMessage = null;
        Message.prototype.videoMessage = null;
        Message.prototype.call = null;
        Message.prototype.chat = null;
        Message.prototype.protocolMessage = null;
        Message.prototype.contactsArrayMessage = null;
        Message.prototype.highlyStructuredMessage = null;
        Message.prototype.fastRatchetKeySenderKeyDistributionMessage = null;
        Message.prototype.sendPaymentMessage = null;
        Message.prototype.liveLocationMessage = null;
        Message.prototype.requestPaymentMessage = null;
        Message.prototype.declinePaymentRequestMessage = null;
        Message.prototype.cancelPaymentRequestMessage = null;
        Message.prototype.templateMessage = null;
        Message.prototype.stickerMessage = null;
        Message.prototype.groupInviteMessage = null;
        Message.prototype.templateButtonReplyMessage = null;
        Message.prototype.productMessage = null;
        Message.prototype.deviceSentMessage = null;
        Message.prototype.messageContextInfo = null;
        Message.prototype.listMessage = null;
        Message.prototype.viewOnceMessage = null;
        Message.prototype.orderMessage = null;
        Message.prototype.listResponseMessage = null;
        Message.prototype.ephemeralMessage = null;
        Message.prototype.invoiceMessage = null;
        Message.prototype.buttonsMessage = null;
        Message.prototype.buttonsResponseMessage = null;
        Message.prototype.paymentInviteMessage = null;
        Message.prototype.interactiveMessage = null;
        Message.prototype.reactionMessage = null;
        Message.prototype.stickerSyncRmrMessage = null;
        Message.prototype.interactiveResponseMessage = null;
        Message.prototype.pollCreationMessage = null;
        Message.prototype.pollUpdateMessage = null;
        Message.prototype.keepInChatMessage = null;
        Message.prototype.documentWithCaptionMessage = null;
        Message.prototype.requestPhoneNumberMessage = null;
        Message.prototype.viewOnceMessageV2 = null;
        Message.prototype.encReactionMessage = null;
        Message.prototype.editedMessage = null;
        Message.prototype.viewOnceMessageV2Extension = null;
        Message.prototype.pollCreationMessageV2 = null;
        Message.prototype.scheduledCallCreationMessage = null;
        Message.prototype.groupMentionedMessage = null;
        Message.prototype.pinInChatMessage = null;
        Message.prototype.pollCreationMessageV3 = null;
        Message.prototype.scheduledCallEditMessage = null;
        Message.prototype.ptvMessage = null;
        Message.prototype.botInvokeMessage = null;
        Message.prototype.callLogMesssage = null;
        Message.prototype.messageHistoryBundle = null;
        Message.prototype.encCommentMessage = null;
        Message.prototype.bcallMessage = null;
        Message.prototype.lottieStickerMessage = null;
        Message.prototype.eventMessage = null;
        Message.prototype.encEventResponseMessage = null;
        Message.prototype.commentMessage = null;
        Message.prototype.newsletterAdminInviteMessage = null;
        Message.prototype.placeholderMessage = null;
        Message.prototype.secretEncryptedMessage = null;
        Message.prototype.albumMessage = null;
        Message.prototype.eventCoverImage = null;
        Message.prototype.stickerPackMessage = null;
        Message.prototype.statusMentionMessage = null;
        Message.prototype.pollResultSnapshotMessage = null;
        Message.prototype.pollCreationOptionImageMessage = null;
        Message.prototype.associatedChildMessage = null;
        Message.prototype.groupStatusMentionMessage = null;
        Message.prototype.pollCreationMessageV4 = null;
        Message.prototype.statusAddYours = null;
        Message.prototype.groupStatusMessage = null;
        Message.prototype.richResponseMessage = null;
        Message.prototype.statusNotificationMessage = null;
        Message.prototype.limitSharingMessage = null;
        Message.prototype.botTaskMessage = null;
        Message.prototype.questionMessage = null;
        Message.prototype.messageHistoryNotice = null;
        Message.prototype.groupStatusMessageV2 = null;
        Message.prototype.botForwardedMessage = null;
        Message.prototype.statusQuestionAnswerMessage = null;
        Message.prototype.questionReplyMessage = null;
        Message.prototype.questionResponseMessage = null;
        Message.prototype.statusQuotedMessage = null;
        Message.prototype.statusStickerInteractionMessage = null;
        Message.prototype.pollCreationMessageV5 = null;
        Message.prototype.newsletterFollowerInviteMessageV2 = null;
        Message.prototype.pollResultSnapshotMessageV3 = null;

        Message.AlbumMessage = (function() {

            function AlbumMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AlbumMessage.prototype.expectedImageCount = null;
            AlbumMessage.prototype.expectedVideoCount = null;
            AlbumMessage.prototype.contextInfo = null;

            return AlbumMessage;
        })();

        Message.AppStateFatalExceptionNotification = (function() {

            function AppStateFatalExceptionNotification(p) {
                this.collectionNames = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateFatalExceptionNotification.prototype.collectionNames = $util.emptyArray;
            AppStateFatalExceptionNotification.prototype.timestamp = null;

            return AppStateFatalExceptionNotification;
        })();

        Message.AppStateSyncKey = (function() {

            function AppStateSyncKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateSyncKey.prototype.keyId = null;
            AppStateSyncKey.prototype.keyData = null;

            return AppStateSyncKey;
        })();

        Message.AppStateSyncKeyData = (function() {

            function AppStateSyncKeyData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateSyncKeyData.prototype.keyData = null;
            AppStateSyncKeyData.prototype.fingerprint = null;
            AppStateSyncKeyData.prototype.timestamp = null;

            return AppStateSyncKeyData;
        })();

        Message.AppStateSyncKeyFingerprint = (function() {

            function AppStateSyncKeyFingerprint(p) {
                this.deviceIndexes = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateSyncKeyFingerprint.prototype.rawId = null;
            AppStateSyncKeyFingerprint.prototype.currentIndex = null;
            AppStateSyncKeyFingerprint.prototype.deviceIndexes = $util.emptyArray;

            return AppStateSyncKeyFingerprint;
        })();

        Message.AppStateSyncKeyId = (function() {

            function AppStateSyncKeyId(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateSyncKeyId.prototype.keyId = null;

            return AppStateSyncKeyId;
        })();

        Message.AppStateSyncKeyRequest = (function() {

            function AppStateSyncKeyRequest(p) {
                this.keyIds = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateSyncKeyRequest.prototype.keyIds = $util.emptyArray;

            return AppStateSyncKeyRequest;
        })();

        Message.AppStateSyncKeyShare = (function() {

            function AppStateSyncKeyShare(p) {
                this.keys = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AppStateSyncKeyShare.prototype.keys = $util.emptyArray;

            return AppStateSyncKeyShare;
        })();

        Message.AudioMessage = (function() {

            function AudioMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AudioMessage.prototype.url = null;
            AudioMessage.prototype.mimetype = null;
            AudioMessage.prototype.fileSha256 = null;
            AudioMessage.prototype.fileLength = null;
            AudioMessage.prototype.seconds = null;
            AudioMessage.prototype.ptt = null;
            AudioMessage.prototype.mediaKey = null;
            AudioMessage.prototype.fileEncSha256 = null;
            AudioMessage.prototype.directPath = null;
            AudioMessage.prototype.mediaKeyTimestamp = null;
            AudioMessage.prototype.contextInfo = null;
            AudioMessage.prototype.streamingSidecar = null;
            AudioMessage.prototype.waveform = null;
            AudioMessage.prototype.backgroundArgb = null;
            AudioMessage.prototype.viewOnce = null;
            AudioMessage.prototype.accessibilityLabel = null;
            AudioMessage.prototype.mediaKeyDomain = null;

            return AudioMessage;
        })();

        Message.BCallMessage = (function() {

            function BCallMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BCallMessage.prototype.sessionId = null;
            BCallMessage.prototype.mediaType = null;
            BCallMessage.prototype.masterKey = null;
            BCallMessage.prototype.caption = null;

            BCallMessage.MediaType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "AUDIO"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return BCallMessage;
        })();

        Message.ButtonsMessage = (function() {

            function ButtonsMessage(p) {
                this.buttons = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ButtonsMessage.prototype.contentText = null;
            ButtonsMessage.prototype.footerText = null;
            ButtonsMessage.prototype.contextInfo = null;
            ButtonsMessage.prototype.buttons = $util.emptyArray;
            ButtonsMessage.prototype.headerType = null;
            ButtonsMessage.prototype.text = null;
            ButtonsMessage.prototype.documentMessage = null;
            ButtonsMessage.prototype.imageMessage = null;
            ButtonsMessage.prototype.videoMessage = null;
            ButtonsMessage.prototype.locationMessage = null;

            ButtonsMessage.Button = (function() {

                function Button(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Button.prototype.buttonId = null;
                Button.prototype.buttonText = null;
                Button.prototype.type = null;
                Button.prototype.nativeFlowInfo = null;

                Button.ButtonText = (function() {

                    function ButtonText(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    ButtonText.prototype.displayText = null;

                    return ButtonText;
                })();

                Button.NativeFlowInfo = (function() {

                    function NativeFlowInfo(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    NativeFlowInfo.prototype.name = null;
                    NativeFlowInfo.prototype.paramsJson = null;

                    return NativeFlowInfo;
                })();

                Button.Type = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "RESPONSE"] = 1;
                    values[valuesById[2] = "NATIVE_FLOW"] = 2;
                    return values;
                })();

                return Button;
            })();

            ButtonsMessage.HeaderType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "EMPTY"] = 1;
                values[valuesById[2] = "TEXT"] = 2;
                values[valuesById[3] = "DOCUMENT"] = 3;
                values[valuesById[4] = "IMAGE"] = 4;
                values[valuesById[5] = "VIDEO"] = 5;
                values[valuesById[6] = "LOCATION"] = 6;
                return values;
            })();

            return ButtonsMessage;
        })();

        Message.ButtonsResponseMessage = (function() {

            function ButtonsResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ButtonsResponseMessage.prototype.selectedButtonId = null;
            ButtonsResponseMessage.prototype.contextInfo = null;
            ButtonsResponseMessage.prototype.type = null;
            ButtonsResponseMessage.prototype.selectedDisplayText = null;

            ButtonsResponseMessage.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "DISPLAY_TEXT"] = 1;
                return values;
            })();

            return ButtonsResponseMessage;
        })();

        Message.Call = (function() {

            function Call(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Call.prototype.callKey = null;
            Call.prototype.conversionSource = null;
            Call.prototype.conversionData = null;
            Call.prototype.conversionDelaySeconds = null;
            Call.prototype.ctwaSignals = null;
            Call.prototype.ctwaPayload = null;
            Call.prototype.contextInfo = null;
            Call.prototype.nativeFlowCallButtonPayload = null;
            Call.prototype.deeplinkPayload = null;

            return Call;
        })();

        Message.CallLogMessage = (function() {

            function CallLogMessage(p) {
                this.participants = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CallLogMessage.prototype.isVideo = null;
            CallLogMessage.prototype.callOutcome = null;
            CallLogMessage.prototype.durationSecs = null;
            CallLogMessage.prototype.callType = null;
            CallLogMessage.prototype.participants = $util.emptyArray;

            CallLogMessage.CallOutcome = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CONNECTED"] = 0;
                values[valuesById[1] = "MISSED"] = 1;
                values[valuesById[2] = "FAILED"] = 2;
                values[valuesById[3] = "REJECTED"] = 3;
                values[valuesById[4] = "ACCEPTED_ELSEWHERE"] = 4;
                values[valuesById[5] = "ONGOING"] = 5;
                values[valuesById[6] = "SILENCED_BY_DND"] = 6;
                values[valuesById[7] = "SILENCED_UNKNOWN_CALLER"] = 7;
                return values;
            })();

            CallLogMessage.CallParticipant = (function() {

                function CallParticipant(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CallParticipant.prototype.jid = null;
                CallParticipant.prototype.callOutcome = null;

                return CallParticipant;
            })();

            CallLogMessage.CallType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REGULAR"] = 0;
                values[valuesById[1] = "SCHEDULED_CALL"] = 1;
                values[valuesById[2] = "VOICE_CHAT"] = 2;
                return values;
            })();

            return CallLogMessage;
        })();

        Message.CancelPaymentRequestMessage = (function() {

            function CancelPaymentRequestMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CancelPaymentRequestMessage.prototype.key = null;

            return CancelPaymentRequestMessage;
        })();

        Message.Chat = (function() {

            function Chat(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Chat.prototype.displayName = null;
            Chat.prototype.id = null;

            return Chat;
        })();

        Message.CloudAPIThreadControlNotification = (function() {

            function CloudAPIThreadControlNotification(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CloudAPIThreadControlNotification.prototype.status = null;
            CloudAPIThreadControlNotification.prototype.senderNotificationTimestampMs = null;
            CloudAPIThreadControlNotification.prototype.consumerLid = null;
            CloudAPIThreadControlNotification.prototype.consumerPhoneNumber = null;
            CloudAPIThreadControlNotification.prototype.notificationContent = null;
            CloudAPIThreadControlNotification.prototype.shouldSuppressNotification = null;

            CloudAPIThreadControlNotification.CloudAPIThreadControl = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "CONTROL_PASSED"] = 1;
                values[valuesById[2] = "CONTROL_TAKEN"] = 2;
                return values;
            })();

            CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent = (function() {

                function CloudAPIThreadControlNotificationContent(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CloudAPIThreadControlNotificationContent.prototype.handoffNotificationText = null;
                CloudAPIThreadControlNotificationContent.prototype.extraJson = null;

                return CloudAPIThreadControlNotificationContent;
            })();

            return CloudAPIThreadControlNotification;
        })();

        Message.CommentMessage = (function() {

            function CommentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CommentMessage.prototype.message = null;
            CommentMessage.prototype.targetMessageKey = null;

            return CommentMessage;
        })();

        Message.ContactMessage = (function() {

            function ContactMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ContactMessage.prototype.displayName = null;
            ContactMessage.prototype.vcard = null;
            ContactMessage.prototype.contextInfo = null;

            return ContactMessage;
        })();

        Message.ContactsArrayMessage = (function() {

            function ContactsArrayMessage(p) {
                this.contacts = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ContactsArrayMessage.prototype.displayName = null;
            ContactsArrayMessage.prototype.contacts = $util.emptyArray;
            ContactsArrayMessage.prototype.contextInfo = null;

            return ContactsArrayMessage;
        })();

        Message.DeclinePaymentRequestMessage = (function() {

            function DeclinePaymentRequestMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeclinePaymentRequestMessage.prototype.key = null;

            return DeclinePaymentRequestMessage;
        })();

        Message.DeviceSentMessage = (function() {

            function DeviceSentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeviceSentMessage.prototype.destinationJid = null;
            DeviceSentMessage.prototype.message = null;
            DeviceSentMessage.prototype.phash = null;

            return DeviceSentMessage;
        })();

        Message.DocumentMessage = (function() {

            function DocumentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DocumentMessage.prototype.url = null;
            DocumentMessage.prototype.mimetype = null;
            DocumentMessage.prototype.title = null;
            DocumentMessage.prototype.fileSha256 = null;
            DocumentMessage.prototype.fileLength = null;
            DocumentMessage.prototype.pageCount = null;
            DocumentMessage.prototype.mediaKey = null;
            DocumentMessage.prototype.fileName = null;
            DocumentMessage.prototype.fileEncSha256 = null;
            DocumentMessage.prototype.directPath = null;
            DocumentMessage.prototype.mediaKeyTimestamp = null;
            DocumentMessage.prototype.contactVcard = null;
            DocumentMessage.prototype.thumbnailDirectPath = null;
            DocumentMessage.prototype.thumbnailSha256 = null;
            DocumentMessage.prototype.thumbnailEncSha256 = null;
            DocumentMessage.prototype.jpegThumbnail = null;
            DocumentMessage.prototype.contextInfo = null;
            DocumentMessage.prototype.thumbnailHeight = null;
            DocumentMessage.prototype.thumbnailWidth = null;
            DocumentMessage.prototype.caption = null;
            DocumentMessage.prototype.accessibilityLabel = null;
            DocumentMessage.prototype.mediaKeyDomain = null;

            return DocumentMessage;
        })();

        Message.EncCommentMessage = (function() {

            function EncCommentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EncCommentMessage.prototype.targetMessageKey = null;
            EncCommentMessage.prototype.encPayload = null;
            EncCommentMessage.prototype.encIv = null;

            return EncCommentMessage;
        })();

        Message.EncEventResponseMessage = (function() {

            function EncEventResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EncEventResponseMessage.prototype.eventCreationMessageKey = null;
            EncEventResponseMessage.prototype.encPayload = null;
            EncEventResponseMessage.prototype.encIv = null;

            return EncEventResponseMessage;
        })();

        Message.EncReactionMessage = (function() {

            function EncReactionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EncReactionMessage.prototype.targetMessageKey = null;
            EncReactionMessage.prototype.encPayload = null;
            EncReactionMessage.prototype.encIv = null;

            return EncReactionMessage;
        })();

        Message.EventMessage = (function() {

            function EventMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EventMessage.prototype.contextInfo = null;
            EventMessage.prototype.isCanceled = null;
            EventMessage.prototype.name = null;
            EventMessage.prototype.description = null;
            EventMessage.prototype.location = null;
            EventMessage.prototype.joinLink = null;
            EventMessage.prototype.startTime = null;
            EventMessage.prototype.endTime = null;
            EventMessage.prototype.extraGuestsAllowed = null;
            EventMessage.prototype.isScheduleCall = null;
            EventMessage.prototype.hasReminder = null;
            EventMessage.prototype.reminderOffsetSec = null;

            return EventMessage;
        })();

        Message.EventResponseMessage = (function() {

            function EventResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EventResponseMessage.prototype.response = null;
            EventResponseMessage.prototype.timestampMs = null;
            EventResponseMessage.prototype.extraGuestCount = null;

            EventResponseMessage.EventResponseType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "GOING"] = 1;
                values[valuesById[2] = "NOT_GOING"] = 2;
                values[valuesById[3] = "MAYBE"] = 3;
                return values;
            })();

            return EventResponseMessage;
        })();

        Message.ExtendedTextMessage = (function() {

            function ExtendedTextMessage(p) {
                this.endCardTiles = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExtendedTextMessage.prototype.text = null;
            ExtendedTextMessage.prototype.matchedText = null;
            ExtendedTextMessage.prototype.description = null;
            ExtendedTextMessage.prototype.title = null;
            ExtendedTextMessage.prototype.textArgb = null;
            ExtendedTextMessage.prototype.backgroundArgb = null;
            ExtendedTextMessage.prototype.font = null;
            ExtendedTextMessage.prototype.previewType = null;
            ExtendedTextMessage.prototype.jpegThumbnail = null;
            ExtendedTextMessage.prototype.contextInfo = null;
            ExtendedTextMessage.prototype.doNotPlayInline = null;
            ExtendedTextMessage.prototype.thumbnailDirectPath = null;
            ExtendedTextMessage.prototype.thumbnailSha256 = null;
            ExtendedTextMessage.prototype.thumbnailEncSha256 = null;
            ExtendedTextMessage.prototype.mediaKey = null;
            ExtendedTextMessage.prototype.mediaKeyTimestamp = null;
            ExtendedTextMessage.prototype.thumbnailHeight = null;
            ExtendedTextMessage.prototype.thumbnailWidth = null;
            ExtendedTextMessage.prototype.inviteLinkGroupType = null;
            ExtendedTextMessage.prototype.inviteLinkParentGroupSubjectV2 = null;
            ExtendedTextMessage.prototype.inviteLinkParentGroupThumbnailV2 = null;
            ExtendedTextMessage.prototype.inviteLinkGroupTypeV2 = null;
            ExtendedTextMessage.prototype.viewOnce = null;
            ExtendedTextMessage.prototype.videoHeight = null;
            ExtendedTextMessage.prototype.videoWidth = null;
            ExtendedTextMessage.prototype.faviconMMSMetadata = null;
            ExtendedTextMessage.prototype.linkPreviewMetadata = null;
            ExtendedTextMessage.prototype.paymentLinkMetadata = null;
            ExtendedTextMessage.prototype.endCardTiles = $util.emptyArray;
            ExtendedTextMessage.prototype.videoContentUrl = null;
            ExtendedTextMessage.prototype.musicMetadata = null;
            ExtendedTextMessage.prototype.paymentExtendedMetadata = null;

            ExtendedTextMessage.FontType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SYSTEM"] = 0;
                values[valuesById[1] = "SYSTEM_TEXT"] = 1;
                values[valuesById[2] = "FB_SCRIPT"] = 2;
                values[valuesById[6] = "SYSTEM_BOLD"] = 6;
                values[valuesById[7] = "MORNINGBREEZE_REGULAR"] = 7;
                values[valuesById[8] = "CALISTOGA_REGULAR"] = 8;
                values[valuesById[9] = "EXO2_EXTRABOLD"] = 9;
                values[valuesById[10] = "COURIERPRIME_BOLD"] = 10;
                return values;
            })();

            ExtendedTextMessage.InviteLinkGroupType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DEFAULT"] = 0;
                values[valuesById[1] = "PARENT"] = 1;
                values[valuesById[2] = "SUB"] = 2;
                values[valuesById[3] = "DEFAULT_SUB"] = 3;
                return values;
            })();

            ExtendedTextMessage.PreviewType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "VIDEO"] = 1;
                values[valuesById[4] = "PLACEHOLDER"] = 4;
                values[valuesById[5] = "IMAGE"] = 5;
                values[valuesById[6] = "PAYMENT_LINKS"] = 6;
                values[valuesById[7] = "PROFILE"] = 7;
                return values;
            })();

            return ExtendedTextMessage;
        })();

        Message.FullHistorySyncOnDemandRequestMetadata = (function() {

            function FullHistorySyncOnDemandRequestMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FullHistorySyncOnDemandRequestMetadata.prototype.requestId = null;

            return FullHistorySyncOnDemandRequestMetadata;
        })();

        Message.FutureProofMessage = (function() {

            function FutureProofMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FutureProofMessage.prototype.message = null;

            return FutureProofMessage;
        })();

        Message.GroupInviteMessage = (function() {

            function GroupInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            GroupInviteMessage.prototype.groupJid = null;
            GroupInviteMessage.prototype.inviteCode = null;
            GroupInviteMessage.prototype.inviteExpiration = null;
            GroupInviteMessage.prototype.groupName = null;
            GroupInviteMessage.prototype.jpegThumbnail = null;
            GroupInviteMessage.prototype.caption = null;
            GroupInviteMessage.prototype.contextInfo = null;
            GroupInviteMessage.prototype.groupType = null;

            GroupInviteMessage.GroupType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DEFAULT"] = 0;
                values[valuesById[1] = "PARENT"] = 1;
                return values;
            })();

            return GroupInviteMessage;
        })();

        Message.HighlyStructuredMessage = (function() {

            function HighlyStructuredMessage(p) {
                this.params = [];
                this.localizableParams = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HighlyStructuredMessage.prototype.namespace = null;
            HighlyStructuredMessage.prototype.elementName = null;
            HighlyStructuredMessage.prototype.params = $util.emptyArray;
            HighlyStructuredMessage.prototype.fallbackLg = null;
            HighlyStructuredMessage.prototype.fallbackLc = null;
            HighlyStructuredMessage.prototype.localizableParams = $util.emptyArray;
            HighlyStructuredMessage.prototype.deterministicLg = null;
            HighlyStructuredMessage.prototype.deterministicLc = null;
            HighlyStructuredMessage.prototype.hydratedHsm = null;

            HighlyStructuredMessage.HSMLocalizableParameter = (function() {

                function HSMLocalizableParameter(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                HSMLocalizableParameter.prototype["default"] = null;
                HSMLocalizableParameter.prototype.currency = null;
                HSMLocalizableParameter.prototype.dateTime = null;

                HSMLocalizableParameter.HSMCurrency = (function() {

                    function HSMCurrency(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    HSMCurrency.prototype.currencyCode = null;
                    HSMCurrency.prototype.amount1000 = null;

                    return HSMCurrency;
                })();

                HSMLocalizableParameter.HSMDateTime = (function() {

                    function HSMDateTime(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    HSMDateTime.prototype.component = null;
                    HSMDateTime.prototype.unixEpoch = null;

                    HSMDateTime.HSMDateTimeComponent = (function() {

                        function HSMDateTimeComponent(p) {
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                                        this[ks[i]] = p[ks[i]];
                        }

                        HSMDateTimeComponent.prototype.dayOfWeek = null;
                        HSMDateTimeComponent.prototype.year = null;
                        HSMDateTimeComponent.prototype.month = null;
                        HSMDateTimeComponent.prototype.dayOfMonth = null;
                        HSMDateTimeComponent.prototype.hour = null;
                        HSMDateTimeComponent.prototype.minute = null;
                        HSMDateTimeComponent.prototype.calendar = null;

                        HSMDateTimeComponent.CalendarType = (function() {
                            const valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[1] = "GREGORIAN"] = 1;
                            values[valuesById[2] = "SOLAR_HIJRI"] = 2;
                            return values;
                        })();

                        HSMDateTimeComponent.DayOfWeekType = (function() {
                            const valuesById = {}, values = Object.create(valuesById);
                            values[valuesById[1] = "MONDAY"] = 1;
                            values[valuesById[2] = "TUESDAY"] = 2;
                            values[valuesById[3] = "WEDNESDAY"] = 3;
                            values[valuesById[4] = "THURSDAY"] = 4;
                            values[valuesById[5] = "FRIDAY"] = 5;
                            values[valuesById[6] = "SATURDAY"] = 6;
                            values[valuesById[7] = "SUNDAY"] = 7;
                            return values;
                        })();

                        return HSMDateTimeComponent;
                    })();

                    HSMDateTime.HSMDateTimeUnixEpoch = (function() {

                        function HSMDateTimeUnixEpoch(p) {
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                                        this[ks[i]] = p[ks[i]];
                        }

                        HSMDateTimeUnixEpoch.prototype.timestamp = null;

                        return HSMDateTimeUnixEpoch;
                    })();

                    return HSMDateTime;
                })();

                return HSMLocalizableParameter;
            })();

            return HighlyStructuredMessage;
        })();

        Message.HistorySyncMessageAccessStatus = (function() {

            function HistorySyncMessageAccessStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncMessageAccessStatus.prototype.completeAccessGranted = null;

            return HistorySyncMessageAccessStatus;
        })();

        Message.HistorySyncNotification = (function() {

            function HistorySyncNotification(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            HistorySyncNotification.prototype.fileSha256 = null;
            HistorySyncNotification.prototype.fileLength = null;
            HistorySyncNotification.prototype.mediaKey = null;
            HistorySyncNotification.prototype.fileEncSha256 = null;
            HistorySyncNotification.prototype.directPath = null;
            HistorySyncNotification.prototype.syncType = null;
            HistorySyncNotification.prototype.chunkOrder = null;
            HistorySyncNotification.prototype.originalMessageId = null;
            HistorySyncNotification.prototype.progress = null;
            HistorySyncNotification.prototype.oldestMsgInChunkTimestampSec = null;
            HistorySyncNotification.prototype.initialHistBootstrapInlinePayload = null;
            HistorySyncNotification.prototype.peerDataRequestSessionId = null;
            HistorySyncNotification.prototype.fullHistorySyncOnDemandRequestMetadata = null;
            HistorySyncNotification.prototype.encHandle = null;
            HistorySyncNotification.prototype.messageAccessStatus = null;

            return HistorySyncNotification;
        })();

        Message.HistorySyncType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INITIAL_BOOTSTRAP"] = 0;
            values[valuesById[1] = "INITIAL_STATUS_V3"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            values[valuesById[3] = "RECENT"] = 3;
            values[valuesById[4] = "PUSH_NAME"] = 4;
            values[valuesById[5] = "NON_BLOCKING_DATA"] = 5;
            values[valuesById[6] = "ON_DEMAND"] = 6;
            values[valuesById[7] = "NO_HISTORY"] = 7;
            values[valuesById[8] = "MESSAGE_ACCESS_STATUS"] = 8;
            return values;
        })();

        Message.ImageMessage = (function() {

            function ImageMessage(p) {
                this.interactiveAnnotations = [];
                this.scanLengths = [];
                this.annotations = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ImageMessage.prototype.url = null;
            ImageMessage.prototype.mimetype = null;
            ImageMessage.prototype.caption = null;
            ImageMessage.prototype.fileSha256 = null;
            ImageMessage.prototype.fileLength = null;
            ImageMessage.prototype.height = null;
            ImageMessage.prototype.width = null;
            ImageMessage.prototype.mediaKey = null;
            ImageMessage.prototype.fileEncSha256 = null;
            ImageMessage.prototype.interactiveAnnotations = $util.emptyArray;
            ImageMessage.prototype.directPath = null;
            ImageMessage.prototype.mediaKeyTimestamp = null;
            ImageMessage.prototype.jpegThumbnail = null;
            ImageMessage.prototype.contextInfo = null;
            ImageMessage.prototype.firstScanSidecar = null;
            ImageMessage.prototype.firstScanLength = null;
            ImageMessage.prototype.experimentGroupId = null;
            ImageMessage.prototype.scansSidecar = null;
            ImageMessage.prototype.scanLengths = $util.emptyArray;
            ImageMessage.prototype.midQualityFileSha256 = null;
            ImageMessage.prototype.midQualityFileEncSha256 = null;
            ImageMessage.prototype.viewOnce = null;
            ImageMessage.prototype.thumbnailDirectPath = null;
            ImageMessage.prototype.thumbnailSha256 = null;
            ImageMessage.prototype.thumbnailEncSha256 = null;
            ImageMessage.prototype.staticUrl = null;
            ImageMessage.prototype.annotations = $util.emptyArray;
            ImageMessage.prototype.imageSourceType = null;
            ImageMessage.prototype.accessibilityLabel = null;
            ImageMessage.prototype.mediaKeyDomain = null;
            ImageMessage.prototype.qrUrl = null;

            ImageMessage.ImageSourceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER_IMAGE"] = 0;
                values[valuesById[1] = "AI_GENERATED"] = 1;
                values[valuesById[2] = "AI_MODIFIED"] = 2;
                values[valuesById[3] = "RASTERIZED_TEXT_STATUS"] = 3;
                return values;
            })();

            return ImageMessage;
        })();

        Message.InitialSecurityNotificationSettingSync = (function() {

            function InitialSecurityNotificationSettingSync(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InitialSecurityNotificationSettingSync.prototype.securityNotificationEnabled = null;

            return InitialSecurityNotificationSettingSync;
        })();

        Message.InteractiveMessage = (function() {

            function InteractiveMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteractiveMessage.prototype.header = null;
            InteractiveMessage.prototype.body = null;
            InteractiveMessage.prototype.footer = null;
            InteractiveMessage.prototype.contextInfo = null;
            InteractiveMessage.prototype.urlTrackingMap = null;
            InteractiveMessage.prototype.shopStorefrontMessage = null;
            InteractiveMessage.prototype.collectionMessage = null;
            InteractiveMessage.prototype.nativeFlowMessage = null;
            InteractiveMessage.prototype.carouselMessage = null;

            InteractiveMessage.Body = (function() {

                function Body(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Body.prototype.text = null;

                return Body;
            })();

            InteractiveMessage.CarouselMessage = (function() {

                function CarouselMessage(p) {
                    this.cards = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CarouselMessage.prototype.cards = $util.emptyArray;
                CarouselMessage.prototype.messageVersion = null;
                CarouselMessage.prototype.carouselCardType = null;

                CarouselMessage.CarouselCardType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "HSCROLL_CARDS"] = 1;
                    values[valuesById[2] = "ALBUM_IMAGE"] = 2;
                    return values;
                })();

                return CarouselMessage;
            })();

            InteractiveMessage.CollectionMessage = (function() {

                function CollectionMessage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CollectionMessage.prototype.bizJid = null;
                CollectionMessage.prototype.id = null;
                CollectionMessage.prototype.messageVersion = null;

                return CollectionMessage;
            })();

            InteractiveMessage.Footer = (function() {

                function Footer(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Footer.prototype.text = null;
                Footer.prototype.hasMediaAttachment = null;
                Footer.prototype.audioMessage = null;

                return Footer;
            })();

            InteractiveMessage.Header = (function() {

                function Header(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Header.prototype.title = null;
                Header.prototype.subtitle = null;
                Header.prototype.hasMediaAttachment = null;
                Header.prototype.documentMessage = null;
                Header.prototype.imageMessage = null;
                Header.prototype.jpegThumbnail = null;
                Header.prototype.videoMessage = null;
                Header.prototype.locationMessage = null;
                Header.prototype.productMessage = null;

                return Header;
            })();

            InteractiveMessage.NativeFlowMessage = (function() {

                function NativeFlowMessage(p) {
                    this.buttons = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                NativeFlowMessage.prototype.buttons = $util.emptyArray;
                NativeFlowMessage.prototype.messageParamsJson = null;
                NativeFlowMessage.prototype.messageVersion = null;

                NativeFlowMessage.NativeFlowButton = (function() {

                    function NativeFlowButton(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    NativeFlowButton.prototype.name = null;
                    NativeFlowButton.prototype.buttonParamsJson = null;

                    return NativeFlowButton;
                })();

                return NativeFlowMessage;
            })();

            InteractiveMessage.ShopMessage = (function() {

                function ShopMessage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ShopMessage.prototype.id = null;
                ShopMessage.prototype.surface = null;
                ShopMessage.prototype.messageVersion = null;

                ShopMessage.Surface = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN_SURFACE"] = 0;
                    values[valuesById[1] = "FB"] = 1;
                    values[valuesById[2] = "IG"] = 2;
                    values[valuesById[3] = "WA"] = 3;
                    return values;
                })();

                return ShopMessage;
            })();

            return InteractiveMessage;
        })();

        Message.InteractiveResponseMessage = (function() {

            function InteractiveResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteractiveResponseMessage.prototype.body = null;
            InteractiveResponseMessage.prototype.contextInfo = null;
            InteractiveResponseMessage.prototype.nativeFlowResponseMessage = null;

            InteractiveResponseMessage.Body = (function() {

                function Body(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Body.prototype.text = null;
                Body.prototype.format = null;

                Body.Format = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "DEFAULT"] = 0;
                    values[valuesById[1] = "EXTENSIONS_1"] = 1;
                    return values;
                })();

                return Body;
            })();

            InteractiveResponseMessage.NativeFlowResponseMessage = (function() {

                function NativeFlowResponseMessage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                NativeFlowResponseMessage.prototype.name = null;
                NativeFlowResponseMessage.prototype.paramsJson = null;
                NativeFlowResponseMessage.prototype.version = null;

                return NativeFlowResponseMessage;
            })();

            return InteractiveResponseMessage;
        })();

        Message.InvoiceMessage = (function() {

            function InvoiceMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InvoiceMessage.prototype.note = null;
            InvoiceMessage.prototype.token = null;
            InvoiceMessage.prototype.attachmentType = null;
            InvoiceMessage.prototype.attachmentMimetype = null;
            InvoiceMessage.prototype.attachmentMediaKey = null;
            InvoiceMessage.prototype.attachmentMediaKeyTimestamp = null;
            InvoiceMessage.prototype.attachmentFileSha256 = null;
            InvoiceMessage.prototype.attachmentFileEncSha256 = null;
            InvoiceMessage.prototype.attachmentDirectPath = null;
            InvoiceMessage.prototype.attachmentJpegThumbnail = null;

            InvoiceMessage.AttachmentType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "IMAGE"] = 0;
                values[valuesById[1] = "PDF"] = 1;
                return values;
            })();

            return InvoiceMessage;
        })();

        Message.KeepInChatMessage = (function() {

            function KeepInChatMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            KeepInChatMessage.prototype.key = null;
            KeepInChatMessage.prototype.keepType = null;
            KeepInChatMessage.prototype.timestampMs = null;

            return KeepInChatMessage;
        })();

        Message.LinkPreviewMetadata = (function() {

            function LinkPreviewMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LinkPreviewMetadata.prototype.paymentLinkMetadata = null;
            LinkPreviewMetadata.prototype.urlMetadata = null;
            LinkPreviewMetadata.prototype.fbExperimentId = null;
            LinkPreviewMetadata.prototype.linkMediaDuration = null;
            LinkPreviewMetadata.prototype.socialMediaPostType = null;
            LinkPreviewMetadata.prototype.linkInlineVideoMuted = null;
            LinkPreviewMetadata.prototype.videoContentUrl = null;
            LinkPreviewMetadata.prototype.musicMetadata = null;
            LinkPreviewMetadata.prototype.videoContentCaption = null;

            LinkPreviewMetadata.SocialMediaPostType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "REEL"] = 1;
                values[valuesById[2] = "LIVE_VIDEO"] = 2;
                values[valuesById[3] = "LONG_VIDEO"] = 3;
                values[valuesById[4] = "SINGLE_IMAGE"] = 4;
                values[valuesById[5] = "CAROUSEL"] = 5;
                return values;
            })();

            return LinkPreviewMetadata;
        })();

        Message.ListMessage = (function() {

            function ListMessage(p) {
                this.sections = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ListMessage.prototype.title = null;
            ListMessage.prototype.description = null;
            ListMessage.prototype.buttonText = null;
            ListMessage.prototype.listType = null;
            ListMessage.prototype.sections = $util.emptyArray;
            ListMessage.prototype.productListInfo = null;
            ListMessage.prototype.footerText = null;
            ListMessage.prototype.contextInfo = null;

            ListMessage.ListType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "SINGLE_SELECT"] = 1;
                values[valuesById[2] = "PRODUCT_LIST"] = 2;
                return values;
            })();

            ListMessage.Product = (function() {

                function Product(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Product.prototype.productId = null;

                return Product;
            })();

            ListMessage.ProductListHeaderImage = (function() {

                function ProductListHeaderImage(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductListHeaderImage.prototype.productId = null;
                ProductListHeaderImage.prototype.jpegThumbnail = null;

                return ProductListHeaderImage;
            })();

            ListMessage.ProductListInfo = (function() {

                function ProductListInfo(p) {
                    this.productSections = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductListInfo.prototype.productSections = $util.emptyArray;
                ProductListInfo.prototype.headerImage = null;
                ProductListInfo.prototype.businessOwnerJid = null;

                return ProductListInfo;
            })();

            ListMessage.ProductSection = (function() {

                function ProductSection(p) {
                    this.products = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductSection.prototype.title = null;
                ProductSection.prototype.products = $util.emptyArray;

                return ProductSection;
            })();

            ListMessage.Row = (function() {

                function Row(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Row.prototype.title = null;
                Row.prototype.description = null;
                Row.prototype.rowId = null;

                return Row;
            })();

            ListMessage.Section = (function() {

                function Section(p) {
                    this.rows = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Section.prototype.title = null;
                Section.prototype.rows = $util.emptyArray;

                return Section;
            })();

            return ListMessage;
        })();

        Message.ListResponseMessage = (function() {

            function ListResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ListResponseMessage.prototype.title = null;
            ListResponseMessage.prototype.listType = null;
            ListResponseMessage.prototype.singleSelectReply = null;
            ListResponseMessage.prototype.contextInfo = null;
            ListResponseMessage.prototype.description = null;

            ListResponseMessage.ListType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "SINGLE_SELECT"] = 1;
                return values;
            })();

            ListResponseMessage.SingleSelectReply = (function() {

                function SingleSelectReply(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SingleSelectReply.prototype.selectedRowId = null;

                return SingleSelectReply;
            })();

            return ListResponseMessage;
        })();

        Message.LiveLocationMessage = (function() {

            function LiveLocationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LiveLocationMessage.prototype.degreesLatitude = null;
            LiveLocationMessage.prototype.degreesLongitude = null;
            LiveLocationMessage.prototype.accuracyInMeters = null;
            LiveLocationMessage.prototype.speedInMps = null;
            LiveLocationMessage.prototype.degreesClockwiseFromMagneticNorth = null;
            LiveLocationMessage.prototype.caption = null;
            LiveLocationMessage.prototype.sequenceNumber = null;
            LiveLocationMessage.prototype.timeOffset = null;
            LiveLocationMessage.prototype.jpegThumbnail = null;
            LiveLocationMessage.prototype.contextInfo = null;

            return LiveLocationMessage;
        })();

        Message.LocationMessage = (function() {

            function LocationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LocationMessage.prototype.degreesLatitude = null;
            LocationMessage.prototype.degreesLongitude = null;
            LocationMessage.prototype.name = null;
            LocationMessage.prototype.address = null;
            LocationMessage.prototype.url = null;
            LocationMessage.prototype.isLive = null;
            LocationMessage.prototype.accuracyInMeters = null;
            LocationMessage.prototype.speedInMps = null;
            LocationMessage.prototype.degreesClockwiseFromMagneticNorth = null;
            LocationMessage.prototype.comment = null;
            LocationMessage.prototype.jpegThumbnail = null;
            LocationMessage.prototype.contextInfo = null;

            return LocationMessage;
        })();

        Message.MMSThumbnailMetadata = (function() {

            function MMSThumbnailMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MMSThumbnailMetadata.prototype.thumbnailDirectPath = null;
            MMSThumbnailMetadata.prototype.thumbnailSha256 = null;
            MMSThumbnailMetadata.prototype.thumbnailEncSha256 = null;
            MMSThumbnailMetadata.prototype.mediaKey = null;
            MMSThumbnailMetadata.prototype.mediaKeyTimestamp = null;
            MMSThumbnailMetadata.prototype.thumbnailHeight = null;
            MMSThumbnailMetadata.prototype.thumbnailWidth = null;
            MMSThumbnailMetadata.prototype.mediaKeyDomain = null;

            return MMSThumbnailMetadata;
        })();

        Message.MediaKeyDomain = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSET"] = 0;
            values[valuesById[1] = "E2EE_CHAT"] = 1;
            values[valuesById[2] = "STATUS"] = 2;
            values[valuesById[3] = "CAPI"] = 3;
            values[valuesById[4] = "BOT"] = 4;
            return values;
        })();

        Message.MessageHistoryBundle = (function() {

            function MessageHistoryBundle(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MessageHistoryBundle.prototype.mimetype = null;
            MessageHistoryBundle.prototype.fileSha256 = null;
            MessageHistoryBundle.prototype.mediaKey = null;
            MessageHistoryBundle.prototype.fileEncSha256 = null;
            MessageHistoryBundle.prototype.directPath = null;
            MessageHistoryBundle.prototype.mediaKeyTimestamp = null;
            MessageHistoryBundle.prototype.contextInfo = null;
            MessageHistoryBundle.prototype.messageHistoryMetadata = null;

            return MessageHistoryBundle;
        })();

        Message.MessageHistoryMetadata = (function() {

            function MessageHistoryMetadata(p) {
                this.historyReceivers = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MessageHistoryMetadata.prototype.historyReceivers = $util.emptyArray;
            MessageHistoryMetadata.prototype.oldestMessageTimestamp = null;
            MessageHistoryMetadata.prototype.messageCount = null;

            return MessageHistoryMetadata;
        })();

        Message.MessageHistoryNotice = (function() {

            function MessageHistoryNotice(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MessageHistoryNotice.prototype.contextInfo = null;
            MessageHistoryNotice.prototype.messageHistoryMetadata = null;

            return MessageHistoryNotice;
        })();

        Message.NewsletterAdminInviteMessage = (function() {

            function NewsletterAdminInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NewsletterAdminInviteMessage.prototype.newsletterJid = null;
            NewsletterAdminInviteMessage.prototype.newsletterName = null;
            NewsletterAdminInviteMessage.prototype.jpegThumbnail = null;
            NewsletterAdminInviteMessage.prototype.caption = null;
            NewsletterAdminInviteMessage.prototype.inviteExpiration = null;
            NewsletterAdminInviteMessage.prototype.contextInfo = null;

            return NewsletterAdminInviteMessage;
        })();

        Message.NewsletterFollowerInviteMessage = (function() {

            function NewsletterFollowerInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NewsletterFollowerInviteMessage.prototype.newsletterJid = null;
            NewsletterFollowerInviteMessage.prototype.newsletterName = null;
            NewsletterFollowerInviteMessage.prototype.jpegThumbnail = null;
            NewsletterFollowerInviteMessage.prototype.caption = null;
            NewsletterFollowerInviteMessage.prototype.contextInfo = null;

            return NewsletterFollowerInviteMessage;
        })();

        Message.OrderMessage = (function() {

            function OrderMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            OrderMessage.prototype.orderId = null;
            OrderMessage.prototype.thumbnail = null;
            OrderMessage.prototype.itemCount = null;
            OrderMessage.prototype.status = null;
            OrderMessage.prototype.surface = null;
            OrderMessage.prototype.message = null;
            OrderMessage.prototype.orderTitle = null;
            OrderMessage.prototype.sellerJid = null;
            OrderMessage.prototype.token = null;
            OrderMessage.prototype.totalAmount1000 = null;
            OrderMessage.prototype.totalCurrencyCode = null;
            OrderMessage.prototype.contextInfo = null;
            OrderMessage.prototype.messageVersion = null;
            OrderMessage.prototype.orderRequestMessageId = null;
            OrderMessage.prototype.catalogType = null;

            OrderMessage.OrderStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "INQUIRY"] = 1;
                values[valuesById[2] = "ACCEPTED"] = 2;
                values[valuesById[3] = "DECLINED"] = 3;
                return values;
            })();

            OrderMessage.OrderSurface = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "CATALOG"] = 1;
                return values;
            })();

            return OrderMessage;
        })();

        Message.PaymentExtendedMetadata = (function() {

            function PaymentExtendedMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaymentExtendedMetadata.prototype.type = null;
            PaymentExtendedMetadata.prototype.platform = null;
            PaymentExtendedMetadata.prototype.messageParamsJson = null;

            return PaymentExtendedMetadata;
        })();

        Message.PaymentInviteMessage = (function() {

            function PaymentInviteMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaymentInviteMessage.prototype.serviceType = null;
            PaymentInviteMessage.prototype.expiryTimestamp = null;

            PaymentInviteMessage.ServiceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "FBPAY"] = 1;
                values[valuesById[2] = "NOVI"] = 2;
                values[valuesById[3] = "UPI"] = 3;
                return values;
            })();

            return PaymentInviteMessage;
        })();

        Message.PaymentLinkMetadata = (function() {

            function PaymentLinkMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaymentLinkMetadata.prototype.button = null;
            PaymentLinkMetadata.prototype.header = null;
            PaymentLinkMetadata.prototype.provider = null;

            PaymentLinkMetadata.PaymentLinkButton = (function() {

                function PaymentLinkButton(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                PaymentLinkButton.prototype.displayText = null;

                return PaymentLinkButton;
            })();

            PaymentLinkMetadata.PaymentLinkHeader = (function() {

                function PaymentLinkHeader(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                PaymentLinkHeader.prototype.headerType = null;

                PaymentLinkHeader.PaymentLinkHeaderType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "LINK_PREVIEW"] = 0;
                    values[valuesById[1] = "ORDER"] = 1;
                    return values;
                })();

                return PaymentLinkHeader;
            })();

            PaymentLinkMetadata.PaymentLinkProvider = (function() {

                function PaymentLinkProvider(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                PaymentLinkProvider.prototype.paramsJson = null;

                return PaymentLinkProvider;
            })();

            return PaymentLinkMetadata;
        })();

        Message.PeerDataOperationRequestMessage = (function() {

            function PeerDataOperationRequestMessage(p) {
                this.requestStickerReupload = [];
                this.requestUrlPreview = [];
                this.placeholderMessageResendRequest = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PeerDataOperationRequestMessage.prototype.peerDataOperationRequestType = null;
            PeerDataOperationRequestMessage.prototype.requestStickerReupload = $util.emptyArray;
            PeerDataOperationRequestMessage.prototype.requestUrlPreview = $util.emptyArray;
            PeerDataOperationRequestMessage.prototype.historySyncOnDemandRequest = null;
            PeerDataOperationRequestMessage.prototype.placeholderMessageResendRequest = $util.emptyArray;
            PeerDataOperationRequestMessage.prototype.fullHistorySyncOnDemandRequest = null;
            PeerDataOperationRequestMessage.prototype.syncdCollectionFatalRecoveryRequest = null;
            PeerDataOperationRequestMessage.prototype.historySyncChunkRetryRequest = null;
            PeerDataOperationRequestMessage.prototype.galaxyFlowAction = null;

            PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest = (function() {

                function FullHistorySyncOnDemandRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                FullHistorySyncOnDemandRequest.prototype.requestMetadata = null;
                FullHistorySyncOnDemandRequest.prototype.historySyncConfig = null;

                return FullHistorySyncOnDemandRequest;
            })();

            PeerDataOperationRequestMessage.GalaxyFlowAction = (function() {

                function GalaxyFlowAction(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                GalaxyFlowAction.prototype.type = null;
                GalaxyFlowAction.prototype.flowId = null;
                GalaxyFlowAction.prototype.stanzaId = null;

                GalaxyFlowAction.GalaxyFlowActionType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "NOTIFY_LAUNCH"] = 1;
                    return values;
                })();

                return GalaxyFlowAction;
            })();

            PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest = (function() {

                function HistorySyncChunkRetryRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                HistorySyncChunkRetryRequest.prototype.syncType = null;
                HistorySyncChunkRetryRequest.prototype.chunkOrder = null;
                HistorySyncChunkRetryRequest.prototype.chunkNotificationId = null;
                HistorySyncChunkRetryRequest.prototype.regenerateChunk = null;

                return HistorySyncChunkRetryRequest;
            })();

            PeerDataOperationRequestMessage.HistorySyncOnDemandRequest = (function() {

                function HistorySyncOnDemandRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                HistorySyncOnDemandRequest.prototype.chatJid = null;
                HistorySyncOnDemandRequest.prototype.oldestMsgId = null;
                HistorySyncOnDemandRequest.prototype.oldestMsgFromMe = null;
                HistorySyncOnDemandRequest.prototype.onDemandMsgCount = null;
                HistorySyncOnDemandRequest.prototype.oldestMsgTimestampMs = null;
                HistorySyncOnDemandRequest.prototype.accountLid = null;

                return HistorySyncOnDemandRequest;
            })();

            PeerDataOperationRequestMessage.PlaceholderMessageResendRequest = (function() {

                function PlaceholderMessageResendRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                PlaceholderMessageResendRequest.prototype.messageKey = null;

                return PlaceholderMessageResendRequest;
            })();

            PeerDataOperationRequestMessage.RequestStickerReupload = (function() {

                function RequestStickerReupload(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                RequestStickerReupload.prototype.fileSha256 = null;

                return RequestStickerReupload;
            })();

            PeerDataOperationRequestMessage.RequestUrlPreview = (function() {

                function RequestUrlPreview(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                RequestUrlPreview.prototype.url = null;
                RequestUrlPreview.prototype.includeHqThumbnail = null;

                return RequestUrlPreview;
            })();

            PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest = (function() {

                function SyncDCollectionFatalRecoveryRequest(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                SyncDCollectionFatalRecoveryRequest.prototype.collectionName = null;
                SyncDCollectionFatalRecoveryRequest.prototype.timestamp = null;

                return SyncDCollectionFatalRecoveryRequest;
            })();

            return PeerDataOperationRequestMessage;
        })();

        Message.PeerDataOperationRequestResponseMessage = (function() {

            function PeerDataOperationRequestResponseMessage(p) {
                this.peerDataOperationResult = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PeerDataOperationRequestResponseMessage.prototype.peerDataOperationRequestType = null;
            PeerDataOperationRequestResponseMessage.prototype.stanzaId = null;
            PeerDataOperationRequestResponseMessage.prototype.peerDataOperationResult = $util.emptyArray;

            PeerDataOperationRequestResponseMessage.PeerDataOperationResult = (function() {

                function PeerDataOperationResult(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                PeerDataOperationResult.prototype.mediaUploadResult = null;
                PeerDataOperationResult.prototype.stickerMessage = null;
                PeerDataOperationResult.prototype.linkPreviewResponse = null;
                PeerDataOperationResult.prototype.placeholderMessageResendResponse = null;
                PeerDataOperationResult.prototype.waffleNonceFetchRequestResponse = null;
                PeerDataOperationResult.prototype.fullHistorySyncOnDemandRequestResponse = null;
                PeerDataOperationResult.prototype.companionMetaNonceFetchRequestResponse = null;
                PeerDataOperationResult.prototype.syncdSnapshotFatalRecoveryResponse = null;
                PeerDataOperationResult.prototype.companionCanonicalUserNonceFetchRequestResponse = null;
                PeerDataOperationResult.prototype.historySyncChunkRetryResponse = null;

                PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse = (function() {

                    function CompanionCanonicalUserNonceFetchResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    CompanionCanonicalUserNonceFetchResponse.prototype.nonce = null;
                    CompanionCanonicalUserNonceFetchResponse.prototype.waFbid = null;
                    CompanionCanonicalUserNonceFetchResponse.prototype.forceRefresh = null;

                    return CompanionCanonicalUserNonceFetchResponse;
                })();

                PeerDataOperationResult.CompanionMetaNonceFetchResponse = (function() {

                    function CompanionMetaNonceFetchResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    CompanionMetaNonceFetchResponse.prototype.nonce = null;

                    return CompanionMetaNonceFetchResponse;
                })();

                PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse = (function() {

                    function FullHistorySyncOnDemandRequestResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    FullHistorySyncOnDemandRequestResponse.prototype.requestMetadata = null;
                    FullHistorySyncOnDemandRequestResponse.prototype.responseCode = null;

                    return FullHistorySyncOnDemandRequestResponse;
                })();

                PeerDataOperationResult.FullHistorySyncOnDemandResponseCode = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "REQUEST_SUCCESS"] = 0;
                    values[valuesById[1] = "REQUEST_TIME_EXPIRED"] = 1;
                    values[valuesById[2] = "DECLINED_SHARING_HISTORY"] = 2;
                    values[valuesById[3] = "GENERIC_ERROR"] = 3;
                    values[valuesById[4] = "ERROR_REQUEST_ON_NON_SMB_PRIMARY"] = 4;
                    values[valuesById[5] = "ERROR_HOSTED_DEVICE_NOT_CONNECTED"] = 5;
                    values[valuesById[6] = "ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET"] = 6;
                    return values;
                })();

                PeerDataOperationResult.HistorySyncChunkRetryResponse = (function() {

                    function HistorySyncChunkRetryResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    HistorySyncChunkRetryResponse.prototype.syncType = null;
                    HistorySyncChunkRetryResponse.prototype.chunkOrder = null;
                    HistorySyncChunkRetryResponse.prototype.requestId = null;
                    HistorySyncChunkRetryResponse.prototype.responseCode = null;
                    HistorySyncChunkRetryResponse.prototype.canRecover = null;

                    return HistorySyncChunkRetryResponse;
                })();

                PeerDataOperationResult.HistorySyncChunkRetryResponseCode = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "GENERATION_ERROR"] = 1;
                    values[valuesById[2] = "CHUNK_CONSUMED"] = 2;
                    values[valuesById[3] = "TIMEOUT"] = 3;
                    values[valuesById[4] = "SESSION_EXHAUSTED"] = 4;
                    values[valuesById[5] = "CHUNK_EXHAUSTED"] = 5;
                    values[valuesById[6] = "DUPLICATED_REQUEST"] = 6;
                    return values;
                })();

                PeerDataOperationResult.LinkPreviewResponse = (function() {

                    function LinkPreviewResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    LinkPreviewResponse.prototype.url = null;
                    LinkPreviewResponse.prototype.title = null;
                    LinkPreviewResponse.prototype.description = null;
                    LinkPreviewResponse.prototype.thumbData = null;
                    LinkPreviewResponse.prototype.matchText = null;
                    LinkPreviewResponse.prototype.previewType = null;
                    LinkPreviewResponse.prototype.hqThumbnail = null;
                    LinkPreviewResponse.prototype.previewMetadata = null;

                    LinkPreviewResponse.LinkPreviewHighQualityThumbnail = (function() {

                        function LinkPreviewHighQualityThumbnail(p) {
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                                        this[ks[i]] = p[ks[i]];
                        }

                        LinkPreviewHighQualityThumbnail.prototype.directPath = null;
                        LinkPreviewHighQualityThumbnail.prototype.thumbHash = null;
                        LinkPreviewHighQualityThumbnail.prototype.encThumbHash = null;
                        LinkPreviewHighQualityThumbnail.prototype.mediaKey = null;
                        LinkPreviewHighQualityThumbnail.prototype.mediaKeyTimestampMs = null;
                        LinkPreviewHighQualityThumbnail.prototype.thumbWidth = null;
                        LinkPreviewHighQualityThumbnail.prototype.thumbHeight = null;

                        return LinkPreviewHighQualityThumbnail;
                    })();

                    LinkPreviewResponse.PaymentLinkPreviewMetadata = (function() {

                        function PaymentLinkPreviewMetadata(p) {
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                                        this[ks[i]] = p[ks[i]];
                        }

                        PaymentLinkPreviewMetadata.prototype.isBusinessVerified = null;
                        PaymentLinkPreviewMetadata.prototype.providerName = null;

                        return PaymentLinkPreviewMetadata;
                    })();

                    return LinkPreviewResponse;
                })();

                PeerDataOperationResult.PlaceholderMessageResendResponse = (function() {

                    function PlaceholderMessageResendResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    PlaceholderMessageResendResponse.prototype.webMessageInfoBytes = null;

                    return PlaceholderMessageResendResponse;
                })();

                PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse = (function() {

                    function SyncDSnapshotFatalRecoveryResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    SyncDSnapshotFatalRecoveryResponse.prototype.collectionSnapshot = null;
                    SyncDSnapshotFatalRecoveryResponse.prototype.isCompressed = null;

                    return SyncDSnapshotFatalRecoveryResponse;
                })();

                PeerDataOperationResult.WaffleNonceFetchResponse = (function() {

                    function WaffleNonceFetchResponse(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    WaffleNonceFetchResponse.prototype.nonce = null;
                    WaffleNonceFetchResponse.prototype.waEntFbid = null;

                    return WaffleNonceFetchResponse;
                })();

                return PeerDataOperationResult;
            })();

            return PeerDataOperationRequestResponseMessage;
        })();

        Message.PeerDataOperationRequestType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UPLOAD_STICKER"] = 0;
            values[valuesById[1] = "SEND_RECENT_STICKER_BOOTSTRAP"] = 1;
            values[valuesById[2] = "GENERATE_LINK_PREVIEW"] = 2;
            values[valuesById[3] = "HISTORY_SYNC_ON_DEMAND"] = 3;
            values[valuesById[4] = "PLACEHOLDER_MESSAGE_RESEND"] = 4;
            values[valuesById[5] = "WAFFLE_LINKING_NONCE_FETCH"] = 5;
            values[valuesById[6] = "FULL_HISTORY_SYNC_ON_DEMAND"] = 6;
            values[valuesById[7] = "COMPANION_META_NONCE_FETCH"] = 7;
            values[valuesById[8] = "COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY"] = 8;
            values[valuesById[9] = "COMPANION_CANONICAL_USER_NONCE_FETCH"] = 9;
            values[valuesById[10] = "HISTORY_SYNC_CHUNK_RETRY"] = 10;
            values[valuesById[11] = "GALAXY_FLOW_ACTION"] = 11;
            return values;
        })();

        Message.PinInChatMessage = (function() {

            function PinInChatMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PinInChatMessage.prototype.key = null;
            PinInChatMessage.prototype.type = null;
            PinInChatMessage.prototype.senderTimestampMs = null;

            PinInChatMessage.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
                values[valuesById[1] = "PIN_FOR_ALL"] = 1;
                values[valuesById[2] = "UNPIN_FOR_ALL"] = 2;
                return values;
            })();

            return PinInChatMessage;
        })();

        Message.PlaceholderMessage = (function() {

            function PlaceholderMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PlaceholderMessage.prototype.type = null;

            PlaceholderMessage.PlaceholderType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MASK_LINKED_DEVICES"] = 0;
                return values;
            })();

            return PlaceholderMessage;
        })();

        Message.PollContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "TEXT"] = 1;
            values[valuesById[2] = "IMAGE"] = 2;
            return values;
        })();

        Message.PollCreationMessage = (function() {

            function PollCreationMessage(p) {
                this.options = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollCreationMessage.prototype.encKey = null;
            PollCreationMessage.prototype.name = null;
            PollCreationMessage.prototype.options = $util.emptyArray;
            PollCreationMessage.prototype.selectableOptionsCount = null;
            PollCreationMessage.prototype.contextInfo = null;
            PollCreationMessage.prototype.pollContentType = null;
            PollCreationMessage.prototype.pollType = null;
            PollCreationMessage.prototype.correctAnswer = null;

            PollCreationMessage.Option = (function() {

                function Option(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Option.prototype.optionName = null;
                Option.prototype.optionHash = null;

                return Option;
            })();

            return PollCreationMessage;
        })();

        Message.PollEncValue = (function() {

            function PollEncValue(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollEncValue.prototype.encPayload = null;
            PollEncValue.prototype.encIv = null;

            return PollEncValue;
        })();

        Message.PollResultSnapshotMessage = (function() {

            function PollResultSnapshotMessage(p) {
                this.pollVotes = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollResultSnapshotMessage.prototype.name = null;
            PollResultSnapshotMessage.prototype.pollVotes = $util.emptyArray;
            PollResultSnapshotMessage.prototype.contextInfo = null;
            PollResultSnapshotMessage.prototype.pollType = null;

            PollResultSnapshotMessage.PollVote = (function() {

                function PollVote(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                PollVote.prototype.optionName = null;
                PollVote.prototype.optionVoteCount = null;

                return PollVote;
            })();

            return PollResultSnapshotMessage;
        })();

        Message.PollType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POLL"] = 0;
            values[valuesById[1] = "QUIZ"] = 1;
            return values;
        })();

        Message.PollUpdateMessage = (function() {

            function PollUpdateMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollUpdateMessage.prototype.pollCreationMessageKey = null;
            PollUpdateMessage.prototype.vote = null;
            PollUpdateMessage.prototype.metadata = null;
            PollUpdateMessage.prototype.senderTimestampMs = null;

            return PollUpdateMessage;
        })();

        Message.PollUpdateMessageMetadata = (function() {

            function PollUpdateMessageMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            return PollUpdateMessageMetadata;
        })();

        Message.PollVoteMessage = (function() {

            function PollVoteMessage(p) {
                this.selectedOptions = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollVoteMessage.prototype.selectedOptions = $util.emptyArray;

            return PollVoteMessage;
        })();

        Message.ProductMessage = (function() {

            function ProductMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ProductMessage.prototype.product = null;
            ProductMessage.prototype.businessOwnerJid = null;
            ProductMessage.prototype.catalog = null;
            ProductMessage.prototype.body = null;
            ProductMessage.prototype.footer = null;
            ProductMessage.prototype.contextInfo = null;

            ProductMessage.CatalogSnapshot = (function() {

                function CatalogSnapshot(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                CatalogSnapshot.prototype.catalogImage = null;
                CatalogSnapshot.prototype.title = null;
                CatalogSnapshot.prototype.description = null;

                return CatalogSnapshot;
            })();

            ProductMessage.ProductSnapshot = (function() {

                function ProductSnapshot(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ProductSnapshot.prototype.productImage = null;
                ProductSnapshot.prototype.productId = null;
                ProductSnapshot.prototype.title = null;
                ProductSnapshot.prototype.description = null;
                ProductSnapshot.prototype.currencyCode = null;
                ProductSnapshot.prototype.priceAmount1000 = null;
                ProductSnapshot.prototype.retailerId = null;
                ProductSnapshot.prototype.url = null;
                ProductSnapshot.prototype.productImageCount = null;
                ProductSnapshot.prototype.firstImageId = null;
                ProductSnapshot.prototype.salePriceAmount1000 = null;
                ProductSnapshot.prototype.signedUrl = null;

                return ProductSnapshot;
            })();

            return ProductMessage;
        })();

        Message.ProtocolMessage = (function() {

            function ProtocolMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ProtocolMessage.prototype.key = null;
            ProtocolMessage.prototype.type = null;
            ProtocolMessage.prototype.ephemeralExpiration = null;
            ProtocolMessage.prototype.ephemeralSettingTimestamp = null;
            ProtocolMessage.prototype.historySyncNotification = null;
            ProtocolMessage.prototype.appStateSyncKeyShare = null;
            ProtocolMessage.prototype.appStateSyncKeyRequest = null;
            ProtocolMessage.prototype.initialSecurityNotificationSettingSync = null;
            ProtocolMessage.prototype.appStateFatalExceptionNotification = null;
            ProtocolMessage.prototype.disappearingMode = null;
            ProtocolMessage.prototype.editedMessage = null;
            ProtocolMessage.prototype.timestampMs = null;
            ProtocolMessage.prototype.peerDataOperationRequestMessage = null;
            ProtocolMessage.prototype.peerDataOperationRequestResponseMessage = null;
            ProtocolMessage.prototype.botFeedbackMessage = null;
            ProtocolMessage.prototype.invokerJid = null;
            ProtocolMessage.prototype.requestWelcomeMessageMetadata = null;
            ProtocolMessage.prototype.mediaNotifyMessage = null;
            ProtocolMessage.prototype.cloudApiThreadControlNotification = null;
            ProtocolMessage.prototype.lidMigrationMappingSyncMessage = null;
            ProtocolMessage.prototype.limitSharing = null;
            ProtocolMessage.prototype.aiPsiMetadata = null;
            ProtocolMessage.prototype.aiQueryFanout = null;
            ProtocolMessage.prototype.memberLabel = null;

            ProtocolMessage.Type = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "REVOKE"] = 0;
                values[valuesById[3] = "EPHEMERAL_SETTING"] = 3;
                values[valuesById[4] = "EPHEMERAL_SYNC_RESPONSE"] = 4;
                values[valuesById[5] = "HISTORY_SYNC_NOTIFICATION"] = 5;
                values[valuesById[6] = "APP_STATE_SYNC_KEY_SHARE"] = 6;
                values[valuesById[7] = "APP_STATE_SYNC_KEY_REQUEST"] = 7;
                values[valuesById[8] = "MSG_FANOUT_BACKFILL_REQUEST"] = 8;
                values[valuesById[9] = "INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC"] = 9;
                values[valuesById[10] = "APP_STATE_FATAL_EXCEPTION_NOTIFICATION"] = 10;
                values[valuesById[11] = "SHARE_PHONE_NUMBER"] = 11;
                values[valuesById[14] = "MESSAGE_EDIT"] = 14;
                values[valuesById[16] = "PEER_DATA_OPERATION_REQUEST_MESSAGE"] = 16;
                values[valuesById[17] = "PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE"] = 17;
                values[valuesById[18] = "REQUEST_WELCOME_MESSAGE"] = 18;
                values[valuesById[19] = "BOT_FEEDBACK_MESSAGE"] = 19;
                values[valuesById[20] = "MEDIA_NOTIFY_MESSAGE"] = 20;
                values[valuesById[21] = "CLOUD_API_THREAD_CONTROL_NOTIFICATION"] = 21;
                values[valuesById[22] = "LID_MIGRATION_MAPPING_SYNC"] = 22;
                values[valuesById[23] = "REMINDER_MESSAGE"] = 23;
                values[valuesById[24] = "BOT_MEMU_ONBOARDING_MESSAGE"] = 24;
                values[valuesById[25] = "STATUS_MENTION_MESSAGE"] = 25;
                values[valuesById[26] = "STOP_GENERATION_MESSAGE"] = 26;
                values[valuesById[27] = "LIMIT_SHARING"] = 27;
                values[valuesById[28] = "AI_PSI_METADATA"] = 28;
                values[valuesById[29] = "AI_QUERY_FANOUT"] = 29;
                values[valuesById[30] = "GROUP_MEMBER_LABEL_CHANGE"] = 30;
                return values;
            })();

            return ProtocolMessage;
        })();

        Message.QuestionResponseMessage = (function() {

            function QuestionResponseMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            QuestionResponseMessage.prototype.key = null;
            QuestionResponseMessage.prototype.text = null;

            return QuestionResponseMessage;
        })();

        Message.ReactionMessage = (function() {

            function ReactionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ReactionMessage.prototype.key = null;
            ReactionMessage.prototype.text = null;
            ReactionMessage.prototype.groupingKey = null;
            ReactionMessage.prototype.senderTimestampMs = null;

            return ReactionMessage;
        })();

        Message.RequestPaymentMessage = (function() {

            function RequestPaymentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RequestPaymentMessage.prototype.noteMessage = null;
            RequestPaymentMessage.prototype.currencyCodeIso4217 = null;
            RequestPaymentMessage.prototype.amount1000 = null;
            RequestPaymentMessage.prototype.requestFrom = null;
            RequestPaymentMessage.prototype.expiryTimestamp = null;
            RequestPaymentMessage.prototype.amount = null;
            RequestPaymentMessage.prototype.background = null;

            return RequestPaymentMessage;
        })();

        Message.RequestPhoneNumberMessage = (function() {

            function RequestPhoneNumberMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RequestPhoneNumberMessage.prototype.contextInfo = null;

            return RequestPhoneNumberMessage;
        })();

        Message.RequestWelcomeMessageMetadata = (function() {

            function RequestWelcomeMessageMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RequestWelcomeMessageMetadata.prototype.localChatState = null;

            RequestWelcomeMessageMetadata.LocalChatState = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "EMPTY"] = 0;
                values[valuesById[1] = "NON_EMPTY"] = 1;
                return values;
            })();

            return RequestWelcomeMessageMetadata;
        })();

        Message.ScheduledCallCreationMessage = (function() {

            function ScheduledCallCreationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ScheduledCallCreationMessage.prototype.scheduledTimestampMs = null;
            ScheduledCallCreationMessage.prototype.callType = null;
            ScheduledCallCreationMessage.prototype.title = null;

            ScheduledCallCreationMessage.CallType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "VOICE"] = 1;
                values[valuesById[2] = "VIDEO"] = 2;
                return values;
            })();

            return ScheduledCallCreationMessage;
        })();

        Message.ScheduledCallEditMessage = (function() {

            function ScheduledCallEditMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ScheduledCallEditMessage.prototype.key = null;
            ScheduledCallEditMessage.prototype.editType = null;

            ScheduledCallEditMessage.EditType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "CANCEL"] = 1;
                return values;
            })();

            return ScheduledCallEditMessage;
        })();

        Message.SecretEncryptedMessage = (function() {

            function SecretEncryptedMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SecretEncryptedMessage.prototype.targetMessageKey = null;
            SecretEncryptedMessage.prototype.encPayload = null;
            SecretEncryptedMessage.prototype.encIv = null;
            SecretEncryptedMessage.prototype.secretEncType = null;

            SecretEncryptedMessage.SecretEncType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "EVENT_EDIT"] = 1;
                values[valuesById[2] = "MESSAGE_EDIT"] = 2;
                return values;
            })();

            return SecretEncryptedMessage;
        })();

        Message.SendPaymentMessage = (function() {

            function SendPaymentMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SendPaymentMessage.prototype.noteMessage = null;
            SendPaymentMessage.prototype.requestMessageKey = null;
            SendPaymentMessage.prototype.background = null;
            SendPaymentMessage.prototype.transactionData = null;

            return SendPaymentMessage;
        })();

        Message.SenderKeyDistributionMessage = (function() {

            function SenderKeyDistributionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderKeyDistributionMessage.prototype.groupId = null;
            SenderKeyDistributionMessage.prototype.axolotlSenderKeyDistributionMessage = null;

            return SenderKeyDistributionMessage;
        })();

        Message.StatusNotificationMessage = (function() {

            function StatusNotificationMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusNotificationMessage.prototype.responseMessageKey = null;
            StatusNotificationMessage.prototype.originalMessageKey = null;
            StatusNotificationMessage.prototype.type = null;

            StatusNotificationMessage.StatusNotificationType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_ADD_YOURS"] = 1;
                values[valuesById[2] = "STATUS_RESHARE"] = 2;
                values[valuesById[3] = "STATUS_QUESTION_ANSWER_RESHARE"] = 3;
                return values;
            })();

            return StatusNotificationMessage;
        })();

        Message.StatusQuestionAnswerMessage = (function() {

            function StatusQuestionAnswerMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusQuestionAnswerMessage.prototype.key = null;
            StatusQuestionAnswerMessage.prototype.text = null;

            return StatusQuestionAnswerMessage;
        })();

        Message.StatusQuotedMessage = (function() {

            function StatusQuotedMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusQuotedMessage.prototype.type = null;
            StatusQuotedMessage.prototype.text = null;
            StatusQuotedMessage.prototype.thumbnail = null;
            StatusQuotedMessage.prototype.originalStatusId = null;

            StatusQuotedMessage.StatusQuotedMessageType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "QUESTION_ANSWER"] = 1;
                return values;
            })();

            return StatusQuotedMessage;
        })();

        Message.StatusStickerInteractionMessage = (function() {

            function StatusStickerInteractionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusStickerInteractionMessage.prototype.key = null;
            StatusStickerInteractionMessage.prototype.stickerKey = null;
            StatusStickerInteractionMessage.prototype.type = null;

            StatusStickerInteractionMessage.StatusStickerType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "REACTION"] = 1;
                return values;
            })();

            return StatusStickerInteractionMessage;
        })();

        Message.StickerMessage = (function() {

            function StickerMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerMessage.prototype.url = null;
            StickerMessage.prototype.fileSha256 = null;
            StickerMessage.prototype.fileEncSha256 = null;
            StickerMessage.prototype.mediaKey = null;
            StickerMessage.prototype.mimetype = null;
            StickerMessage.prototype.height = null;
            StickerMessage.prototype.width = null;
            StickerMessage.prototype.directPath = null;
            StickerMessage.prototype.fileLength = null;
            StickerMessage.prototype.mediaKeyTimestamp = null;
            StickerMessage.prototype.firstFrameLength = null;
            StickerMessage.prototype.firstFrameSidecar = null;
            StickerMessage.prototype.isAnimated = null;
            StickerMessage.prototype.pngThumbnail = null;
            StickerMessage.prototype.contextInfo = null;
            StickerMessage.prototype.stickerSentTs = null;
            StickerMessage.prototype.isAvatar = null;
            StickerMessage.prototype.isAiSticker = null;
            StickerMessage.prototype.isLottie = null;
            StickerMessage.prototype.accessibilityLabel = null;
            StickerMessage.prototype.mediaKeyDomain = null;

            return StickerMessage;
        })();

        Message.StickerPackMessage = (function() {

            function StickerPackMessage(p) {
                this.stickers = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerPackMessage.prototype.stickerPackId = null;
            StickerPackMessage.prototype.name = null;
            StickerPackMessage.prototype.publisher = null;
            StickerPackMessage.prototype.stickers = $util.emptyArray;
            StickerPackMessage.prototype.fileLength = null;
            StickerPackMessage.prototype.fileSha256 = null;
            StickerPackMessage.prototype.fileEncSha256 = null;
            StickerPackMessage.prototype.mediaKey = null;
            StickerPackMessage.prototype.directPath = null;
            StickerPackMessage.prototype.caption = null;
            StickerPackMessage.prototype.contextInfo = null;
            StickerPackMessage.prototype.packDescription = null;
            StickerPackMessage.prototype.mediaKeyTimestamp = null;
            StickerPackMessage.prototype.trayIconFileName = null;
            StickerPackMessage.prototype.thumbnailDirectPath = null;
            StickerPackMessage.prototype.thumbnailSha256 = null;
            StickerPackMessage.prototype.thumbnailEncSha256 = null;
            StickerPackMessage.prototype.thumbnailHeight = null;
            StickerPackMessage.prototype.thumbnailWidth = null;
            StickerPackMessage.prototype.imageDataHash = null;
            StickerPackMessage.prototype.stickerPackSize = null;
            StickerPackMessage.prototype.stickerPackOrigin = null;

            StickerPackMessage.Sticker = (function() {

                function Sticker(p) {
                    this.emojis = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Sticker.prototype.fileName = null;
                Sticker.prototype.isAnimated = null;
                Sticker.prototype.emojis = $util.emptyArray;
                Sticker.prototype.accessibilityLabel = null;
                Sticker.prototype.isLottie = null;
                Sticker.prototype.mimetype = null;

                return Sticker;
            })();

            StickerPackMessage.StickerPackOrigin = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "FIRST_PARTY"] = 0;
                values[valuesById[1] = "THIRD_PARTY"] = 1;
                values[valuesById[2] = "USER_CREATED"] = 2;
                return values;
            })();

            return StickerPackMessage;
        })();

        Message.StickerSyncRMRMessage = (function() {

            function StickerSyncRMRMessage(p) {
                this.filehash = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerSyncRMRMessage.prototype.filehash = $util.emptyArray;
            StickerSyncRMRMessage.prototype.rmrSource = null;
            StickerSyncRMRMessage.prototype.requestTimestamp = null;

            return StickerSyncRMRMessage;
        })();

        Message.TemplateButtonReplyMessage = (function() {

            function TemplateButtonReplyMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TemplateButtonReplyMessage.prototype.selectedId = null;
            TemplateButtonReplyMessage.prototype.selectedDisplayText = null;
            TemplateButtonReplyMessage.prototype.contextInfo = null;
            TemplateButtonReplyMessage.prototype.selectedIndex = null;
            TemplateButtonReplyMessage.prototype.selectedCarouselCardIndex = null;

            return TemplateButtonReplyMessage;
        })();

        Message.TemplateMessage = (function() {

            function TemplateMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TemplateMessage.prototype.contextInfo = null;
            TemplateMessage.prototype.hydratedTemplate = null;
            TemplateMessage.prototype.templateId = null;
            TemplateMessage.prototype.fourRowTemplate = null;
            TemplateMessage.prototype.hydratedFourRowTemplate = null;
            TemplateMessage.prototype.interactiveMessageTemplate = null;

            TemplateMessage.FourRowTemplate = (function() {

                function FourRowTemplate(p) {
                    this.buttons = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                FourRowTemplate.prototype.content = null;
                FourRowTemplate.prototype.footer = null;
                FourRowTemplate.prototype.buttons = $util.emptyArray;
                FourRowTemplate.prototype.documentMessage = null;
                FourRowTemplate.prototype.highlyStructuredMessage = null;
                FourRowTemplate.prototype.imageMessage = null;
                FourRowTemplate.prototype.videoMessage = null;
                FourRowTemplate.prototype.locationMessage = null;

                return FourRowTemplate;
            })();

            TemplateMessage.HydratedFourRowTemplate = (function() {

                function HydratedFourRowTemplate(p) {
                    this.hydratedButtons = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                HydratedFourRowTemplate.prototype.hydratedContentText = null;
                HydratedFourRowTemplate.prototype.hydratedFooterText = null;
                HydratedFourRowTemplate.prototype.hydratedButtons = $util.emptyArray;
                HydratedFourRowTemplate.prototype.templateId = null;
                HydratedFourRowTemplate.prototype.maskLinkedDevices = null;
                HydratedFourRowTemplate.prototype.documentMessage = null;
                HydratedFourRowTemplate.prototype.hydratedTitleText = null;
                HydratedFourRowTemplate.prototype.imageMessage = null;
                HydratedFourRowTemplate.prototype.videoMessage = null;
                HydratedFourRowTemplate.prototype.locationMessage = null;

                return HydratedFourRowTemplate;
            })();

            return TemplateMessage;
        })();

        Message.URLMetadata = (function() {

            function URLMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            URLMetadata.prototype.fbExperimentId = null;

            return URLMetadata;
        })();

        Message.VideoEndCard = (function() {

            function VideoEndCard(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            VideoEndCard.prototype.username = "";
            VideoEndCard.prototype.caption = "";
            VideoEndCard.prototype.thumbnailImageUrl = "";
            VideoEndCard.prototype.profilePictureUrl = "";

            return VideoEndCard;
        })();

        Message.VideoMessage = (function() {

            function VideoMessage(p) {
                this.interactiveAnnotations = [];
                this.annotations = [];
                this.processedVideos = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            VideoMessage.prototype.url = null;
            VideoMessage.prototype.mimetype = null;
            VideoMessage.prototype.fileSha256 = null;
            VideoMessage.prototype.fileLength = null;
            VideoMessage.prototype.seconds = null;
            VideoMessage.prototype.mediaKey = null;
            VideoMessage.prototype.caption = null;
            VideoMessage.prototype.gifPlayback = null;
            VideoMessage.prototype.height = null;
            VideoMessage.prototype.width = null;
            VideoMessage.prototype.fileEncSha256 = null;
            VideoMessage.prototype.interactiveAnnotations = $util.emptyArray;
            VideoMessage.prototype.directPath = null;
            VideoMessage.prototype.mediaKeyTimestamp = null;
            VideoMessage.prototype.jpegThumbnail = null;
            VideoMessage.prototype.contextInfo = null;
            VideoMessage.prototype.streamingSidecar = null;
            VideoMessage.prototype.gifAttribution = null;
            VideoMessage.prototype.viewOnce = null;
            VideoMessage.prototype.thumbnailDirectPath = null;
            VideoMessage.prototype.thumbnailSha256 = null;
            VideoMessage.prototype.thumbnailEncSha256 = null;
            VideoMessage.prototype.staticUrl = null;
            VideoMessage.prototype.annotations = $util.emptyArray;
            VideoMessage.prototype.accessibilityLabel = null;
            VideoMessage.prototype.processedVideos = $util.emptyArray;
            VideoMessage.prototype.externalShareFullVideoDurationInSeconds = null;
            VideoMessage.prototype.motionPhotoPresentationOffsetMs = null;
            VideoMessage.prototype.metadataUrl = null;
            VideoMessage.prototype.videoSourceType = null;
            VideoMessage.prototype.mediaKeyDomain = null;

            VideoMessage.Attribution = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "GIPHY"] = 1;
                values[valuesById[2] = "TENOR"] = 2;
                values[valuesById[3] = "KLIPY"] = 3;
                return values;
            })();

            VideoMessage.VideoSourceType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "USER_VIDEO"] = 0;
                values[valuesById[1] = "AI_GENERATED"] = 1;
                return values;
            })();

            return VideoMessage;
        })();

        return Message;
    })();

    proto.MessageAddOn = (function() {

        function MessageAddOn(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageAddOn.prototype.messageAddOnType = null;
        MessageAddOn.prototype.messageAddOn = null;
        MessageAddOn.prototype.senderTimestampMs = null;
        MessageAddOn.prototype.serverTimestampMs = null;
        MessageAddOn.prototype.status = null;
        MessageAddOn.prototype.addOnContextInfo = null;
        MessageAddOn.prototype.messageAddOnKey = null;
        MessageAddOn.prototype.legacyMessage = null;

        MessageAddOn.MessageAddOnType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "REACTION"] = 1;
            values[valuesById[2] = "EVENT_RESPONSE"] = 2;
            values[valuesById[3] = "POLL_UPDATE"] = 3;
            values[valuesById[4] = "PIN_IN_CHAT"] = 4;
            return values;
        })();

        return MessageAddOn;
    })();

    proto.MessageAddOnContextInfo = (function() {

        function MessageAddOnContextInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageAddOnContextInfo.prototype.messageAddOnDurationInSecs = null;
        MessageAddOnContextInfo.prototype.messageAddOnExpiryType = null;

        return MessageAddOnContextInfo;
    })();

    proto.MessageAssociation = (function() {

        function MessageAssociation(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageAssociation.prototype.associationType = null;
        MessageAssociation.prototype.parentMessageKey = null;
        MessageAssociation.prototype.messageIndex = null;

        MessageAssociation.AssociationType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "MEDIA_ALBUM"] = 1;
            values[valuesById[2] = "BOT_PLUGIN"] = 2;
            values[valuesById[3] = "EVENT_COVER_IMAGE"] = 3;
            values[valuesById[4] = "STATUS_POLL"] = 4;
            values[valuesById[5] = "HD_VIDEO_DUAL_UPLOAD"] = 5;
            values[valuesById[6] = "STATUS_EXTERNAL_RESHARE"] = 6;
            values[valuesById[7] = "MEDIA_POLL"] = 7;
            values[valuesById[8] = "STATUS_ADD_YOURS"] = 8;
            values[valuesById[9] = "STATUS_NOTIFICATION"] = 9;
            values[valuesById[10] = "HD_IMAGE_DUAL_UPLOAD"] = 10;
            values[valuesById[11] = "STICKER_ANNOTATION"] = 11;
            values[valuesById[12] = "MOTION_PHOTO"] = 12;
            values[valuesById[13] = "STATUS_LINK_ACTION"] = 13;
            values[valuesById[14] = "VIEW_ALL_REPLIES"] = 14;
            values[valuesById[15] = "STATUS_ADD_YOURS_AI_IMAGINE"] = 15;
            values[valuesById[16] = "STATUS_QUESTION"] = 16;
            values[valuesById[17] = "STATUS_ADD_YOURS_DIWALI"] = 17;
            values[valuesById[18] = "STATUS_REACTION"] = 18;
            values[valuesById[19] = "HEVC_VIDEO_DUAL_UPLOAD"] = 19;
            return values;
        })();

        return MessageAssociation;
    })();

    proto.MessageContextInfo = (function() {

        function MessageContextInfo(p) {
            this.threadId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageContextInfo.prototype.deviceListMetadata = null;
        MessageContextInfo.prototype.deviceListMetadataVersion = null;
        MessageContextInfo.prototype.messageSecret = null;
        MessageContextInfo.prototype.paddingBytes = null;
        MessageContextInfo.prototype.messageAddOnDurationInSecs = null;
        MessageContextInfo.prototype.botMessageSecret = null;
        MessageContextInfo.prototype.botMetadata = null;
        MessageContextInfo.prototype.reportingTokenVersion = null;
        MessageContextInfo.prototype.messageAddOnExpiryType = null;
        MessageContextInfo.prototype.messageAssociation = null;
        MessageContextInfo.prototype.capiCreatedGroup = null;
        MessageContextInfo.prototype.supportPayload = null;
        MessageContextInfo.prototype.limitSharing = null;
        MessageContextInfo.prototype.limitSharingV2 = null;
        MessageContextInfo.prototype.threadId = $util.emptyArray;
        MessageContextInfo.prototype.weblinkRenderConfig = null;

        MessageContextInfo.MessageAddonExpiryType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "STATIC"] = 1;
            values[valuesById[2] = "DEPENDENT_ON_PARENT"] = 2;
            return values;
        })();

        return MessageContextInfo;
    })();

    proto.MessageKey = (function() {

        function MessageKey(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageKey.prototype.remoteJid = null;
        MessageKey.prototype.fromMe = null;
        MessageKey.prototype.id = null;
        MessageKey.prototype.participant = null;

        return MessageKey;
    })();

    proto.MessageSecretMessage = (function() {

        function MessageSecretMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MessageSecretMessage.prototype.version = null;
        MessageSecretMessage.prototype.encIv = null;
        MessageSecretMessage.prototype.encPayload = null;

        return MessageSecretMessage;
    })();

    proto.Money = (function() {

        function Money(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Money.prototype.value = null;
        Money.prototype.offset = null;
        Money.prototype.currencyCode = null;

        return Money;
    })();

    proto.MsgOpaqueData = (function() {

        function MsgOpaqueData(p) {
            this.pollOptions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MsgOpaqueData.prototype.body = null;
        MsgOpaqueData.prototype.caption = null;
        MsgOpaqueData.prototype.lng = null;
        MsgOpaqueData.prototype.isLive = null;
        MsgOpaqueData.prototype.lat = null;
        MsgOpaqueData.prototype.paymentAmount1000 = null;
        MsgOpaqueData.prototype.paymentNoteMsgBody = null;
        MsgOpaqueData.prototype.matchedText = null;
        MsgOpaqueData.prototype.title = null;
        MsgOpaqueData.prototype.description = null;
        MsgOpaqueData.prototype.futureproofBuffer = null;
        MsgOpaqueData.prototype.clientUrl = null;
        MsgOpaqueData.prototype.loc = null;
        MsgOpaqueData.prototype.pollName = null;
        MsgOpaqueData.prototype.pollOptions = $util.emptyArray;
        MsgOpaqueData.prototype.pollSelectableOptionsCount = null;
        MsgOpaqueData.prototype.messageSecret = null;
        MsgOpaqueData.prototype.originalSelfAuthor = null;
        MsgOpaqueData.prototype.senderTimestampMs = null;
        MsgOpaqueData.prototype.pollUpdateParentKey = null;
        MsgOpaqueData.prototype.encPollVote = null;
        MsgOpaqueData.prototype.isSentCagPollCreation = null;
        MsgOpaqueData.prototype.pollContentType = null;
        MsgOpaqueData.prototype.pollType = null;
        MsgOpaqueData.prototype.correctOptionIndex = null;
        MsgOpaqueData.prototype.pollVotesSnapshot = null;
        MsgOpaqueData.prototype.encReactionTargetMessageKey = null;
        MsgOpaqueData.prototype.encReactionEncPayload = null;
        MsgOpaqueData.prototype.encReactionEncIv = null;
        MsgOpaqueData.prototype.botMessageSecret = null;
        MsgOpaqueData.prototype.targetMessageKey = null;
        MsgOpaqueData.prototype.encPayload = null;
        MsgOpaqueData.prototype.encIv = null;
        MsgOpaqueData.prototype.eventName = null;
        MsgOpaqueData.prototype.isEventCanceled = null;
        MsgOpaqueData.prototype.eventDescription = null;
        MsgOpaqueData.prototype.eventJoinLink = null;
        MsgOpaqueData.prototype.eventStartTime = null;
        MsgOpaqueData.prototype.eventLocation = null;
        MsgOpaqueData.prototype.eventEndTime = null;
        MsgOpaqueData.prototype.eventIsScheduledCall = null;
        MsgOpaqueData.prototype.eventExtraGuestsAllowed = null;
        MsgOpaqueData.prototype.plainProtobufBytes = null;

        MsgOpaqueData.EventLocation = (function() {

            function EventLocation(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            EventLocation.prototype.degreesLatitude = null;
            EventLocation.prototype.degreesLongitude = null;
            EventLocation.prototype.name = null;
            EventLocation.prototype.address = null;
            EventLocation.prototype.url = null;
            EventLocation.prototype.jpegThumbnail = null;

            return EventLocation;
        })();

        MsgOpaqueData.PollContentType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "TEXT"] = 1;
            values[valuesById[2] = "IMAGE"] = 2;
            return values;
        })();

        MsgOpaqueData.PollOption = (function() {

            function PollOption(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollOption.prototype.name = null;
            PollOption.prototype.hash = null;

            return PollOption;
        })();

        MsgOpaqueData.PollType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POLL"] = 0;
            values[valuesById[1] = "QUIZ"] = 1;
            return values;
        })();

        MsgOpaqueData.PollVoteSnapshot = (function() {

            function PollVoteSnapshot(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollVoteSnapshot.prototype.option = null;
            PollVoteSnapshot.prototype.optionVoteCount = null;

            return PollVoteSnapshot;
        })();

        MsgOpaqueData.PollVotesSnapshot = (function() {

            function PollVotesSnapshot(p) {
                this.pollVotes = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PollVotesSnapshot.prototype.pollVotes = $util.emptyArray;

            return PollVotesSnapshot;
        })();

        return MsgOpaqueData;
    })();

    proto.MsgRowOpaqueData = (function() {

        function MsgRowOpaqueData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        MsgRowOpaqueData.prototype.currentMsg = null;
        MsgRowOpaqueData.prototype.quotedMsg = null;

        return MsgRowOpaqueData;
    })();

    proto.MutationProps = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[2] = "STAR_ACTION"] = 2;
        values[valuesById[3] = "CONTACT_ACTION"] = 3;
        values[valuesById[4] = "MUTE_ACTION"] = 4;
        values[valuesById[5] = "PIN_ACTION"] = 5;
        values[valuesById[6] = "SECURITY_NOTIFICATION_SETTING"] = 6;
        values[valuesById[7] = "PUSH_NAME_SETTING"] = 7;
        values[valuesById[8] = "QUICK_REPLY_ACTION"] = 8;
        values[valuesById[11] = "RECENT_EMOJI_WEIGHTS_ACTION"] = 11;
        values[valuesById[13] = "LABEL_MESSAGE_ACTION"] = 13;
        values[valuesById[14] = "LABEL_EDIT_ACTION"] = 14;
        values[valuesById[15] = "LABEL_ASSOCIATION_ACTION"] = 15;
        values[valuesById[16] = "LOCALE_SETTING"] = 16;
        values[valuesById[17] = "ARCHIVE_CHAT_ACTION"] = 17;
        values[valuesById[18] = "DELETE_MESSAGE_FOR_ME_ACTION"] = 18;
        values[valuesById[19] = "KEY_EXPIRATION"] = 19;
        values[valuesById[20] = "MARK_CHAT_AS_READ_ACTION"] = 20;
        values[valuesById[21] = "CLEAR_CHAT_ACTION"] = 21;
        values[valuesById[22] = "DELETE_CHAT_ACTION"] = 22;
        values[valuesById[23] = "UNARCHIVE_CHATS_SETTING"] = 23;
        values[valuesById[24] = "PRIMARY_FEATURE"] = 24;
        values[valuesById[26] = "ANDROID_UNSUPPORTED_ACTIONS"] = 26;
        values[valuesById[27] = "AGENT_ACTION"] = 27;
        values[valuesById[28] = "SUBSCRIPTION_ACTION"] = 28;
        values[valuesById[29] = "USER_STATUS_MUTE_ACTION"] = 29;
        values[valuesById[30] = "TIME_FORMAT_ACTION"] = 30;
        values[valuesById[31] = "NUX_ACTION"] = 31;
        values[valuesById[32] = "PRIMARY_VERSION_ACTION"] = 32;
        values[valuesById[33] = "STICKER_ACTION"] = 33;
        values[valuesById[34] = "REMOVE_RECENT_STICKER_ACTION"] = 34;
        values[valuesById[35] = "CHAT_ASSIGNMENT"] = 35;
        values[valuesById[36] = "CHAT_ASSIGNMENT_OPENED_STATUS"] = 36;
        values[valuesById[37] = "PN_FOR_LID_CHAT_ACTION"] = 37;
        values[valuesById[38] = "MARKETING_MESSAGE_ACTION"] = 38;
        values[valuesById[39] = "MARKETING_MESSAGE_BROADCAST_ACTION"] = 39;
        values[valuesById[40] = "EXTERNAL_WEB_BETA_ACTION"] = 40;
        values[valuesById[41] = "PRIVACY_SETTING_RELAY_ALL_CALLS"] = 41;
        values[valuesById[42] = "CALL_LOG_ACTION"] = 42;
        values[valuesById[43] = "UGC_BOT"] = 43;
        values[valuesById[44] = "STATUS_PRIVACY"] = 44;
        values[valuesById[45] = "BOT_WELCOME_REQUEST_ACTION"] = 45;
        values[valuesById[46] = "DELETE_INDIVIDUAL_CALL_LOG"] = 46;
        values[valuesById[47] = "LABEL_REORDERING_ACTION"] = 47;
        values[valuesById[48] = "PAYMENT_INFO_ACTION"] = 48;
        values[valuesById[49] = "CUSTOM_PAYMENT_METHODS_ACTION"] = 49;
        values[valuesById[50] = "LOCK_CHAT_ACTION"] = 50;
        values[valuesById[51] = "CHAT_LOCK_SETTINGS"] = 51;
        values[valuesById[52] = "WAMO_USER_IDENTIFIER_ACTION"] = 52;
        values[valuesById[53] = "PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION"] = 53;
        values[valuesById[54] = "DEVICE_CAPABILITIES"] = 54;
        values[valuesById[55] = "NOTE_EDIT_ACTION"] = 55;
        values[valuesById[56] = "FAVORITES_ACTION"] = 56;
        values[valuesById[57] = "MERCHANT_PAYMENT_PARTNER_ACTION"] = 57;
        values[valuesById[58] = "WAFFLE_ACCOUNT_LINK_STATE_ACTION"] = 58;
        values[valuesById[59] = "USERNAME_CHAT_START_MODE"] = 59;
        values[valuesById[60] = "NOTIFICATION_ACTIVITY_SETTING_ACTION"] = 60;
        values[valuesById[61] = "LID_CONTACT_ACTION"] = 61;
        values[valuesById[62] = "CTWA_PER_CUSTOMER_DATA_SHARING_ACTION"] = 62;
        values[valuesById[63] = "PAYMENT_TOS_ACTION"] = 63;
        values[valuesById[64] = "PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION"] = 64;
        values[valuesById[65] = "BUSINESS_BROADCAST_ASSOCIATION_ACTION"] = 65;
        values[valuesById[66] = "DETECTED_OUTCOMES_STATUS_ACTION"] = 66;
        values[valuesById[68] = "MAIBA_AI_FEATURES_CONTROL_ACTION"] = 68;
        values[valuesById[69] = "BUSINESS_BROADCAST_LIST_ACTION"] = 69;
        values[valuesById[70] = "MUSIC_USER_ID_ACTION"] = 70;
        values[valuesById[71] = "STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION"] = 71;
        values[valuesById[72] = "AVATAR_UPDATED_ACTION"] = 72;
        values[valuesById[73] = "GALAXY_FLOW_ACTION"] = 73;
        values[valuesById[74] = "PRIVATE_PROCESSING_SETTING_ACTION"] = 74;
        values[valuesById[75] = "NEWSLETTER_SAVED_INTERESTS_ACTION"] = 75;
        values[valuesById[76] = "AI_THREAD_RENAME_ACTION"] = 76;
        values[valuesById[77] = "INTERACTIVE_MESSAGE_ACTION"] = 77;
        values[valuesById[10001] = "SHARE_OWN_PN"] = 10001;
        values[valuesById[10002] = "BUSINESS_BROADCAST_ACTION"] = 10002;
        return values;
    })();

    proto.NoiseCertificate = (function() {

        function NoiseCertificate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NoiseCertificate.prototype.details = null;
        NoiseCertificate.prototype.signature = null;

        NoiseCertificate.Details = (function() {

            function Details(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Details.prototype.serial = null;
            Details.prototype.issuer = null;
            Details.prototype.expires = null;
            Details.prototype.subject = null;
            Details.prototype.key = null;

            return Details;
        })();

        return NoiseCertificate;
    })();

    proto.NotificationMessageInfo = (function() {

        function NotificationMessageInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NotificationMessageInfo.prototype.key = null;
        NotificationMessageInfo.prototype.message = null;
        NotificationMessageInfo.prototype.messageTimestamp = null;
        NotificationMessageInfo.prototype.participant = null;

        return NotificationMessageInfo;
    })();

    proto.NotificationSettings = (function() {

        function NotificationSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        NotificationSettings.prototype.messageVibrate = null;
        NotificationSettings.prototype.messagePopup = null;
        NotificationSettings.prototype.messageLight = null;
        NotificationSettings.prototype.lowPriorityNotifications = null;
        NotificationSettings.prototype.reactionsMuted = null;
        NotificationSettings.prototype.callVibrate = null;

        return NotificationSettings;
    })();

    proto.PairingRequest = (function() {

        function PairingRequest(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PairingRequest.prototype.companionPublicKey = null;
        PairingRequest.prototype.companionIdentityKey = null;
        PairingRequest.prototype.advSecret = null;

        return PairingRequest;
    })();

    proto.PastParticipant = (function() {

        function PastParticipant(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PastParticipant.prototype.userJid = null;
        PastParticipant.prototype.leaveReason = null;
        PastParticipant.prototype.leaveTs = null;

        PastParticipant.LeaveReason = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "LEFT"] = 0;
            values[valuesById[1] = "REMOVED"] = 1;
            return values;
        })();

        return PastParticipant;
    })();

    proto.PastParticipants = (function() {

        function PastParticipants(p) {
            this.pastParticipants = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PastParticipants.prototype.groupJid = null;
        PastParticipants.prototype.pastParticipants = $util.emptyArray;

        return PastParticipants;
    })();

    proto.PatchDebugData = (function() {

        function PatchDebugData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PatchDebugData.prototype.currentLthash = null;
        PatchDebugData.prototype.newLthash = null;
        PatchDebugData.prototype.patchVersion = null;
        PatchDebugData.prototype.collectionName = null;
        PatchDebugData.prototype.firstFourBytesFromAHashOfSnapshotMacKey = null;
        PatchDebugData.prototype.newLthashSubtract = null;
        PatchDebugData.prototype.numberAdd = null;
        PatchDebugData.prototype.numberRemove = null;
        PatchDebugData.prototype.numberOverride = null;
        PatchDebugData.prototype.senderPlatform = null;
        PatchDebugData.prototype.isSenderPrimary = null;

        PatchDebugData.Platform = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ANDROID"] = 0;
            values[valuesById[1] = "SMBA"] = 1;
            values[valuesById[2] = "IPHONE"] = 2;
            values[valuesById[3] = "SMBI"] = 3;
            values[valuesById[4] = "WEB"] = 4;
            values[valuesById[5] = "UWP"] = 5;
            values[valuesById[6] = "DARWIN"] = 6;
            values[valuesById[7] = "IPAD"] = 7;
            values[valuesById[8] = "WEAROS"] = 8;
            values[valuesById[9] = "WASG"] = 9;
            values[valuesById[10] = "WEARM"] = 10;
            values[valuesById[11] = "CAPI"] = 11;
            return values;
        })();

        return PatchDebugData;
    })();

    proto.PaymentBackground = (function() {

        function PaymentBackground(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PaymentBackground.prototype.id = null;
        PaymentBackground.prototype.fileLength = null;
        PaymentBackground.prototype.width = null;
        PaymentBackground.prototype.height = null;
        PaymentBackground.prototype.mimetype = null;
        PaymentBackground.prototype.placeholderArgb = null;
        PaymentBackground.prototype.textArgb = null;
        PaymentBackground.prototype.subtextArgb = null;
        PaymentBackground.prototype.mediaData = null;
        PaymentBackground.prototype.type = null;

        PaymentBackground.MediaData = (function() {

            function MediaData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MediaData.prototype.mediaKey = null;
            MediaData.prototype.mediaKeyTimestamp = null;
            MediaData.prototype.fileSha256 = null;
            MediaData.prototype.fileEncSha256 = null;
            MediaData.prototype.directPath = null;

            return MediaData;
        })();

        PaymentBackground.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "DEFAULT"] = 1;
            return values;
        })();

        return PaymentBackground;
    })();

    proto.PaymentInfo = (function() {

        function PaymentInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PaymentInfo.prototype.currencyDeprecated = null;
        PaymentInfo.prototype.amount1000 = null;
        PaymentInfo.prototype.receiverJid = null;
        PaymentInfo.prototype.status = null;
        PaymentInfo.prototype.transactionTimestamp = null;
        PaymentInfo.prototype.requestMessageKey = null;
        PaymentInfo.prototype.expiryTimestamp = null;
        PaymentInfo.prototype.futureproofed = null;
        PaymentInfo.prototype.currency = null;
        PaymentInfo.prototype.txnStatus = null;
        PaymentInfo.prototype.useNoviFiatFormat = null;
        PaymentInfo.prototype.primaryAmount = null;
        PaymentInfo.prototype.exchangeAmount = null;

        PaymentInfo.Currency = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_CURRENCY"] = 0;
            values[valuesById[1] = "INR"] = 1;
            return values;
        })();

        PaymentInfo.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "PROCESSING"] = 1;
            values[valuesById[2] = "SENT"] = 2;
            values[valuesById[3] = "NEED_TO_ACCEPT"] = 3;
            values[valuesById[4] = "COMPLETE"] = 4;
            values[valuesById[5] = "COULD_NOT_COMPLETE"] = 5;
            values[valuesById[6] = "REFUNDED"] = 6;
            values[valuesById[7] = "EXPIRED"] = 7;
            values[valuesById[8] = "REJECTED"] = 8;
            values[valuesById[9] = "CANCELLED"] = 9;
            values[valuesById[10] = "WAITING_FOR_PAYER"] = 10;
            values[valuesById[11] = "WAITING"] = 11;
            return values;
        })();

        PaymentInfo.TxnStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PENDING_SETUP"] = 1;
            values[valuesById[2] = "PENDING_RECEIVER_SETUP"] = 2;
            values[valuesById[3] = "INIT"] = 3;
            values[valuesById[4] = "SUCCESS"] = 4;
            values[valuesById[5] = "COMPLETED"] = 5;
            values[valuesById[6] = "FAILED"] = 6;
            values[valuesById[7] = "FAILED_RISK"] = 7;
            values[valuesById[8] = "FAILED_PROCESSING"] = 8;
            values[valuesById[9] = "FAILED_RECEIVER_PROCESSING"] = 9;
            values[valuesById[10] = "FAILED_DA"] = 10;
            values[valuesById[11] = "FAILED_DA_FINAL"] = 11;
            values[valuesById[12] = "REFUNDED_TXN"] = 12;
            values[valuesById[13] = "REFUND_FAILED"] = 13;
            values[valuesById[14] = "REFUND_FAILED_PROCESSING"] = 14;
            values[valuesById[15] = "REFUND_FAILED_DA"] = 15;
            values[valuesById[16] = "EXPIRED_TXN"] = 16;
            values[valuesById[17] = "AUTH_CANCELED"] = 17;
            values[valuesById[18] = "AUTH_CANCEL_FAILED_PROCESSING"] = 18;
            values[valuesById[19] = "AUTH_CANCEL_FAILED"] = 19;
            values[valuesById[20] = "COLLECT_INIT"] = 20;
            values[valuesById[21] = "COLLECT_SUCCESS"] = 21;
            values[valuesById[22] = "COLLECT_FAILED"] = 22;
            values[valuesById[23] = "COLLECT_FAILED_RISK"] = 23;
            values[valuesById[24] = "COLLECT_REJECTED"] = 24;
            values[valuesById[25] = "COLLECT_EXPIRED"] = 25;
            values[valuesById[26] = "COLLECT_CANCELED"] = 26;
            values[valuesById[27] = "COLLECT_CANCELLING"] = 27;
            values[valuesById[28] = "IN_REVIEW"] = 28;
            values[valuesById[29] = "REVERSAL_SUCCESS"] = 29;
            values[valuesById[30] = "REVERSAL_PENDING"] = 30;
            values[valuesById[31] = "REFUND_PENDING"] = 31;
            return values;
        })();

        return PaymentInfo;
    })();

    proto.PhoneNumberToLIDMapping = (function() {

        function PhoneNumberToLIDMapping(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PhoneNumberToLIDMapping.prototype.pnJid = null;
        PhoneNumberToLIDMapping.prototype.lidJid = null;

        return PhoneNumberToLIDMapping;
    })();

    proto.PhotoChange = (function() {

        function PhotoChange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PhotoChange.prototype.oldPhoto = null;
        PhotoChange.prototype.newPhoto = null;
        PhotoChange.prototype.newPhotoId = null;

        return PhotoChange;
    })();

    proto.PinInChat = (function() {

        function PinInChat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PinInChat.prototype.type = null;
        PinInChat.prototype.key = null;
        PinInChat.prototype.senderTimestampMs = null;
        PinInChat.prototype.serverTimestampMs = null;
        PinInChat.prototype.messageAddOnContextInfo = null;

        PinInChat.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "PIN_FOR_ALL"] = 1;
            values[valuesById[2] = "UNPIN_FOR_ALL"] = 2;
            return values;
        })();

        return PinInChat;
    })();

    proto.Point = (function() {

        function Point(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Point.prototype.xDeprecated = null;
        Point.prototype.yDeprecated = null;
        Point.prototype.x = null;
        Point.prototype.y = null;

        return Point;
    })();

    proto.PollAdditionalMetadata = (function() {

        function PollAdditionalMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PollAdditionalMetadata.prototype.pollInvalidated = null;

        return PollAdditionalMetadata;
    })();

    proto.PollEncValue = (function() {

        function PollEncValue(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PollEncValue.prototype.encPayload = null;
        PollEncValue.prototype.encIv = null;

        return PollEncValue;
    })();

    proto.PollUpdate = (function() {

        function PollUpdate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PollUpdate.prototype.pollUpdateMessageKey = null;
        PollUpdate.prototype.vote = null;
        PollUpdate.prototype.senderTimestampMs = null;
        PollUpdate.prototype.serverTimestampMs = null;
        PollUpdate.prototype.unread = null;

        return PollUpdate;
    })();

    proto.PreKeyRecordStructure = (function() {

        function PreKeyRecordStructure(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PreKeyRecordStructure.prototype.id = null;
        PreKeyRecordStructure.prototype.publicKey = null;
        PreKeyRecordStructure.prototype.privateKey = null;

        return PreKeyRecordStructure;
    })();

    proto.PreKeySignalMessage = (function() {

        function PreKeySignalMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PreKeySignalMessage.prototype.registrationId = null;
        PreKeySignalMessage.prototype.preKeyId = null;
        PreKeySignalMessage.prototype.signedPreKeyId = null;
        PreKeySignalMessage.prototype.baseKey = null;
        PreKeySignalMessage.prototype.identityKey = null;
        PreKeySignalMessage.prototype.message = null;

        return PreKeySignalMessage;
    })();

    proto.PremiumMessageInfo = (function() {

        function PremiumMessageInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PremiumMessageInfo.prototype.serverCampaignId = null;

        return PremiumMessageInfo;
    })();

    proto.PrimaryEphemeralIdentity = (function() {

        function PrimaryEphemeralIdentity(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        PrimaryEphemeralIdentity.prototype.publicKey = null;
        PrimaryEphemeralIdentity.prototype.nonce = null;

        return PrimaryEphemeralIdentity;
    })();

    proto.PrivacySystemMessage = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "E2EE_MSG"] = 1;
        values[valuesById[2] = "NE2EE_SELF"] = 2;
        values[valuesById[3] = "NE2EE_OTHER"] = 3;
        return values;
    })();

    proto.ProcessedVideo = (function() {

        function ProcessedVideo(p) {
            this.capabilities = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ProcessedVideo.prototype.directPath = null;
        ProcessedVideo.prototype.fileSha256 = null;
        ProcessedVideo.prototype.height = null;
        ProcessedVideo.prototype.width = null;
        ProcessedVideo.prototype.fileLength = null;
        ProcessedVideo.prototype.bitrate = null;
        ProcessedVideo.prototype.quality = null;
        ProcessedVideo.prototype.capabilities = $util.emptyArray;

        ProcessedVideo.VideoQuality = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNDEFINED"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "MID"] = 2;
            values[valuesById[3] = "HIGH"] = 3;
            return values;
        })();

        return ProcessedVideo;
    })();

    proto.ProloguePayload = (function() {

        function ProloguePayload(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ProloguePayload.prototype.companionEphemeralIdentity = null;
        ProloguePayload.prototype.commitment = null;

        return ProloguePayload;
    })();

    proto.Pushname = (function() {

        function Pushname(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Pushname.prototype.id = null;
        Pushname.prototype.pushname = null;

        return Pushname;
    })();

    proto.QuarantinedMessage = (function() {

        function QuarantinedMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        QuarantinedMessage.prototype.originalData = null;
        QuarantinedMessage.prototype.extractedText = null;

        return QuarantinedMessage;
    })();

    proto.Reaction = (function() {

        function Reaction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Reaction.prototype.key = null;
        Reaction.prototype.text = null;
        Reaction.prototype.groupingKey = null;
        Reaction.prototype.senderTimestampMs = null;
        Reaction.prototype.unread = null;

        return Reaction;
    })();

    proto.RecentEmojiWeight = (function() {

        function RecentEmojiWeight(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        RecentEmojiWeight.prototype.emoji = null;
        RecentEmojiWeight.prototype.weight = null;

        return RecentEmojiWeight;
    })();

    proto.RecordStructure = (function() {

        function RecordStructure(p) {
            this.previousSessions = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        RecordStructure.prototype.currentSession = null;
        RecordStructure.prototype.previousSessions = $util.emptyArray;

        return RecordStructure;
    })();

    proto.Reportable = (function() {

        function Reportable(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        Reportable.prototype.minVersion = null;
        Reportable.prototype.maxVersion = null;
        Reportable.prototype.notReportableMinVersion = null;
        Reportable.prototype.never = null;

        return Reportable;
    })();

    proto.ReportingTokenInfo = (function() {

        function ReportingTokenInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ReportingTokenInfo.prototype.reportingTag = null;

        return ReportingTokenInfo;
    })();

    proto.SenderKeyDistributionMessage = (function() {

        function SenderKeyDistributionMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyDistributionMessage.prototype.id = null;
        SenderKeyDistributionMessage.prototype.iteration = null;
        SenderKeyDistributionMessage.prototype.chainKey = null;
        SenderKeyDistributionMessage.prototype.signingKey = null;

        return SenderKeyDistributionMessage;
    })();

    proto.SenderKeyMessage = (function() {

        function SenderKeyMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyMessage.prototype.id = null;
        SenderKeyMessage.prototype.iteration = null;
        SenderKeyMessage.prototype.ciphertext = null;

        return SenderKeyMessage;
    })();

    proto.SenderKeyRecordStructure = (function() {

        function SenderKeyRecordStructure(p) {
            this.senderKeyStates = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        return SenderKeyRecordStructure;
    })();

    proto.SenderKeyStateStructure = (function() {

        function SenderKeyStateStructure(p) {
            this.senderMessageKeys = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SenderKeyStateStructure.prototype.senderKeyId = null;
        SenderKeyStateStructure.prototype.senderChainKey = null;
        SenderKeyStateStructure.prototype.senderSigningKey = null;
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        SenderKeyStateStructure.SenderChainKey = (function() {

            function SenderChainKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderChainKey.prototype.iteration = null;
            SenderChainKey.prototype.seed = null;

            return SenderChainKey;
        })();

        SenderKeyStateStructure.SenderMessageKey = (function() {

            function SenderMessageKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderMessageKey.prototype.iteration = null;
            SenderMessageKey.prototype.seed = null;

            return SenderMessageKey;
        })();

        SenderKeyStateStructure.SenderSigningKey = (function() {

            function SenderSigningKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SenderSigningKey.prototype["public"] = null;
            SenderSigningKey.prototype["private"] = null;

            return SenderSigningKey;
        })();

        return SenderKeyStateStructure;
    })();

    proto.ServerErrorReceipt = (function() {

        function ServerErrorReceipt(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ServerErrorReceipt.prototype.stanzaId = null;

        return ServerErrorReceipt;
    })();

    proto.SessionStructure = (function() {

        function SessionStructure(p) {
            this.receiverChains = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SessionStructure.prototype.sessionVersion = null;
        SessionStructure.prototype.localIdentityPublic = null;
        SessionStructure.prototype.remoteIdentityPublic = null;
        SessionStructure.prototype.rootKey = null;
        SessionStructure.prototype.previousCounter = null;
        SessionStructure.prototype.senderChain = null;
        SessionStructure.prototype.receiverChains = $util.emptyArray;
        SessionStructure.prototype.pendingKeyExchange = null;
        SessionStructure.prototype.pendingPreKey = null;
        SessionStructure.prototype.remoteRegistrationId = null;
        SessionStructure.prototype.localRegistrationId = null;
        SessionStructure.prototype.needsRefresh = null;
        SessionStructure.prototype.aliceBaseKey = null;

        SessionStructure.Chain = (function() {

            function Chain(p) {
                this.messageKeys = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Chain.prototype.senderRatchetKey = null;
            Chain.prototype.senderRatchetKeyPrivate = null;
            Chain.prototype.chainKey = null;
            Chain.prototype.messageKeys = $util.emptyArray;

            Chain.ChainKey = (function() {

                function ChainKey(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                ChainKey.prototype.index = null;
                ChainKey.prototype.key = null;

                return ChainKey;
            })();

            Chain.MessageKey = (function() {

                function MessageKey(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                MessageKey.prototype.index = null;
                MessageKey.prototype.cipherKey = null;
                MessageKey.prototype.macKey = null;
                MessageKey.prototype.iv = null;

                return MessageKey;
            })();

            return Chain;
        })();

        SessionStructure.PendingKeyExchange = (function() {

            function PendingKeyExchange(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PendingKeyExchange.prototype.sequence = null;
            PendingKeyExchange.prototype.localBaseKey = null;
            PendingKeyExchange.prototype.localBaseKeyPrivate = null;
            PendingKeyExchange.prototype.localRatchetKey = null;
            PendingKeyExchange.prototype.localRatchetKeyPrivate = null;
            PendingKeyExchange.prototype.localIdentityKey = null;
            PendingKeyExchange.prototype.localIdentityKeyPrivate = null;

            return PendingKeyExchange;
        })();

        SessionStructure.PendingPreKey = (function() {

            function PendingPreKey(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PendingPreKey.prototype.preKeyId = null;
            PendingPreKey.prototype.signedPreKeyId = null;
            PendingPreKey.prototype.baseKey = null;

            return PendingPreKey;
        })();

        return SessionStructure;
    })();

    proto.SessionTransparencyMetadata = (function() {

        function SessionTransparencyMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SessionTransparencyMetadata.prototype.disclaimerText = null;
        SessionTransparencyMetadata.prototype.hcaId = null;
        SessionTransparencyMetadata.prototype.sessionTransparencyType = null;

        return SessionTransparencyMetadata;
    })();

    proto.SessionTransparencyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
        values[valuesById[1] = "NY_AI_SAFETY_DISCLAIMER"] = 1;
        return values;
    })();

    proto.SignalMessage = (function() {

        function SignalMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SignalMessage.prototype.ratchetKey = null;
        SignalMessage.prototype.counter = null;
        SignalMessage.prototype.previousCounter = null;
        SignalMessage.prototype.ciphertext = null;

        return SignalMessage;
    })();

    proto.SignedPreKeyRecordStructure = (function() {

        function SignedPreKeyRecordStructure(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SignedPreKeyRecordStructure.prototype.id = null;
        SignedPreKeyRecordStructure.prototype.publicKey = null;
        SignedPreKeyRecordStructure.prototype.privateKey = null;
        SignedPreKeyRecordStructure.prototype.signature = null;
        SignedPreKeyRecordStructure.prototype.timestamp = null;

        return SignedPreKeyRecordStructure;
    })();

    proto.StatusAttribution = (function() {

        function StatusAttribution(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StatusAttribution.prototype.type = null;
        StatusAttribution.prototype.actionUrl = null;
        StatusAttribution.prototype.statusReshare = null;
        StatusAttribution.prototype.externalShare = null;
        StatusAttribution.prototype.music = null;
        StatusAttribution.prototype.groupStatus = null;
        StatusAttribution.prototype.rlAttribution = null;
        StatusAttribution.prototype.aiCreatedAttribution = null;

        StatusAttribution.AiCreatedAttribution = (function() {

            function AiCreatedAttribution(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AiCreatedAttribution.prototype.source = null;

            AiCreatedAttribution.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_MIMICRY"] = 1;
                return values;
            })();

            return AiCreatedAttribution;
        })();

        StatusAttribution.ExternalShare = (function() {

            function ExternalShare(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExternalShare.prototype.actionUrl = null;
            ExternalShare.prototype.source = null;
            ExternalShare.prototype.duration = null;
            ExternalShare.prototype.actionFallbackUrl = null;

            ExternalShare.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INSTAGRAM"] = 1;
                values[valuesById[2] = "FACEBOOK"] = 2;
                values[valuesById[3] = "MESSENGER"] = 3;
                values[valuesById[4] = "SPOTIFY"] = 4;
                values[valuesById[5] = "YOUTUBE"] = 5;
                values[valuesById[6] = "PINTEREST"] = 6;
                values[valuesById[7] = "THREADS"] = 7;
                values[valuesById[8] = "APPLE_MUSIC"] = 8;
                values[valuesById[9] = "SHARECHAT"] = 9;
                values[valuesById[10] = "GOOGLE_PHOTOS"] = 10;
                return values;
            })();

            return ExternalShare;
        })();

        StatusAttribution.GroupStatus = (function() {

            function GroupStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            GroupStatus.prototype.authorJid = null;

            return GroupStatus;
        })();

        StatusAttribution.Music = (function() {

            function Music(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Music.prototype.authorName = null;
            Music.prototype.songId = null;
            Music.prototype.title = null;
            Music.prototype.author = null;
            Music.prototype.artistAttribution = null;
            Music.prototype.isExplicit = null;

            return Music;
        })();

        StatusAttribution.RLAttribution = (function() {

            function RLAttribution(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RLAttribution.prototype.source = null;

            RLAttribution.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "RAY_BAN_META_GLASSES"] = 1;
                values[valuesById[2] = "OAKLEY_META_GLASSES"] = 2;
                values[valuesById[3] = "HYPERNOVA_GLASSES"] = 3;
                return values;
            })();

            return RLAttribution;
        })();

        StatusAttribution.StatusReshare = (function() {

            function StatusReshare(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusReshare.prototype.source = null;
            StatusReshare.prototype.metadata = null;

            StatusReshare.Metadata = (function() {

                function Metadata(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Metadata.prototype.duration = null;
                Metadata.prototype.channelJid = null;
                Metadata.prototype.channelMessageId = null;
                Metadata.prototype.hasMultipleReshares = null;

                return Metadata;
            })();

            StatusReshare.Source = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INTERNAL_RESHARE"] = 1;
                values[valuesById[2] = "MENTION_RESHARE"] = 2;
                values[valuesById[3] = "CHANNEL_RESHARE"] = 3;
                values[valuesById[4] = "FORWARD"] = 4;
                return values;
            })();

            return StatusReshare;
        })();

        StatusAttribution.Type = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "RESHARE"] = 1;
            values[valuesById[2] = "EXTERNAL_SHARE"] = 2;
            values[valuesById[3] = "MUSIC"] = 3;
            values[valuesById[4] = "STATUS_MENTION"] = 4;
            values[valuesById[5] = "GROUP_STATUS"] = 5;
            values[valuesById[6] = "RL_ATTRIBUTION"] = 6;
            values[valuesById[7] = "AI_CREATED"] = 7;
            values[valuesById[8] = "LAYOUTS"] = 8;
            return values;
        })();

        return StatusAttribution;
    })();

    proto.StatusMentionMessage = (function() {

        function StatusMentionMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StatusMentionMessage.prototype.quotedStatus = null;

        return StatusMentionMessage;
    })();

    proto.StatusPSA = (function() {

        function StatusPSA(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StatusPSA.prototype.campaignId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        StatusPSA.prototype.campaignExpirationTimestamp = null;

        return StatusPSA;
    })();

    proto.StickerMetadata = (function() {

        function StickerMetadata(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        StickerMetadata.prototype.url = null;
        StickerMetadata.prototype.fileSha256 = null;
        StickerMetadata.prototype.fileEncSha256 = null;
        StickerMetadata.prototype.mediaKey = null;
        StickerMetadata.prototype.mimetype = null;
        StickerMetadata.prototype.height = null;
        StickerMetadata.prototype.width = null;
        StickerMetadata.prototype.directPath = null;
        StickerMetadata.prototype.fileLength = null;
        StickerMetadata.prototype.weight = null;
        StickerMetadata.prototype.lastStickerSentTs = null;
        StickerMetadata.prototype.isLottie = null;
        StickerMetadata.prototype.imageHash = null;
        StickerMetadata.prototype.isAvatarSticker = null;

        return StickerMetadata;
    })();

    proto.SyncActionData = (function() {

        function SyncActionData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncActionData.prototype.index = null;
        SyncActionData.prototype.value = null;
        SyncActionData.prototype.padding = null;
        SyncActionData.prototype.version = null;

        return SyncActionData;
    })();

    proto.SyncActionValue = (function() {

        function SyncActionValue(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncActionValue.prototype.timestamp = null;
        SyncActionValue.prototype.starAction = null;
        SyncActionValue.prototype.contactAction = null;
        SyncActionValue.prototype.muteAction = null;
        SyncActionValue.prototype.pinAction = null;
        SyncActionValue.prototype.pushNameSetting = null;
        SyncActionValue.prototype.quickReplyAction = null;
        SyncActionValue.prototype.recentEmojiWeightsAction = null;
        SyncActionValue.prototype.labelEditAction = null;
        SyncActionValue.prototype.labelAssociationAction = null;
        SyncActionValue.prototype.localeSetting = null;
        SyncActionValue.prototype.archiveChatAction = null;
        SyncActionValue.prototype.deleteMessageForMeAction = null;
        SyncActionValue.prototype.keyExpiration = null;
        SyncActionValue.prototype.markChatAsReadAction = null;
        SyncActionValue.prototype.clearChatAction = null;
        SyncActionValue.prototype.deleteChatAction = null;
        SyncActionValue.prototype.unarchiveChatsSetting = null;
        SyncActionValue.prototype.primaryFeature = null;
        SyncActionValue.prototype.androidUnsupportedActions = null;
        SyncActionValue.prototype.agentAction = null;
        SyncActionValue.prototype.subscriptionAction = null;
        SyncActionValue.prototype.userStatusMuteAction = null;
        SyncActionValue.prototype.timeFormatAction = null;
        SyncActionValue.prototype.nuxAction = null;
        SyncActionValue.prototype.primaryVersionAction = null;
        SyncActionValue.prototype.stickerAction = null;
        SyncActionValue.prototype.removeRecentStickerAction = null;
        SyncActionValue.prototype.chatAssignment = null;
        SyncActionValue.prototype.chatAssignmentOpenedStatus = null;
        SyncActionValue.prototype.pnForLidChatAction = null;
        SyncActionValue.prototype.marketingMessageAction = null;
        SyncActionValue.prototype.marketingMessageBroadcastAction = null;
        SyncActionValue.prototype.externalWebBetaAction = null;
        SyncActionValue.prototype.privacySettingRelayAllCalls = null;
        SyncActionValue.prototype.callLogAction = null;
        SyncActionValue.prototype.ugcBot = null;
        SyncActionValue.prototype.statusPrivacy = null;
        SyncActionValue.prototype.botWelcomeRequestAction = null;
        SyncActionValue.prototype.deleteIndividualCallLog = null;
        SyncActionValue.prototype.labelReorderingAction = null;
        SyncActionValue.prototype.paymentInfoAction = null;
        SyncActionValue.prototype.customPaymentMethodsAction = null;
        SyncActionValue.prototype.lockChatAction = null;
        SyncActionValue.prototype.chatLockSettings = null;
        SyncActionValue.prototype.wamoUserIdentifierAction = null;
        SyncActionValue.prototype.privacySettingDisableLinkPreviewsAction = null;
        SyncActionValue.prototype.deviceCapabilities = null;
        SyncActionValue.prototype.noteEditAction = null;
        SyncActionValue.prototype.favoritesAction = null;
        SyncActionValue.prototype.merchantPaymentPartnerAction = null;
        SyncActionValue.prototype.waffleAccountLinkStateAction = null;
        SyncActionValue.prototype.usernameChatStartMode = null;
        SyncActionValue.prototype.notificationActivitySettingAction = null;
        SyncActionValue.prototype.lidContactAction = null;
        SyncActionValue.prototype.ctwaPerCustomerDataSharingAction = null;
        SyncActionValue.prototype.paymentTosAction = null;
        SyncActionValue.prototype.privacySettingChannelsPersonalisedRecommendationAction = null;
        SyncActionValue.prototype.businessBroadcastAssociationAction = null;
        SyncActionValue.prototype.detectedOutcomesStatusAction = null;
        SyncActionValue.prototype.maibaAiFeaturesControlAction = null;
        SyncActionValue.prototype.businessBroadcastListAction = null;
        SyncActionValue.prototype.musicUserIdAction = null;
        SyncActionValue.prototype.statusPostOptInNotificationPreferencesAction = null;
        SyncActionValue.prototype.avatarUpdatedAction = null;
        SyncActionValue.prototype.privateProcessingSettingAction = null;
        SyncActionValue.prototype.newsletterSavedInterestsAction = null;
        SyncActionValue.prototype.aiThreadRenameAction = null;
        SyncActionValue.prototype.interactiveMessageAction = null;

        SyncActionValue.AgentAction = (function() {

            function AgentAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AgentAction.prototype.name = null;
            AgentAction.prototype.deviceID = null;
            AgentAction.prototype.isDeleted = null;

            return AgentAction;
        })();

        SyncActionValue.AiThreadRenameAction = (function() {

            function AiThreadRenameAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AiThreadRenameAction.prototype.newTitle = null;

            return AiThreadRenameAction;
        })();

        SyncActionValue.AndroidUnsupportedActions = (function() {

            function AndroidUnsupportedActions(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AndroidUnsupportedActions.prototype.allowed = null;

            return AndroidUnsupportedActions;
        })();

        SyncActionValue.ArchiveChatAction = (function() {

            function ArchiveChatAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ArchiveChatAction.prototype.archived = null;
            ArchiveChatAction.prototype.messageRange = null;

            return ArchiveChatAction;
        })();

        SyncActionValue.AvatarUpdatedAction = (function() {

            function AvatarUpdatedAction(p) {
                this.recentAvatarStickers = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            AvatarUpdatedAction.prototype.eventType = null;
            AvatarUpdatedAction.prototype.recentAvatarStickers = $util.emptyArray;

            AvatarUpdatedAction.AvatarEventType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UPDATED"] = 0;
                values[valuesById[1] = "CREATED"] = 1;
                values[valuesById[2] = "DELETED"] = 2;
                return values;
            })();

            return AvatarUpdatedAction;
        })();

        SyncActionValue.BotWelcomeRequestAction = (function() {

            function BotWelcomeRequestAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BotWelcomeRequestAction.prototype.isSent = null;

            return BotWelcomeRequestAction;
        })();

        SyncActionValue.BroadcastListParticipant = (function() {

            function BroadcastListParticipant(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BroadcastListParticipant.prototype.lidJid = "";
            BroadcastListParticipant.prototype.pnJid = null;

            return BroadcastListParticipant;
        })();

        SyncActionValue.BusinessBroadcastAssociationAction = (function() {

            function BusinessBroadcastAssociationAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BusinessBroadcastAssociationAction.prototype.deleted = null;

            return BusinessBroadcastAssociationAction;
        })();

        SyncActionValue.BusinessBroadcastListAction = (function() {

            function BusinessBroadcastListAction(p) {
                this.participants = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            BusinessBroadcastListAction.prototype.deleted = null;
            BusinessBroadcastListAction.prototype.participants = $util.emptyArray;
            BusinessBroadcastListAction.prototype.listName = null;

            return BusinessBroadcastListAction;
        })();

        SyncActionValue.CallLogAction = (function() {

            function CallLogAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CallLogAction.prototype.callLogRecord = null;

            return CallLogAction;
        })();

        SyncActionValue.ChatAssignmentAction = (function() {

            function ChatAssignmentAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ChatAssignmentAction.prototype.deviceAgentID = null;

            return ChatAssignmentAction;
        })();

        SyncActionValue.ChatAssignmentOpenedStatusAction = (function() {

            function ChatAssignmentOpenedStatusAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ChatAssignmentOpenedStatusAction.prototype.chatOpened = null;

            return ChatAssignmentOpenedStatusAction;
        })();

        SyncActionValue.ClearChatAction = (function() {

            function ClearChatAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ClearChatAction.prototype.messageRange = null;

            return ClearChatAction;
        })();

        SyncActionValue.ContactAction = (function() {

            function ContactAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ContactAction.prototype.fullName = null;
            ContactAction.prototype.firstName = null;
            ContactAction.prototype.lidJid = null;
            ContactAction.prototype.saveOnPrimaryAddressbook = null;
            ContactAction.prototype.pnJid = null;
            ContactAction.prototype.username = null;

            return ContactAction;
        })();

        SyncActionValue.CtwaPerCustomerDataSharingAction = (function() {

            function CtwaPerCustomerDataSharingAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CtwaPerCustomerDataSharingAction.prototype.isCtwaPerCustomerDataSharingEnabled = null;

            return CtwaPerCustomerDataSharingAction;
        })();

        SyncActionValue.CustomPaymentMethod = (function() {

            function CustomPaymentMethod(p) {
                this.metadata = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CustomPaymentMethod.prototype.credentialId = "";
            CustomPaymentMethod.prototype.country = "";
            CustomPaymentMethod.prototype.type = "";
            CustomPaymentMethod.prototype.metadata = $util.emptyArray;

            return CustomPaymentMethod;
        })();

        SyncActionValue.CustomPaymentMethodMetadata = (function() {

            function CustomPaymentMethodMetadata(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CustomPaymentMethodMetadata.prototype.key = "";
            CustomPaymentMethodMetadata.prototype.value = "";

            return CustomPaymentMethodMetadata;
        })();

        SyncActionValue.CustomPaymentMethodsAction = (function() {

            function CustomPaymentMethodsAction(p) {
                this.customPaymentMethods = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CustomPaymentMethodsAction.prototype.customPaymentMethods = $util.emptyArray;

            return CustomPaymentMethodsAction;
        })();

        SyncActionValue.DeleteChatAction = (function() {

            function DeleteChatAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeleteChatAction.prototype.messageRange = null;

            return DeleteChatAction;
        })();

        SyncActionValue.DeleteIndividualCallLogAction = (function() {

            function DeleteIndividualCallLogAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeleteIndividualCallLogAction.prototype.peerJid = null;
            DeleteIndividualCallLogAction.prototype.isIncoming = null;

            return DeleteIndividualCallLogAction;
        })();

        SyncActionValue.DeleteMessageForMeAction = (function() {

            function DeleteMessageForMeAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DeleteMessageForMeAction.prototype.deleteMedia = null;
            DeleteMessageForMeAction.prototype.messageTimestamp = null;

            return DeleteMessageForMeAction;
        })();

        SyncActionValue.DetectedOutcomesStatusAction = (function() {

            function DetectedOutcomesStatusAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            DetectedOutcomesStatusAction.prototype.isEnabled = null;

            return DetectedOutcomesStatusAction;
        })();

        SyncActionValue.ExternalWebBetaAction = (function() {

            function ExternalWebBetaAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            ExternalWebBetaAction.prototype.isOptIn = null;

            return ExternalWebBetaAction;
        })();

        SyncActionValue.FavoritesAction = (function() {

            function FavoritesAction(p) {
                this.favorites = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            FavoritesAction.prototype.favorites = $util.emptyArray;

            FavoritesAction.Favorite = (function() {

                function Favorite(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Favorite.prototype.id = null;

                return Favorite;
            })();

            return FavoritesAction;
        })();

        SyncActionValue.InteractiveMessageAction = (function() {

            function InteractiveMessageAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            InteractiveMessageAction.prototype.type = 1;

            InteractiveMessageAction.InteractiveMessageActionMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "DISABLE_CTA"] = 1;
                return values;
            })();

            return InteractiveMessageAction;
        })();

        SyncActionValue.KeyExpiration = (function() {

            function KeyExpiration(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            KeyExpiration.prototype.expiredKeyEpoch = null;

            return KeyExpiration;
        })();

        SyncActionValue.LabelAssociationAction = (function() {

            function LabelAssociationAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LabelAssociationAction.prototype.labeled = null;

            return LabelAssociationAction;
        })();

        SyncActionValue.LabelEditAction = (function() {

            function LabelEditAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LabelEditAction.prototype.name = null;
            LabelEditAction.prototype.color = null;
            LabelEditAction.prototype.predefinedId = null;
            LabelEditAction.prototype.deleted = null;
            LabelEditAction.prototype.orderIndex = null;
            LabelEditAction.prototype.isActive = null;
            LabelEditAction.prototype.type = null;
            LabelEditAction.prototype.isImmutable = null;
            LabelEditAction.prototype.muteEndTimeMs = null;

            LabelEditAction.ListType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "UNREAD"] = 1;
                values[valuesById[2] = "GROUPS"] = 2;
                values[valuesById[3] = "FAVORITES"] = 3;
                values[valuesById[4] = "PREDEFINED"] = 4;
                values[valuesById[5] = "CUSTOM"] = 5;
                values[valuesById[6] = "COMMUNITY"] = 6;
                values[valuesById[7] = "SERVER_ASSIGNED"] = 7;
                values[valuesById[8] = "DRAFTED"] = 8;
                values[valuesById[9] = "AI_HANDOFF"] = 9;
                return values;
            })();

            return LabelEditAction;
        })();

        SyncActionValue.LabelReorderingAction = (function() {

            function LabelReorderingAction(p) {
                this.sortedLabelIds = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LabelReorderingAction.prototype.sortedLabelIds = $util.emptyArray;

            return LabelReorderingAction;
        })();

        SyncActionValue.LidContactAction = (function() {

            function LidContactAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LidContactAction.prototype.fullName = null;
            LidContactAction.prototype.firstName = null;
            LidContactAction.prototype.username = null;

            return LidContactAction;
        })();

        SyncActionValue.LocaleSetting = (function() {

            function LocaleSetting(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LocaleSetting.prototype.locale = null;

            return LocaleSetting;
        })();

        SyncActionValue.LockChatAction = (function() {

            function LockChatAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            LockChatAction.prototype.locked = null;

            return LockChatAction;
        })();

        SyncActionValue.MaibaAIFeaturesControlAction = (function() {

            function MaibaAIFeaturesControlAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MaibaAIFeaturesControlAction.prototype.aiFeatureStatus = null;

            MaibaAIFeaturesControlAction.MaibaAIFeatureStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ENABLED"] = 0;
                values[valuesById[1] = "ENABLED_HAS_LEARNING"] = 1;
                values[valuesById[2] = "DISABLED"] = 2;
                return values;
            })();

            return MaibaAIFeaturesControlAction;
        })();

        SyncActionValue.MarkChatAsReadAction = (function() {

            function MarkChatAsReadAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MarkChatAsReadAction.prototype.read = null;
            MarkChatAsReadAction.prototype.messageRange = null;

            return MarkChatAsReadAction;
        })();

        SyncActionValue.MarketingMessageAction = (function() {

            function MarketingMessageAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MarketingMessageAction.prototype.name = null;
            MarketingMessageAction.prototype.message = null;
            MarketingMessageAction.prototype.type = null;
            MarketingMessageAction.prototype.createdAt = null;
            MarketingMessageAction.prototype.lastSentAt = null;
            MarketingMessageAction.prototype.isDeleted = null;
            MarketingMessageAction.prototype.mediaId = null;

            MarketingMessageAction.MarketingMessagePrototypeType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PERSONALIZED"] = 0;
                return values;
            })();

            return MarketingMessageAction;
        })();

        SyncActionValue.MarketingMessageBroadcastAction = (function() {

            function MarketingMessageBroadcastAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MarketingMessageBroadcastAction.prototype.repliedCount = null;

            return MarketingMessageBroadcastAction;
        })();

        SyncActionValue.MerchantPaymentPartnerAction = (function() {

            function MerchantPaymentPartnerAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MerchantPaymentPartnerAction.prototype.status = 0;
            MerchantPaymentPartnerAction.prototype.country = "";
            MerchantPaymentPartnerAction.prototype.gatewayName = null;
            MerchantPaymentPartnerAction.prototype.credentialId = null;

            MerchantPaymentPartnerAction.Status = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ACTIVE"] = 0;
                values[valuesById[1] = "INACTIVE"] = 1;
                return values;
            })();

            return MerchantPaymentPartnerAction;
        })();

        SyncActionValue.MusicUserIdAction = (function() {

            function MusicUserIdAction(p) {
                this.musicUserIdMap = {};
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MusicUserIdAction.prototype.musicUserId = null;
            MusicUserIdAction.prototype.musicUserIdMap = $util.emptyObject;

            return MusicUserIdAction;
        })();

        SyncActionValue.MuteAction = (function() {

            function MuteAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            MuteAction.prototype.muted = null;
            MuteAction.prototype.muteEndTimestamp = null;
            MuteAction.prototype.autoMuted = null;

            return MuteAction;
        })();

        SyncActionValue.NewsletterSavedInterestsAction = (function() {

            function NewsletterSavedInterestsAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NewsletterSavedInterestsAction.prototype.newsletterSavedInterests = null;

            return NewsletterSavedInterestsAction;
        })();

        SyncActionValue.NoteEditAction = (function() {

            function NoteEditAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NoteEditAction.prototype.type = null;
            NoteEditAction.prototype.chatJid = null;
            NoteEditAction.prototype.createdAt = null;
            NoteEditAction.prototype.deleted = null;
            NoteEditAction.prototype.unstructuredContent = null;

            NoteEditAction.NoteType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "UNSTRUCTURED"] = 1;
                values[valuesById[2] = "STRUCTURED"] = 2;
                return values;
            })();

            return NoteEditAction;
        })();

        SyncActionValue.NotificationActivitySettingAction = (function() {

            function NotificationActivitySettingAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NotificationActivitySettingAction.prototype.notificationActivitySetting = null;

            NotificationActivitySettingAction.NotificationActivitySetting = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DEFAULT_ALL_MESSAGES"] = 0;
                values[valuesById[1] = "ALL_MESSAGES"] = 1;
                values[valuesById[2] = "HIGHLIGHTS"] = 2;
                values[valuesById[3] = "DEFAULT_HIGHLIGHTS"] = 3;
                return values;
            })();

            return NotificationActivitySettingAction;
        })();

        SyncActionValue.NuxAction = (function() {

            function NuxAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            NuxAction.prototype.acknowledged = null;

            return NuxAction;
        })();

        SyncActionValue.PaymentInfoAction = (function() {

            function PaymentInfoAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaymentInfoAction.prototype.cpi = null;

            return PaymentInfoAction;
        })();

        SyncActionValue.PaymentTosAction = (function() {

            function PaymentTosAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PaymentTosAction.prototype.paymentNotice = 0;
            PaymentTosAction.prototype.accepted = false;

            PaymentTosAction.PaymentNotice = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "BR_PAY_PRIVACY_POLICY"] = 0;
                return values;
            })();

            return PaymentTosAction;
        })();

        SyncActionValue.PinAction = (function() {

            function PinAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PinAction.prototype.pinned = null;

            return PinAction;
        })();

        SyncActionValue.PnForLidChatAction = (function() {

            function PnForLidChatAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PnForLidChatAction.prototype.pnJid = null;

            return PnForLidChatAction;
        })();

        SyncActionValue.PrimaryFeature = (function() {

            function PrimaryFeature(p) {
                this.flags = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PrimaryFeature.prototype.flags = $util.emptyArray;

            return PrimaryFeature;
        })();

        SyncActionValue.PrimaryVersionAction = (function() {

            function PrimaryVersionAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PrimaryVersionAction.prototype.version = null;

            return PrimaryVersionAction;
        })();

        SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction = (function() {

            function PrivacySettingChannelsPersonalisedRecommendationAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PrivacySettingChannelsPersonalisedRecommendationAction.prototype.isUserOptedOut = null;

            return PrivacySettingChannelsPersonalisedRecommendationAction;
        })();

        SyncActionValue.PrivacySettingDisableLinkPreviewsAction = (function() {

            function PrivacySettingDisableLinkPreviewsAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PrivacySettingDisableLinkPreviewsAction.prototype.isPreviewsDisabled = null;

            return PrivacySettingDisableLinkPreviewsAction;
        })();

        SyncActionValue.PrivacySettingRelayAllCalls = (function() {

            function PrivacySettingRelayAllCalls(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PrivacySettingRelayAllCalls.prototype.isEnabled = null;

            return PrivacySettingRelayAllCalls;
        })();

        SyncActionValue.PrivateProcessingSettingAction = (function() {

            function PrivateProcessingSettingAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PrivateProcessingSettingAction.prototype.privateProcessingStatus = null;

            PrivateProcessingSettingAction.PrivateProcessingStatus = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNDEFINED"] = 0;
                values[valuesById[1] = "ENABLED"] = 1;
                values[valuesById[2] = "DISABLED"] = 2;
                return values;
            })();

            return PrivateProcessingSettingAction;
        })();

        SyncActionValue.PushNameSetting = (function() {

            function PushNameSetting(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            PushNameSetting.prototype.name = null;

            return PushNameSetting;
        })();

        SyncActionValue.QuickReplyAction = (function() {

            function QuickReplyAction(p) {
                this.keywords = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            QuickReplyAction.prototype.shortcut = null;
            QuickReplyAction.prototype.message = null;
            QuickReplyAction.prototype.keywords = $util.emptyArray;
            QuickReplyAction.prototype.count = null;
            QuickReplyAction.prototype.deleted = null;

            return QuickReplyAction;
        })();

        SyncActionValue.RecentEmojiWeightsAction = (function() {

            function RecentEmojiWeightsAction(p) {
                this.weights = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RecentEmojiWeightsAction.prototype.weights = $util.emptyArray;

            return RecentEmojiWeightsAction;
        })();

        SyncActionValue.RemoveRecentStickerAction = (function() {

            function RemoveRecentStickerAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            RemoveRecentStickerAction.prototype.lastStickerSentTs = null;

            return RemoveRecentStickerAction;
        })();

        SyncActionValue.StarAction = (function() {

            function StarAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StarAction.prototype.starred = null;

            return StarAction;
        })();

        SyncActionValue.StatusPostOptInNotificationPreferencesAction = (function() {

            function StatusPostOptInNotificationPreferencesAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusPostOptInNotificationPreferencesAction.prototype.enabled = null;

            return StatusPostOptInNotificationPreferencesAction;
        })();

        SyncActionValue.StatusPrivacyAction = (function() {

            function StatusPrivacyAction(p) {
                this.userJid = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StatusPrivacyAction.prototype.mode = null;
            StatusPrivacyAction.prototype.userJid = $util.emptyArray;

            StatusPrivacyAction.StatusDistributionMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ALLOW_LIST"] = 0;
                values[valuesById[1] = "DENY_LIST"] = 1;
                values[valuesById[2] = "CONTACTS"] = 2;
                values[valuesById[3] = "CLOSE_FRIENDS"] = 3;
                return values;
            })();

            return StatusPrivacyAction;
        })();

        SyncActionValue.StickerAction = (function() {

            function StickerAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            StickerAction.prototype.url = null;
            StickerAction.prototype.fileEncSha256 = null;
            StickerAction.prototype.mediaKey = null;
            StickerAction.prototype.mimetype = null;
            StickerAction.prototype.height = null;
            StickerAction.prototype.width = null;
            StickerAction.prototype.directPath = null;
            StickerAction.prototype.fileLength = null;
            StickerAction.prototype.isFavorite = null;
            StickerAction.prototype.deviceIdHint = null;
            StickerAction.prototype.isLottie = null;
            StickerAction.prototype.imageHash = null;
            StickerAction.prototype.isAvatarSticker = null;

            return StickerAction;
        })();

        SyncActionValue.SubscriptionAction = (function() {

            function SubscriptionAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SubscriptionAction.prototype.isDeactivated = null;
            SubscriptionAction.prototype.isAutoRenewing = null;
            SubscriptionAction.prototype.expirationDate = null;

            return SubscriptionAction;
        })();

        SyncActionValue.SyncActionMessage = (function() {

            function SyncActionMessage(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SyncActionMessage.prototype.key = null;
            SyncActionMessage.prototype.timestamp = null;

            return SyncActionMessage;
        })();

        SyncActionValue.SyncActionMessageRange = (function() {

            function SyncActionMessageRange(p) {
                this.messages = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            SyncActionMessageRange.prototype.lastMessageTimestamp = null;
            SyncActionMessageRange.prototype.lastSystemMessageTimestamp = null;
            SyncActionMessageRange.prototype.messages = $util.emptyArray;

            return SyncActionMessageRange;
        })();

        SyncActionValue.TimeFormatAction = (function() {

            function TimeFormatAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TimeFormatAction.prototype.isTwentyFourHourFormatEnabled = null;

            return TimeFormatAction;
        })();

        SyncActionValue.UGCBot = (function() {

            function UGCBot(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UGCBot.prototype.definition = null;

            return UGCBot;
        })();

        SyncActionValue.UnarchiveChatsSetting = (function() {

            function UnarchiveChatsSetting(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UnarchiveChatsSetting.prototype.unarchiveChats = null;

            return UnarchiveChatsSetting;
        })();

        SyncActionValue.UserStatusMuteAction = (function() {

            function UserStatusMuteAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UserStatusMuteAction.prototype.muted = null;

            return UserStatusMuteAction;
        })();

        SyncActionValue.UsernameChatStartModeAction = (function() {

            function UsernameChatStartModeAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UsernameChatStartModeAction.prototype.chatStartMode = null;

            UsernameChatStartModeAction.ChatStartMode = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[1] = "LID"] = 1;
                values[valuesById[2] = "PN"] = 2;
                return values;
            })();

            return UsernameChatStartModeAction;
        })();

        SyncActionValue.WaffleAccountLinkStateAction = (function() {

            function WaffleAccountLinkStateAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            WaffleAccountLinkStateAction.prototype.linkState = null;

            WaffleAccountLinkStateAction.AccountLinkState = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ACTIVE"] = 0;
                values[valuesById[1] = "PAUSED"] = 1;
                values[valuesById[2] = "UNLINKED"] = 2;
                return values;
            })();

            return WaffleAccountLinkStateAction;
        })();

        SyncActionValue.WamoUserIdentifierAction = (function() {

            function WamoUserIdentifierAction(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            WamoUserIdentifierAction.prototype.identifier = null;

            return WamoUserIdentifierAction;
        })();

        return SyncActionValue;
    })();

    proto.SyncdIndex = (function() {

        function SyncdIndex(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdIndex.prototype.blob = null;

        return SyncdIndex;
    })();

    proto.SyncdMutation = (function() {

        function SyncdMutation(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdMutation.prototype.operation = null;
        SyncdMutation.prototype.record = null;

        SyncdMutation.SyncdOperation = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET"] = 0;
            values[valuesById[1] = "REMOVE"] = 1;
            return values;
        })();

        return SyncdMutation;
    })();

    proto.SyncdMutations = (function() {

        function SyncdMutations(p) {
            this.mutations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdMutations.prototype.mutations = $util.emptyArray;

        return SyncdMutations;
    })();

    proto.SyncdPatch = (function() {

        function SyncdPatch(p) {
            this.mutations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdPatch.prototype.version = null;
        SyncdPatch.prototype.mutations = $util.emptyArray;
        SyncdPatch.prototype.externalMutations = null;
        SyncdPatch.prototype.snapshotMac = null;
        SyncdPatch.prototype.patchMac = null;
        SyncdPatch.prototype.keyId = null;
        SyncdPatch.prototype.exitCode = null;
        SyncdPatch.prototype.deviceIndex = null;
        SyncdPatch.prototype.clientDebugData = null;

        return SyncdPatch;
    })();

    proto.SyncdRecord = (function() {

        function SyncdRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdRecord.prototype.index = null;
        SyncdRecord.prototype.value = null;
        SyncdRecord.prototype.keyId = null;

        return SyncdRecord;
    })();

    proto.SyncdSnapshot = (function() {

        function SyncdSnapshot(p) {
            this.records = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdSnapshot.prototype.version = null;
        SyncdSnapshot.prototype.records = $util.emptyArray;
        SyncdSnapshot.prototype.mac = null;
        SyncdSnapshot.prototype.keyId = null;

        return SyncdSnapshot;
    })();

    proto.SyncdValue = (function() {

        function SyncdValue(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdValue.prototype.blob = null;

        return SyncdValue;
    })();

    proto.SyncdVersion = (function() {

        function SyncdVersion(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        SyncdVersion.prototype.version = null;

        return SyncdVersion;
    })();

    proto.TapLinkAction = (function() {

        function TapLinkAction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        TapLinkAction.prototype.title = null;
        TapLinkAction.prototype.tapUrl = null;

        return TapLinkAction;
    })();

    proto.TemplateButton = (function() {

        function TemplateButton(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        TemplateButton.prototype.index = null;
        TemplateButton.prototype.quickReplyButton = null;
        TemplateButton.prototype.urlButton = null;
        TemplateButton.prototype.callButton = null;

        TemplateButton.CallButton = (function() {

            function CallButton(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            CallButton.prototype.displayText = null;
            CallButton.prototype.phoneNumber = null;

            return CallButton;
        })();

        TemplateButton.QuickReplyButton = (function() {

            function QuickReplyButton(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            QuickReplyButton.prototype.displayText = null;
            QuickReplyButton.prototype.id = null;

            return QuickReplyButton;
        })();

        TemplateButton.URLButton = (function() {

            function URLButton(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            URLButton.prototype.displayText = null;
            URLButton.prototype.url = null;

            return URLButton;
        })();

        return TemplateButton;
    })();

    proto.ThreadID = (function() {

        function ThreadID(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        ThreadID.prototype.threadType = null;
        ThreadID.prototype.threadKey = null;

        ThreadID.ThreadType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "VIEW_REPLIES"] = 1;
            values[valuesById[2] = "AI_THREAD"] = 2;
            return values;
        })();

        return ThreadID;
    })();

    proto.UrlTrackingMap = (function() {

        function UrlTrackingMap(p) {
            this.urlTrackingMapElements = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UrlTrackingMap.prototype.urlTrackingMapElements = $util.emptyArray;

        UrlTrackingMap.UrlTrackingMapElement = (function() {

            function UrlTrackingMapElement(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            UrlTrackingMapElement.prototype.originalUrl = null;
            UrlTrackingMapElement.prototype.unconsentedUsersUrl = null;
            UrlTrackingMapElement.prototype.consentedUsersUrl = null;
            UrlTrackingMapElement.prototype.cardIndex = null;

            return UrlTrackingMapElement;
        })();

        return UrlTrackingMap;
    })();

    proto.UserPassword = (function() {

        function UserPassword(p) {
            this.transformerArg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UserPassword.prototype.encoding = null;
        UserPassword.prototype.transformer = null;
        UserPassword.prototype.transformerArg = $util.emptyArray;
        UserPassword.prototype.transformedData = null;

        UserPassword.Encoding = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UTF8"] = 0;
            values[valuesById[1] = "UTF8_BROKEN"] = 1;
            return values;
        })();

        UserPassword.Transformer = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "PBKDF2_HMAC_SHA512"] = 1;
            values[valuesById[2] = "PBKDF2_HMAC_SHA384"] = 2;
            return values;
        })();

        UserPassword.TransformerArg = (function() {

            function TransformerArg(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            TransformerArg.prototype.key = null;
            TransformerArg.prototype.value = null;

            TransformerArg.Value = (function() {

                function Value(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                Value.prototype.asBlob = null;
                Value.prototype.asUnsignedInteger = null;

                return Value;
            })();

            return TransformerArg;
        })();

        return UserPassword;
    })();

    proto.UserReceipt = (function() {

        function UserReceipt(p) {
            this.pendingDeviceJid = [];
            this.deliveredDeviceJid = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        UserReceipt.prototype.userJid = "";
        UserReceipt.prototype.receiptTimestamp = null;
        UserReceipt.prototype.readTimestamp = null;
        UserReceipt.prototype.playedTimestamp = null;
        UserReceipt.prototype.pendingDeviceJid = $util.emptyArray;
        UserReceipt.prototype.deliveredDeviceJid = $util.emptyArray;

        return UserReceipt;
    })();

    proto.VerifiedNameCertificate = (function() {

        function VerifiedNameCertificate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        VerifiedNameCertificate.prototype.details = null;
        VerifiedNameCertificate.prototype.signature = null;
        VerifiedNameCertificate.prototype.serverSignature = null;

        VerifiedNameCertificate.Details = (function() {

            function Details(p) {
                this.localizedNames = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            }

            Details.prototype.serial = null;
            Details.prototype.issuer = null;
            Details.prototype.verifiedName = null;
            Details.prototype.localizedNames = $util.emptyArray;
            Details.prototype.issueTime = null;

            return Details;
        })();

        return VerifiedNameCertificate;
    })();

    proto.WallpaperSettings = (function() {

        function WallpaperSettings(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WallpaperSettings.prototype.filename = null;
        WallpaperSettings.prototype.opacity = null;

        return WallpaperSettings;
    })();

    proto.WebFeatures = (function() {

        function WebFeatures(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WebFeatures.prototype.labelsDisplay = null;
        WebFeatures.prototype.voipIndividualOutgoing = null;
        WebFeatures.prototype.groupsV3 = null;
        WebFeatures.prototype.groupsV3Create = null;
        WebFeatures.prototype.changeNumberV2 = null;
        WebFeatures.prototype.queryStatusV3Thumbnail = null;
        WebFeatures.prototype.liveLocations = null;
        WebFeatures.prototype.queryVname = null;
        WebFeatures.prototype.voipIndividualIncoming = null;
        WebFeatures.prototype.quickRepliesQuery = null;
        WebFeatures.prototype.payments = null;
        WebFeatures.prototype.stickerPackQuery = null;
        WebFeatures.prototype.liveLocationsFinal = null;
        WebFeatures.prototype.labelsEdit = null;
        WebFeatures.prototype.mediaUpload = null;
        WebFeatures.prototype.mediaUploadRichQuickReplies = null;
        WebFeatures.prototype.vnameV2 = null;
        WebFeatures.prototype.videoPlaybackUrl = null;
        WebFeatures.prototype.statusRanking = null;
        WebFeatures.prototype.voipIndividualVideo = null;
        WebFeatures.prototype.thirdPartyStickers = null;
        WebFeatures.prototype.frequentlyForwardedSetting = null;
        WebFeatures.prototype.groupsV4JoinPermission = null;
        WebFeatures.prototype.recentStickers = null;
        WebFeatures.prototype.catalog = null;
        WebFeatures.prototype.starredStickers = null;
        WebFeatures.prototype.voipGroupCall = null;
        WebFeatures.prototype.templateMessage = null;
        WebFeatures.prototype.templateMessageInteractivity = null;
        WebFeatures.prototype.ephemeralMessages = null;
        WebFeatures.prototype.e2ENotificationSync = null;
        WebFeatures.prototype.recentStickersV2 = null;
        WebFeatures.prototype.recentStickersV3 = null;
        WebFeatures.prototype.userNotice = null;
        WebFeatures.prototype.support = null;
        WebFeatures.prototype.groupUiiCleanup = null;
        WebFeatures.prototype.groupDogfoodingInternalOnly = null;
        WebFeatures.prototype.settingsSync = null;
        WebFeatures.prototype.archiveV2 = null;
        WebFeatures.prototype.ephemeralAllowGroupMembers = null;
        WebFeatures.prototype.ephemeral24HDuration = null;
        WebFeatures.prototype.mdForceUpgrade = null;
        WebFeatures.prototype.disappearingMode = null;
        WebFeatures.prototype.externalMdOptInAvailable = null;
        WebFeatures.prototype.noDeleteMessageTimeLimit = null;

        WebFeatures.Flag = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_STARTED"] = 0;
            values[valuesById[1] = "FORCE_UPGRADE"] = 1;
            values[valuesById[2] = "DEVELOPMENT"] = 2;
            values[valuesById[3] = "PRODUCTION"] = 3;
            return values;
        })();

        return WebFeatures;
    })();

    proto.WebLinkRenderConfig = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEBVIEW"] = 0;
        values[valuesById[1] = "SYSTEM"] = 1;
        return values;
    })();

    proto.WebMessageInfo = (function() {

        function WebMessageInfo(p) {
            this.messageStubParameters = [];
            this.labels = [];
            this.userReceipt = [];
            this.reactions = [];
            this.pollUpdates = [];
            this.eventResponses = [];
            this.statusMentions = [];
            this.messageAddOns = [];
            this.statusMentionSources = [];
            this.supportAiCitations = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WebMessageInfo.prototype.key = null;
        WebMessageInfo.prototype.message = null;
        WebMessageInfo.prototype.messageTimestamp = null;
        WebMessageInfo.prototype.status = null;
        WebMessageInfo.prototype.participant = null;
        WebMessageInfo.prototype.messageC2STimestamp = null;
        WebMessageInfo.prototype.ignore = null;
        WebMessageInfo.prototype.starred = null;
        WebMessageInfo.prototype.broadcast = null;
        WebMessageInfo.prototype.pushName = null;
        WebMessageInfo.prototype.mediaCiphertextSha256 = null;
        WebMessageInfo.prototype.multicast = null;
        WebMessageInfo.prototype.urlText = null;
        WebMessageInfo.prototype.urlNumber = null;
        WebMessageInfo.prototype.messageStubType = null;
        WebMessageInfo.prototype.clearMedia = null;
        WebMessageInfo.prototype.messageStubParameters = $util.emptyArray;
        WebMessageInfo.prototype.duration = null;
        WebMessageInfo.prototype.labels = $util.emptyArray;
        WebMessageInfo.prototype.paymentInfo = null;
        WebMessageInfo.prototype.finalLiveLocation = null;
        WebMessageInfo.prototype.quotedPaymentInfo = null;
        WebMessageInfo.prototype.ephemeralStartTimestamp = null;
        WebMessageInfo.prototype.ephemeralDuration = null;
        WebMessageInfo.prototype.ephemeralOffToOn = null;
        WebMessageInfo.prototype.ephemeralOutOfSync = null;
        WebMessageInfo.prototype.bizPrivacyStatus = null;
        WebMessageInfo.prototype.verifiedBizName = null;
        WebMessageInfo.prototype.mediaData = null;
        WebMessageInfo.prototype.photoChange = null;
        WebMessageInfo.prototype.userReceipt = $util.emptyArray;
        WebMessageInfo.prototype.reactions = $util.emptyArray;
        WebMessageInfo.prototype.quotedStickerData = null;
        WebMessageInfo.prototype.futureproofData = null;
        WebMessageInfo.prototype.statusPsa = null;
        WebMessageInfo.prototype.pollUpdates = $util.emptyArray;
        WebMessageInfo.prototype.pollAdditionalMetadata = null;
        WebMessageInfo.prototype.agentId = null;
        WebMessageInfo.prototype.statusAlreadyViewed = null;
        WebMessageInfo.prototype.messageSecret = null;
        WebMessageInfo.prototype.keepInChat = null;
        WebMessageInfo.prototype.originalSelfAuthorUserJidString = null;
        WebMessageInfo.prototype.revokeMessageTimestamp = null;
        WebMessageInfo.prototype.pinInChat = null;
        WebMessageInfo.prototype.premiumMessageInfo = null;
        WebMessageInfo.prototype.is1PBizBotMessage = null;
        WebMessageInfo.prototype.isGroupHistoryMessage = null;
        WebMessageInfo.prototype.botMessageInvokerJid = null;
        WebMessageInfo.prototype.commentMetadata = null;
        WebMessageInfo.prototype.eventResponses = $util.emptyArray;
        WebMessageInfo.prototype.reportingTokenInfo = null;
        WebMessageInfo.prototype.newsletterServerId = null;
        WebMessageInfo.prototype.eventAdditionalMetadata = null;
        WebMessageInfo.prototype.isMentionedInStatus = null;
        WebMessageInfo.prototype.statusMentions = $util.emptyArray;
        WebMessageInfo.prototype.targetMessageId = null;
        WebMessageInfo.prototype.messageAddOns = $util.emptyArray;
        WebMessageInfo.prototype.statusMentionMessageInfo = null;
        WebMessageInfo.prototype.isSupportAiMessage = null;
        WebMessageInfo.prototype.statusMentionSources = $util.emptyArray;
        WebMessageInfo.prototype.supportAiCitations = $util.emptyArray;
        WebMessageInfo.prototype.botTargetId = null;
        WebMessageInfo.prototype.groupHistoryIndividualMessageInfo = null;
        WebMessageInfo.prototype.groupHistoryBundleInfo = null;
        WebMessageInfo.prototype.interactiveMessageAdditionalMetadata = null;
        WebMessageInfo.prototype.quarantinedMessage = null;

        WebMessageInfo.BizPrivacyStatus = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "E2EE"] = 0;
            values[valuesById[2] = "FB"] = 2;
            values[valuesById[1] = "BSP"] = 1;
            values[valuesById[3] = "BSP_AND_FB"] = 3;
            return values;
        })();

        WebMessageInfo.Status = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ERROR"] = 0;
            values[valuesById[1] = "PENDING"] = 1;
            values[valuesById[2] = "SERVER_ACK"] = 2;
            values[valuesById[3] = "DELIVERY_ACK"] = 3;
            values[valuesById[4] = "READ"] = 4;
            values[valuesById[5] = "PLAYED"] = 5;
            return values;
        })();

        WebMessageInfo.StubType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "REVOKE"] = 1;
            values[valuesById[2] = "CIPHERTEXT"] = 2;
            values[valuesById[3] = "FUTUREPROOF"] = 3;
            values[valuesById[4] = "NON_VERIFIED_TRANSITION"] = 4;
            values[valuesById[5] = "UNVERIFIED_TRANSITION"] = 5;
            values[valuesById[6] = "VERIFIED_TRANSITION"] = 6;
            values[valuesById[7] = "VERIFIED_LOW_UNKNOWN"] = 7;
            values[valuesById[8] = "VERIFIED_HIGH"] = 8;
            values[valuesById[9] = "VERIFIED_INITIAL_UNKNOWN"] = 9;
            values[valuesById[10] = "VERIFIED_INITIAL_LOW"] = 10;
            values[valuesById[11] = "VERIFIED_INITIAL_HIGH"] = 11;
            values[valuesById[12] = "VERIFIED_TRANSITION_ANY_TO_NONE"] = 12;
            values[valuesById[13] = "VERIFIED_TRANSITION_ANY_TO_HIGH"] = 13;
            values[valuesById[14] = "VERIFIED_TRANSITION_HIGH_TO_LOW"] = 14;
            values[valuesById[15] = "VERIFIED_TRANSITION_HIGH_TO_UNKNOWN"] = 15;
            values[valuesById[16] = "VERIFIED_TRANSITION_UNKNOWN_TO_LOW"] = 16;
            values[valuesById[17] = "VERIFIED_TRANSITION_LOW_TO_UNKNOWN"] = 17;
            values[valuesById[18] = "VERIFIED_TRANSITION_NONE_TO_LOW"] = 18;
            values[valuesById[19] = "VERIFIED_TRANSITION_NONE_TO_UNKNOWN"] = 19;
            values[valuesById[20] = "GROUP_CREATE"] = 20;
            values[valuesById[21] = "GROUP_CHANGE_SUBJECT"] = 21;
            values[valuesById[22] = "GROUP_CHANGE_ICON"] = 22;
            values[valuesById[23] = "GROUP_CHANGE_INVITE_LINK"] = 23;
            values[valuesById[24] = "GROUP_CHANGE_DESCRIPTION"] = 24;
            values[valuesById[25] = "GROUP_CHANGE_RESTRICT"] = 25;
            values[valuesById[26] = "GROUP_CHANGE_ANNOUNCE"] = 26;
            values[valuesById[27] = "GROUP_PARTICIPANT_ADD"] = 27;
            values[valuesById[28] = "GROUP_PARTICIPANT_REMOVE"] = 28;
            values[valuesById[29] = "GROUP_PARTICIPANT_PROMOTE"] = 29;
            values[valuesById[30] = "GROUP_PARTICIPANT_DEMOTE"] = 30;
            values[valuesById[31] = "GROUP_PARTICIPANT_INVITE"] = 31;
            values[valuesById[32] = "GROUP_PARTICIPANT_LEAVE"] = 32;
            values[valuesById[33] = "GROUP_PARTICIPANT_CHANGE_NUMBER"] = 33;
            values[valuesById[34] = "BROADCAST_CREATE"] = 34;
            values[valuesById[35] = "BROADCAST_ADD"] = 35;
            values[valuesById[36] = "BROADCAST_REMOVE"] = 36;
            values[valuesById[37] = "GENERIC_NOTIFICATION"] = 37;
            values[valuesById[38] = "E2E_IDENTITY_CHANGED"] = 38;
            values[valuesById[39] = "E2E_ENCRYPTED"] = 39;
            values[valuesById[40] = "CALL_MISSED_VOICE"] = 40;
            values[valuesById[41] = "CALL_MISSED_VIDEO"] = 41;
            values[valuesById[42] = "INDIVIDUAL_CHANGE_NUMBER"] = 42;
            values[valuesById[43] = "GROUP_DELETE"] = 43;
            values[valuesById[44] = "GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE"] = 44;
            values[valuesById[45] = "CALL_MISSED_GROUP_VOICE"] = 45;
            values[valuesById[46] = "CALL_MISSED_GROUP_VIDEO"] = 46;
            values[valuesById[47] = "PAYMENT_CIPHERTEXT"] = 47;
            values[valuesById[48] = "PAYMENT_FUTUREPROOF"] = 48;
            values[valuesById[49] = "PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED"] = 49;
            values[valuesById[50] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED"] = 50;
            values[valuesById[51] = "PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED"] = 51;
            values[valuesById[52] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP"] = 52;
            values[valuesById[53] = "PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP"] = 53;
            values[valuesById[54] = "PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER"] = 54;
            values[valuesById[55] = "PAYMENT_ACTION_SEND_PAYMENT_REMINDER"] = 55;
            values[valuesById[56] = "PAYMENT_ACTION_SEND_PAYMENT_INVITATION"] = 56;
            values[valuesById[57] = "PAYMENT_ACTION_REQUEST_DECLINED"] = 57;
            values[valuesById[58] = "PAYMENT_ACTION_REQUEST_EXPIRED"] = 58;
            values[valuesById[59] = "PAYMENT_ACTION_REQUEST_CANCELLED"] = 59;
            values[valuesById[60] = "BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM"] = 60;
            values[valuesById[61] = "BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP"] = 61;
            values[valuesById[62] = "BIZ_INTRO_TOP"] = 62;
            values[valuesById[63] = "BIZ_INTRO_BOTTOM"] = 63;
            values[valuesById[64] = "BIZ_NAME_CHANGE"] = 64;
            values[valuesById[65] = "BIZ_MOVE_TO_CONSUMER_APP"] = 65;
            values[valuesById[66] = "BIZ_TWO_TIER_MIGRATION_TOP"] = 66;
            values[valuesById[67] = "BIZ_TWO_TIER_MIGRATION_BOTTOM"] = 67;
            values[valuesById[68] = "OVERSIZED"] = 68;
            values[valuesById[69] = "GROUP_CHANGE_NO_FREQUENTLY_FORWARDED"] = 69;
            values[valuesById[70] = "GROUP_V4_ADD_INVITE_SENT"] = 70;
            values[valuesById[71] = "GROUP_PARTICIPANT_ADD_REQUEST_JOIN"] = 71;
            values[valuesById[72] = "CHANGE_EPHEMERAL_SETTING"] = 72;
            values[valuesById[73] = "E2E_DEVICE_CHANGED"] = 73;
            values[valuesById[74] = "VIEWED_ONCE"] = 74;
            values[valuesById[75] = "E2E_ENCRYPTED_NOW"] = 75;
            values[valuesById[76] = "BLUE_MSG_BSP_FB_TO_BSP_PREMISE"] = 76;
            values[valuesById[77] = "BLUE_MSG_BSP_FB_TO_SELF_FB"] = 77;
            values[valuesById[78] = "BLUE_MSG_BSP_FB_TO_SELF_PREMISE"] = 78;
            values[valuesById[79] = "BLUE_MSG_BSP_FB_UNVERIFIED"] = 79;
            values[valuesById[80] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 80;
            values[valuesById[81] = "BLUE_MSG_BSP_FB_VERIFIED"] = 81;
            values[valuesById[82] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 82;
            values[valuesById[83] = "BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE"] = 83;
            values[valuesById[84] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED"] = 84;
            values[valuesById[85] = "BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 85;
            values[valuesById[86] = "BLUE_MSG_BSP_PREMISE_VERIFIED"] = 86;
            values[valuesById[87] = "BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 87;
            values[valuesById[88] = "BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED"] = 88;
            values[valuesById[89] = "BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED"] = 89;
            values[valuesById[90] = "BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED"] = 90;
            values[valuesById[91] = "BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED"] = 91;
            values[valuesById[92] = "BLUE_MSG_SELF_FB_TO_BSP_PREMISE"] = 92;
            values[valuesById[93] = "BLUE_MSG_SELF_FB_TO_SELF_PREMISE"] = 93;
            values[valuesById[94] = "BLUE_MSG_SELF_FB_UNVERIFIED"] = 94;
            values[valuesById[95] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED"] = 95;
            values[valuesById[96] = "BLUE_MSG_SELF_FB_VERIFIED"] = 96;
            values[valuesById[97] = "BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED"] = 97;
            values[valuesById[98] = "BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE"] = 98;
            values[valuesById[99] = "BLUE_MSG_SELF_PREMISE_UNVERIFIED"] = 99;
            values[valuesById[100] = "BLUE_MSG_SELF_PREMISE_VERIFIED"] = 100;
            values[valuesById[101] = "BLUE_MSG_TO_BSP_FB"] = 101;
            values[valuesById[102] = "BLUE_MSG_TO_CONSUMER"] = 102;
            values[valuesById[103] = "BLUE_MSG_TO_SELF_FB"] = 103;
            values[valuesById[104] = "BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED"] = 104;
            values[valuesById[105] = "BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 105;
            values[valuesById[106] = "BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 106;
            values[valuesById[107] = "BLUE_MSG_UNVERIFIED_TO_VERIFIED"] = 107;
            values[valuesById[108] = "BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED"] = 108;
            values[valuesById[109] = "BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 109;
            values[valuesById[110] = "BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 110;
            values[valuesById[111] = "BLUE_MSG_VERIFIED_TO_UNVERIFIED"] = 111;
            values[valuesById[112] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 112;
            values[valuesById[113] = "BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED"] = 113;
            values[valuesById[114] = "BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 114;
            values[valuesById[115] = "BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED"] = 115;
            values[valuesById[116] = "BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED"] = 116;
            values[valuesById[117] = "BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED"] = 117;
            values[valuesById[118] = "E2E_IDENTITY_UNAVAILABLE"] = 118;
            values[valuesById[119] = "GROUP_CREATING"] = 119;
            values[valuesById[120] = "GROUP_CREATE_FAILED"] = 120;
            values[valuesById[121] = "GROUP_BOUNCED"] = 121;
            values[valuesById[122] = "BLOCK_CONTACT"] = 122;
            values[valuesById[123] = "EPHEMERAL_SETTING_NOT_APPLIED"] = 123;
            values[valuesById[124] = "SYNC_FAILED"] = 124;
            values[valuesById[125] = "SYNCING"] = 125;
            values[valuesById[126] = "BIZ_PRIVACY_MODE_INIT_FB"] = 126;
            values[valuesById[127] = "BIZ_PRIVACY_MODE_INIT_BSP"] = 127;
            values[valuesById[128] = "BIZ_PRIVACY_MODE_TO_FB"] = 128;
            values[valuesById[129] = "BIZ_PRIVACY_MODE_TO_BSP"] = 129;
            values[valuesById[130] = "DISAPPEARING_MODE"] = 130;
            values[valuesById[131] = "E2E_DEVICE_FETCH_FAILED"] = 131;
            values[valuesById[132] = "ADMIN_REVOKE"] = 132;
            values[valuesById[133] = "GROUP_INVITE_LINK_GROWTH_LOCKED"] = 133;
            values[valuesById[134] = "COMMUNITY_LINK_PARENT_GROUP"] = 134;
            values[valuesById[135] = "COMMUNITY_LINK_SIBLING_GROUP"] = 135;
            values[valuesById[136] = "COMMUNITY_LINK_SUB_GROUP"] = 136;
            values[valuesById[137] = "COMMUNITY_UNLINK_PARENT_GROUP"] = 137;
            values[valuesById[138] = "COMMUNITY_UNLINK_SIBLING_GROUP"] = 138;
            values[valuesById[139] = "COMMUNITY_UNLINK_SUB_GROUP"] = 139;
            values[valuesById[140] = "GROUP_PARTICIPANT_ACCEPT"] = 140;
            values[valuesById[141] = "GROUP_PARTICIPANT_LINKED_GROUP_JOIN"] = 141;
            values[valuesById[142] = "COMMUNITY_CREATE"] = 142;
            values[valuesById[143] = "EPHEMERAL_KEEP_IN_CHAT"] = 143;
            values[valuesById[144] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST"] = 144;
            values[valuesById[145] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE"] = 145;
            values[valuesById[146] = "INTEGRITY_UNLINK_PARENT_GROUP"] = 146;
            values[valuesById[147] = "COMMUNITY_PARTICIPANT_PROMOTE"] = 147;
            values[valuesById[148] = "COMMUNITY_PARTICIPANT_DEMOTE"] = 148;
            values[valuesById[149] = "COMMUNITY_PARENT_GROUP_DELETED"] = 149;
            values[valuesById[150] = "COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL"] = 150;
            values[valuesById[151] = "GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP"] = 151;
            values[valuesById[152] = "MASKED_THREAD_CREATED"] = 152;
            values[valuesById[153] = "MASKED_THREAD_UNMASKED"] = 153;
            values[valuesById[154] = "BIZ_CHAT_ASSIGNMENT"] = 154;
            values[valuesById[155] = "CHAT_PSA"] = 155;
            values[valuesById[156] = "CHAT_POLL_CREATION_MESSAGE"] = 156;
            values[valuesById[157] = "CAG_MASKED_THREAD_CREATED"] = 157;
            values[valuesById[158] = "COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED"] = 158;
            values[valuesById[159] = "CAG_INVITE_AUTO_ADD"] = 159;
            values[valuesById[160] = "BIZ_CHAT_ASSIGNMENT_UNASSIGN"] = 160;
            values[valuesById[161] = "CAG_INVITE_AUTO_JOINED"] = 161;
            values[valuesById[162] = "SCHEDULED_CALL_START_MESSAGE"] = 162;
            values[valuesById[163] = "COMMUNITY_INVITE_RICH"] = 163;
            values[valuesById[164] = "COMMUNITY_INVITE_AUTO_ADD_RICH"] = 164;
            values[valuesById[165] = "SUB_GROUP_INVITE_RICH"] = 165;
            values[valuesById[166] = "SUB_GROUP_PARTICIPANT_ADD_RICH"] = 166;
            values[valuesById[167] = "COMMUNITY_LINK_PARENT_GROUP_RICH"] = 167;
            values[valuesById[168] = "COMMUNITY_PARTICIPANT_ADD_RICH"] = 168;
            values[valuesById[169] = "SILENCED_UNKNOWN_CALLER_AUDIO"] = 169;
            values[valuesById[170] = "SILENCED_UNKNOWN_CALLER_VIDEO"] = 170;
            values[valuesById[171] = "GROUP_MEMBER_ADD_MODE"] = 171;
            values[valuesById[172] = "GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD"] = 172;
            values[valuesById[173] = "COMMUNITY_CHANGE_DESCRIPTION"] = 173;
            values[valuesById[174] = "SENDER_INVITE"] = 174;
            values[valuesById[175] = "RECEIVER_INVITE"] = 175;
            values[valuesById[176] = "COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS"] = 176;
            values[valuesById[177] = "PINNED_MESSAGE_IN_CHAT"] = 177;
            values[valuesById[178] = "PAYMENT_INVITE_SETUP_INVITER"] = 178;
            values[valuesById[179] = "PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY"] = 179;
            values[valuesById[180] = "PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE"] = 180;
            values[valuesById[181] = "LINKED_GROUP_CALL_START"] = 181;
            values[valuesById[182] = "REPORT_TO_ADMIN_ENABLED_STATUS"] = 182;
            values[valuesById[183] = "EMPTY_SUBGROUP_CREATE"] = 183;
            values[valuesById[184] = "SCHEDULED_CALL_CANCEL"] = 184;
            values[valuesById[185] = "SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH"] = 185;
            values[valuesById[186] = "GROUP_CHANGE_RECENT_HISTORY_SHARING"] = 186;
            values[valuesById[187] = "PAID_MESSAGE_SERVER_CAMPAIGN_ID"] = 187;
            values[valuesById[188] = "GENERAL_CHAT_CREATE"] = 188;
            values[valuesById[189] = "GENERAL_CHAT_ADD"] = 189;
            values[valuesById[190] = "GENERAL_CHAT_AUTO_ADD_DISABLED"] = 190;
            values[valuesById[191] = "SUGGESTED_SUBGROUP_ANNOUNCE"] = 191;
            values[valuesById[192] = "BIZ_BOT_1P_MESSAGING_ENABLED"] = 192;
            values[valuesById[193] = "CHANGE_USERNAME"] = 193;
            values[valuesById[194] = "BIZ_COEX_PRIVACY_INIT_SELF"] = 194;
            values[valuesById[195] = "BIZ_COEX_PRIVACY_TRANSITION_SELF"] = 195;
            values[valuesById[196] = "SUPPORT_AI_EDUCATION"] = 196;
            values[valuesById[197] = "BIZ_BOT_3P_MESSAGING_ENABLED"] = 197;
            values[valuesById[198] = "REMINDER_SETUP_MESSAGE"] = 198;
            values[valuesById[199] = "REMINDER_SENT_MESSAGE"] = 199;
            values[valuesById[200] = "REMINDER_CANCEL_MESSAGE"] = 200;
            values[valuesById[201] = "BIZ_COEX_PRIVACY_INIT"] = 201;
            values[valuesById[202] = "BIZ_COEX_PRIVACY_TRANSITION"] = 202;
            values[valuesById[203] = "GROUP_DEACTIVATED"] = 203;
            values[valuesById[204] = "COMMUNITY_DEACTIVATE_SIBLING_GROUP"] = 204;
            values[valuesById[205] = "EVENT_UPDATED"] = 205;
            values[valuesById[206] = "EVENT_CANCELED"] = 206;
            values[valuesById[207] = "COMMUNITY_OWNER_UPDATED"] = 207;
            values[valuesById[208] = "COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN"] = 208;
            values[valuesById[209] = "CAPI_GROUP_NE2EE_SYSTEM_MESSAGE"] = 209;
            values[valuesById[210] = "STATUS_MENTION"] = 210;
            values[valuesById[211] = "USER_CONTROLS_SYSTEM_MESSAGE"] = 211;
            values[valuesById[212] = "SUPPORT_SYSTEM_MESSAGE"] = 212;
            values[valuesById[213] = "CHANGE_LID"] = 213;
            values[valuesById[214] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE"] = 214;
            values[valuesById[215] = "BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE"] = 215;
            values[valuesById[216] = "CHANGE_LIMIT_SHARING"] = 216;
            values[valuesById[217] = "GROUP_MEMBER_LINK_MODE"] = 217;
            values[valuesById[218] = "BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE"] = 218;
            values[valuesById[219] = "PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE"] = 219;
            values[valuesById[220] = "QUARANTINED_MESSAGE"] = 220;
            values[valuesById[221] = "GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE"] = 221;
            return values;
        })();

        return WebMessageInfo;
    })();

    proto.WebNotificationsInfo = (function() {

        function WebNotificationsInfo(p) {
            this.notifyMessages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        }

        WebNotificationsInfo.prototype.timestamp = null;
        WebNotificationsInfo.prototype.unreadChats = null;
        WebNotificationsInfo.prototype.notifyMessageCount = null;
        WebNotificationsInfo.prototype.notifyMessages = $util.emptyArray;

        return WebNotificationsInfo;
    })();

    return proto;
})();

export { $root as default };

installMessageHelpers([
[proto.ADVDeviceIdentity, "proto.ADVDeviceIdentity", [["rawId", "uint32", 1, undefined, "_rawId"], ["timestamp", "uint64", 2, undefined, "_timestamp"], ["keyIndex", "uint32", 3, undefined, "_keyIndex"], ["accountType", proto.ADVEncryptionType, 4, undefined, "_accountType"], ["deviceType", proto.ADVEncryptionType, 5, undefined, "_deviceType"]]],
[proto.ADVKeyIndexList, "proto.ADVKeyIndexList", [["rawId", "uint32", 1, undefined, "_rawId"], ["timestamp", "uint64", 2, undefined, "_timestamp"], ["currentIndex", "uint32", 3, undefined, "_currentIndex"], ["validIndexes", "uint32", 4, "array"], ["accountType", proto.ADVEncryptionType, 5, undefined, "_accountType"]]],
[proto.ADVSignedDeviceIdentity, "proto.ADVSignedDeviceIdentity", [["details", "bytes", 1, undefined, "_details"], ["accountSignatureKey", "bytes", 2, undefined, "_accountSignatureKey"], ["accountSignature", "bytes", 3, undefined, "_accountSignature"], ["deviceSignature", "bytes", 4, undefined, "_deviceSignature"]]],
[proto.ADVSignedDeviceIdentityHMAC, "proto.ADVSignedDeviceIdentityHMAC", [["details", "bytes", 1, undefined, "_details"], ["hmac", "bytes", 2, undefined, "_hmac"], ["accountType", proto.ADVEncryptionType, 3, undefined, "_accountType"]]],
[proto.ADVSignedKeyIndexList, "proto.ADVSignedKeyIndexList", [["details", "bytes", 1, undefined, "_details"], ["accountSignature", "bytes", 2, undefined, "_accountSignature"], ["accountSignatureKey", "bytes", 3, undefined, "_accountSignatureKey"]]],
[proto.AIHomeState, "proto.AIHomeState", [["lastFetchTime", "int64", 1, undefined, "_lastFetchTime"], ["capabilityOptions", proto.AIHomeState.AIHomeOption, 2, "array"], ["conversationOptions", proto.AIHomeState.AIHomeOption, 3, "array"]]],
[proto.AIHomeState.AIHomeOption, "proto.AIHomeState.AIHomeOption", [["type", proto.AIHomeState.AIHomeOption.AIHomeActionType, 1, undefined, "_type"], ["title", "string", 2, undefined, "_title"], ["promptText", "string", 3, undefined, "_promptText"], ["sessionId", "string", 4, undefined, "_sessionId"], ["imageWdsIdentifier", "string", 5, undefined, "_imageWdsIdentifier"], ["imageTintColor", "string", 6, undefined, "_imageTintColor"], ["imageBackgroundColor", "string", 7, undefined, "_imageBackgroundColor"]]],
[proto.AIQueryFanout, "proto.AIQueryFanout", [["messageKey", proto.MessageKey, 1, undefined, "_messageKey"], ["message", proto.Message, 2, undefined, "_message"], ["timestamp", "int64", 3, undefined, "_timestamp"]]],
[proto.AIRegenerateMetadata, "proto.AIRegenerateMetadata", [["messageKey", proto.MessageKey, 1, undefined, "_messageKey"], ["responseTimestampMs", "int64", 2, undefined, "_responseTimestampMs"]]],
[proto.AIRichResponseCodeMetadata, "proto.AIRichResponseCodeMetadata", [["codeLanguage", "string", 1, undefined, "_codeLanguage"], ["codeBlocks", proto.AIRichResponseCodeMetadata.AIRichResponseCodeBlock, 2, "array"]]],
[proto.AIRichResponseCodeMetadata.AIRichResponseCodeBlock, "proto.AIRichResponseCodeMetadata.AIRichResponseCodeBlock", [["highlightType", proto.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType, 1, undefined, "_highlightType"], ["codeContent", "string", 2, undefined, "_codeContent"]]],
[proto.AIRichResponseContentItemsMetadata, "proto.AIRichResponseContentItemsMetadata", [["itemsMetadata", proto.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata, 1, "array"], ["contentType", proto.AIRichResponseContentItemsMetadata.ContentType, 2, undefined, "_contentType"]]],
[proto.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata, "proto.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata", [["reelItem", proto.AIRichResponseContentItemsMetadata.AIRichResponseReelItem, 1, undefined, "aIRichResponseContentItem"]]],
[proto.AIRichResponseContentItemsMetadata.AIRichResponseReelItem, "proto.AIRichResponseContentItemsMetadata.AIRichResponseReelItem", [["title", "string", 1, undefined, "_title"], ["profileIconUrl", "string", 2, undefined, "_profileIconUrl"], ["thumbnailUrl", "string", 3, undefined, "_thumbnailUrl"], ["videoUrl", "string", 4, undefined, "_videoUrl"]]],
[proto.AIRichResponseDynamicMetadata, "proto.AIRichResponseDynamicMetadata", [["type", proto.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType, 1, undefined, "_type"], ["version", "uint64", 2, undefined, "_version"], ["url", "string", 3, undefined, "_url"], ["loopCount", "uint32", 4, undefined, "_loopCount"]]],
[proto.AIRichResponseGridImageMetadata, "proto.AIRichResponseGridImageMetadata", [["gridImageUrl", proto.AIRichResponseImageURL, 1, undefined, "_gridImageUrl"], ["imageUrls", proto.AIRichResponseImageURL, 2, "array"]]],
[proto.AIRichResponseImageURL, "proto.AIRichResponseImageURL", [["imagePreviewUrl", "string", 1, undefined, "_imagePreviewUrl"], ["imageHighResUrl", "string", 2, undefined, "_imageHighResUrl"], ["sourceUrl", "string", 3, undefined, "_sourceUrl"]]],
[proto.AIRichResponseInlineImageMetadata, "proto.AIRichResponseInlineImageMetadata", [["imageUrl", proto.AIRichResponseImageURL, 1, undefined, "_imageUrl"], ["imageText", "string", 2, undefined, "_imageText"], ["alignment", proto.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment, 3, undefined, "_alignment"], ["tapLinkUrl", "string", 4, undefined, "_tapLinkUrl"]]],
[proto.AIRichResponseLatexMetadata, "proto.AIRichResponseLatexMetadata", [["text", "string", 1, undefined, "_text"], ["expressions", proto.AIRichResponseLatexMetadata.AIRichResponseLatexExpression, 2, "array"]]],
[proto.AIRichResponseLatexMetadata.AIRichResponseLatexExpression, "proto.AIRichResponseLatexMetadata.AIRichResponseLatexExpression", [["latexExpression", "string", 1, undefined, "_latexExpression"], ["url", "string", 2, undefined, "_url"], ["width", "double", 3, undefined, "_width"], ["height", "double", 4, undefined, "_height"], ["fontHeight", "double", 5, undefined, "_fontHeight"], ["imageTopPadding", "double", 6, undefined, "_imageTopPadding"], ["imageLeadingPadding", "double", 7, undefined, "_imageLeadingPadding"], ["imageBottomPadding", "double", 8, undefined, "_imageBottomPadding"], ["imageTrailingPadding", "double", 9, undefined, "_imageTrailingPadding"]]],
[proto.AIRichResponseMapMetadata, "proto.AIRichResponseMapMetadata", [["centerLatitude", "double", 1, undefined, "_centerLatitude"], ["centerLongitude", "double", 2, undefined, "_centerLongitude"], ["latitudeDelta", "double", 3, undefined, "_latitudeDelta"], ["longitudeDelta", "double", 4, undefined, "_longitudeDelta"], ["annotations", proto.AIRichResponseMapMetadata.AIRichResponseMapAnnotation, 5, "array"], ["showInfoList", "bool", 6, undefined, "_showInfoList"]]],
[proto.AIRichResponseMapMetadata.AIRichResponseMapAnnotation, "proto.AIRichResponseMapMetadata.AIRichResponseMapAnnotation", [["annotationNumber", "uint32", 1, undefined, "_annotationNumber"], ["latitude", "double", 2, undefined, "_latitude"], ["longitude", "double", 3, undefined, "_longitude"], ["title", "string", 4, undefined, "_title"], ["body", "string", 5, undefined, "_body"]]],
[proto.AIRichResponseMessage, "proto.AIRichResponseMessage", [["messageType", proto.AIRichResponseMessageType, 1, undefined, "_messageType"], ["submessages", proto.AIRichResponseSubMessage, 2, "array"], ["unifiedResponse", proto.AIRichResponseUnifiedResponse, 3, undefined, "_unifiedResponse"], ["contextInfo", proto.ContextInfo, 4, undefined, "_contextInfo"]]],
[proto.AIRichResponseSubMessage, "proto.AIRichResponseSubMessage", [["messageType", proto.AIRichResponseSubMessageType, 1, undefined, "_messageType"], ["gridImageMetadata", proto.AIRichResponseGridImageMetadata, 2, undefined, "_gridImageMetadata"], ["messageText", "string", 3, undefined, "_messageText"], ["imageMetadata", proto.AIRichResponseInlineImageMetadata, 4, undefined, "_imageMetadata"], ["codeMetadata", proto.AIRichResponseCodeMetadata, 5, undefined, "_codeMetadata"], ["tableMetadata", proto.AIRichResponseTableMetadata, 6, undefined, "_tableMetadata"], ["dynamicMetadata", proto.AIRichResponseDynamicMetadata, 7, undefined, "_dynamicMetadata"], ["latexMetadata", proto.AIRichResponseLatexMetadata, 8, undefined, "_latexMetadata"], ["mapMetadata", proto.AIRichResponseMapMetadata, 9, undefined, "_mapMetadata"], ["contentItemsMetadata", proto.AIRichResponseContentItemsMetadata, 10, undefined, "_contentItemsMetadata"]]],
[proto.AIRichResponseTableMetadata, "proto.AIRichResponseTableMetadata", [["rows", proto.AIRichResponseTableMetadata.AIRichResponseTableRow, 1, "array"], ["title", "string", 2, undefined, "_title"]]],
[proto.AIRichResponseTableMetadata.AIRichResponseTableRow, "proto.AIRichResponseTableMetadata.AIRichResponseTableRow", [["items", "string", 1, "array"], ["isHeading", "bool", 2, undefined, "_isHeading"]]],
[proto.AIRichResponseUnifiedResponse, "proto.AIRichResponseUnifiedResponse", [["data", "bytes", 1, undefined, "_data"]]],
[proto.AIThreadInfo, "proto.AIThreadInfo", [["serverInfo", proto.AIThreadInfo.AIThreadServerInfo, 1, undefined, "_serverInfo"], ["clientInfo", proto.AIThreadInfo.AIThreadClientInfo, 2, undefined, "_clientInfo"]]],
[proto.AIThreadInfo.AIThreadClientInfo, "proto.AIThreadInfo.AIThreadClientInfo", [["type", proto.AIThreadInfo.AIThreadClientInfo.AIThreadType, 1, undefined, "_type"]]],
[proto.AIThreadInfo.AIThreadServerInfo, "proto.AIThreadInfo.AIThreadServerInfo", [["title", "string", 1, undefined, "_title"]]],
[proto.Account, "proto.Account", [["lid", "string", 1, undefined, "_lid"], ["username", "string", 2, undefined, "_username"], ["countryCode", "string", 3, undefined, "_countryCode"], ["isUsernameDeleted", "bool", 4, undefined, "_isUsernameDeleted"]]],
[proto.ActionLink, "proto.ActionLink", [["url", "string", 1, undefined, "_url"], ["buttonTitle", "string", 2, undefined, "_buttonTitle"]]],
[proto.AutoDownloadSettings, "proto.AutoDownloadSettings", [["downloadImages", "bool", 1, undefined, "_downloadImages"], ["downloadAudio", "bool", 2, undefined, "_downloadAudio"], ["downloadVideo", "bool", 3, undefined, "_downloadVideo"], ["downloadDocuments", "bool", 4, undefined, "_downloadDocuments"]]],
[proto.AvatarUserSettings, "proto.AvatarUserSettings", [["fbid", "string", 1, undefined, "_fbid"], ["password", "string", 2, undefined, "_password"]]],
[proto.BizAccountLinkInfo, "proto.BizAccountLinkInfo", [["whatsappBizAcctFbid", "uint64", 1, undefined, "_whatsappBizAcctFbid"], ["whatsappAcctNumber", "string", 2, undefined, "_whatsappAcctNumber"], ["issueTime", "uint64", 3, undefined, "_issueTime"], ["hostStorage", proto.BizAccountLinkInfo.HostStorageType, 4, undefined, "_hostStorage"], ["accountType", proto.BizAccountLinkInfo.AccountType, 5, undefined, "_accountType"]]],
[proto.BizAccountPayload, "proto.BizAccountPayload", [["vnameCert", proto.VerifiedNameCertificate, 1, undefined, "_vnameCert"], ["bizAcctLinkInfo", "bytes", 2, undefined, "_bizAcctLinkInfo"]]],
[proto.BizIdentityInfo, "proto.BizIdentityInfo", [["vlevel", proto.BizIdentityInfo.VerifiedLevelValue, 1, undefined, "_vlevel"], ["vnameCert", proto.VerifiedNameCertificate, 2, undefined, "_vnameCert"], ["signed", "bool", 3, undefined, "_signed"], ["revoked", "bool", 4, undefined, "_revoked"], ["hostStorage", proto.BizIdentityInfo.HostStorageType, 5, undefined, "_hostStorage"], ["actualActors", proto.BizIdentityInfo.ActualActorsType, 6, undefined, "_actualActors"], ["privacyModeTs", "uint64", 7, undefined, "_privacyModeTs"], ["featureControls", "uint64", 8, undefined, "_featureControls"]]],
[proto.BotAgeCollectionMetadata, "proto.BotAgeCollectionMetadata", [["ageCollectionEligible", "bool", 1, undefined, "_ageCollectionEligible"], ["shouldTriggerAgeCollectionOnClient", "bool", 2, undefined, "_shouldTriggerAgeCollectionOnClient"], ["ageCollectionType", proto.BotAgeCollectionMetadata.AgeCollectionType, 3, undefined, "_ageCollectionType"]]],
[proto.BotAvatarMetadata, "proto.BotAvatarMetadata", [["sentiment", "uint32", 1, undefined, "_sentiment"], ["behaviorGraph", "string", 2, undefined, "_behaviorGraph"], ["action", "uint32", 3, undefined, "_action"], ["intensity", "uint32", 4, undefined, "_intensity"], ["wordCount", "uint32", 5, undefined, "_wordCount"]]],
[proto.BotCapabilityMetadata, "proto.BotCapabilityMetadata", [["capabilities", proto.BotCapabilityMetadata.BotCapabilityType, 1, "array"]]],
[proto.BotFeedbackMessage, "proto.BotFeedbackMessage", [["messageKey", proto.MessageKey, 1, undefined, "_messageKey"], ["kind", proto.BotFeedbackMessage.BotFeedbackKind, 2, undefined, "_kind"], ["text", "string", 3, undefined, "_text"], ["kindNegative", "uint64", 4, undefined, "_kindNegative"], ["kindPositive", "uint64", 5, undefined, "_kindPositive"], ["kindReport", proto.BotFeedbackMessage.ReportKind, 6, undefined, "_kindReport"], ["sideBySideSurveyMetadata", proto.BotFeedbackMessage.SideBySideSurveyMetadata, 7, undefined, "_sideBySideSurveyMetadata"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata, "proto.BotFeedbackMessage.SideBySideSurveyMetadata", [["selectedRequestId", "string", 1, undefined, "_selectedRequestId"], ["surveyId", "uint32", 2, undefined, "_surveyId"], ["simonSessionFbid", "string", 3, undefined, "_simonSessionFbid"], ["responseOtid", "string", 4, undefined, "_responseOtid"], ["responseTimestampMsString", "string", 5, undefined, "_responseTimestampMsString"], ["isSelectedResponsePrimary", "bool", 6, undefined, "_isSelectedResponsePrimary"], ["messageIdToEdit", "string", 7, undefined, "_messageIdToEdit"], ["analyticsData", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData, 8, undefined, "_analyticsData"], ["metaAiAnalyticsData", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData, 9, undefined, "_metaAiAnalyticsData"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData", [["tessaEvent", "string", 1, undefined, "_tessaEvent"], ["tessaSessionFbid", "string", 2, undefined, "_tessaSessionFbid"], ["simonSessionFbid", "string", 3, undefined, "_simonSessionFbid"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData", [["surveyId", "uint32", 1, undefined, "_surveyId"], ["primaryResponseId", "string", 2, undefined, "_primaryResponseId"], ["testArmName", "string", 3, undefined, "_testArmName"], ["timestampMsString", "string", 4, undefined, "_timestampMsString"], ["ctaImpressionEvent", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData, 5, undefined, "_ctaImpressionEvent"], ["ctaClickEvent", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData, 6, undefined, "_ctaClickEvent"], ["cardImpressionEvent", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData, 7, undefined, "_cardImpressionEvent"], ["responseEvent", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData, 8, undefined, "_responseEvent"], ["abandonEvent", proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData, 9, undefined, "_abandonEvent"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData", [["abandonDwellTimeMsString", "string", 1, undefined, "_abandonDwellTimeMsString"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData", [["isSurveyExpired", "bool", 1, undefined, "_isSurveyExpired"], ["clickDwellTimeMsString", "string", 2, undefined, "_clickDwellTimeMsString"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData", [["isSurveyExpired", "bool", 1, undefined, "_isSurveyExpired"]]],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCardImpressionEventData", []],
[proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData, "proto.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData", [["responseDwellTimeMsString", "string", 1, undefined, "_responseDwellTimeMsString"], ["selectedResponseId", "string", 2, undefined, "_selectedResponseId"]]],
[proto.BotImagineMetadata, "proto.BotImagineMetadata", [["imagineType", proto.BotImagineMetadata.ImagineType, 1, undefined, "_imagineType"]]],
[proto.BotLinkedAccount, "proto.BotLinkedAccount", [["type", proto.BotLinkedAccount.BotLinkedAccountType, 1, undefined, "_type"]]],
[proto.BotLinkedAccountsMetadata, "proto.BotLinkedAccountsMetadata", [["accounts", proto.BotLinkedAccount, 1, "array"], ["acAuthTokens", "bytes", 2, undefined, "_acAuthTokens"], ["acErrorCode", "int32", 3, undefined, "_acErrorCode"]]],
[proto.BotMediaMetadata, "proto.BotMediaMetadata", [["fileSha256", "string", 1, undefined, "_fileSha256"], ["mediaKey", "string", 2, undefined, "_mediaKey"], ["fileEncSha256", "string", 3, undefined, "_fileEncSha256"], ["directPath", "string", 4, undefined, "_directPath"], ["mediaKeyTimestamp", "int64", 5, undefined, "_mediaKeyTimestamp"], ["mimetype", "string", 6, undefined, "_mimetype"], ["orientationType", proto.BotMediaMetadata.OrientationType, 7, undefined, "_orientationType"]]],
[proto.BotMemoryFact, "proto.BotMemoryFact", [["fact", "string", 1, undefined, "_fact"], ["factId", "string", 2, undefined, "_factId"]]],
[proto.BotMemoryMetadata, "proto.BotMemoryMetadata", [["addedFacts", proto.BotMemoryFact, 1, "array"], ["removedFacts", proto.BotMemoryFact, 2, "array"], ["disclaimer", "string", 3, undefined, "_disclaimer"]]],
[proto.BotMemuMetadata, "proto.BotMemuMetadata", [["faceImages", proto.BotMediaMetadata, 1, "array"]]],
[proto.BotMessageOrigin, "proto.BotMessageOrigin", [["type", proto.BotMessageOrigin.BotMessageOriginType, 1, undefined, "_type"]]],
[proto.BotMessageOriginMetadata, "proto.BotMessageOriginMetadata", [["origins", proto.BotMessageOrigin, 1, "array"]]],
[proto.BotMessageSharingInfo, "proto.BotMessageSharingInfo", [["botEntryPointOrigin", proto.BotMetricsEntryPoint, 1, undefined, "_botEntryPointOrigin"], ["forwardScore", "uint32", 2, undefined, "_forwardScore"]]],
[proto.BotMetadata, "proto.BotMetadata", [["avatarMetadata", proto.BotAvatarMetadata, 1, undefined, "_avatarMetadata"], ["personaId", "string", 2, undefined, "_personaId"], ["pluginMetadata", proto.BotPluginMetadata, 3, undefined, "_pluginMetadata"], ["suggestedPromptMetadata", proto.BotSuggestedPromptMetadata, 4, undefined, "_suggestedPromptMetadata"], ["invokerJid", "string", 5, undefined, "_invokerJid"], ["sessionMetadata", proto.BotSessionMetadata, 6, undefined, "_sessionMetadata"], ["memuMetadata", proto.BotMemuMetadata, 7, undefined, "_memuMetadata"], ["timezone", "string", 8, undefined, "_timezone"], ["reminderMetadata", proto.BotReminderMetadata, 9, undefined, "_reminderMetadata"], ["modelMetadata", proto.BotModelMetadata, 10, undefined, "_modelMetadata"], ["messageDisclaimerText", "string", 11, undefined, "_messageDisclaimerText"], ["progressIndicatorMetadata", proto.BotProgressIndicatorMetadata, 12, undefined, "_progressIndicatorMetadata"], ["capabilityMetadata", proto.BotCapabilityMetadata, 13, undefined, "_capabilityMetadata"], ["imagineMetadata", proto.BotImagineMetadata, 14, undefined, "_imagineMetadata"], ["memoryMetadata", proto.BotMemoryMetadata, 15, undefined, "_memoryMetadata"], ["renderingMetadata", proto.BotRenderingMetadata, 16, undefined, "_renderingMetadata"], ["botMetricsMetadata", proto.BotMetricsMetadata, 17, undefined, "_botMetricsMetadata"], ["botLinkedAccountsMetadata", proto.BotLinkedAccountsMetadata, 18, undefined, "_botLinkedAccountsMetadata"], ["richResponseSourcesMetadata", proto.BotSourcesMetadata, 19, undefined, "_richResponseSourcesMetadata"], ["aiConversationContext", "bytes", 20, undefined, "_aiConversationContext"], ["botPromotionMessageMetadata", proto.BotPromotionMessageMetadata, 21, undefined, "_botPromotionMessageMetadata"], ["botModeSelectionMetadata", proto.BotModeSelectionMetadata, 22, undefined, "_botModeSelectionMetadata"], ["botQuotaMetadata", proto.BotQuotaMetadata, 23, undefined, "_botQuotaMetadata"], ["botAgeCollectionMetadata", proto.BotAgeCollectionMetadata, 24, undefined, "_botAgeCollectionMetadata"], ["conversationStarterPromptId", "string", 25, undefined, "_conversationStarterPromptId"], ["botResponseId", "string", 26, undefined, "_botResponseId"], ["verificationMetadata", proto.BotSignatureVerificationMetadata, 27, undefined, "_verificationMetadata"], ["unifiedResponseMutation", proto.BotUnifiedResponseMutation, 28, undefined, "_unifiedResponseMutation"], ["botMessageOriginMetadata", proto.BotMessageOriginMetadata, 29, undefined, "_botMessageOriginMetadata"], ["inThreadSurveyMetadata", proto.InThreadSurveyMetadata, 30, undefined, "_inThreadSurveyMetadata"], ["botThreadInfo", proto.AIThreadInfo, 31, undefined, "_botThreadInfo"], ["regenerateMetadata", proto.AIRegenerateMetadata, 32, undefined, "_regenerateMetadata"], ["sessionTransparencyMetadata", proto.SessionTransparencyMetadata, 33, undefined, "_sessionTransparencyMetadata"], ["internalMetadata", "bytes", 999, undefined, "_internalMetadata"]]],
[proto.BotMetricsMetadata, "proto.BotMetricsMetadata", [["destinationId", "string", 1, undefined, "_destinationId"], ["destinationEntryPoint", proto.BotMetricsEntryPoint, 2, undefined, "_destinationEntryPoint"], ["threadOrigin", proto.BotMetricsThreadEntryPoint, 3, undefined, "_threadOrigin"]]],
[proto.BotModeSelectionMetadata, "proto.BotModeSelectionMetadata", [["mode", proto.BotModeSelectionMetadata.BotUserSelectionMode, 1, "array"]]],
[proto.BotModelMetadata, "proto.BotModelMetadata", [["modelType", proto.BotModelMetadata.ModelType, 1, undefined, "_modelType"], ["premiumModelStatus", proto.BotModelMetadata.PremiumModelStatus, 2, undefined, "_premiumModelStatus"], ["modelNameOverride", "string", 3, undefined, "_modelNameOverride"]]],
[proto.BotPluginMetadata, "proto.BotPluginMetadata", [["provider", proto.BotPluginMetadata.SearchProvider, 1, undefined, "_provider"], ["pluginType", proto.BotPluginMetadata.PluginType, 2, undefined, "_pluginType"], ["thumbnailCdnUrl", "string", 3, undefined, "_thumbnailCdnUrl"], ["profilePhotoCdnUrl", "string", 4, undefined, "_profilePhotoCdnUrl"], ["searchProviderUrl", "string", 5, undefined, "_searchProviderUrl"], ["referenceIndex", "uint32", 6, undefined, "_referenceIndex"], ["expectedLinksCount", "uint32", 7, undefined, "_expectedLinksCount"], ["searchQuery", "string", 9, undefined, "_searchQuery"], ["parentPluginMessageKey", proto.MessageKey, 10, undefined, "_parentPluginMessageKey"], ["deprecatedField", proto.BotPluginMetadata.PluginType, 11, undefined, "_deprecatedField"], ["parentPluginType", proto.BotPluginMetadata.PluginType, 12, undefined, "_parentPluginType"], ["faviconCdnUrl", "string", 13, undefined, "_faviconCdnUrl"]]],
[proto.BotProgressIndicatorMetadata, "proto.BotProgressIndicatorMetadata", [["progressDescription", "string", 1, undefined, "_progressDescription"], ["stepsMetadata", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata, 2, "array"]]],
[proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata, "proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata", [["statusTitle", "string", 1, undefined, "_statusTitle"], ["statusBody", "string", 2, undefined, "_statusBody"], ["sourcesMetadata", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata, 3, "array"], ["status", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus, 4, undefined, "_status"], ["isReasoning", "bool", 5, undefined, "_isReasoning"], ["isEnhancedSearch", "bool", 6, undefined, "_isEnhancedSearch"], ["sections", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata, 7, "array"]]],
[proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata, "proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata", [["title", "string", 1, undefined, "_title"], ["provider", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider, 2, undefined, "_provider"], ["sourceUrl", "string", 3, undefined, "_sourceUrl"], ["favIconUrl", "string", 4, undefined, "_favIconUrl"]]],
[proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata, "proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata", [["sourceTitle", "string", 1, undefined, "_sourceTitle"], ["provider", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider, 2, undefined, "_provider"], ["sourceUrl", "string", 3, undefined, "_sourceUrl"]]],
[proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata, "proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata", [["sectionTitle", "string", 1, undefined, "_sectionTitle"], ["sectionBody", "string", 2, undefined, "_sectionBody"], ["sourcesMetadata", proto.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata, 3, "array"]]],
[proto.BotPromotionMessageMetadata, "proto.BotPromotionMessageMetadata", [["promotionType", proto.BotPromotionMessageMetadata.BotPromotionType, 1, undefined, "_promotionType"], ["buttonTitle", "string", 2, undefined, "_buttonTitle"]]],
[proto.BotPromptSuggestion, "proto.BotPromptSuggestion", [["prompt", "string", 1, undefined, "_prompt"], ["promptId", "string", 2, undefined, "_promptId"]]],
[proto.BotPromptSuggestions, "proto.BotPromptSuggestions", [["suggestions", proto.BotPromptSuggestion, 1, "array"]]],
[proto.BotQuotaMetadata, "proto.BotQuotaMetadata", [["botFeatureQuotaMetadata", proto.BotQuotaMetadata.BotFeatureQuotaMetadata, 1, "array"]]],
[proto.BotQuotaMetadata.BotFeatureQuotaMetadata, "proto.BotQuotaMetadata.BotFeatureQuotaMetadata", [["featureType", proto.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType, 1, undefined, "_featureType"], ["remainingQuota", "uint32", 2, undefined, "_remainingQuota"], ["expirationTimestamp", "uint64", 3, undefined, "_expirationTimestamp"]]],
[proto.BotReminderMetadata, "proto.BotReminderMetadata", [["requestMessageKey", proto.MessageKey, 1, undefined, "_requestMessageKey"], ["action", proto.BotReminderMetadata.ReminderAction, 2, undefined, "_action"], ["name", "string", 3, undefined, "_name"], ["nextTriggerTimestamp", "uint64", 4, undefined, "_nextTriggerTimestamp"], ["frequency", proto.BotReminderMetadata.ReminderFrequency, 5, undefined, "_frequency"]]],
[proto.BotRenderingMetadata, "proto.BotRenderingMetadata", [["keywords", proto.BotRenderingMetadata.Keyword, 1, "array"]]],
[proto.BotRenderingMetadata.Keyword, "proto.BotRenderingMetadata.Keyword", [["value", "string", 1, undefined, "_value"], ["associatedPrompts", "string", 2, "array"]]],
[proto.BotSessionMetadata, "proto.BotSessionMetadata", [["sessionId", "string", 1, undefined, "_sessionId"], ["sessionSource", proto.BotSessionSource, 2, undefined, "_sessionSource"]]],
[proto.BotSignatureVerificationMetadata, "proto.BotSignatureVerificationMetadata", [["proofs", proto.BotSignatureVerificationUseCaseProof, 1, "array"]]],
[proto.BotSignatureVerificationUseCaseProof, "proto.BotSignatureVerificationUseCaseProof", [["version", "int32", 1, undefined, "_version"], ["useCase", proto.BotSignatureVerificationUseCaseProof.BotSignatureUseCase, 2, undefined, "_useCase"], ["signature", "bytes", 3, undefined, "_signature"], ["certificateChain", "bytes", 4, "array"]]],
[proto.BotSourcesMetadata, "proto.BotSourcesMetadata", [["sources", proto.BotSourcesMetadata.BotSourceItem, 1, "array"]]],
[proto.BotSourcesMetadata.BotSourceItem, "proto.BotSourcesMetadata.BotSourceItem", [["provider", proto.BotSourcesMetadata.BotSourceItem.SourceProvider, 1, undefined, "_provider"], ["thumbnailCdnUrl", "string", 2, undefined, "_thumbnailCdnUrl"], ["sourceProviderUrl", "string", 3, undefined, "_sourceProviderUrl"], ["sourceQuery", "string", 4, undefined, "_sourceQuery"], ["faviconCdnUrl", "string", 5, undefined, "_faviconCdnUrl"], ["citationNumber", "uint32", 6, undefined, "_citationNumber"], ["sourceTitle", "string", 7, undefined, "_sourceTitle"]]],
[proto.BotSuggestedPromptMetadata, "proto.BotSuggestedPromptMetadata", [["suggestedPrompts", "string", 1, "array"], ["selectedPromptIndex", "uint32", 2, undefined, "_selectedPromptIndex"], ["promptSuggestions", proto.BotPromptSuggestions, 3, undefined, "_promptSuggestions"], ["selectedPromptId", "string", 4, undefined, "_selectedPromptId"]]],
[proto.BotUnifiedResponseMutation, "proto.BotUnifiedResponseMutation", [["sbsMetadata", proto.BotUnifiedResponseMutation.SideBySideMetadata, 1, undefined, "_sbsMetadata"], ["mediaDetailsMetadataList", proto.BotUnifiedResponseMutation.MediaDetailsMetadata, 2, "array"]]],
[proto.BotUnifiedResponseMutation.MediaDetailsMetadata, "proto.BotUnifiedResponseMutation.MediaDetailsMetadata", [["id", "string", 1, undefined, "_id"], ["highResMedia", proto.BotMediaMetadata, 2, undefined, "_highResMedia"], ["previewMedia", proto.BotMediaMetadata, 3, undefined, "_previewMedia"]]],
[proto.BotUnifiedResponseMutation.SideBySideMetadata, "proto.BotUnifiedResponseMutation.SideBySideMetadata", [["primaryResponseId", "string", 1, undefined, "_primaryResponseId"], ["surveyCtaHasRendered", "bool", 2, undefined, "_surveyCtaHasRendered"]]],
[proto.CallLogRecord, "proto.CallLogRecord", [["callResult", proto.CallLogRecord.CallResult, 1, undefined, "_callResult"], ["isDndMode", "bool", 2, undefined, "_isDndMode"], ["silenceReason", proto.CallLogRecord.SilenceReason, 3, undefined, "_silenceReason"], ["duration", "int64", 4, undefined, "_duration"], ["startTime", "int64", 5, undefined, "_startTime"], ["isIncoming", "bool", 6, undefined, "_isIncoming"], ["isVideo", "bool", 7, undefined, "_isVideo"], ["isCallLink", "bool", 8, undefined, "_isCallLink"], ["callLinkToken", "string", 9, undefined, "_callLinkToken"], ["scheduledCallId", "string", 10, undefined, "_scheduledCallId"], ["callId", "string", 11, undefined, "_callId"], ["callCreatorJid", "string", 12, undefined, "_callCreatorJid"], ["groupJid", "string", 13, undefined, "_groupJid"], ["participants", proto.CallLogRecord.ParticipantInfo, 14, "array"], ["callType", proto.CallLogRecord.CallType, 15, undefined, "_callType"]]],
[proto.CallLogRecord.ParticipantInfo, "proto.CallLogRecord.ParticipantInfo", [["userJid", "string", 1, undefined, "_userJid"], ["callResult", proto.CallLogRecord.CallResult, 2, undefined, "_callResult"]]],
[proto.CertChain, "proto.CertChain", [["leaf", proto.CertChain.NoiseCertificate, 1, undefined, "_leaf"], ["intermediate", proto.CertChain.NoiseCertificate, 2, undefined, "_intermediate"]]],
[proto.CertChain.NoiseCertificate, "proto.CertChain.NoiseCertificate", [["details", "bytes", 1, undefined, "_details"], ["signature", "bytes", 2, undefined, "_signature"]]],
[proto.CertChain.NoiseCertificate.Details, "proto.CertChain.NoiseCertificate.Details", [["serial", "uint32", 1, undefined, "_serial"], ["issuerSerial", "uint32", 2, undefined, "_issuerSerial"], ["key", "bytes", 3, undefined, "_key"], ["notBefore", "uint64", 4, undefined, "_notBefore"], ["notAfter", "uint64", 5, undefined, "_notAfter"]]],
[proto.ChatLockSettings, "proto.ChatLockSettings", [["hideLockedChats", "bool", 1, undefined, "_hideLockedChats"], ["secretCode", proto.UserPassword, 2, undefined, "_secretCode"]]],
[proto.ChatRowOpaqueData, "proto.ChatRowOpaqueData", [["draftMessage", proto.ChatRowOpaqueData.DraftMessage, 1, undefined, "_draftMessage"]]],
[proto.ChatRowOpaqueData.DraftMessage, "proto.ChatRowOpaqueData.DraftMessage", [["text", "string", 1, undefined, "_text"], ["omittedUrl", "string", 2, undefined, "_omittedUrl"], ["ctwaContextLinkData", proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData, 3, undefined, "_ctwaContextLinkData"], ["ctwaContext", proto.ChatRowOpaqueData.DraftMessage.CtwaContextData, 4, undefined, "_ctwaContext"], ["timestamp", "int64", 5, undefined, "_timestamp"]]],
[proto.ChatRowOpaqueData.DraftMessage.CtwaContextData, "proto.ChatRowOpaqueData.DraftMessage.CtwaContextData", [["conversionSource", "string", 1, undefined, "_conversionSource"], ["conversionData", "bytes", 2, undefined, "_conversionData"], ["sourceUrl", "string", 3, undefined, "_sourceUrl"], ["sourceId", "string", 4, undefined, "_sourceId"], ["sourceType", "string", 5, undefined, "_sourceType"], ["title", "string", 6, undefined, "_title"], ["description", "string", 7, undefined, "_description"], ["thumbnail", "string", 8, undefined, "_thumbnail"], ["thumbnailUrl", "string", 9, undefined, "_thumbnailUrl"], ["mediaType", proto.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType, 10, undefined, "_mediaType"], ["mediaUrl", "string", 11, undefined, "_mediaUrl"], ["isSuspiciousLink", "bool", 12, undefined, "_isSuspiciousLink"]]],
[proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData, "proto.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData", [["context", "string", 1, undefined, "_context"], ["sourceUrl", "string", 2, undefined, "_sourceUrl"], ["icebreaker", "string", 3, undefined, "_icebreaker"], ["phone", "string", 4, undefined, "_phone"]]],
[proto.Citation, "proto.Citation", [["title", "string", 1], ["subtitle", "string", 2], ["cmsId", "string", 3], ["imageUrl", "string", 4]]],
[proto.ClientPairingProps, "proto.ClientPairingProps", [["isChatDbLidMigrated", "bool", 1, undefined, "_isChatDbLidMigrated"], ["isSyncdPureLidSession", "bool", 2, undefined, "_isSyncdPureLidSession"], ["isSyncdSnapshotRecoveryEnabled", "bool", 3, undefined, "_isSyncdSnapshotRecoveryEnabled"]]],
[proto.ClientPayload, "proto.ClientPayload", [["username", "uint64", 1, undefined, "_username"], ["passive", "bool", 3, undefined, "_passive"], ["userAgent", proto.ClientPayload.UserAgent, 5, undefined, "_userAgent"], ["webInfo", proto.ClientPayload.WebInfo, 6, undefined, "_webInfo"], ["pushName", "string", 7, undefined, "_pushName"], ["sessionId", "sfixed32", 9, undefined, "_sessionId"], ["shortConnect", "bool", 10, undefined, "_shortConnect"], ["connectType", proto.ClientPayload.ConnectType, 12, undefined, "_connectType"], ["connectReason", proto.ClientPayload.ConnectReason, 13, undefined, "_connectReason"], ["shards", "int32", 14, "array"], ["dnsSource", proto.ClientPayload.DNSSource, 15, undefined, "_dnsSource"], ["connectAttemptCount", "uint32", 16, undefined, "_connectAttemptCount"], ["device", "uint32", 18, undefined, "_device"], ["devicePairingData", proto.ClientPayload.DevicePairingRegistrationData, 19, undefined, "_devicePairingData"], ["product", proto.ClientPayload.Product, 20, undefined, "_product"], ["fbCat", "bytes", 21, undefined, "_fbCat"], ["fbUserAgent", "bytes", 22, undefined, "_fbUserAgent"], ["oc", "bool", 23, undefined, "_oc"], ["lc", "int32", 24, undefined, "_lc"], ["iosAppExtension", proto.ClientPayload.IOSAppExtension, 30, undefined, "_iosAppExtension"], ["fbAppId", "uint64", 31, undefined, "_fbAppId"], ["fbDeviceId", "bytes", 32, undefined, "_fbDeviceId"], ["pull", "bool", 33, undefined, "_pull"], ["paddingBytes", "bytes", 34, undefined, "_paddingBytes"], ["yearClass", "int32", 36, undefined, "_yearClass"], ["memClass", "int32", 37, undefined, "_memClass"], ["interopData", proto.ClientPayload.InteropData, 38, undefined, "_interopData"], ["trafficAnonymization", proto.ClientPayload.TrafficAnonymization, 40, undefined, "_trafficAnonymization"], ["lidDbMigrated", "bool", 41, undefined, "_lidDbMigrated"], ["accountType", proto.ClientPayload.AccountType, 42, undefined, "_accountType"], ["connectionSequenceInfo", "sfixed32", 43, undefined, "_connectionSequenceInfo"], ["paaLink", "bool", 44, undefined, "_paaLink"], ["preacksCount", "int32", 45, undefined, "_preacksCount"], ["processingQueueSize", "int32", 46, undefined, "_processingQueueSize"]]],
[proto.ClientPayload.DNSSource, "proto.ClientPayload.DNSSource", [["dnsMethod", proto.ClientPayload.DNSSource.DNSResolutionMethod, 15, undefined, "_dnsMethod"], ["appCached", "bool", 16, undefined, "_appCached"]]],
[proto.ClientPayload.DevicePairingRegistrationData, "proto.ClientPayload.DevicePairingRegistrationData", [["eRegid", "bytes", 1, undefined, "_eRegid"], ["eKeytype", "bytes", 2, undefined, "_eKeytype"], ["eIdent", "bytes", 3, undefined, "_eIdent"], ["eSkeyId", "bytes", 4, undefined, "_eSkeyId"], ["eSkeyVal", "bytes", 5, undefined, "_eSkeyVal"], ["eSkeySig", "bytes", 6, undefined, "_eSkeySig"], ["buildHash", "bytes", 7, undefined, "_buildHash"], ["deviceProps", "bytes", 8, undefined, "_deviceProps"]]],
[proto.ClientPayload.InteropData, "proto.ClientPayload.InteropData", [["accountId", "uint64", 1, undefined, "_accountId"], ["token", "bytes", 2, undefined, "_token"], ["enableReadReceipts", "bool", 3, undefined, "_enableReadReceipts"]]],
[proto.ClientPayload.UserAgent, "proto.ClientPayload.UserAgent", [["platform", proto.ClientPayload.UserAgent.Platform, 1, undefined, "_platform"], ["appVersion", proto.ClientPayload.UserAgent.AppVersion, 2, undefined, "_appVersion"], ["mcc", "string", 3, undefined, "_mcc"], ["mnc", "string", 4, undefined, "_mnc"], ["osVersion", "string", 5, undefined, "_osVersion"], ["manufacturer", "string", 6, undefined, "_manufacturer"], ["device", "string", 7, undefined, "_device"], ["osBuildNumber", "string", 8, undefined, "_osBuildNumber"], ["phoneId", "string", 9, undefined, "_phoneId"], ["releaseChannel", proto.ClientPayload.UserAgent.ReleaseChannel, 10, undefined, "_releaseChannel"], ["localeLanguageIso6391", "string", 11, undefined, "_localeLanguageIso6391"], ["localeCountryIso31661Alpha2", "string", 12, undefined, "_localeCountryIso31661Alpha2"], ["deviceBoard", "string", 13, undefined, "_deviceBoard"], ["deviceExpId", "string", 14, undefined, "_deviceExpId"], ["deviceType", proto.ClientPayload.UserAgent.DeviceType, 15, undefined, "_deviceType"], ["deviceModelType", "string", 16, undefined, "_deviceModelType"]]],
[proto.ClientPayload.UserAgent.AppVersion, "proto.ClientPayload.UserAgent.AppVersion", [["primary", "uint32", 1, undefined, "_primary"], ["secondary", "uint32", 2, undefined, "_secondary"], ["tertiary", "uint32", 3, undefined, "_tertiary"], ["quaternary", "uint32", 4, undefined, "_quaternary"], ["quinary", "uint32", 5, undefined, "_quinary"]]],
[proto.ClientPayload.WebInfo, "proto.ClientPayload.WebInfo", [["refToken", "string", 1, undefined, "_refToken"], ["version", "string", 2, undefined, "_version"], ["webdPayload", proto.ClientPayload.WebInfo.WebdPayload, 3, undefined, "_webdPayload"], ["webSubPlatform", proto.ClientPayload.WebInfo.WebSubPlatform, 4, undefined, "_webSubPlatform"]]],
[proto.ClientPayload.WebInfo.WebdPayload, "proto.ClientPayload.WebInfo.WebdPayload", [["usesParticipantInKey", "bool", 1, undefined, "_usesParticipantInKey"], ["supportsStarredMessages", "bool", 2, undefined, "_supportsStarredMessages"], ["supportsDocumentMessages", "bool", 3, undefined, "_supportsDocumentMessages"], ["supportsUrlMessages", "bool", 4, undefined, "_supportsUrlMessages"], ["supportsMediaRetry", "bool", 5, undefined, "_supportsMediaRetry"], ["supportsE2EImage", "bool", 6, undefined, "_supportsE2EImage"], ["supportsE2EVideo", "bool", 7, undefined, "_supportsE2EVideo"], ["supportsE2EAudio", "bool", 8, undefined, "_supportsE2EAudio"], ["supportsE2EDocument", "bool", 9, undefined, "_supportsE2EDocument"], ["documentTypes", "string", 10, undefined, "_documentTypes"], ["features", "bytes", 11, undefined, "_features"]]],
[proto.CommentMetadata, "proto.CommentMetadata", [["commentParentKey", proto.MessageKey, 1, undefined, "_commentParentKey"], ["replyCount", "uint32", 2, undefined, "_replyCount"]]],
[proto.CompanionCommitment, "proto.CompanionCommitment", [["hash", "bytes", 1, undefined, "_hash"]]],
[proto.CompanionEphemeralIdentity, "proto.CompanionEphemeralIdentity", [["publicKey", "bytes", 1, undefined, "_publicKey"], ["deviceType", proto.DeviceProps.PlatformType, 2, undefined, "_deviceType"], ["ref", "string", 3, undefined, "_ref"]]],
[proto.Config, "proto.Config", [["field", proto.Field, 1, "map", undefined, "uint32"], ["version", "uint32", 2, undefined, "_version"]]],
[proto.ContextInfo, "proto.ContextInfo", [["stanzaId", "string", 1, undefined, "_stanzaId"], ["participant", "string", 2, undefined, "_participant"], ["quotedMessage", proto.Message, 3, undefined, "_quotedMessage"], ["remoteJid", "string", 4, undefined, "_remoteJid"], ["mentionedJid", "string", 15, "array"], ["conversionSource", "string", 18, undefined, "_conversionSource"], ["conversionData", "bytes", 19, undefined, "_conversionData"], ["conversionDelaySeconds", "uint32", 20, undefined, "_conversionDelaySeconds"], ["forwardingScore", "uint32", 21, undefined, "_forwardingScore"], ["isForwarded", "bool", 22, undefined, "_isForwarded"], ["quotedAd", proto.ContextInfo.AdReplyInfo, 23, undefined, "_quotedAd"], ["placeholderKey", proto.MessageKey, 24, undefined, "_placeholderKey"], ["expiration", "uint32", 25, undefined, "_expiration"], ["ephemeralSettingTimestamp", "int64", 26, undefined, "_ephemeralSettingTimestamp"], ["ephemeralSharedSecret", "bytes", 27, undefined, "_ephemeralSharedSecret"], ["externalAdReply", proto.ContextInfo.ExternalAdReplyInfo, 28, undefined, "_externalAdReply"], ["entryPointConversionSource", "string", 29, undefined, "_entryPointConversionSource"], ["entryPointConversionApp", "string", 30, undefined, "_entryPointConversionApp"], ["entryPointConversionDelaySeconds", "uint32", 31, undefined, "_entryPointConversionDelaySeconds"], ["disappearingMode", proto.DisappearingMode, 32, undefined, "_disappearingMode"], ["actionLink", proto.ActionLink, 33, undefined, "_actionLink"], ["groupSubject", "string", 34, undefined, "_groupSubject"], ["parentGroupJid", "string", 35, undefined, "_parentGroupJid"], ["trustBannerType", "string", 37, undefined, "_trustBannerType"], ["trustBannerAction", "uint32", 38, undefined, "_trustBannerAction"], ["isSampled", "bool", 39, undefined, "_isSampled"], ["groupMentions", proto.GroupMention, 40, "array"], ["utm", proto.ContextInfo.UTMInfo, 41, undefined, "_utm"], ["forwardedNewsletterMessageInfo", proto.ContextInfo.ForwardedNewsletterMessageInfo, 43, undefined, "_forwardedNewsletterMessageInfo"], ["businessMessageForwardInfo", proto.ContextInfo.BusinessMessageForwardInfo, 44, undefined, "_businessMessageForwardInfo"], ["smbClientCampaignId", "string", 45, undefined, "_smbClientCampaignId"], ["smbServerCampaignId", "string", 46, undefined, "_smbServerCampaignId"], ["dataSharingContext", proto.ContextInfo.DataSharingContext, 47, undefined, "_dataSharingContext"], ["alwaysShowAdAttribution", "bool", 48, undefined, "_alwaysShowAdAttribution"], ["featureEligibilities", proto.ContextInfo.FeatureEligibilities, 49, undefined, "_featureEligibilities"], ["entryPointConversionExternalSource", "string", 50, undefined, "_entryPointConversionExternalSource"], ["entryPointConversionExternalMedium", "string", 51, undefined, "_entryPointConversionExternalMedium"], ["ctwaSignals", "string", 54, undefined, "_ctwaSignals"], ["ctwaPayload", "bytes", 55, undefined, "_ctwaPayload"], ["forwardedAiBotMessageInfo", proto.ForwardedAIBotMessageInfo, 56, undefined, "_forwardedAiBotMessageInfo"], ["statusAttributionType", proto.ContextInfo.StatusAttributionType, 57, undefined, "_statusAttributionType"], ["urlTrackingMap", proto.UrlTrackingMap, 58, undefined, "_urlTrackingMap"], ["pairedMediaType", proto.ContextInfo.PairedMediaType, 59, undefined, "_pairedMediaType"], ["rankingVersion", "uint32", 60, undefined, "_rankingVersion"], ["memberLabel", proto.MemberLabel, 62, undefined, "_memberLabel"], ["isQuestion", "bool", 63, undefined, "_isQuestion"], ["statusSourceType", proto.ContextInfo.StatusSourceType, 64, undefined, "_statusSourceType"], ["statusAttributions", proto.StatusAttribution, 65, "array"], ["isGroupStatus", "bool", 66, undefined, "_isGroupStatus"], ["forwardOrigin", proto.ContextInfo.ForwardOrigin, 67, undefined, "_forwardOrigin"], ["questionReplyQuotedMessage", proto.ContextInfo.QuestionReplyQuotedMessage, 68, undefined, "_questionReplyQuotedMessage"], ["statusAudienceMetadata", proto.ContextInfo.StatusAudienceMetadata, 69, undefined, "_statusAudienceMetadata"], ["nonJidMentions", "uint32", 70, undefined, "_nonJidMentions"], ["quotedType", proto.ContextInfo.QuotedType, 71, undefined, "_quotedType"], ["botMessageSharingInfo", proto.BotMessageSharingInfo, 72, undefined, "_botMessageSharingInfo"]]],
[proto.ContextInfo.AdReplyInfo, "proto.ContextInfo.AdReplyInfo", [["advertiserName", "string", 1, undefined, "_advertiserName"], ["mediaType", proto.ContextInfo.AdReplyInfo.MediaType, 2, undefined, "_mediaType"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["caption", "string", 17, undefined, "_caption"]]],
[proto.ContextInfo.BusinessMessageForwardInfo, "proto.ContextInfo.BusinessMessageForwardInfo", [["businessOwnerJid", "string", 1, undefined, "_businessOwnerJid"]]],
[proto.ContextInfo.DataSharingContext, "proto.ContextInfo.DataSharingContext", [["showMmDisclosure", "bool", 1, undefined, "_showMmDisclosure"], ["encryptedSignalTokenConsented", "string", 2, undefined, "_encryptedSignalTokenConsented"], ["parameters", proto.ContextInfo.DataSharingContext.Parameters, 3, "array"], ["dataSharingFlags", "int32", 4, undefined, "_dataSharingFlags"]]],
[proto.ContextInfo.DataSharingContext.Parameters, "proto.ContextInfo.DataSharingContext.Parameters", [["key", "string", 1, undefined, "_key"], ["stringData", "string", 2, undefined, "_stringData"], ["intData", "int64", 3, undefined, "_intData"], ["floatData", "float", 4, undefined, "_floatData"], ["contents", proto.ContextInfo.DataSharingContext.Parameters, 5, undefined, "_contents"]]],
[proto.ContextInfo.ExternalAdReplyInfo, "proto.ContextInfo.ExternalAdReplyInfo", [["title", "string", 1, undefined, "_title"], ["body", "string", 2, undefined, "_body"], ["mediaType", proto.ContextInfo.ExternalAdReplyInfo.MediaType, 3, undefined, "_mediaType"], ["thumbnailUrl", "string", 4, undefined, "_thumbnailUrl"], ["mediaUrl", "string", 5, undefined, "_mediaUrl"], ["thumbnail", "bytes", 6, undefined, "_thumbnail"], ["sourceType", "string", 7, undefined, "_sourceType"], ["sourceId", "string", 8, undefined, "_sourceId"], ["sourceUrl", "string", 9, undefined, "_sourceUrl"], ["containsAutoReply", "bool", 10, undefined, "_containsAutoReply"], ["renderLargerThumbnail", "bool", 11, undefined, "_renderLargerThumbnail"], ["showAdAttribution", "bool", 12, undefined, "_showAdAttribution"], ["ctwaClid", "string", 13, undefined, "_ctwaClid"], ["ref", "string", 14, undefined, "_ref"], ["clickToWhatsappCall", "bool", 15, undefined, "_clickToWhatsappCall"], ["adContextPreviewDismissed", "bool", 16, undefined, "_adContextPreviewDismissed"], ["sourceApp", "string", 17, undefined, "_sourceApp"], ["automatedGreetingMessageShown", "bool", 18, undefined, "_automatedGreetingMessageShown"], ["greetingMessageBody", "string", 19, undefined, "_greetingMessageBody"], ["ctaPayload", "string", 20, undefined, "_ctaPayload"], ["disableNudge", "bool", 21, undefined, "_disableNudge"], ["originalImageUrl", "string", 22, undefined, "_originalImageUrl"], ["automatedGreetingMessageCtaType", "string", 23, undefined, "_automatedGreetingMessageCtaType"], ["wtwaAdFormat", "bool", 24, undefined, "_wtwaAdFormat"], ["adType", proto.ContextInfo.ExternalAdReplyInfo.AdType, 25, undefined, "_adType"], ["wtwaWebsiteUrl", "string", 26, undefined, "_wtwaWebsiteUrl"], ["adPreviewUrl", "string", 27, undefined, "_adPreviewUrl"]]],
[proto.ContextInfo.FeatureEligibilities, "proto.ContextInfo.FeatureEligibilities", [["cannotBeReactedTo", "bool", 1, undefined, "_cannotBeReactedTo"], ["cannotBeRanked", "bool", 2, undefined, "_cannotBeRanked"], ["canRequestFeedback", "bool", 3, undefined, "_canRequestFeedback"], ["canBeReshared", "bool", 4, undefined, "_canBeReshared"], ["canReceiveMultiReact", "bool", 5, undefined, "_canReceiveMultiReact"]]],
[proto.ContextInfo.ForwardedNewsletterMessageInfo, "proto.ContextInfo.ForwardedNewsletterMessageInfo", [["newsletterJid", "string", 1, undefined, "_newsletterJid"], ["serverMessageId", "int32", 2, undefined, "_serverMessageId"], ["newsletterName", "string", 3, undefined, "_newsletterName"], ["contentType", proto.ContextInfo.ForwardedNewsletterMessageInfo.ContentType, 4, undefined, "_contentType"], ["accessibilityText", "string", 5, undefined, "_accessibilityText"]]],
[proto.ContextInfo.QuestionReplyQuotedMessage, "proto.ContextInfo.QuestionReplyQuotedMessage", [["serverQuestionId", "int32", 1, undefined, "_serverQuestionId"], ["quotedQuestion", proto.Message, 2, undefined, "_quotedQuestion"], ["quotedResponse", proto.Message, 3, undefined, "_quotedResponse"]]],
[proto.ContextInfo.StatusAudienceMetadata, "proto.ContextInfo.StatusAudienceMetadata", [["audienceType", proto.ContextInfo.StatusAudienceMetadata.AudienceType, 1, undefined, "_audienceType"]]],
[proto.ContextInfo.UTMInfo, "proto.ContextInfo.UTMInfo", [["utmSource", "string", 1, undefined, "_utmSource"], ["utmCampaign", "string", 2, undefined, "_utmCampaign"]]],
[proto.Conversation, "proto.Conversation", [["id", "string", 1], ["messages", proto.HistorySyncMsg, 2, "array"], ["newJid", "string", 3, undefined, "_newJid"], ["oldJid", "string", 4, undefined, "_oldJid"], ["lastMsgTimestamp", "uint64", 5, undefined, "_lastMsgTimestamp"], ["unreadCount", "uint32", 6, undefined, "_unreadCount"], ["readOnly", "bool", 7, undefined, "_readOnly"], ["endOfHistoryTransfer", "bool", 8, undefined, "_endOfHistoryTransfer"], ["ephemeralExpiration", "uint32", 9, undefined, "_ephemeralExpiration"], ["ephemeralSettingTimestamp", "int64", 10, undefined, "_ephemeralSettingTimestamp"], ["endOfHistoryTransferType", proto.Conversation.EndOfHistoryTransferType, 11, undefined, "_endOfHistoryTransferType"], ["conversationTimestamp", "uint64", 12, undefined, "_conversationTimestamp"], ["name", "string", 13, undefined, "_name"], ["pHash", "string", 14, undefined, "_pHash"], ["notSpam", "bool", 15, undefined, "_notSpam"], ["archived", "bool", 16, undefined, "_archived"], ["disappearingMode", proto.DisappearingMode, 17, undefined, "_disappearingMode"], ["unreadMentionCount", "uint32", 18, undefined, "_unreadMentionCount"], ["markedAsUnread", "bool", 19, undefined, "_markedAsUnread"], ["participant", proto.GroupParticipant, 20, "array"], ["tcToken", "bytes", 21, undefined, "_tcToken"], ["tcTokenTimestamp", "uint64", 22, undefined, "_tcTokenTimestamp"], ["contactPrimaryIdentityKey", "bytes", 23, undefined, "_contactPrimaryIdentityKey"], ["pinned", "uint32", 24, undefined, "_pinned"], ["muteEndTime", "uint64", 25, undefined, "_muteEndTime"], ["wallpaper", proto.WallpaperSettings, 26, undefined, "_wallpaper"], ["mediaVisibility", proto.MediaVisibility, 27, undefined, "_mediaVisibility"], ["tcTokenSenderTimestamp", "uint64", 28, undefined, "_tcTokenSenderTimestamp"], ["suspended", "bool", 29, undefined, "_suspended"], ["terminated", "bool", 30, undefined, "_terminated"], ["createdAt", "uint64", 31, undefined, "_createdAt"], ["createdBy", "string", 32, undefined, "_createdBy"], ["description", "string", 33, undefined, "_description"], ["support", "bool", 34, undefined, "_support"], ["isParentGroup", "bool", 35, undefined, "_isParentGroup"], ["parentGroupId", "string", 37, undefined, "_parentGroupId"], ["isDefaultSubgroup", "bool", 36, undefined, "_isDefaultSubgroup"], ["displayName", "string", 38, undefined, "_displayName"], ["pnJid", "string", 39, undefined, "_pnJid"], ["shareOwnPn", "bool", 40, undefined, "_shareOwnPn"], ["pnhDuplicateLidThread", "bool", 41, undefined, "_pnhDuplicateLidThread"], ["lidJid", "string", 42, undefined, "_lidJid"], ["username", "string", 43, undefined, "_username"], ["lidOriginType", "string", 44, undefined, "_lidOriginType"], ["commentsCount", "uint32", 45, undefined, "_commentsCount"], ["locked", "bool", 46, undefined, "_locked"], ["systemMessageToInsert", proto.PrivacySystemMessage, 47, undefined, "_systemMessageToInsert"], ["capiCreatedGroup", "bool", 48, undefined, "_capiCreatedGroup"], ["accountLid", "string", 49, undefined, "_accountLid"], ["limitSharing", "bool", 50, undefined, "_limitSharing"], ["limitSharingSettingTimestamp", "int64", 51, undefined, "_limitSharingSettingTimestamp"], ["limitSharingTrigger", proto.LimitSharing.TriggerType, 52, undefined, "_limitSharingTrigger"], ["limitSharingInitiatedByMe", "bool", 53, undefined, "_limitSharingInitiatedByMe"], ["maibaAiThreadEnabled", "bool", 54, undefined, "_maibaAiThreadEnabled"]], [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]],
[proto.DeviceCapabilities, "proto.DeviceCapabilities", [["chatLockSupportLevel", proto.DeviceCapabilities.ChatLockSupportLevel, 1, undefined, "_chatLockSupportLevel"], ["lidMigration", proto.DeviceCapabilities.LIDMigration, 2, undefined, "_lidMigration"], ["businessBroadcast", proto.DeviceCapabilities.BusinessBroadcast, 3, undefined, "_businessBroadcast"], ["userHasAvatar", proto.DeviceCapabilities.UserHasAvatar, 4, undefined, "_userHasAvatar"], ["memberNameTagPrimarySupport", proto.DeviceCapabilities.MemberNameTagPrimarySupport, 5, undefined, "_memberNameTagPrimarySupport"]]],
[proto.DeviceCapabilities.BusinessBroadcast, "proto.DeviceCapabilities.BusinessBroadcast", [["importListEnabled", "bool", 1, undefined, "_importListEnabled"]]],
[proto.DeviceCapabilities.LIDMigration, "proto.DeviceCapabilities.LIDMigration", [["chatDbMigrationTimestamp", "uint64", 1, undefined, "_chatDbMigrationTimestamp"]]],
[proto.DeviceCapabilities.UserHasAvatar, "proto.DeviceCapabilities.UserHasAvatar", [["userHasAvatar", "bool", 1, undefined, "_userHasAvatar"]]],
[proto.DeviceConsistencyCodeMessage, "proto.DeviceConsistencyCodeMessage", [["generation", "uint32", 1, undefined, "_generation"], ["signature", "bytes", 2, undefined, "_signature"]]],
[proto.DeviceListMetadata, "proto.DeviceListMetadata", [["senderKeyHash", "bytes", 1, undefined, "_senderKeyHash"], ["senderTimestamp", "uint64", 2, undefined, "_senderTimestamp"], ["senderKeyIndexes", "uint32", 3, "array"], ["senderAccountType", proto.ADVEncryptionType, 4, undefined, "_senderAccountType"], ["receiverAccountType", proto.ADVEncryptionType, 5, undefined, "_receiverAccountType"], ["recipientKeyHash", "bytes", 8, undefined, "_recipientKeyHash"], ["recipientTimestamp", "uint64", 9, undefined, "_recipientTimestamp"], ["recipientKeyIndexes", "uint32", 10, "array"]]],
[proto.DeviceProps, "proto.DeviceProps", [["os", "string", 1, undefined, "_os"], ["version", proto.DeviceProps.AppVersion, 2, undefined, "_version"], ["platformType", proto.DeviceProps.PlatformType, 3, undefined, "_platformType"], ["requireFullSync", "bool", 4, undefined, "_requireFullSync"], ["historySyncConfig", proto.DeviceProps.HistorySyncConfig, 5, undefined, "_historySyncConfig"]]],
[proto.DeviceProps.AppVersion, "proto.DeviceProps.AppVersion", [["primary", "uint32", 1, undefined, "_primary"], ["secondary", "uint32", 2, undefined, "_secondary"], ["tertiary", "uint32", 3, undefined, "_tertiary"], ["quaternary", "uint32", 4, undefined, "_quaternary"], ["quinary", "uint32", 5, undefined, "_quinary"]]],
[proto.DeviceProps.HistorySyncConfig, "proto.DeviceProps.HistorySyncConfig", [["fullSyncDaysLimit", "uint32", 1, undefined, "_fullSyncDaysLimit"], ["fullSyncSizeMbLimit", "uint32", 2, undefined, "_fullSyncSizeMbLimit"], ["storageQuotaMb", "uint32", 3, undefined, "_storageQuotaMb"], ["inlineInitialPayloadInE2EeMsg", "bool", 4, undefined, "_inlineInitialPayloadInE2EeMsg"], ["recentSyncDaysLimit", "uint32", 5, undefined, "_recentSyncDaysLimit"], ["supportCallLogHistory", "bool", 6, undefined, "_supportCallLogHistory"], ["supportBotUserAgentChatHistory", "bool", 7, undefined, "_supportBotUserAgentChatHistory"], ["supportCagReactionsAndPolls", "bool", 8, undefined, "_supportCagReactionsAndPolls"], ["supportBizHostedMsg", "bool", 9, undefined, "_supportBizHostedMsg"], ["supportRecentSyncChunkMessageCountTuning", "bool", 10, undefined, "_supportRecentSyncChunkMessageCountTuning"], ["supportHostedGroupMsg", "bool", 11, undefined, "_supportHostedGroupMsg"], ["supportFbidBotChatHistory", "bool", 12, undefined, "_supportFbidBotChatHistory"], ["supportAddOnHistorySyncMigration", "bool", 13, undefined, "_supportAddOnHistorySyncMigration"], ["supportMessageAssociation", "bool", 14, undefined, "_supportMessageAssociation"], ["supportGroupHistory", "bool", 15, undefined, "_supportGroupHistory"], ["onDemandReady", "bool", 16, undefined, "_onDemandReady"], ["supportGuestChat", "bool", 17, undefined, "_supportGuestChat"], ["completeOnDemandReady", "bool", 18, undefined, "_completeOnDemandReady"], ["thumbnailSyncDaysLimit", "uint32", 19, undefined, "_thumbnailSyncDaysLimit"]]],
[proto.DisappearingMode, "proto.DisappearingMode", [["initiator", proto.DisappearingMode.Initiator, 1, undefined, "_initiator"], ["trigger", proto.DisappearingMode.Trigger, 2, undefined, "_trigger"], ["initiatorDeviceJid", "string", 3, undefined, "_initiatorDeviceJid"], ["initiatedByMe", "bool", 4, undefined, "_initiatedByMe"]]],
[proto.EmbeddedContent, "proto.EmbeddedContent", [["embeddedMessage", proto.EmbeddedMessage, 1, undefined, "content"], ["embeddedMusic", proto.EmbeddedMusic, 2, undefined, "content"]]],
[proto.EmbeddedMessage, "proto.EmbeddedMessage", [["stanzaId", "string", 1, undefined, "_stanzaId"], ["message", proto.Message, 2, undefined, "_message"]]],
[proto.EmbeddedMusic, "proto.EmbeddedMusic", [["musicContentMediaId", "string", 1, undefined, "_musicContentMediaId"], ["songId", "string", 2, undefined, "_songId"], ["author", "string", 3, undefined, "_author"], ["title", "string", 4, undefined, "_title"], ["artworkDirectPath", "string", 5, undefined, "_artworkDirectPath"], ["artworkSha256", "bytes", 6, undefined, "_artworkSha256"], ["artworkEncSha256", "bytes", 7, undefined, "_artworkEncSha256"], ["artistAttribution", "string", 8, undefined, "_artistAttribution"], ["countryBlocklist", "bytes", 9, undefined, "_countryBlocklist"], ["isExplicit", "bool", 10, undefined, "_isExplicit"], ["artworkMediaKey", "bytes", 11, undefined, "_artworkMediaKey"], ["musicSongStartTimeInMs", "int64", 12, undefined, "_musicSongStartTimeInMs"], ["derivedContentStartTimeInMs", "int64", 13, undefined, "_derivedContentStartTimeInMs"], ["overlapDurationInMs", "int64", 14, undefined, "_overlapDurationInMs"]]],
[proto.EncryptedPairingRequest, "proto.EncryptedPairingRequest", [["encryptedPayload", "bytes", 1, undefined, "_encryptedPayload"], ["iv", "bytes", 2, undefined, "_iv"]]],
[proto.EphemeralSetting, "proto.EphemeralSetting", [["duration", "sfixed32", 1, undefined, "_duration"], ["timestamp", "sfixed64", 2, undefined, "_timestamp"]]],
[proto.EventAdditionalMetadata, "proto.EventAdditionalMetadata", [["isStale", "bool", 1, undefined, "_isStale"]]],
[proto.EventResponse, "proto.EventResponse", [["eventResponseMessageKey", proto.MessageKey, 1, undefined, "_eventResponseMessageKey"], ["timestampMs", "int64", 2, undefined, "_timestampMs"], ["eventResponseMessage", proto.Message.EventResponseMessage, 3, undefined, "_eventResponseMessage"], ["unread", "bool", 4, undefined, "_unread"]]],
[proto.ExitCode, "proto.ExitCode", [["code", "uint64", 1, undefined, "_code"], ["text", "string", 2, undefined, "_text"]]],
[proto.ExternalBlobReference, "proto.ExternalBlobReference", [["mediaKey", "bytes", 1, undefined, "_mediaKey"], ["directPath", "string", 2, undefined, "_directPath"], ["handle", "string", 3, undefined, "_handle"], ["fileSizeBytes", "uint64", 4, undefined, "_fileSizeBytes"], ["fileSha256", "bytes", 5, undefined, "_fileSha256"], ["fileEncSha256", "bytes", 6, undefined, "_fileEncSha256"]]],
[proto.Field, "proto.Field", [["minVersion", "uint32", 1, undefined, "_minVersion"], ["maxVersion", "uint32", 2, undefined, "_maxVersion"], ["notReportableMinVersion", "uint32", 3, undefined, "_notReportableMinVersion"], ["isMessage", "bool", 4, undefined, "_isMessage"], ["subfield", proto.Field, 5, "map", undefined, "uint32"]]],
[proto.ForwardedAIBotMessageInfo, "proto.ForwardedAIBotMessageInfo", [["botName", "string", 1, undefined, "_botName"], ["botJid", "string", 2, undefined, "_botJid"], ["creatorName", "string", 3, undefined, "_creatorName"]]],
[proto.GlobalSettings, "proto.GlobalSettings", [["lightThemeWallpaper", proto.WallpaperSettings, 1, undefined, "_lightThemeWallpaper"], ["mediaVisibility", proto.MediaVisibility, 2, undefined, "_mediaVisibility"], ["darkThemeWallpaper", proto.WallpaperSettings, 3, undefined, "_darkThemeWallpaper"], ["autoDownloadWiFi", proto.AutoDownloadSettings, 4, undefined, "_autoDownloadWiFi"], ["autoDownloadCellular", proto.AutoDownloadSettings, 5, undefined, "_autoDownloadCellular"], ["autoDownloadRoaming", proto.AutoDownloadSettings, 6, undefined, "_autoDownloadRoaming"], ["showIndividualNotificationsPreview", "bool", 7, undefined, "_showIndividualNotificationsPreview"], ["showGroupNotificationsPreview", "bool", 8, undefined, "_showGroupNotificationsPreview"], ["disappearingModeDuration", "int32", 9, undefined, "_disappearingModeDuration"], ["disappearingModeTimestamp", "int64", 10, undefined, "_disappearingModeTimestamp"], ["avatarUserSettings", proto.AvatarUserSettings, 11, undefined, "_avatarUserSettings"], ["fontSize", "int32", 12, undefined, "_fontSize"], ["securityNotifications", "bool", 13, undefined, "_securityNotifications"], ["autoUnarchiveChats", "bool", 14, undefined, "_autoUnarchiveChats"], ["videoQualityMode", "int32", 15, undefined, "_videoQualityMode"], ["photoQualityMode", "int32", 16, undefined, "_photoQualityMode"], ["individualNotificationSettings", proto.NotificationSettings, 17, undefined, "_individualNotificationSettings"], ["groupNotificationSettings", proto.NotificationSettings, 18, undefined, "_groupNotificationSettings"], ["chatLockSettings", proto.ChatLockSettings, 19, undefined, "_chatLockSettings"], ["chatDbLidMigrationTimestamp", "int64", 20, undefined, "_chatDbLidMigrationTimestamp"]]],
[proto.GroupHistoryBundleInfo, "proto.GroupHistoryBundleInfo", [["deprecatedMessageHistoryBundle", proto.Message.MessageHistoryBundle, 1, undefined, "_deprecatedMessageHistoryBundle"], ["processState", proto.GroupHistoryBundleInfo.ProcessState, 2, undefined, "_processState"]]],
[proto.GroupHistoryIndividualMessageInfo, "proto.GroupHistoryIndividualMessageInfo", [["bundleMessageKey", proto.MessageKey, 1, undefined, "_bundleMessageKey"], ["editedAfterReceivedAsHistory", "bool", 2, undefined, "_editedAfterReceivedAsHistory"]]],
[proto.GroupMention, "proto.GroupMention", [["groupJid", "string", 1, undefined, "_groupJid"], ["groupSubject", "string", 2, undefined, "_groupSubject"]]],
[proto.GroupParticipant, "proto.GroupParticipant", [["userJid", "string", 1], ["rank", proto.GroupParticipant.Rank, 2, undefined, "_rank"], ["memberLabel", proto.MemberLabel, 3, undefined, "_memberLabel"]]],
[proto.HandshakeMessage, "proto.HandshakeMessage", [["clientHello", proto.HandshakeMessage.ClientHello, 2, undefined, "_clientHello"], ["serverHello", proto.HandshakeMessage.ServerHello, 3, undefined, "_serverHello"], ["clientFinish", proto.HandshakeMessage.ClientFinish, 4, undefined, "_clientFinish"]]],
[proto.HandshakeMessage.ClientFinish, "proto.HandshakeMessage.ClientFinish", [["static", "bytes", 1, undefined, "_static"], ["payload", "bytes", 2, undefined, "_payload"], ["extendedCiphertext", "bytes", 3, undefined, "_extendedCiphertext"]]],
[proto.HandshakeMessage.ClientHello, "proto.HandshakeMessage.ClientHello", [["ephemeral", "bytes", 1, undefined, "_ephemeral"], ["static", "bytes", 2, undefined, "_static"], ["payload", "bytes", 3, undefined, "_payload"], ["useExtended", "bool", 4, undefined, "_useExtended"], ["extendedCiphertext", "bytes", 5, undefined, "_extendedCiphertext"]]],
[proto.HandshakeMessage.ServerHello, "proto.HandshakeMessage.ServerHello", [["ephemeral", "bytes", 1, undefined, "_ephemeral"], ["static", "bytes", 2, undefined, "_static"], ["payload", "bytes", 3, undefined, "_payload"], ["extendedStatic", "bytes", 4, undefined, "_extendedStatic"]]],
[proto.HistorySync, "proto.HistorySync", [["syncType", proto.HistorySync.HistorySyncType, 1], ["conversations", proto.Conversation, 2, "array"], ["statusV3Messages", proto.WebMessageInfo, 3, "array"], ["chunkOrder", "uint32", 5, undefined, "_chunkOrder"], ["progress", "uint32", 6, undefined, "_progress"], ["pushnames", proto.Pushname, 7, "array"], ["globalSettings", proto.GlobalSettings, 8, undefined, "_globalSettings"], ["threadIdUserSecret", "bytes", 9, undefined, "_threadIdUserSecret"], ["threadDsTimeframeOffset", "uint32", 10, undefined, "_threadDsTimeframeOffset"], ["recentStickers", proto.StickerMetadata, 11, "array"], ["pastParticipants", proto.PastParticipants, 12, "array"], ["callLogRecords", proto.CallLogRecord, 13, "array"], ["aiWaitListState", proto.HistorySync.BotAIWaitListState, 14, undefined, "_aiWaitListState"], ["phoneNumberToLidMappings", proto.PhoneNumberToLIDMapping, 15, "array"], ["companionMetaNonce", "string", 16, undefined, "_companionMetaNonce"], ["shareableChatIdentifierEncryptionKey", "bytes", 17, undefined, "_shareableChatIdentifierEncryptionKey"], ["accounts", proto.Account, 18, "array"]]],
[proto.HistorySyncMsg, "proto.HistorySyncMsg", [["message", proto.WebMessageInfo, 1, undefined, "_message"], ["msgOrderId", "uint64", 2, undefined, "_msgOrderId"]]],
[proto.HydratedTemplateButton, "proto.HydratedTemplateButton", [["index", "uint32", 4, undefined, "_index"], ["quickReplyButton", proto.HydratedTemplateButton.HydratedQuickReplyButton, 1, undefined, "hydratedButton"], ["urlButton", proto.HydratedTemplateButton.HydratedURLButton, 2, undefined, "hydratedButton"], ["callButton", proto.HydratedTemplateButton.HydratedCallButton, 3, undefined, "hydratedButton"]], [1,2,3,0]],
[proto.HydratedTemplateButton.HydratedCallButton, "proto.HydratedTemplateButton.HydratedCallButton", [["displayText", "string", 1, undefined, "_displayText"], ["phoneNumber", "string", 2, undefined, "_phoneNumber"]]],
[proto.HydratedTemplateButton.HydratedQuickReplyButton, "proto.HydratedTemplateButton.HydratedQuickReplyButton", [["displayText", "string", 1, undefined, "_displayText"], ["id", "string", 2, undefined, "_id"]]],
[proto.HydratedTemplateButton.HydratedURLButton, "proto.HydratedTemplateButton.HydratedURLButton", [["displayText", "string", 1, undefined, "_displayText"], ["url", "string", 2, undefined, "_url"], ["consentedUsersUrl", "string", 3, undefined, "_consentedUsersUrl"], ["webviewPresentation", proto.HydratedTemplateButton.HydratedURLButton.WebviewPresentationType, 4, undefined, "_webviewPresentation"]]],
[proto.IdentityKeyPairStructure, "proto.IdentityKeyPairStructure", [["publicKey", "bytes", 1, undefined, "_publicKey"], ["privateKey", "bytes", 2, undefined, "_privateKey"]]],
[proto.InThreadSurveyMetadata, "proto.InThreadSurveyMetadata", [["tessaSessionId", "string", 1, undefined, "_tessaSessionId"], ["simonSessionId", "string", 2, undefined, "_simonSessionId"], ["simonSurveyId", "string", 3, undefined, "_simonSurveyId"], ["tessaRootId", "string", 4, undefined, "_tessaRootId"], ["requestId", "string", 5, undefined, "_requestId"], ["tessaEvent", "string", 6, undefined, "_tessaEvent"], ["invitationHeaderText", "string", 7, undefined, "_invitationHeaderText"], ["invitationBodyText", "string", 8, undefined, "_invitationBodyText"], ["invitationCtaText", "string", 9, undefined, "_invitationCtaText"], ["invitationCtaUrl", "string", 10, undefined, "_invitationCtaUrl"], ["surveyTitle", "string", 11, undefined, "_surveyTitle"], ["questions", proto.InThreadSurveyMetadata.InThreadSurveyQuestion, 12, "array"], ["surveyContinueButtonText", "string", 13, undefined, "_surveyContinueButtonText"], ["surveySubmitButtonText", "string", 14, undefined, "_surveySubmitButtonText"], ["privacyStatementFull", "string", 15, undefined, "_privacyStatementFull"], ["privacyStatementParts", proto.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart, 16, "array"], ["feedbackToastText", "string", 17, undefined, "_feedbackToastText"]]],
[proto.InThreadSurveyMetadata.InThreadSurveyOption, "proto.InThreadSurveyMetadata.InThreadSurveyOption", [["stringValue", "string", 1, undefined, "_stringValue"], ["numericValue", "uint32", 2, undefined, "_numericValue"], ["textTranslated", "string", 3, undefined, "_textTranslated"]]],
[proto.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart, "proto.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart", [["text", "string", 1, undefined, "_text"], ["url", "string", 2, undefined, "_url"]]],
[proto.InThreadSurveyMetadata.InThreadSurveyQuestion, "proto.InThreadSurveyMetadata.InThreadSurveyQuestion", [["questionText", "string", 1, undefined, "_questionText"], ["questionId", "string", 2, undefined, "_questionId"], ["questionOptions", proto.InThreadSurveyMetadata.InThreadSurveyOption, 3, "array"]]],
[proto.InteractiveAnnotation, "proto.InteractiveAnnotation", [["polygonVertices", proto.Point, 1, "array"], ["shouldSkipConfirmation", "bool", 4, undefined, "_shouldSkipConfirmation"], ["embeddedContent", proto.EmbeddedContent, 5, undefined, "_embeddedContent"], ["statusLinkType", proto.InteractiveAnnotation.StatusLinkType, 8, undefined, "_statusLinkType"], ["location", proto.Location, 2, undefined, "action"], ["newsletter", proto.ContextInfo.ForwardedNewsletterMessageInfo, 3, undefined, "action"], ["embeddedAction", "bool", 6, undefined, "action"], ["tapAction", proto.TapLinkAction, 7, undefined, "action"]], [0,4,5,1,2,6,7,3]],
[proto.InteractiveMessageAdditionalMetadata, "proto.InteractiveMessageAdditionalMetadata", [["isGalaxyFlowCompleted", "bool", 1, undefined, "_isGalaxyFlowCompleted"]]],
[proto.KeepInChat, "proto.KeepInChat", [["keepType", proto.KeepType, 1, undefined, "_keepType"], ["serverTimestamp", "int64", 2, undefined, "_serverTimestamp"], ["key", proto.MessageKey, 3, undefined, "_key"], ["deviceJid", "string", 4, undefined, "_deviceJid"], ["clientTimestampMs", "int64", 5, undefined, "_clientTimestampMs"], ["serverTimestampMs", "int64", 6, undefined, "_serverTimestampMs"]]],
[proto.KeyExchangeMessage, "proto.KeyExchangeMessage", [["id", "uint32", 1, undefined, "_id"], ["baseKey", "bytes", 2, undefined, "_baseKey"], ["ratchetKey", "bytes", 3, undefined, "_ratchetKey"], ["identityKey", "bytes", 4, undefined, "_identityKey"], ["baseKeySignature", "bytes", 5, undefined, "_baseKeySignature"]]],
[proto.KeyId, "proto.KeyId", [["id", "bytes", 1, undefined, "_id"]]],
[proto.LIDMigrationMapping, "proto.LIDMigrationMapping", [["pn", "uint64", 1], ["assignedLid", "uint64", 2], ["latestLid", "uint64", 3, undefined, "_latestLid"]]],
[proto.LIDMigrationMappingSyncMessage, "proto.LIDMigrationMappingSyncMessage", [["encodedMappingPayload", "bytes", 1, undefined, "_encodedMappingPayload"]]],
[proto.LIDMigrationMappingSyncPayload, "proto.LIDMigrationMappingSyncPayload", [["pnToLidMappings", proto.LIDMigrationMapping, 1, "array"], ["chatDbMigrationTimestamp", "uint64", 2, undefined, "_chatDbMigrationTimestamp"]]],
[proto.LegacyMessage, "proto.LegacyMessage", [["eventResponseMessage", proto.Message.EventResponseMessage, 1, undefined, "_eventResponseMessage"], ["pollVote", proto.Message.PollVoteMessage, 2, undefined, "_pollVote"]]],
[proto.LimitSharing, "proto.LimitSharing", [["sharingLimited", "bool", 1, undefined, "_sharingLimited"], ["trigger", proto.LimitSharing.TriggerType, 2, undefined, "_trigger"], ["limitSharingSettingTimestamp", "int64", 3, undefined, "_limitSharingSettingTimestamp"], ["initiatedByMe", "bool", 4, undefined, "_initiatedByMe"]]],
[proto.LocalizedName, "proto.LocalizedName", [["lg", "string", 1, undefined, "_lg"], ["lc", "string", 2, undefined, "_lc"], ["verifiedName", "string", 3, undefined, "_verifiedName"]]],
[proto.Location, "proto.Location", [["degreesLatitude", "double", 1, undefined, "_degreesLatitude"], ["degreesLongitude", "double", 2, undefined, "_degreesLongitude"], ["name", "string", 3, undefined, "_name"]]],
[proto.MediaData, "proto.MediaData", [["localPath", "string", 1, undefined, "_localPath"]]],
[proto.MediaNotifyMessage, "proto.MediaNotifyMessage", [["expressPathUrl", "string", 1, undefined, "_expressPathUrl"], ["fileEncSha256", "bytes", 2, undefined, "_fileEncSha256"], ["fileLength", "uint64", 3, undefined, "_fileLength"]]],
[proto.MediaRetryNotification, "proto.MediaRetryNotification", [["stanzaId", "string", 1, undefined, "_stanzaId"], ["directPath", "string", 2, undefined, "_directPath"], ["result", proto.MediaRetryNotification.ResultType, 3, undefined, "_result"], ["messageSecret", "bytes", 4, undefined, "_messageSecret"]]],
[proto.MemberLabel, "proto.MemberLabel", [["label", "string", 1, undefined, "_label"], ["labelTimestamp", "int64", 2, undefined, "_labelTimestamp"]]],
[proto.Message, "proto.Message", [["conversation", "string", 1, undefined, "_conversation"], ["senderKeyDistributionMessage", proto.Message.SenderKeyDistributionMessage, 2, undefined, "_senderKeyDistributionMessage"], ["imageMessage", proto.Message.ImageMessage, 3, undefined, "_imageMessage"], ["contactMessage", proto.Message.ContactMessage, 4, undefined, "_contactMessage"], ["locationMessage", proto.Message.LocationMessage, 5, undefined, "_locationMessage"], ["extendedTextMessage", proto.Message.ExtendedTextMessage, 6, undefined, "_extendedTextMessage"], ["documentMessage", proto.Message.DocumentMessage, 7, undefined, "_documentMessage"], ["audioMessage", proto.Message.AudioMessage, 8, undefined, "_audioMessage"], ["videoMessage", proto.Message.VideoMessage, 9, undefined, "_videoMessage"], ["call", proto.Message.Call, 10, undefined, "_call"], ["chat", proto.Message.Chat, 11, undefined, "_chat"], ["protocolMessage", proto.Message.ProtocolMessage, 12, undefined, "_protocolMessage"], ["contactsArrayMessage", proto.Message.ContactsArrayMessage, 13, undefined, "_contactsArrayMessage"], ["highlyStructuredMessage", proto.Message.HighlyStructuredMessage, 14, undefined, "_highlyStructuredMessage"], ["fastRatchetKeySenderKeyDistributionMessage", proto.Message.SenderKeyDistributionMessage, 15, undefined, "_fastRatchetKeySenderKeyDistributionMessage"], ["sendPaymentMessage", proto.Message.SendPaymentMessage, 16, undefined, "_sendPaymentMessage"], ["liveLocationMessage", proto.Message.LiveLocationMessage, 18, undefined, "_liveLocationMessage"], ["requestPaymentMessage", proto.Message.RequestPaymentMessage, 22, undefined, "_requestPaymentMessage"], ["declinePaymentRequestMessage", proto.Message.DeclinePaymentRequestMessage, 23, undefined, "_declinePaymentRequestMessage"], ["cancelPaymentRequestMessage", proto.Message.CancelPaymentRequestMessage, 24, undefined, "_cancelPaymentRequestMessage"], ["templateMessage", proto.Message.TemplateMessage, 25, undefined, "_templateMessage"], ["stickerMessage", proto.Message.StickerMessage, 26, undefined, "_stickerMessage"], ["groupInviteMessage", proto.Message.GroupInviteMessage, 28, undefined, "_groupInviteMessage"], ["templateButtonReplyMessage", proto.Message.TemplateButtonReplyMessage, 29, undefined, "_templateButtonReplyMessage"], ["productMessage", proto.Message.ProductMessage, 30, undefined, "_productMessage"], ["deviceSentMessage", proto.Message.DeviceSentMessage, 31, undefined, "_deviceSentMessage"], ["messageContextInfo", proto.MessageContextInfo, 35, undefined, "_messageContextInfo"], ["listMessage", proto.Message.ListMessage, 36, undefined, "_listMessage"], ["viewOnceMessage", proto.Message.FutureProofMessage, 37, undefined, "_viewOnceMessage"], ["orderMessage", proto.Message.OrderMessage, 38, undefined, "_orderMessage"], ["listResponseMessage", proto.Message.ListResponseMessage, 39, undefined, "_listResponseMessage"], ["ephemeralMessage", proto.Message.FutureProofMessage, 40, undefined, "_ephemeralMessage"], ["invoiceMessage", proto.Message.InvoiceMessage, 41, undefined, "_invoiceMessage"], ["buttonsMessage", proto.Message.ButtonsMessage, 42, undefined, "_buttonsMessage"], ["buttonsResponseMessage", proto.Message.ButtonsResponseMessage, 43, undefined, "_buttonsResponseMessage"], ["paymentInviteMessage", proto.Message.PaymentInviteMessage, 44, undefined, "_paymentInviteMessage"], ["interactiveMessage", proto.Message.InteractiveMessage, 45, undefined, "_interactiveMessage"], ["reactionMessage", proto.Message.ReactionMessage, 46, undefined, "_reactionMessage"], ["stickerSyncRmrMessage", proto.Message.StickerSyncRMRMessage, 47, undefined, "_stickerSyncRmrMessage"], ["interactiveResponseMessage", proto.Message.InteractiveResponseMessage, 48, undefined, "_interactiveResponseMessage"], ["pollCreationMessage", proto.Message.PollCreationMessage, 49, undefined, "_pollCreationMessage"], ["pollUpdateMessage", proto.Message.PollUpdateMessage, 50, undefined, "_pollUpdateMessage"], ["keepInChatMessage", proto.Message.KeepInChatMessage, 51, undefined, "_keepInChatMessage"], ["documentWithCaptionMessage", proto.Message.FutureProofMessage, 53, undefined, "_documentWithCaptionMessage"], ["requestPhoneNumberMessage", proto.Message.RequestPhoneNumberMessage, 54, undefined, "_requestPhoneNumberMessage"], ["viewOnceMessageV2", proto.Message.FutureProofMessage, 55, undefined, "_viewOnceMessageV2"], ["encReactionMessage", proto.Message.EncReactionMessage, 56, undefined, "_encReactionMessage"], ["editedMessage", proto.Message.FutureProofMessage, 58, undefined, "_editedMessage"], ["viewOnceMessageV2Extension", proto.Message.FutureProofMessage, 59, undefined, "_viewOnceMessageV2Extension"], ["pollCreationMessageV2", proto.Message.PollCreationMessage, 60, undefined, "_pollCreationMessageV2"], ["scheduledCallCreationMessage", proto.Message.ScheduledCallCreationMessage, 61, undefined, "_scheduledCallCreationMessage"], ["groupMentionedMessage", proto.Message.FutureProofMessage, 62, undefined, "_groupMentionedMessage"], ["pinInChatMessage", proto.Message.PinInChatMessage, 63, undefined, "_pinInChatMessage"], ["pollCreationMessageV3", proto.Message.PollCreationMessage, 64, undefined, "_pollCreationMessageV3"], ["scheduledCallEditMessage", proto.Message.ScheduledCallEditMessage, 65, undefined, "_scheduledCallEditMessage"], ["ptvMessage", proto.Message.VideoMessage, 66, undefined, "_ptvMessage"], ["botInvokeMessage", proto.Message.FutureProofMessage, 67, undefined, "_botInvokeMessage"], ["callLogMesssage", proto.Message.CallLogMessage, 69, undefined, "_callLogMesssage"], ["messageHistoryBundle", proto.Message.MessageHistoryBundle, 70, undefined, "_messageHistoryBundle"], ["encCommentMessage", proto.Message.EncCommentMessage, 71, undefined, "_encCommentMessage"], ["bcallMessage", proto.Message.BCallMessage, 72, undefined, "_bcallMessage"], ["lottieStickerMessage", proto.Message.FutureProofMessage, 74, undefined, "_lottieStickerMessage"], ["eventMessage", proto.Message.EventMessage, 75, undefined, "_eventMessage"], ["encEventResponseMessage", proto.Message.EncEventResponseMessage, 76, undefined, "_encEventResponseMessage"], ["commentMessage", proto.Message.CommentMessage, 77, undefined, "_commentMessage"], ["newsletterAdminInviteMessage", proto.Message.NewsletterAdminInviteMessage, 78, undefined, "_newsletterAdminInviteMessage"], ["placeholderMessage", proto.Message.PlaceholderMessage, 80, undefined, "_placeholderMessage"], ["secretEncryptedMessage", proto.Message.SecretEncryptedMessage, 82, undefined, "_secretEncryptedMessage"], ["albumMessage", proto.Message.AlbumMessage, 83, undefined, "_albumMessage"], ["eventCoverImage", proto.Message.FutureProofMessage, 85, undefined, "_eventCoverImage"], ["stickerPackMessage", proto.Message.StickerPackMessage, 86, undefined, "_stickerPackMessage"], ["statusMentionMessage", proto.Message.FutureProofMessage, 87, undefined, "_statusMentionMessage"], ["pollResultSnapshotMessage", proto.Message.PollResultSnapshotMessage, 88, undefined, "_pollResultSnapshotMessage"], ["pollCreationOptionImageMessage", proto.Message.FutureProofMessage, 90, undefined, "_pollCreationOptionImageMessage"], ["associatedChildMessage", proto.Message.FutureProofMessage, 91, undefined, "_associatedChildMessage"], ["groupStatusMentionMessage", proto.Message.FutureProofMessage, 92, undefined, "_groupStatusMentionMessage"], ["pollCreationMessageV4", proto.Message.FutureProofMessage, 93, undefined, "_pollCreationMessageV4"], ["statusAddYours", proto.Message.FutureProofMessage, 95, undefined, "_statusAddYours"], ["groupStatusMessage", proto.Message.FutureProofMessage, 96, undefined, "_groupStatusMessage"], ["richResponseMessage", proto.AIRichResponseMessage, 97, undefined, "_richResponseMessage"], ["statusNotificationMessage", proto.Message.StatusNotificationMessage, 98, undefined, "_statusNotificationMessage"], ["limitSharingMessage", proto.Message.FutureProofMessage, 99, undefined, "_limitSharingMessage"], ["botTaskMessage", proto.Message.FutureProofMessage, 100, undefined, "_botTaskMessage"], ["questionMessage", proto.Message.FutureProofMessage, 101, undefined, "_questionMessage"], ["messageHistoryNotice", proto.Message.MessageHistoryNotice, 102, undefined, "_messageHistoryNotice"], ["groupStatusMessageV2", proto.Message.FutureProofMessage, 103, undefined, "_groupStatusMessageV2"], ["botForwardedMessage", proto.Message.FutureProofMessage, 104, undefined, "_botForwardedMessage"], ["statusQuestionAnswerMessage", proto.Message.StatusQuestionAnswerMessage, 105, undefined, "_statusQuestionAnswerMessage"], ["questionReplyMessage", proto.Message.FutureProofMessage, 106, undefined, "_questionReplyMessage"], ["questionResponseMessage", proto.Message.QuestionResponseMessage, 107, undefined, "_questionResponseMessage"], ["statusQuotedMessage", proto.Message.StatusQuotedMessage, 109, undefined, "_statusQuotedMessage"], ["statusStickerInteractionMessage", proto.Message.StatusStickerInteractionMessage, 110, undefined, "_statusStickerInteractionMessage"], ["pollCreationMessageV5", proto.Message.PollCreationMessage, 111, undefined, "_pollCreationMessageV5"], ["newsletterFollowerInviteMessageV2", proto.Message.NewsletterFollowerInviteMessage, 113, undefined, "_newsletterFollowerInviteMessageV2"], ["pollResultSnapshotMessageV3", proto.Message.PollResultSnapshotMessage, 114, undefined, "_pollResultSnapshotMessageV3"]]],
[proto.Message.AlbumMessage, "proto.Message.AlbumMessage", [["expectedImageCount", "uint32", 2, undefined, "_expectedImageCount"], ["expectedVideoCount", "uint32", 3, undefined, "_expectedVideoCount"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"]]],
[proto.Message.AppStateFatalExceptionNotification, "proto.Message.AppStateFatalExceptionNotification", [["collectionNames", "string", 1, "array"], ["timestamp", "int64", 2, undefined, "_timestamp"]]],
[proto.Message.AppStateSyncKey, "proto.Message.AppStateSyncKey", [["keyId", proto.Message.AppStateSyncKeyId, 1, undefined, "_keyId"], ["keyData", proto.Message.AppStateSyncKeyData, 2, undefined, "_keyData"]]],
[proto.Message.AppStateSyncKeyData, "proto.Message.AppStateSyncKeyData", [["keyData", "bytes", 1, undefined, "_keyData"], ["fingerprint", proto.Message.AppStateSyncKeyFingerprint, 2, undefined, "_fingerprint"], ["timestamp", "int64", 3, undefined, "_timestamp"]]],
[proto.Message.AppStateSyncKeyFingerprint, "proto.Message.AppStateSyncKeyFingerprint", [["rawId", "uint32", 1, undefined, "_rawId"], ["currentIndex", "uint32", 2, undefined, "_currentIndex"], ["deviceIndexes", "uint32", 3, "array"]]],
[proto.Message.AppStateSyncKeyId, "proto.Message.AppStateSyncKeyId", [["keyId", "bytes", 1, undefined, "_keyId"]]],
[proto.Message.AppStateSyncKeyRequest, "proto.Message.AppStateSyncKeyRequest", [["keyIds", proto.Message.AppStateSyncKeyId, 1, "array"]]],
[proto.Message.AppStateSyncKeyShare, "proto.Message.AppStateSyncKeyShare", [["keys", proto.Message.AppStateSyncKey, 1, "array"]]],
[proto.Message.AudioMessage, "proto.Message.AudioMessage", [["url", "string", 1, undefined, "_url"], ["mimetype", "string", 2, undefined, "_mimetype"], ["fileSha256", "bytes", 3, undefined, "_fileSha256"], ["fileLength", "uint64", 4, undefined, "_fileLength"], ["seconds", "uint32", 5, undefined, "_seconds"], ["ptt", "bool", 6, undefined, "_ptt"], ["mediaKey", "bytes", 7, undefined, "_mediaKey"], ["fileEncSha256", "bytes", 8, undefined, "_fileEncSha256"], ["directPath", "string", 9, undefined, "_directPath"], ["mediaKeyTimestamp", "int64", 10, undefined, "_mediaKeyTimestamp"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["streamingSidecar", "bytes", 18, undefined, "_streamingSidecar"], ["waveform", "bytes", 19, undefined, "_waveform"], ["backgroundArgb", "fixed32", 20, undefined, "_backgroundArgb"], ["viewOnce", "bool", 21, undefined, "_viewOnce"], ["accessibilityLabel", "string", 22, undefined, "_accessibilityLabel"], ["mediaKeyDomain", proto.Message.MediaKeyDomain, 23, undefined, "_mediaKeyDomain"]]],
[proto.Message.BCallMessage, "proto.Message.BCallMessage", [["sessionId", "string", 1, undefined, "_sessionId"], ["mediaType", proto.Message.BCallMessage.MediaType, 2, undefined, "_mediaType"], ["masterKey", "bytes", 3, undefined, "_masterKey"], ["caption", "string", 4, undefined, "_caption"]]],
[proto.Message.ButtonsMessage, "proto.Message.ButtonsMessage", [["contentText", "string", 6, undefined, "_contentText"], ["footerText", "string", 7, undefined, "_footerText"], ["contextInfo", proto.ContextInfo, 8, undefined, "_contextInfo"], ["buttons", proto.Message.ButtonsMessage.Button, 9, "array"], ["headerType", proto.Message.ButtonsMessage.HeaderType, 10, undefined, "_headerType"], ["text", "string", 1, undefined, "header"], ["documentMessage", proto.Message.DocumentMessage, 2, undefined, "header"], ["imageMessage", proto.Message.ImageMessage, 3, undefined, "header"], ["videoMessage", proto.Message.VideoMessage, 4, undefined, "header"], ["locationMessage", proto.Message.LocationMessage, 5, undefined, "header"]], [5,6,7,8,9,0,1,2,3,4]],
[proto.Message.ButtonsMessage.Button, "proto.Message.ButtonsMessage.Button", [["buttonId", "string", 1, undefined, "_buttonId"], ["buttonText", proto.Message.ButtonsMessage.Button.ButtonText, 2, undefined, "_buttonText"], ["type", proto.Message.ButtonsMessage.Button.Type, 3, undefined, "_type"], ["nativeFlowInfo", proto.Message.ButtonsMessage.Button.NativeFlowInfo, 4, undefined, "_nativeFlowInfo"]]],
[proto.Message.ButtonsMessage.Button.ButtonText, "proto.Message.ButtonsMessage.Button.ButtonText", [["displayText", "string", 1, undefined, "_displayText"]]],
[proto.Message.ButtonsMessage.Button.NativeFlowInfo, "proto.Message.ButtonsMessage.Button.NativeFlowInfo", [["name", "string", 1, undefined, "_name"], ["paramsJson", "string", 2, undefined, "_paramsJson"]]],
[proto.Message.ButtonsResponseMessage, "proto.Message.ButtonsResponseMessage", [["selectedButtonId", "string", 1, undefined, "_selectedButtonId"], ["contextInfo", proto.ContextInfo, 3, undefined, "_contextInfo"], ["type", proto.Message.ButtonsResponseMessage.Type, 4, undefined, "_type"], ["selectedDisplayText", "string", 2, undefined, "response"]], [0,3,1,2]],
[proto.Message.Call, "proto.Message.Call", [["callKey", "bytes", 1, undefined, "_callKey"], ["conversionSource", "string", 2, undefined, "_conversionSource"], ["conversionData", "bytes", 3, undefined, "_conversionData"], ["conversionDelaySeconds", "uint32", 4, undefined, "_conversionDelaySeconds"], ["ctwaSignals", "string", 5, undefined, "_ctwaSignals"], ["ctwaPayload", "bytes", 6, undefined, "_ctwaPayload"], ["contextInfo", proto.ContextInfo, 7, undefined, "_contextInfo"], ["nativeFlowCallButtonPayload", "string", 8, undefined, "_nativeFlowCallButtonPayload"], ["deeplinkPayload", "string", 9, undefined, "_deeplinkPayload"]]],
[proto.Message.CallLogMessage, "proto.Message.CallLogMessage", [["isVideo", "bool", 1, undefined, "_isVideo"], ["callOutcome", proto.Message.CallLogMessage.CallOutcome, 2, undefined, "_callOutcome"], ["durationSecs", "int64", 3, undefined, "_durationSecs"], ["callType", proto.Message.CallLogMessage.CallType, 4, undefined, "_callType"], ["participants", proto.Message.CallLogMessage.CallParticipant, 5, "array"]]],
[proto.Message.CallLogMessage.CallParticipant, "proto.Message.CallLogMessage.CallParticipant", [["jid", "string", 1, undefined, "_jid"], ["callOutcome", proto.Message.CallLogMessage.CallOutcome, 2, undefined, "_callOutcome"]]],
[proto.Message.CancelPaymentRequestMessage, "proto.Message.CancelPaymentRequestMessage", [["key", proto.MessageKey, 1, undefined, "_key"]]],
[proto.Message.Chat, "proto.Message.Chat", [["displayName", "string", 1, undefined, "_displayName"], ["id", "string", 2, undefined, "_id"]]],
[proto.Message.CloudAPIThreadControlNotification, "proto.Message.CloudAPIThreadControlNotification", [["status", proto.Message.CloudAPIThreadControlNotification.CloudAPIThreadControl, 1, undefined, "_status"], ["senderNotificationTimestampMs", "int64", 2, undefined, "_senderNotificationTimestampMs"], ["consumerLid", "string", 3, undefined, "_consumerLid"], ["consumerPhoneNumber", "string", 4, undefined, "_consumerPhoneNumber"], ["notificationContent", proto.Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent, 5, undefined, "_notificationContent"], ["shouldSuppressNotification", "bool", 6, undefined, "_shouldSuppressNotification"]]],
[proto.Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent, "proto.Message.CloudAPIThreadControlNotification.CloudAPIThreadControlNotificationContent", [["handoffNotificationText", "string", 1, undefined, "_handoffNotificationText"], ["extraJson", "string", 2, undefined, "_extraJson"]]],
[proto.Message.CommentMessage, "proto.Message.CommentMessage", [["message", proto.Message, 1, undefined, "_message"], ["targetMessageKey", proto.MessageKey, 2, undefined, "_targetMessageKey"]]],
[proto.Message.ContactMessage, "proto.Message.ContactMessage", [["displayName", "string", 1, undefined, "_displayName"], ["vcard", "string", 16, undefined, "_vcard"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"]]],
[proto.Message.ContactsArrayMessage, "proto.Message.ContactsArrayMessage", [["displayName", "string", 1, undefined, "_displayName"], ["contacts", proto.Message.ContactMessage, 2, "array"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"]]],
[proto.Message.DeclinePaymentRequestMessage, "proto.Message.DeclinePaymentRequestMessage", [["key", proto.MessageKey, 1, undefined, "_key"]]],
[proto.Message.DeviceSentMessage, "proto.Message.DeviceSentMessage", [["destinationJid", "string", 1, undefined, "_destinationJid"], ["message", proto.Message, 2, undefined, "_message"], ["phash", "string", 3, undefined, "_phash"]]],
[proto.Message.DocumentMessage, "proto.Message.DocumentMessage", [["url", "string", 1, undefined, "_url"], ["mimetype", "string", 2, undefined, "_mimetype"], ["title", "string", 3, undefined, "_title"], ["fileSha256", "bytes", 4, undefined, "_fileSha256"], ["fileLength", "uint64", 5, undefined, "_fileLength"], ["pageCount", "uint32", 6, undefined, "_pageCount"], ["mediaKey", "bytes", 7, undefined, "_mediaKey"], ["fileName", "string", 8, undefined, "_fileName"], ["fileEncSha256", "bytes", 9, undefined, "_fileEncSha256"], ["directPath", "string", 10, undefined, "_directPath"], ["mediaKeyTimestamp", "int64", 11, undefined, "_mediaKeyTimestamp"], ["contactVcard", "bool", 12, undefined, "_contactVcard"], ["thumbnailDirectPath", "string", 13, undefined, "_thumbnailDirectPath"], ["thumbnailSha256", "bytes", 14, undefined, "_thumbnailSha256"], ["thumbnailEncSha256", "bytes", 15, undefined, "_thumbnailEncSha256"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["thumbnailHeight", "uint32", 18, undefined, "_thumbnailHeight"], ["thumbnailWidth", "uint32", 19, undefined, "_thumbnailWidth"], ["caption", "string", 20, undefined, "_caption"], ["accessibilityLabel", "string", 21, undefined, "_accessibilityLabel"], ["mediaKeyDomain", proto.Message.MediaKeyDomain, 22, undefined, "_mediaKeyDomain"]]],
[proto.Message.EncCommentMessage, "proto.Message.EncCommentMessage", [["targetMessageKey", proto.MessageKey, 1, undefined, "_targetMessageKey"], ["encPayload", "bytes", 2, undefined, "_encPayload"], ["encIv", "bytes", 3, undefined, "_encIv"]]],
[proto.Message.EncEventResponseMessage, "proto.Message.EncEventResponseMessage", [["eventCreationMessageKey", proto.MessageKey, 1, undefined, "_eventCreationMessageKey"], ["encPayload", "bytes", 2, undefined, "_encPayload"], ["encIv", "bytes", 3, undefined, "_encIv"]]],
[proto.Message.EncReactionMessage, "proto.Message.EncReactionMessage", [["targetMessageKey", proto.MessageKey, 1, undefined, "_targetMessageKey"], ["encPayload", "bytes", 2, undefined, "_encPayload"], ["encIv", "bytes", 3, undefined, "_encIv"]]],
[proto.Message.EventMessage, "proto.Message.EventMessage", [["contextInfo", proto.ContextInfo, 1, undefined, "_contextInfo"], ["isCanceled", "bool", 2, undefined, "_isCanceled"], ["name", "string", 3, undefined, "_name"], ["description", "string", 4, undefined, "_description"], ["location", proto.Message.LocationMessage, 5, undefined, "_location"], ["joinLink", "string", 6, undefined, "_joinLink"], ["startTime", "int64", 7, undefined, "_startTime"], ["endTime", "int64", 8, undefined, "_endTime"], ["extraGuestsAllowed", "bool", 9, undefined, "_extraGuestsAllowed"], ["isScheduleCall", "bool", 10, undefined, "_isScheduleCall"], ["hasReminder", "bool", 11, undefined, "_hasReminder"], ["reminderOffsetSec", "int64", 12, undefined, "_reminderOffsetSec"]]],
[proto.Message.EventResponseMessage, "proto.Message.EventResponseMessage", [["response", proto.Message.EventResponseMessage.EventResponseType, 1, undefined, "_response"], ["timestampMs", "int64", 2, undefined, "_timestampMs"], ["extraGuestCount", "int32", 3, undefined, "_extraGuestCount"]]],
[proto.Message.ExtendedTextMessage, "proto.Message.ExtendedTextMessage", [["text", "string", 1, undefined, "_text"], ["matchedText", "string", 2, undefined, "_matchedText"], ["description", "string", 5, undefined, "_description"], ["title", "string", 6, undefined, "_title"], ["textArgb", "fixed32", 7, undefined, "_textArgb"], ["backgroundArgb", "fixed32", 8, undefined, "_backgroundArgb"], ["font", proto.Message.ExtendedTextMessage.FontType, 9, undefined, "_font"], ["previewType", proto.Message.ExtendedTextMessage.PreviewType, 10, undefined, "_previewType"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["doNotPlayInline", "bool", 18, undefined, "_doNotPlayInline"], ["thumbnailDirectPath", "string", 19, undefined, "_thumbnailDirectPath"], ["thumbnailSha256", "bytes", 20, undefined, "_thumbnailSha256"], ["thumbnailEncSha256", "bytes", 21, undefined, "_thumbnailEncSha256"], ["mediaKey", "bytes", 22, undefined, "_mediaKey"], ["mediaKeyTimestamp", "int64", 23, undefined, "_mediaKeyTimestamp"], ["thumbnailHeight", "uint32", 24, undefined, "_thumbnailHeight"], ["thumbnailWidth", "uint32", 25, undefined, "_thumbnailWidth"], ["inviteLinkGroupType", proto.Message.ExtendedTextMessage.InviteLinkGroupType, 26, undefined, "_inviteLinkGroupType"], ["inviteLinkParentGroupSubjectV2", "string", 27, undefined, "_inviteLinkParentGroupSubjectV2"], ["inviteLinkParentGroupThumbnailV2", "bytes", 28, undefined, "_inviteLinkParentGroupThumbnailV2"], ["inviteLinkGroupTypeV2", proto.Message.ExtendedTextMessage.InviteLinkGroupType, 29, undefined, "_inviteLinkGroupTypeV2"], ["viewOnce", "bool", 30, undefined, "_viewOnce"], ["videoHeight", "uint32", 31, undefined, "_videoHeight"], ["videoWidth", "uint32", 32, undefined, "_videoWidth"], ["faviconMMSMetadata", proto.Message.MMSThumbnailMetadata, 33, undefined, "_faviconMMSMetadata"], ["linkPreviewMetadata", proto.Message.LinkPreviewMetadata, 34, undefined, "_linkPreviewMetadata"], ["paymentLinkMetadata", proto.Message.PaymentLinkMetadata, 35, undefined, "_paymentLinkMetadata"], ["endCardTiles", proto.Message.VideoEndCard, 36, "array"], ["videoContentUrl", "string", 37, undefined, "_videoContentUrl"], ["musicMetadata", proto.EmbeddedMusic, 38, undefined, "_musicMetadata"], ["paymentExtendedMetadata", proto.Message.PaymentExtendedMetadata, 39, undefined, "_paymentExtendedMetadata"]]],
[proto.Message.FullHistorySyncOnDemandRequestMetadata, "proto.Message.FullHistorySyncOnDemandRequestMetadata", [["requestId", "string", 1, undefined, "_requestId"]]],
[proto.Message.FutureProofMessage, "proto.Message.FutureProofMessage", [["message", proto.Message, 1, undefined, "_message"]]],
[proto.Message.GroupInviteMessage, "proto.Message.GroupInviteMessage", [["groupJid", "string", 1, undefined, "_groupJid"], ["inviteCode", "string", 2, undefined, "_inviteCode"], ["inviteExpiration", "int64", 3, undefined, "_inviteExpiration"], ["groupName", "string", 4, undefined, "_groupName"], ["jpegThumbnail", "bytes", 5, undefined, "_jpegThumbnail"], ["caption", "string", 6, undefined, "_caption"], ["contextInfo", proto.ContextInfo, 7, undefined, "_contextInfo"], ["groupType", proto.Message.GroupInviteMessage.GroupType, 8, undefined, "_groupType"]]],
[proto.Message.HighlyStructuredMessage, "proto.Message.HighlyStructuredMessage", [["namespace", "string", 1, undefined, "_namespace"], ["elementName", "string", 2, undefined, "_elementName"], ["params", "string", 3, "array"], ["fallbackLg", "string", 4, undefined, "_fallbackLg"], ["fallbackLc", "string", 5, undefined, "_fallbackLc"], ["localizableParams", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter, 6, "array"], ["deterministicLg", "string", 7, undefined, "_deterministicLg"], ["deterministicLc", "string", 8, undefined, "_deterministicLc"], ["hydratedHsm", proto.Message.TemplateMessage, 9, undefined, "_hydratedHsm"]]],
[proto.Message.HighlyStructuredMessage.HSMLocalizableParameter, "proto.Message.HighlyStructuredMessage.HSMLocalizableParameter", [["default", "string", 1, undefined, "_default"], ["currency", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency, 2, undefined, "paramOneof"], ["dateTime", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime, 3, undefined, "paramOneof"]]],
[proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency, "proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMCurrency", [["currencyCode", "string", 1, undefined, "_currencyCode"], ["amount1000", "int64", 2, undefined, "_amount1000"]]],
[proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime, "proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime", [["component", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent, 1, undefined, "datetimeOneof"], ["unixEpoch", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch, 2, undefined, "datetimeOneof"]]],
[proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent, "proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent", [["dayOfWeek", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.DayOfWeekType, 1, undefined, "_dayOfWeek"], ["year", "uint32", 2, undefined, "_year"], ["month", "uint32", 3, undefined, "_month"], ["dayOfMonth", "uint32", 4, undefined, "_dayOfMonth"], ["hour", "uint32", 5, undefined, "_hour"], ["minute", "uint32", 6, undefined, "_minute"], ["calendar", proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeComponent.CalendarType, 7, undefined, "_calendar"]]],
[proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch, "proto.Message.HighlyStructuredMessage.HSMLocalizableParameter.HSMDateTime.HSMDateTimeUnixEpoch", [["timestamp", "int64", 1, undefined, "_timestamp"]]],
[proto.Message.HistorySyncMessageAccessStatus, "proto.Message.HistorySyncMessageAccessStatus", [["completeAccessGranted", "bool", 1, undefined, "_completeAccessGranted"]]],
[proto.Message.HistorySyncNotification, "proto.Message.HistorySyncNotification", [["fileSha256", "bytes", 1, undefined, "_fileSha256"], ["fileLength", "uint64", 2, undefined, "_fileLength"], ["mediaKey", "bytes", 3, undefined, "_mediaKey"], ["fileEncSha256", "bytes", 4, undefined, "_fileEncSha256"], ["directPath", "string", 5, undefined, "_directPath"], ["syncType", proto.Message.HistorySyncType, 6, undefined, "_syncType"], ["chunkOrder", "uint32", 7, undefined, "_chunkOrder"], ["originalMessageId", "string", 8, undefined, "_originalMessageId"], ["progress", "uint32", 9, undefined, "_progress"], ["oldestMsgInChunkTimestampSec", "int64", 10, undefined, "_oldestMsgInChunkTimestampSec"], ["initialHistBootstrapInlinePayload", "bytes", 11, undefined, "_initialHistBootstrapInlinePayload"], ["peerDataRequestSessionId", "string", 12, undefined, "_peerDataRequestSessionId"], ["fullHistorySyncOnDemandRequestMetadata", proto.Message.FullHistorySyncOnDemandRequestMetadata, 13, undefined, "_fullHistorySyncOnDemandRequestMetadata"], ["encHandle", "string", 14, undefined, "_encHandle"], ["messageAccessStatus", proto.Message.HistorySyncMessageAccessStatus, 15, undefined, "_messageAccessStatus"]]],
[proto.Message.ImageMessage, "proto.Message.ImageMessage", [["url", "string", 1, undefined, "_url"], ["mimetype", "string", 2, undefined, "_mimetype"], ["caption", "string", 3, undefined, "_caption"], ["fileSha256", "bytes", 4, undefined, "_fileSha256"], ["fileLength", "uint64", 5, undefined, "_fileLength"], ["height", "uint32", 6, undefined, "_height"], ["width", "uint32", 7, undefined, "_width"], ["mediaKey", "bytes", 8, undefined, "_mediaKey"], ["fileEncSha256", "bytes", 9, undefined, "_fileEncSha256"], ["interactiveAnnotations", proto.InteractiveAnnotation, 10, "array"], ["directPath", "string", 11, undefined, "_directPath"], ["mediaKeyTimestamp", "int64", 12, undefined, "_mediaKeyTimestamp"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["firstScanSidecar", "bytes", 18, undefined, "_firstScanSidecar"], ["firstScanLength", "uint32", 19, undefined, "_firstScanLength"], ["experimentGroupId", "uint32", 20, undefined, "_experimentGroupId"], ["scansSidecar", "bytes", 21, undefined, "_scansSidecar"], ["scanLengths", "uint32", 22, "array"], ["midQualityFileSha256", "bytes", 23, undefined, "_midQualityFileSha256"], ["midQualityFileEncSha256", "bytes", 24, undefined, "_midQualityFileEncSha256"], ["viewOnce", "bool", 25, undefined, "_viewOnce"], ["thumbnailDirectPath", "string", 26, undefined, "_thumbnailDirectPath"], ["thumbnailSha256", "bytes", 27, undefined, "_thumbnailSha256"], ["thumbnailEncSha256", "bytes", 28, undefined, "_thumbnailEncSha256"], ["staticUrl", "string", 29, undefined, "_staticUrl"], ["annotations", proto.InteractiveAnnotation, 30, "array"], ["imageSourceType", proto.Message.ImageMessage.ImageSourceType, 31, undefined, "_imageSourceType"], ["accessibilityLabel", "string", 32, undefined, "_accessibilityLabel"], ["mediaKeyDomain", proto.Message.MediaKeyDomain, 33, undefined, "_mediaKeyDomain"], ["qrUrl", "string", 34, undefined, "_qrUrl"]]],
[proto.Message.InitialSecurityNotificationSettingSync, "proto.Message.InitialSecurityNotificationSettingSync", [["securityNotificationEnabled", "bool", 1, undefined, "_securityNotificationEnabled"]]],
[proto.Message.InteractiveMessage, "proto.Message.InteractiveMessage", [["header", proto.Message.InteractiveMessage.Header, 1, undefined, "_header"], ["body", proto.Message.InteractiveMessage.Body, 2, undefined, "_body"], ["footer", proto.Message.InteractiveMessage.Footer, 3, undefined, "_footer"], ["contextInfo", proto.ContextInfo, 15, undefined, "_contextInfo"], ["urlTrackingMap", proto.UrlTrackingMap, 16, undefined, "_urlTrackingMap"], ["shopStorefrontMessage", proto.Message.InteractiveMessage.ShopMessage, 4, undefined, "interactiveMessage"], ["collectionMessage", proto.Message.InteractiveMessage.CollectionMessage, 5, undefined, "interactiveMessage"], ["nativeFlowMessage", proto.Message.InteractiveMessage.NativeFlowMessage, 6, undefined, "interactiveMessage"], ["carouselMessage", proto.Message.InteractiveMessage.CarouselMessage, 7, undefined, "interactiveMessage"]], [0,1,2,5,6,7,8,3,4]],
[proto.Message.InteractiveMessage.Body, "proto.Message.InteractiveMessage.Body", [["text", "string", 1, undefined, "_text"]]],
[proto.Message.InteractiveMessage.CarouselMessage, "proto.Message.InteractiveMessage.CarouselMessage", [["cards", proto.Message.InteractiveMessage, 1, "array"], ["messageVersion", "int32", 2, undefined, "_messageVersion"], ["carouselCardType", proto.Message.InteractiveMessage.CarouselMessage.CarouselCardType, 3, undefined, "_carouselCardType"]]],
[proto.Message.InteractiveMessage.CollectionMessage, "proto.Message.InteractiveMessage.CollectionMessage", [["bizJid", "string", 1, undefined, "_bizJid"], ["id", "string", 2, undefined, "_id"], ["messageVersion", "int32", 3, undefined, "_messageVersion"]]],
[proto.Message.InteractiveMessage.Footer, "proto.Message.InteractiveMessage.Footer", [["text", "string", 1, undefined, "_text"], ["hasMediaAttachment", "bool", 3, undefined, "_hasMediaAttachment"], ["audioMessage", proto.Message.AudioMessage, 2, undefined, "media"]], [0,2,1]],
[proto.Message.InteractiveMessage.Header, "proto.Message.InteractiveMessage.Header", [["title", "string", 1, undefined, "_title"], ["subtitle", "string", 2, undefined, "_subtitle"], ["hasMediaAttachment", "bool", 5, undefined, "_hasMediaAttachment"], ["documentMessage", proto.Message.DocumentMessage, 3, undefined, "media"], ["imageMessage", proto.Message.ImageMessage, 4, undefined, "media"], ["jpegThumbnail", "bytes", 6, undefined, "media"], ["videoMessage", proto.Message.VideoMessage, 7, undefined, "media"], ["locationMessage", proto.Message.LocationMessage, 8, undefined, "media"], ["productMessage", proto.Message.ProductMessage, 9, undefined, "media"]], [0,1,3,4,2,5,6,7,8]],
[proto.Message.InteractiveMessage.NativeFlowMessage, "proto.Message.InteractiveMessage.NativeFlowMessage", [["buttons", proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton, 1, "array"], ["messageParamsJson", "string", 2, undefined, "_messageParamsJson"], ["messageVersion", "int32", 3, undefined, "_messageVersion"]]],
[proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton, "proto.Message.InteractiveMessage.NativeFlowMessage.NativeFlowButton", [["name", "string", 1, undefined, "_name"], ["buttonParamsJson", "string", 2, undefined, "_buttonParamsJson"]]],
[proto.Message.InteractiveMessage.ShopMessage, "proto.Message.InteractiveMessage.ShopMessage", [["id", "string", 1, undefined, "_id"], ["surface", proto.Message.InteractiveMessage.ShopMessage.Surface, 2, undefined, "_surface"], ["messageVersion", "int32", 3, undefined, "_messageVersion"]]],
[proto.Message.InteractiveResponseMessage, "proto.Message.InteractiveResponseMessage", [["body", proto.Message.InteractiveResponseMessage.Body, 1, undefined, "_body"], ["contextInfo", proto.ContextInfo, 15, undefined, "_contextInfo"], ["nativeFlowResponseMessage", proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage, 2, undefined, "interactiveResponseMessage"]], [0,2,1]],
[proto.Message.InteractiveResponseMessage.Body, "proto.Message.InteractiveResponseMessage.Body", [["text", "string", 1, undefined, "_text"], ["format", proto.Message.InteractiveResponseMessage.Body.Format, 2, undefined, "_format"]]],
[proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage, "proto.Message.InteractiveResponseMessage.NativeFlowResponseMessage", [["name", "string", 1, undefined, "_name"], ["paramsJson", "string", 2, undefined, "_paramsJson"], ["version", "int32", 3, undefined, "_version"]]],
[proto.Message.InvoiceMessage, "proto.Message.InvoiceMessage", [["note", "string", 1, undefined, "_note"], ["token", "string", 2, undefined, "_token"], ["attachmentType", proto.Message.InvoiceMessage.AttachmentType, 3, undefined, "_attachmentType"], ["attachmentMimetype", "string", 4, undefined, "_attachmentMimetype"], ["attachmentMediaKey", "bytes", 5, undefined, "_attachmentMediaKey"], ["attachmentMediaKeyTimestamp", "int64", 6, undefined, "_attachmentMediaKeyTimestamp"], ["attachmentFileSha256", "bytes", 7, undefined, "_attachmentFileSha256"], ["attachmentFileEncSha256", "bytes", 8, undefined, "_attachmentFileEncSha256"], ["attachmentDirectPath", "string", 9, undefined, "_attachmentDirectPath"], ["attachmentJpegThumbnail", "bytes", 10, undefined, "_attachmentJpegThumbnail"]]],
[proto.Message.KeepInChatMessage, "proto.Message.KeepInChatMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["keepType", proto.KeepType, 2, undefined, "_keepType"], ["timestampMs", "int64", 3, undefined, "_timestampMs"]]],
[proto.Message.LinkPreviewMetadata, "proto.Message.LinkPreviewMetadata", [["paymentLinkMetadata", proto.Message.PaymentLinkMetadata, 1, undefined, "_paymentLinkMetadata"], ["urlMetadata", proto.Message.URLMetadata, 2, undefined, "_urlMetadata"], ["fbExperimentId", "uint32", 3, undefined, "_fbExperimentId"], ["linkMediaDuration", "uint32", 4, undefined, "_linkMediaDuration"], ["socialMediaPostType", proto.Message.LinkPreviewMetadata.SocialMediaPostType, 5, undefined, "_socialMediaPostType"], ["linkInlineVideoMuted", "bool", 6, undefined, "_linkInlineVideoMuted"], ["videoContentUrl", "string", 7, undefined, "_videoContentUrl"], ["musicMetadata", proto.EmbeddedMusic, 8, undefined, "_musicMetadata"], ["videoContentCaption", "string", 9, undefined, "_videoContentCaption"]]],
[proto.Message.ListMessage, "proto.Message.ListMessage", [["title", "string", 1, undefined, "_title"], ["description", "string", 2, undefined, "_description"], ["buttonText", "string", 3, undefined, "_buttonText"], ["listType", proto.Message.ListMessage.ListType, 4, undefined, "_listType"], ["sections", proto.Message.ListMessage.Section, 5, "array"], ["productListInfo", proto.Message.ListMessage.ProductListInfo, 6, undefined, "_productListInfo"], ["footerText", "string", 7, undefined, "_footerText"], ["contextInfo", proto.ContextInfo, 8, undefined, "_contextInfo"]]],
[proto.Message.ListMessage.Product, "proto.Message.ListMessage.Product", [["productId", "string", 1, undefined, "_productId"]]],
[proto.Message.ListMessage.ProductListHeaderImage, "proto.Message.ListMessage.ProductListHeaderImage", [["productId", "string", 1, undefined, "_productId"], ["jpegThumbnail", "bytes", 2, undefined, "_jpegThumbnail"]]],
[proto.Message.ListMessage.ProductListInfo, "proto.Message.ListMessage.ProductListInfo", [["productSections", proto.Message.ListMessage.ProductSection, 1, "array"], ["headerImage", proto.Message.ListMessage.ProductListHeaderImage, 2, undefined, "_headerImage"], ["businessOwnerJid", "string", 3, undefined, "_businessOwnerJid"]]],
[proto.Message.ListMessage.ProductSection, "proto.Message.ListMessage.ProductSection", [["title", "string", 1, undefined, "_title"], ["products", proto.Message.ListMessage.Product, 2, "array"]]],
[proto.Message.ListMessage.Row, "proto.Message.ListMessage.Row", [["title", "string", 1, undefined, "_title"], ["description", "string", 2, undefined, "_description"], ["rowId", "string", 3, undefined, "_rowId"]]],
[proto.Message.ListMessage.Section, "proto.Message.ListMessage.Section", [["title", "string", 1, undefined, "_title"], ["rows", proto.Message.ListMessage.Row, 2, "array"]]],
[proto.Message.ListResponseMessage, "proto.Message.ListResponseMessage", [["title", "string", 1, undefined, "_title"], ["listType", proto.Message.ListResponseMessage.ListType, 2, undefined, "_listType"], ["singleSelectReply", proto.Message.ListResponseMessage.SingleSelectReply, 3, undefined, "_singleSelectReply"], ["contextInfo", proto.ContextInfo, 4, undefined, "_contextInfo"], ["description", "string", 5, undefined, "_description"]]],
[proto.Message.ListResponseMessage.SingleSelectReply, "proto.Message.ListResponseMessage.SingleSelectReply", [["selectedRowId", "string", 1, undefined, "_selectedRowId"]]],
[proto.Message.LiveLocationMessage, "proto.Message.LiveLocationMessage", [["degreesLatitude", "double", 1, undefined, "_degreesLatitude"], ["degreesLongitude", "double", 2, undefined, "_degreesLongitude"], ["accuracyInMeters", "uint32", 3, undefined, "_accuracyInMeters"], ["speedInMps", "float", 4, undefined, "_speedInMps"], ["degreesClockwiseFromMagneticNorth", "uint32", 5, undefined, "_degreesClockwiseFromMagneticNorth"], ["caption", "string", 6, undefined, "_caption"], ["sequenceNumber", "int64", 7, undefined, "_sequenceNumber"], ["timeOffset", "uint32", 8, undefined, "_timeOffset"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"]]],
[proto.Message.LocationMessage, "proto.Message.LocationMessage", [["degreesLatitude", "double", 1, undefined, "_degreesLatitude"], ["degreesLongitude", "double", 2, undefined, "_degreesLongitude"], ["name", "string", 3, undefined, "_name"], ["address", "string", 4, undefined, "_address"], ["url", "string", 5, undefined, "_url"], ["isLive", "bool", 6, undefined, "_isLive"], ["accuracyInMeters", "uint32", 7, undefined, "_accuracyInMeters"], ["speedInMps", "float", 8, undefined, "_speedInMps"], ["degreesClockwiseFromMagneticNorth", "uint32", 9, undefined, "_degreesClockwiseFromMagneticNorth"], ["comment", "string", 11, undefined, "_comment"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"]]],
[proto.Message.MMSThumbnailMetadata, "proto.Message.MMSThumbnailMetadata", [["thumbnailDirectPath", "string", 1, undefined, "_thumbnailDirectPath"], ["thumbnailSha256", "bytes", 2, undefined, "_thumbnailSha256"], ["thumbnailEncSha256", "bytes", 3, undefined, "_thumbnailEncSha256"], ["mediaKey", "bytes", 4, undefined, "_mediaKey"], ["mediaKeyTimestamp", "int64", 5, undefined, "_mediaKeyTimestamp"], ["thumbnailHeight", "uint32", 6, undefined, "_thumbnailHeight"], ["thumbnailWidth", "uint32", 7, undefined, "_thumbnailWidth"], ["mediaKeyDomain", proto.Message.MediaKeyDomain, 8, undefined, "_mediaKeyDomain"]]],
[proto.Message.MessageHistoryBundle, "proto.Message.MessageHistoryBundle", [["mimetype", "string", 1, undefined, "_mimetype"], ["fileSha256", "bytes", 2, undefined, "_fileSha256"], ["mediaKey", "bytes", 3, undefined, "_mediaKey"], ["fileEncSha256", "bytes", 4, undefined, "_fileEncSha256"], ["directPath", "string", 5, undefined, "_directPath"], ["mediaKeyTimestamp", "int64", 6, undefined, "_mediaKeyTimestamp"], ["contextInfo", proto.ContextInfo, 7, undefined, "_contextInfo"], ["messageHistoryMetadata", proto.Message.MessageHistoryMetadata, 8, undefined, "_messageHistoryMetadata"]]],
[proto.Message.MessageHistoryMetadata, "proto.Message.MessageHistoryMetadata", [["historyReceivers", "string", 1, "array"], ["oldestMessageTimestamp", "int64", 2, undefined, "_oldestMessageTimestamp"], ["messageCount", "int64", 3, undefined, "_messageCount"]]],
[proto.Message.MessageHistoryNotice, "proto.Message.MessageHistoryNotice", [["contextInfo", proto.ContextInfo, 1, undefined, "_contextInfo"], ["messageHistoryMetadata", proto.Message.MessageHistoryMetadata, 2, undefined, "_messageHistoryMetadata"]]],
[proto.Message.NewsletterAdminInviteMessage, "proto.Message.NewsletterAdminInviteMessage", [["newsletterJid", "string", 1, undefined, "_newsletterJid"], ["newsletterName", "string", 2, undefined, "_newsletterName"], ["jpegThumbnail", "bytes", 3, undefined, "_jpegThumbnail"], ["caption", "string", 4, undefined, "_caption"], ["inviteExpiration", "int64", 5, undefined, "_inviteExpiration"], ["contextInfo", proto.ContextInfo, 6, undefined, "_contextInfo"]]],
[proto.Message.NewsletterFollowerInviteMessage, "proto.Message.NewsletterFollowerInviteMessage", [["newsletterJid", "string", 1, undefined, "_newsletterJid"], ["newsletterName", "string", 2, undefined, "_newsletterName"], ["jpegThumbnail", "bytes", 3, undefined, "_jpegThumbnail"], ["caption", "string", 4, undefined, "_caption"], ["contextInfo", proto.ContextInfo, 5, undefined, "_contextInfo"]]],
[proto.Message.OrderMessage, "proto.Message.OrderMessage", [["orderId", "string", 1, undefined, "_orderId"], ["thumbnail", "bytes", 2, undefined, "_thumbnail"], ["itemCount", "int32", 3, undefined, "_itemCount"], ["status", proto.Message.OrderMessage.OrderStatus, 4, undefined, "_status"], ["surface", proto.Message.OrderMessage.OrderSurface, 5, undefined, "_surface"], ["message", "string", 6, undefined, "_message"], ["orderTitle", "string", 7, undefined, "_orderTitle"], ["sellerJid", "string", 8, undefined, "_sellerJid"], ["token", "string", 9, undefined, "_token"], ["totalAmount1000", "int64", 10, undefined, "_totalAmount1000"], ["totalCurrencyCode", "string", 11, undefined, "_totalCurrencyCode"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["messageVersion", "int32", 12, undefined, "_messageVersion"], ["orderRequestMessageId", proto.MessageKey, 13, undefined, "_orderRequestMessageId"], ["catalogType", "string", 15, undefined, "_catalogType"]], [0,1,2,3,4,5,6,7,8,9,10,12,13,14,11]],
[proto.Message.PaymentExtendedMetadata, "proto.Message.PaymentExtendedMetadata", [["type", "uint32", 1, undefined, "_type"], ["platform", "string", 2, undefined, "_platform"], ["messageParamsJson", "string", 3, undefined, "_messageParamsJson"]]],
[proto.Message.PaymentInviteMessage, "proto.Message.PaymentInviteMessage", [["serviceType", proto.Message.PaymentInviteMessage.ServiceType, 1, undefined, "_serviceType"], ["expiryTimestamp", "int64", 2, undefined, "_expiryTimestamp"]]],
[proto.Message.PaymentLinkMetadata, "proto.Message.PaymentLinkMetadata", [["button", proto.Message.PaymentLinkMetadata.PaymentLinkButton, 1, undefined, "_button"], ["header", proto.Message.PaymentLinkMetadata.PaymentLinkHeader, 2, undefined, "_header"], ["provider", proto.Message.PaymentLinkMetadata.PaymentLinkProvider, 3, undefined, "_provider"]]],
[proto.Message.PaymentLinkMetadata.PaymentLinkButton, "proto.Message.PaymentLinkMetadata.PaymentLinkButton", [["displayText", "string", 1, undefined, "_displayText"]]],
[proto.Message.PaymentLinkMetadata.PaymentLinkHeader, "proto.Message.PaymentLinkMetadata.PaymentLinkHeader", [["headerType", proto.Message.PaymentLinkMetadata.PaymentLinkHeader.PaymentLinkHeaderType, 1, undefined, "_headerType"]]],
[proto.Message.PaymentLinkMetadata.PaymentLinkProvider, "proto.Message.PaymentLinkMetadata.PaymentLinkProvider", [["paramsJson", "string", 1, undefined, "_paramsJson"]]],
[proto.Message.PeerDataOperationRequestMessage, "proto.Message.PeerDataOperationRequestMessage", [["peerDataOperationRequestType", proto.Message.PeerDataOperationRequestType, 1, undefined, "_peerDataOperationRequestType"], ["requestStickerReupload", proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload, 2, "array"], ["requestUrlPreview", proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview, 3, "array"], ["historySyncOnDemandRequest", proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest, 4, undefined, "_historySyncOnDemandRequest"], ["placeholderMessageResendRequest", proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest, 5, "array"], ["fullHistorySyncOnDemandRequest", proto.Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest, 6, undefined, "_fullHistorySyncOnDemandRequest"], ["syncdCollectionFatalRecoveryRequest", proto.Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest, 7, undefined, "_syncdCollectionFatalRecoveryRequest"], ["historySyncChunkRetryRequest", proto.Message.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest, 8, undefined, "_historySyncChunkRetryRequest"], ["galaxyFlowAction", proto.Message.PeerDataOperationRequestMessage.GalaxyFlowAction, 9, undefined, "_galaxyFlowAction"]]],
[proto.Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest, "proto.Message.PeerDataOperationRequestMessage.FullHistorySyncOnDemandRequest", [["requestMetadata", proto.Message.FullHistorySyncOnDemandRequestMetadata, 1, undefined, "_requestMetadata"], ["historySyncConfig", proto.DeviceProps.HistorySyncConfig, 2, undefined, "_historySyncConfig"]]],
[proto.Message.PeerDataOperationRequestMessage.GalaxyFlowAction, "proto.Message.PeerDataOperationRequestMessage.GalaxyFlowAction", [["type", proto.Message.PeerDataOperationRequestMessage.GalaxyFlowAction.GalaxyFlowActionType, 1, undefined, "_type"], ["flowId", "string", 2, undefined, "_flowId"], ["stanzaId", "string", 3, undefined, "_stanzaId"]]],
[proto.Message.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest, "proto.Message.PeerDataOperationRequestMessage.HistorySyncChunkRetryRequest", [["syncType", proto.Message.HistorySyncType, 1, undefined, "_syncType"], ["chunkOrder", "uint32", 2, undefined, "_chunkOrder"], ["chunkNotificationId", "string", 3, undefined, "_chunkNotificationId"], ["regenerateChunk", "bool", 4, undefined, "_regenerateChunk"]]],
[proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest, "proto.Message.PeerDataOperationRequestMessage.HistorySyncOnDemandRequest", [["chatJid", "string", 1, undefined, "_chatJid"], ["oldestMsgId", "string", 2, undefined, "_oldestMsgId"], ["oldestMsgFromMe", "bool", 3, undefined, "_oldestMsgFromMe"], ["onDemandMsgCount", "int32", 4, undefined, "_onDemandMsgCount"], ["oldestMsgTimestampMs", "int64", 5, undefined, "_oldestMsgTimestampMs"], ["accountLid", "string", 6, undefined, "_accountLid"]]],
[proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest, "proto.Message.PeerDataOperationRequestMessage.PlaceholderMessageResendRequest", [["messageKey", proto.MessageKey, 1, undefined, "_messageKey"]]],
[proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload, "proto.Message.PeerDataOperationRequestMessage.RequestStickerReupload", [["fileSha256", "string", 1, undefined, "_fileSha256"]]],
[proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview, "proto.Message.PeerDataOperationRequestMessage.RequestUrlPreview", [["url", "string", 1, undefined, "_url"], ["includeHqThumbnail", "bool", 2, undefined, "_includeHqThumbnail"]]],
[proto.Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest, "proto.Message.PeerDataOperationRequestMessage.SyncDCollectionFatalRecoveryRequest", [["collectionName", "string", 1, undefined, "_collectionName"], ["timestamp", "int64", 2, undefined, "_timestamp"]]],
[proto.Message.PeerDataOperationRequestResponseMessage, "proto.Message.PeerDataOperationRequestResponseMessage", [["peerDataOperationRequestType", proto.Message.PeerDataOperationRequestType, 1, undefined, "_peerDataOperationRequestType"], ["stanzaId", "string", 2, undefined, "_stanzaId"], ["peerDataOperationResult", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult, 3, "array"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult", [["mediaUploadResult", proto.MediaRetryNotification.ResultType, 1, undefined, "_mediaUploadResult"], ["stickerMessage", proto.Message.StickerMessage, 2, undefined, "_stickerMessage"], ["linkPreviewResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse, 3, undefined, "_linkPreviewResponse"], ["placeholderMessageResendResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse, 4, undefined, "_placeholderMessageResendResponse"], ["waffleNonceFetchRequestResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse, 5, undefined, "_waffleNonceFetchRequestResponse"], ["fullHistorySyncOnDemandRequestResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse, 6, undefined, "_fullHistorySyncOnDemandRequestResponse"], ["companionMetaNonceFetchRequestResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse, 7, undefined, "_companionMetaNonceFetchRequestResponse"], ["syncdSnapshotFatalRecoveryResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse, 8, undefined, "_syncdSnapshotFatalRecoveryResponse"], ["companionCanonicalUserNonceFetchRequestResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse, 9, undefined, "_companionCanonicalUserNonceFetchRequestResponse"], ["historySyncChunkRetryResponse", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse, 10, undefined, "_historySyncChunkRetryResponse"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionCanonicalUserNonceFetchResponse", [["nonce", "string", 1, undefined, "_nonce"], ["waFbid", "string", 2, undefined, "_waFbid"], ["forceRefresh", "bool", 3, undefined, "_forceRefresh"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.CompanionMetaNonceFetchResponse", [["nonce", "string", 1, undefined, "_nonce"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandRequestResponse", [["requestMetadata", proto.Message.FullHistorySyncOnDemandRequestMetadata, 1, undefined, "_requestMetadata"], ["responseCode", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.FullHistorySyncOnDemandResponseCode, 2, undefined, "_responseCode"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponse", [["syncType", proto.Message.HistorySyncType, 1, undefined, "_syncType"], ["chunkOrder", "uint32", 2, undefined, "_chunkOrder"], ["requestId", "string", 3, undefined, "_requestId"], ["responseCode", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.HistorySyncChunkRetryResponseCode, 4, undefined, "_responseCode"], ["canRecover", "bool", 5, undefined, "_canRecover"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse", [["url", "string", 1, undefined, "_url"], ["title", "string", 2, undefined, "_title"], ["description", "string", 3, undefined, "_description"], ["thumbData", "bytes", 4, undefined, "_thumbData"], ["matchText", "string", 6, undefined, "_matchText"], ["previewType", "string", 7, undefined, "_previewType"], ["hqThumbnail", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail, 8, undefined, "_hqThumbnail"], ["previewMetadata", proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata, 9, undefined, "_previewMetadata"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.LinkPreviewHighQualityThumbnail", [["directPath", "string", 1, undefined, "_directPath"], ["thumbHash", "string", 2, undefined, "_thumbHash"], ["encThumbHash", "string", 3, undefined, "_encThumbHash"], ["mediaKey", "bytes", 4, undefined, "_mediaKey"], ["mediaKeyTimestampMs", "int64", 5, undefined, "_mediaKeyTimestampMs"], ["thumbWidth", "int32", 6, undefined, "_thumbWidth"], ["thumbHeight", "int32", 7, undefined, "_thumbHeight"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.LinkPreviewResponse.PaymentLinkPreviewMetadata", [["isBusinessVerified", "bool", 1, undefined, "_isBusinessVerified"], ["providerName", "string", 2, undefined, "_providerName"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.PlaceholderMessageResendResponse", [["webMessageInfoBytes", "bytes", 1, undefined, "_webMessageInfoBytes"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.SyncDSnapshotFatalRecoveryResponse", [["collectionSnapshot", "bytes", 1, undefined, "_collectionSnapshot"], ["isCompressed", "bool", 2, undefined, "_isCompressed"]]],
[proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse, "proto.Message.PeerDataOperationRequestResponseMessage.PeerDataOperationResult.WaffleNonceFetchResponse", [["nonce", "string", 1, undefined, "_nonce"], ["waEntFbid", "string", 2, undefined, "_waEntFbid"]]],
[proto.Message.PinInChatMessage, "proto.Message.PinInChatMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["type", proto.Message.PinInChatMessage.Type, 2, undefined, "_type"], ["senderTimestampMs", "int64", 3, undefined, "_senderTimestampMs"]]],
[proto.Message.PlaceholderMessage, "proto.Message.PlaceholderMessage", [["type", proto.Message.PlaceholderMessage.PlaceholderType, 1, undefined, "_type"]]],
[proto.Message.PollCreationMessage, "proto.Message.PollCreationMessage", [["encKey", "bytes", 1, undefined, "_encKey"], ["name", "string", 2, undefined, "_name"], ["options", proto.Message.PollCreationMessage.Option, 3, "array"], ["selectableOptionsCount", "uint32", 4, undefined, "_selectableOptionsCount"], ["contextInfo", proto.ContextInfo, 5, undefined, "_contextInfo"], ["pollContentType", proto.Message.PollContentType, 6, undefined, "_pollContentType"], ["pollType", proto.Message.PollType, 7, undefined, "_pollType"], ["correctAnswer", proto.Message.PollCreationMessage.Option, 8, undefined, "_correctAnswer"]]],
[proto.Message.PollCreationMessage.Option, "proto.Message.PollCreationMessage.Option", [["optionName", "string", 1, undefined, "_optionName"], ["optionHash", "string", 2, undefined, "_optionHash"]]],
[proto.Message.PollEncValue, "proto.Message.PollEncValue", [["encPayload", "bytes", 1, undefined, "_encPayload"], ["encIv", "bytes", 2, undefined, "_encIv"]]],
[proto.Message.PollResultSnapshotMessage, "proto.Message.PollResultSnapshotMessage", [["name", "string", 1, undefined, "_name"], ["pollVotes", proto.Message.PollResultSnapshotMessage.PollVote, 2, "array"], ["contextInfo", proto.ContextInfo, 3, undefined, "_contextInfo"], ["pollType", proto.Message.PollType, 4, undefined, "_pollType"]]],
[proto.Message.PollResultSnapshotMessage.PollVote, "proto.Message.PollResultSnapshotMessage.PollVote", [["optionName", "string", 1, undefined, "_optionName"], ["optionVoteCount", "int64", 2, undefined, "_optionVoteCount"]]],
[proto.Message.PollUpdateMessage, "proto.Message.PollUpdateMessage", [["pollCreationMessageKey", proto.MessageKey, 1, undefined, "_pollCreationMessageKey"], ["vote", proto.Message.PollEncValue, 2, undefined, "_vote"], ["metadata", proto.Message.PollUpdateMessageMetadata, 3, undefined, "_metadata"], ["senderTimestampMs", "int64", 4, undefined, "_senderTimestampMs"]]],
[proto.Message.PollUpdateMessageMetadata, "proto.Message.PollUpdateMessageMetadata", []],
[proto.Message.PollVoteMessage, "proto.Message.PollVoteMessage", [["selectedOptions", "bytes", 1, "array"]]],
[proto.Message.ProductMessage, "proto.Message.ProductMessage", [["product", proto.Message.ProductMessage.ProductSnapshot, 1, undefined, "_product"], ["businessOwnerJid", "string", 2, undefined, "_businessOwnerJid"], ["catalog", proto.Message.ProductMessage.CatalogSnapshot, 4, undefined, "_catalog"], ["body", "string", 5, undefined, "_body"], ["footer", "string", 6, undefined, "_footer"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"]]],
[proto.Message.ProductMessage.CatalogSnapshot, "proto.Message.ProductMessage.CatalogSnapshot", [["catalogImage", proto.Message.ImageMessage, 1, undefined, "_catalogImage"], ["title", "string", 2, undefined, "_title"], ["description", "string", 3, undefined, "_description"]]],
[proto.Message.ProductMessage.ProductSnapshot, "proto.Message.ProductMessage.ProductSnapshot", [["productImage", proto.Message.ImageMessage, 1, undefined, "_productImage"], ["productId", "string", 2, undefined, "_productId"], ["title", "string", 3, undefined, "_title"], ["description", "string", 4, undefined, "_description"], ["currencyCode", "string", 5, undefined, "_currencyCode"], ["priceAmount1000", "int64", 6, undefined, "_priceAmount1000"], ["retailerId", "string", 7, undefined, "_retailerId"], ["url", "string", 8, undefined, "_url"], ["productImageCount", "uint32", 9, undefined, "_productImageCount"], ["firstImageId", "string", 11, undefined, "_firstImageId"], ["salePriceAmount1000", "int64", 12, undefined, "_salePriceAmount1000"], ["signedUrl", "string", 13, undefined, "_signedUrl"]]],
[proto.Message.ProtocolMessage, "proto.Message.ProtocolMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["type", proto.Message.ProtocolMessage.Type, 2, undefined, "_type"], ["ephemeralExpiration", "uint32", 4, undefined, "_ephemeralExpiration"], ["ephemeralSettingTimestamp", "int64", 5, undefined, "_ephemeralSettingTimestamp"], ["historySyncNotification", proto.Message.HistorySyncNotification, 6, undefined, "_historySyncNotification"], ["appStateSyncKeyShare", proto.Message.AppStateSyncKeyShare, 7, undefined, "_appStateSyncKeyShare"], ["appStateSyncKeyRequest", proto.Message.AppStateSyncKeyRequest, 8, undefined, "_appStateSyncKeyRequest"], ["initialSecurityNotificationSettingSync", proto.Message.InitialSecurityNotificationSettingSync, 9, undefined, "_initialSecurityNotificationSettingSync"], ["appStateFatalExceptionNotification", proto.Message.AppStateFatalExceptionNotification, 10, undefined, "_appStateFatalExceptionNotification"], ["disappearingMode", proto.DisappearingMode, 11, undefined, "_disappearingMode"], ["editedMessage", proto.Message, 14, undefined, "_editedMessage"], ["timestampMs", "int64", 15, undefined, "_timestampMs"], ["peerDataOperationRequestMessage", proto.Message.PeerDataOperationRequestMessage, 16, undefined, "_peerDataOperationRequestMessage"], ["peerDataOperationRequestResponseMessage", proto.Message.PeerDataOperationRequestResponseMessage, 17, undefined, "_peerDataOperationRequestResponseMessage"], ["botFeedbackMessage", proto.BotFeedbackMessage, 18, undefined, "_botFeedbackMessage"], ["invokerJid", "string", 19, undefined, "_invokerJid"], ["requestWelcomeMessageMetadata", proto.Message.RequestWelcomeMessageMetadata, 20, undefined, "_requestWelcomeMessageMetadata"], ["mediaNotifyMessage", proto.MediaNotifyMessage, 21, undefined, "_mediaNotifyMessage"], ["cloudApiThreadControlNotification", proto.Message.CloudAPIThreadControlNotification, 22, undefined, "_cloudApiThreadControlNotification"], ["lidMigrationMappingSyncMessage", proto.LIDMigrationMappingSyncMessage, 23, undefined, "_lidMigrationMappingSyncMessage"], ["limitSharing", proto.LimitSharing, 24, undefined, "_limitSharing"], ["aiPsiMetadata", "bytes", 25, undefined, "_aiPsiMetadata"], ["aiQueryFanout", proto.AIQueryFanout, 26, undefined, "_aiQueryFanout"], ["memberLabel", proto.MemberLabel, 27, undefined, "_memberLabel"]]],
[proto.Message.QuestionResponseMessage, "proto.Message.QuestionResponseMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["text", "string", 2, undefined, "_text"]]],
[proto.Message.ReactionMessage, "proto.Message.ReactionMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["text", "string", 2, undefined, "_text"], ["groupingKey", "string", 3, undefined, "_groupingKey"], ["senderTimestampMs", "int64", 4, undefined, "_senderTimestampMs"]]],
[proto.Message.RequestPaymentMessage, "proto.Message.RequestPaymentMessage", [["noteMessage", proto.Message, 4, undefined, "_noteMessage"], ["currencyCodeIso4217", "string", 1, undefined, "_currencyCodeIso4217"], ["amount1000", "uint64", 2, undefined, "_amount1000"], ["requestFrom", "string", 3, undefined, "_requestFrom"], ["expiryTimestamp", "int64", 5, undefined, "_expiryTimestamp"], ["amount", proto.Money, 6, undefined, "_amount"], ["background", proto.PaymentBackground, 7, undefined, "_background"]], [1,2,3,0,4,5,6]],
[proto.Message.RequestPhoneNumberMessage, "proto.Message.RequestPhoneNumberMessage", [["contextInfo", proto.ContextInfo, 1, undefined, "_contextInfo"]]],
[proto.Message.RequestWelcomeMessageMetadata, "proto.Message.RequestWelcomeMessageMetadata", [["localChatState", proto.Message.RequestWelcomeMessageMetadata.LocalChatState, 1, undefined, "_localChatState"]]],
[proto.Message.ScheduledCallCreationMessage, "proto.Message.ScheduledCallCreationMessage", [["scheduledTimestampMs", "int64", 1, undefined, "_scheduledTimestampMs"], ["callType", proto.Message.ScheduledCallCreationMessage.CallType, 2, undefined, "_callType"], ["title", "string", 3, undefined, "_title"]]],
[proto.Message.ScheduledCallEditMessage, "proto.Message.ScheduledCallEditMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["editType", proto.Message.ScheduledCallEditMessage.EditType, 2, undefined, "_editType"]]],
[proto.Message.SecretEncryptedMessage, "proto.Message.SecretEncryptedMessage", [["targetMessageKey", proto.MessageKey, 1, undefined, "_targetMessageKey"], ["encPayload", "bytes", 2, undefined, "_encPayload"], ["encIv", "bytes", 3, undefined, "_encIv"], ["secretEncType", proto.Message.SecretEncryptedMessage.SecretEncType, 4, undefined, "_secretEncType"]]],
[proto.Message.SendPaymentMessage, "proto.Message.SendPaymentMessage", [["noteMessage", proto.Message, 2, undefined, "_noteMessage"], ["requestMessageKey", proto.MessageKey, 3, undefined, "_requestMessageKey"], ["background", proto.PaymentBackground, 4, undefined, "_background"], ["transactionData", "string", 5, undefined, "_transactionData"]]],
[proto.Message.SenderKeyDistributionMessage, "proto.Message.SenderKeyDistributionMessage", [["groupId", "string", 1, undefined, "_groupId"], ["axolotlSenderKeyDistributionMessage", "bytes", 2, undefined, "_axolotlSenderKeyDistributionMessage"]]],
[proto.Message.StatusNotificationMessage, "proto.Message.StatusNotificationMessage", [["responseMessageKey", proto.MessageKey, 1, undefined, "_responseMessageKey"], ["originalMessageKey", proto.MessageKey, 2, undefined, "_originalMessageKey"], ["type", proto.Message.StatusNotificationMessage.StatusNotificationType, 3, undefined, "_type"]]],
[proto.Message.StatusQuestionAnswerMessage, "proto.Message.StatusQuestionAnswerMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["text", "string", 2, undefined, "_text"]]],
[proto.Message.StatusQuotedMessage, "proto.Message.StatusQuotedMessage", [["type", proto.Message.StatusQuotedMessage.StatusQuotedMessageType, 1, undefined, "_type"], ["text", "string", 2, undefined, "_text"], ["thumbnail", "bytes", 3, undefined, "_thumbnail"], ["originalStatusId", proto.MessageKey, 4, undefined, "_originalStatusId"]]],
[proto.Message.StatusStickerInteractionMessage, "proto.Message.StatusStickerInteractionMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["stickerKey", "string", 2, undefined, "_stickerKey"], ["type", proto.Message.StatusStickerInteractionMessage.StatusStickerType, 3, undefined, "_type"]]],
[proto.Message.StickerMessage, "proto.Message.StickerMessage", [["url", "string", 1, undefined, "_url"], ["fileSha256", "bytes", 2, undefined, "_fileSha256"], ["fileEncSha256", "bytes", 3, undefined, "_fileEncSha256"], ["mediaKey", "bytes", 4, undefined, "_mediaKey"], ["mimetype", "string", 5, undefined, "_mimetype"], ["height", "uint32", 6, undefined, "_height"], ["width", "uint32", 7, undefined, "_width"], ["directPath", "string", 8, undefined, "_directPath"], ["fileLength", "uint64", 9, undefined, "_fileLength"], ["mediaKeyTimestamp", "int64", 10, undefined, "_mediaKeyTimestamp"], ["firstFrameLength", "uint32", 11, undefined, "_firstFrameLength"], ["firstFrameSidecar", "bytes", 12, undefined, "_firstFrameSidecar"], ["isAnimated", "bool", 13, undefined, "_isAnimated"], ["pngThumbnail", "bytes", 16, undefined, "_pngThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["stickerSentTs", "int64", 18, undefined, "_stickerSentTs"], ["isAvatar", "bool", 19, undefined, "_isAvatar"], ["isAiSticker", "bool", 20, undefined, "_isAiSticker"], ["isLottie", "bool", 21, undefined, "_isLottie"], ["accessibilityLabel", "string", 22, undefined, "_accessibilityLabel"], ["mediaKeyDomain", proto.Message.MediaKeyDomain, 23, undefined, "_mediaKeyDomain"]]],
[proto.Message.StickerPackMessage, "proto.Message.StickerPackMessage", [["stickerPackId", "string", 1, undefined, "_stickerPackId"], ["name", "string", 2, undefined, "_name"], ["publisher", "string", 3, undefined, "_publisher"], ["stickers", proto.Message.StickerPackMessage.Sticker, 4, "array"], ["fileLength", "uint64", 5, undefined, "_fileLength"], ["fileSha256", "bytes", 6, undefined, "_fileSha256"], ["fileEncSha256", "bytes", 7, undefined, "_fileEncSha256"], ["mediaKey", "bytes", 8, undefined, "_mediaKey"], ["directPath", "string", 9, undefined, "_directPath"], ["caption", "string", 10, undefined, "_caption"], ["contextInfo", proto.ContextInfo, 11, undefined, "_contextInfo"], ["packDescription", "string", 12, undefined, "_packDescription"], ["mediaKeyTimestamp", "int64", 13, undefined, "_mediaKeyTimestamp"], ["trayIconFileName", "string", 14, undefined, "_trayIconFileName"], ["thumbnailDirectPath", "string", 15, undefined, "_thumbnailDirectPath"], ["thumbnailSha256", "bytes", 16, undefined, "_thumbnailSha256"], ["thumbnailEncSha256", "bytes", 17, undefined, "_thumbnailEncSha256"], ["thumbnailHeight", "uint32", 18, undefined, "_thumbnailHeight"], ["thumbnailWidth", "uint32", 19, undefined, "_thumbnailWidth"], ["imageDataHash", "string", 20, undefined, "_imageDataHash"], ["stickerPackSize", "uint64", 21, undefined, "_stickerPackSize"], ["stickerPackOrigin", proto.Message.StickerPackMessage.StickerPackOrigin, 22, undefined, "_stickerPackOrigin"]]],
[proto.Message.StickerPackMessage.Sticker, "proto.Message.StickerPackMessage.Sticker", [["fileName", "string", 1, undefined, "_fileName"], ["isAnimated", "bool", 2, undefined, "_isAnimated"], ["emojis", "string", 3, "array"], ["accessibilityLabel", "string", 4, undefined, "_accessibilityLabel"], ["isLottie", "bool", 5, undefined, "_isLottie"], ["mimetype", "string", 6, undefined, "_mimetype"]]],
[proto.Message.StickerSyncRMRMessage, "proto.Message.StickerSyncRMRMessage", [["filehash", "string", 1, "array"], ["rmrSource", "string", 2, undefined, "_rmrSource"], ["requestTimestamp", "int64", 3, undefined, "_requestTimestamp"]]],
[proto.Message.TemplateButtonReplyMessage, "proto.Message.TemplateButtonReplyMessage", [["selectedId", "string", 1, undefined, "_selectedId"], ["selectedDisplayText", "string", 2, undefined, "_selectedDisplayText"], ["contextInfo", proto.ContextInfo, 3, undefined, "_contextInfo"], ["selectedIndex", "uint32", 4, undefined, "_selectedIndex"], ["selectedCarouselCardIndex", "uint32", 5, undefined, "_selectedCarouselCardIndex"]]],
[proto.Message.TemplateMessage, "proto.Message.TemplateMessage", [["contextInfo", proto.ContextInfo, 3, undefined, "_contextInfo"], ["hydratedTemplate", proto.Message.TemplateMessage.HydratedFourRowTemplate, 4, undefined, "_hydratedTemplate"], ["templateId", "string", 9, undefined, "_templateId"], ["fourRowTemplate", proto.Message.TemplateMessage.FourRowTemplate, 1, undefined, "format"], ["hydratedFourRowTemplate", proto.Message.TemplateMessage.HydratedFourRowTemplate, 2, undefined, "format"], ["interactiveMessageTemplate", proto.Message.InteractiveMessage, 5, undefined, "format"]], [3,4,0,1,5,2]],
[proto.Message.TemplateMessage.FourRowTemplate, "proto.Message.TemplateMessage.FourRowTemplate", [["content", proto.Message.HighlyStructuredMessage, 6, undefined, "_content"], ["footer", proto.Message.HighlyStructuredMessage, 7, undefined, "_footer"], ["buttons", proto.TemplateButton, 8, "array"], ["documentMessage", proto.Message.DocumentMessage, 1, undefined, "title"], ["highlyStructuredMessage", proto.Message.HighlyStructuredMessage, 2, undefined, "title"], ["imageMessage", proto.Message.ImageMessage, 3, undefined, "title"], ["videoMessage", proto.Message.VideoMessage, 4, undefined, "title"], ["locationMessage", proto.Message.LocationMessage, 5, undefined, "title"]], [3,4,5,6,7,0,1,2]],
[proto.Message.TemplateMessage.HydratedFourRowTemplate, "proto.Message.TemplateMessage.HydratedFourRowTemplate", [["hydratedContentText", "string", 6, undefined, "_hydratedContentText"], ["hydratedFooterText", "string", 7, undefined, "_hydratedFooterText"], ["hydratedButtons", proto.HydratedTemplateButton, 8, "array"], ["templateId", "string", 9, undefined, "_templateId"], ["maskLinkedDevices", "bool", 10, undefined, "_maskLinkedDevices"], ["documentMessage", proto.Message.DocumentMessage, 1, undefined, "title"], ["hydratedTitleText", "string", 2, undefined, "title"], ["imageMessage", proto.Message.ImageMessage, 3, undefined, "title"], ["videoMessage", proto.Message.VideoMessage, 4, undefined, "title"], ["locationMessage", proto.Message.LocationMessage, 5, undefined, "title"]], [5,6,7,8,9,0,1,2,3,4]],
[proto.Message.URLMetadata, "proto.Message.URLMetadata", [["fbExperimentId", "uint32", 1, undefined, "_fbExperimentId"]]],
[proto.Message.VideoEndCard, "proto.Message.VideoEndCard", [["username", "string", 1], ["caption", "string", 2], ["thumbnailImageUrl", "string", 3], ["profilePictureUrl", "string", 4]]],
[proto.Message.VideoMessage, "proto.Message.VideoMessage", [["url", "string", 1, undefined, "_url"], ["mimetype", "string", 2, undefined, "_mimetype"], ["fileSha256", "bytes", 3, undefined, "_fileSha256"], ["fileLength", "uint64", 4, undefined, "_fileLength"], ["seconds", "uint32", 5, undefined, "_seconds"], ["mediaKey", "bytes", 6, undefined, "_mediaKey"], ["caption", "string", 7, undefined, "_caption"], ["gifPlayback", "bool", 8, undefined, "_gifPlayback"], ["height", "uint32", 9, undefined, "_height"], ["width", "uint32", 10, undefined, "_width"], ["fileEncSha256", "bytes", 11, undefined, "_fileEncSha256"], ["interactiveAnnotations", proto.InteractiveAnnotation, 12, "array"], ["directPath", "string", 13, undefined, "_directPath"], ["mediaKeyTimestamp", "int64", 14, undefined, "_mediaKeyTimestamp"], ["jpegThumbnail", "bytes", 16, undefined, "_jpegThumbnail"], ["contextInfo", proto.ContextInfo, 17, undefined, "_contextInfo"], ["streamingSidecar", "bytes", 18, undefined, "_streamingSidecar"], ["gifAttribution", proto.Message.VideoMessage.Attribution, 19, undefined, "_gifAttribution"], ["viewOnce", "bool", 20, undefined, "_viewOnce"], ["thumbnailDirectPath", "string", 21, undefined, "_thumbnailDirectPath"], ["thumbnailSha256", "bytes", 22, undefined, "_thumbnailSha256"], ["thumbnailEncSha256", "bytes", 23, undefined, "_thumbnailEncSha256"], ["staticUrl", "string", 24, undefined, "_staticUrl"], ["annotations", proto.InteractiveAnnotation, 25, "array"], ["accessibilityLabel", "string", 26, undefined, "_accessibilityLabel"], ["processedVideos", proto.ProcessedVideo, 27, "array"], ["externalShareFullVideoDurationInSeconds", "uint32", 28, undefined, "_externalShareFullVideoDurationInSeconds"], ["motionPhotoPresentationOffsetMs", "uint64", 29, undefined, "_motionPhotoPresentationOffsetMs"], ["metadataUrl", "string", 30, undefined, "_metadataUrl"], ["videoSourceType", proto.Message.VideoMessage.VideoSourceType, 31, undefined, "_videoSourceType"], ["mediaKeyDomain", proto.Message.MediaKeyDomain, 32, undefined, "_mediaKeyDomain"]]],
[proto.MessageAddOn, "proto.MessageAddOn", [["messageAddOnType", proto.MessageAddOn.MessageAddOnType, 1, undefined, "_messageAddOnType"], ["messageAddOn", proto.Message, 2, undefined, "_messageAddOn"], ["senderTimestampMs", "int64", 3, undefined, "_senderTimestampMs"], ["serverTimestampMs", "int64", 4, undefined, "_serverTimestampMs"], ["status", proto.WebMessageInfo.Status, 5, undefined, "_status"], ["addOnContextInfo", proto.MessageAddOnContextInfo, 6, undefined, "_addOnContextInfo"], ["messageAddOnKey", proto.MessageKey, 7, undefined, "_messageAddOnKey"], ["legacyMessage", proto.LegacyMessage, 8, undefined, "_legacyMessage"]]],
[proto.MessageAddOnContextInfo, "proto.MessageAddOnContextInfo", [["messageAddOnDurationInSecs", "uint32", 1, undefined, "_messageAddOnDurationInSecs"], ["messageAddOnExpiryType", proto.MessageContextInfo.MessageAddonExpiryType, 2, undefined, "_messageAddOnExpiryType"]]],
[proto.MessageAssociation, "proto.MessageAssociation", [["associationType", proto.MessageAssociation.AssociationType, 1, undefined, "_associationType"], ["parentMessageKey", proto.MessageKey, 2, undefined, "_parentMessageKey"], ["messageIndex", "int32", 3, undefined, "_messageIndex"]]],
[proto.MessageContextInfo, "proto.MessageContextInfo", [["deviceListMetadata", proto.DeviceListMetadata, 1, undefined, "_deviceListMetadata"], ["deviceListMetadataVersion", "int32", 2, undefined, "_deviceListMetadataVersion"], ["messageSecret", "bytes", 3, undefined, "_messageSecret"], ["paddingBytes", "bytes", 4, undefined, "_paddingBytes"], ["messageAddOnDurationInSecs", "uint32", 5, undefined, "_messageAddOnDurationInSecs"], ["botMessageSecret", "bytes", 6, undefined, "_botMessageSecret"], ["botMetadata", proto.BotMetadata, 7, undefined, "_botMetadata"], ["reportingTokenVersion", "int32", 8, undefined, "_reportingTokenVersion"], ["messageAddOnExpiryType", proto.MessageContextInfo.MessageAddonExpiryType, 9, undefined, "_messageAddOnExpiryType"], ["messageAssociation", proto.MessageAssociation, 10, undefined, "_messageAssociation"], ["capiCreatedGroup", "bool", 11, undefined, "_capiCreatedGroup"], ["supportPayload", "string", 12, undefined, "_supportPayload"], ["limitSharing", proto.LimitSharing, 13, undefined, "_limitSharing"], ["limitSharingV2", proto.LimitSharing, 14, undefined, "_limitSharingV2"], ["threadId", proto.ThreadID, 15, "array"], ["weblinkRenderConfig", proto.WebLinkRenderConfig, 16, undefined, "_weblinkRenderConfig"]]],
[proto.MessageKey, "proto.MessageKey", [["remoteJid", "string", 1, undefined, "_remoteJid"], ["fromMe", "bool", 2, undefined, "_fromMe"], ["id", "string", 3, undefined, "_id"], ["participant", "string", 4, undefined, "_participant"]]],
[proto.MessageSecretMessage, "proto.MessageSecretMessage", [["version", "sfixed32", 1, undefined, "_version"], ["encIv", "bytes", 2, undefined, "_encIv"], ["encPayload", "bytes", 3, undefined, "_encPayload"]]],
[proto.Money, "proto.Money", [["value", "int64", 1, undefined, "_value"], ["offset", "uint32", 2, undefined, "_offset"], ["currencyCode", "string", 3, undefined, "_currencyCode"]]],
[proto.MsgOpaqueData, "proto.MsgOpaqueData", [["body", "string", 1, undefined, "_body"], ["caption", "string", 3, undefined, "_caption"], ["lng", "double", 5, undefined, "_lng"], ["isLive", "bool", 6, undefined, "_isLive"], ["lat", "double", 7, undefined, "_lat"], ["paymentAmount1000", "int32", 8, undefined, "_paymentAmount1000"], ["paymentNoteMsgBody", "string", 9, undefined, "_paymentNoteMsgBody"], ["matchedText", "string", 11, undefined, "_matchedText"], ["title", "string", 12, undefined, "_title"], ["description", "string", 13, undefined, "_description"], ["futureproofBuffer", "bytes", 14, undefined, "_futureproofBuffer"], ["clientUrl", "string", 15, undefined, "_clientUrl"], ["loc", "string", 16, undefined, "_loc"], ["pollName", "string", 17, undefined, "_pollName"], ["pollOptions", proto.MsgOpaqueData.PollOption, 18, "array"], ["pollSelectableOptionsCount", "uint32", 20, undefined, "_pollSelectableOptionsCount"], ["messageSecret", "bytes", 21, undefined, "_messageSecret"], ["originalSelfAuthor", "string", 51, undefined, "_originalSelfAuthor"], ["senderTimestampMs", "int64", 22, undefined, "_senderTimestampMs"], ["pollUpdateParentKey", "string", 23, undefined, "_pollUpdateParentKey"], ["encPollVote", proto.PollEncValue, 24, undefined, "_encPollVote"], ["isSentCagPollCreation", "bool", 28, undefined, "_isSentCagPollCreation"], ["pollContentType", proto.MsgOpaqueData.PollContentType, 42, undefined, "_pollContentType"], ["pollType", proto.MsgOpaqueData.PollType, 46, undefined, "_pollType"], ["correctOptionIndex", "int32", 47, undefined, "_correctOptionIndex"], ["pollVotesSnapshot", proto.MsgOpaqueData.PollVotesSnapshot, 41, undefined, "_pollVotesSnapshot"], ["encReactionTargetMessageKey", "string", 25, undefined, "_encReactionTargetMessageKey"], ["encReactionEncPayload", "bytes", 26, undefined, "_encReactionEncPayload"], ["encReactionEncIv", "bytes", 27, undefined, "_encReactionEncIv"], ["botMessageSecret", "bytes", 29, undefined, "_botMessageSecret"], ["targetMessageKey", "string", 30, undefined, "_targetMessageKey"], ["encPayload", "bytes", 31, undefined, "_encPayload"], ["encIv", "bytes", 32, undefined, "_encIv"], ["eventName", "string", 33, undefined, "_eventName"], ["isEventCanceled", "bool", 34, undefined, "_isEventCanceled"], ["eventDescription", "string", 35, undefined, "_eventDescription"], ["eventJoinLink", "string", 36, undefined, "_eventJoinLink"], ["eventStartTime", "int64", 37, undefined, "_eventStartTime"], ["eventLocation", proto.MsgOpaqueData.EventLocation, 38, undefined, "_eventLocation"], ["eventEndTime", "int64", 40, undefined, "_eventEndTime"], ["eventIsScheduledCall", "bool", 44, undefined, "_eventIsScheduledCall"], ["eventExtraGuestsAllowed", "bool", 45, undefined, "_eventExtraGuestsAllowed"], ["plainProtobufBytes", "bytes", 43, undefined, "_plainProtobufBytes"]], [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,26,27,28,21,29,30,31,32,33,34,35,36,37,38,39,25,22,42,40,41,23,24,17]],
[proto.MsgOpaqueData.EventLocation, "proto.MsgOpaqueData.EventLocation", [["degreesLatitude", "double", 1, undefined, "_degreesLatitude"], ["degreesLongitude", "double", 2, undefined, "_degreesLongitude"], ["name", "string", 3, undefined, "_name"], ["address", "string", 4, undefined, "_address"], ["url", "string", 5, undefined, "_url"], ["jpegThumbnail", "bytes", 6, undefined, "_jpegThumbnail"]]],
[proto.MsgOpaqueData.PollOption, "proto.MsgOpaqueData.PollOption", [["name", "string", 1, undefined, "_name"], ["hash", "string", 2, undefined, "_hash"]]],
[proto.MsgOpaqueData.PollVoteSnapshot, "proto.MsgOpaqueData.PollVoteSnapshot", [["option", proto.MsgOpaqueData.PollOption, 1, undefined, "_option"], ["optionVoteCount", "int32", 2, undefined, "_optionVoteCount"]]],
[proto.MsgOpaqueData.PollVotesSnapshot, "proto.MsgOpaqueData.PollVotesSnapshot", [["pollVotes", proto.MsgOpaqueData.PollVoteSnapshot, 1, "array"]]],
[proto.MsgRowOpaqueData, "proto.MsgRowOpaqueData", [["currentMsg", proto.MsgOpaqueData, 1, undefined, "_currentMsg"], ["quotedMsg", proto.MsgOpaqueData, 2, undefined, "_quotedMsg"]]],
[proto.NoiseCertificate, "proto.NoiseCertificate", [["details", "bytes", 1, undefined, "_details"], ["signature", "bytes", 2, undefined, "_signature"]]],
[proto.NoiseCertificate.Details, "proto.NoiseCertificate.Details", [["serial", "uint32", 1, undefined, "_serial"], ["issuer", "string", 2, undefined, "_issuer"], ["expires", "uint64", 3, undefined, "_expires"], ["subject", "string", 4, undefined, "_subject"], ["key", "bytes", 5, undefined, "_key"]]],
[proto.NotificationMessageInfo, "proto.NotificationMessageInfo", [["key", proto.MessageKey, 1, undefined, "_key"], ["message", proto.Message, 2, undefined, "_message"], ["messageTimestamp", "uint64", 3, undefined, "_messageTimestamp"], ["participant", "string", 4, undefined, "_participant"]]],
[proto.NotificationSettings, "proto.NotificationSettings", [["messageVibrate", "string", 1, undefined, "_messageVibrate"], ["messagePopup", "string", 2, undefined, "_messagePopup"], ["messageLight", "string", 3, undefined, "_messageLight"], ["lowPriorityNotifications", "bool", 4, undefined, "_lowPriorityNotifications"], ["reactionsMuted", "bool", 5, undefined, "_reactionsMuted"], ["callVibrate", "string", 6, undefined, "_callVibrate"]]],
[proto.PairingRequest, "proto.PairingRequest", [["companionPublicKey", "bytes", 1, undefined, "_companionPublicKey"], ["companionIdentityKey", "bytes", 2, undefined, "_companionIdentityKey"], ["advSecret", "bytes", 3, undefined, "_advSecret"]]],
[proto.PastParticipant, "proto.PastParticipant", [["userJid", "string", 1, undefined, "_userJid"], ["leaveReason", proto.PastParticipant.LeaveReason, 2, undefined, "_leaveReason"], ["leaveTs", "uint64", 3, undefined, "_leaveTs"]]],
[proto.PastParticipants, "proto.PastParticipants", [["groupJid", "string", 1, undefined, "_groupJid"], ["pastParticipants", proto.PastParticipant, 2, "array"]]],
[proto.PatchDebugData, "proto.PatchDebugData", [["currentLthash", "bytes", 1, undefined, "_currentLthash"], ["newLthash", "bytes", 2, undefined, "_newLthash"], ["patchVersion", "bytes", 3, undefined, "_patchVersion"], ["collectionName", "bytes", 4, undefined, "_collectionName"], ["firstFourBytesFromAHashOfSnapshotMacKey", "bytes", 5, undefined, "_firstFourBytesFromAHashOfSnapshotMacKey"], ["newLthashSubtract", "bytes", 6, undefined, "_newLthashSubtract"], ["numberAdd", "int32", 7, undefined, "_numberAdd"], ["numberRemove", "int32", 8, undefined, "_numberRemove"], ["numberOverride", "int32", 9, undefined, "_numberOverride"], ["senderPlatform", proto.PatchDebugData.Platform, 10, undefined, "_senderPlatform"], ["isSenderPrimary", "bool", 11, undefined, "_isSenderPrimary"]]],
[proto.PaymentBackground, "proto.PaymentBackground", [["id", "string", 1, undefined, "_id"], ["fileLength", "uint64", 2, undefined, "_fileLength"], ["width", "uint32", 3, undefined, "_width"], ["height", "uint32", 4, undefined, "_height"], ["mimetype", "string", 5, undefined, "_mimetype"], ["placeholderArgb", "fixed32", 6, undefined, "_placeholderArgb"], ["textArgb", "fixed32", 7, undefined, "_textArgb"], ["subtextArgb", "fixed32", 8, undefined, "_subtextArgb"], ["mediaData", proto.PaymentBackground.MediaData, 9, undefined, "_mediaData"], ["type", proto.PaymentBackground.Type, 10, undefined, "_type"]]],
[proto.PaymentBackground.MediaData, "proto.PaymentBackground.MediaData", [["mediaKey", "bytes", 1, undefined, "_mediaKey"], ["mediaKeyTimestamp", "int64", 2, undefined, "_mediaKeyTimestamp"], ["fileSha256", "bytes", 3, undefined, "_fileSha256"], ["fileEncSha256", "bytes", 4, undefined, "_fileEncSha256"], ["directPath", "string", 5, undefined, "_directPath"]]],
[proto.PaymentInfo, "proto.PaymentInfo", [["currencyDeprecated", proto.PaymentInfo.Currency, 1, undefined, "_currencyDeprecated"], ["amount1000", "uint64", 2, undefined, "_amount1000"], ["receiverJid", "string", 3, undefined, "_receiverJid"], ["status", proto.PaymentInfo.Status, 4, undefined, "_status"], ["transactionTimestamp", "uint64", 5, undefined, "_transactionTimestamp"], ["requestMessageKey", proto.MessageKey, 6, undefined, "_requestMessageKey"], ["expiryTimestamp", "uint64", 7, undefined, "_expiryTimestamp"], ["futureproofed", "bool", 8, undefined, "_futureproofed"], ["currency", "string", 9, undefined, "_currency"], ["txnStatus", proto.PaymentInfo.TxnStatus, 10, undefined, "_txnStatus"], ["useNoviFiatFormat", "bool", 11, undefined, "_useNoviFiatFormat"], ["primaryAmount", proto.Money, 12, undefined, "_primaryAmount"], ["exchangeAmount", proto.Money, 13, undefined, "_exchangeAmount"]]],
[proto.PhoneNumberToLIDMapping, "proto.PhoneNumberToLIDMapping", [["pnJid", "string", 1, undefined, "_pnJid"], ["lidJid", "string", 2, undefined, "_lidJid"]]],
[proto.PhotoChange, "proto.PhotoChange", [["oldPhoto", "bytes", 1, undefined, "_oldPhoto"], ["newPhoto", "bytes", 2, undefined, "_newPhoto"], ["newPhotoId", "uint32", 3, undefined, "_newPhotoId"]]],
[proto.PinInChat, "proto.PinInChat", [["type", proto.PinInChat.Type, 1, undefined, "_type"], ["key", proto.MessageKey, 2, undefined, "_key"], ["senderTimestampMs", "int64", 3, undefined, "_senderTimestampMs"], ["serverTimestampMs", "int64", 4, undefined, "_serverTimestampMs"], ["messageAddOnContextInfo", proto.MessageAddOnContextInfo, 5, undefined, "_messageAddOnContextInfo"]]],
[proto.Point, "proto.Point", [["xDeprecated", "int32", 1, undefined, "_xDeprecated"], ["yDeprecated", "int32", 2, undefined, "_yDeprecated"], ["x", "double", 3, undefined, "_x"], ["y", "double", 4, undefined, "_y"]]],
[proto.PollAdditionalMetadata, "proto.PollAdditionalMetadata", [["pollInvalidated", "bool", 1, undefined, "_pollInvalidated"]]],
[proto.PollEncValue, "proto.PollEncValue", [["encPayload", "bytes", 1, undefined, "_encPayload"], ["encIv", "bytes", 2, undefined, "_encIv"]]],
[proto.PollUpdate, "proto.PollUpdate", [["pollUpdateMessageKey", proto.MessageKey, 1, undefined, "_pollUpdateMessageKey"], ["vote", proto.Message.PollVoteMessage, 2, undefined, "_vote"], ["senderTimestampMs", "int64", 3, undefined, "_senderTimestampMs"], ["serverTimestampMs", "int64", 4, undefined, "_serverTimestampMs"], ["unread", "bool", 5, undefined, "_unread"]]],
[proto.PreKeyRecordStructure, "proto.PreKeyRecordStructure", [["id", "uint32", 1, undefined, "_id"], ["publicKey", "bytes", 2, undefined, "_publicKey"], ["privateKey", "bytes", 3, undefined, "_privateKey"]]],
[proto.PreKeySignalMessage, "proto.PreKeySignalMessage", [["registrationId", "uint32", 5, undefined, "_registrationId"], ["preKeyId", "uint32", 1, undefined, "_preKeyId"], ["signedPreKeyId", "uint32", 6, undefined, "_signedPreKeyId"], ["baseKey", "bytes", 2, undefined, "_baseKey"], ["identityKey", "bytes", 3, undefined, "_identityKey"], ["message", "bytes", 4, undefined, "_message"]], [1,3,4,5,0,2]],
[proto.PremiumMessageInfo, "proto.PremiumMessageInfo", [["serverCampaignId", "string", 1, undefined, "_serverCampaignId"]]],
[proto.PrimaryEphemeralIdentity, "proto.PrimaryEphemeralIdentity", [["publicKey", "bytes", 1, undefined, "_publicKey"], ["nonce", "bytes", 2, undefined, "_nonce"]]],
[proto.ProcessedVideo, "proto.ProcessedVideo", [["directPath", "string", 1, undefined, "_directPath"], ["fileSha256", "bytes", 2, undefined, "_fileSha256"], ["height", "uint32", 3, undefined, "_height"], ["width", "uint32", 4, undefined, "_width"], ["fileLength", "uint64", 5, undefined, "_fileLength"], ["bitrate", "uint32", 6, undefined, "_bitrate"], ["quality", proto.ProcessedVideo.VideoQuality, 7, undefined, "_quality"], ["capabilities", "string", 8, "array"]]],
[proto.ProloguePayload, "proto.ProloguePayload", [["companionEphemeralIdentity", "bytes", 1, undefined, "_companionEphemeralIdentity"], ["commitment", proto.CompanionCommitment, 2, undefined, "_commitment"]]],
[proto.Pushname, "proto.Pushname", [["id", "string", 1, undefined, "_id"], ["pushname", "string", 2, undefined, "_pushname"]]],
[proto.QuarantinedMessage, "proto.QuarantinedMessage", [["originalData", "bytes", 1, undefined, "_originalData"], ["extractedText", "string", 2, undefined, "_extractedText"]]],
[proto.Reaction, "proto.Reaction", [["key", proto.MessageKey, 1, undefined, "_key"], ["text", "string", 2, undefined, "_text"], ["groupingKey", "string", 3, undefined, "_groupingKey"], ["senderTimestampMs", "int64", 4, undefined, "_senderTimestampMs"], ["unread", "bool", 5, undefined, "_unread"]]],
[proto.RecentEmojiWeight, "proto.RecentEmojiWeight", [["emoji", "string", 1, undefined, "_emoji"], ["weight", "float", 2, undefined, "_weight"]]],
[proto.RecordStructure, "proto.RecordStructure", [["currentSession", proto.SessionStructure, 1, undefined, "_currentSession"], ["previousSessions", proto.SessionStructure, 2, "array"]]],
[proto.Reportable, "proto.Reportable", [["minVersion", "uint32", 1, undefined, "_minVersion"], ["maxVersion", "uint32", 2, undefined, "_maxVersion"], ["notReportableMinVersion", "uint32", 3, undefined, "_notReportableMinVersion"], ["never", "bool", 4, undefined, "_never"]]],
[proto.ReportingTokenInfo, "proto.ReportingTokenInfo", [["reportingTag", "bytes", 1, undefined, "_reportingTag"]]],
[proto.SenderKeyDistributionMessage, "proto.SenderKeyDistributionMessage", [["id", "uint32", 1, undefined, "_id"], ["iteration", "uint32", 2, undefined, "_iteration"], ["chainKey", "bytes", 3, undefined, "_chainKey"], ["signingKey", "bytes", 4, undefined, "_signingKey"]]],
[proto.SenderKeyMessage, "proto.SenderKeyMessage", [["id", "uint32", 1, undefined, "_id"], ["iteration", "uint32", 2, undefined, "_iteration"], ["ciphertext", "bytes", 3, undefined, "_ciphertext"]]],
[proto.SenderKeyRecordStructure, "proto.SenderKeyRecordStructure", [["senderKeyStates", proto.SenderKeyStateStructure, 1, "array"]]],
[proto.SenderKeyStateStructure, "proto.SenderKeyStateStructure", [["senderKeyId", "uint32", 1, undefined, "_senderKeyId"], ["senderChainKey", proto.SenderKeyStateStructure.SenderChainKey, 2, undefined, "_senderChainKey"], ["senderSigningKey", proto.SenderKeyStateStructure.SenderSigningKey, 3, undefined, "_senderSigningKey"], ["senderMessageKeys", proto.SenderKeyStateStructure.SenderMessageKey, 4, "array"]]],
[proto.SenderKeyStateStructure.SenderChainKey, "proto.SenderKeyStateStructure.SenderChainKey", [["iteration", "uint32", 1, undefined, "_iteration"], ["seed", "bytes", 2, undefined, "_seed"]]],
[proto.SenderKeyStateStructure.SenderMessageKey, "proto.SenderKeyStateStructure.SenderMessageKey", [["iteration", "uint32", 1, undefined, "_iteration"], ["seed", "bytes", 2, undefined, "_seed"]]],
[proto.SenderKeyStateStructure.SenderSigningKey, "proto.SenderKeyStateStructure.SenderSigningKey", [["public", "bytes", 1, undefined, "_public"], ["private", "bytes", 2, undefined, "_private"]]],
[proto.ServerErrorReceipt, "proto.ServerErrorReceipt", [["stanzaId", "string", 1, undefined, "_stanzaId"]]],
[proto.SessionStructure, "proto.SessionStructure", [["sessionVersion", "uint32", 1, undefined, "_sessionVersion"], ["localIdentityPublic", "bytes", 2, undefined, "_localIdentityPublic"], ["remoteIdentityPublic", "bytes", 3, undefined, "_remoteIdentityPublic"], ["rootKey", "bytes", 4, undefined, "_rootKey"], ["previousCounter", "uint32", 5, undefined, "_previousCounter"], ["senderChain", proto.SessionStructure.Chain, 6, undefined, "_senderChain"], ["receiverChains", proto.SessionStructure.Chain, 7, "array"], ["pendingKeyExchange", proto.SessionStructure.PendingKeyExchange, 8, undefined, "_pendingKeyExchange"], ["pendingPreKey", proto.SessionStructure.PendingPreKey, 9, undefined, "_pendingPreKey"], ["remoteRegistrationId", "uint32", 10, undefined, "_remoteRegistrationId"], ["localRegistrationId", "uint32", 11, undefined, "_localRegistrationId"], ["needsRefresh", "bool", 12, undefined, "_needsRefresh"], ["aliceBaseKey", "bytes", 13, undefined, "_aliceBaseKey"]]],
[proto.SessionStructure.Chain, "proto.SessionStructure.Chain", [["senderRatchetKey", "bytes", 1, undefined, "_senderRatchetKey"], ["senderRatchetKeyPrivate", "bytes", 2, undefined, "_senderRatchetKeyPrivate"], ["chainKey", proto.SessionStructure.Chain.ChainKey, 3, undefined, "_chainKey"], ["messageKeys", proto.SessionStructure.Chain.MessageKey, 4, "array"]]],
[proto.SessionStructure.Chain.ChainKey, "proto.SessionStructure.Chain.ChainKey", [["index", "uint32", 1, undefined, "_index"], ["key", "bytes", 2, undefined, "_key"]]],
[proto.SessionStructure.Chain.MessageKey, "proto.SessionStructure.Chain.MessageKey", [["index", "uint32", 1, undefined, "_index"], ["cipherKey", "bytes", 2, undefined, "_cipherKey"], ["macKey", "bytes", 3, undefined, "_macKey"], ["iv", "bytes", 4, undefined, "_iv"]]],
[proto.SessionStructure.PendingKeyExchange, "proto.SessionStructure.PendingKeyExchange", [["sequence", "uint32", 1, undefined, "_sequence"], ["localBaseKey", "bytes", 2, undefined, "_localBaseKey"], ["localBaseKeyPrivate", "bytes", 3, undefined, "_localBaseKeyPrivate"], ["localRatchetKey", "bytes", 4, undefined, "_localRatchetKey"], ["localRatchetKeyPrivate", "bytes", 5, undefined, "_localRatchetKeyPrivate"], ["localIdentityKey", "bytes", 7, undefined, "_localIdentityKey"], ["localIdentityKeyPrivate", "bytes", 8, undefined, "_localIdentityKeyPrivate"]]],
[proto.SessionStructure.PendingPreKey, "proto.SessionStructure.PendingPreKey", [["preKeyId", "uint32", 1, undefined, "_preKeyId"], ["signedPreKeyId", "int32", 3, undefined, "_signedPreKeyId"], ["baseKey", "bytes", 2, undefined, "_baseKey"]], [0,2,1]],
[proto.SessionTransparencyMetadata, "proto.SessionTransparencyMetadata", [["disclaimerText", "string", 1, undefined, "_disclaimerText"], ["hcaId", "string", 2, undefined, "_hcaId"], ["sessionTransparencyType", proto.SessionTransparencyType, 3, undefined, "_sessionTransparencyType"]]],
[proto.SignalMessage, "proto.SignalMessage", [["ratchetKey", "bytes", 1, undefined, "_ratchetKey"], ["counter", "uint32", 2, undefined, "_counter"], ["previousCounter", "uint32", 3, undefined, "_previousCounter"], ["ciphertext", "bytes", 4, undefined, "_ciphertext"]]],
[proto.SignedPreKeyRecordStructure, "proto.SignedPreKeyRecordStructure", [["id", "uint32", 1, undefined, "_id"], ["publicKey", "bytes", 2, undefined, "_publicKey"], ["privateKey", "bytes", 3, undefined, "_privateKey"], ["signature", "bytes", 4, undefined, "_signature"], ["timestamp", "fixed64", 5, undefined, "_timestamp"]]],
[proto.StatusAttribution, "proto.StatusAttribution", [["type", proto.StatusAttribution.Type, 1, undefined, "_type"], ["actionUrl", "string", 2, undefined, "_actionUrl"], ["statusReshare", proto.StatusAttribution.StatusReshare, 3, undefined, "attributionData"], ["externalShare", proto.StatusAttribution.ExternalShare, 4, undefined, "attributionData"], ["music", proto.StatusAttribution.Music, 5, undefined, "attributionData"], ["groupStatus", proto.StatusAttribution.GroupStatus, 6, undefined, "attributionData"], ["rlAttribution", proto.StatusAttribution.RLAttribution, 7, undefined, "attributionData"], ["aiCreatedAttribution", proto.StatusAttribution.AiCreatedAttribution, 8, undefined, "attributionData"]]],
[proto.StatusAttribution.AiCreatedAttribution, "proto.StatusAttribution.AiCreatedAttribution", [["source", proto.StatusAttribution.AiCreatedAttribution.Source, 1, undefined, "_source"]]],
[proto.StatusAttribution.ExternalShare, "proto.StatusAttribution.ExternalShare", [["actionUrl", "string", 1, undefined, "_actionUrl"], ["source", proto.StatusAttribution.ExternalShare.Source, 2, undefined, "_source"], ["duration", "int32", 3, undefined, "_duration"], ["actionFallbackUrl", "string", 4, undefined, "_actionFallbackUrl"]]],
[proto.StatusAttribution.GroupStatus, "proto.StatusAttribution.GroupStatus", [["authorJid", "string", 1, undefined, "_authorJid"]]],
[proto.StatusAttribution.Music, "proto.StatusAttribution.Music", [["authorName", "string", 1, undefined, "_authorName"], ["songId", "string", 2, undefined, "_songId"], ["title", "string", 3, undefined, "_title"], ["author", "string", 4, undefined, "_author"], ["artistAttribution", "string", 5, undefined, "_artistAttribution"], ["isExplicit", "bool", 6, undefined, "_isExplicit"]]],
[proto.StatusAttribution.RLAttribution, "proto.StatusAttribution.RLAttribution", [["source", proto.StatusAttribution.RLAttribution.Source, 1, undefined, "_source"]]],
[proto.StatusAttribution.StatusReshare, "proto.StatusAttribution.StatusReshare", [["source", proto.StatusAttribution.StatusReshare.Source, 1, undefined, "_source"], ["metadata", proto.StatusAttribution.StatusReshare.Metadata, 2, undefined, "_metadata"]]],
[proto.StatusAttribution.StatusReshare.Metadata, "proto.StatusAttribution.StatusReshare.Metadata", [["duration", "int32", 1, undefined, "_duration"], ["channelJid", "string", 2, undefined, "_channelJid"], ["channelMessageId", "int32", 3, undefined, "_channelMessageId"], ["hasMultipleReshares", "bool", 4, undefined, "_hasMultipleReshares"]]],
[proto.StatusMentionMessage, "proto.StatusMentionMessage", [["quotedStatus", proto.Message, 1, undefined, "_quotedStatus"]]],
[proto.StatusPSA, "proto.StatusPSA", [["campaignId", "uint64", 44], ["campaignExpirationTimestamp", "uint64", 45, undefined, "_campaignExpirationTimestamp"]]],
[proto.StickerMetadata, "proto.StickerMetadata", [["url", "string", 1, undefined, "_url"], ["fileSha256", "bytes", 2, undefined, "_fileSha256"], ["fileEncSha256", "bytes", 3, undefined, "_fileEncSha256"], ["mediaKey", "bytes", 4, undefined, "_mediaKey"], ["mimetype", "string", 5, undefined, "_mimetype"], ["height", "uint32", 6, undefined, "_height"], ["width", "uint32", 7, undefined, "_width"], ["directPath", "string", 8, undefined, "_directPath"], ["fileLength", "uint64", 9, undefined, "_fileLength"], ["weight", "float", 10, undefined, "_weight"], ["lastStickerSentTs", "int64", 11, undefined, "_lastStickerSentTs"], ["isLottie", "bool", 12, undefined, "_isLottie"], ["imageHash", "string", 13, undefined, "_imageHash"], ["isAvatarSticker", "bool", 14, undefined, "_isAvatarSticker"]]],
[proto.SyncActionData, "proto.SyncActionData", [["index", "bytes", 1, undefined, "_index"], ["value", proto.SyncActionValue, 2, undefined, "_value"], ["padding", "bytes", 3, undefined, "_padding"], ["version", "int32", 4, undefined, "_version"]]],
[proto.SyncActionValue, "proto.SyncActionValue", [["timestamp", "int64", 1, undefined, "_timestamp"], ["starAction", proto.SyncActionValue.StarAction, 2, undefined, "_starAction"], ["contactAction", proto.SyncActionValue.ContactAction, 3, undefined, "_contactAction"], ["muteAction", proto.SyncActionValue.MuteAction, 4, undefined, "_muteAction"], ["pinAction", proto.SyncActionValue.PinAction, 5, undefined, "_pinAction"], ["pushNameSetting", proto.SyncActionValue.PushNameSetting, 7, undefined, "_pushNameSetting"], ["quickReplyAction", proto.SyncActionValue.QuickReplyAction, 8, undefined, "_quickReplyAction"], ["recentEmojiWeightsAction", proto.SyncActionValue.RecentEmojiWeightsAction, 11, undefined, "_recentEmojiWeightsAction"], ["labelEditAction", proto.SyncActionValue.LabelEditAction, 14, undefined, "_labelEditAction"], ["labelAssociationAction", proto.SyncActionValue.LabelAssociationAction, 15, undefined, "_labelAssociationAction"], ["localeSetting", proto.SyncActionValue.LocaleSetting, 16, undefined, "_localeSetting"], ["archiveChatAction", proto.SyncActionValue.ArchiveChatAction, 17, undefined, "_archiveChatAction"], ["deleteMessageForMeAction", proto.SyncActionValue.DeleteMessageForMeAction, 18, undefined, "_deleteMessageForMeAction"], ["keyExpiration", proto.SyncActionValue.KeyExpiration, 19, undefined, "_keyExpiration"], ["markChatAsReadAction", proto.SyncActionValue.MarkChatAsReadAction, 20, undefined, "_markChatAsReadAction"], ["clearChatAction", proto.SyncActionValue.ClearChatAction, 21, undefined, "_clearChatAction"], ["deleteChatAction", proto.SyncActionValue.DeleteChatAction, 22, undefined, "_deleteChatAction"], ["unarchiveChatsSetting", proto.SyncActionValue.UnarchiveChatsSetting, 23, undefined, "_unarchiveChatsSetting"], ["primaryFeature", proto.SyncActionValue.PrimaryFeature, 24, undefined, "_primaryFeature"], ["androidUnsupportedActions", proto.SyncActionValue.AndroidUnsupportedActions, 26, undefined, "_androidUnsupportedActions"], ["agentAction", proto.SyncActionValue.AgentAction, 27, undefined, "_agentAction"], ["subscriptionAction", proto.SyncActionValue.SubscriptionAction, 28, undefined, "_subscriptionAction"], ["userStatusMuteAction", proto.SyncActionValue.UserStatusMuteAction, 29, undefined, "_userStatusMuteAction"], ["timeFormatAction", proto.SyncActionValue.TimeFormatAction, 30, undefined, "_timeFormatAction"], ["nuxAction", proto.SyncActionValue.NuxAction, 31, undefined, "_nuxAction"], ["primaryVersionAction", proto.SyncActionValue.PrimaryVersionAction, 32, undefined, "_primaryVersionAction"], ["stickerAction", proto.SyncActionValue.StickerAction, 33, undefined, "_stickerAction"], ["removeRecentStickerAction", proto.SyncActionValue.RemoveRecentStickerAction, 34, undefined, "_removeRecentStickerAction"], ["chatAssignment", proto.SyncActionValue.ChatAssignmentAction, 35, undefined, "_chatAssignment"], ["chatAssignmentOpenedStatus", proto.SyncActionValue.ChatAssignmentOpenedStatusAction, 36, undefined, "_chatAssignmentOpenedStatus"], ["pnForLidChatAction", proto.SyncActionValue.PnForLidChatAction, 37, undefined, "_pnForLidChatAction"], ["marketingMessageAction", proto.SyncActionValue.MarketingMessageAction, 38, undefined, "_marketingMessageAction"], ["marketingMessageBroadcastAction", proto.SyncActionValue.MarketingMessageBroadcastAction, 39, undefined, "_marketingMessageBroadcastAction"], ["externalWebBetaAction", proto.SyncActionValue.ExternalWebBetaAction, 40, undefined, "_externalWebBetaAction"], ["privacySettingRelayAllCalls", proto.SyncActionValue.PrivacySettingRelayAllCalls, 41, undefined, "_privacySettingRelayAllCalls"], ["callLogAction", proto.SyncActionValue.CallLogAction, 42, undefined, "_callLogAction"], ["ugcBot", proto.SyncActionValue.UGCBot, 43, undefined, "_ugcBot"], ["statusPrivacy", proto.SyncActionValue.StatusPrivacyAction, 44, undefined, "_statusPrivacy"], ["botWelcomeRequestAction", proto.SyncActionValue.BotWelcomeRequestAction, 45, undefined, "_botWelcomeRequestAction"], ["deleteIndividualCallLog", proto.SyncActionValue.DeleteIndividualCallLogAction, 46, undefined, "_deleteIndividualCallLog"], ["labelReorderingAction", proto.SyncActionValue.LabelReorderingAction, 47, undefined, "_labelReorderingAction"], ["paymentInfoAction", proto.SyncActionValue.PaymentInfoAction, 48, undefined, "_paymentInfoAction"], ["customPaymentMethodsAction", proto.SyncActionValue.CustomPaymentMethodsAction, 49, undefined, "_customPaymentMethodsAction"], ["lockChatAction", proto.SyncActionValue.LockChatAction, 50, undefined, "_lockChatAction"], ["chatLockSettings", proto.ChatLockSettings, 51, undefined, "_chatLockSettings"], ["wamoUserIdentifierAction", proto.SyncActionValue.WamoUserIdentifierAction, 52, undefined, "_wamoUserIdentifierAction"], ["privacySettingDisableLinkPreviewsAction", proto.SyncActionValue.PrivacySettingDisableLinkPreviewsAction, 53, undefined, "_privacySettingDisableLinkPreviewsAction"], ["deviceCapabilities", proto.DeviceCapabilities, 54, undefined, "_deviceCapabilities"], ["noteEditAction", proto.SyncActionValue.NoteEditAction, 55, undefined, "_noteEditAction"], ["favoritesAction", proto.SyncActionValue.FavoritesAction, 56, undefined, "_favoritesAction"], ["merchantPaymentPartnerAction", proto.SyncActionValue.MerchantPaymentPartnerAction, 57, undefined, "_merchantPaymentPartnerAction"], ["waffleAccountLinkStateAction", proto.SyncActionValue.WaffleAccountLinkStateAction, 58, undefined, "_waffleAccountLinkStateAction"], ["usernameChatStartMode", proto.SyncActionValue.UsernameChatStartModeAction, 59, undefined, "_usernameChatStartMode"], ["notificationActivitySettingAction", proto.SyncActionValue.NotificationActivitySettingAction, 60, undefined, "_notificationActivitySettingAction"], ["lidContactAction", proto.SyncActionValue.LidContactAction, 61, undefined, "_lidContactAction"], ["ctwaPerCustomerDataSharingAction", proto.SyncActionValue.CtwaPerCustomerDataSharingAction, 62, undefined, "_ctwaPerCustomerDataSharingAction"], ["paymentTosAction", proto.SyncActionValue.PaymentTosAction, 63, undefined, "_paymentTosAction"], ["privacySettingChannelsPersonalisedRecommendationAction", proto.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction, 64, undefined, "_privacySettingChannelsPersonalisedRecommendationAction"], ["businessBroadcastAssociationAction", proto.SyncActionValue.BusinessBroadcastAssociationAction, 65, undefined, "_businessBroadcastAssociationAction"], ["detectedOutcomesStatusAction", proto.SyncActionValue.DetectedOutcomesStatusAction, 66, undefined, "_detectedOutcomesStatusAction"], ["maibaAiFeaturesControlAction", proto.SyncActionValue.MaibaAIFeaturesControlAction, 68, undefined, "_maibaAiFeaturesControlAction"], ["businessBroadcastListAction", proto.SyncActionValue.BusinessBroadcastListAction, 69, undefined, "_businessBroadcastListAction"], ["musicUserIdAction", proto.SyncActionValue.MusicUserIdAction, 70, undefined, "_musicUserIdAction"], ["statusPostOptInNotificationPreferencesAction", proto.SyncActionValue.StatusPostOptInNotificationPreferencesAction, 71, undefined, "_statusPostOptInNotificationPreferencesAction"], ["avatarUpdatedAction", proto.SyncActionValue.AvatarUpdatedAction, 72, undefined, "_avatarUpdatedAction"], ["privateProcessingSettingAction", proto.SyncActionValue.PrivateProcessingSettingAction, 74, undefined, "_privateProcessingSettingAction"], ["newsletterSavedInterestsAction", proto.SyncActionValue.NewsletterSavedInterestsAction, 75, undefined, "_newsletterSavedInterestsAction"], ["aiThreadRenameAction", proto.SyncActionValue.AiThreadRenameAction, 76, undefined, "_aiThreadRenameAction"], ["interactiveMessageAction", proto.SyncActionValue.InteractiveMessageAction, 77, undefined, "_interactiveMessageAction"]]],
[proto.SyncActionValue.AgentAction, "proto.SyncActionValue.AgentAction", [["name", "string", 1, undefined, "_name"], ["deviceID", "int32", 2, undefined, "_deviceID"], ["isDeleted", "bool", 3, undefined, "_isDeleted"]]],
[proto.SyncActionValue.AiThreadRenameAction, "proto.SyncActionValue.AiThreadRenameAction", [["newTitle", "string", 1, undefined, "_newTitle"]]],
[proto.SyncActionValue.AndroidUnsupportedActions, "proto.SyncActionValue.AndroidUnsupportedActions", [["allowed", "bool", 1, undefined, "_allowed"]]],
[proto.SyncActionValue.ArchiveChatAction, "proto.SyncActionValue.ArchiveChatAction", [["archived", "bool", 1, undefined, "_archived"], ["messageRange", proto.SyncActionValue.SyncActionMessageRange, 2, undefined, "_messageRange"]]],
[proto.SyncActionValue.AvatarUpdatedAction, "proto.SyncActionValue.AvatarUpdatedAction", [["eventType", proto.SyncActionValue.AvatarUpdatedAction.AvatarEventType, 1, undefined, "_eventType"], ["recentAvatarStickers", proto.SyncActionValue.StickerAction, 2, "array"]]],
[proto.SyncActionValue.BotWelcomeRequestAction, "proto.SyncActionValue.BotWelcomeRequestAction", [["isSent", "bool", 1, undefined, "_isSent"]]],
[proto.SyncActionValue.BroadcastListParticipant, "proto.SyncActionValue.BroadcastListParticipant", [["lidJid", "string", 1], ["pnJid", "string", 2, undefined, "_pnJid"]]],
[proto.SyncActionValue.BusinessBroadcastAssociationAction, "proto.SyncActionValue.BusinessBroadcastAssociationAction", [["deleted", "bool", 1, undefined, "_deleted"]]],
[proto.SyncActionValue.BusinessBroadcastListAction, "proto.SyncActionValue.BusinessBroadcastListAction", [["deleted", "bool", 1, undefined, "_deleted"], ["participants", proto.SyncActionValue.BroadcastListParticipant, 2, "array"], ["listName", "string", 3, undefined, "_listName"]]],
[proto.SyncActionValue.CallLogAction, "proto.SyncActionValue.CallLogAction", [["callLogRecord", proto.CallLogRecord, 1, undefined, "_callLogRecord"]]],
[proto.SyncActionValue.ChatAssignmentAction, "proto.SyncActionValue.ChatAssignmentAction", [["deviceAgentID", "string", 1, undefined, "_deviceAgentID"]]],
[proto.SyncActionValue.ChatAssignmentOpenedStatusAction, "proto.SyncActionValue.ChatAssignmentOpenedStatusAction", [["chatOpened", "bool", 1, undefined, "_chatOpened"]]],
[proto.SyncActionValue.ClearChatAction, "proto.SyncActionValue.ClearChatAction", [["messageRange", proto.SyncActionValue.SyncActionMessageRange, 1, undefined, "_messageRange"]]],
[proto.SyncActionValue.ContactAction, "proto.SyncActionValue.ContactAction", [["fullName", "string", 1, undefined, "_fullName"], ["firstName", "string", 2, undefined, "_firstName"], ["lidJid", "string", 3, undefined, "_lidJid"], ["saveOnPrimaryAddressbook", "bool", 4, undefined, "_saveOnPrimaryAddressbook"], ["pnJid", "string", 5, undefined, "_pnJid"], ["username", "string", 6, undefined, "_username"]]],
[proto.SyncActionValue.CtwaPerCustomerDataSharingAction, "proto.SyncActionValue.CtwaPerCustomerDataSharingAction", [["isCtwaPerCustomerDataSharingEnabled", "bool", 1, undefined, "_isCtwaPerCustomerDataSharingEnabled"]]],
[proto.SyncActionValue.CustomPaymentMethod, "proto.SyncActionValue.CustomPaymentMethod", [["credentialId", "string", 1], ["country", "string", 2], ["type", "string", 3], ["metadata", proto.SyncActionValue.CustomPaymentMethodMetadata, 4, "array"]]],
[proto.SyncActionValue.CustomPaymentMethodMetadata, "proto.SyncActionValue.CustomPaymentMethodMetadata", [["key", "string", 1], ["value", "string", 2]]],
[proto.SyncActionValue.CustomPaymentMethodsAction, "proto.SyncActionValue.CustomPaymentMethodsAction", [["customPaymentMethods", proto.SyncActionValue.CustomPaymentMethod, 1, "array"]]],
[proto.SyncActionValue.DeleteChatAction, "proto.SyncActionValue.DeleteChatAction", [["messageRange", proto.SyncActionValue.SyncActionMessageRange, 1, undefined, "_messageRange"]]],
[proto.SyncActionValue.DeleteIndividualCallLogAction, "proto.SyncActionValue.DeleteIndividualCallLogAction", [["peerJid", "string", 1, undefined, "_peerJid"], ["isIncoming", "bool", 2, undefined, "_isIncoming"]]],
[proto.SyncActionValue.DeleteMessageForMeAction, "proto.SyncActionValue.DeleteMessageForMeAction", [["deleteMedia", "bool", 1, undefined, "_deleteMedia"], ["messageTimestamp", "int64", 2, undefined, "_messageTimestamp"]]],
[proto.SyncActionValue.DetectedOutcomesStatusAction, "proto.SyncActionValue.DetectedOutcomesStatusAction", [["isEnabled", "bool", 1, undefined, "_isEnabled"]]],
[proto.SyncActionValue.ExternalWebBetaAction, "proto.SyncActionValue.ExternalWebBetaAction", [["isOptIn", "bool", 1, undefined, "_isOptIn"]]],
[proto.SyncActionValue.FavoritesAction, "proto.SyncActionValue.FavoritesAction", [["favorites", proto.SyncActionValue.FavoritesAction.Favorite, 1, "array"]]],
[proto.SyncActionValue.FavoritesAction.Favorite, "proto.SyncActionValue.FavoritesAction.Favorite", [["id", "string", 1, undefined, "_id"]]],
[proto.SyncActionValue.InteractiveMessageAction, "proto.SyncActionValue.InteractiveMessageAction", [["type", proto.SyncActionValue.InteractiveMessageAction.InteractiveMessageActionMode, 1]]],
[proto.SyncActionValue.KeyExpiration, "proto.SyncActionValue.KeyExpiration", [["expiredKeyEpoch", "int32", 1, undefined, "_expiredKeyEpoch"]]],
[proto.SyncActionValue.LabelAssociationAction, "proto.SyncActionValue.LabelAssociationAction", [["labeled", "bool", 1, undefined, "_labeled"]]],
[proto.SyncActionValue.LabelEditAction, "proto.SyncActionValue.LabelEditAction", [["name", "string", 1, undefined, "_name"], ["color", "int32", 2, undefined, "_color"], ["predefinedId", "int32", 3, undefined, "_predefinedId"], ["deleted", "bool", 4, undefined, "_deleted"], ["orderIndex", "int32", 5, undefined, "_orderIndex"], ["isActive", "bool", 6, undefined, "_isActive"], ["type", proto.SyncActionValue.LabelEditAction.ListType, 7, undefined, "_type"], ["isImmutable", "bool", 8, undefined, "_isImmutable"], ["muteEndTimeMs", "int64", 9, undefined, "_muteEndTimeMs"]]],
[proto.SyncActionValue.LabelReorderingAction, "proto.SyncActionValue.LabelReorderingAction", [["sortedLabelIds", "int32", 1, "array"]]],
[proto.SyncActionValue.LidContactAction, "proto.SyncActionValue.LidContactAction", [["fullName", "string", 1, undefined, "_fullName"], ["firstName", "string", 2, undefined, "_firstName"], ["username", "string", 3, undefined, "_username"]]],
[proto.SyncActionValue.LocaleSetting, "proto.SyncActionValue.LocaleSetting", [["locale", "string", 1, undefined, "_locale"]]],
[proto.SyncActionValue.LockChatAction, "proto.SyncActionValue.LockChatAction", [["locked", "bool", 1, undefined, "_locked"]]],
[proto.SyncActionValue.MaibaAIFeaturesControlAction, "proto.SyncActionValue.MaibaAIFeaturesControlAction", [["aiFeatureStatus", proto.SyncActionValue.MaibaAIFeaturesControlAction.MaibaAIFeatureStatus, 1, undefined, "_aiFeatureStatus"]]],
[proto.SyncActionValue.MarkChatAsReadAction, "proto.SyncActionValue.MarkChatAsReadAction", [["read", "bool", 1, undefined, "_read"], ["messageRange", proto.SyncActionValue.SyncActionMessageRange, 2, undefined, "_messageRange"]]],
[proto.SyncActionValue.MarketingMessageAction, "proto.SyncActionValue.MarketingMessageAction", [["name", "string", 1, undefined, "_name"], ["message", "string", 2, undefined, "_message"], ["type", proto.SyncActionValue.MarketingMessageAction.MarketingMessagePrototypeType, 3, undefined, "_type"], ["createdAt", "int64", 4, undefined, "_createdAt"], ["lastSentAt", "int64", 5, undefined, "_lastSentAt"], ["isDeleted", "bool", 6, undefined, "_isDeleted"], ["mediaId", "string", 7, undefined, "_mediaId"]]],
[proto.SyncActionValue.MarketingMessageBroadcastAction, "proto.SyncActionValue.MarketingMessageBroadcastAction", [["repliedCount", "int32", 1, undefined, "_repliedCount"]]],
[proto.SyncActionValue.MerchantPaymentPartnerAction, "proto.SyncActionValue.MerchantPaymentPartnerAction", [["status", proto.SyncActionValue.MerchantPaymentPartnerAction.Status, 1], ["country", "string", 2], ["gatewayName", "string", 3, undefined, "_gatewayName"], ["credentialId", "string", 4, undefined, "_credentialId"]]],
[proto.SyncActionValue.MusicUserIdAction, "proto.SyncActionValue.MusicUserIdAction", [["musicUserId", "string", 1, undefined, "_musicUserId"], ["musicUserIdMap", "string", 2, "map", undefined, "string"]]],
[proto.SyncActionValue.MuteAction, "proto.SyncActionValue.MuteAction", [["muted", "bool", 1, undefined, "_muted"], ["muteEndTimestamp", "int64", 2, undefined, "_muteEndTimestamp"], ["autoMuted", "bool", 3, undefined, "_autoMuted"]]],
[proto.SyncActionValue.NewsletterSavedInterestsAction, "proto.SyncActionValue.NewsletterSavedInterestsAction", [["newsletterSavedInterests", "string", 1, undefined, "_newsletterSavedInterests"]]],
[proto.SyncActionValue.NoteEditAction, "proto.SyncActionValue.NoteEditAction", [["type", proto.SyncActionValue.NoteEditAction.NoteType, 1, undefined, "_type"], ["chatJid", "string", 2, undefined, "_chatJid"], ["createdAt", "int64", 3, undefined, "_createdAt"], ["deleted", "bool", 4, undefined, "_deleted"], ["unstructuredContent", "string", 5, undefined, "_unstructuredContent"]]],
[proto.SyncActionValue.NotificationActivitySettingAction, "proto.SyncActionValue.NotificationActivitySettingAction", [["notificationActivitySetting", proto.SyncActionValue.NotificationActivitySettingAction.NotificationActivitySetting, 1, undefined, "_notificationActivitySetting"]]],
[proto.SyncActionValue.NuxAction, "proto.SyncActionValue.NuxAction", [["acknowledged", "bool", 1, undefined, "_acknowledged"]]],
[proto.SyncActionValue.PaymentInfoAction, "proto.SyncActionValue.PaymentInfoAction", [["cpi", "string", 1, undefined, "_cpi"]]],
[proto.SyncActionValue.PaymentTosAction, "proto.SyncActionValue.PaymentTosAction", [["paymentNotice", proto.SyncActionValue.PaymentTosAction.PaymentNotice, 1], ["accepted", "bool", 2]]],
[proto.SyncActionValue.PinAction, "proto.SyncActionValue.PinAction", [["pinned", "bool", 1, undefined, "_pinned"]]],
[proto.SyncActionValue.PnForLidChatAction, "proto.SyncActionValue.PnForLidChatAction", [["pnJid", "string", 1, undefined, "_pnJid"]]],
[proto.SyncActionValue.PrimaryFeature, "proto.SyncActionValue.PrimaryFeature", [["flags", "string", 1, "array"]]],
[proto.SyncActionValue.PrimaryVersionAction, "proto.SyncActionValue.PrimaryVersionAction", [["version", "string", 1, undefined, "_version"]]],
[proto.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction, "proto.SyncActionValue.PrivacySettingChannelsPersonalisedRecommendationAction", [["isUserOptedOut", "bool", 1, undefined, "_isUserOptedOut"]]],
[proto.SyncActionValue.PrivacySettingDisableLinkPreviewsAction, "proto.SyncActionValue.PrivacySettingDisableLinkPreviewsAction", [["isPreviewsDisabled", "bool", 1, undefined, "_isPreviewsDisabled"]]],
[proto.SyncActionValue.PrivacySettingRelayAllCalls, "proto.SyncActionValue.PrivacySettingRelayAllCalls", [["isEnabled", "bool", 1, undefined, "_isEnabled"]]],
[proto.SyncActionValue.PrivateProcessingSettingAction, "proto.SyncActionValue.PrivateProcessingSettingAction", [["privateProcessingStatus", proto.SyncActionValue.PrivateProcessingSettingAction.PrivateProcessingStatus, 1, undefined, "_privateProcessingStatus"]]],
[proto.SyncActionValue.PushNameSetting, "proto.SyncActionValue.PushNameSetting", [["name", "string", 1, undefined, "_name"]]],
[proto.SyncActionValue.QuickReplyAction, "proto.SyncActionValue.QuickReplyAction", [["shortcut", "string", 1, undefined, "_shortcut"], ["message", "string", 2, undefined, "_message"], ["keywords", "string", 3, "array"], ["count", "int32", 4, undefined, "_count"], ["deleted", "bool", 5, undefined, "_deleted"]]],
[proto.SyncActionValue.RecentEmojiWeightsAction, "proto.SyncActionValue.RecentEmojiWeightsAction", [["weights", proto.RecentEmojiWeight, 1, "array"]]],
[proto.SyncActionValue.RemoveRecentStickerAction, "proto.SyncActionValue.RemoveRecentStickerAction", [["lastStickerSentTs", "int64", 1, undefined, "_lastStickerSentTs"]]],
[proto.SyncActionValue.StarAction, "proto.SyncActionValue.StarAction", [["starred", "bool", 1, undefined, "_starred"]]],
[proto.SyncActionValue.StatusPostOptInNotificationPreferencesAction, "proto.SyncActionValue.StatusPostOptInNotificationPreferencesAction", [["enabled", "bool", 1, undefined, "_enabled"]]],
[proto.SyncActionValue.StatusPrivacyAction, "proto.SyncActionValue.StatusPrivacyAction", [["mode", proto.SyncActionValue.StatusPrivacyAction.StatusDistributionMode, 1, undefined, "_mode"], ["userJid", "string", 2, "array"]]],
[proto.SyncActionValue.StickerAction, "proto.SyncActionValue.StickerAction", [["url", "string", 1, undefined, "_url"], ["fileEncSha256", "bytes", 2, undefined, "_fileEncSha256"], ["mediaKey", "bytes", 3, undefined, "_mediaKey"], ["mimetype", "string", 4, undefined, "_mimetype"], ["height", "uint32", 5, undefined, "_height"], ["width", "uint32", 6, undefined, "_width"], ["directPath", "string", 7, undefined, "_directPath"], ["fileLength", "uint64", 8, undefined, "_fileLength"], ["isFavorite", "bool", 9, undefined, "_isFavorite"], ["deviceIdHint", "uint32", 10, undefined, "_deviceIdHint"], ["isLottie", "bool", 11, undefined, "_isLottie"], ["imageHash", "string", 12, undefined, "_imageHash"], ["isAvatarSticker", "bool", 13, undefined, "_isAvatarSticker"]]],
[proto.SyncActionValue.SubscriptionAction, "proto.SyncActionValue.SubscriptionAction", [["isDeactivated", "bool", 1, undefined, "_isDeactivated"], ["isAutoRenewing", "bool", 2, undefined, "_isAutoRenewing"], ["expirationDate", "int64", 3, undefined, "_expirationDate"]]],
[proto.SyncActionValue.SyncActionMessage, "proto.SyncActionValue.SyncActionMessage", [["key", proto.MessageKey, 1, undefined, "_key"], ["timestamp", "int64", 2, undefined, "_timestamp"]]],
[proto.SyncActionValue.SyncActionMessageRange, "proto.SyncActionValue.SyncActionMessageRange", [["lastMessageTimestamp", "int64", 1, undefined, "_lastMessageTimestamp"], ["lastSystemMessageTimestamp", "int64", 2, undefined, "_lastSystemMessageTimestamp"], ["messages", proto.SyncActionValue.SyncActionMessage, 3, "array"]]],
[proto.SyncActionValue.TimeFormatAction, "proto.SyncActionValue.TimeFormatAction", [["isTwentyFourHourFormatEnabled", "bool", 1, undefined, "_isTwentyFourHourFormatEnabled"]]],
[proto.SyncActionValue.UGCBot, "proto.SyncActionValue.UGCBot", [["definition", "bytes", 1, undefined, "_definition"]]],
[proto.SyncActionValue.UnarchiveChatsSetting, "proto.SyncActionValue.UnarchiveChatsSetting", [["unarchiveChats", "bool", 1, undefined, "_unarchiveChats"]]],
[proto.SyncActionValue.UserStatusMuteAction, "proto.SyncActionValue.UserStatusMuteAction", [["muted", "bool", 1, undefined, "_muted"]]],
[proto.SyncActionValue.UsernameChatStartModeAction, "proto.SyncActionValue.UsernameChatStartModeAction", [["chatStartMode", proto.SyncActionValue.UsernameChatStartModeAction.ChatStartMode, 1, undefined, "_chatStartMode"]]],
[proto.SyncActionValue.WaffleAccountLinkStateAction, "proto.SyncActionValue.WaffleAccountLinkStateAction", [["linkState", proto.SyncActionValue.WaffleAccountLinkStateAction.AccountLinkState, 2, undefined, "_linkState"]]],
[proto.SyncActionValue.WamoUserIdentifierAction, "proto.SyncActionValue.WamoUserIdentifierAction", [["identifier", "string", 1, undefined, "_identifier"]]],
[proto.SyncdIndex, "proto.SyncdIndex", [["blob", "bytes", 1, undefined, "_blob"]]],
[proto.SyncdMutation, "proto.SyncdMutation", [["operation", proto.SyncdMutation.SyncdOperation, 1, undefined, "_operation"], ["record", proto.SyncdRecord, 2, undefined, "_record"]]],
[proto.SyncdMutations, "proto.SyncdMutations", [["mutations", proto.SyncdMutation, 1, "array"]]],
[proto.SyncdPatch, "proto.SyncdPatch", [["version", proto.SyncdVersion, 1, undefined, "_version"], ["mutations", proto.SyncdMutation, 2, "array"], ["externalMutations", proto.ExternalBlobReference, 3, undefined, "_externalMutations"], ["snapshotMac", "bytes", 4, undefined, "_snapshotMac"], ["patchMac", "bytes", 5, undefined, "_patchMac"], ["keyId", proto.KeyId, 6, undefined, "_keyId"], ["exitCode", proto.ExitCode, 7, undefined, "_exitCode"], ["deviceIndex", "uint32", 8, undefined, "_deviceIndex"], ["clientDebugData", "bytes", 9, undefined, "_clientDebugData"]]],
[proto.SyncdRecord, "proto.SyncdRecord", [["index", proto.SyncdIndex, 1, undefined, "_index"], ["value", proto.SyncdValue, 2, undefined, "_value"], ["keyId", proto.KeyId, 3, undefined, "_keyId"]]],
[proto.SyncdSnapshot, "proto.SyncdSnapshot", [["version", proto.SyncdVersion, 1, undefined, "_version"], ["records", proto.SyncdRecord, 2, "array"], ["mac", "bytes", 3, undefined, "_mac"], ["keyId", proto.KeyId, 4, undefined, "_keyId"]]],
[proto.SyncdValue, "proto.SyncdValue", [["blob", "bytes", 1, undefined, "_blob"]]],
[proto.SyncdVersion, "proto.SyncdVersion", [["version", "uint64", 1, undefined, "_version"]]],
[proto.TapLinkAction, "proto.TapLinkAction", [["title", "string", 1, undefined, "_title"], ["tapUrl", "string", 2, undefined, "_tapUrl"]]],
[proto.TemplateButton, "proto.TemplateButton", [["index", "uint32", 4, undefined, "_index"], ["quickReplyButton", proto.TemplateButton.QuickReplyButton, 1, undefined, "button"], ["urlButton", proto.TemplateButton.URLButton, 2, undefined, "button"], ["callButton", proto.TemplateButton.CallButton, 3, undefined, "button"]], [1,2,3,0]],
[proto.TemplateButton.CallButton, "proto.TemplateButton.CallButton", [["displayText", proto.Message.HighlyStructuredMessage, 1, undefined, "_displayText"], ["phoneNumber", proto.Message.HighlyStructuredMessage, 2, undefined, "_phoneNumber"]]],
[proto.TemplateButton.QuickReplyButton, "proto.TemplateButton.QuickReplyButton", [["displayText", proto.Message.HighlyStructuredMessage, 1, undefined, "_displayText"], ["id", "string", 2, undefined, "_id"]]],
[proto.TemplateButton.URLButton, "proto.TemplateButton.URLButton", [["displayText", proto.Message.HighlyStructuredMessage, 1, undefined, "_displayText"], ["url", proto.Message.HighlyStructuredMessage, 2, undefined, "_url"]]],
[proto.ThreadID, "proto.ThreadID", [["threadType", proto.ThreadID.ThreadType, 1, undefined, "_threadType"], ["threadKey", proto.MessageKey, 2, undefined, "_threadKey"]]],
[proto.UrlTrackingMap, "proto.UrlTrackingMap", [["urlTrackingMapElements", proto.UrlTrackingMap.UrlTrackingMapElement, 1, "array"]]],
[proto.UrlTrackingMap.UrlTrackingMapElement, "proto.UrlTrackingMap.UrlTrackingMapElement", [["originalUrl", "string", 1, undefined, "_originalUrl"], ["unconsentedUsersUrl", "string", 2, undefined, "_unconsentedUsersUrl"], ["consentedUsersUrl", "string", 3, undefined, "_consentedUsersUrl"], ["cardIndex", "uint32", 4, undefined, "_cardIndex"]]],
[proto.UserPassword, "proto.UserPassword", [["encoding", proto.UserPassword.Encoding, 1, undefined, "_encoding"], ["transformer", proto.UserPassword.Transformer, 2, undefined, "_transformer"], ["transformerArg", proto.UserPassword.TransformerArg, 3, "array"], ["transformedData", "bytes", 4, undefined, "_transformedData"]]],
[proto.UserPassword.TransformerArg, "proto.UserPassword.TransformerArg", [["key", "string", 1, undefined, "_key"], ["value", proto.UserPassword.TransformerArg.Value, 2, undefined, "_value"]]],
[proto.UserPassword.TransformerArg.Value, "proto.UserPassword.TransformerArg.Value", [["asBlob", "bytes", 1, undefined, "value"], ["asUnsignedInteger", "uint32", 2, undefined, "value"]]],
[proto.UserReceipt, "proto.UserReceipt", [["userJid", "string", 1], ["receiptTimestamp", "int64", 2, undefined, "_receiptTimestamp"], ["readTimestamp", "int64", 3, undefined, "_readTimestamp"], ["playedTimestamp", "int64", 4, undefined, "_playedTimestamp"], ["pendingDeviceJid", "string", 5, "array"], ["deliveredDeviceJid", "string", 6, "array"]]],
[proto.VerifiedNameCertificate, "proto.VerifiedNameCertificate", [["details", "bytes", 1, undefined, "_details"], ["signature", "bytes", 2, undefined, "_signature"], ["serverSignature", "bytes", 3, undefined, "_serverSignature"]]],
[proto.VerifiedNameCertificate.Details, "proto.VerifiedNameCertificate.Details", [["serial", "uint64", 1, undefined, "_serial"], ["issuer", "string", 2, undefined, "_issuer"], ["verifiedName", "string", 4, undefined, "_verifiedName"], ["localizedNames", proto.LocalizedName, 8, "array"], ["issueTime", "uint64", 10, undefined, "_issueTime"]]],
[proto.WallpaperSettings, "proto.WallpaperSettings", [["filename", "string", 1, undefined, "_filename"], ["opacity", "uint32", 2, undefined, "_opacity"]]],
[proto.WebFeatures, "proto.WebFeatures", [["labelsDisplay", proto.WebFeatures.Flag, 1, undefined, "_labelsDisplay"], ["voipIndividualOutgoing", proto.WebFeatures.Flag, 2, undefined, "_voipIndividualOutgoing"], ["groupsV3", proto.WebFeatures.Flag, 3, undefined, "_groupsV3"], ["groupsV3Create", proto.WebFeatures.Flag, 4, undefined, "_groupsV3Create"], ["changeNumberV2", proto.WebFeatures.Flag, 5, undefined, "_changeNumberV2"], ["queryStatusV3Thumbnail", proto.WebFeatures.Flag, 6, undefined, "_queryStatusV3Thumbnail"], ["liveLocations", proto.WebFeatures.Flag, 7, undefined, "_liveLocations"], ["queryVname", proto.WebFeatures.Flag, 8, undefined, "_queryVname"], ["voipIndividualIncoming", proto.WebFeatures.Flag, 9, undefined, "_voipIndividualIncoming"], ["quickRepliesQuery", proto.WebFeatures.Flag, 10, undefined, "_quickRepliesQuery"], ["payments", proto.WebFeatures.Flag, 11, undefined, "_payments"], ["stickerPackQuery", proto.WebFeatures.Flag, 12, undefined, "_stickerPackQuery"], ["liveLocationsFinal", proto.WebFeatures.Flag, 13, undefined, "_liveLocationsFinal"], ["labelsEdit", proto.WebFeatures.Flag, 14, undefined, "_labelsEdit"], ["mediaUpload", proto.WebFeatures.Flag, 15, undefined, "_mediaUpload"], ["mediaUploadRichQuickReplies", proto.WebFeatures.Flag, 18, undefined, "_mediaUploadRichQuickReplies"], ["vnameV2", proto.WebFeatures.Flag, 19, undefined, "_vnameV2"], ["videoPlaybackUrl", proto.WebFeatures.Flag, 20, undefined, "_videoPlaybackUrl"], ["statusRanking", proto.WebFeatures.Flag, 21, undefined, "_statusRanking"], ["voipIndividualVideo", proto.WebFeatures.Flag, 22, undefined, "_voipIndividualVideo"], ["thirdPartyStickers", proto.WebFeatures.Flag, 23, undefined, "_thirdPartyStickers"], ["frequentlyForwardedSetting", proto.WebFeatures.Flag, 24, undefined, "_frequentlyForwardedSetting"], ["groupsV4JoinPermission", proto.WebFeatures.Flag, 25, undefined, "_groupsV4JoinPermission"], ["recentStickers", proto.WebFeatures.Flag, 26, undefined, "_recentStickers"], ["catalog", proto.WebFeatures.Flag, 27, undefined, "_catalog"], ["starredStickers", proto.WebFeatures.Flag, 28, undefined, "_starredStickers"], ["voipGroupCall", proto.WebFeatures.Flag, 29, undefined, "_voipGroupCall"], ["templateMessage", proto.WebFeatures.Flag, 30, undefined, "_templateMessage"], ["templateMessageInteractivity", proto.WebFeatures.Flag, 31, undefined, "_templateMessageInteractivity"], ["ephemeralMessages", proto.WebFeatures.Flag, 32, undefined, "_ephemeralMessages"], ["e2ENotificationSync", proto.WebFeatures.Flag, 33, undefined, "_e2ENotificationSync"], ["recentStickersV2", proto.WebFeatures.Flag, 34, undefined, "_recentStickersV2"], ["recentStickersV3", proto.WebFeatures.Flag, 36, undefined, "_recentStickersV3"], ["userNotice", proto.WebFeatures.Flag, 37, undefined, "_userNotice"], ["support", proto.WebFeatures.Flag, 39, undefined, "_support"], ["groupUiiCleanup", proto.WebFeatures.Flag, 40, undefined, "_groupUiiCleanup"], ["groupDogfoodingInternalOnly", proto.WebFeatures.Flag, 41, undefined, "_groupDogfoodingInternalOnly"], ["settingsSync", proto.WebFeatures.Flag, 42, undefined, "_settingsSync"], ["archiveV2", proto.WebFeatures.Flag, 43, undefined, "_archiveV2"], ["ephemeralAllowGroupMembers", proto.WebFeatures.Flag, 44, undefined, "_ephemeralAllowGroupMembers"], ["ephemeral24HDuration", proto.WebFeatures.Flag, 45, undefined, "_ephemeral24HDuration"], ["mdForceUpgrade", proto.WebFeatures.Flag, 46, undefined, "_mdForceUpgrade"], ["disappearingMode", proto.WebFeatures.Flag, 47, undefined, "_disappearingMode"], ["externalMdOptInAvailable", proto.WebFeatures.Flag, 48, undefined, "_externalMdOptInAvailable"], ["noDeleteMessageTimeLimit", proto.WebFeatures.Flag, 49, undefined, "_noDeleteMessageTimeLimit"]]],
[proto.WebMessageInfo, "proto.WebMessageInfo", [["key", proto.MessageKey, 1], ["message", proto.Message, 2, undefined, "_message"], ["messageTimestamp", "uint64", 3, undefined, "_messageTimestamp"], ["status", proto.WebMessageInfo.Status, 4, undefined, "_status"], ["participant", "string", 5, undefined, "_participant"], ["messageC2STimestamp", "uint64", 6, undefined, "_messageC2STimestamp"], ["ignore", "bool", 16, undefined, "_ignore"], ["starred", "bool", 17, undefined, "_starred"], ["broadcast", "bool", 18, undefined, "_broadcast"], ["pushName", "string", 19, undefined, "_pushName"], ["mediaCiphertextSha256", "bytes", 20, undefined, "_mediaCiphertextSha256"], ["multicast", "bool", 21, undefined, "_multicast"], ["urlText", "bool", 22, undefined, "_urlText"], ["urlNumber", "bool", 23, undefined, "_urlNumber"], ["messageStubType", proto.WebMessageInfo.StubType, 24, undefined, "_messageStubType"], ["clearMedia", "bool", 25, undefined, "_clearMedia"], ["messageStubParameters", "string", 26, "array"], ["duration", "uint32", 27, undefined, "_duration"], ["labels", "string", 28, "array"], ["paymentInfo", proto.PaymentInfo, 29, undefined, "_paymentInfo"], ["finalLiveLocation", proto.Message.LiveLocationMessage, 30, undefined, "_finalLiveLocation"], ["quotedPaymentInfo", proto.PaymentInfo, 31, undefined, "_quotedPaymentInfo"], ["ephemeralStartTimestamp", "uint64", 32, undefined, "_ephemeralStartTimestamp"], ["ephemeralDuration", "uint32", 33, undefined, "_ephemeralDuration"], ["ephemeralOffToOn", "bool", 34, undefined, "_ephemeralOffToOn"], ["ephemeralOutOfSync", "bool", 35, undefined, "_ephemeralOutOfSync"], ["bizPrivacyStatus", proto.WebMessageInfo.BizPrivacyStatus, 36, undefined, "_bizPrivacyStatus"], ["verifiedBizName", "string", 37, undefined, "_verifiedBizName"], ["mediaData", proto.MediaData, 38, undefined, "_mediaData"], ["photoChange", proto.PhotoChange, 39, undefined, "_photoChange"], ["userReceipt", proto.UserReceipt, 40, "array"], ["reactions", proto.Reaction, 41, "array"], ["quotedStickerData", proto.MediaData, 42, undefined, "_quotedStickerData"], ["futureproofData", "bytes", 43, undefined, "_futureproofData"], ["statusPsa", proto.StatusPSA, 44, undefined, "_statusPsa"], ["pollUpdates", proto.PollUpdate, 45, "array"], ["pollAdditionalMetadata", proto.PollAdditionalMetadata, 46, undefined, "_pollAdditionalMetadata"], ["agentId", "string", 47, undefined, "_agentId"], ["statusAlreadyViewed", "bool", 48, undefined, "_statusAlreadyViewed"], ["messageSecret", "bytes", 49, undefined, "_messageSecret"], ["keepInChat", proto.KeepInChat, 50, undefined, "_keepInChat"], ["originalSelfAuthorUserJidString", "string", 51, undefined, "_originalSelfAuthorUserJidString"], ["revokeMessageTimestamp", "uint64", 52, undefined, "_revokeMessageTimestamp"], ["pinInChat", proto.PinInChat, 54, undefined, "_pinInChat"], ["premiumMessageInfo", proto.PremiumMessageInfo, 55, undefined, "_premiumMessageInfo"], ["is1PBizBotMessage", "bool", 56, undefined, "_is1PBizBotMessage"], ["isGroupHistoryMessage", "bool", 57, undefined, "_isGroupHistoryMessage"], ["botMessageInvokerJid", "string", 58, undefined, "_botMessageInvokerJid"], ["commentMetadata", proto.CommentMetadata, 59, undefined, "_commentMetadata"], ["eventResponses", proto.EventResponse, 61, "array"], ["reportingTokenInfo", proto.ReportingTokenInfo, 62, undefined, "_reportingTokenInfo"], ["newsletterServerId", "uint64", 63, undefined, "_newsletterServerId"], ["eventAdditionalMetadata", proto.EventAdditionalMetadata, 64, undefined, "_eventAdditionalMetadata"], ["isMentionedInStatus", "bool", 65, undefined, "_isMentionedInStatus"], ["statusMentions", "string", 66, "array"], ["targetMessageId", proto.MessageKey, 67, undefined, "_targetMessageId"], ["messageAddOns", proto.MessageAddOn, 68, "array"], ["statusMentionMessageInfo", proto.StatusMentionMessage, 69, undefined, "_statusMentionMessageInfo"], ["isSupportAiMessage", "bool", 70, undefined, "_isSupportAiMessage"], ["statusMentionSources", "string", 71, "array"], ["supportAiCitations", proto.Citation, 72, "array"], ["botTargetId", "string", 73, undefined, "_botTargetId"], ["groupHistoryIndividualMessageInfo", proto.GroupHistoryIndividualMessageInfo, 74, undefined, "_groupHistoryIndividualMessageInfo"], ["groupHistoryBundleInfo", proto.GroupHistoryBundleInfo, 75, undefined, "_groupHistoryBundleInfo"], ["interactiveMessageAdditionalMetadata", proto.InteractiveMessageAdditionalMetadata, 76, undefined, "_interactiveMessageAdditionalMetadata"], ["quarantinedMessage", proto.QuarantinedMessage, 77, undefined, "_quarantinedMessage"]]],
[proto.WebNotificationsInfo, "proto.WebNotificationsInfo", [["timestamp", "uint64", 2, undefined, "_timestamp"], ["unreadChats", "uint32", 3, undefined, "_unreadChats"], ["notifyMessageCount", "uint32", 4, undefined, "_notifyMessageCount"], ["notifyMessages", proto.WebMessageInfo, 5, "array"]]]
]);
