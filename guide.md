# Amazon Clone

## Introduction

In this session we will clone [Amazon](https://www.amazon.com/) shopping landing page. We'll mostly use things we've learned in Netflix and Spotify clones, applying the similar techniques and using the frameworks we have seen before - Twitter's [Bootstrap](http://getbootstrap.com) and [Font Awesome](http://fontawesome.io/).

## Basic structure

As usually, let's start with defining the bare bones of the HTML page, linking necessary resources and applying default styles.

HTML:

    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs &amp; more</title>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <link rel="stylesheet" href="css/style.css"/>
    </head>

    <body>
      <!-- Main body -->

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </body>

    </html>


CSS:

    html, body {
      margin: 0;
      font-family: arial,sans-serif;
      min-width: 900px;
      line-height: 14px;
      font-size: 14px;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: #0066c0;
    }

    a:hover {
      color: #c45500;
    }

## Adding top banner

Now we'll add the top banner that takes the full width of the page:

HTML:

    <a id="banner" href="#"></a>


CSS:

    #banner {
      background: #F6F6F6 url('../img/banner.jpg') no-repeat top left;
      height: 55px;
      background-size: 1920px;
      min-width: 1000px;
      display: block;
    }

## Adding navigation

Next up we'll add navigation. It's a bit complex in Amazon site (of course, they've got so much stuff to sell ;). So, we'll break it up into two navigation components, where the top one with the search box will be named `nav-belt` and the bottom one, `nav-main`.

Let's start with the `nav-belt`, HTML:

    <header>
      <div id="nav-belt">
        <div class="nav-left">
          <div id="nav-logo">
            <a href="#" class="nav-logo-link"></a>
            <a href="#" class="nav-logo-tagline">Try Prime</a>
          </div>
        </div>
        <div class="nav-right">
          <div id="nav-holiday">
            <a href="#"></a>
          </div>
        </div>
        <div class="nav-fill">
          <div id="nav-search">
            <form>
              <div class="nav-left">
                <span class="nav-search-label">All</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
                <select id="nav-search-select">
                  <option selected="selected" value="aps">All Departments</option>
                  <option value="alexa-skills">Alexa Skills</option>
                  <option value="instant-video">Amazon Video</option>
                  <option value="warehouse-deals">Amazon Warehouse Deals</option>
                  <option value="appliances">Appliances</option>
                  <option value="mobile-apps">Apps &amp; Games</option>
                  <option value="arts-crafts">Arts, Crafts &amp; Sewing</option>
                  <option value="automotive">Automotive Parts &amp; Accessories</option>
                  <option value="baby-products">Baby</option>
                  <option value="beauty">Beauty &amp; Personal Care</option>
                  <option value="stripbooks">Books</option>
                  <option value="popular">CDs &amp; Vinyl</option>
                  <option value="mobile">Cell Phones &amp; Accessories</option>
                  <option value="fashion">Clothing, Shoes &amp; Jewelry</option>
                  <option value="fashion-womens">&nbsp;&nbsp;&nbsp;Women</option>
                  <option value="fashion-mens">&nbsp;&nbsp;&nbsp;Men</option>
                  <option value="fashion-girls">&nbsp;&nbsp;&nbsp;Girls</option>
                  <option value="fashion-boys">&nbsp;&nbsp;&nbsp;Boys</option>
                  <option value="fashion-baby">&nbsp;&nbsp;&nbsp;Baby</option>
                  <option value="collectibles">Collectibles &amp; Fine Art</option>
                  <option value="computers">Computers</option>
                  <option value="courses">Courses</option>
                  <option value="financial">Credit and Payment Cards</option>
                  <option value="digital-music">Digital Music</option>
                  <option value="electronics">Electronics</option>
                  <option value="gift-cards">Gift Cards</option>
                  <option value="grocery">Grocery &amp; Gourmet Food</option>
                  <option value="handmade">Handmade</option>
                  <option value="hpc">Health, Household &amp; Baby Care</option>
                  <option value="local-services">Home &amp; Business Services</option>
                  <option value="garden">Home &amp; Kitchen</option>
                  <option value="industrial">Industrial &amp; Scientific</option>
                  <option value="digital-text">Kindle Store</option>
                  <option value="fashion-luggage">Luggage &amp; Travel Gear</option>
                  <option value="luxury-beauty">Luxury Beauty</option>
                  <option value="magazines">Magazine Subscriptions</option>
                  <option value="movies-tv">Movies &amp; TV</option>
                  <option value="mi">Musical Instruments</option>
                  <option value="office-products">Office Products</option>
                  <option value="lawngarden">Patio, Lawn &amp; Garden</option>
                  <option value="pets">Pet Supplies</option>
                  <option value="prime-exclusive">Prime Exclusive</option>
                  <option value="pantry">Prime Pantry</option>
                  <option value="software">Software</option>
                  <option value="sporting">Sports &amp; Outdoors</option>
                  <option value="tools">Tools &amp; Home Improvement</option>
                  <option value="toys-and-games">Toys &amp; Games</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="videogames">Video Games</option>
                  <option value="wine">Wine</option>
                </select>
              </div>
              <div class="nav-right">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input type="submit">
              </div>
              <div class="nav-fill">
                <input type="text" autocomplete="off">
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>

CSS:

    header {
      background-color: #232f3e;
      height: 99px;
    }

    .nav-left {
      position: relative;
      float: left;
      width: auto;
      display: inline-block;
    }

    .nav-right {
      position: relative;
      float: right;
      width: auto;
      display: inline-block;
    }

    .nav-fill {
      width: auto;
      white-space: nowrap;
      overflow: hidden;
    }

    #nav-logo {
      padding: 11px 18px 0 24px;
      position: relative;
      width: 192px;
    }

    #nav-logo .nav-logo-link {
      background: transparent url('../img/logo.png') no-repeat top left;
      background-size: 102px;
      width: 192px;
      height: 32px;
      display: block;
    }

    #nav-logo .nav-logo-tagline {
      color: #48a3c6;
      position: absolute;
      top: 31px;
      left: 93px;
      font-size: 11px;
      line-height: 11px;
      font-family: arial, sans-serif;
      font-weight: 700;
    }

    #nav-logo .nav-logo-tagline:hover {
      color: #ffffff;
    }

    #nav-holiday {
      top: 9px;
      position: relative;
      background-image: url('../img/fathers_day.jpg');
      width: 400px;
      height: 39px;
    }

    #nav-holiday a {
      display: block;
      height: 100%;
    }

    #nav-search {
      position: relative;
      display: block;
      overflow: hidden;
      padding-top: 11px;
      padding-right: 25px;
    }

    #nav-search input {
      width: 100%;
    }

    #nav-search .nav-left {
      height: 35px;
      background-color: #f3f3f3;
      border-radius: 4px 0 0 4px;
      border: 1px solid #cdcdcd;
      overflow: hidden;
    }

    #nav-search .nav-left:hover {
      background-color: #dadada;
      border-left-color: #dadada;
      border-top-color: #dadada;
      border-bottom-color: #dadada;
    }

    #nav-search .nav-search-label {
      color: #777;
      display: block;
      font-size: 12px;
      line-height: 33px;;
      margin-right: 21px;
      margin-left: 10px;
    }

    #nav-search .nav-left i {
      position: absolute;
      top: 10px;
      right: 9px;
      color: #a0a0a0;
      font-size: 11px;
    }

    #nav-search select {
      position: absolute;
      left: 0px;
      top: 0px;
      opacity: 0;
      height: 35px;
      display: block;
      outline: none;
      cursor: pointer;
    }

    #nav-search .nav-fill {
      height: 35px;
      overflow: hidden;
    }

    #nav-search .nav-fill input {
      border: none;
      height: 35px;
      padding: 5px 10px;
      font-size: 15px;
      color: #111;
      outline: none;
    }

    #nav-search .nav-right {
      background-color: #febd69;
      width: 45px;
      height: 35px;
      border-radius: 0 4px 4px 0;
    }

    #nav-search .nav-right:hover {
      background-color: #f3a847;
    }

    #nav-search .nav-right i {
      position: absolute;
      top: 5px;
      right: 13px;
      color: #333;
      font-size: 22px;
      opacity: 0.9;
    }

    #nav-search .nav-right input {
      position: relative;
      width: 100%;
      height: 100%;
      display: block;
      outline: none;
      cursor: pointer;
      background: none;
      border: none;
      text-indent: -1000px;
    }

JS:

    $(function() {
      $('#nav-search-select').change(function() {
        var selectedText = $(this).find('option:selected').text();
        $('#nav-search').find('.nav-search-label').html(selectedText);
      });
    });


Then to the `nav-main`, HTML:

    <nav id="nav-main">
      <div class="nav-left">
        <div class="nav-shop">
          <a class="nav-a" href="#">
            Departments
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="nav-right">
        <a class="nav-a" href="#">
          <span>EN</span>
          <i class="fa fa-globe" aria-hidden="true"></i>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>

        <a class="nav-a" href="#">
          <span>Hello. Sign in</span>
          Accounts &amp; Lists
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>

        <a class="nav-a" href="#">
          Orders
        </a>

        <a class="nav-a" href="#">
          Try Prime
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>

        <a class="nav-a cart" href="#">
          <span>0</span>
          Cart
        </a>
      </div>
      <div class="nav-fill">
        <ul>
          <li><a href="#">Your Amazon.com</a></li>
          <li><a href="#">Today's Deals</a></li>
          <li><a href="#">Gift Cards &amp; Registry</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </nav>

And the corresponding CSS:

    #nav-main ul {
      list-style-type: none;
      position: relative;
      padding: 0;
      margin: 18px 0 0 0;
    }

    #nav-main li {
      display: inline-block;
      padding: 10px 9px 0 0;
    }

    #nav-main a {
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
    }

    #nav-main .nav-a {
      padding: 7px 10px;
      border: 1px solid transparent;
      display: inline-block;
      position: relative;
    }

    #nav-main .nav-a:hover {
      border: 1px solid #4f5965;
      border-radius: 3px;
      box-shadow: 0 1px 0 0 rgba(255,255,255,.5);
    }

    #nav-main .nav-a span {
      display: block;
      margin-left: -2px;
      font-weight: 300;
      color: #ccc;
      font-size: 12px;
    }

    #nav-main i.fa-caret-down {
      color: #ccc;
      font-size: 11px;
      padding-left: 3px;
    }

    #nav-main .nav-left {
      height: 55px;
    }

    #nav-main .nav-left .nav-shop {
      float: left;
      width: 192px;
      padding: 4px 12px 0 15px;
    }

    #nav-main .nav-left .nav-shop a {
      margin-top: 16px;
    }

    #nav-main .nav-fill a {
      font-weight: 500;
      color: #ccc;
    }

    #nav-main .nav-fill a:hover {
      text-decoration: underline;
    }

    #nav-main .nav-right {
      padding-right: 6px;
    }

    #nav-main .nav-right a {
      margin-top: 6px;
    }

    #nav-main .nav-right .cart {
      background: transparent url(../img/cart.png) no-repeat 11px 11px;
      background-size: 39px;
      padding: 7px 20px 7px 50px;
    }

    #nav-main .nav-right .cart span {
      color: #f08804;
      margin-left: -20px;
      font-size: 16px;
      font-weight: 700;
    }


## Adding promo slider

To add the slides to the page, we'll be using the same [Bootstrap Caoursel](http://getbootstrap.com/javascript/#carousel) component we've used in other clones.

HTML:

    <section id="promo">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div id="promo-carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img src="img/slide_1.jpg">
                </div>
                <div class="item">
                  <img src="img/slide_2.jpg">
                </div>
                <div class="item">
                  <img src="img/slide_3.jpg">
                </div>
                <div class="item">
                  <img src="img/slide_4.jpg">
                </div>
                <div class="item">
                  <img src="img/slide_5.jpg">
                </div>
                <div class="item">
                  <img src="img/slide_6.jpg">
                </div>
                <div class="item">
                  <img src="img/slide_7.jpg">
                </div>
              </div>

              <!-- Controls -->
              <a class="left carousel-control" href="#promo-carousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#promo-carousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

CSS:

    @media (min-width: 1200px) {
      .container {
        width: 1560px;
      }
    }

    #promo .col-lg-12 {
      padding: 0 22px 10px 22px;
    }

    #promo .carousel {
      margin-top: -2px;
    }

As you've noticed, we've changed the default width of the [Bootstrap grid](http://getbootstrap.com/css/#grid) system to make it wider, as on the original website.

## Adding products

Now we can add the featured products of the page, HTML:

    <section id="products">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="col-lg-3">
              <div class="col text-center" id="welcome">
                <h2>Welcome</h2>
                <p>Sign in for the best experience</p>
                <button class="btn">Sign in securely</button>
                <div class="footer">
                  New to Amazon? <a href="#">Start here</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="col" id="amazon-basics">
                <h2>Explore AmazonBasics</h2>
                <a href="#" class="thumbnail text-center">
                  <img src="img/product_1.jpg" alt="Product 1">
                  <span class="caption">Home</span>
                </a>
                <a href="#" class="thumbnail text-center">
                  <img src="img/product_2.jpg" alt="Product 2">
                  <span class="caption">Bluetooth</span>
                </a>
                <a href="#" class="thumbnail text-center">
                  <img src="img/product_3.jpg" alt="Product 3">
                  <span class="caption">Pets</span>
                </a>
                <a href="#" class="thumbnail text-center">
                  <img src="img/product_4.jpg" alt="Product 4">
                  <span class="caption">Computer</span>
                </a>
                <div class="footer">
                  <a href="#">Shop all AmazonBasics</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="col" id="dress">
                <h2>The dress shop</h2>
                <div class="row text-center">
                  <a href="#"><img src="img/dress.png"></a>
                </div>

                <div class="footer">
                  <a href="#">Shop women's dresses</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div>
                <a href="#"><img src="img/product_5.jpg" alt="Product 5"></a>
              </div>
              <div class="col" id="deal-day">
                <h2>Deal of the day</h2>
                <h3>$163.99</h3>
                <small>List: <s>$425.00</s> (47% off)</small>
                <a href="#"><img src="img/product_6.jpg" alt="Product 6"></a>
                <div class="footer">
                  <a href="#">Shop all deals</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

And the CSS:

    .col-lg-3 {
      padding: 0 7px;
    }

    .text-center {
      text-align: center;
    }

    h2 {
      color: #111;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.3;
      padding-bottom: 15px;
    }

    h3 {
      color: #111;
      font-size: 28px;
      font-weight: 500;
    }

    .btn {
      height: 29px;
      padding: 2px 20px;
      background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
      border-color: #a88734 #9c7e31 #846a29;
      color: #111;
      border-width: 1px;
      border-style: solid;
      cursor: pointer;
      font-size: 13px;
      box-shadow: 0 1px 0 rgba(255,255,255,.4) inset;
      border-radius: 3px;
    }

    .btn:hover {
      border-color: #a88734 #9c7e31 #846a29;
      background: linear-gradient(to bottom,#f5d78e,#eeb933);
      color: #111;
    }

    #products {
      padding: 0 0 60px 0;
    }

    #products .col {
      background: rgba(19,19,4,.04);
      padding: 15px;
      min-height: 578px;
      position: relative;
    }

    #products h2 {
      margin: 0;
    }

    #products img {
      max-width: 100%;
    }

    #products .thumbnail {
      display: inline-block;
      padding: 0;
      border: none;
      margin: 8px;
      background: none;
    }

    #products .thumbnail:hover {
      text-decoration: none;
    }

    #products .thumbnail .caption {
      padding: 0;
      margin: 12px 0 4px 0;
      display: inline-block;
      color: #111;
      font-size: 13px;
    }

    #products #welcome {
      padding-top: 80px;
    }

    #products #welcome h2 {
      font-size: 26px;
    }

    #products #welcome p {
      font-size: 13px;
      color: #111;
      margin-bottom: 60px;
    }

    #products #welcome .btn {
      width: 100%;
    }

    #products #amazon-basics img {
      max-width: 151px;
    }

    #products #dress img {
      max-width: 200px;
    }

    #products #deal-day {
      margin-top: 20px;
      position: relative;
      min-height: 250px !important;
    }

    #products #deal-day h2 {
      margin-bottom: 15px;
    }

    #products #deal-day h3 {
      margin: 0;
      line-height: 26px;
    }

    #products #deal-day img {
      max-width: 88px;
      position: absolute;
      right: 30px;
      top: 50px;
    }

    #products .footer {
      position: absolute;
      bottom: 0;
      border-top: 1px solid #e7e7e7;
      width: 90%;
      padding: 17px 0 17px;
      font-size: 13px;
      color: #555;
    }

## Adding footer

Amazon's footer is huge, so we'll break it into 3 components, the "top", "middle" and "bottom". Let's start with the top that has the "Back to top" link:

    <header>
      <a id="nav-top"></a>
      ...
    </header>

    <footer>
      <div class="top text-center">
        <a href="#nav-top">Back to top</a>
      </div>
    </footer>

CSS:

    footer a {
      color: #fff;
    }

    footer .top {
      background: #37475a;
    }

    footer .top a {
      padding: 17px;
      width: 100%;
      display: inline-block;
    }

    footer .top a:hover {
      color: #fff;
      text-decoration: none;
    }

    footer .top:hover {
      background: #485769;
    }

Now, we can move to the middle part of the footer together with the store selector:

    ...
    <div class="middle">
      <div class="center">
        <ul>
          <li><h3>Get to Know Us</h3></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About Amazon</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Amazon Devices</a></li>
        </ul>
        <ul>
          <li><h3>Make Money with Us</h3></li>
          <li><a href="#">Sell on Amazon</a></li>
          <li><a href="#">Sell Your Services on Amazon</a></li>
          <li><a href="#">Sell on Amazon Business</a></li>
          <li><a href="#">Sell Your Apps on Amazon</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Self-Publish with Us</a></li>
          <li><a href="#">Become an Amazon Vendor</a></li>
          <li><a href="#">Sell Your Subscription on Amazon</a></li>
          <li><a href="#">› See all</a></li>
        </ul>
        <ul>
          <li><h3>Amazon Payment Products</h3></li>
          <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
          <li><a href="#">Amazon.com Store Card</a></li>
          <li><a href="#">Amazon.com Corporate Credit Line</a></li>
          <li><a href="#">Shop with Points</a></li>
          <li><a href="#">Credit Card Marketplace</a></li>
          <li><a href="#">Reload Your Balance</a></li>
          <li><a href="#">Amazon Currency Converter</a></li>
        </ul>
        <ul>
          <li><h3>Let Us Help You</h3></li>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Your Orders</a></li>
          <li><a href="#">Shipping Rates &amp; Policies</a></li>
          <li><a href="#">Amazon Prime</a></li>
          <li><a href="#">Returns &amp; Replacements</a></li>
          <li><a href="#">Manage Your Content and Devices</a></li>
          <li><a href="#">Amazon Assistant</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>

      <ul class="copy text-center">
        <li><a href="#" class="logo"></a></li>
        <li><a href="#" class="select"><i class="fa fa-globe" aria-hidden="true"></i> English</a></li>
        <li><a href="#" class="select"><i class="flag-icon-us"></i>United States</a></li>
      </ul>
    </div>
    </footer>

CSS:

    footer .center {
      margin: 0 auto;
      max-width: 1080px;
    }

    footer ul {
      margin: 30px 40px 30px 0;
      display: inline-block;
      vertical-align: top;
      list-style: none;
    }

    footer .middle {
      background: #232f3e;
    }

    footer .middle h3 {
      color: #fff;
      font-weight: 700;
      margin-bottom 10px;
      padding: 0;
      font-size: 16px;
    }

    footer .middle li {
      position: relative;
    }

    footer .middle .logo {
      background: transparent url('../img/logo.png') no-repeat 0 0;
      background-size: 76px;
      width: 76px;
      height: 23px;
      display: block;
      border: none !important;
      margin-right: 60px;
      position: absolute;
      top: -14px;
      left: -120px;
    }

    footer .middle a {
      color: #ddd;
      font-size: 13px;
      display: block;
      padding: 5px 0;
    }

    footer ul.copy {
      display: inline-block;
      width: 100%;
    }

    footer ul.copy li {
      display: inline-block;
      margin-right: 20px;
      color: #999;
      font-size: 11px;
    }

    footer .middle .copy {
      border-top: 1px solid #3a4553;
      padding: 30px 20px 20px 20px;
    }

    footer .middle .copy a {
      padding: 10px 30px 10px 10px;
      color: #ccc;
      border: 1px solid #848688;
      border-radius: 3px;
    }

    footer .middle .copy a:hover {
      text-decoration: none;
      border-color: #8D9096;
    }

    footer .middle .fa-globe {
      margin-right: 5px;
    }

    footer .middle .flag-icon-us {
      background-image: url('https://sp-bootstrap.global.ssl.fastly.net/8.0.0/images/flags/us.svg');
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: contain;
      display: inline-block;
      height: 1em;
      width: 1.33333333em;
      margin-right: 7px;
      background-position: 0 2px;
    }

Finally, we can wrap it up with the bottom footer:

    ..
      <div class="bottom">
        <div class="center">
          <ul>
            <li><a href="#">Amazon Music<br/><span>Stream millions<br> of songs</span></a></li>
            <li><a href="#">AmazonFresh<br/><span>Groceries &amp; More<br> Right To Your Door</span></a></li>
            <li><a href="#">Amazon Web Services<br/><span>Scalable Cloud<br> Computing Services</span></a></li>
            <li><a href="#">East Dane<br/><span>Designer Men's<br> Fashion</span></a></li>
            <li><a href="#">Prime Now<br/><span>FREE 2-Hour Delivery<br> on Everyday Items</span></a></li>
          </ul>

          <ul>
            <li><a href="#">Amazon Drive<br/><span>Cloud storage<br> from Amazon</span></a></li>
            <li><a href="#">AmazonGlobal<br/><span>Ship Orders<br> Internationally</span></a></li>
            <li><a href="#">Audible<br/><span>Download<br> Audio Books</span></a></li>
            <li><a href="#">Fabric<br/><span>Sewing, Quilting<br> &amp; Knitting</span></a></li>
            <li><a href="#">Prime Photos<br/><span>Unlimited Photo Storage<br> Free With Prime</span></a></li>
            <li><a href="#">Woot!<br/><span>Deals and <br> Shenanigans</span></a></li>
          </ul>

          <ul>
            <li><a href="#">6pm<br/><span>Score deals<br> on fashion brands</span></a></li>
            <li><a href="#">Home Services<br/><span>Handpicked Pros<br> Happiness Guarantee</span></a></li>
            <li><a href="#">Book Depository<br/><span>Books With Free<br> Delivery Worldwide</span></a></li>
            <li><a href="#">Goodreads<br/><span>Book reviews<br> &amp; recommendations</span></a></li>
            <li><a href="#">Shopbop<br/><span>Designer<br> Fashion Brands</span></a></li>
            <li><a href="#">Zappos<br/><span>Shoes &amp;<br> Clothing</span></a></li>
          </ul>

          <ul>
            <li><a href="#">AbeBooks<br/><span>Books, art<br> &amp; collectibles</span></a></li>
            <li><a href="#">Amazon Inspire<br/><span>Free Digital Educational<br>  Resources</span></a></li>
            <li><a href="#">Box Office Mojo<br/><span>Find Movie<br> Box Office Data</span></a></li>
            <li><a href="#">IMDb<br/><span>Movies, TV<br> &amp; Celebrities</span></a></li>
            <li><a href="#">TenMarks.com<br/><span>Math Activities<br> for Kids &amp; Schools</span></a></li>
            <li><a href="#">Souq.com<br/><span>Shop Online in<br> the Middle East</span></a></li>
          </ul>

          <ul>
            <li><a href="#">ACX <br/><span>Audiobook Publishing<br> Made Easy</span></a></li>
            <li><a href="#">Amazon Rapids<br/><span>Fun stories for<br>  kids on the go</span></a></li>
            <li><a href="#">ComiXology<br/><span>Thousands of<br> Digital Comics</span></a></li>
            <li><a href="#">IMDbPro<br/><span>Get Info Entertainment<br> Professionals Need</span></a></li>
            <li><a href="#">Warehouse Deals<br/><span>Open-Box<br> Discounts</span></a></li>
            <li><a href="#">Subscribe with Amazon<br/><span>Discover &amp; try<br> subscription services</span></a></li>
          </ul>

          <ul>
            <li><a href="#">Alexa<br/><span>Actionable Analytics<br> for the Web</span></a></li>
            <li><a href="#">Amazon Restaurants<br/><span>Food delivery from<br> local restaurants</span></a></li>
            <li><a href="#">CreateSpace<br/><span>Indie Print Publishing<br> Made Easy</span></a></li>
            <li><a href="#">Junglee.com<br/><span>Shop Online<br> in India</span></a></li>
            <li><a href="#">Whispercast<br/><span>Discover &amp; Distribute<br> Digital Content</span></a></li>
          </ul>

          <ul>
            <li><a href="#">Amazon Business<br/><span>Everything For<br> Your Business</span></a></li>
            <li><a href="#">Amazon Video Direct<br/><span>Video Distribution<br> Made Easy</span></a></li>
            <li><a href="#">DPReview<br/><span>Digital<br> Photography</span></a></li>
            <li><a href="#">Kindle Direct Publishing<br/><span>Indie Digital Publishing<br> Made Easy</span></a></li>
            <li><a href="#">Withoutabox<br/><span>Submit to<br> Film Festivals</span></a></li>
          </ul>

          <ul class="copy text-center">
            <li><a href="#">Conditions of Use</a></li>
            <li><a href="#">Privacy Notice</a></li>
            <li><a href="#">Interest-Based Ads</a></li>
            <li>&copy; 1996-2017, Amazon.com, Inc. or its affiliates</li>
          </ul>
        </div>
      </div>
    </footer>

CSS:

    footer .bottom {
      background: #131a22;
    }

    footer .bottom ul {
      margin-right: 0;
    }

    footer .bottom li {
      margin-bottom: 15px;
    }

    footer .bottom a {
      color: #ddd;
      font-size: 11px;
      line-height: 11px;
    }

    footer .bottom a span {
      color: #999;
      font-size: 10px;
    }

And we're done 💥!
