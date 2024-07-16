---
layout: description
title: Gallery
permalink: /gallery/
---

<!DOCTYPE html2>
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
            position: relative;
        }

        .gallery-item figure {
            margin: 0;
            position: relative;
            overflow: hidden;
        }

        .gallery-item .thumb-container {
            position: relative;
            width: 100%;
            padding-bottom: 100%;
            overflow: hidden;
        }

        .gallery-item img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
        }
    </style>

</head>

<body>
    <section class="gallery line" id="gallery">
        <div class="area gallery-container">
            <!-- Gallery Items -->
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/675D05B8-FB72-4C9B-8227-4F528B352116.jpeg' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="2150x1536">
                            <img src="{{ '/675D05B8-FB72-4C9B-8227-4F528B352116.jpeg' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/100FB83C-3894-4252-9EF9-FBFCE3A8E8AF.jpeg' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1295x1942">
                            <img src="{{ '/100FB83C-3894-4252-9EF9-FBFCE3A8E8AF.jpeg' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/0BBC0A4C-DD02-4C4E-9A58-83F1753881A7.jpeg' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1295x1942">
                            <img src="{{ '/0BBC0A4C-DD02-4C4E-9A58-83F1753881A7.jpeg' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/249927D5-6F04-4812-A5C1-FC383F72728B.jpeg' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1295x1942">
                            <img src="{{ '249927D5-6F04-4812-A5C1-FC383F72728B.jpeg' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
             <div class="gallery-item">
                <figure>
                    <div class="thumb-container">
                        <a href="{{ '/A441AE6E-30BE-4B86-8CC2-3ABEF6694C80.jpeg' | relative_url }}" class="setimgsize" itemprop="contentUrl" data-size="1295x1942">
                            <img src="{{ '/A441AE6E-30BE-4B86-8CC2-3ABEF6694C80.jpeg' | relative_url }}" class="img_frame" itemprop="thumbnail" alt="">
                        </a>
                    </div>
                </figure>
            </div>
            <!-- Add more gallery items as needed -->
        </div>
    </section>
</body>

</html>
