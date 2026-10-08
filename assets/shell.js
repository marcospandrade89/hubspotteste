/* Injeta topo, rodape e definicoes SVG (hachura, setas) iguais em todas as paginas. */
(function(){
  var pages=[
    ["index.html","Índice"],
    ["metodo.html","Método"],
    ["ganhos-e-decisoes.html","Ganhos e decisões"],
    ["governanca.html","Governança"],
    ["crescimento-e-cultura.html","Crescimento e cultura"],
    ["construtor-hierarquia.html","Construtor de hierarquia"]
  ];
  var cur=(location.pathname.split("/").pop()||"index.html");
  var nav=pages.map(function(p){
    return '<a href="'+p[0]+'"'+(p[0]===cur?' aria-current="page"':'')+'>'+p[1]+'</a>';
  }).join("");
  var top=document.createElement("div");top.className="top";
  top.innerHTML='<div class="wrap"><a class="brand" href="index.html"><i></i>RevOps / Frameworks</a><nav class="nav">'+nav+'</nav></div>';
  document.body.insertBefore(top,document.body.firstChild);
  var defs=document.createElement("div");
  defs.setAttribute("aria-hidden","true");
  defs.style.cssText="position:absolute;width:0;height:0;overflow:hidden";
  defs.innerHTML='<svg width="0" height="0"><defs>'
    +'<pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#fff"/><line x1="0" y1="0" x2="0" y2="7" stroke="#000" stroke-width="1"/></pattern>'
    +'<marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#000"/></marker>'
    +'<marker id="ahg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#d9d9d9" stroke="#8a8a8a" stroke-width="1"/></marker>'
    +'</defs></svg>';
  document.body.appendChild(defs);
  var f=document.createElement("footer");f.className="site";
  f.innerHTML='<div class="wrap">Base editorial: capítulo 8, "Quando a operação está rodando o que muda". Números e casos marcados como ILUSTRATIVO são exemplos de desenho, não dados de mercado.</div>';
  document.body.appendChild(f);
})();
