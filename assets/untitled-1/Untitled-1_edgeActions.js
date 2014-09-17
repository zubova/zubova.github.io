
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",399,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",800,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3D-eye0001}","mouseout",function(sym,e){sym.$("_3D-eye0001").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1200,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HeadSt}","mouseout",function(sym,e){sym.$("HeadSt").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1600,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LegSt}","mouseout",function(sym,e){sym.$("LegSt").hide();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2400,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HandHif22}","mouseover",function(sym,e){sym.$("Hand00013").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Hand00013}","click",function(sym,e){sym.play("six");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Hand00013}","mousemove",function(sym,e){sym.$("Hand00013").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Hand00013}","mouseout",function(sym,e){sym.$("Hand00013").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HeadSt}","mousemove",function(sym,e){sym.$("HeadSt").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HeadSt}","click",function(sym,e){sym.play("eight");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_head-gif2}","mouseover",function(sym,e){sym.$("HeadSt").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3200,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3D-eye0001}","mousemove",function(sym,e){sym.$("_3D-eye0001").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3D-eye0001}","click",function(sym,e){sym.play("ten");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3D-eye2}","mouseover",function(sym,e){sym.$("_3D-eye0001").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3600,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var vimeo=$("<iframe/>");sym.$("video").append(vimeo);vimeo.attr('type','text/html');vimeo.attr('width','500');vimeo.attr('height','281');vimeo.attr('src','https://player.vimeo.com/video/106367659');vimeo.attr('frameborder','0');vimeo.attr('allowfullscreen','yes');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LegSt}","mousemove",function(sym,e){sym.$("LegSt").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LegSt}","click",function(sym,e){sym.play("twelve");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Leg_Gif2}","mouseover",function(sym,e){sym.$("LegSt").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4800,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${__3D-eye0001Copy}","click",function(sym,e){sym.play("one");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_LegStCopy}","click",function(sym,e){sym.play("one");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Hand00013Copy}","click",function(sym,e){sym.play("one");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_HeadStCopy}","click",function(sym,e){sym.play("one");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Text7}","click",function(sym,e){window.open("mailto:verymuchmelon@gmail.com","_blank");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Symbol_1'
(function(symbolName){})("Symbol_1");
//Edge symbol end:'Symbol_1'

//=========================================================

//Edge symbol: 'handSt'
(function(symbolName){})("handSt");
//Edge symbol end:'handSt'

//=========================================================

//Edge symbol: 'box1'
(function(symbolName){})("box1");
//Edge symbol end:'box1'

//=========================================================

//Edge symbol: 'handSt1'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_handSt}","focus",function(sym,e){});
//Edge binding end
})("handSt1");
//Edge symbol end:'handSt1'

//=========================================================

//Edge symbol: 'handst'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_handSt12}","mouseleave",function(sym,e){sym.play(start);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_handSt12}","focus",function(sym,e){sym.play(two);});
//Edge binding end
})("handst");
//Edge symbol end:'handst'

//=========================================================

//Edge symbol: 'video'
(function(symbolName){})("video");
//Edge symbol end:'video'
})(jQuery,AdobeEdge,"EDGE-107572554");