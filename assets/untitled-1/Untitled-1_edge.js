
(function($,Edge,compId){var _=null,y=true,n=false,e19='${_LegSt}',x2='3.0.0.322',x29='HandHif2',b='block',a='Base State',e41='${_Hand00012}',x16='hidden',s='style',x4='horizontal',i='none',x18='visible',lf='left',x31='192px',e24='${_Hand00013}',bg='background-color',x32='auto',e20='${_Leg_Gif2}',x45='box1',x52='video',tp='top',e48='${_handSt}',ov='overflow',e26='${_HandHif22}',x14='stage',zy='scaleY',t='transform',c='color',e21='${__3D-eye2}',x43='Rectangle',g='image',r='deg',x40='handSt',x30='0%',ky='skewY',mw='min-width',e51='${_handSt12}',m='rect',x34='0px',e25='${_HeadSt}',h='height',e27='${__3D-eye0001}',x49='handSt12',x47='handSt1',x5='rgba(0,0,0,0)',x44='rgba(192,192,192,1)',xc='rgba(0,0,0,1)',x42='161px',p='px',o='opacity',e22='${_video}',x17='rgba(0,0,49,1.00)',x35='Symbol_1',e37='${symbolSelector}',e46='${_Rectangle}',x38='Hand00012',x3='both',e36='${_HandHif2}',d='display',e23='${_head-gif2}',dt='Default Timeline',w='width',e28='${_Stage}',ql='linear',x1='3.0.0',x50='handst',zx='scaleX',x15='pointer';var im='images/';var g6='3D-eye2.gif',g7='head-gif2.gif',g11='HandHif22.gif',g12='Hand00013.png',g39='Hand00012.png',g13='LegSt.png',g33='HandHif2.gif',g8='Leg_Gif2.gif',g10='HeadSt.png',g9='3D-eye0001.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'preloadAudio':false};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:x3,cg:x4,iS:a,gpu:n,rI:n,cn:{dom:[{id:'video',v:i,t:m,r:['30.4%','36.8%','auto','auto','auto','auto']},{id:'_3D-eye2',t:g,r:['49.8%','34%','192px','192px','auto','auto'],cu:['pointer'],f:[x5,im+g6,'0px','0px']},{id:'head-gif2',t:g,r:['34%','36%','161px','161px','auto','auto'],cu:['pointer'],f:[x5,im+g7,'0px','0px']},{id:'Leg_Gif2',t:g,r:['66.2%','32.3%','206px','206px','auto','auto'],cu:['pointer'],f:[x5,im+g8,'0px','0px']},{id:'_3D-eye0001',v:i,t:g,r:['49.8%','34.2%','192px','192px','auto','auto'],cu:['pointer'],f:[x5,im+g9,'0px','0px']},{id:'HeadSt',v:i,t:g,r:['33.9%','36.2%','161px','161px','auto','auto'],cu:['pointer'],o:1,f:[x5,im+g10,'0px','0px']},{id:'HandHif22',t:g,r:['19.6%','31.7%','194px','194px','auto','auto'],o:0.41025641025641,f:[x5,im+g11,'0px','0px']},{id:'Hand00013',v:i,t:g,r:['19.7%','31.7%','192px','192px','auto','auto'],cu:['pointer'],o:1,f:[x5,im+g12,'0px','0px']},{id:'LegSt',t:g,r:['66.1%','32.5%','205px','205px','auto','auto'],cu:['pointer'],o:1,f:[x5,im+g13,'0px','0px']}],sI:[{id:'video',sN:'video',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:4800,a:y,l:{"one":0,"two":399,"three":800,"four":1200,"five":1551,"six":2000,"seven":2400,"eight":2800,"nine":3200,"ten":3600,"eleven":4000,"twelve":4400,"thirteen":4800},tt:[]}}},"Symbol_1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x29,r:[x30,x30,x31,x31,x32,x32],cu:[x15],f:[x5,im+g33,x34,x34]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"handSt":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x34,x34,x31,x31,x32,x32],overflow:x16,id:x38,o:1,t:g,f:[x5,im+g39,x34,x34]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"box1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x34,x34,x42,x42,x32,x32],o:0,id:x43,s:[0,xc,i],t:m,f:[x44]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"handSt1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x34,x34,x32,x32,x32,x32],overflow:x16,id:x40,cu:[x15],t:m}],sI:[{id:'handSt',sN:'handSt'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:50,a:y,tt:[]}}},"handst":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x49,t:m,r:[x34,x34,x32,x32,x32,x32]}],sI:[{id:'handSt12',sN:'handSt1'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:399,a:y,tt:[]}}},"video":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x14];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e19).P("cursor",x15).P(tp,32.46,_,_,"%").T(2,12.29,0.4,ql).T(2.8,12.29,0.4,_,32.46).T(3.6,12.29,0.4,_,32.46).T(4.4,12.29,0.4,_,32.46).P(h,205,_,_,p).T(2,107,0.4).T(2.8,107,0.4,_,205).T(3.6,107,0.4,_,205).T(4.4,107,0.4,_,205).P(o,0,_,_,"").T(0,0).T(1.2,1,0.4).T(1.6,0,0.4).P(lf,66,_,_,"%").T(2,59.06,0.4).T(2.8,59.06,0.4,_,66).T(3.6,59.06,0.4,_,66).T(4.4,59.06,0.4,_,66).P(w,204,_,_,p).T(2,106,0.4).T(2.8,106,0.4,_,204).T(3.6,106,0.4,_,204).T(4.4,106,0.4,_,204);A1.A(e20).P("cursor",x15).P(tp,32.31,_,_,"%").T(2,12.13,0.4,ql).T(2.8,12.13,0.4,_,32.31).T(3.6,12.13,0.4,_,32.31).T(4.4,12.13,0.4,_,32.31).P(h,206,_,_,p).T(2,107,0.4).T(2.8,107,0.4,_,206).T(3.6,107,0.4,_,206).T(4.4,107,0.4,_,206).P(lf,66.17,_,_,"%").T(2,59.22,0.4).T(2.8,59.22,0.4,_,66.17).T(3.6,59.22,0.4,_,66.17).T(4.4,59.22,0.4,_,66.17).P(w,206,_,_,p).T(2,107,0.4).T(2.8,107,0.4,_,206).T(3.6,107,0.4,_,206).T(4.4,107,0.4,_,206);A1.A(e21).P("cursor",x15).P(tp,34,_,_,"%").T(2,12.92,0.4,ql).T(2.8,12.92,0.4,_,34).T(3.6,12.92,0.4,_,34).T(4.4,12.92,0.4,_,34).P(h,192,_,_,p).T(2,100,0.4).T(2.8,100,0.4,_,192).T(3.6,100,0.4,_,192).T(4.4,100,0.4,_,192).P(lf,49.83,_,_,"%").T(2,50.04,0.4).T(2.8,50.04,0.4,_,49.83).T(3.6,50.04,0.4,_,49.83).T(4.4,50.04,0.4,_,49.83).P(w,192,_,_,p).T(2,100,0.4).T(2.8,100,0.4,_,192).T(3.6,100,0.4,_,192).T(4.4,100,0.4,_,192);A1.A(e22).P(ov,x16).P(tp,99.85,_,_,"%").T(3.6,39.77,0.4,ql).P(zy,1,t,_,"").T(4,1).P(ky,0,t,_,r).T(4,0).P(d,i).T(0,i).T(3.6,b).T(4,b).P(o,0,_,_,"").T(3.6,1,0.4).P(lf,30,_,_,"%").T(4,30).P(zx,1,t,_,"").T(4,1);A1.A(e23).P("cursor",x15).P(h,161).T(2,84,0.4,ql).T(2.8,84,0.4,_,161).T(3.6,84,0.4,_,161).T(4.4,84,0.4,_,161).P(tp,36,_,_,"%").T(2,14,0.4).T(2.8,14,0.4,_,36).T(3.6,14,0.4,_,36).T(4.4,14,0.4,_,36).P(lf,34).T(2,41.1,0.4).T(2.8,41.1,0.4,_,34).T(3.6,41.1,0.4,_,34).T(4.4,41.1,0.4,_,34).P(w,161,_,_,p).T(2,84,0.4).T(2.8,84,0.4,_,161).T(3.6,84,0.4,_,161).T(4.4,84,0.4,_,161);A1.A(e24).P(ov,x16).P("cursor",x15).P(tp,31.69,_,_,"%").T(2,11.85,0.4,ql).T(2.8,11.85,0.4,_,31.69).T(3.6,11.85,0.4,_,31.69).T(4.4,11.85,0.4,_,31.69).P(d,i).T(0,i).P(h,192,_,_,p).T(2,100,0.4).T(2.8,100,0.4,_,192).T(3.6,100,0.4,_,192).T(4.4,100,0.4,_,192).P(o,1,_,_,"").T(0,1).P(lf,19.67,_,_,"%").T(2,32.12,0.4).T(2.8,32.12,0.4,_,19.67).T(3.6,32.12,0.4,_,19.67).T(4.4,32.12,0.4,_,19.67).P(w,192,_,_,p).T(2,100,0.4).T(2.8,100,0.4,_,192).T(3.6,100,0.4,_,192).T(4.4,100,0.4,_,192);A1.A(e25).P(ov,x16).P("cursor",x15).P(tp,36.15,_,_,"%").T(2,14.15,0.4,ql).T(2.8,14.15,0.4,_,36.15).T(3.6,14.15,0.4,_,36.15).T(4.4,14.15,0.4,_,36.15).P(d,i).T(0,i).P(h,161,_,_,p).T(2,84,0.4).T(2.8,84,0.4,_,161).T(3.6,84,0.4,_,161).T(4.4,84,0.4,_,161).P(o,1,_,_,"").T(0,1).P(lf,33.92,_,_,"%").T(2,41.02,0.4).T(2.8,41.02,0.4,_,33.92).T(3.6,41.02,0.4,_,33.92).T(4.4,41.02,0.4,_,33.92).P(w,161,_,_,p).T(2,84,0.4).T(2.8,84,0.4,_,161).T(3.6,84,0.4,_,161).T(4.4,84,0.4,_,161);A1.A(e26).P(tp,31.69,_,_,"%").T(2,11.69,0.4,ql).T(2.8,11.69,0.4,_,31.69).T(3.6,11.69,0.4,_,31.69).T(4.4,11.69,0.4,_,31.69).P(h,194,_,_,p).T(2,101,0.4).T(2.8,101,0.4,_,194).T(3.6,101,0.4,_,194).T(4.4,101,0.4,_,194).P(o,1,_,_,"").T(2.4,1).T(3.2,1).T(4,1).T(4.8,1).P(lf,19.58,_,_,"%").T(2,31.95,0.4).T(2.8,31.95,0.4,_,19.58).T(3.6,31.95,0.4,_,19.58).T(4.4,31.95,0.4,_,19.58).P(w,194,_,_,p).T(2,101,0.4).T(2.8,101,0.4,_,194).T(3.6,101,0.4,_,194).T(4.4,101,0.4,_,194);A1.A(e27).P(ov,x16).P("cursor",x15).P(tp,34.15,_,_,"%").T(2,13.08,0.4,ql).T(2.8,13.08,0.4,_,34.15).T(3.6,13.08,0.4,_,34.15).T(4.4,13.08,0.4,_,34.15).P(h,192,_,_,p).T(2,100,0.4).T(2.8,100,0.4,_,192).T(3.6,100,0.4,_,192).T(4.4,100,0.4,_,192).P(d,i).T(0,i).P(o,1,_,_,"").T(0,1).P(lf,49.75,_,_,"%").T(2,49.96,0.4).T(2.8,49.96,0.4,_,49.75).T(3.6,49.96,0.4,_,49.75).T(4.4,49.96,0.4,_,49.75).P(w,192,_,_,p).T(2,100,0.4).T(2.8,100,0.4,_,192).T(3.6,100,0.4,_,192).T(4.4,100,0.4,_,192);A1.A(e28).P(bg,x17,c).P(ov,x18).P(h,650).P(w,1200).T(3.6,1200);var S2=symbols[x35];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e36).P(tp,-0.01,_,_,"%").P(h,192,_,_,p).P("cursor",x15).P(lf,-0.02,_,_,"%").P(w,192,_,_,p);A2.A(e37).P(h,192).P(w,192);var S3=symbols[x40];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e41).P(tp,0).P(ov,x16).P(h,192).P(o,1,_,_,"").P(lf,0,_,_,p).P(w,192);A3.A(e37).P(h,192).P(w,192);var S4=symbols[x45];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e46).P(tp,0).P(o,0,_,_,"").P(lf,0,_,_,p);A4.A(e37).P(h,161).P(w,161);var S5=symbols[x47];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e37).P(h,192).P(w,192);A5.A(e48).P(tp,0).P(ov,x16).P("cursor",x15).P(lf,0).P(o,1,_,_,"").T(0,1).T(0.05,1).P("filter.saturate",0.97,"subproperty").T(0,0.97,0.05,ql);var S6=symbols[x50];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e37).P(h,192).P(w,192);A6.A(e51).P(tp,0).P(lf,0).P(o,0,_,_,"").T(0,1,0.399,ql).T(0.399,1);var S7=symbols[x52];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e37).P(h,44.62,_,_,"%").P(mw,0).P(w,38.5);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-107572554");