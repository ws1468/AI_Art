let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGrid_Comments = document.getElementById('contentGrid_Comments');
let contentGrid_Articles = document.getElementById('contentGrid_Articles');

// videos
// let videosDatabase = [
//   { "title" : "Nvidia Canvas",
//     "video" : '<iframe src="https://www.youtube.com/embed/9u_08---oEw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//   },
//   { "title" : "The Surreal Dreams of AI Generated Art | Video Essay",
//     "video" : '<iframe src="https://www.youtube.com/embed/Bi4sJEE8wCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
//   }
// ];

// youtube comment photos
let commentImages = [
  { "comment" : "ytmsg1.jpeg",
  },
  { "comment" : "ytmsg2.png",
  },
  { "comment" : "ytmsg3.png",
  }
];

// articles i've read before
let articlesDatabase = [
  { "title" : "Against Black Inclusion in Facial Recognition",
    "link" : "https://digitaltalkingdrum.com/2017/08/15/against-black-inclusion-in-facial-recognition/",
    "date" : "August 15, 2017",
    "image" : "https://decolonizedtech.files.wordpress.com/2017/08/closed-circuit-twocameras-arp-750pix.jpg?w=750&#038;h=416&#038;crop=1",
    "author" : "Nabil Hassein",
    "desc" : 'Researchers have documented the frequent inability of facial recognition software to detect Black people’s faces due to programmers’ use of unrepresentative data to train machine learning models.',
  },
  { "title" : "The Era of Blind Faith in Big Data Must End",
    "link" : "https://www.ted.com/talks/cathy_o_neil_the_era_of_blind_faith_in_big_data_must_end?language=en",
    "date" : "April 2017",
    "image" : "https://s3.amazonaws.com/talkstar-photos/uploads/cc1dd9ad-abcf-4c05-8bda-05433f7c9a5d/CathyONeil_2017-embed.jpg",
    "author" : "Cathy O'Neil",
    // "desc" : 'Algorithms decide who gets a loan, who gets a job interview, who gets insurance and much more -- but they don'+"'t automatically make things fair. Mathematician and data scientist Cathy O'Neil coined a term for algorithms that are secret, important and harmful:" + '"weapons of math destruction." Learn more about the hidden agendas behind the formulas.',
    "desc" : 'Algorithms decide who gets a loan, who gets a job interview, who gets insurance and much more -- but they don' + "'t automatically make things fair. Mathematician and data scientist Cathy O'Neil coined a term for algorithms...",

  },
  { "title" : "How I'm Fighting Bias In Algorithms",
    "link" : "https://www.ted.com/talks/joy_buolamwini_how_i_m_fighting_bias_in_algorithms/transcript?language=en",
    "date" : "November 2016",
    "image": "https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/16a96c4c-66b7-423d-8c82-1b081f8a2ace/JoyBuolamwini_2016X-embed.jpg?c=1050%2C550&w=1050",
    "author" : "Joy Buolamwini",
    // "desc" : 'MIT grad student Joy Buolamwini was working with facial analysis software when she noticed a problem: the software didn' + "'t detect her face -- because the people who coded the algorithm hadn't taught it to identify a broad range of skin tones and facial structures. Now she's on a mission to fight bias in machine learning, a phenomenon she calls the "+ '"coded gaze." It' + "'s an eye-opening talk about the need for accountability in coding ... as algorithms take over more and more aspects of our lives.",
    "desc" : 'MIT grad student Joy Buolamwini was working with facial analysis software when she noticed a problem: the software didn' + "'t detect her face -- because the people who coded the algorithm hadn't taught it to identify a broad range of skin tones and facial structures...",
  }
];

// for (var i = 0; i < videosDatabase.length; i++) {
//   createVideoSections(videosDatabase[i]);
// }
for (var i = 0; i < commentImages.length; i++) {
  createComments(commentImages[i]);
}
for (var i = 0; i < articlesDatabase.length; i++) {
  createArticles(articlesDatabase[i]);
}

//trying to json videos
// function createVideoSections(incomingJSON) {
//   /// Create whole content item div and set class
//   let newContentElement = document.createElement("DIV");
//   newContentElement.classList.add('contentItem');
//
//   /// Create HEADLINE h3, set class, set content
//   let newContentHeading = document.createElement("H3");
//   newContentHeading.classList.add('contentTitle');
//   newContentHeading.innerText = incomingJSON['title'];
//   /// Add the HEADLINE to the item
//   newContentElement.appendChild(newContentHeading);
//
//   let newContentVideo = document.createElement("video");
//   newContentVideo.src = incomingJSON['video'];
//   newContentElement.appendChild(newContentVideo);
//
//   /// Add the item to the page
//   contentGridElement.appendChild(newContentElement);
// }


function createComments(incomingJSON) {
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('commentSection');


  let newImage = document.createElement("IMG");
  // newImage.classList.add("footerImage");
  newImage.src = incomingJSON['comment'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGrid_Comments.appendChild(newContentElement);
}


function createArticles(incomingJSON) {

  let aTag = document.createElement("a");
  aTag.classList.add("aTag");
  aTag.href = incomingJSON['link'];


  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('articlesSection');
  // let headerImage= document.createElement("DIV");
  // headerImage.classList.add('headImage');
  /// Create & add header image
 let newImage = document.createElement("IMG");
 newImage.classList.add("headerImage");
 newImage.src = incomingJSON['image'];
 // headerImage.appendChild(newImage);
 newContentElement.appendChild(newImage);
 // newContentElement.appendChild(headerImage);


  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H4");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  //description
  let newContentDesc = document.createElement("P");
  newContentDesc.classList.add('contentDesc');
  newContentDesc.innerText = incomingJSON['desc'];
  newContentElement.appendChild(newContentDesc);


  let newContentAuthorDate = document.createElement("DIV");
  newContentAuthorDate.classList.add('authorDate');
  //author
  let newContentAuthor = document.createElement("H5");
  newContentAuthor.classList.add('authorName');
  newContentAuthor.innerText = incomingJSON['author'];
  // newContentElement.appendChild(newContentAuthor);
  newContentAuthorDate.appendChild(newContentAuthor);
  //date
  let newContentDate = document.createElement("P");
  newContentDate.classList.add('dateDate');
  newContentDate.innerText = incomingJSON['date'];
  // newContentElement.appendChild(newContentDate);
  newContentAuthorDate.appendChild(newContentDate);

  newContentElement.appendChild(newContentAuthorDate);

  //link -- put everything into an a-tag
  aTag.appendChild(newContentElement);

  /// Add the item to the page
  contentGrid_Articles.appendChild(aTag);
  // contentGrid_Articles.appendChild(newContentElement);
  //newContentElement.href = url_link;

}

//from https://codepen.io/viktorjs/pen/KQZYjo start
$(() => {
  let stickyTop = 0,
      scrollTarget = false;
  let timeline = $('.timeline__nav'),
      items = $('li', timeline),
      milestones = $('.timeline__section .milestone'),
      offsetTop = parseInt(timeline.css('top'));
  const TIMELINE_VALUES = {
    start: 190,
    step: 30
  };
  $(window).resize(function () {
    timeline.removeClass('fixed');
    stickyTop = timeline.offset().top - offsetTop;
    $(window).trigger('scroll');
  }).trigger('resize');
  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyTop) {
      timeline.addClass('fixed');
    } else {
      timeline.removeClass('fixed');
    }
  }).trigger('scroll');
  items.find('span').click(function () {
    let li = $(this).parent(),
        index = li.index(),
        milestone = milestones.eq(index);

    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index;
      let scrollTargetTop = milestone.offset().top - 80;
      $('html, body').animate({
        scrollTop: scrollTargetTop
      }, {
        duration: 400,
        complete: function complete() {
          scrollTarget = false;
        }
      });
    }
  });
  $(window).scroll(function () {
    let viewLine = $(window).scrollTop() + $(window).height() / 3,
        active = -1;

    if (scrollTarget === false) {
      milestones.each(function () {
        if ($(this).offset().top - viewLine > 0) {
          return false;
        }

        active++;
      });
    } else {
      active = scrollTarget;
    }

    timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');
    items.filter('.active').removeClass('active');
    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
});
//from https://codepen.io/viktorjs/pen/KQZYjo end
