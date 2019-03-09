'use strict';import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,__ipow__,
__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,filter,float,
getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";var __name__="error";export var __all__=["Mark","YAMLError","MarkedYAMLError"];export var Mark=__class__("Mark",[object],{__module__:__name__,get __init__(){return __get__(this,function(self,py_name,index,line,column,buffer,pointer){self.py_name=py_name;
self.index=index;self.line=line;self.column=column;self.buffer=buffer;self.pointer=pointer})},get get_snippet(){return __get__(this,function(self,indent,max_length){if(typeof indent=="undefined"||indent!=null&&indent.hasOwnProperty("__kwargtrans__"))var indent=4;if(typeof max_length=="undefined"||max_length!=null&&max_length.hasOwnProperty("__kwargtrans__"))var max_length=75;if(self.buffer===null)return null;var head="";var start=self.pointer;while(start>0&&!__in__(self.buffer[start-1],"\x00\r\n\u0085\u2028\u2029")){start--;
if(self.pointer-start>max_length/2-1){var head=" ... ";start+=5;break}}var tail="";var end=self.pointer;while(end<len(self.buffer)&&!__in__(self.buffer[end],"\x00\r\n\u0085\u2028\u2029")){end++;if(end-self.pointer>max_length/2-1){var tail=" ... ";end-=5;break}}var snippet=self.buffer.__getslice__(start,end,1);return" "*indent+head+snippet+tail+"\n"+" "*(indent+self.pointer-start+len(head))+"^"})},get __str__(){return __get__(this,function(self){var snippet=self.get_snippet();var where=__mod__('  in "%s", line %d, column %d',
tuple([self.py_name,self.line+1,self.column+1]));if(snippet!==null)where+=":\n"+snippet;return where})}});export var YAMLError=__class__("YAMLError",[Exception],{__module__:__name__});export var MarkedYAMLError=__class__("MarkedYAMLError",[YAMLError],{__module__:__name__,get __init__(){return __get__(this,function(self,context,context_mark,problem,problem_mark,note){if(typeof context=="undefined"||context!=null&&context.hasOwnProperty("__kwargtrans__"))var context=null;if(typeof context_mark=="undefined"||
context_mark!=null&&context_mark.hasOwnProperty("__kwargtrans__"))var context_mark=null;if(typeof problem=="undefined"||problem!=null&&problem.hasOwnProperty("__kwargtrans__"))var problem=null;if(typeof problem_mark=="undefined"||problem_mark!=null&&problem_mark.hasOwnProperty("__kwargtrans__"))var problem_mark=null;if(typeof note=="undefined"||note!=null&&note.hasOwnProperty("__kwargtrans__"))var note=null;self.context=context;self.context_mark=context_mark;self.problem=problem;self.problem_mark=
problem_mark;self.note=note})},get __str__(){return __get__(this,function(self){var lines=[];if(self.context!==null)lines.append(self.context);if(self.context_mark!==null&&(self.problem===null||self.problem_mark===null||self.context_mark.py_name!=self.problem_mark.py_name||self.context_mark.line!=self.problem_mark.line||self.context_mark.column!=self.problem_mark.column))lines.append(str(self.context_mark));if(self.problem!==null)lines.append(self.problem);if(self.problem_mark!==null)lines.append(str(self.problem_mark));
if(self.note!==null)lines.append(self.note);return"\n".join(lines)})}});

//# sourceMappingURL=error.map