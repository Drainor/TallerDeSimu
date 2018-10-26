// DEMO = {
//   showWaypoints: true,
//   showTrail: true
//   };

//   DEMO.run = function() {

//     var minX = 200;
//     var minY = 200;
//     var maxX = $(document).width() - 100;
//     var maxY = $(document).height() - 100;
//     alert("MaxX: "+$(document).width()+",  "+"maxy: "+$(document).height())

//     var numPoints = 3;
//     var dotsPerSeg = 50;
//     var i;

//     var points = [250,300,1270,350,1280,390,250,300,1270,350,1280,390];

//     // Make a random list of waypoints for the animation to follow
//     for (i=0; i<numPoints; i++) {
//       // points.push([Math.floor(Math.random()*(maxX-minX))+minX, Math.floor(Math.random()*(maxY-minY))+minY]);
//     }

//     // -- Important bit #1: Generate the spline animation object --
//     var spline = $.crSpline.buildSequence(points);
    
//     // Clean up visuals if we've run this once already
//     $("#mover").remove();
//     $(".waypoint").remove();
//     $(".path-dot").remove();

//     // Scary-looking stuff to visualize the waypoints and the trail of dots
//     // NOT needed for animation
//     for (i=0; i<numPoints; i++) {
//       $('<div class="waypoint">' + i + '</div>')
//         .appendTo($(document.body))
//         .css({
//           left: points[i][0],
//           top: points[i][1],
//           display: (DEMO.showWaypoints ? "inline" : "none")
//         });

//       for (var j=0; j<dotsPerSeg; j++) {
//         var t = (i + j/dotsPerSeg) / points.length;
//         var pos = spline.getPos(t);
//         $('<div class="path-dot" />')
//           .appendTo($(document.body))
//           .css({
//             left: pos.left,
//             top: pos.top,
//             display: (DEMO.showTrail ? "inline" : "none")
//           });
//       }
//     }

//     // -- Important bit #2: Actually animate our mover object. --
//     $('<div id="mover" />')
//       .appendTo($(document.body))
//       .animate({ crSpline: spline }, 20000, function () {
//         // Re-run the demo with a new spline after we're done
//         window.setTimeout(function() {
//           DEMO.run();
//         }, 5000);
//       });
    
//   };

$(document).on('ready', function() {

  // $("#show-trail").click(function () {
  //   if ($(this).is(":checked")) {
  //     $(".path-dot").css({display: "inline"});
  //     DEMO.showTrail = true;
  //   }
  //   else {
  //     $(".path-dot").css({display: "none"});
  //     DEMO.showTrail = false;
  //   }
  // });

  // $("#show-waypoints").click(function () {
  //   if ($(this).is(":checked")) {
  //     $(".waypoint").css({display: "inline"});
  //     DEMO.showWaypoints = true;
  //   }
  //   else {
  //     $(".waypoint").css({display: "none"});
  //     DEMO.showWaypoints = false;
  //   }
  // });

  // $("#show-trail").attr("checked", DEMO.showTrail);
  // $("#show-waypoints").attr("checked", DEMO.showWaypoints);

  // DEMO.run();

    $(".cuadrado").click(function() {
// simular();
      var position  = []; 
      var tiempo = []; 
      for (var i = 0; i <= 22; i++) {
        $( 'span' ).remove(".badge");
          var id = "#dot-"+i;
          position[i] = $(id).position();
          tiempo[i] = Math.floor(Math.random() * 6000) + 1;
          // position.push(res);
      }
        // var position0 = $("#dot-0").position();
        // var position1 = $("#dot-1").position();
        // var position2 = $("#dot-2").position();
        // var position3 = $("#dot-3").position();
        // var position4 = $("#dot-4").position();
        // var position5 = $("#dot-5").position();
        // var position6 = $("#dot-6").position();
        // var position7 = $("#dot-7").position();
        // var position8 = $("#dot-8").position();
        // var position9 = $("#dot-9").position();
        // var position10 = $("#dot-10").position();
        // var position11 = $("#dot-11").position();
        var positionEnd = $("#end").position();

        // $(document).ready(function(){
            // curve();
        // });
        // alert(position2.top + ', ' + position2.left);
        var randomNumber1 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber3 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber4 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber5 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber6 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber7 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber8 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber9 = Math.floor(Math.random() * 6000) + 1;
        var randomNumber10 = Math.floor(Math.random() * 6000) + 1;
        // alert(randomNumber);

        var randomSolicitud = Math.floor(Math.random() * 1) + 1;
        // alert(randomSolicitud);
        var div = $(this);
        var caminoUno = [1,2,3,5,6,7,22];
        var caminoDos = [0,1,2,3,4,12,16,22];
        var caminoTres = [0,1,2,3,6,11,22];

        $( function() {
          var c = 1;
          window.clearInterval(spop);
          // if(c>4)c=1;
          function spop(){
                      if(c==4)c++;
                      $("#proceso"+c).mouseover();
                      c++;
                    }
          window.setInterval(spop, 3000).delay(1000);
          // window.setInterval(function(){
          //   $("#proceso1").mouseover();
          // }, 3000).delay(1000);
          // window.setInterval(function(){
          //   $("#proceso2").mouseover();
          // }, 1000).delay(1000);


          
          // $("#proceso2").mouseover();
          // $("#proceso3").mouseover();
          // $("#proceso4").mouseover();
        });
        
        if(randomSolicitud == 1){

          
          recorrerCamino(div,caminoUno,tiempo);
          // div.animate({left: position[0].left, top: position[0].top}, 1000);
          //   div.animate({left: position1.left, top: position1.top}, randomNumber1);
            // $( position1 ).addClass( "smallipop" );
            
            
            // div.animate({left: position2.left, top: position2.top}, randomNumber2);
            // div.animate({left: position3.left, top: position3.top}, randomNumber3);
            // div.animate({left: position0.left, top: position0.top}, randomNumber4);
            // div.animate({left: position4.left, top: position4.top}, randomNumber5);
            // div.animate({left: position5.left, top: position5.top}, randomNumber6);
            // div.animate({left: position6.left, top: position6.top}, randomNumber7);
            // div.animate({left: position7.left, top: position7.top}, randomNumber8);
            // div.animate({left: position4.left, top: position4.top}, randomNumber9);
            // div.animate({left: positionEnd.left, top: positionEnd.top}, randomNumber10);
        } else if(randomSolicitud == 2){
          recorrerCamino(div,caminoDos,tiempo);

        }else {
          recorrerCamino(div,caminoTres,tiempo);
        }
        
          
            // div.animate({left: position8.left, top: position8.top}, 2000);
            // div.animate({left: position9.left, top: position9.top}, 2000);

            // div.animate({fontSize: '3em'}, "slow");
            // $(this).animate({ 'top': position2.top + 'px', 'left': position2.left + 'px'}, 1000, function(){
            //     $(this).addClass("animate");
            //     $(this).animate({
            //               top:"-=220",
            //               left:"+=420"
            //             },2000);
            //    });
      // alert(position1.top + ', ' + position1.left);

      var position2 = $(this).position();
      // alert(position2.top + ', ' + position2.left);
      function curve() {
          $('.cuadrado').animate({
              top: "+=20px",
              left: ["+=200px", 'easeInSine']
          }, {
              duration: 200,
              specialEasing: {
                  top: 'easeOutQuad',
                  left: 'easeInQuad'
              },
              complete: function() {
                  $('.cuadrado').animate({
                      top: "-=20px",
                      left: "+=20px"
                  }, {
                      duration: 500,
                      specialEasing: {
                          top: 'easeInQuad',
                          left: 'easeOutQuad'
                      },
                      complete: function() {
                          // repeat the other way around.
                      }
                  });
              }
          });
      }

    });

    function recorrerCamino(div1, path, time) {
      // var position  = [];
      var target = div1;
      for (var i = 0; i <= path.length; i++) {
        var id = ".dot-"+path[i];
        target = $(id).position();        
        $( id ).parent().css( "border-bottom-color", "#CC33ff" ).delay(time[i]).append("<span class='badge'>"+(i+1)+"</span>");
        // $(function () {
          
        // });
        // alert( "left: " + target.left + ", top: " + target.top);
        $(id).css('position', 'absolute');
        $(id).css({
          left:target.left,
          top:target.top,
            'z-index':'2'

        });
        $(div1).css({
            'z-index':'2'

        });
        $(div1).animate({top:target.top + 'px', left:target.left + 'px'},'slow');
        // parentTag.css({"border-color": "#CC3300"});
      }
      
    }

    $( "div" ).click(function() {
      // $("div").addClass("animate");
    });
  });