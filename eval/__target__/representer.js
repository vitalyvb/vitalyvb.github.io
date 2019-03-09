// Transcrypt'ed from Python, 2019-03-09 12:57:04
var copyreg = {};
var datetime = {};
var sys = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_datetime__ from './datetime.js';
__nest__ (datetime, '', __module_datetime__);
import * as __module_sys__ from './sys.js';
__nest__ (sys, '', __module_sys__);
import * as __module_copyreg__ from './copyreg.js';
__nest__ (copyreg, '', __module_copyreg__);
import {CollectionNode, MappingNode, Node, ScalarNode, SequenceNode} from './nodes.js';
import {Mark, MarkedYAMLError, YAMLError} from './error.js';
var __name__ = 'representer';
export var __all__ = ['BaseRepresenter', 'SafeRepresenter', 'Representer', 'RepresenterError'];
export var RepresenterError =  __class__ ('RepresenterError', [YAMLError], {
	__module__: __name__,
});
export var BaseRepresenter =  __class__ ('BaseRepresenter', [object], {
	__module__: __name__,
	yaml_representers: dict ({}),
	yaml_multi_representers: dict ({}),
	get __init__ () {return __get__ (this, function (self, default_style, default_flow_style) {
		if (typeof default_style == 'undefined' || (default_style != null && default_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_style = null;
		};
		if (typeof default_flow_style == 'undefined' || (default_flow_style != null && default_flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_flow_style = null;
		};
		self.default_style = default_style;
		self.default_flow_style = default_flow_style;
		self.represented_objects = dict ({});
		self.object_keeper = [];
		self.alias_key = null;
	});},
	get represent () {return __get__ (this, function (self, data) {
		var node = self.represent_data (data);
		self.serialize (node);
		self.represented_objects = dict ({});
		self.object_keeper = [];
		self.alias_key = null;
	});},
	get represent_data () {return __get__ (this, function (self, data) {
		if (self.ignore_aliases (data)) {
			self.alias_key = null;
		}
		else {
			self.alias_key = id (data);
		}
		if (self.alias_key !== null) {
			if (__in__ (self.alias_key, self.represented_objects)) {
				var node = self.represented_objects [self.alias_key];
				return node;
			}
			self.object_keeper.append (data);
		}
		var data_types = py_typeof (data).__mro__;
		if (__in__ (data_types [0], self.yaml_representers)) {
			var node = self.yaml_representers [data_types [0]] (self, data);
		}
		else {
			var __break0__ = false;
			for (var data_type of data_types) {
				if (__in__ (data_type, self.yaml_multi_representers)) {
					var node = self.yaml_multi_representers [data_type] (self, data);
					__break0__ = true;
					break;
				}
			}
			if (!__break0__) {
				if (__in__ (null, self.yaml_multi_representers)) {
					var node = self.yaml_multi_representers [null] (self, data);
				}
				else if (__in__ (null, self.yaml_representers)) {
					var node = self.yaml_representers [null] (self, data);
				}
				else {
					var node = ScalarNode (null, str (data));
				}
			}
		}
		return node;
	});},
	get add_representer () {return __getcm__ (this, function (cls, data_type, representer) {
		cls.yaml_representers [data_type] = representer;
	});},
	get add_multi_representer () {return __getcm__ (this, function (cls, data_type, representer) {
		cls.yaml_multi_representers [data_type] = representer;
	});},
	get represent_scalar () {return __get__ (this, function (self, tag, value, style) {
		if (typeof style == 'undefined' || (style != null && style.hasOwnProperty ("__kwargtrans__"))) {;
			var style = null;
		};
		if (style === null) {
			var style = self.default_style;
		}
		var node = ScalarNode (tag, value, __kwargtrans__ ({style: style}));
		if (self.alias_key !== null) {
			self.represented_objects [self.alias_key] = node;
		}
		return node;
	});},
	get represent_sequence () {return __get__ (this, function (self, tag, sequence, flow_style) {
		if (typeof flow_style == 'undefined' || (flow_style != null && flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var flow_style = null;
		};
		var value = [];
		var node = SequenceNode (tag, value, __kwargtrans__ ({flow_style: flow_style}));
		if (self.alias_key !== null) {
			self.represented_objects [self.alias_key] = node;
		}
		var best_style = true;
		for (var item of sequence) {
			var node_item = self.represent_data (item);
			if (!(isinstance (node_item, ScalarNode) && !(node_item.style))) {
				var best_style = false;
			}
			value.append (node_item);
		}
		if (flow_style === null) {
			if (self.default_flow_style !== null) {
				node.flow_style = self.default_flow_style;
			}
			else {
				node.flow_style = best_style;
			}
		}
		return node;
	});},
	get represent_mapping () {return __get__ (this, function (self, tag, mapping, flow_style) {
		if (typeof flow_style == 'undefined' || (flow_style != null && flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var flow_style = null;
		};
		var value = [];
		var node = MappingNode (tag, value, __kwargtrans__ ({flow_style: flow_style}));
		if (self.alias_key !== null) {
			self.represented_objects [self.alias_key] = node;
		}
		var best_style = true;
		if (hasattr (mapping, 'items')) {
			var mapping = list (mapping.py_items ());
			try {
				var mapping = sorted (mapping);
			}
			catch (__except0__) {
				if (isinstance (__except0__, py_TypeError)) {
					// pass;
				}
				else {
					throw __except0__;
				}
			}
		}
		for (var [item_key, item_value] of mapping) {
			var node_key = self.represent_data (item_key);
			var node_value = self.represent_data (item_value);
			if (!(isinstance (node_key, ScalarNode) && !(node_key.style))) {
				var best_style = false;
			}
			if (!(isinstance (node_value, ScalarNode) && !(node_value.style))) {
				var best_style = false;
			}
			value.append (tuple ([node_key, node_value]));
		}
		if (flow_style === null) {
			if (self.default_flow_style !== null) {
				node.flow_style = self.default_flow_style;
			}
			else {
				node.flow_style = best_style;
			}
		}
		return node;
	});},
	get ignore_aliases () {return __get__ (this, function (self, data) {
		return false;
	});}
});
export var SafeRepresenter =  __class__ ('SafeRepresenter', [BaseRepresenter], {
	__module__: __name__,
	get ignore_aliases () {return __get__ (this, function (self, data) {
		if (data === null) {
			return true;
		}
		if (isinstance (data, tuple) && data == tuple ([])) {
			return true;
		}
		if (isinstance (data, tuple ([str, bytes, bool, int, float]))) {
			return true;
		}
	});},
	get represent_none () {return __get__ (this, function (self, data) {
		return self.represent_scalar ('tag:yaml.org,2002:null', 'null');
	});},
	get represent_str () {return __get__ (this, function (self, data) {
		return self.represent_scalar ('tag:yaml.org,2002:str', data);
	});},
	get represent_binary () {return __get__ (this, function (self, data) {
		return self.represent_scalar ('tag:yaml.org,2002:null', 'null');
	});},
	get represent_bool () {return __get__ (this, function (self, data) {
		if (data) {
			var value = 'true';
		}
		else {
			var value = 'false';
		}
		return self.represent_scalar ('tag:yaml.org,2002:bool', value);
	});},
	get represent_int () {return __get__ (this, function (self, data) {
		return self.represent_scalar ('tag:yaml.org,2002:int', str (data));
	});},
	inf_value: 1e+300,
	get represent_float () {return __get__ (this, function (self, data) {
		if (data != data || data == 0.0 && data == 1.0) {
			var value = '.nan';
		}
		else if (data == self.inf_value) {
			var value = '.inf';
		}
		else if (data == -(self.inf_value)) {
			var value = '-.inf';
		}
		else {
			var value = repr (data).lower ();
			if (!__in__ ('.', value) && __in__ ('e', value)) {
				var value = value.py_replace ('e', '.0e', 1);
			}
		}
		return self.represent_scalar ('tag:yaml.org,2002:float', value);
	});},
	get represent_list () {return __get__ (this, function (self, data) {
		return self.represent_sequence ('tag:yaml.org,2002:seq', data);
	});},
	get represent_dict () {return __get__ (this, function (self, data) {
		return self.represent_mapping ('tag:yaml.org,2002:map', data);
	});},
	get represent_set () {return __get__ (this, function (self, data) {
		var value = dict ({});
		for (var key of data) {
			value [key] = null;
		}
		return self.represent_mapping ('tag:yaml.org,2002:set', value);
	});},
	get represent_date () {return __get__ (this, function (self, data) {
		var value = data.isoformat ();
		return self.represent_scalar ('tag:yaml.org,2002:timestamp', value);
	});},
	get represent_datetime () {return __get__ (this, function (self, data) {
		var value = data.isoformat (' ');
		return self.represent_scalar ('tag:yaml.org,2002:timestamp', value);
	});},
	get represent_yaml_object () {return __get__ (this, function (self, tag, data, cls, flow_style) {
		if (typeof flow_style == 'undefined' || (flow_style != null && flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var flow_style = null;
		};
		if (hasattr (data, '__getstate__')) {
			var state = data.__getstate__ ();
		}
		else {
			var state = data.__dict__.copy ();
		}
		return self.represent_mapping (tag, state, __kwargtrans__ ({flow_style: flow_style}));
	});},
	get represent_undefined () {return __get__ (this, function (self, data) {
		var __except0__ = RepresenterError (__mod__ ('cannot represent an object: %s', data));
		__except0__.__cause__ = null;
		throw __except0__;
	});}
});
SafeRepresenter.add_representer (py_typeof (null), SafeRepresenter.represent_none);
SafeRepresenter.add_representer (str, SafeRepresenter.represent_str);
SafeRepresenter.add_representer (bytes, SafeRepresenter.represent_binary);
SafeRepresenter.add_representer (bool, SafeRepresenter.represent_bool);
SafeRepresenter.add_representer (int, SafeRepresenter.represent_int);
SafeRepresenter.add_representer (float, SafeRepresenter.represent_float);
SafeRepresenter.add_representer (list, SafeRepresenter.represent_list);
SafeRepresenter.add_representer (tuple, SafeRepresenter.represent_list);
SafeRepresenter.add_representer (dict, SafeRepresenter.represent_dict);
SafeRepresenter.add_representer (set, SafeRepresenter.represent_set);
SafeRepresenter.add_representer (datetime.date, SafeRepresenter.represent_date);
SafeRepresenter.add_representer (datetime.datetime, SafeRepresenter.represent_datetime);
SafeRepresenter.add_representer (null, SafeRepresenter.represent_undefined);
export var Representer =  __class__ ('Representer', [SafeRepresenter], {
	__module__: __name__,
	get represent_complex () {return __get__ (this, function (self, data) {
		if (data.imag == 0.0) {
			var data = __mod__ ('%r', data.real);
		}
		else if (data.real == 0.0) {
			var data = __mod__ ('%rj', data.imag);
		}
		else if (data.imag > 0) {
			var data = __mod__ ('%r+%rj', tuple ([data.real, data.imag]));
		}
		else {
			var data = __mod__ ('%r%rj', tuple ([data.real, data.imag]));
		}
		return self.represent_scalar ('tag:yaml.org,2002:python/complex', data);
	});},
	get represent_tuple () {return __get__ (this, function (self, data) {
		return self.represent_sequence ('tag:yaml.org,2002:python/tuple', data);
	});},
	get represent_name () {return __get__ (this, function (self, data) {
		var py_name = __mod__ ('%s.%s', tuple ([data.__module__, data.__name__]));
		return self.represent_scalar ('tag:yaml.org,2002:python/name:' + py_name, '');
	});},
	get represent_module () {return __get__ (this, function (self, data) {
		return self.represent_scalar ('tag:yaml.org,2002:python/module:' + data.__name__, '');
	});},
	get represent_object () {return __get__ (this, function (self, data) {
		var cls = py_typeof (data);
		if (__in__ (cls, copyreg.dispatch_table)) {
			var reduce = copyreg.dispatch_table [cls] (data);
		}
		else if (hasattr (data, '__reduce_ex__')) {
			var reduce = data.__reduce_ex__ (2);
		}
		else if (hasattr (data, '__reduce__')) {
			var reduce = data.__reduce__ ();
		}
		else {
			var __except0__ = RepresenterError (__mod__ ('cannot represent object: %r', data));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var reduce = list (reduce) + [null, null, null, null, null];
		var ffunction = reduce [0];
		var args = reduce [1];
		var state = reduce [2];
		var listitems = reduce [3];
		var dictitems = reduce [4];
		var args = list (args);
		if (state === null) {
			var state = dict ({});
		}
		if (listitems !== null) {
			var listitems = list (listitems);
		}
		if (dictitems !== null) {
			var dictitems = dict (dictitems);
		}
		if (ffunction.__name__ == '__newobj__') {
			var ffunction = args [0];
			var args = args.__getslice__ (1, null, 1);
			var tag = 'tag:yaml.org,2002:python/object/new:';
			var newobj = true;
		}
		else {
			var tag = 'tag:yaml.org,2002:python/object/apply:';
			var newobj = false;
		}
		var function_name = __mod__ ('%s.%s', tuple ([ffunction.__module__, ffunction.__name__]));
		if (!(args) && !(listitems) && !(dictitems) && isinstance (state, dict) && newobj) {
			return self.represent_mapping ('tag:yaml.org,2002:python/object:' + function_name, state);
		}
		if (!(listitems) && !(dictitems) && isinstance (state, dict) && !(state)) {
			return self.represent_sequence (tag + function_name, args);
		}
		var value = dict ({});
		if (args) {
			value ['args'] = args;
		}
		if (state || !(isinstance (state, dict))) {
			value ['state'] = state;
		}
		if (listitems) {
			value ['listitems'] = listitems;
		}
		if (dictitems) {
			value ['dictitems'] = dictitems;
		}
		return self.represent_mapping (tag + function_name, value);
	});},
	get represent_ordered_dict () {return __get__ (this, function (self, data) {
		var data_type = py_typeof (data);
		var tag = __mod__ ('tag:yaml.org,2002:python/object/apply:%s.%s', tuple ([data_type.__module__, data_type.__name__]));
		var py_items = (function () {
			var __accu0__ = [];
			for (var [key, value] of data.py_items ()) {
				__accu0__.append ([key, value]);
			}
			return __accu0__;
		}) ();
		return self.represent_sequence (tag, [py_items]);
	});}
});
Representer.add_representer (tuple, Representer.represent_tuple);
Representer.add_representer (py_metatype, Representer.represent_name);
Representer.add_multi_representer (object, Representer.represent_object);

//# sourceMappingURL=representer.map