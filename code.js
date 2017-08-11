(function($){
  var dl = null
  var all, kids = null;
  var container = $(document.createElement('div')).css({position:'fixed', top:'10px', right:'10px', zIndex:99999});
  var allButton = $(document.createElement('input')).attr({type:'button', value:'Download all'}).css({float:'left'}).hide();;
  allButton.click(function(){
    if(all && all.length>0){
      var urls = [];
      all.each(function(i,item){
        urls.push(item.src.replace(/targetWidth=\d+/, 'targetWidth=10000'));
      });
      dl(urls);
    }
  });
  var kidsButton = $(document.createElement('input')).attr({type:'button', value:'Download my kids'}).hide();;
  kidsButton.click(function(){
    if(kids && kids.length>0){
      var urls = [];
      kids.each(function(i,item){
        urls.push(item.src.replace(/targetWidth=\d+/, 'targetWidth=10000'));
      });
      dl(urls);
    }
  });

  $('body').append(container);
  container.append(allButton, kidsButton);
  window.setInterval(function(){
    all = $("div.picture-cell img.picture-cell[src!=''][src]");
    if(all.length>0) {
      allButton.show().attr({value:'Download all photos ('+all.length+')'});
    } else {
      allButton.hide();
    }
    kids = $('.icon-picture-child').parents('div.picture-cell').find("img.picture-cell[src!=''][src]");
    if(kids.length>0) {
      kidsButton.show().attr({value:'Download kids photos ('+kids.length+')'});
    } else {
      kidsButton.hide();
    }
  }, 1000);

  dl = window.multiDownload;
})(jQuery);

