<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Webs of Webs</title>

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    body{
      font-family:Arial, sans-serif;
      background:#f5f5f5;
      color:#111;
    }

    /* NAVBAR */

    .navbar{

      background:black;

      color:white;

      padding:20px 40px;

      display:flex;

      justify-content:space-between;

      align-items:center;

      position:sticky;

      top:0;
    }

    .logo{

      font-size:32px;

      font-weight:bold;
    }

    .menu a{

      color:white;

      text-decoration:none;

      margin-left:20px;

      font-size:18px;

      transition:0.3s;
    }

    .menu a:hover{
      color:#00bfff;
    }

    /* HERO SECTION */

    .hero{

      text-align:center;

      padding:120px 20px;

      background:white;
    }

    .hero h1{

      font-size:65px;

      margin-bottom:20px;
    }

    .hero p{

      font-size:24px;

      color:gray;

      max-width:900px;

      margin:auto;

      margin-bottom:40px;

      line-height:1.6;
    }

    .buttons{

      margin-top:30px;
    }

    .btn{

      padding:16px 35px;

      border:none;

      border-radius:10px;

      font-size:18px;

      cursor:pointer;

      margin:10px;

      transition:0.3s;
    }

    .btn-primary{

      background:black;

      color:white;
    }

    .btn-primary:hover{
      background:#333;
    }

    .btn-secondary{

      background:#00bfff;

      color:white;
    }

    .btn-secondary:hover{
      background:#0095cc;
    }

    /* HERO IMAGE */

    .hero img{

      width:85%;

      max-width:1000px;

      margin-top:60px;

      border-radius:20px;

      box-shadow:0px 5px 20px rgba(0,0,0,0.2);
    }

    /* FEATURES */

    .features{

      padding:100px 40px;

      background:#f5f5f5;

      text-align:center;
    }

    .features h2{

      font-size:45px;

      margin-bottom:50px;
    }

    .feature-boxes{

      display:flex;

      flex-wrap:wrap;

      justify-content:center;

      gap:30px;
    }

    .box{

      background:white;

      width:280px;

      padding:30px;

      border-radius:15px;

      box-shadow:0px 4px 15px rgba(0,0,0,0.1);
    }

    .box h3{

      margin-bottom:15px;

      font-size:24px;
    }

    .box p{

      color:gray;

      line-height:1.5;
    }

    /* SERVICES */

    .services{

      background:white;

      padding:100px 20px;

      text-align:center;
    }

    .services h2{

      font-size:45px;

      margin-bottom:20px;
    }

    .services p{

      font-size:22px;

      color:gray;

      max-width:800px;

      margin:auto;

      line-height:1.6;
    }

    /* NOTICE */

    .notice{

      background:black;

      color:white;

      text-align:center;

      padding:40px 20px;

      font-size:18px;

      line-height:1.7;
    }

    /* FOOTER */

    footer{

      background:#111;

      color:white;

      text-align:center;

      padding:30px;
    }

  </style>

</head>

<body>

  <!-- NAVBAR -->

  <div class="navbar">

    <div class="logo">
      Webs of Webs
    </div>

    <div class="menu">

      <a href="#">Home</a>

      <a href="#">Create Website</a>

      <a href="#">Templates</a>

      <a href="#">Services</a>

      <a href="#">Portfolio</a>

      <a href="#">Pricing</a>

      <a href="#">Contact</a>

      <a href="#">Login</a>

    </div>

  </div>

  <!-- HERO SECTION -->

  <section class="hero">

    <h1>
      Welcome to Webs of Webs
    </h1>

    <p>
      Turn your ideas into beautiful modern websites. Build your own website easily or let our team create a professional website for you.
    </p>

    <div class="buttons">

      <button class="btn btn-primary">
        Create Website
      </button>

      <button class="btn btn-secondary">
        Message Us
      </button>

    </div>

    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f">

  </section>

  <!-- FEATURES -->

  <section class="features">

    <h2>
      Why Choose Us
    </h2>

    <div class="feature-boxes">

      <div class="box">

        <h3>AI Website Builder</h3>

        <p>
          Describe your dream website and start building quickly with modern tools.
        </p>

      </div>

      <div class="box">

        <h3>Modern Templates</h3>

        <p>
          Choose from clean and professional website designs for every need.
        </p>

      </div>

      <div class="box">

        <h3>Fast Support</h3>

        <p>
          Need help? Contact us anytime for website fixes and support.
        </p>

      </div>

    </div>

  </section>

  <!-- SERVICES -->

  <section class="services">

    <h2>
      Need a Custom Website?
    </h2>

    <p>
      If you want a website designed professionally, message us and we will help bring your ideas online with clean and modern designs.
    </p>

  </section>

  <!-- NOTICE -->

  <section class="notice">

    All payments made for website development are non-refundable once the project has started. However, technical issues or development errors can be repaired and supported by Webs of Webs.

  </section>

  <!-- FOOTER -->

  <footer>

    © 2026 Webs of Webs | All Rights Reserved

  </footer>

</body>

</html>
