function loopy(ar1,ar2,ar3){if(r.loop)for(var i=r.loop.i;i--;)style.sheet.insertRule(mv+"."+mk+pk+ar3+eval(r.loop.name)+ar1+"{"+pv+ar2+":"+eval(r.loop.func)+"}}",0);if(r.value)for(var v=Object.keys(r.value),vl=v.length;vl--;)style.sheet.insertRule(mv+"."+mk+pk+ar3+v[vl]+ar1+"{"+pv+ar2+":"+r.value[v[vl]]+"}}",0)}function qwe(e){if(r.suffix)for(var o=Object.keys(r.suffix),i=o.length;i--;)loopy(e,o[i],r.suffix[o[i]]);else loopy(e,"","")}var cssjson={media:{"":"@media only screen{",l_:"@media only screen and (max-width: 1500px){",t_:"@media only screen and (max-width: 1200px){",tl_:"@media only screen and (max-width: 1200px) and (orientation:landscape){",m_:"@media only screen and (max-width: 700px){",ml_:"@media only screen and (max-width: 700px) and (orientation:landscape){"},rules:[{property:{w:"width",h:"height",fb:"flex-basis"},loop:{i:12,name:"if(i==0||i==4||i==6||i==10){'-'+ (i+1) + '-12'}else if(i==1||i==9){'-'+ ((i+1)/2) + '-6'}else if(i==2||i==8){'-'+ ((i+1)/3) + '-4'}else if(i==3||i==7){'-'+ ((i+1)/4) + '-3'}else if(i==5||i==11){'-1-'+ (12/(i+1))}",func:"((i+1) * (100/12)).toFixed(4) + '%' "},value:{"-a":"auto"}},{property:{w:"width",h:"height",fb:"flex-basis"},loop:{i:4,name:"'-' + (i+1) + '-5' ",func:"((i+1) * (100/5)) + '%' "}},{property:{w:"width",h:"height",fb:"flex-basis"},loop:{i:20,name:"'-'+(i+1)",func:"(i+1) + 'rem'"}},{property:{mw:"max-width"},loop:{i:5,name:"'-' + ((i*5) + 60)",func:"((i*5) + 60) + 'em'"},value:{"-100":"100%"}},{property:{m:"margin",p:"padding"},suffix:{"":"","-l":"-left","-r":"-right","-b":"-bottom","-t":"-top"},loop:{i:9,name:"('-'+(i/2)).replace('.','')",func:"i/2 + 'em'"},value:{"-a":"auto"}},{property:{tt:"text-transform"},value:{"-u":"uppercase","-l":"lowercase","-n":"none"}},{property:{td:"text-decoration"},value:{"-u":"underline","-n":"none"}},{property:{ta:"text-align"},value:{"-c":"center","-l":"left","-r":"right"}},{property:{fw:"font-weight"},loop:{i:9,name:"'-' + ((i+1)*100)",func:"(i+1)*100"}},{property:{lh:"line-height"},loop:{i:15,name:"('-1' + (i/2)).replace('.','')",func:"(1 + (i/20))"}},{property:{fs:"font-size"},loop:{i:27,name:"('-'+(12+(i*2)))",func:"((12 + (i*2))/16) + 'rem'"}},{property:{d:"display"},value:{"-f":"flex","-b":"block","-i":"inline","-if":"inline-flex","-ib":"inline-block","-n":"none"}},{property:{fw:"flex-wrap"},value:{"-w":"wrap","-n":"nowrap","-wr":"wrap-reverse"}},{property:{fd:"flex-direction"},value:{"-r":"row","-c":"column","-rr":"row-reverse","-cr":"column-reverse"}},{property:{jc:"justify-content",ai:"align-items",ac:"align-content",as:"align-self"},value:{"-c":"center","-fs":"flex-start","-fe":"flex-end","-sa":"space-around","-sb":"space-between","-s":"stretch","-b":"baseline"}},{property:{bp:"background-position"},value:{"-c":"center","-l":"left","-r":"right","-t":"top","-b":"bottom","-lt":"left top","-rt":"right top","-lb":"left bottom","-rb":"right bottom"}},{property:{br:"border"},suffix:{"":"-radius","-tl":"-top-left-radius","-tr":"-top-right-radius","-bl":"-bottom-left-radius","-br":"-bottom-right-radius"},loop:{i:8,name:"'-' + (i*2)",func:"(i*2) + 'px'"},value:{"-99":"9999px"}},{property:{"c-gray":"color","bg-gray":"background-color"},loop:{i:21,name:"'-' + (i*5)",func:"'hsl(0, 0%, ' + (i*5) + '%)'"}},{property:{"c-hue":"color","bg-hue":"background-color"},loop:{i:72,name:"'-' + (i*5)",func:"'hsl(' + (i*5) + ', 100%, 50%)'"},pseudo:{"":"","-hover":":hover"}}]},style=document.createElement("style");document.head.appendChild(style);for(var m=Object.keys(cssjson.media),ml=m.length;ml--;)for(var mk=m[ml],mv=cssjson.media[mk],rl=cssjson.rules.length;rl--;)for(var r=cssjson.rules[rl],p=Object.keys(r.property),pl=p.length;pl--;){var pk=p[pl],pv=r.property[pk];if(r.pseudo)for(var ps=Object.keys(r.pseudo),psl=ps.length;psl--;)qwe(ps[psl]+r.pseudo[ps[psl]]);else qwe("")}