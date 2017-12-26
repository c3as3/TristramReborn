$(document).ready(function(){

  //Takes user back to homepage when clicking logo
  $('.logo').click(function(){
    window.location.href = ('/');
  });

  //Mobile Hamburger Menu Toggle
  $('.hamburger').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav-menu').slideToggle(500);
  });

  //Current Streamer Sidebar popout
  $('.currentStreamersIcon').click(function(){
    $(this).toggleClass('slideIn');
    $('.currentStreamersSidebar').toggleClass('sideBarOpacity');
  });


//Make Class Skill Tree expand on click. Original size if clicked again
  $('.classSkill').click(function(){
    if($(this).hasClass('clicked')){
      $('.classSkill').removeClass('clicked');
    }else
      if($(this).hasClass('clicked') != true){
        $('.classSkill').removeClass('clicked');
        $(this).addClass('clicked');
      }
  });

  $('section.classes classMenu ul li a').click(function(event){
    event.preventDefault();
    let $href = $(this).attr('href');
    let $anchor = $($href).offset();
    $('body').animate({
      scrollTop: $anchor.top
    }, 2500);
  });

//Check if Twitch Stream is Live or Not
  // getStreamID();
  //
  // function getStreamID(){
  //   var channel = ["granfatha", "diglio", "leakycougar", 'alarashade', 'dhono125', 'hytyme', 'mrbubbles17', 'djwaters22', 'flufflo', 'mrllamasc', 'btneandertha1', 'lumen_br'];
  //   for(var i=0; i<channel.length;i++){
  //     $.ajax({
  //         url: "https://api.twitch.tv/kraken/search/channels?query=" + channel[i],
  //         datatype: "json",
  //         headers: {
  //           "Client-Id": "oaohf6vtqo9qczdmb2rtf8wcfh3nsc",
  //           Accept: "application/vnd.twitchtv.v5+json"
  //         },
  //         async: false,
  //         success: function(dataI){
  //           channelID = dataI.channels[0]._id;
  //           channelName = dataI.channels[0].name;
  //           $.ajax({
  //             url: "https://api.twitch.tv/kraken/streams/" + channelID,
  //             datatype: "json",
  //             headers: {
  //               "Client-Id": "oaohf6vtqo9qczdmb2rtf8wcfh3nsc",
  //               Accept: "application/vnd.twitchtv.v5+json"
  //             },
  //             async: false,
  //             success: function(dataII){
  //               if(dataII.stream === null){
  //                 $('.' + channelName + 'IsLive').html(channelName + "'s Stream is Offline");
  //               } else{
  //                 $('.' + channelName + 'IsLive').html(channelName + "'s Stream is Online");
  //               }
  //             }
  //           });
  //         }
  //     });
  //   }
  // }

  //Check total viewers and streamers of Diablo II
    getTotalViewers();
    function getTotalViewers(){
      var game = "Diablo II: Lord of Destruction";
      $.ajax({
        url: 'https://api.twitch.tv/kraken/streams/summary?game=Diablo II: Lord of Destruction',
        datatype: 'json',
        headers: {
          "Client-Id": 'oaohf6vtqo9qczdmb2rtf8wcfh3nsc',
          Accept: 'application/vnd.twitchtv.v5+json'
        },
        success: function(data){
          totalViewers = data.viewers;
          totalStreamers = data.channels;
          $('.totalViewers').html('There are currently ' + '<b>' + totalViewers + ' viewers</b> watching ' + '<b>' + totalStreamers + ' players</b> stream ' + game);
        }
      });
    }
});
