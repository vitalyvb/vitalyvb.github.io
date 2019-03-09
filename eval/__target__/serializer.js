// Transcrypt'ed from Python, 2019-03-09 12:41:35
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {CollectionNode, MappingNode, Node, ScalarNode, SequenceNode} from './nodes.js';
import {AliasEvent, CollectionEndEvent, CollectionStartEvent, DocumentEndEvent, DocumentStartEvent, Event, MappingEndEvent, MappingStartEvent, NodeEvent, ScalarEvent, SequenceEndEvent, SequenceStartEvent, StreamEndEvent, StreamStartEvent} from './events.js';
import {YAMLError} from './error.js';
var __name__ = 'serializer';
export var __all__ = ['Serializer', 'SerializerError'];
export var SerializerError =  __class__ ('SerializerError', [YAMLError], {
	__module__: __name__,
});
export var Serializer =  __class__ ('Serializer', [object], {
	__module__: __name__,
	ANCHOR_TEMPLATE: 'id%03d',
	get __init__ () {return __get__ (this, function (self, encoding, explicit_start, explicit_end, version, tags) {
		if (typeof encoding == 'undefined' || (encoding != null && encoding.hasOwnProperty ("__kwargtrans__"))) {;
			var encoding = null;
		};
		if (typeof explicit_start == 'undefined' || (explicit_start != null && explicit_start.hasOwnProperty ("__kwargtrans__"))) {;
			var explicit_start = null;
		};
		if (typeof explicit_end == 'undefined' || (explicit_end != null && explicit_end.hasOwnProperty ("__kwargtrans__"))) {;
			var explicit_end = null;
		};
		if (typeof version == 'undefined' || (version != null && version.hasOwnProperty ("__kwargtrans__"))) {;
			var version = null;
		};
		if (typeof tags == 'undefined' || (tags != null && tags.hasOwnProperty ("__kwargtrans__"))) {;
			var tags = null;
		};
		self.use_encoding = encoding;
		self.use_explicit_start = explicit_start;
		self.use_explicit_end = explicit_end;
		self.use_version = version;
		self.use_tags = tags;
		self.serialized_nodes = dict ({});
		self.anchors = dict ({});
		self.last_anchor_id = 0;
		self.closed = null;
	});},
	get open () {return __get__ (this, function (self) {
		if (self.closed === null) {
			self.emit (StreamStartEvent (__kwargtrans__ ({encoding: self.use_encoding})));
			self.closed = false;
		}
		else if (self.closed) {
			var __except0__ = SerializerError ('serializer is closed');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else {
			var __except0__ = SerializerError ('serializer is already opened');
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get close () {return __get__ (this, function (self) {
		if (self.closed === null) {
			var __except0__ = SerializerError ('serializer is not opened');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else if (!(self.closed)) {
			self.emit (StreamEndEvent ());
			self.closed = true;
		}
	});},
	get serialize () {return __get__ (this, function (self, node) {
		if (self.closed === null) {
			var __except0__ = SerializerError ('serializer is not opened');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		else if (self.closed) {
			var __except0__ = SerializerError ('serializer is closed');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self.emit (DocumentStartEvent (__kwargtrans__ ({explicit: self.use_explicit_start, version: self.use_version, tags: self.use_tags})));
		self.anchor_node (node);
		self.serialize_node (node, null, null);
		self.emit (DocumentEndEvent (__kwargtrans__ ({explicit: self.use_explicit_end})));
		self.serialized_nodes = dict ({});
		self.anchors = dict ({});
		self.last_anchor_id = 0;
	});},
	get anchor_node () {return __get__ (this, function (self, node) {
		if (__in__ (node, self.anchors)) {
			if (self.anchors [node] === null) {
				self.anchors [node] = self.generate_anchor (node);
			}
		}
		else {
			self.anchors [node] = null;
			if (isinstance (node, SequenceNode)) {
				for (var item of node.value) {
					self.anchor_node (item);
				}
			}
			else if (isinstance (node, MappingNode)) {
				for (var [key, value] of node.value) {
					self.anchor_node (key);
					self.anchor_node (value);
				}
			}
		}
	});},
	get generate_anchor () {return __get__ (this, function (self, node) {
		self.last_anchor_id++;
		return __mod__ (self.ANCHOR_TEMPLATE, self.last_anchor_id);
	});},
	get serialize_node () {return __get__ (this, function (self, node, parent, index) {
		var alias = self.anchors [node];
		if (__in__ (node, self.serialized_nodes)) {
			self.emit (AliasEvent (alias));
		}
		else {
			self.serialized_nodes [node] = true;
			self.descend_resolver (parent, index);
			if (isinstance (node, ScalarNode)) {
				var detected_tag = self.resolve (ScalarNode, node.value, tuple ([true, false]));
				var default_tag = self.resolve (ScalarNode, node.value, tuple ([false, true]));
				var implicit = tuple ([node.tag == detected_tag, node.tag == default_tag]);
				self.emit (ScalarEvent (alias, node.tag, implicit, node.value, __kwargtrans__ ({style: node.style})));
			}
			else if (isinstance (node, SequenceNode)) {
				var implicit = node.tag == self.resolve (SequenceNode, node.value, true);
				self.emit (SequenceStartEvent (alias, node.tag, implicit, __kwargtrans__ ({flow_style: node.flow_style})));
				var index = 0;
				for (var item of node.value) {
					self.serialize_node (item, node, index);
					index++;
				}
				self.emit (SequenceEndEvent ());
			}
			else if (isinstance (node, MappingNode)) {
				var implicit = node.tag == self.resolve (MappingNode, node.value, true);
				self.emit (MappingStartEvent (alias, node.tag, implicit, __kwargtrans__ ({flow_style: node.flow_style})));
				for (var [key, value] of node.value) {
					self.serialize_node (key, node, null);
					self.serialize_node (value, node, key);
				}
				self.emit (MappingEndEvent ());
			}
			self.ascend_resolver ();
		}
	});}
});

//# sourceMappingURL=serializer.map