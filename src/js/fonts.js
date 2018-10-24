const PTSans = new FontFace("PT Sans", 
"url(./fonts/PTS75F_W.woff)");
const PTSansNarrow = new FontFace("PT Sans Narrow", 
"url(./fonts/PTN77F_W.woff)");

document.fonts.add(PTSans);
document.fonts.add(PTSansNarrow);

PTSans.load(); 
PTSansNarrow.load();   