/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_ads_googleads_v1_common_criteria_pb = require('../../../../../google/ads/googleads/v1/common/criteria_pb.js');
var google_ads_googleads_v1_common_extensions_pb = require('../../../../../google/ads/googleads/v1/common/extensions_pb.js');
var google_ads_googleads_v1_enums_extension_type_pb = require('../../../../../google/ads/googleads/v1/enums/extension_type_pb.js');
var google_ads_googleads_v1_enums_feed_item_status_pb = require('../../../../../google/ads/googleads/v1/enums/feed_item_status_pb.js');
var google_ads_googleads_v1_enums_feed_item_target_device_pb = require('../../../../../google/ads/googleads/v1/enums/feed_item_target_device_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
goog.exportSymbol('proto.google.ads.googleads.v1.resources.ExtensionFeedItem', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.repeatedFields_, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_);
};
goog.inherits(proto.google.ads.googleads.v1.resources.ExtensionFeedItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.ads.googleads.v1.resources.ExtensionFeedItem.displayName = 'proto.google.ads.googleads.v1.resources.ExtensionFeedItem';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.repeatedFields_ = [16];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_ = [[2,3,7,8,9,10,11,12,14,15],[18,19]];

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.ExtensionCase = {
  EXTENSION_NOT_SET: 0,
  SITELINK_FEED_ITEM: 2,
  STRUCTURED_SNIPPET_FEED_ITEM: 3,
  APP_FEED_ITEM: 7,
  CALL_FEED_ITEM: 8,
  CALLOUT_FEED_ITEM: 9,
  TEXT_MESSAGE_FEED_ITEM: 10,
  PRICE_FEED_ITEM: 11,
  PROMOTION_FEED_ITEM: 12,
  LOCATION_FEED_ITEM: 14,
  AFFILIATE_LOCATION_FEED_ITEM: 15
};

/**
 * @return {proto.google.ads.googleads.v1.resources.ExtensionFeedItem.ExtensionCase}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getExtensionCase = function() {
  return /** @type {proto.google.ads.googleads.v1.resources.ExtensionFeedItem.ExtensionCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0]));
};

/**
 * @enum {number}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.ServingResourceTargetingCase = {
  SERVING_RESOURCE_TARGETING_NOT_SET: 0,
  TARGETED_CAMPAIGN: 18,
  TARGETED_AD_GROUP: 19
};

/**
 * @return {proto.google.ads.googleads.v1.resources.ExtensionFeedItem.ServingResourceTargetingCase}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getServingResourceTargetingCase = function() {
  return /** @type {proto.google.ads.googleads.v1.resources.ExtensionFeedItem.ServingResourceTargetingCase} */(jspb.Message.computeOneofCase(this, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[1]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.toObject = function(opt_includeInstance) {
  return proto.google.ads.googleads.v1.resources.ExtensionFeedItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.ads.googleads.v1.resources.ExtensionFeedItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    extensionType: jspb.Message.getFieldWithDefault(msg, 13, 0),
    startDateTime: (f = msg.getStartDateTime()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    endDateTime: (f = msg.getEndDateTime()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    adSchedulesList: jspb.Message.toObjectList(msg.getAdSchedulesList(),
    google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo.toObject, includeInstance),
    device: jspb.Message.getFieldWithDefault(msg, 17, 0),
    targetedGeoTargetConstant: (f = msg.getTargetedGeoTargetConstant()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sitelinkFeedItem: (f = msg.getSitelinkFeedItem()) && google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem.toObject(includeInstance, f),
    structuredSnippetFeedItem: (f = msg.getStructuredSnippetFeedItem()) && google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem.toObject(includeInstance, f),
    appFeedItem: (f = msg.getAppFeedItem()) && google_ads_googleads_v1_common_extensions_pb.AppFeedItem.toObject(includeInstance, f),
    callFeedItem: (f = msg.getCallFeedItem()) && google_ads_googleads_v1_common_extensions_pb.CallFeedItem.toObject(includeInstance, f),
    calloutFeedItem: (f = msg.getCalloutFeedItem()) && google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem.toObject(includeInstance, f),
    textMessageFeedItem: (f = msg.getTextMessageFeedItem()) && google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem.toObject(includeInstance, f),
    priceFeedItem: (f = msg.getPriceFeedItem()) && google_ads_googleads_v1_common_extensions_pb.PriceFeedItem.toObject(includeInstance, f),
    promotionFeedItem: (f = msg.getPromotionFeedItem()) && google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem.toObject(includeInstance, f),
    locationFeedItem: (f = msg.getLocationFeedItem()) && google_ads_googleads_v1_common_extensions_pb.LocationFeedItem.toObject(includeInstance, f),
    affiliateLocationFeedItem: (f = msg.getAffiliateLocationFeedItem()) && google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem.toObject(includeInstance, f),
    targetedCampaign: (f = msg.getTargetedCampaign()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    targetedAdGroup: (f = msg.getTargetedAdGroup()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.ads.googleads.v1.resources.ExtensionFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.ads.googleads.v1.resources.ExtensionFeedItem;
  return proto.google.ads.googleads.v1.resources.ExtensionFeedItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.ads.googleads.v1.resources.ExtensionFeedItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.ads.googleads.v1.resources.ExtensionFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 13:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.ExtensionTypeEnum.ExtensionType} */ (reader.readEnum());
      msg.setExtensionType(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setStartDateTime(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setEndDateTime(value);
      break;
    case 16:
      var value = new google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo;
      reader.readMessage(value,google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo.deserializeBinaryFromReader);
      msg.addAdSchedules(value);
      break;
    case 17:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} */ (reader.readEnum());
      msg.setDevice(value);
      break;
    case 20:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTargetedGeoTargetConstant(value);
      break;
    case 4:
      var value = /** @type {!proto.google.ads.googleads.v1.enums.FeedItemStatusEnum.FeedItemStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem.deserializeBinaryFromReader);
      msg.setSitelinkFeedItem(value);
      break;
    case 3:
      var value = new google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem.deserializeBinaryFromReader);
      msg.setStructuredSnippetFeedItem(value);
      break;
    case 7:
      var value = new google_ads_googleads_v1_common_extensions_pb.AppFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.AppFeedItem.deserializeBinaryFromReader);
      msg.setAppFeedItem(value);
      break;
    case 8:
      var value = new google_ads_googleads_v1_common_extensions_pb.CallFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.CallFeedItem.deserializeBinaryFromReader);
      msg.setCallFeedItem(value);
      break;
    case 9:
      var value = new google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem.deserializeBinaryFromReader);
      msg.setCalloutFeedItem(value);
      break;
    case 10:
      var value = new google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem.deserializeBinaryFromReader);
      msg.setTextMessageFeedItem(value);
      break;
    case 11:
      var value = new google_ads_googleads_v1_common_extensions_pb.PriceFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.PriceFeedItem.deserializeBinaryFromReader);
      msg.setPriceFeedItem(value);
      break;
    case 12:
      var value = new google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem.deserializeBinaryFromReader);
      msg.setPromotionFeedItem(value);
      break;
    case 14:
      var value = new google_ads_googleads_v1_common_extensions_pb.LocationFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.LocationFeedItem.deserializeBinaryFromReader);
      msg.setLocationFeedItem(value);
      break;
    case 15:
      var value = new google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem;
      reader.readMessage(value,google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem.deserializeBinaryFromReader);
      msg.setAffiliateLocationFeedItem(value);
      break;
    case 18:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTargetedCampaign(value);
      break;
    case 19:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTargetedAdGroup(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.ads.googleads.v1.resources.ExtensionFeedItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.ads.googleads.v1.resources.ExtensionFeedItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExtensionType();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getStartDateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getEndDateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAdSchedulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f !== 0.0) {
    writer.writeEnum(
      17,
      f
    );
  }
  f = message.getTargetedGeoTargetConstant();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSitelinkFeedItem();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getStructuredSnippetFeedItem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getAppFeedItem();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_ads_googleads_v1_common_extensions_pb.AppFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getCallFeedItem();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_ads_googleads_v1_common_extensions_pb.CallFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getCalloutFeedItem();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getTextMessageFeedItem();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getPriceFeedItem();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_ads_googleads_v1_common_extensions_pb.PriceFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getPromotionFeedItem();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getLocationFeedItem();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_ads_googleads_v1_common_extensions_pb.LocationFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getAffiliateLocationFeedItem();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem.serializeBinaryToWriter
    );
  }
  f = message.getTargetedCampaign();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTargetedAdGroup();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string resource_name = 1;
 * @return {string}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setResourceName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.ads.googleads.v1.enums.ExtensionTypeEnum.ExtensionType extension_type = 13;
 * @return {!proto.google.ads.googleads.v1.enums.ExtensionTypeEnum.ExtensionType}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getExtensionType = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.ExtensionTypeEnum.ExtensionType} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.ExtensionTypeEnum.ExtensionType} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setExtensionType = function(value) {
  jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional google.protobuf.StringValue start_date_time = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getStartDateTime = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setStartDateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearStartDateTime = function() {
  this.setStartDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasStartDateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue end_date_time = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getEndDateTime = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setEndDateTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearEndDateTime = function() {
  this.setEndDateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasEndDateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated google.ads.googleads.v1.common.AdScheduleInfo ad_schedules = 16;
 * @return {!Array<!proto.google.ads.googleads.v1.common.AdScheduleInfo>}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getAdSchedulesList = function() {
  return /** @type{!Array<!proto.google.ads.googleads.v1.common.AdScheduleInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_ads_googleads_v1_common_criteria_pb.AdScheduleInfo, 16));
};


/** @param {!Array<!proto.google.ads.googleads.v1.common.AdScheduleInfo>} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setAdSchedulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.google.ads.googleads.v1.common.AdScheduleInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.ads.googleads.v1.common.AdScheduleInfo}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.addAdSchedules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.google.ads.googleads.v1.common.AdScheduleInfo, opt_index);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearAdSchedulesList = function() {
  this.setAdSchedulesList([]);
};


/**
 * optional google.ads.googleads.v1.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice device = 17;
 * @return {!proto.google.ads.googleads.v1.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getDevice = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.FeedItemTargetDeviceEnum.FeedItemTargetDevice} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setDevice = function(value) {
  jspb.Message.setProto3EnumField(this, 17, value);
};


/**
 * optional google.protobuf.StringValue targeted_geo_target_constant = 20;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getTargetedGeoTargetConstant = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 20));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setTargetedGeoTargetConstant = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearTargetedGeoTargetConstant = function() {
  this.setTargetedGeoTargetConstant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasTargetedGeoTargetConstant = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional google.ads.googleads.v1.enums.FeedItemStatusEnum.FeedItemStatus status = 4;
 * @return {!proto.google.ads.googleads.v1.enums.FeedItemStatusEnum.FeedItemStatus}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getStatus = function() {
  return /** @type {!proto.google.ads.googleads.v1.enums.FeedItemStatusEnum.FeedItemStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.google.ads.googleads.v1.enums.FeedItemStatusEnum.FeedItemStatus} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.ads.googleads.v1.common.SitelinkFeedItem sitelink_feed_item = 2;
 * @return {?proto.google.ads.googleads.v1.common.SitelinkFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getSitelinkFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.SitelinkFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.SitelinkFeedItem, 2));
};


/** @param {?proto.google.ads.googleads.v1.common.SitelinkFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setSitelinkFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearSitelinkFeedItem = function() {
  this.setSitelinkFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasSitelinkFeedItem = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.ads.googleads.v1.common.StructuredSnippetFeedItem structured_snippet_feed_item = 3;
 * @return {?proto.google.ads.googleads.v1.common.StructuredSnippetFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getStructuredSnippetFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.StructuredSnippetFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.StructuredSnippetFeedItem, 3));
};


/** @param {?proto.google.ads.googleads.v1.common.StructuredSnippetFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setStructuredSnippetFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearStructuredSnippetFeedItem = function() {
  this.setStructuredSnippetFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasStructuredSnippetFeedItem = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.ads.googleads.v1.common.AppFeedItem app_feed_item = 7;
 * @return {?proto.google.ads.googleads.v1.common.AppFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getAppFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.AppFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.AppFeedItem, 7));
};


/** @param {?proto.google.ads.googleads.v1.common.AppFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setAppFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearAppFeedItem = function() {
  this.setAppFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasAppFeedItem = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.ads.googleads.v1.common.CallFeedItem call_feed_item = 8;
 * @return {?proto.google.ads.googleads.v1.common.CallFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getCallFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.CallFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.CallFeedItem, 8));
};


/** @param {?proto.google.ads.googleads.v1.common.CallFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setCallFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearCallFeedItem = function() {
  this.setCallFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasCallFeedItem = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.ads.googleads.v1.common.CalloutFeedItem callout_feed_item = 9;
 * @return {?proto.google.ads.googleads.v1.common.CalloutFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getCalloutFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.CalloutFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.CalloutFeedItem, 9));
};


/** @param {?proto.google.ads.googleads.v1.common.CalloutFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setCalloutFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearCalloutFeedItem = function() {
  this.setCalloutFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasCalloutFeedItem = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.ads.googleads.v1.common.TextMessageFeedItem text_message_feed_item = 10;
 * @return {?proto.google.ads.googleads.v1.common.TextMessageFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getTextMessageFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.TextMessageFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.TextMessageFeedItem, 10));
};


/** @param {?proto.google.ads.googleads.v1.common.TextMessageFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setTextMessageFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearTextMessageFeedItem = function() {
  this.setTextMessageFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasTextMessageFeedItem = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.ads.googleads.v1.common.PriceFeedItem price_feed_item = 11;
 * @return {?proto.google.ads.googleads.v1.common.PriceFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getPriceFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.PriceFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.PriceFeedItem, 11));
};


/** @param {?proto.google.ads.googleads.v1.common.PriceFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setPriceFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearPriceFeedItem = function() {
  this.setPriceFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasPriceFeedItem = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.ads.googleads.v1.common.PromotionFeedItem promotion_feed_item = 12;
 * @return {?proto.google.ads.googleads.v1.common.PromotionFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getPromotionFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.PromotionFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.PromotionFeedItem, 12));
};


/** @param {?proto.google.ads.googleads.v1.common.PromotionFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setPromotionFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearPromotionFeedItem = function() {
  this.setPromotionFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasPromotionFeedItem = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.ads.googleads.v1.common.LocationFeedItem location_feed_item = 14;
 * @return {?proto.google.ads.googleads.v1.common.LocationFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getLocationFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.LocationFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.LocationFeedItem, 14));
};


/** @param {?proto.google.ads.googleads.v1.common.LocationFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setLocationFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearLocationFeedItem = function() {
  this.setLocationFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasLocationFeedItem = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.ads.googleads.v1.common.AffiliateLocationFeedItem affiliate_location_feed_item = 15;
 * @return {?proto.google.ads.googleads.v1.common.AffiliateLocationFeedItem}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getAffiliateLocationFeedItem = function() {
  return /** @type{?proto.google.ads.googleads.v1.common.AffiliateLocationFeedItem} */ (
    jspb.Message.getWrapperField(this, google_ads_googleads_v1_common_extensions_pb.AffiliateLocationFeedItem, 15));
};


/** @param {?proto.google.ads.googleads.v1.common.AffiliateLocationFeedItem|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setAffiliateLocationFeedItem = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[0], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearAffiliateLocationFeedItem = function() {
  this.setAffiliateLocationFeedItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasAffiliateLocationFeedItem = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.StringValue targeted_campaign = 18;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getTargetedCampaign = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 18));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setTargetedCampaign = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[1], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearTargetedCampaign = function() {
  this.setTargetedCampaign(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasTargetedCampaign = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.StringValue targeted_ad_group = 19;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.getTargetedAdGroup = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 19));
};


/** @param {?proto.google.protobuf.StringValue|undefined} value */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.setTargetedAdGroup = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.google.ads.googleads.v1.resources.ExtensionFeedItem.oneofGroups_[1], value);
};


proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.clearTargetedAdGroup = function() {
  this.setTargetedAdGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.ads.googleads.v1.resources.ExtensionFeedItem.prototype.hasTargetedAdGroup = function() {
  return jspb.Message.getField(this, 19) != null;
};


goog.object.extend(exports, proto.google.ads.googleads.v1.resources);
