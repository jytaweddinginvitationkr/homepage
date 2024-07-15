<section>
    <!-- 갤러리 -->
    <div id="area6" idx="6">
        <section class="gallery line" id="gallery">
            <div class="area gallery-container">
                <!-- 갤러리 아이템 -->
                <div class="gallery-item">
                    <figure>
                        <a href="https://i.namu.wiki/i/wQ9yxNSCR44RkET-qb_5PfDOb5u7sMSuvFSsUOiWe6XuVEiUDPoUEkqEOz4JSFUzfKOcoZB60WNjlHUD4eO4yPvbqL-BJXX2M8DFTu2MxBGg79UhG0oGB06YGyFoMKdhNsu8BHgCiSqR4z8Knk9K1Q.webp" class="setimgsize">
                            <div class="thumb-container">
                                <img src="https://i.namu.wiki/i/wQ9yxNSCR44RkET-qb_5PfDOb5u7sMSuvFSsUOiWe6XuVEiUDPoUEkqEOz4JSFUzfKOcoZB60WNjlHUD4eO4yPvbqL-BJXX2M8DFTu2MxBGg79UhG0oGB06YGyFoMKdhNsu8BHgCiSqR4z8Knk9K1Q.webp" class="img_frame" itemprop="thumbnail" alt="Image 1">
                            </div>
                        </a>
                    </figure>
                </div>
                <div class="gallery-item">
                    <figure>
                        <a href="https://i.namu.wiki/i/wQ9yxNSCR44RkET-qb_5PfDOb5u7sMSuvFSsUOiWe6XuVEiUDPoUEkqEOz4JSFUzfKOcoZB60WNjlHUD4eO4yPvbqL-BJXX2M8DFTu2MxBGg79UhG0oGB06YGyFoMKdhNsu8BHgCiSqR4z8Knk9K1Q.webp" class="setimgsize">
                            <div class="thumb-container">
                                <img src="https://i.namu.wiki/i/wQ9yxNSCR44RkET-qb_5PfDOb5u7sMSuvFSsUOiWe6XuVEiUDPoUEkqEOz4JSFUzfKOcoZB60WNjlHUD4eO4yPvbqL-BJXX2M8DFTu2MxBGg79UhG0oGB06YGyFoMKdhNsu8BHgCiSqR4z8Knk9K1Q.webp" class="img_frame" itemprop="thumbnail" alt="Image 2">
                            </div>
                        </a>
                    </figure>
                </div>
                <div class="gallery-item">
                    <figure>
                        <a href="https://i.namu.wiki/i/wQ9yxNSCR44RkET-qb_5PfDOb5u7sMSuvFSsUOiWe6XuVEiUDPoUEkqEOz4JSFUzfKOcoZB60WNjlHUD4eO4yPvbqL-BJXX2M8DFTu2MxBGg79UhG0oGB06YGyFoMKdhNsu8BHgCiSqR4z8Knk9K1Q.webp" class="setimgsize">
                            <div class="thumb-container">
                                <img src="https://i.namu.wiki/i/wQ9yxNSCR44RkET-qb_5PfDOb5u7sMSuvFSsUOiWe6XuVEiUDPoUEkqEOz4JSFUzfKOcoZB60WNjlHUD4eO4yPvbqL-BJXX2M8DFTu2MxBGg79UhG0oGB06YGyFoMKdhNsu8BHgCiSqR4z8Knk9K1Q.webp" class="img_frame" itemprop="thumbnail" alt="Image 3">
                            </div>
                        </a>
                    </figure>
                </div>
                <!-- Add more gallery items as needed -->
            </div>
            <!-- 갤러리 확대 -->
            <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="pswp__bg"></div>
                <div class="pswp__scroll-wrap">
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>
                    <div class="pswp__ui pswp__ui--hidden">
                        <div class="pswp__top-bar">
                            <div class="pswp__counter"></div>
                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                    <div class="pswp__preloader__cut">
                                        <div class="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div>
                        </div>
                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / 갤러리 확대 -->
        </section>
    </div>
</section>

<!-- PhotoSwipe Core JS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js"></script>
<script>
var initPhotoSwipeFromDOM = function(gallerySelector) {

    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            item;

        for(var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element

            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            item = {
                src: linkEl.getAttribute('href'),
                w: 0, // Placeholder, will be set later
                h: 0  // Placeholder, will be set later
            };

            if(linkEl.children.length > 0) {
                item.msrc = linkEl.children[0].getElementsByTagName('img')[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn

            items.push(item);
        }

        return items;
    };

    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    var onThumbnailsClick = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) {
                continue;
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }

        if(index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        options = {
            index: index,
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        if(fromURL) {
            if(options.galleryPIDs) {
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        }

        if(isNaN(options.index)) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

        // Get the original image size
        gallery.listen('gettingData', function(index, item) {
            if (item.w < 1 || item.h < 1) { // if dimensions are not set
                var img = new Image(); 
                img.onload = function() { // will get size after the image is loaded
                    item.w = this.width; 
                    item.h = this.height;
                    gallery.invalidateCurrItems(); // reinit Items
                    gallery.updateSize(true); // reinit Items
                };
                img.src = item.src; // let's download image
            }
        });

        gallery.init();
    };

    var galleryElements = document.querySelectorAll(gallerySelector);

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true);
    }
};

initPhotoSwipeFromDOM('.gallery');
</script>
