'use strict';var re={};import{AssertionError,AttributeError,BaseException,DeprecationWarning,Exception,IndexError,IterableError,KeyError,NotImplementedError,RuntimeWarning,StopIteration,UserWarning,ValueError,Warning,__JsIterator__,__PyIterator__,__Terminal__,__add__,__and__,__call__,__class__,__envir__,__eq__,__floordiv__,__ge__,__get__,__getcm__,__getitem__,__getslice__,__getsm__,__gt__,__i__,__iadd__,__iand__,__idiv__,__ijsmod__,__ilshift__,__imatmul__,__imod__,__imul__,__in__,__init__,__ior__,
__ipow__,__irshift__,__isub__,__ixor__,__jsUsePyNext__,__jsmod__,__k__,__kwargtrans__,__le__,__lshift__,__lt__,__matmul__,__mergefields__,__mergekwargtrans__,__mod__,__mul__,__ne__,__neg__,__nest__,__or__,__pow__,__pragma__,__proxy__,__pyUseJsNext__,__rshift__,__setitem__,__setproperty__,__setslice__,__sort__,__specialattrib__,__sub__,__super__,__t__,__terminal__,__truediv__,__withblock__,__xor__,abs,all,any,assert,bool,bytearray,bytes,callable,chr,copy,deepcopy,delattr,dict,dir,divmod,enumerate,
filter,float,getattr,hasattr,input,int,isinstance,issubclass,len,list,map,max,min,object,ord,pow,print,property,py_TypeError,py_iter,py_metatype,py_next,py_reversed,py_typeof,range,repr,round,set,setattr,sorted,str,sum,tuple,zip}from"./org.transcrypt.__runtime__.js";import*as __module_re__ from"./re.js";__nest__(re,"",__module_re__);import{Mark,YAMLError}from"./error.js";var __name__="reader";export var __all__=["Reader","ReaderError"];export var ReaderError=__class__("ReaderError",[YAMLError],{__module__:__name__,
get __init__(){return __get__(this,function(self,py_name,position,character,encoding,reason){self.py_name=py_name;self.character=character;self.position=position;self.encoding=encoding;self.reason=reason})},get __str__(){return __get__(this,function(self){if(isinstance(self.character,bytes))return __mod__("'%s' codec can't decode byte #x%02x: %s\n  in \"%s\", position %d",tuple([self.encoding,ord(self.character),self.reason,self.py_name,self.position]));else return __mod__('unacceptable character #x%04x: %s\n  in "%s", position %d',
tuple([self.character,self.reason,self.py_name,self.position]))})}});export var Reader=__class__("Reader",[object],{__module__:__name__,get __init__(){return __get__(this,function(self,stream){self.py_name=null;self.stream=null;self.stream_pointer=0;self.eof=true;self.buffer="";self.pointer=0;self.raw_buffer=null;self.raw_decode=null;self.encoding=null;self.index=0;self.line=0;self.column=0;if(isinstance(stream,str)){self.py_name="<unicode string>";self.check_printable(stream);self.buffer=stream+
"\x00"}else if(isinstance(stream,bytes)){self.py_name="<byte string>";self.raw_buffer=stream;self.determine_encoding()}else{self.stream=stream;self.py_name=getattr(stream,"name","<file>");self.eof=false;self.raw_buffer=null;self.determine_encoding()}})},get peek(){return __get__(this,function(self,index){if(typeof index=="undefined"||index!=null&&index.hasOwnProperty("__kwargtrans__"))var index=0;try{return self.buffer[self.pointer+index]}catch(__except0__){if(isinstance(__except0__,IndexError)){self.py_update(index+
1);return self.buffer[self.pointer+index]}else throw __except0__;}})},get prefix(){return __get__(this,function(self,length){if(typeof length=="undefined"||length!=null&&length.hasOwnProperty("__kwargtrans__"))var length=1;if(self.pointer+length>=len(self.buffer))self.py_update(length);return self.buffer.__getslice__(self.pointer,self.pointer+length,1)})},get forward(){return __get__(this,function(self,length){if(typeof length=="undefined"||length!=null&&length.hasOwnProperty("__kwargtrans__"))var length=
1;if(self.pointer+length+1>=len(self.buffer))self.py_update(length+1);while(length){var ch=self.buffer[self.pointer];self.pointer++;self.index++;if(__in__(ch,"\n\u0085\u2028\u2029")||ch=="\r"&&self.buffer[self.pointer]!="\n"){self.line++;self.column=0}else if(ch!="\ufeff")self.column++;length--}})},get get_mark(){return __get__(this,function(self){if(self.stream===null)return Mark(self.py_name,self.index,self.line,self.column,self.buffer,self.pointer);else return Mark(self.py_name,self.index,self.line,
self.column,null,null)})},get determine_encoding(){return __get__(this,function(self){while(!self.eof&&(self.raw_buffer===null||len(self.raw_buffer)<2))self.update_raw();if(isinstance(self.raw_buffer,bytes)){self.raw_decode=codecs.utf_8_decode;self.encoding="utf-8"}self.py_update(1)})},NON_PRINTABLE:re.compile("[^\t\n\r -~\u0085\u00a0-\ud7ff\ue000-\ufffd]"),get check_printable(){return __get__(this,function(self,data){var match=self.NON_PRINTABLE.search(data);if(match){var character=match.group();
var position=self.index+(len(self.buffer)-self.pointer)+match.start();var __except0__=ReaderError(self.py_name,position,ord(character),"unicode","special characters are not allowed");__except0__.__cause__=null;throw __except0__;}})},get py_update(){return __get__(this,function(self,length){if(self.raw_buffer===null)return;self.buffer=self.buffer.__getslice__(self.pointer,null,1);self.pointer=0;while(len(self.buffer)<length){if(!self.eof)self.update_raw();if(self.raw_decode!==null)try{var __left0__=
self.raw_decode(self.raw_buffer,"strict",self.eof);var data=__left0__[0];var converted=__left0__[1]}catch(__except0__){if(isinstance(__except0__,UnicodeDecodeError)){var exc=__except0__;var character=self.raw_buffer[exc.start];if(self.stream!==null)var position=self.stream_pointer-len(self.raw_buffer)+exc.start;else var position=exc.start;var __except1__=ReaderError(self.py_name,position,character,exc.encoding,exc.reason);__except1__.__cause__=null;throw __except1__;}else throw __except0__;}else{var data=
self.raw_buffer;var converted=len(data)}self.check_printable(data);self.buffer+=data;self.raw_buffer=self.raw_buffer.__getslice__(converted,null,1);if(self.eof){self.buffer+="\x00";self.raw_buffer=null;break}}})},get update_raw(){return __get__(this,function(self,size){if(typeof size=="undefined"||size!=null&&size.hasOwnProperty("__kwargtrans__"))var size=4096;var data=self.stream.read(size);if(self.raw_buffer===null)self.raw_buffer=data;else self.raw_buffer+=data;self.stream_pointer+=len(data);if(!data)self.eof=
true})}});

//# sourceMappingURL=reader.map