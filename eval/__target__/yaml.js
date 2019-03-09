'use strict';import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,__ipow__,
__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,filter,float,
getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import{BaseLoader,Loader,SafeLoader,__all__}from"./loader.js";import{CollectionNode,MappingNode,Node,ScalarNode,SequenceNode}from"./nodes.js";import{AliasEvent,CollectionEndEvent,CollectionStartEvent,DocumentEndEvent,DocumentStartEvent,Event,MappingEndEvent,
MappingStartEvent,NodeEvent,ScalarEvent,SequenceEndEvent,SequenceStartEvent,StreamEndEvent,StreamStartEvent}from"./events.js";import{AliasToken,AnchorToken,BlockEndToken,BlockEntryToken,BlockMappingStartToken,BlockSequenceStartToken,DirectiveToken,DocumentEndToken,DocumentStartToken,FlowEntryToken,FlowMappingEndToken,FlowMappingStartToken,FlowSequenceEndToken,FlowSequenceStartToken,KeyToken,ScalarToken,StreamEndToken,StreamStartToken,TagToken,Token,ValueToken}from"./tokens.js";import{Mark,MarkedYAMLError,
YAMLError}from"./error.js";export{MappingEndEvent,FlowEntryToken,ValueToken,FlowSequenceEndToken,FlowMappingStartToken,FlowMappingEndToken,Loader,KeyToken,ScalarToken,Token,Mark,AnchorToken,BlockSequenceStartToken,StreamStartToken,StreamEndEvent,YAMLError,TagToken,CollectionNode,SequenceNode,MappingNode,NodeEvent,__all__,ScalarNode,StreamStartEvent,Node,BlockEntryToken,CollectionEndEvent,MarkedYAMLError,ScalarEvent,StreamEndToken,DocumentStartToken,MappingStartEvent,SequenceEndEvent,DocumentStartEvent,
AliasEvent,Event,BaseLoader,BlockEndToken,BlockMappingStartToken,DocumentEndEvent,DirectiveToken,DocumentEndToken,SequenceStartEvent,SafeLoader,FlowSequenceStartToken,AliasToken,CollectionStartEvent};var __name__="yaml";export var __version__="3.13";export var __with_libyaml__=false;export var scan=function*(stream,xLoader){if(typeof xLoader=="undefined"||xLoader!=null&&xLoader.hasOwnProperty("__kwargtrans__"))var xLoader=Loader;var loader=xLoader(stream);try{while(loader.check_token())yield loader.get_token()}finally{loader.dispose()}};
export var parse=function*(stream,xLoader){if(typeof xLoader=="undefined"||xLoader!=null&&xLoader.hasOwnProperty("__kwargtrans__"))var xLoader=Loader;var loader=xLoader(stream);try{while(loader.check_event())yield loader.get_event()}finally{loader.dispose()}};export var compose=function(stream,xLoader){if(typeof xLoader=="undefined"||xLoader!=null&&xLoader.hasOwnProperty("__kwargtrans__"))var xLoader=Loader;var loader=xLoader(stream);try{return loader.get_single_node()}finally{loader.dispose()}};
export var compose_all=function*(stream,xLoader){if(typeof xLoader=="undefined"||xLoader!=null&&xLoader.hasOwnProperty("__kwargtrans__"))var xLoader=Loader;var loader=xLoader(stream);try{while(loader.check_node())yield loader.get_node()}finally{loader.dispose()}};export var load=function(stream,xLoader){if(typeof xLoader=="undefined"||xLoader!=null&&xLoader.hasOwnProperty("__kwargtrans__"))var xLoader=Loader;var loader=xLoader(stream);try{return loader.get_single_data()}finally{loader.dispose()}};
export var load_all=function*(stream,xLoader){if(typeof xLoader=="undefined"||xLoader!=null&&xLoader.hasOwnProperty("__kwargtrans__"))var xLoader=Loader;var loader=xLoader(stream);try{while(loader.check_data())yield loader.get_data()}finally{loader.dispose()}};export var safe_load=function(stream){return load(stream,SafeLoader)};export var safe_load_all=function(stream){return load_all(stream,SafeLoader)};

//# sourceMappingURL=yaml.map