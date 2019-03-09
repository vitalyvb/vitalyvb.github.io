'use strict';import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,__ipow__,
__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,filter,float,
getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";var __name__="tokens";export var Token=__class__("Token",[object],{__module__:__name__,get __init__(){return __get__(this,function(self,start_mark,end_mark){self.start_mark=start_mark;self.end_mark=end_mark})},get __repr__(){return __get__(this,function(self){var attributes=
function(){var __accu0__=[];for(var key of self.__dict__)if(!key.endswith("_mark"))__accu0__.append(key);return __accu0__}();attributes.py_sort();var py_arguments=", ".join(function(){var __accu0__=[];for(var key of attributes)__accu0__.append(__mod__("%s=%r",tuple([key,getattr(self,key)])));return __accu0__}());return __mod__("%s(%s)",tuple([self.__class__.__name__,py_arguments]))})}});export var DirectiveToken=__class__("DirectiveToken",[Token],{__module__:__name__,id:"<directive>",get __init__(){return __get__(this,
function(self,py_name,value,start_mark,end_mark){self.py_name=py_name;self.value=value;self.start_mark=start_mark;self.end_mark=end_mark})}});export var DocumentStartToken=__class__("DocumentStartToken",[Token],{__module__:__name__,id:"<document start>"});export var DocumentEndToken=__class__("DocumentEndToken",[Token],{__module__:__name__,id:"<document end>"});export var StreamStartToken=__class__("StreamStartToken",[Token],{__module__:__name__,id:"<stream start>",get __init__(){return __get__(this,
function(self,start_mark,end_mark,encoding){if(typeof start_mark=="undefined"||start_mark!=null&&start_mark.hasOwnProperty("__kwargtrans__"))var start_mark=null;if(typeof end_mark=="undefined"||end_mark!=null&&end_mark.hasOwnProperty("__kwargtrans__"))var end_mark=null;if(typeof encoding=="undefined"||encoding!=null&&encoding.hasOwnProperty("__kwargtrans__"))var encoding=null;self.start_mark=start_mark;self.end_mark=end_mark;self.encoding=encoding})}});export var StreamEndToken=__class__("StreamEndToken",
[Token],{__module__:__name__,id:"<stream end>"});export var BlockSequenceStartToken=__class__("BlockSequenceStartToken",[Token],{__module__:__name__,id:"<block sequence start>"});export var BlockMappingStartToken=__class__("BlockMappingStartToken",[Token],{__module__:__name__,id:"<block mapping start>"});export var BlockEndToken=__class__("BlockEndToken",[Token],{__module__:__name__,id:"<block end>"});export var FlowSequenceStartToken=__class__("FlowSequenceStartToken",[Token],{__module__:__name__,
id:"["});export var FlowMappingStartToken=__class__("FlowMappingStartToken",[Token],{__module__:__name__,id:"{"});export var FlowSequenceEndToken=__class__("FlowSequenceEndToken",[Token],{__module__:__name__,id:"]"});export var FlowMappingEndToken=__class__("FlowMappingEndToken",[Token],{__module__:__name__,id:"}"});export var KeyToken=__class__("KeyToken",[Token],{__module__:__name__,id:"?"});export var ValueToken=__class__("ValueToken",[Token],{__module__:__name__,id:":"});export var BlockEntryToken=
__class__("BlockEntryToken",[Token],{__module__:__name__,id:"-"});export var FlowEntryToken=__class__("FlowEntryToken",[Token],{__module__:__name__,id:","});export var AliasToken=__class__("AliasToken",[Token],{__module__:__name__,id:"<alias>",get __init__(){return __get__(this,function(self,value,start_mark,end_mark){self.value=value;self.start_mark=start_mark;self.end_mark=end_mark})}});export var AnchorToken=__class__("AnchorToken",[Token],{__module__:__name__,id:"<anchor>",get __init__(){return __get__(this,
function(self,value,start_mark,end_mark){self.value=value;self.start_mark=start_mark;self.end_mark=end_mark})}});export var TagToken=__class__("TagToken",[Token],{__module__:__name__,id:"<tag>",get __init__(){return __get__(this,function(self,value,start_mark,end_mark){self.value=value;self.start_mark=start_mark;self.end_mark=end_mark})}});export var ScalarToken=__class__("ScalarToken",[Token],{__module__:__name__,id:"<scalar>",get __init__(){return __get__(this,function(self,value,plain,start_mark,
end_mark,style){if(typeof style=="undefined"||style!=null&&style.hasOwnProperty("__kwargtrans__"))var style=null;self.value=value;self.plain=plain;self.start_mark=start_mark;self.end_mark=end_mark;self.style=style})}});

//# sourceMappingURL=tokens.map