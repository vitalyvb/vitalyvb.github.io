// Transcrypt'ed from Python, 2019-03-09 12:41:35
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {AliasEvent, CollectionEndEvent, CollectionStartEvent, DocumentEndEvent, DocumentStartEvent, Event, MappingEndEvent, MappingStartEvent, NodeEvent, ScalarEvent, SequenceEndEvent, SequenceStartEvent, StreamEndEvent, StreamStartEvent} from './events.js';
import {YAMLError} from './error.js';
var __name__ = 'emitter';
export var __all__ = ['Emitter', 'EmitterError'];
export var EmitterError =  __class__ ('EmitterError', [YAMLError], {
	__module__: __name__,
});
export var ScalarAnalysis =  __class__ ('ScalarAnalysis', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, scalar, empty, multiline, allow_flow_plain, allow_block_plain, allow_single_quoted, allow_double_quoted, allow_block) {
		self.scalar = scalar;
		self.empty = empty;
		self.multiline = multiline;
		self.allow_flow_plain = allow_flow_plain;
		self.allow_block_plain = allow_block_plain;
		self.allow_single_quoted = allow_single_quoted;
		self.allow_double_quoted = allow_double_quoted;
		self.allow_block = allow_block;
	});}
});
export var Emitter =  __class__ ('Emitter', [object], {
	__module__: __name__,
	DEFAULT_TAG_PREFIXES: dict ({'!': '!', 'tag:yaml.org,2002:': '!!'}),
	get __init__ () {return __get__ (this, function (self, stream, canonical, indent, width, allow_unicode, line_break) {
		if (typeof canonical == 'undefined' || (canonical != null && canonical.hasOwnProperty ("__kwargtrans__"))) {;
			var canonical = null;
		};
		if (typeof indent == 'undefined' || (indent != null && indent.hasOwnProperty ("__kwargtrans__"))) {;
			var indent = null;
		};
		if (typeof width == 'undefined' || (width != null && width.hasOwnProperty ("__kwargtrans__"))) {;
			var width = null;
		};
		if (typeof allow_unicode == 'undefined' || (allow_unicode != null && allow_unicode.hasOwnProperty ("__kwargtrans__"))) {;
			var allow_unicode = null;
		};
		if (typeof line_break == 'undefined' || (line_break != null && line_break.hasOwnProperty ("__kwargtrans__"))) {;
			var line_break = null;
		};
		self.stream = stream;
		self.encoding = null;
		self.states = [];
		self.state = self.expect_stream_start;
		self.events = [];
		self.event = null;
		self.indents = [];
		self.indent = null;
		self.flow_level = 0;
		self.root_context = false;
		self.sequence_context = false;
		self.mapping_context = false;
		self.simple_key_context = false;
		self.line = 0;
		self.column = 0;
		self.whitespace = true;
		self.indention = true;
		self.open_ended = false;
		self.canonical = canonical;
		self.allow_unicode = allow_unicode;
		self.best_indent = 2;
		if (indent && (1 < indent && indent < 10)) {
			self.best_indent = indent;
		}
		self.best_width = 80;
		if (width && width > self.best_indent * 2) {
			self.best_width = width;
		}
		self.best_line_break = '\n';
		if (__in__ (line_break, ['\r', '\n', '\r\n'])) {
			self.best_line_break = line_break;
		}
		self.tag_prefixes = null;
		self.prepared_anchor = null;
		self.prepared_tag = null;
		self.analysis = null;
		self.style = null;
	});},
	get dispose () {return __get__ (this, function (self) {
		self.states = [];
		self.state = null;
	});},
	get emit () {return __get__ (this, function (self, event) {
		self.events.append (event);
		while (!(self.need_more_events ())) {
			self.event = self.events.py_pop (0);
			self.state ();
			self.event = null;
		}
	});},
	get need_more_events () {return __get__ (this, function (self) {
		if (!(self.events)) {
			return true;
		}
		var event = self.events [0];
		if (isinstance (event, DocumentStartEvent)) {
			return self.need_events (1);
		}
		else if (isinstance (event, SequenceStartEvent)) {
			return self.need_events (2);
		}
		else if (isinstance (event, MappingStartEvent)) {
			return self.need_events (3);
		}
		else {
			return false;
		}
	});},
	get need_events () {return __get__ (this, function (self, count) {
		var level = 0;
		for (var event of self.events.__getslice__ (1, null, 1)) {
			if (isinstance (event, tuple ([DocumentStartEvent, CollectionStartEvent]))) {
				level++;
			}
			else if (isinstance (event, tuple ([DocumentEndEvent, CollectionEndEvent]))) {
				level--;
			}
			else if (isinstance (event, StreamEndEvent)) {
				var level = -(1);
			}
			if (level < 0) {
				return false;
			}
		}
		return len (self.events) < count + 1;
	});},
	get increase_indent () {return __get__ (this, function (self, flow, indentless) {
		if (typeof flow == 'undefined' || (flow != null && flow.hasOwnProperty ("__kwargtrans__"))) {;
			var flow = false;
		};
		if (typeof indentless == 'undefined' || (indentless != null && indentless.hasOwnProperty ("__kwargtrans__"))) {;
			var indentless = false;
		};
		self.indents.append (self.indent);
		if (self.indent === null) {
			if (flow) {
				self.indent = self.best_indent;
			}
			else {
				self.indent = 0;
			}
		}
		else if (!(indentless)) {
			self.indent += self.best_indent;
		}
	});},
	get expect_stream_start () {return __get__ (this, function (self) {
		if (isinstance (self.event, StreamStartEvent)) {
			if (self.event.encoding && !(hasattr (self.stream, 'encoding'))) {
				self.encoding = self.event.encoding;
			}
			self.write_stream_start ();
			self.state = self.expect_first_document_start;
		}
		else {
			var __except0__ = EmitterError (__mod__ ('expected StreamStartEvent, but got %s', self.event));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get expect_nothing () {return __get__ (this, function (self) {
		var __except0__ = EmitterError (__mod__ ('expected nothing, but got %s', self.event));
		__except0__.__cause__ = null;
		throw __except0__;
	});},
	get expect_first_document_start () {return __get__ (this, function (self) {
		return self.expect_document_start (__kwargtrans__ ({first: true}));
	});},
	get expect_document_start () {return __get__ (this, function (self, first) {
		if (typeof first == 'undefined' || (first != null && first.hasOwnProperty ("__kwargtrans__"))) {;
			var first = false;
		};
		if (isinstance (self.event, DocumentStartEvent)) {
			if ((self.event.version || self.event.tags) && self.open_ended) {
				self.write_indicator ('...', true);
				self.write_indent ();
			}
			if (self.event.version) {
				var version_text = self.prepare_version (self.event.version);
				self.write_version_directive (version_text);
			}
			self.tag_prefixes = self.DEFAULT_TAG_PREFIXES.copy ();
			if (self.event.tags) {
				var handles = sorted (self.event.tags.py_keys ());
				for (var handle of handles) {
					var prefix = self.event.tags [handle];
					self.tag_prefixes [prefix] = handle;
					var handle_text = self.prepare_tag_handle (handle);
					var prefix_text = self.prepare_tag_prefix (prefix);
					self.write_tag_directive (handle_text, prefix_text);
				}
			}
			var implicit = first && !(self.event.explicit) && !(self.canonical) && !(self.event.version) && !(self.event.tags) && !(self.check_empty_document ());
			if (!(implicit)) {
				self.write_indent ();
				self.write_indicator ('---', true);
				if (self.canonical) {
					self.write_indent ();
				}
			}
			self.state = self.expect_document_root;
		}
		else if (isinstance (self.event, StreamEndEvent)) {
			if (self.open_ended) {
				self.write_indicator ('...', true);
				self.write_indent ();
			}
			self.write_stream_end ();
			self.state = self.expect_nothing;
		}
		else {
			var __except0__ = EmitterError (__mod__ ('expected DocumentStartEvent, but got %s', self.event));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get expect_document_end () {return __get__ (this, function (self) {
		if (isinstance (self.event, DocumentEndEvent)) {
			self.write_indent ();
			if (self.event.explicit) {
				self.write_indicator ('...', true);
				self.write_indent ();
			}
			self.flush_stream ();
			self.state = self.expect_document_start;
		}
		else {
			var __except0__ = EmitterError (__mod__ ('expected DocumentEndEvent, but got %s', self.event));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get expect_document_root () {return __get__ (this, function (self) {
		self.states.append (self.expect_document_end);
		self.expect_node (__kwargtrans__ ({root: true}));
	});},
	get expect_node () {return __get__ (this, function (self, root, sequence, mapping, simple_key) {
		if (typeof root == 'undefined' || (root != null && root.hasOwnProperty ("__kwargtrans__"))) {;
			var root = false;
		};
		if (typeof sequence == 'undefined' || (sequence != null && sequence.hasOwnProperty ("__kwargtrans__"))) {;
			var sequence = false;
		};
		if (typeof mapping == 'undefined' || (mapping != null && mapping.hasOwnProperty ("__kwargtrans__"))) {;
			var mapping = false;
		};
		if (typeof simple_key == 'undefined' || (simple_key != null && simple_key.hasOwnProperty ("__kwargtrans__"))) {;
			var simple_key = false;
		};
		self.root_context = root;
		self.sequence_context = sequence;
		self.mapping_context = mapping;
		self.simple_key_context = simple_key;
		if (isinstance (self.event, AliasEvent)) {
			self.expect_alias ();
		}
		else if (isinstance (self.event, tuple ([ScalarEvent, CollectionStartEvent]))) {
			self.process_anchor ('&');
			self.process_tag ();
			if (isinstance (self.event, ScalarEvent)) {
				self.expect_scalar ();
			}
			else if (isinstance (self.event, SequenceStartEvent)) {
				if (self.flow_level || self.canonical || self.event.flow_style || self.check_empty_sequence ()) {
					self.expect_flow_sequence ();
				}
				else {
					self.expect_block_sequence ();
				}
			}
			else if (isinstance (self.event, MappingStartEvent)) {
				if (self.flow_level || self.canonical || self.event.flow_style || self.check_empty_mapping ()) {
					self.expect_flow_mapping ();
				}
				else {
					self.expect_block_mapping ();
				}
			}
		}
		else {
			var __except0__ = EmitterError (__mod__ ('expected NodeEvent, but got %s', self.event));
			__except0__.__cause__ = null;
			throw __except0__;
		}
	});},
	get expect_alias () {return __get__ (this, function (self) {
		if (self.event.anchor === null) {
			var __except0__ = EmitterError ('anchor is not specified for alias');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self.process_anchor ('*');
		self.state = self.states.py_pop ();
	});},
	get expect_scalar () {return __get__ (this, function (self) {
		self.increase_indent (__kwargtrans__ ({flow: true}));
		self.process_scalar ();
		self.indent = self.indents.py_pop ();
		self.state = self.states.py_pop ();
	});},
	get expect_flow_sequence () {return __get__ (this, function (self) {
		self.write_indicator ('[', true, __kwargtrans__ ({whitespace: true}));
		self.flow_level++;
		self.increase_indent (__kwargtrans__ ({flow: true}));
		self.state = self.expect_first_flow_sequence_item;
	});},
	get expect_first_flow_sequence_item () {return __get__ (this, function (self) {
		if (isinstance (self.event, SequenceEndEvent)) {
			self.indent = self.indents.py_pop ();
			self.flow_level--;
			self.write_indicator (']', false);
			self.state = self.states.py_pop ();
		}
		else {
			if (self.canonical || self.column > self.best_width) {
				self.write_indent ();
			}
			self.states.append (self.expect_flow_sequence_item);
			self.expect_node (__kwargtrans__ ({sequence: true}));
		}
	});},
	get expect_flow_sequence_item () {return __get__ (this, function (self) {
		if (isinstance (self.event, SequenceEndEvent)) {
			self.indent = self.indents.py_pop ();
			self.flow_level--;
			if (self.canonical) {
				self.write_indicator (',', false);
				self.write_indent ();
			}
			self.write_indicator (']', false);
			self.state = self.states.py_pop ();
		}
		else {
			self.write_indicator (',', false);
			if (self.canonical || self.column > self.best_width) {
				self.write_indent ();
			}
			self.states.append (self.expect_flow_sequence_item);
			self.expect_node (__kwargtrans__ ({sequence: true}));
		}
	});},
	get expect_flow_mapping () {return __get__ (this, function (self) {
		self.write_indicator ('{', true, __kwargtrans__ ({whitespace: true}));
		self.flow_level++;
		self.increase_indent (__kwargtrans__ ({flow: true}));
		self.state = self.expect_first_flow_mapping_key;
	});},
	get expect_first_flow_mapping_key () {return __get__ (this, function (self) {
		if (isinstance (self.event, MappingEndEvent)) {
			self.indent = self.indents.py_pop ();
			self.flow_level--;
			self.write_indicator ('}', false);
			self.state = self.states.py_pop ();
		}
		else {
			if (self.canonical || self.column > self.best_width) {
				self.write_indent ();
			}
			if (!(self.canonical) && self.check_simple_key ()) {
				self.states.append (self.expect_flow_mapping_simple_value);
				self.expect_node (__kwargtrans__ ({mapping: true, simple_key: true}));
			}
			else {
				self.write_indicator ('?', true);
				self.states.append (self.expect_flow_mapping_value);
				self.expect_node (__kwargtrans__ ({mapping: true}));
			}
		}
	});},
	get expect_flow_mapping_key () {return __get__ (this, function (self) {
		if (isinstance (self.event, MappingEndEvent)) {
			self.indent = self.indents.py_pop ();
			self.flow_level--;
			if (self.canonical) {
				self.write_indicator (',', false);
				self.write_indent ();
			}
			self.write_indicator ('}', false);
			self.state = self.states.py_pop ();
		}
		else {
			self.write_indicator (',', false);
			if (self.canonical || self.column > self.best_width) {
				self.write_indent ();
			}
			if (!(self.canonical) && self.check_simple_key ()) {
				self.states.append (self.expect_flow_mapping_simple_value);
				self.expect_node (__kwargtrans__ ({mapping: true, simple_key: true}));
			}
			else {
				self.write_indicator ('?', true);
				self.states.append (self.expect_flow_mapping_value);
				self.expect_node (__kwargtrans__ ({mapping: true}));
			}
		}
	});},
	get expect_flow_mapping_simple_value () {return __get__ (this, function (self) {
		self.write_indicator (':', false);
		self.states.append (self.expect_flow_mapping_key);
		self.expect_node (__kwargtrans__ ({mapping: true}));
	});},
	get expect_flow_mapping_value () {return __get__ (this, function (self) {
		if (self.canonical || self.column > self.best_width) {
			self.write_indent ();
		}
		self.write_indicator (':', true);
		self.states.append (self.expect_flow_mapping_key);
		self.expect_node (__kwargtrans__ ({mapping: true}));
	});},
	get expect_block_sequence () {return __get__ (this, function (self) {
		var indentless = self.mapping_context && !(self.indention);
		self.increase_indent (__kwargtrans__ ({flow: false, indentless: indentless}));
		self.state = self.expect_first_block_sequence_item;
	});},
	get expect_first_block_sequence_item () {return __get__ (this, function (self) {
		return self.expect_block_sequence_item (__kwargtrans__ ({first: true}));
	});},
	get expect_block_sequence_item () {return __get__ (this, function (self, first) {
		if (typeof first == 'undefined' || (first != null && first.hasOwnProperty ("__kwargtrans__"))) {;
			var first = false;
		};
		if (!(first) && isinstance (self.event, SequenceEndEvent)) {
			self.indent = self.indents.py_pop ();
			self.state = self.states.py_pop ();
		}
		else {
			self.write_indent ();
			self.write_indicator ('-', true, __kwargtrans__ ({indention: true}));
			self.states.append (self.expect_block_sequence_item);
			self.expect_node (__kwargtrans__ ({sequence: true}));
		}
	});},
	get expect_block_mapping () {return __get__ (this, function (self) {
		self.increase_indent (__kwargtrans__ ({flow: false}));
		self.state = self.expect_first_block_mapping_key;
	});},
	get expect_first_block_mapping_key () {return __get__ (this, function (self) {
		return self.expect_block_mapping_key (__kwargtrans__ ({first: true}));
	});},
	get expect_block_mapping_key () {return __get__ (this, function (self, first) {
		if (typeof first == 'undefined' || (first != null && first.hasOwnProperty ("__kwargtrans__"))) {;
			var first = false;
		};
		if (!(first) && isinstance (self.event, MappingEndEvent)) {
			self.indent = self.indents.py_pop ();
			self.state = self.states.py_pop ();
		}
		else {
			self.write_indent ();
			if (self.check_simple_key ()) {
				self.states.append (self.expect_block_mapping_simple_value);
				self.expect_node (__kwargtrans__ ({mapping: true, simple_key: true}));
			}
			else {
				self.write_indicator ('?', true, __kwargtrans__ ({indention: true}));
				self.states.append (self.expect_block_mapping_value);
				self.expect_node (__kwargtrans__ ({mapping: true}));
			}
		}
	});},
	get expect_block_mapping_simple_value () {return __get__ (this, function (self) {
		self.write_indicator (':', false);
		self.states.append (self.expect_block_mapping_key);
		self.expect_node (__kwargtrans__ ({mapping: true}));
	});},
	get expect_block_mapping_value () {return __get__ (this, function (self) {
		self.write_indent ();
		self.write_indicator (':', true, __kwargtrans__ ({indention: true}));
		self.states.append (self.expect_block_mapping_key);
		self.expect_node (__kwargtrans__ ({mapping: true}));
	});},
	get check_empty_sequence () {return __get__ (this, function (self) {
		return isinstance (self.event, SequenceStartEvent) && self.events && isinstance (self.events [0], SequenceEndEvent);
	});},
	get check_empty_mapping () {return __get__ (this, function (self) {
		return isinstance (self.event, MappingStartEvent) && self.events && isinstance (self.events [0], MappingEndEvent);
	});},
	get check_empty_document () {return __get__ (this, function (self) {
		if (!(isinstance (self.event, DocumentStartEvent)) || !(self.events)) {
			return false;
		}
		var event = self.events [0];
		return isinstance (event, ScalarEvent) && event.anchor === null && event.tag === null && event.implicit && event.value == '';
	});},
	get check_simple_key () {return __get__ (this, function (self) {
		var length = 0;
		if (isinstance (self.event, NodeEvent) && self.event.anchor !== null) {
			if (self.prepared_anchor === null) {
				self.prepared_anchor = self.prepare_anchor (self.event.anchor);
			}
			length += len (self.prepared_anchor);
		}
		if (isinstance (self.event, tuple ([ScalarEvent, CollectionStartEvent])) && self.event.tag !== null) {
			if (self.prepared_tag === null) {
				self.prepared_tag = self.prepare_tag (self.event.tag);
			}
			length += len (self.prepared_tag);
		}
		if (isinstance (self.event, ScalarEvent)) {
			if (self.analysis === null) {
				self.analysis = self.analyze_scalar (self.event.value);
			}
			length += len (self.analysis.scalar);
		}
		return length < 128 && (isinstance (self.event, AliasEvent) || isinstance (self.event, ScalarEvent) && !(self.analysis.empty) && !(self.analysis.multiline) || self.check_empty_sequence () || self.check_empty_mapping ());
	});},
	get process_anchor () {return __get__ (this, function (self, indicator) {
		if (self.event.anchor === null) {
			self.prepared_anchor = null;
			return ;
		}
		if (self.prepared_anchor === null) {
			self.prepared_anchor = self.prepare_anchor (self.event.anchor);
		}
		if (self.prepared_anchor) {
			self.write_indicator (indicator + self.prepared_anchor, true);
		}
		self.prepared_anchor = null;
	});},
	get process_tag () {return __get__ (this, function (self) {
		var tag = self.event.tag;
		if (isinstance (self.event, ScalarEvent)) {
			if (self.style === null) {
				self.style = self.choose_scalar_style ();
			}
			if ((!(self.canonical) || tag === null) && (self.style == '' && self.event.implicit [0] || self.style != '' && self.event.implicit [1])) {
				self.prepared_tag = null;
				return ;
			}
			if (self.event.implicit [0] && tag === null) {
				var tag = '!';
				self.prepared_tag = null;
			}
		}
		else if ((!(self.canonical) || tag === null) && self.event.implicit) {
			self.prepared_tag = null;
			return ;
		}
		if (tag === null) {
			var __except0__ = EmitterError ('tag is not specified');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (self.prepared_tag === null) {
			self.prepared_tag = self.prepare_tag (tag);
		}
		if (self.prepared_tag) {
			self.write_indicator (self.prepared_tag, true);
		}
		self.prepared_tag = null;
	});},
	get choose_scalar_style () {return __get__ (this, function (self) {
		if (self.analysis === null) {
			self.analysis = self.analyze_scalar (self.event.value);
		}
		if (self.event.style == '"' || self.canonical) {
			return '"';
		}
		if (!(self.event.style) && self.event.implicit [0]) {
			if (!(self.simple_key_context && (self.analysis.empty || self.analysis.multiline)) && (self.flow_level && self.analysis.allow_flow_plain || !(self.flow_level) && self.analysis.allow_block_plain)) {
				return '';
			}
		}
		if (self.event.style && __in__ (self.event.style, '|>')) {
			if (!(self.flow_level) && !(self.simple_key_context) && self.analysis.allow_block) {
				return self.event.style;
			}
		}
		if (!(self.event.style) || self.event.style == "'") {
			if (self.analysis.allow_single_quoted && !(self.simple_key_context && self.analysis.multiline)) {
				return "'";
			}
		}
		return '"';
	});},
	get process_scalar () {return __get__ (this, function (self) {
		if (self.analysis === null) {
			self.analysis = self.analyze_scalar (self.event.value);
		}
		if (self.style === null) {
			self.style = self.choose_scalar_style ();
		}
		var py_split = !(self.simple_key_context);
		if (self.style == '"') {
			self.write_double_quoted (self.analysis.scalar, py_split);
		}
		else if (self.style == "'") {
			self.write_single_quoted (self.analysis.scalar, py_split);
		}
		else if (self.style == '>') {
			self.write_folded (self.analysis.scalar);
		}
		else if (self.style == '|') {
			self.write_literal (self.analysis.scalar);
		}
		else {
			self.write_plain (self.analysis.scalar, py_split);
		}
		self.analysis = null;
		self.style = null;
	});},
	get prepare_version () {return __get__ (this, function (self, version) {
		var __left0__ = version;
		var major = __left0__ [0];
		var minor = __left0__ [1];
		if (major != 1) {
			var __except0__ = EmitterError (__mod__ ('unsupported YAML version: %d.%d', tuple ([major, minor])));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		return __mod__ ('%d.%d', tuple ([major, minor]));
	});},
	get prepare_tag_handle () {return __get__ (this, function (self, handle) {
		if (!(handle)) {
			var __except0__ = EmitterError ('tag handle must not be empty');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (handle [0] != '!' || handle [-(1)] != '!') {
			var __except0__ = EmitterError (__mod__ ("tag handle must start and end with '!': %r", handle));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var ch of handle.__getslice__ (1, -(1), 1)) {
			if (!(('0' <= ch && ch <= '9') || ('A' <= ch && ch <= 'Z') || ('a' <= ch && ch <= 'z') || __in__ (ch, '-_'))) {
				var __except0__ = EmitterError (__mod__ ('invalid character %r in the tag handle: %r', tuple ([ch, handle])));
				__except0__.__cause__ = null;
				throw __except0__;
			}
		}
		return handle;
	});},
	get prepare_tag_prefix () {return __get__ (this, function (self, prefix) {
		if (!(prefix)) {
			var __except0__ = EmitterError ('tag prefix must not be empty');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var chunks = [];
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		if (prefix [0] == '!') {
			var end = 1;
		}
		while (end < len (prefix)) {
			var ch = prefix [end];
			if (('0' <= ch && ch <= '9') || ('A' <= ch && ch <= 'Z') || ('a' <= ch && ch <= 'z') || __in__ (ch, "-;/?!:@&=+$,_.~*'()[]")) {
				end++;
			}
			else {
				if (start < end) {
					chunks.append (prefix.__getslice__ (start, end, 1));
				}
				var __left0__ = end + 1;
				var start = __left0__;
				var end = __left0__;
				var data = ch.encode ('utf-8');
				for (var ch of data) {
					chunks.append (__mod__ ('%%%02X', ord (ch)));
				}
			}
		}
		if (start < end) {
			chunks.append (prefix.__getslice__ (start, end, 1));
		}
		return ''.join (chunks);
	});},
	get prepare_tag () {return __get__ (this, function (self, tag) {
		if (!(tag)) {
			var __except0__ = EmitterError ('tag must not be empty');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		if (tag == '!') {
			return tag;
		}
		var handle = null;
		var suffix = tag;
		var prefixes = sorted (self.tag_prefixes.py_keys ());
		for (var prefix of prefixes) {
			if (tag.startswith (prefix) && (prefix == '!' || len (prefix) < len (tag))) {
				var handle = self.tag_prefixes [prefix];
				var suffix = tag.__getslice__ (len (prefix), null, 1);
			}
		}
		var chunks = [];
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		while (end < len (suffix)) {
			var ch = suffix [end];
			if (('0' <= ch && ch <= '9') || ('A' <= ch && ch <= 'Z') || ('a' <= ch && ch <= 'z') || __in__ (ch, "-;/?:@&=+$,_.~*'()[]") || ch == '!' && handle != '!') {
				end++;
			}
			else {
				if (start < end) {
					chunks.append (suffix.__getslice__ (start, end, 1));
				}
				var __left0__ = end + 1;
				var start = __left0__;
				var end = __left0__;
				var data = ch.encode ('utf-8');
				for (var ch of data) {
					chunks.append (__mod__ ('%%%02X', ord (ch)));
				}
			}
		}
		if (start < end) {
			chunks.append (suffix.__getslice__ (start, end, 1));
		}
		var suffix_text = ''.join (chunks);
		if (handle) {
			return __mod__ ('%s%s', tuple ([handle, suffix_text]));
		}
		else {
			return __mod__ ('!<%s>', suffix_text);
		}
	});},
	get prepare_anchor () {return __get__ (this, function (self, anchor) {
		if (!(anchor)) {
			var __except0__ = EmitterError ('anchor must not be empty');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		for (var ch of anchor) {
			if (!(('0' <= ch && ch <= '9') || ('A' <= ch && ch <= 'Z') || ('a' <= ch && ch <= 'z') || __in__ (ch, '-_'))) {
				var __except0__ = EmitterError (__mod__ ('invalid character %r in the anchor: %r', tuple ([ch, anchor])));
				__except0__.__cause__ = null;
				throw __except0__;
			}
		}
		return anchor;
	});},
	get analyze_scalar () {return __get__ (this, function (self, scalar) {
		if (!(scalar)) {
			return ScalarAnalysis (__kwargtrans__ ({scalar: scalar, empty: true, multiline: false, allow_flow_plain: false, allow_block_plain: true, allow_single_quoted: true, allow_double_quoted: true, allow_block: false}));
		}
		var block_indicators = false;
		var flow_indicators = false;
		var line_breaks = false;
		var special_characters = false;
		var leading_space = false;
		var leading_break = false;
		var trailing_space = false;
		var trailing_break = false;
		var break_space = false;
		var space_break = false;
		if (scalar.startswith ('---') || scalar.startswith ('...')) {
			var block_indicators = true;
			var flow_indicators = true;
		}
		var preceeded_by_whitespace = true;
		var followed_by_whitespace = len (scalar) == 1 || __in__ (scalar [1], '\x00 \t\r\n\x85\u2028\u2029');
		var previous_space = false;
		var previous_break = false;
		var index = 0;
		while (index < len (scalar)) {
			var ch = scalar [index];
			if (index == 0) {
				if (__in__ (ch, '#,[]{}&*!|>\'"%@`')) {
					var flow_indicators = true;
					var block_indicators = true;
				}
				if (__in__ (ch, '?:')) {
					var flow_indicators = true;
					if (followed_by_whitespace) {
						var block_indicators = true;
					}
				}
				if (ch == '-' && followed_by_whitespace) {
					var flow_indicators = true;
					var block_indicators = true;
				}
			}
			else {
				if (__in__ (ch, ',?[]{}')) {
					var flow_indicators = true;
				}
				if (ch == ':') {
					var flow_indicators = true;
					if (followed_by_whitespace) {
						var block_indicators = true;
					}
				}
				if (ch == '#' && preceeded_by_whitespace) {
					var flow_indicators = true;
					var block_indicators = true;
				}
			}
			if (__in__ (ch, '\n\x85\u2028\u2029')) {
				var line_breaks = true;
			}
			if (!(ch == '\n' || (' ' <= ch && ch <= '~'))) {
				if ((ch == '\x85' || ('\xa0' <= ch && ch <= '\ud7ff') || ('\ue000' <= ch && ch <= '�')) && ch != '\ufeff') {
					var unicode_characters = true;
					if (!(self.allow_unicode)) {
						var special_characters = true;
					}
				}
				else {
					var special_characters = true;
				}
			}
			if (ch == ' ') {
				if (index == 0) {
					var leading_space = true;
				}
				if (index == len (scalar) - 1) {
					var trailing_space = true;
				}
				if (previous_break) {
					var break_space = true;
				}
				var previous_space = true;
				var previous_break = false;
			}
			else if (__in__ (ch, '\n\x85\u2028\u2029')) {
				if (index == 0) {
					var leading_break = true;
				}
				if (index == len (scalar) - 1) {
					var trailing_break = true;
				}
				if (previous_space) {
					var space_break = true;
				}
				var previous_space = false;
				var previous_break = true;
			}
			else {
				var previous_space = false;
				var previous_break = false;
			}
			index++;
			var preceeded_by_whitespace = __in__ (ch, '\x00 \t\r\n\x85\u2028\u2029');
			var followed_by_whitespace = index + 1 >= len (scalar) || __in__ (scalar [index + 1], '\x00 \t\r\n\x85\u2028\u2029');
		}
		var allow_flow_plain = true;
		var allow_block_plain = true;
		var allow_single_quoted = true;
		var allow_double_quoted = true;
		var allow_block = true;
		if (leading_space || leading_break || trailing_space || trailing_break) {
			var __left0__ = false;
			var allow_flow_plain = __left0__;
			var allow_block_plain = __left0__;
		}
		if (trailing_space) {
			var allow_block = false;
		}
		if (break_space) {
			var __left0__ = false;
			var allow_flow_plain = __left0__;
			var allow_block_plain = __left0__;
			var allow_single_quoted = __left0__;
		}
		if (space_break || special_characters) {
			var __left0__ = false;
			var allow_flow_plain = __left0__;
			var allow_block_plain = __left0__;
			var allow_single_quoted = __left0__;
			var allow_block = __left0__;
		}
		if (line_breaks) {
			var __left0__ = false;
			var allow_flow_plain = __left0__;
			var allow_block_plain = __left0__;
		}
		if (flow_indicators) {
			var allow_flow_plain = false;
		}
		if (block_indicators) {
			var allow_block_plain = false;
		}
		return ScalarAnalysis (__kwargtrans__ ({scalar: scalar, empty: false, multiline: line_breaks, allow_flow_plain: allow_flow_plain, allow_block_plain: allow_block_plain, allow_single_quoted: allow_single_quoted, allow_double_quoted: allow_double_quoted, allow_block: allow_block}));
	});},
	get flush_stream () {return __get__ (this, function (self) {
		if (hasattr (self.stream, 'flush')) {
			self.stream.flush ();
		}
	});},
	get write_stream_start () {return __get__ (this, function (self) {
		if (self.encoding && self.encoding.startswith ('utf-16')) {
			self.stream.write ('\ufeff'.encode (self.encoding));
		}
	});},
	get write_stream_end () {return __get__ (this, function (self) {
		self.flush_stream ();
	});},
	get write_indicator () {return __get__ (this, function (self, indicator, need_whitespace, whitespace, indention) {
		if (typeof whitespace == 'undefined' || (whitespace != null && whitespace.hasOwnProperty ("__kwargtrans__"))) {;
			var whitespace = false;
		};
		if (typeof indention == 'undefined' || (indention != null && indention.hasOwnProperty ("__kwargtrans__"))) {;
			var indention = false;
		};
		if (self.whitespace || !(need_whitespace)) {
			var data = indicator;
		}
		else {
			var data = ' ' + indicator;
		}
		self.whitespace = whitespace;
		self.indention = self.indention && indention;
		self.column += len (data);
		self.open_ended = false;
		if (self.encoding) {
			var data = data.encode (self.encoding);
		}
		self.stream.write (data);
	});},
	get write_indent () {return __get__ (this, function (self) {
		var indent = self.indent || 0;
		if (!(self.indention) || self.column > indent || self.column == indent && !(self.whitespace)) {
			self.write_line_break ();
		}
		if (self.column < indent) {
			self.whitespace = true;
			var data = ' ' * (indent - self.column);
			self.column = indent;
			if (self.encoding) {
				var data = data.encode (self.encoding);
			}
			self.stream.write (data);
		}
	});},
	get write_line_break () {return __get__ (this, function (self, data) {
		if (typeof data == 'undefined' || (data != null && data.hasOwnProperty ("__kwargtrans__"))) {;
			var data = null;
		};
		if (data === null) {
			var data = self.best_line_break;
		}
		self.whitespace = true;
		self.indention = true;
		self.line++;
		self.column = 0;
		if (self.encoding) {
			var data = data.encode (self.encoding);
		}
		self.stream.write (data);
	});},
	get write_version_directive () {return __get__ (this, function (self, version_text) {
		var data = __mod__ ('%%YAML %s', version_text);
		if (self.encoding) {
			var data = data.encode (self.encoding);
		}
		self.stream.write (data);
		self.write_line_break ();
	});},
	get write_tag_directive () {return __get__ (this, function (self, handle_text, prefix_text) {
		var data = __mod__ ('%%TAG %s %s', tuple ([handle_text, prefix_text]));
		if (self.encoding) {
			var data = data.encode (self.encoding);
		}
		self.stream.write (data);
		self.write_line_break ();
	});},
	get write_single_quoted () {return __get__ (this, function (self, text, py_split) {
		if (typeof py_split == 'undefined' || (py_split != null && py_split.hasOwnProperty ("__kwargtrans__"))) {;
			var py_split = true;
		};
		self.write_indicator ("'", true);
		var spaces = false;
		var breaks = false;
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		while (end <= len (text)) {
			var ch = null;
			if (end < len (text)) {
				var ch = text [end];
			}
			if (spaces) {
				if (ch === null || ch != ' ') {
					if (start + 1 == end && self.column > self.best_width && py_split && start != 0 && end != len (text)) {
						self.write_indent ();
					}
					else {
						var data = text.__getslice__ (start, end, 1);
						self.column += len (data);
						if (self.encoding) {
							var data = data.encode (self.encoding);
						}
						self.stream.write (data);
					}
					var start = end;
				}
			}
			else if (breaks) {
				if (ch === null || !__in__ (ch, '\n\x85\u2028\u2029')) {
					if (text [start] == '\n') {
						self.write_line_break ();
					}
					for (var br of text.__getslice__ (start, end, 1)) {
						if (br == '\n') {
							self.write_line_break ();
						}
						else {
							self.write_line_break (br);
						}
					}
					self.write_indent ();
					var start = end;
				}
			}
			else if (ch === null || __in__ (ch, ' \n\x85\u2028\u2029') || ch == "'") {
				if (start < end) {
					var data = text.__getslice__ (start, end, 1);
					self.column += len (data);
					if (self.encoding) {
						var data = data.encode (self.encoding);
					}
					self.stream.write (data);
					var start = end;
				}
			}
			if (ch == "'") {
				var data = "''";
				self.column += 2;
				if (self.encoding) {
					var data = data.encode (self.encoding);
				}
				self.stream.write (data);
				var start = end + 1;
			}
			if (ch !== null) {
				var spaces = ch == ' ';
				var breaks = __in__ (ch, '\n\x85\u2028\u2029');
			}
			end++;
		}
		self.write_indicator ("'", false);
	});},
	ESCAPE_REPLACEMENTS: dict ({'\x00': '0', '\x07': 'a', '\x08': 'b', '\t': 't', '\n': 'n', '\x0b': 'v', '\x0c': 'f', '\r': 'r', '\x1b': 'e', '"': '"', '\\': '\\', '\x85': 'N', '\xa0': '_', '\u2028': 'L', '\u2029': 'P'}),
	get write_double_quoted () {return __get__ (this, function (self, text, py_split) {
		if (typeof py_split == 'undefined' || (py_split != null && py_split.hasOwnProperty ("__kwargtrans__"))) {;
			var py_split = true;
		};
		self.write_indicator ('"', true);
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		while (end <= len (text)) {
			var ch = null;
			if (end < len (text)) {
				var ch = text [end];
			}
			if (ch === null || __in__ (ch, '"\\\x85\u2028\u2029\ufeff') || !((' ' <= ch && ch <= '~') || self.allow_unicode && (('\xa0' <= ch && ch <= '\ud7ff') || ('\ue000' <= ch && ch <= '�')))) {
				if (start < end) {
					var data = text.__getslice__ (start, end, 1);
					self.column += len (data);
					if (self.encoding) {
						var data = data.encode (self.encoding);
					}
					self.stream.write (data);
					var start = end;
				}
				if (ch !== null) {
					if (__in__ (ch, self.ESCAPE_REPLACEMENTS)) {
						var data = '\\' + self.ESCAPE_REPLACEMENTS [ch];
					}
					else if (ch <= 'ÿ') {
						var data = __mod__ ('\\x%02X', ord (ch));
					}
					else if (ch <= '\uffff') {
						var data = __mod__ ('\\u%04X', ord (ch));
					}
					else {
						var data = __mod__ ('\\U%08X', ord (ch));
					}
					self.column += len (data);
					if (self.encoding) {
						var data = data.encode (self.encoding);
					}
					self.stream.write (data);
					var start = end + 1;
				}
			}
			if ((0 < end && end < len (text) - 1) && (ch == ' ' || start >= end) && self.column + (end - start) > self.best_width && py_split) {
				var data = text.__getslice__ (start, end, 1) + '\\';
				if (start < end) {
					var start = end;
				}
				self.column += len (data);
				if (self.encoding) {
					var data = data.encode (self.encoding);
				}
				self.stream.write (data);
				self.write_indent ();
				self.whitespace = false;
				self.indention = false;
				if (text [start] == ' ') {
					var data = '\\';
					self.column += len (data);
					if (self.encoding) {
						var data = data.encode (self.encoding);
					}
					self.stream.write (data);
				}
			}
			end++;
		}
		self.write_indicator ('"', false);
	});},
	get determine_block_hints () {return __get__ (this, function (self, text) {
		var hints = '';
		if (text) {
			if (__in__ (text [0], ' \n\x85\u2028\u2029')) {
				hints += str (self.best_indent);
			}
			if (!__in__ (text [-(1)], '\n\x85\u2028\u2029')) {
				hints += '-';
			}
			else if (len (text) == 1 || __in__ (text [-(2)], '\n\x85\u2028\u2029')) {
				hints += '+';
			}
		}
		return hints;
	});},
	get write_folded () {return __get__ (this, function (self, text) {
		var hints = self.determine_block_hints (text);
		self.write_indicator ('>' + hints, true);
		if (hints.__getslice__ (-(1), null, 1) == '+') {
			self.open_ended = true;
		}
		self.write_line_break ();
		var leading_space = true;
		var spaces = false;
		var breaks = true;
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		while (end <= len (text)) {
			var ch = null;
			if (end < len (text)) {
				var ch = text [end];
			}
			if (breaks) {
				if (ch === null || !__in__ (ch, '\n\x85\u2028\u2029')) {
					if (!(leading_space) && ch !== null && ch != ' ' && text [start] == '\n') {
						self.write_line_break ();
					}
					var leading_space = ch == ' ';
					for (var br of text.__getslice__ (start, end, 1)) {
						if (br == '\n') {
							self.write_line_break ();
						}
						else {
							self.write_line_break (br);
						}
					}
					if (ch !== null) {
						self.write_indent ();
					}
					var start = end;
				}
			}
			else if (spaces) {
				if (ch != ' ') {
					if (start + 1 == end && self.column > self.best_width) {
						self.write_indent ();
					}
					else {
						var data = text.__getslice__ (start, end, 1);
						self.column += len (data);
						if (self.encoding) {
							var data = data.encode (self.encoding);
						}
						self.stream.write (data);
					}
					var start = end;
				}
			}
			else if (ch === null || __in__ (ch, ' \n\x85\u2028\u2029')) {
				var data = text.__getslice__ (start, end, 1);
				self.column += len (data);
				if (self.encoding) {
					var data = data.encode (self.encoding);
				}
				self.stream.write (data);
				if (ch === null) {
					self.write_line_break ();
				}
				var start = end;
			}
			if (ch !== null) {
				var breaks = __in__ (ch, '\n\x85\u2028\u2029');
				var spaces = ch == ' ';
			}
			end++;
		}
	});},
	get write_literal () {return __get__ (this, function (self, text) {
		var hints = self.determine_block_hints (text);
		self.write_indicator ('|' + hints, true);
		if (hints.__getslice__ (-(1), null, 1) == '+') {
			self.open_ended = true;
		}
		self.write_line_break ();
		var breaks = true;
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		while (end <= len (text)) {
			var ch = null;
			if (end < len (text)) {
				var ch = text [end];
			}
			if (breaks) {
				if (ch === null || !__in__ (ch, '\n\x85\u2028\u2029')) {
					for (var br of text.__getslice__ (start, end, 1)) {
						if (br == '\n') {
							self.write_line_break ();
						}
						else {
							self.write_line_break (br);
						}
					}
					if (ch !== null) {
						self.write_indent ();
					}
					var start = end;
				}
			}
			else if (ch === null || __in__ (ch, '\n\x85\u2028\u2029')) {
				var data = text.__getslice__ (start, end, 1);
				if (self.encoding) {
					var data = data.encode (self.encoding);
				}
				self.stream.write (data);
				if (ch === null) {
					self.write_line_break ();
				}
				var start = end;
			}
			if (ch !== null) {
				var breaks = __in__ (ch, '\n\x85\u2028\u2029');
			}
			end++;
		}
	});},
	get write_plain () {return __get__ (this, function (self, text, py_split) {
		if (typeof py_split == 'undefined' || (py_split != null && py_split.hasOwnProperty ("__kwargtrans__"))) {;
			var py_split = true;
		};
		if (self.root_context) {
			self.open_ended = true;
		}
		if (!(text)) {
			return ;
		}
		if (!(self.whitespace)) {
			var data = ' ';
			self.column += len (data);
			if (self.encoding) {
				var data = data.encode (self.encoding);
			}
			self.stream.write (data);
		}
		self.whitespace = false;
		self.indention = false;
		var spaces = false;
		var breaks = false;
		var __left0__ = 0;
		var start = __left0__;
		var end = __left0__;
		while (end <= len (text)) {
			var ch = null;
			if (end < len (text)) {
				var ch = text [end];
			}
			if (spaces) {
				if (ch != ' ') {
					if (start + 1 == end && self.column > self.best_width && py_split) {
						self.write_indent ();
						self.whitespace = false;
						self.indention = false;
					}
					else {
						var data = text.__getslice__ (start, end, 1);
						self.column += len (data);
						if (self.encoding) {
							var data = data.encode (self.encoding);
						}
						self.stream.write (data);
					}
					var start = end;
				}
			}
			else if (breaks) {
				if (!__in__ (ch, '\n\x85\u2028\u2029')) {
					if (text [start] == '\n') {
						self.write_line_break ();
					}
					for (var br of text.__getslice__ (start, end, 1)) {
						if (br == '\n') {
							self.write_line_break ();
						}
						else {
							self.write_line_break (br);
						}
					}
					self.write_indent ();
					self.whitespace = false;
					self.indention = false;
					var start = end;
				}
			}
			else if (ch === null || __in__ (ch, ' \n\x85\u2028\u2029')) {
				var data = text.__getslice__ (start, end, 1);
				self.column += len (data);
				if (self.encoding) {
					var data = data.encode (self.encoding);
				}
				self.stream.write (data);
				var start = end;
			}
			if (ch !== null) {
				var spaces = ch == ' ';
				var breaks = __in__ (ch, '\n\x85\u2028\u2029');
			}
			end++;
		}
	});}
});

//# sourceMappingURL=emitter.map