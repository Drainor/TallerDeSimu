<html lang="en" class=""><head><script src="//static.codepen.io/assets/editor/live/console_runner-ce3034e6bde3912cc25f83cccb7caa2b0f976196f2f2d52303a462c826d54a73.js"></script><script src="//static.codepen.io/assets/editor/live/css_reload-2a5c7ad0fe826f66e054c6020c99c1e1c63210256b6ba07eb41d7a4cb0d0adab.js"></script><meta charset="UTF-8"><meta name="robots" content="noindex"><link rel="shortcut icon" type="image/x-icon" href="//static.codepen.io/assets/favicon/favicon-8ea04875e70c4b0bb41da869e81236e54394d63638a1ef12fa558a4a835f1164.ico"><link rel="mask-icon" type="" href="//static.codepen.io/assets/favicon/logo-pin-f2d2b6d2c61838f7e76325261b7195c27224080bc099486ddd6dccb469b8e8e6.svg" color="#111"><link rel="canonical" href="https://codepen.io/melnik909/pen/qPjwvq">


  <style class="cp-pen-styles">.timeline{
    --uiTimelineMainColor: var(--timelineMainColor, #222);
    --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);
  
    position: relative;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .timeline:before{
    content: "";
    width: 4px;
    height: 100%;
    background-color: var(--uiTimelineMainColor);
  
    position: absolute;
    top: 0;
  }
  
  .timeline__group{
    position: relative;
  }
  
  .timeline__group:not(:first-of-type){
    margin-top: 4rem;
  }
  
  .timeline__year{
    padding: .5rem 1.5rem;
    color: var(--uiTimelineSecondaryColor);
    background-color: var(--uiTimelineMainColor);
  
    position: absolute;
    left: 0;
    top: 0;
  }
  
  .timeline__box{
    position: relative;
  }
  
  .timeline__box:not(:last-of-type){
    margin-bottom: 30px;
  }
  
  .timeline__box:before{
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--uiTimelineMainColor);
  
    position: absolute;
    left: 0;
    z-index: -1;
  }
  
  .timeline__date{
    min-width: 65px;
    position: absolute;
    left: 0;
  
    box-sizing: border-box;
    padding: .5rem 1.5rem;
    text-align: center;
  
    background-color: var(--uiTimelineMainColor);
    color: var(--uiTimelineSecondaryColor);
  }
  
  .timeline__day{
    font-size: 2rem;
    font-weight: 700;
    display: block;
  }
  
  .timeline__month{
    display: block;
    font-size: .8em;
    text-transform: uppercase;
  }
  
  .timeline__post{
    padding: 1.5rem 2rem;
    border-radius: 2px;
    border-left: 3px solid var(--uiTimelineMainColor);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24);
    background-color: var(--uiTimelineSecondaryColor);
  }
  
  @media screen and (min-width: 641px){
  
    .timeline:before{
      left: 30px;
    }
  
    .timeline__group{
      padding-top: 55px;
    }
  
    .timeline__box{
      padding-left: 80px;
    }
  
    .timeline__box:before{
      top: 50%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);  
    }  
  
    .timeline__date{
      top: 50%;
      margin-top: -27px;
    }
  }
  
  @media screen and (max-width: 640px){
  
    .timeline:before{
      left: 0;
    }
  
    .timeline__group{
      padding-top: 40px;
    }
  
    .timeline__box{
      padding-left: 20px;
      padding-top: 70px;
    }
  
    .timeline__box:before{
      top: 90px;
    }    
  
    .timeline__date{
      top: 0;
    }
  }
  
  .timeline{
    --timelineMainColor: #4557bb;
    font-size: 16px;
  }
  
  @media screen and (min-width: 768px){
  
    html{
      font-size: 62.5%;
    }
  }
  
  @media screen and (max-width: 767px){
  
    html{
      font-size: 55%;
    }
  }
  
  /*
  * demo page
  */
  
  body{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
    font-size: 1.6rem;
    color: #222;
  
    background-color: #f0f0f0;
    margin: 0;
    -webkit-overflow-scrolling: touch;   
    overflow-y: scroll;
  }
  
  p{
    margin-top: 0;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
  
  p:last-child{
    margin-bottom: 0;
  }
  
  .page{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  .page__demo{
    flex-grow: 1;
  }
  
  .main-container{
    max-width: 960px;
    padding-left: 2rem;
    padding-right: 2rem;
  
    margin-left: auto;
    margin-right: auto;
  }
  
  .page__container{
    padding-top: 30px;
    padding-bottom: 30px;
    max-width: 800px;
  }
  
  .footer{
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;  
    font-size: 1.4rem;
  }
  
  .footer__link{
    text-decoration: none;
    color: inherit;
  }
  
  @media screen and (min-width: 361px){
  
    .footer__container{
      display: flex;
      justify-content: space-between;
    }
  }
  
  @media screen and (max-width: 360px){
  
    .melnik909{
      display: none;
    } 
  }</style></head><body>
  <div class="page">
    <div class="page__demo">
      <div class="main-container page__container">
        <div class="timeline" >
            <div class="timeline__group" id="lineaTiempo">
                
            </div>
        </div>
      </div>
    </div>
  </div>
  
  
  </body></html>