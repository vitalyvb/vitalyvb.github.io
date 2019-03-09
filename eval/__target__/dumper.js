// Transcrypt'ed from Python, 2019-03-09 12:41:32
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {BaseResolver, Resolver, ResolverError} from './resolver.js';
import {BaseRepresenter, Representer, RepresenterError, SafeRepresenter} from './representer.js';
import {Serializer, SerializerError} from './serializer.js';
import {Emitter, EmitterError, ScalarAnalysis} from './emitter.js';
var __name__ = 'dumper';
export var __all__ = ['BaseDumper', 'SafeDumper', 'Dumper'];
export var BaseDumper =  __class__ ('BaseDumper', [Emitter, Serializer, BaseRepresenter, BaseResolver], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, stream, default_style, default_flow_style, canonical, indent, width, allow_unicode, line_break, encoding, explicit_start, explicit_end, version, tags) {
		if (typeof default_style == 'undefined' || (default_style != null && default_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_style = null;
		};
		if (typeof default_flow_style == 'undefined' || (default_flow_style != null && default_flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_flow_style = null;
		};
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
		Emitter.__init__ (self, stream, __kwargtrans__ ({canonical: canonical, indent: indent, width: width, allow_unicode: allow_unicode, line_break: line_break}));
		Serializer.__init__ (self, __kwargtrans__ ({encoding: encoding, explicit_start: explicit_start, explicit_end: explicit_end, version: version, tags: tags}));
		Representer.__init__ (self, __kwargtrans__ ({default_style: default_style, default_flow_style: default_flow_style}));
		Resolver.__init__ (self);
	});}
});
export var SafeDumper =  __class__ ('SafeDumper', [Emitter, Serializer, SafeRepresenter, Resolver], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, stream, default_style, default_flow_style, canonical, indent, width, allow_unicode, line_break, encoding, explicit_start, explicit_end, version, tags) {
		if (typeof default_style == 'undefined' || (default_style != null && default_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_style = null;
		};
		if (typeof default_flow_style == 'undefined' || (default_flow_style != null && default_flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_flow_style = null;
		};
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
		Emitter.__init__ (self, stream, __kwargtrans__ ({canonical: canonical, indent: indent, width: width, allow_unicode: allow_unicode, line_break: line_break}));
		Serializer.__init__ (self, __kwargtrans__ ({encoding: encoding, explicit_start: explicit_start, explicit_end: explicit_end, version: version, tags: tags}));
		SafeRepresenter.__init__ (self, __kwargtrans__ ({default_style: default_style, default_flow_style: default_flow_style}));
		Resolver.__init__ (self);
	});}
});
export var Dumper =  __class__ ('Dumper', [Emitter, Serializer, Representer, Resolver], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, stream, default_style, default_flow_style, canonical, indent, width, allow_unicode, line_break, encoding, explicit_start, explicit_end, version, tags) {
		if (typeof default_style == 'undefined' || (default_style != null && default_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_style = null;
		};
		if (typeof default_flow_style == 'undefined' || (default_flow_style != null && default_flow_style.hasOwnProperty ("__kwargtrans__"))) {;
			var default_flow_style = null;
		};
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
		Emitter.__init__ (self, stream, __kwargtrans__ ({canonical: canonical, indent: indent, width: width, allow_unicode: allow_unicode, line_break: line_break}));
		Serializer.__init__ (self, __kwargtrans__ ({encoding: encoding, explicit_start: explicit_start, explicit_end: explicit_end, version: version, tags: tags}));
		Representer.__init__ (self, __kwargtrans__ ({default_style: default_style, default_flow_style: default_flow_style}));
		Resolver.__init__ (self);
	});}
});

//# sourceMappingURL=dumper.map