// Transcrypt'ed from Python, 2019-03-09 13:31:11
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {Scanner, ScannerError, SimpleKey} from './scanner.js';
import {AliasEvent, CollectionEndEvent, CollectionStartEvent, DocumentEndEvent, DocumentStartEvent, Event, MappingEndEvent, MappingStartEvent, NodeEvent, ScalarEvent, SequenceEndEvent, SequenceStartEvent, StreamEndEvent, StreamStartEvent} from './events.js';
import {AliasToken, AnchorToken, BlockEndToken, BlockEntryToken, BlockMappingStartToken, BlockSequenceStartToken, DirectiveToken, DocumentEndToken, DocumentStartToken, FlowEntryToken, FlowMappingEndToken, FlowMappingStartToken, FlowSequenceEndToken, FlowSequenceStartToken, KeyToken, ScalarToken, StreamEndToken, StreamStartToken, TagToken, Token, ValueToken} from './tokens.js';
import {MarkedYAMLError} from './error.js';
var __name__ = 'parser';
export var __all__ = ['Parser', 'ParserError'];
export var ParserError =  __class__ ('ParserError', [MarkedYAMLError], {
	__module__: __name__,
});
export var Parser =  __class__ ('Parser', [object], {
	__module__: __name__,
	get xpeek_token () {return __get__ (this, function (self) {
		return Scanner.peek_token (self);
	});},
	get xget_token () {return __get__ (this, function (self) {
		return Scanner.get_token (self);
	});},
	DEFAULT_TAGS: dict ({'!': '!', '!!': 'tag:yaml.org,2002:'}),
	get __init__ () {return __get__ (this, function (self) {
		self.current_event = null;
		self.yaml_version = null;
		self.tag_handles = dict ({});
		self.states = [];
		self.marks = [];
		self.state = self.parse_stream_start;
	});},
	get dispose () {return __get__ (this, function (self) {
		self.states = [];
		self.state = null;
	});},
	get check_event () {return __get__ (this, function (self) {
		var choices = tuple ([].slice.apply (arguments).slice (1));
		if (self.current_event === null) {
			if (self.state) {
				self.current_event = self.state ();
			}
		}
		if (self.current_event !== null) {
			if (!(choices)) {
				return true;
			}
			for (var choice of choices) {
				if (isinstance (self.current_event, choice)) {
					return true;
				}
			}
		}
		return false;
	});},
	get peek_event () {return __get__ (this, function (self) {
		if (self.current_event === null) {
			if (self.state) {
				self.current_event = self.state ();
			}
		}
		return self.current_event;
	});},
	get get_event () {return __get__ (this, function (self) {
		if (self.current_event === null) {
			if (self.state) {
				self.current_event = self.state ();
			}
		}
		var value = self.current_event;
		self.current_event = null;
		return value;
	});},
	get parse_stream_start () {return __get__ (this, function (self) {
		var token = self.get_token ();
		var event = StreamStartEvent (token.start_mark, token.end_mark, __kwargtrans__ ({encoding: token.encoding}));
		self.state = self.parse_implicit_document_start;
		return event;
	});},
	get parse_implicit_document_start () {return __get__ (this, function (self) {
		if (!(self.check_token (DirectiveToken, DocumentStartToken, StreamEndToken))) {
			self.tag_handles = self.DEFAULT_TAGS;
			var token = self.peek_token ();
			var __left0__ = 0;
			var start_mark = __left0__;
			var end_mark = __left0__;
			var event = DocumentStartEvent (start_mark, end_mark, __kwargtrans__ ({explicit: false}));
			self.states.append (self.parse_document_end);
			self.state = self.parse_block_node;
			return event;
		}
		else {
			return self.parse_document_start ();
		}
	});},
	get parse_document_start () {return __get__ (this, function (self) {
		while (self.check_token (DocumentEndToken)) {
			self.get_token ();
		}
		if (!(self.check_token (StreamEndToken))) {
			var token = self.peek_token ();
			var start_mark = token.start_mark;
			var __left0__ = self.process_directives ();
			var version = __left0__ [0];
			var tags = __left0__ [1];
			if (!(self.check_token (DocumentStartToken))) {
				var __except0__ = ParserError (null, null, __mod__ ("expected '<document start>', but found %r", self.peek_token ().id), self.peek_token ().start_mark);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			var token = self.get_token ();
			var end_mark = token.end_mark;
			var event = DocumentStartEvent (start_mark, end_mark, __kwargtrans__ ({explicit: true, version: version, tags: tags}));
			self.states.append (self.parse_document_end);
			self.state = self.parse_document_content;
		}
		else {
			var token = self.get_token ();
			var event = StreamEndEvent (token.start_mark, token.end_mark);
			self.state = null;
		}
		return event;
	});},
	get parse_document_end () {return __get__ (this, function (self) {
		var token = self.peek_token ();
		var __left0__ = token.start_mark;
		var start_mark = __left0__;
		var end_mark = __left0__;
		var explicit = false;
		if (self.check_token (DocumentEndToken)) {
			var token = self.get_token ();
			var end_mark = token.end_mark;
			var explicit = true;
		}
		var event = DocumentEndEvent (start_mark, end_mark, __kwargtrans__ ({explicit: explicit}));
		self.state = self.parse_document_start;
		return event;
	});},
	get parse_document_content () {return __get__ (this, function (self) {
		if (self.check_token (DirectiveToken, DocumentStartToken, DocumentEndToken, StreamEndToken)) {
			var event = self.process_empty_scalar (self.peek_token ().start_mark);
			self.state = self.states.py_pop ();
			return event;
		}
		else {
			return self.parse_block_node ();
		}
	});},
	get process_directives () {return __get__ (this, function (self) {
		self.yaml_version = null;
		self.tag_handles = dict ({});
		while (self.check_token (DirectiveToken)) {
			var token = self.get_token ();
			if (token.py_name == 'YAML') {
				if (self.yaml_version !== null) {
					var __except0__ = ParserError (null, null, 'found duplicate YAML directive', token.start_mark);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				var __left0__ = token.value;
				var major = __left0__ [0];
				var minor = __left0__ [1];
				if (major != 1) {
					var __except0__ = ParserError (null, null, 'found incompatible YAML document (version 1.* is required)', token.start_mark);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				self.yaml_version = token.value;
			}
			else if (token.py_name == 'TAG') {
				var __left0__ = token.value;
				var handle = __left0__ [0];
				var prefix = __left0__ [1];
				if (__in__ (handle, self.tag_handles)) {
					var __except0__ = ParserError (null, null, __mod__ ('duplicate tag handle %r', handle), token.start_mark);
					__except0__.__cause__ = null;
					throw __except0__;
				}
				self.tag_handles [handle] = prefix;
			}
		}
		if (self.tag_handles) {
			var value = tuple ([self.yaml_version, self.tag_handles.copy ()]);
		}
		else {
			var value = tuple ([self.yaml_version, null]);
		}
		for (var key of self.DEFAULT_TAGS) {
			if (!__in__ (key, self.tag_handles)) {
				self.tag_handles [key] = self.DEFAULT_TAGS [key];
			}
		}
		return value;
	});},
	get parse_block_node () {return __get__ (this, function (self) {
		return self.parse_node (__kwargtrans__ ({block: true}));
	});},
	get parse_flow_node () {return __get__ (this, function (self) {
		return self.parse_node ();
	});},
	get parse_block_node_or_indentless_sequence () {return __get__ (this, function (self) {
		return self.parse_node (__kwargtrans__ ({block: true, indentless_sequence: true}));
	});},
	get parse_node () {return __get__ (this, function (self, block, indentless_sequence) {
		if (typeof block == 'undefined' || (block != null && block.hasOwnProperty ("__kwargtrans__"))) {;
			var block = false;
		};
		if (typeof indentless_sequence == 'undefined' || (indentless_sequence != null && indentless_sequence.hasOwnProperty ("__kwargtrans__"))) {;
			var indentless_sequence = false;
		};
		if (self.check_token (AliasToken)) {
			var token = self.get_token ();
			var event = AliasEvent (token.value, token.start_mark, token.end_mark);
			self.state = self.states.py_pop ();
		}
		else {
			var anchor = null;
			var tag = null;
			var __left0__ = null;
			var start_mark = __left0__;
			var end_mark = __left0__;
			var tag_mark = __left0__;
			if (self.check_token (AnchorToken)) {
				var token = self.get_token ();
				var start_mark = token.start_mark;
				var end_mark = token.end_mark;
				var anchor = token.value;
				if (self.check_token (TagToken)) {
					var token = self.get_token ();
					var tag_mark = token.start_mark;
					var end_mark = token.end_mark;
					var tag = token.value;
				}
			}
			else if (self.check_token (TagToken)) {
				var token = self.get_token ();
				var __left0__ = token.start_mark;
				var start_mark = __left0__;
				var tag_mark = __left0__;
				var end_mark = token.end_mark;
				var tag = token.value;
				if (self.check_token (AnchorToken)) {
					var token = self.get_token ();
					var end_mark = token.end_mark;
					var anchor = token.value;
				}
			}
			if (tag !== null) {
				var __left0__ = tag;
				var handle = __left0__ [0];
				var suffix = __left0__ [1];
				if (handle !== null) {
					if (!__in__ (handle, self.tag_handles)) {
						var __except0__ = ParserError ('while parsing a node', start_mark, __mod__ ('found undefined tag handle %r', handle), tag_mark);
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var tag = self.tag_handles [handle] + suffix;
				}
				else {
					var tag = suffix;
				}
			}
			if (start_mark === null) {
				var __left0__ = self.xpeek_token ().start_mark;
				var start_mark = __left0__;
				var end_mark = __left0__;
			}
			var event = null;
			var implicit = tag === null || tag == '!';
			if (indentless_sequence && self.check_token (BlockEntryToken)) {
				var end_mark = self.peek_token ().end_mark;
				var event = SequenceStartEvent (anchor, tag, implicit, start_mark, end_mark);
				self.state = self.parse_indentless_sequence_entry;
			}
			else if (self.check_token (ScalarToken)) {
				var token = self.get_token ();
				var end_mark = token.end_mark;
				if (token.plain && tag === null || tag == '!') {
					var implicit = tuple ([true, false]);
				}
				else if (tag === null) {
					var implicit = tuple ([false, true]);
				}
				else {
					var implicit = tuple ([false, false]);
				}
				var event = ScalarEvent (anchor, tag, implicit, token.value, start_mark, end_mark, __kwargtrans__ ({style: token.style}));
				self.state = self.states.py_pop ();
			}
			else if (self.check_token (FlowSequenceStartToken)) {
				var end_mark = self.peek_token ().end_mark;
				var event = SequenceStartEvent (anchor, tag, implicit, start_mark, end_mark, __kwargtrans__ ({flow_style: true}));
				self.state = self.parse_flow_sequence_first_entry;
			}
			else if (self.check_token (FlowMappingStartToken)) {
				var end_mark = self.peek_token ().end_mark;
				var event = MappingStartEvent (anchor, tag, implicit, start_mark, end_mark, __kwargtrans__ ({flow_style: true}));
				self.state = self.parse_flow_mapping_first_key;
			}
			else if (block && self.check_token (BlockSequenceStartToken)) {
				var end_mark = self.peek_token ().start_mark;
				var event = SequenceStartEvent (anchor, tag, implicit, start_mark, end_mark, __kwargtrans__ ({flow_style: false}));
				self.state = self.parse_block_sequence_first_entry;
			}
			else if (block && self.check_token (BlockMappingStartToken)) {
				var end_mark = self.peek_token ().start_mark;
				var event = MappingStartEvent (anchor, tag, implicit, start_mark, end_mark, __kwargtrans__ ({flow_style: false}));
				self.state = self.parse_block_mapping_first_key;
			}
			else if (anchor !== null || tag !== null) {
				var event = ScalarEvent (anchor, tag, tuple ([implicit, false]), '', start_mark, end_mark);
				self.state = self.states.py_pop ();
			}
			else {
				if (block) {
					var node = 'block';
				}
				else {
					var node = 'flow';
				}
				var token = self.peek_token ();
				var __except0__ = ParserError (__mod__ ('while parsing a %s node', node), start_mark, __mod__ ('expected the node content, but found %r', token.id), token.start_mark);
				__except0__.__cause__ = null;
				throw __except0__;
			}
		}
		return event;
	});},
	get parse_block_sequence_first_entry () {return __get__ (this, function (self) {
		var token = self.get_token ();
		self.marks.append (token.start_mark);
		return self.parse_block_sequence_entry ();
	});},
	get parse_block_sequence_entry () {return __get__ (this, function (self) {
		if (self.check_token (BlockEntryToken)) {
			var token = self.get_token ();
			if (!(self.check_token (BlockEntryToken, BlockEndToken))) {
				self.states.append (self.parse_block_sequence_entry);
				return self.parse_block_node ();
			}
			else {
				self.state = self.parse_block_sequence_entry;
				return self.process_empty_scalar (token.end_mark);
			}
		}
		if (!(self.check_token (BlockEndToken))) {
			var token = self.peek_token ();
			var __except0__ = ParserError ('while parsing a block collection', self.marks [-(1)], __mod__ ('expected <block end>, but found %r', token.id), token.start_mark);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var token = self.get_token ();
		var event = SequenceEndEvent (token.start_mark, token.end_mark);
		self.state = self.states.py_pop ();
		self.marks.py_pop ();
		return event;
	});},
	get parse_indentless_sequence_entry () {return __get__ (this, function (self) {
		if (self.check_token (BlockEntryToken)) {
			var token = self.get_token ();
			if (!(self.check_token (BlockEntryToken, KeyToken, ValueToken, BlockEndToken))) {
				self.states.append (self.parse_indentless_sequence_entry);
				return self.parse_block_node ();
			}
			else {
				self.state = self.parse_indentless_sequence_entry;
				return self.process_empty_scalar (token.end_mark);
			}
		}
		var token = self.peek_token ();
		var event = SequenceEndEvent (token.start_mark, token.start_mark);
		self.state = self.states.py_pop ();
		return event;
	});},
	get parse_block_mapping_first_key () {return __get__ (this, function (self) {
		var token = self.get_token ();
		self.marks.append (token.start_mark);
		return self.parse_block_mapping_key ();
	});},
	get parse_block_mapping_key () {return __get__ (this, function (self) {
		if (self.check_token (KeyToken)) {
			var token = self.get_token ();
			if (!(self.check_token (KeyToken, ValueToken, BlockEndToken))) {
				self.states.append (self.parse_block_mapping_value);
				return self.parse_block_node_or_indentless_sequence ();
			}
			else {
				self.state = self.parse_block_mapping_value;
				return self.process_empty_scalar (token.end_mark);
			}
		}
		if (!(self.check_token (BlockEndToken))) {
			var token = self.peek_token ();
			var __except0__ = ParserError ('while parsing a block mapping', self.marks [-(1)], __mod__ ('expected <block end>, but found %r', token.id), token.start_mark);
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var token = self.get_token ();
		var event = MappingEndEvent (token.start_mark, token.end_mark);
		self.state = self.states.py_pop ();
		self.marks.py_pop ();
		return event;
	});},
	get parse_block_mapping_value () {return __get__ (this, function (self) {
		if (self.check_token (ValueToken)) {
			var token = self.get_token ();
			if (!(self.check_token (KeyToken, ValueToken, BlockEndToken))) {
				self.states.append (self.parse_block_mapping_key);
				return self.parse_block_node_or_indentless_sequence ();
			}
			else {
				self.state = self.parse_block_mapping_key;
				return self.process_empty_scalar (token.end_mark);
			}
		}
		else {
			self.state = self.parse_block_mapping_key;
			var token = self.peek_token ();
			return self.process_empty_scalar (token.start_mark);
		}
	});},
	get parse_flow_sequence_first_entry () {return __get__ (this, function (self) {
		var token = self.get_token ();
		self.marks.append (token.start_mark);
		return self.parse_flow_sequence_entry (__kwargtrans__ ({first: true}));
	});},
	get parse_flow_sequence_entry () {return __get__ (this, function (self, first) {
		if (typeof first == 'undefined' || (first != null && first.hasOwnProperty ("__kwargtrans__"))) {;
			var first = false;
		};
		if (!(self.check_token (FlowSequenceEndToken))) {
			if (!(first)) {
				if (self.check_token (FlowEntryToken)) {
					self.get_token ();
				}
				else {
					var token = self.peek_token ();
					var __except0__ = ParserError ('while parsing a flow sequence', self.marks [-(1)], __mod__ ("expected ',' or ']', but got %r", token.id), token.start_mark);
					__except0__.__cause__ = null;
					throw __except0__;
				}
			}
			if (self.check_token (KeyToken)) {
				var token = self.peek_token ();
				var event = MappingStartEvent (null, null, true, token.start_mark, token.end_mark, __kwargtrans__ ({flow_style: true}));
				self.state = self.parse_flow_sequence_entry_mapping_key;
				return event;
			}
			else if (!(self.check_token (FlowSequenceEndToken))) {
				self.states.append (self.parse_flow_sequence_entry);
				return self.parse_flow_node ();
			}
		}
		var token = self.get_token ();
		var event = SequenceEndEvent (token.start_mark, token.end_mark);
		self.state = self.states.py_pop ();
		self.marks.py_pop ();
		return event;
	});},
	get parse_flow_sequence_entry_mapping_key () {return __get__ (this, function (self) {
		var token = self.get_token ();
		if (!(self.check_token (ValueToken, FlowEntryToken, FlowSequenceEndToken))) {
			self.states.append (self.parse_flow_sequence_entry_mapping_value);
			return self.parse_flow_node ();
		}
		else {
			self.state = self.parse_flow_sequence_entry_mapping_value;
			return self.process_empty_scalar (token.end_mark);
		}
	});},
	get parse_flow_sequence_entry_mapping_value () {return __get__ (this, function (self) {
		if (self.check_token (ValueToken)) {
			var token = self.get_token ();
			if (!(self.check_token (FlowEntryToken, FlowSequenceEndToken))) {
				self.states.append (self.parse_flow_sequence_entry_mapping_end);
				return self.parse_flow_node ();
			}
			else {
				self.state = self.parse_flow_sequence_entry_mapping_end;
				return self.process_empty_scalar (token.end_mark);
			}
		}
		else {
			self.state = self.parse_flow_sequence_entry_mapping_end;
			var token = self.peek_token ();
			return self.process_empty_scalar (token.start_mark);
		}
	});},
	get parse_flow_sequence_entry_mapping_end () {return __get__ (this, function (self) {
		self.state = self.parse_flow_sequence_entry;
		var token = self.peek_token ();
		return MappingEndEvent (token.start_mark, token.start_mark);
	});},
	get parse_flow_mapping_first_key () {return __get__ (this, function (self) {
		var token = self.get_token ();
		self.marks.append (token.start_mark);
		return self.parse_flow_mapping_key (__kwargtrans__ ({first: true}));
	});},
	get parse_flow_mapping_key () {return __get__ (this, function (self, first) {
		if (typeof first == 'undefined' || (first != null && first.hasOwnProperty ("__kwargtrans__"))) {;
			var first = false;
		};
		if (!(self.check_token (FlowMappingEndToken))) {
			if (!(first)) {
				if (self.check_token (FlowEntryToken)) {
					self.get_token ();
				}
				else {
					var token = self.peek_token ();
					var __except0__ = ParserError ('while parsing a flow mapping', self.marks [-(1)], __mod__ ("expected ',' or '}', but got %r", token.id), token.start_mark);
					__except0__.__cause__ = null;
					throw __except0__;
				}
			}
			if (self.check_token (KeyToken)) {
				var token = self.get_token ();
				if (!(self.check_token (ValueToken, FlowEntryToken, FlowMappingEndToken))) {
					self.states.append (self.parse_flow_mapping_value);
					return self.parse_flow_node ();
				}
				else {
					self.state = self.parse_flow_mapping_value;
					return self.process_empty_scalar (token.end_mark);
				}
			}
			else if (!(self.check_token (FlowMappingEndToken))) {
				self.states.append (self.parse_flow_mapping_empty_value);
				return self.parse_flow_node ();
			}
		}
		var token = self.get_token ();
		var event = MappingEndEvent (token.start_mark, token.end_mark);
		self.state = self.states.py_pop ();
		self.marks.py_pop ();
		return event;
	});},
	get parse_flow_mapping_value () {return __get__ (this, function (self) {
		if (self.check_token (ValueToken)) {
			var token = self.get_token ();
			if (!(self.check_token (FlowEntryToken, FlowMappingEndToken))) {
				self.states.append (self.parse_flow_mapping_key);
				return self.parse_flow_node ();
			}
			else {
				self.state = self.parse_flow_mapping_key;
				return self.process_empty_scalar (token.end_mark);
			}
		}
		else {
			self.state = self.parse_flow_mapping_key;
			var token = self.peek_token ();
			return self.process_empty_scalar (token.start_mark);
		}
	});},
	get parse_flow_mapping_empty_value () {return __get__ (this, function (self) {
		self.state = self.parse_flow_mapping_key;
		return self.process_empty_scalar (self.peek_token ().start_mark);
	});},
	get process_empty_scalar () {return __get__ (this, function (self, mark) {
		return ScalarEvent (null, null, tuple ([true, false]), '', mark, mark);
	});}
});

//# sourceMappingURL=parser.map