// Transcrypt'ed from Python, 2019-03-09 12:55:33
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = 'copyreg';
export var __all__ = ['pickle', 'constructor', 'add_extension', 'remove_extension', 'clear_extension_cache'];
export var dispatch_table = dict ({});
export var pickle = function (ob_type, pickle_function, constructor_ob) {
	if (typeof constructor_ob == 'undefined' || (constructor_ob != null && constructor_ob.hasOwnProperty ("__kwargtrans__"))) {;
		var constructor_ob = null;
	};
	if (!(callable (pickle_function))) {
		var __except0__ = py_TypeError ('reduction functions must be callable');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	dispatch_table [ob_type] = pickle_function;
	if (constructor_ob !== null) {
		constructor (constructor_ob);
	}
};
export var constructor = function (object) {
	if (!(callable (object))) {
		var __except0__ = py_TypeError ('constructors must be callable');
		__except0__.__cause__ = null;
		throw __except0__;
	}
};
export var _reconstructor = function (cls, base, state) {
	if (base === object) {
		var obj = object.__new__ (cls);
	}
	else {
		var obj = base.__new__ (cls, state);
		if (base.__init__ != object.__init__) {
			base.__init__ (obj, state);
		}
	}
	return obj;
};
export var _HEAPTYPE = 1 << 9;
export var _reduce_ex = function (self, proto) {
	var __break0__ = false;
	for (var base of self.__class__.__mro__) {
		if (hasattr (base, '__flags__') && !(base.__flags__ & _HEAPTYPE)) {
			__break0__ = true;
			break;
		}
	}
	if (!__break0__) {
		var base = object;
	}
	if (base === object) {
		var state = null;
	}
	else {
		if (base === self.__class__) {
			var __except0__ = py_TypeError (__mod__ ("can't pickle %s objects", base.__name__));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var state = base (self);
	}
	var args = tuple ([self.__class__, base, state]);
	try {
		var getstate = self.__getstate__;
		try {
			var dict = getstate ();
		}
		catch (__except0__) {
		}
	}
	catch (__except0__) {
		if (isinstance (__except0__, AttributeError)) {
			if (getattr (self, '__slots__', null)) {
				var __except1__ = py_TypeError ('a class that defines __slots__ without defining __getstate__ cannot be pickled');
				__except1__.__cause__ = null;
				throw __except1__;
			}
			try {
				var dict = self.__dict__;
			}
			catch (__except1__) {
				if (isinstance (__except1__, AttributeError)) {
					var dict = null;
				}
				else {
					throw __except1__;
				}
			}
		}
		else {
			throw __except0__;
		}
	}
	if (dict) {
		return tuple ([_reconstructor, args, dict]);
	}
	else {
		return tuple ([_reconstructor, args]);
	}
};
export var __newobj__ = function (cls) {
	var args = tuple ([].slice.apply (arguments).slice (1));
	return cls.__new__ (cls, ...args);
};
export var __newobj_ex__ = function (cls, args, kwargs) {
	return cls.__new__ (cls, ...args, __kwargtrans__ (kwargs));
};
export var _slotnames = function (cls) {
	var names = cls.__dict__.py_get ('__slotnames__');
	if (names !== null) {
		return names;
	}
	var names = [];
	if (!(hasattr (cls, '__slots__'))) {
		// pass;
	}
	else {
		for (var c of cls.__mro__) {
			if (__in__ ('__slots__', c.__dict__)) {
				var slots = c.__dict__ ['__slots__'];
				if (isinstance (slots, str)) {
					var slots = tuple ([slots]);
				}
				for (var py_name of slots) {
					if (__in__ (py_name, tuple (['__dict__', '__weakref__']))) {
						continue;
					}
					else if (py_name.startswith ('__') && !(py_name.endswith ('__'))) {
						var stripped = c.__name__.lstrip ('_');
						if (stripped) {
							names.append (__mod__ ('_%s%s', tuple ([stripped, py_name])));
						}
						else {
							names.append (py_name);
						}
					}
					else {
						names.append (py_name);
					}
				}
			}
		}
	}
	try {
		cls.__slotnames__ = names;
	}
	catch (__except0__) {
		// pass;
	}
	return names;
};
export var _extension_registry = dict ({});
export var _inverted_registry = dict ({});
export var _extension_cache = dict ({});
export var add_extension = function (module, py_name, code) {
	var code = int (code);
	if (!((1 <= code && code <= 2147483647))) {
		var __except0__ = ValueError ('code out of range');
		__except0__.__cause__ = null;
		throw __except0__;
	}
	var key = tuple ([module, py_name]);
	if (_extension_registry.py_get (key) == code && _inverted_registry.py_get (code) == key) {
		return ;
	}
	if (__in__ (key, _extension_registry)) {
		var __except0__ = ValueError (__mod__ ('key %s is already registered with code %s', tuple ([key, _extension_registry [key]])));
		__except0__.__cause__ = null;
		throw __except0__;
	}
	if (__in__ (code, _inverted_registry)) {
		var __except0__ = ValueError (__mod__ ('code %s is already in use for key %s', tuple ([code, _inverted_registry [code]])));
		__except0__.__cause__ = null;
		throw __except0__;
	}
	_extension_registry [key] = code;
	_inverted_registry [code] = key;
};
export var remove_extension = function (module, py_name, code) {
	var key = tuple ([module, py_name]);
	if (_extension_registry.py_get (key) != code || _inverted_registry.py_get (code) != key) {
		var __except0__ = ValueError (__mod__ ('key %s is not registered with code %s', tuple ([key, code])));
		__except0__.__cause__ = null;
		throw __except0__;
	}
	delete _extension_registry [key];
	delete _inverted_registry [code];
	if (__in__ (code, _extension_cache)) {
		delete _extension_cache [code];
	}
};
export var clear_extension_cache = function () {
	_extension_cache.py_clear ();
};

//# sourceMappingURL=copyreg.map