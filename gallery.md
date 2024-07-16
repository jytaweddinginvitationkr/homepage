---
layout: description
title: Gallery
permalink: /gallery/
---

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>

    <!-- Gallery Styles -->
    <style>
        .gallery-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .gallery-item {
            width: calc(33.333% - 10px);
            margin-bottom: 15px;
            position: relative; /* Ensure positioning for responsive design */
        }

        .gallery-item figure {
            margin: 0;
            position: relative; /* Ensure positioning for responsive design */
            overflow: hidden; /* Hide overflow for cropped thumbnails */
        }

        .gallery-item .thumb-container {
            position: relative;
            width: 100%;
            padding-bottom: 100%; /* 1:1 aspect ratio for thumbnails */
            overflow: hidden;
        }

        .gallery-item img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Maintain aspect ratio and fill container */
        }
    </style>

    <!-- PhotoSwipe Core CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css">
</head>

<body>
    <section class="gallery line" id="gallery">
        <div class="area gallery-container">
            <!-- Gallery Items -->
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/675D05B8-FB72-4C9B-8227-4F528B352116.jpeg
' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1200x630">
                            <img src="{{ '/675D05B8-FB72-4C9B-8227-4F528B352116.jpeg
' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/100FB83C-3894-4252-9EF9-FBFCE3A8E8AF.jpeg
' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1080x1350">
                            <img src="{{ '/100FB83C-3894-4252-9EF9-FBFCE3A8E8AF.jpeg
' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/0BBC0A4C-DD02-4C4E-9A58-83F1753881A7.jpeg' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1080x1350">
                            <img src="{{ '/0BBC0A4C-DD02-4C4E-9A58-83F1753881A7.jpeg' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <!-- Add more gallery items as needed -->
        </div>

        <!-- PhotoSwipe container -->
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
        <!-- End PhotoSwipe container -->
    </section>

    <!-- PhotoSwipe Core JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe-ui-default.min.js"></script>

    <!-- Init PhotoSwipe -->
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var initPhotoSwipeFromDOM = function (gallerySelector) {
                var parseThumbnailElements = function (el) {
                    var thumbElements = el.childNodes,
                        numNodes = thumbElements.length,
                        items = [],
                        figureEl,
                        linkEl,
                        item;

                    for (var i = 0; i < numNodes; i++) {
                        figureEl = thumbElements[i];

                        if (figureEl.nodeType !== 1) {
                            continue;
                        }

                        linkEl = figureEl.children[0];

                        item = {
                            src: linkEl.getAttribute('href'),
                            w: parseInt(linkEl.getAttribute('data-size').split('x')[0], 10),
                            h: parseInt(linkEl.getAttribute('data-size').split('x')[1], 10)
                        };

                        if (linkEl.children.length > 0) {
                            item.msrc = linkEl.children[0].getAttribute('src');
                        }

                        item.el = figureEl;

                        items.push(item);
                    }

                    return items;
                };

                var closest = function closest(el, fn) {
                    return el && (fn(el) ? el : closest(el.parentNode, fn));
                };

                var onThumbnailsClick = function (e) {
                    e = e || window.event;
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;

                    var eTarget = e.target || e.srcElement;

                    var clickedListItem = closest(eTarget, function (el) {
                        return el.tagName && el.tagName.toUpperCase() === 'DIV';
                    });

                    if (!clickedListItem) {
                        return;
                    }

                    var clickedGallery = clickedListItem.parentNode;

                    var index = [].indexOf.call(clickedGallery.childNodes, clickedListItem);

                    if (index >= 0) {
                        openPhotoSwipe(index, clickedGallery);
                    }
                    return false;
                };

                var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                    var pswpElement = document.querySelectorAll('.pswp')[0],
                        gallery,
                        options,
                        items;

                    items = parseThumbnailElements(galleryElement);

                    options = {
                        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                        getThumbBoundsFn: function (index) {
                            var thumbnail = items[index].el.getElementsByTagName('img')[0],
                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect();

                            return {
                                x: rect.left,
                                y: rect.top + pageYScroll,
                                w: rect.width
                            };
                        },
                        addCaptionHTMLFn: function (item, captionEl, isFake) {
                            if (!item.title) {
                                captionEl.children[0].innerText = '';
                                return false;
                            }
                            captionEl.children[0].innerHTML = item.title + '<br/><small>Photo: ' + item.author + '</small>';
                            return true;
                        },
                        index: index,
                        history: false,
                        shareEl: false
                    };

                    if (fromURL) {
                        if (options.galleryPIDs) {
                            for (var j = 0; j < items.length; j++) {
                                if (items[j].pid == index) {
                                    options.index = j;
                                    break;
                                }
                            }
                        } else {
                            options.index = parseInt(index, 10) - 1;
                        }
                    }

                    if (isNaN(options.index)) {
                        return;
                    }

                    if (disableAnimation) {
                        options.showAnimationDuration = 0;
                    }

                    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                    gallery.init();
                };

                document.getElementById(gallerySelector).onclick = onThumbnailsClick;
            };

            initPhotoSwipeFromDOM('gallery');
        });
    </script>
</body>

</html>
