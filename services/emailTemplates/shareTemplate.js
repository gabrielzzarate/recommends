const keys = require('../../config/keys');

module.exports = share => {
  const sharedEntries = share.entries.map(entry => {
    const str = '$';
    const convertEntryName = name => {
      let words = name.toLowerCase().split(' ');
      return words.join('+');
    };

    return `<table class="entry-share-card" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td class="space-top"></td>
      </tr>
      <tr>
        <td class="card-top"></td>
      </tr>
      <tr>
        <td class="card-main">
          <img src=${entry.photo.prefix + 400 + entry.photo.suffix} alt=${
      entry.name
    } />
          <table class="entry-share-card-primary" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <h2 class="entry-name webfont-regular">${entry.name}</h2>
                <h3 class="entry-category webfont-regular">${
                  entry.category
                }</h3>
                <p class="entry-description webfont-regular">${
                  entry.userRecommendation
                }</p>
              </td>
            <tr>
          </table>
          <table class="card-actions-buttons" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td>
              <a
                href={https://www.google.com/maps/search/?api=1&query=${convertEntryName(
                  entry.name
                )}
                target="_blank"
                class="link directions-link webfont-regular"
              >Directions</a>
              <a href="" class="link webfont-regular" target="_blank">More Info</a>
              </td>
            </tr>
          </table>
        </td>
        <tr>
          <td class="card-bottom"></td>
        </tr>
        <tr>
        <td class="space-bottom"></td>
        </tr>
      </tr>
    </table>`;
  });
  return `
<!doctype html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <title>Recommends Email Sharing</title>
    <style type="text/css">
      /* Fonts ///////////////////////////// */
         
    @font-face {
      font-family: 'Ciutadella'; 
      src:
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-bold.eot') format('embedded-opentype'),
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-bold.ttf') format('truetype'),
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-bold.woff2') format('woff2'),
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-bold.woff') format('woff');
      font-weight: 700;
      font-style: regular;
    }

    @font-face {
      font-family: 'Ciutadella'; 
      src:
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-regular.eot') format('embedded-opentype'),
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-regular.ttf') format('truetype'), 
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-regular.woff2') format('woff2'),
        url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/fonts/ciutadella-regular.woff') format('woff');
      font-weight: 400;
      font-style: regular;
    }
      
     /* Global ///////////////////////////// */
     * { margin:0; padding:0;}
     * { font-family: 'Ciutadella', Helvetica, Arial, sans-serif; }
     * { text-rendering: optimizeLegibility; }

      img {
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100%; }

      body {
        background-color: #eff1ef;
        font-family: 'Ciutadella', Helvetica, Arial, sans-serif; 
        -webkit-font-smoothing: antialiased;
        font-size: 14px;
        line-height: 1.4;
        margin: 0;
        padding: 0;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%; }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%; }
        table td {
          font-size: 14px;
          vertical-align: top; }

      @media screen {
        .webfont-bold { font-family: 'Ciutadella', Helvetica, Arial, sans-serif !important; font-weight: 700 !important; }
        .webfont-regular { font-family: 'Ciutadella', Helvetica, Arial, sans-serif !important; font-weight: 400 !important; }
      }

      /* Force Apple Mail to use email's styling for addresses, phone numbers, or dates ///////////////////////////// */
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      
      /* Force Outlook webmail to display emails at full width ///////////////////////////// */
      .ReadMsgBody {
        width: 100%;
        background-color: #ffffff;
      }
      
      /* Force Hotmail to display emails at full width ///////////////////////////// */
      .ExternalClass {
        width: 100%;
        background-color: #ffffff;
      }
      
      /* Forces Hotmail to display normal line spacing ///////////////////////////// */
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      
      /* Resolves webkit padding issue ///////////////////////////// */
      table {
      border-spacing: 0;
      }
      
      body,table,td,p,a,li,blockquote{
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }
      
      /* Other Table resets and for various clients ///////////////////////////// */
      table td {
        border-collapse: collapse !important;
        -moz-hyphens: none;
        -webkit-hyphens: none;
        hyphens: none;
        word-break: break-word;
      }
          
      /* Yahoo auto-sensing link color and border ///////////////////////////// */
      .yshortcuts a {
        border-bottom: none !important;
      }
      
      /* Mobile link ///////////////////////////// */
      .mobile-link, .appleLinks { color: #ff4c16 !important; text-decoration: none !important; }
      .mobile-link-footer {color: #391b0c !important; text-decoration: none !important; }

      /* -------------------------------------
          BODY & CONTAINER
      ------------------------------------- */

      .body {
        background-color: #eff1ef;
        color: #645d77;
        width: 100%; 
      }

      /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
      .container {
        display: block;
        margin: 0 auto !important;
        max-width: 480px;
        padding: 10px;
        width: 480px; 
      }

      /* This should also be a block element, so that it will fill 100% of the .container */
      .content {
        box-sizing: border-box;
       }

      /* -------------------------------------
          HEADER, FOOTER, MAIN
      ------------------------------------- */
      .main {
        background: #ffffff;
        border-top: 3px solid #ea7c48;
        box-sizing: border-box;
        padding: 0;
        border-collapse: collapse;
        margin: 0;
        max-width: 480px;
        width: 480px; }

      .wrapper {
        box-sizing: border-box;
      }

      .content-block {
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .footer {
        clear: both;
        margin-top: 10px;
        text-align: center;
        width: 100%; }
        .footer td,
        .footer p,
        .footer span,
        .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center; }

      /* -------------------------------------
          TYPOGRAPHY
      ------------------------------------- */
      h1,
      h2,
      h3,
      h4 {
        color: #645d77;
        font-weight: 400;
        line-height: 1.4;
        margin: 0;
        margin-bottom: 10px; }

      h1 {
        font-size: 42px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
       }
    
      h2 {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.1;
        margin: 0;
      }

      h3 {
        color: #eea37b;
        font-size: 1rem;
        line-height: 1.1rem;
        letter-spacing: 0.02em;
      }

      p,
      ul,
      ol {
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        margin-bottom: 15px; }
        p li,
        ul li,
        ol li {
          list-style-position: inside;
          margin-left: 5px; }

      a {
        color: #645d77;
        font-size: .9rem;
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;
       }

      .link {
          color: #645d77;
          border-bottom: 2px solid #ea7c48;
          cursor: pointer;
      }

      .reccomends-link {
        border: 0;
      }

      .directions-link {
        margin-right: 12px;
      }

      /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
      ------------------------------------- */
      
      .heading {
        display: inline-block;
        padding-left: 5px;
      }
      
      .logo-row {
        padding: 12px 0;
        text-align: center;
      }

      .logo {
        -webkit-transform: translateY(7px);
        -moz-transform:    translateY(7px);
        -ms-transform:    translateY(7px);
        -o-transform:   translateY(7px);
        transform: translateY(7px);
      }

      .body-content {
       padding: 0 20px 20px 20px;
       text-align: center;
      }

      .email-content-footer {
        background: #fff;
        height: 60px;
      }

      .entry-share-card {
        max-width: 480px;
        width: 480px;
        margin: 0 auto;
        background: #ffff;
      }

      .entry-share-card img {
        border-radius: 2px;
      }

      .entry-share-card-primary {
        padding: 10px 5px 20px 5px;
        width: 400px;
        margin: 0 auto;
        text-align: left;
      }

      .card-top {
       background-image: url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/images/card-top.png');
       background-position: center top;
      background-repeat: no-repeat;
      height: 28px;
      }
      
      .card-bottom {
       background-image: url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/images/card-bottom.png');
       background-position: center top;
      background-repeat: no-repeat;
      height: 21px;
      }
      
      .card-main {
       background-image: url('https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/images/card-main.png');
       background-position: center top;
      background-repeat: repeat-y;
      text-align: center;
      }
    
    .card-actions {
      padding: 10px;
    }

      .card-actions-buttons {
        padding: 10px 5px 20px 5px;
        width: 400px;
        margin: 0 auto;
        text-align: left;
       
      }

      .space-top, .space-bottom {
        height: 10px;
        background-color: #f8f8f8;
      }
      
      .last {
        margin-bottom: 0; }

      .first {
        margin-top: 0; }

      .align-center {
        text-align: center; }

      .align-right {
        text-align: right; }

      .align-left {
        text-align: left; }

      .clear {
        clear: both; }

      .mt0 {
        margin-top: 0; }

      .mb0 {
        margin-bottom: 0; }

      .preheader {
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0; }

      .powered-by a {
        text-decoration: none; }

      hr {
        border: 0;
        border-bottom: 1px solid #f6f6f6;
        Margin: 20px 0; }

      /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
      ------------------------------------- */
      @media only screen and (max-width: 620px) {
        table[class=body] h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important; }
        table[class=body] p,
        table[class=body] ul,
        table[class=body] ol,
        table[class=body] td,
        table[class=body] span,
        table[class=body] a {
          font-size: 16px !important; }
        table[class=body] .wrapper,
        table[class=body] .article {
          padding: 10px !important; }
        table[class=body] .content {
          padding: 0 !important; }
        table[class=body] .container {
          padding: 0 !important;
          width: 100% !important; }
        table[class=body] .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important; }
        table[class=body] .btn table {
          width: 100% !important; }
        table[class=body] .btn a {
          width: 100% !important; }
        table[class=body] .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important; }}

      /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
      ------------------------------------- */
      @media all {
        .ExternalClass {
          width: 100%; }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%; }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important; }
        .btn-primary table td:hover {
          background-color: #34495e !important; }
        .btn-primary a:hover {
        color: #ea7c48 !important;
          } }

    </style>
  </head>
  <body class="">
    <table border="0" align="center" cellpadding="0" cellspacing="0" class="body" height="100%" width="100%">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader">Lorem ipsum dolor sit amet</span>
            
            <table class="main">
              
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <!-------------- BEGIN Header -->
                  <table class="email-container" align="center" bgcolor="#ffffff" cellpadding="0" cellspacing="0" id="header" border="0" style="background-color: #ffffff; margin: 0 auto; width: 440px; padding: 30px 0; border-collapse: collapse;">
                    <tr>
                      <td class="logo-row" width="100%">
                        <a href="https://dry-ravine-65975.herokuapp.com/" name="reccomends-link">
                          <img alt="Recommends"  class="logo" name="logo_heading" src="https://s3-us-west-2.amazonaws.com/www.recommends-assets.com/images/recommends-heading_email.png" title="Recommends Logo" width="300" border="0" style="border-style: none;" />
                        </a>
                      </td>
                      <td width="384">&nbsp;</td>
                    </tr>
                  </table>
                  <!-------- END Header -->
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                    <td>
                    </td>
                      <td>
                        <table class="body-content" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p class="webfont-regular">${share.body}</p>
                          </td>
                        </tr>
                      </table>
                  
                      ${sharedEntries}

                    <table class="email-content-footer">
                      <tr><td></td></tr>
                    </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

            <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div class="footer">
              <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="content-block">
                    <span class="apple-link webfont-regular">Recommends App</span>
                    <br><a class="webfont-regular" href="https://dry-ravine-65975.herokuapp.com/">Share your own recommendations</a>
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`;
};
