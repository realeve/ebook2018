  $(function() {

    var imageBookPath = "./img/magazine_template_01";
    var thumbPath = "./img/thumbnail_01/image_";
    $("#book1-trigger .book-thumb").attr("src", imageBookPath + "/image_000.jpg")

    function fullscreenErrorHandler() {
      if (self != top) return "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again."
    }
    $("#book1-trigger").on("click", function() {
      buildBook("#book1");
    })

    var optionsBook1 = {
      height: 1056,
      width: 816 * 2,
      pageCount: 190,
      images: imageBookPath + "/image_{{xxx}}.jpg",
      lightbox: "#book1-trigger",
      lightboxClass: "lightbox-images1",
      centeredWhenClosed: true,
      hardcovers: true,
      style: "wowbook-cs-white",
      // toolbar: "lastLeft, left, right, lastRight, zoomin, zoomout, slideshow, flipsound, fullscreen, thumbnails",
      toolbar: "lastLeft, left, right, lastRight, zoomin, zoomout, slideshow,  fullscreen, thumbnails",
      thumbnailsPosition: 'bottom',
      thumbnailScale: 0.12,
      // thumbnailsSprite: imageBookPath + "/thumbnails_sprite_0.12.jpg",
      thumbnailsSprite: thumbPath,
      perspective: 4000,
      responsiveHandleWidth: 50,
      onFullscreenError: fullscreenErrorHandler,
      slideShowDelay: 5000
    };

    function buildBook(elem) {
      var book = $.wowBook(elem);
      if (!book) {
        $(elem).wowBook(optionsBook1);
        book = $.wowBook(elem);
      }
      book.showLightbox();
    }

    buildBook("#book1");
    setTimeout(function() {
      $('#services').show();
      $('#mainNav').show();
    }, 1000);
  });
