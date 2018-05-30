$(function() {
  // var imageBookPath = "./img/magazine_template_01";
  // var thumbPath = "./img/thumbnail_01/image_";
  // $("#book1-trigger .book-thumb").attr("src", imageBookPath + "/image_000.jpg")
  var imageBookPath = "./img/pdf";
  $("#book1-trigger .book-thumb").attr("src", imageBookPath + "/02.jpg");
  $("#book2-trigger .book-thumb").attr("src", imageBookPath + "/01.jpg");

  function fullscreenErrorHandler() {
    if (self != top)
      return "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again.";
  }

  // var optionsBook1 = {
  //   height: 1056,
  //   width: 816 * 2,
  //   pageCount: 190,
  //   images: imageBookPath + "/image_{{xxx}}.jpg",
  //   lightbox: "#book1-trigger",
  //   lightboxClass: "lightbox-images1",
  //   centeredWhenClosed: true,
  //   hardcovers: true,
  //   style: "wowbook-cs-white",
  //   // toolbar: "lastLeft, left, right, lastRight, zoomin, zoomout, slideshow, flipsound, fullscreen, thumbnails",
  //   toolbar: "lastLeft, left, right, lastRight, zoomin, zoomout, slideshow,  fullscreen, thumbnails",
  //   thumbnailsPosition: 'bottom',
  //   thumbnailScale: 0.12,
  //   // thumbnailsSprite: imageBookPath + "/thumbnails_sprite_0.12.jpg",
  //   thumbnailsSprite: thumbPath,
  //   perspective: 4000,
  //   responsiveHandleWidth: 50,
  //   onFullscreenError: fullscreenErrorHandler,
  //   slideShowDelay: 5000
  // };

  var optionsBook1 = {
    height: 1024,
    width: 725 * 2,
    // ,maxWidth : 800
    // ,maxHeight : 400
    pageNumbers: true,
    pdf: "./img/pdf/02.pdf",
    pdfFind: false,
    lightbox: "#book1-trigger",
    lightboxClass: "lightbox-pdf",
    centeredWhenClosed: true,
    hardcovers: true,
    curl: false,
    style: "wowbook-cs-white",
    toolbar:
      "lastLeft, left, right, lastRight, find, toc, zoomin, zoomout, download, flipsound, fullscreen, thumbnails",
    thumbnailsPosition: "bottom",
    responsiveHandleWidth: 50,
    onFullscreenError: fullscreenErrorHandler
  };

  var optionsBook2 = {
    height: 1024,
    width: 725 * 2,
    // ,maxWidth : 800
    // ,maxHeight : 400
    pageNumbers: false,
    pdf: "./img/pdf/01.pdf",
    pdfFind: false,
    lightbox: "#book2-trigger",
    lightboxClass: "lightbox-pdf",
    centeredWhenClosed: true,
    hardcovers: true,
    curl: false,
    style: "wowbook-cs-white",
    toolbar:
      "lastLeft, left, right, lastRight, find, toc, zoomin, zoomout, download, flipsound, fullscreen, thumbnails",
    thumbnailsPosition: "bottom",
    responsiveHandleWidth: 50,
    onFullscreenError: fullscreenErrorHandler
  };

  function buildBook(elem, option) {
    var book = $.wowBook(elem);
    if (!book) {
      $(elem).wowBook(option);
      book = $.wowBook(elem);
    }
    console.log(book);
    // book.showLightbox();
  }

  $("#book1-trigger").on("click", function() {
    buildBook("#book1", optionsBook1);
  });
  $("#book2-trigger").on("click", function() {
    buildBook("#book2", optionsBook2);
  });

  buildBook("#book1", optionsBook1);
  buildBook("#book2", optionsBook2);
  setTimeout(function() {
    $("#services").show();
    $("#mainNav").show();
  }, 1000);
});
