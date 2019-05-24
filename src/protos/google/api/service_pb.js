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

var google_api_auth_pb = require('../../google/api/auth_pb.js');
var google_api_backend_pb = require('../../google/api/backend_pb.js');
var google_api_billing_pb = require('../../google/api/billing_pb.js');
var google_api_context_pb = require('../../google/api/context_pb.js');
var google_api_control_pb = require('../../google/api/control_pb.js');
var google_api_documentation_pb = require('../../google/api/documentation_pb.js');
var google_api_endpoint_pb = require('../../google/api/endpoint_pb.js');
var google_api_http_pb = require('../../google/api/http_pb.js');
var google_api_label_pb = require('../../google/api/label_pb.js');
var google_api_log_pb = require('../../google/api/log_pb.js');
var google_api_logging_pb = require('../../google/api/logging_pb.js');
var google_api_metric_pb = require('../../google/api/metric_pb.js');
var google_api_monitored_resource_pb = require('../../google/api/monitored_resource_pb.js');
var google_api_monitoring_pb = require('../../google/api/monitoring_pb.js');
var google_api_quota_pb = require('../../google/api/quota_pb.js');
var google_api_resource_pb = require('../../google/api/resource_pb.js');
var google_api_source_info_pb = require('../../google/api/source_info_pb.js');
var google_api_system_parameter_pb = require('../../google/api/system_parameter_pb.js');
var google_api_usage_pb = require('../../google/api/usage_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_api_pb = require('google-protobuf/google/protobuf/api_pb.js');
var google_protobuf_type_pb = require('google-protobuf/google/protobuf/type_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.exportSymbol('proto.google.api.Service', null, global);

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
proto.google.api.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Service.repeatedFields_, null);
};
goog.inherits(proto.google.api.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.Service.displayName = 'proto.google.api.Service';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Service.repeatedFields_ = [3,4,5,18,23,24,25];



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
proto.google.api.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    configVersion: (f = msg.getConfigVersion()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 33, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    producerProjectId: jspb.Message.getFieldWithDefault(msg, 22, ""),
    apisList: jspb.Message.toObjectList(msg.getApisList(),
    google_protobuf_api_pb.Api.toObject, includeInstance),
    typesList: jspb.Message.toObjectList(msg.getTypesList(),
    google_protobuf_type_pb.Type.toObject, includeInstance),
    enumsList: jspb.Message.toObjectList(msg.getEnumsList(),
    google_protobuf_type_pb.Enum.toObject, includeInstance),
    documentation: (f = msg.getDocumentation()) && google_api_documentation_pb.Documentation.toObject(includeInstance, f),
    backend: (f = msg.getBackend()) && google_api_backend_pb.Backend.toObject(includeInstance, f),
    http: (f = msg.getHttp()) && google_api_http_pb.Http.toObject(includeInstance, f),
    quota: (f = msg.getQuota()) && google_api_quota_pb.Quota.toObject(includeInstance, f),
    authentication: (f = msg.getAuthentication()) && google_api_auth_pb.Authentication.toObject(includeInstance, f),
    context: (f = msg.getContext()) && google_api_context_pb.Context.toObject(includeInstance, f),
    usage: (f = msg.getUsage()) && google_api_usage_pb.Usage.toObject(includeInstance, f),
    endpointsList: jspb.Message.toObjectList(msg.getEndpointsList(),
    google_api_endpoint_pb.Endpoint.toObject, includeInstance),
    control: (f = msg.getControl()) && google_api_control_pb.Control.toObject(includeInstance, f),
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    google_api_log_pb.LogDescriptor.toObject, includeInstance),
    metricsList: jspb.Message.toObjectList(msg.getMetricsList(),
    google_api_metric_pb.MetricDescriptor.toObject, includeInstance),
    monitoredResourcesList: jspb.Message.toObjectList(msg.getMonitoredResourcesList(),
    google_api_monitored_resource_pb.MonitoredResourceDescriptor.toObject, includeInstance),
    billing: (f = msg.getBilling()) && google_api_billing_pb.Billing.toObject(includeInstance, f),
    logging: (f = msg.getLogging()) && google_api_logging_pb.Logging.toObject(includeInstance, f),
    monitoring: (f = msg.getMonitoring()) && google_api_monitoring_pb.Monitoring.toObject(includeInstance, f),
    systemParameters: (f = msg.getSystemParameters()) && google_api_system_parameter_pb.SystemParameters.toObject(includeInstance, f),
    sourceInfo: (f = msg.getSourceInfo()) && google_api_source_info_pb.SourceInfo.toObject(includeInstance, f)
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
 * @return {!proto.google.api.Service}
 */
proto.google.api.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Service;
  return proto.google.api.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Service}
 */
proto.google.api.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 20:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setConfigVersion(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducerProjectId(value);
      break;
    case 3:
      var value = new google_protobuf_api_pb.Api;
      reader.readMessage(value,google_protobuf_api_pb.Api.deserializeBinaryFromReader);
      msg.addApis(value);
      break;
    case 4:
      var value = new google_protobuf_type_pb.Type;
      reader.readMessage(value,google_protobuf_type_pb.Type.deserializeBinaryFromReader);
      msg.addTypes(value);
      break;
    case 5:
      var value = new google_protobuf_type_pb.Enum;
      reader.readMessage(value,google_protobuf_type_pb.Enum.deserializeBinaryFromReader);
      msg.addEnums(value);
      break;
    case 6:
      var value = new google_api_documentation_pb.Documentation;
      reader.readMessage(value,google_api_documentation_pb.Documentation.deserializeBinaryFromReader);
      msg.setDocumentation(value);
      break;
    case 8:
      var value = new google_api_backend_pb.Backend;
      reader.readMessage(value,google_api_backend_pb.Backend.deserializeBinaryFromReader);
      msg.setBackend(value);
      break;
    case 9:
      var value = new google_api_http_pb.Http;
      reader.readMessage(value,google_api_http_pb.Http.deserializeBinaryFromReader);
      msg.setHttp(value);
      break;
    case 10:
      var value = new google_api_quota_pb.Quota;
      reader.readMessage(value,google_api_quota_pb.Quota.deserializeBinaryFromReader);
      msg.setQuota(value);
      break;
    case 11:
      var value = new google_api_auth_pb.Authentication;
      reader.readMessage(value,google_api_auth_pb.Authentication.deserializeBinaryFromReader);
      msg.setAuthentication(value);
      break;
    case 12:
      var value = new google_api_context_pb.Context;
      reader.readMessage(value,google_api_context_pb.Context.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 15:
      var value = new google_api_usage_pb.Usage;
      reader.readMessage(value,google_api_usage_pb.Usage.deserializeBinaryFromReader);
      msg.setUsage(value);
      break;
    case 18:
      var value = new google_api_endpoint_pb.Endpoint;
      reader.readMessage(value,google_api_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.addEndpoints(value);
      break;
    case 21:
      var value = new google_api_control_pb.Control;
      reader.readMessage(value,google_api_control_pb.Control.deserializeBinaryFromReader);
      msg.setControl(value);
      break;
    case 23:
      var value = new google_api_log_pb.LogDescriptor;
      reader.readMessage(value,google_api_log_pb.LogDescriptor.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    case 24:
      var value = new google_api_metric_pb.MetricDescriptor;
      reader.readMessage(value,google_api_metric_pb.MetricDescriptor.deserializeBinaryFromReader);
      msg.addMetrics(value);
      break;
    case 25:
      var value = new google_api_monitored_resource_pb.MonitoredResourceDescriptor;
      reader.readMessage(value,google_api_monitored_resource_pb.MonitoredResourceDescriptor.deserializeBinaryFromReader);
      msg.addMonitoredResources(value);
      break;
    case 26:
      var value = new google_api_billing_pb.Billing;
      reader.readMessage(value,google_api_billing_pb.Billing.deserializeBinaryFromReader);
      msg.setBilling(value);
      break;
    case 27:
      var value = new google_api_logging_pb.Logging;
      reader.readMessage(value,google_api_logging_pb.Logging.deserializeBinaryFromReader);
      msg.setLogging(value);
      break;
    case 28:
      var value = new google_api_monitoring_pb.Monitoring;
      reader.readMessage(value,google_api_monitoring_pb.Monitoring.deserializeBinaryFromReader);
      msg.setMonitoring(value);
      break;
    case 29:
      var value = new google_api_system_parameter_pb.SystemParameters;
      reader.readMessage(value,google_api_system_parameter_pb.SystemParameters.deserializeBinaryFromReader);
      msg.setSystemParameters(value);
      break;
    case 37:
      var value = new google_api_source_info_pb.SourceInfo;
      reader.readMessage(value,google_api_source_info_pb.SourceInfo.deserializeBinaryFromReader);
      msg.setSourceInfo(value);
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
proto.google.api.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigVersion();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProducerProjectId();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getApisList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      google_protobuf_api_pb.Api.serializeBinaryToWriter
    );
  }
  f = message.getTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_protobuf_type_pb.Type.serializeBinaryToWriter
    );
  }
  f = message.getEnumsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      google_protobuf_type_pb.Enum.serializeBinaryToWriter
    );
  }
  f = message.getDocumentation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_api_documentation_pb.Documentation.serializeBinaryToWriter
    );
  }
  f = message.getBackend();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_api_backend_pb.Backend.serializeBinaryToWriter
    );
  }
  f = message.getHttp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_api_http_pb.Http.serializeBinaryToWriter
    );
  }
  f = message.getQuota();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_api_quota_pb.Quota.serializeBinaryToWriter
    );
  }
  f = message.getAuthentication();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_api_auth_pb.Authentication.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_api_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getUsage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_api_usage_pb.Usage.serializeBinaryToWriter
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      google_api_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getControl();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      google_api_control_pb.Control.serializeBinaryToWriter
    );
  }
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      google_api_log_pb.LogDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      google_api_metric_pb.MetricDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getMonitoredResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      google_api_monitored_resource_pb.MonitoredResourceDescriptor.serializeBinaryToWriter
    );
  }
  f = message.getBilling();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      google_api_billing_pb.Billing.serializeBinaryToWriter
    );
  }
  f = message.getLogging();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      google_api_logging_pb.Logging.serializeBinaryToWriter
    );
  }
  f = message.getMonitoring();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      google_api_monitoring_pb.Monitoring.serializeBinaryToWriter
    );
  }
  f = message.getSystemParameters();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      google_api_system_parameter_pb.SystemParameters.serializeBinaryToWriter
    );
  }
  f = message.getSourceInfo();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      google_api_source_info_pb.SourceInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value config_version = 20;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.google.api.Service.prototype.getConfigVersion = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 20));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.google.api.Service.prototype.setConfigVersion = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


proto.google.api.Service.prototype.clearConfigVersion = function() {
  this.setConfigVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasConfigVersion = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.api.Service.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.google.api.Service.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 33;
 * @return {string}
 */
proto.google.api.Service.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/** @param {string} value */
proto.google.api.Service.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.google.api.Service.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.google.api.Service.prototype.setTitle = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string producer_project_id = 22;
 * @return {string}
 */
proto.google.api.Service.prototype.getProducerProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/** @param {string} value */
proto.google.api.Service.prototype.setProducerProjectId = function(value) {
  jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * repeated google.protobuf.Api apis = 3;
 * @return {!Array<!proto.google.protobuf.Api>}
 */
proto.google.api.Service.prototype.getApisList = function() {
  return /** @type{!Array<!proto.google.protobuf.Api>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_api_pb.Api, 3));
};


/** @param {!Array<!proto.google.protobuf.Api>} value */
proto.google.api.Service.prototype.setApisList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.protobuf.Api=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Api}
 */
proto.google.api.Service.prototype.addApis = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.protobuf.Api, opt_index);
};


proto.google.api.Service.prototype.clearApisList = function() {
  this.setApisList([]);
};


/**
 * repeated google.protobuf.Type types = 4;
 * @return {!Array<!proto.google.protobuf.Type>}
 */
proto.google.api.Service.prototype.getTypesList = function() {
  return /** @type{!Array<!proto.google.protobuf.Type>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_type_pb.Type, 4));
};


/** @param {!Array<!proto.google.protobuf.Type>} value */
proto.google.api.Service.prototype.setTypesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.protobuf.Type=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Type}
 */
proto.google.api.Service.prototype.addTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.protobuf.Type, opt_index);
};


proto.google.api.Service.prototype.clearTypesList = function() {
  this.setTypesList([]);
};


/**
 * repeated google.protobuf.Enum enums = 5;
 * @return {!Array<!proto.google.protobuf.Enum>}
 */
proto.google.api.Service.prototype.getEnumsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Enum>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_type_pb.Enum, 5));
};


/** @param {!Array<!proto.google.protobuf.Enum>} value */
proto.google.api.Service.prototype.setEnumsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.protobuf.Enum=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Enum}
 */
proto.google.api.Service.prototype.addEnums = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.protobuf.Enum, opt_index);
};


proto.google.api.Service.prototype.clearEnumsList = function() {
  this.setEnumsList([]);
};


/**
 * optional Documentation documentation = 6;
 * @return {?proto.google.api.Documentation}
 */
proto.google.api.Service.prototype.getDocumentation = function() {
  return /** @type{?proto.google.api.Documentation} */ (
    jspb.Message.getWrapperField(this, google_api_documentation_pb.Documentation, 6));
};


/** @param {?proto.google.api.Documentation|undefined} value */
proto.google.api.Service.prototype.setDocumentation = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.google.api.Service.prototype.clearDocumentation = function() {
  this.setDocumentation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasDocumentation = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Backend backend = 8;
 * @return {?proto.google.api.Backend}
 */
proto.google.api.Service.prototype.getBackend = function() {
  return /** @type{?proto.google.api.Backend} */ (
    jspb.Message.getWrapperField(this, google_api_backend_pb.Backend, 8));
};


/** @param {?proto.google.api.Backend|undefined} value */
proto.google.api.Service.prototype.setBackend = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.google.api.Service.prototype.clearBackend = function() {
  this.setBackend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasBackend = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Http http = 9;
 * @return {?proto.google.api.Http}
 */
proto.google.api.Service.prototype.getHttp = function() {
  return /** @type{?proto.google.api.Http} */ (
    jspb.Message.getWrapperField(this, google_api_http_pb.Http, 9));
};


/** @param {?proto.google.api.Http|undefined} value */
proto.google.api.Service.prototype.setHttp = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.google.api.Service.prototype.clearHttp = function() {
  this.setHttp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasHttp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Quota quota = 10;
 * @return {?proto.google.api.Quota}
 */
proto.google.api.Service.prototype.getQuota = function() {
  return /** @type{?proto.google.api.Quota} */ (
    jspb.Message.getWrapperField(this, google_api_quota_pb.Quota, 10));
};


/** @param {?proto.google.api.Quota|undefined} value */
proto.google.api.Service.prototype.setQuota = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.google.api.Service.prototype.clearQuota = function() {
  this.setQuota(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasQuota = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Authentication authentication = 11;
 * @return {?proto.google.api.Authentication}
 */
proto.google.api.Service.prototype.getAuthentication = function() {
  return /** @type{?proto.google.api.Authentication} */ (
    jspb.Message.getWrapperField(this, google_api_auth_pb.Authentication, 11));
};


/** @param {?proto.google.api.Authentication|undefined} value */
proto.google.api.Service.prototype.setAuthentication = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.google.api.Service.prototype.clearAuthentication = function() {
  this.setAuthentication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasAuthentication = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Context context = 12;
 * @return {?proto.google.api.Context}
 */
proto.google.api.Service.prototype.getContext = function() {
  return /** @type{?proto.google.api.Context} */ (
    jspb.Message.getWrapperField(this, google_api_context_pb.Context, 12));
};


/** @param {?proto.google.api.Context|undefined} value */
proto.google.api.Service.prototype.setContext = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


proto.google.api.Service.prototype.clearContext = function() {
  this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasContext = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Usage usage = 15;
 * @return {?proto.google.api.Usage}
 */
proto.google.api.Service.prototype.getUsage = function() {
  return /** @type{?proto.google.api.Usage} */ (
    jspb.Message.getWrapperField(this, google_api_usage_pb.Usage, 15));
};


/** @param {?proto.google.api.Usage|undefined} value */
proto.google.api.Service.prototype.setUsage = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


proto.google.api.Service.prototype.clearUsage = function() {
  this.setUsage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasUsage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated Endpoint endpoints = 18;
 * @return {!Array<!proto.google.api.Endpoint>}
 */
proto.google.api.Service.prototype.getEndpointsList = function() {
  return /** @type{!Array<!proto.google.api.Endpoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_endpoint_pb.Endpoint, 18));
};


/** @param {!Array<!proto.google.api.Endpoint>} value */
proto.google.api.Service.prototype.setEndpointsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.google.api.Endpoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.Endpoint}
 */
proto.google.api.Service.prototype.addEndpoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.google.api.Endpoint, opt_index);
};


proto.google.api.Service.prototype.clearEndpointsList = function() {
  this.setEndpointsList([]);
};


/**
 * optional Control control = 21;
 * @return {?proto.google.api.Control}
 */
proto.google.api.Service.prototype.getControl = function() {
  return /** @type{?proto.google.api.Control} */ (
    jspb.Message.getWrapperField(this, google_api_control_pb.Control, 21));
};


/** @param {?proto.google.api.Control|undefined} value */
proto.google.api.Service.prototype.setControl = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


proto.google.api.Service.prototype.clearControl = function() {
  this.setControl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasControl = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated LogDescriptor logs = 23;
 * @return {!Array<!proto.google.api.LogDescriptor>}
 */
proto.google.api.Service.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.google.api.LogDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_log_pb.LogDescriptor, 23));
};


/** @param {!Array<!proto.google.api.LogDescriptor>} value */
proto.google.api.Service.prototype.setLogsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.google.api.LogDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.LogDescriptor}
 */
proto.google.api.Service.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.google.api.LogDescriptor, opt_index);
};


proto.google.api.Service.prototype.clearLogsList = function() {
  this.setLogsList([]);
};


/**
 * repeated MetricDescriptor metrics = 24;
 * @return {!Array<!proto.google.api.MetricDescriptor>}
 */
proto.google.api.Service.prototype.getMetricsList = function() {
  return /** @type{!Array<!proto.google.api.MetricDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_metric_pb.MetricDescriptor, 24));
};


/** @param {!Array<!proto.google.api.MetricDescriptor>} value */
proto.google.api.Service.prototype.setMetricsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.google.api.MetricDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.MetricDescriptor}
 */
proto.google.api.Service.prototype.addMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.google.api.MetricDescriptor, opt_index);
};


proto.google.api.Service.prototype.clearMetricsList = function() {
  this.setMetricsList([]);
};


/**
 * repeated MonitoredResourceDescriptor monitored_resources = 25;
 * @return {!Array<!proto.google.api.MonitoredResourceDescriptor>}
 */
proto.google.api.Service.prototype.getMonitoredResourcesList = function() {
  return /** @type{!Array<!proto.google.api.MonitoredResourceDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_monitored_resource_pb.MonitoredResourceDescriptor, 25));
};


/** @param {!Array<!proto.google.api.MonitoredResourceDescriptor>} value */
proto.google.api.Service.prototype.setMonitoredResourcesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.google.api.MonitoredResourceDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.MonitoredResourceDescriptor}
 */
proto.google.api.Service.prototype.addMonitoredResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.google.api.MonitoredResourceDescriptor, opt_index);
};


proto.google.api.Service.prototype.clearMonitoredResourcesList = function() {
  this.setMonitoredResourcesList([]);
};


/**
 * optional Billing billing = 26;
 * @return {?proto.google.api.Billing}
 */
proto.google.api.Service.prototype.getBilling = function() {
  return /** @type{?proto.google.api.Billing} */ (
    jspb.Message.getWrapperField(this, google_api_billing_pb.Billing, 26));
};


/** @param {?proto.google.api.Billing|undefined} value */
proto.google.api.Service.prototype.setBilling = function(value) {
  jspb.Message.setWrapperField(this, 26, value);
};


proto.google.api.Service.prototype.clearBilling = function() {
  this.setBilling(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasBilling = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Logging logging = 27;
 * @return {?proto.google.api.Logging}
 */
proto.google.api.Service.prototype.getLogging = function() {
  return /** @type{?proto.google.api.Logging} */ (
    jspb.Message.getWrapperField(this, google_api_logging_pb.Logging, 27));
};


/** @param {?proto.google.api.Logging|undefined} value */
proto.google.api.Service.prototype.setLogging = function(value) {
  jspb.Message.setWrapperField(this, 27, value);
};


proto.google.api.Service.prototype.clearLogging = function() {
  this.setLogging(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasLogging = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Monitoring monitoring = 28;
 * @return {?proto.google.api.Monitoring}
 */
proto.google.api.Service.prototype.getMonitoring = function() {
  return /** @type{?proto.google.api.Monitoring} */ (
    jspb.Message.getWrapperField(this, google_api_monitoring_pb.Monitoring, 28));
};


/** @param {?proto.google.api.Monitoring|undefined} value */
proto.google.api.Service.prototype.setMonitoring = function(value) {
  jspb.Message.setWrapperField(this, 28, value);
};


proto.google.api.Service.prototype.clearMonitoring = function() {
  this.setMonitoring(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasMonitoring = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional SystemParameters system_parameters = 29;
 * @return {?proto.google.api.SystemParameters}
 */
proto.google.api.Service.prototype.getSystemParameters = function() {
  return /** @type{?proto.google.api.SystemParameters} */ (
    jspb.Message.getWrapperField(this, google_api_system_parameter_pb.SystemParameters, 29));
};


/** @param {?proto.google.api.SystemParameters|undefined} value */
proto.google.api.Service.prototype.setSystemParameters = function(value) {
  jspb.Message.setWrapperField(this, 29, value);
};


proto.google.api.Service.prototype.clearSystemParameters = function() {
  this.setSystemParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasSystemParameters = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional SourceInfo source_info = 37;
 * @return {?proto.google.api.SourceInfo}
 */
proto.google.api.Service.prototype.getSourceInfo = function() {
  return /** @type{?proto.google.api.SourceInfo} */ (
    jspb.Message.getWrapperField(this, google_api_source_info_pb.SourceInfo, 37));
};


/** @param {?proto.google.api.SourceInfo|undefined} value */
proto.google.api.Service.prototype.setSourceInfo = function(value) {
  jspb.Message.setWrapperField(this, 37, value);
};


proto.google.api.Service.prototype.clearSourceInfo = function() {
  this.setSourceInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.Service.prototype.hasSourceInfo = function() {
  return jspb.Message.getField(this, 37) != null;
};


goog.object.extend(exports, proto.google.api);
