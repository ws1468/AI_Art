var myFullpage = new fullpage('#fullpage', {
  //Navigation
  	menu: '#Menu',
  	lockAnchors: false,
    anchors:['top', 'nvidiaCanvas', 'aiArt', 'comments', 'moreInfo'],
  	navigation: true,
  	navigationPosition: 'right',
  	navigationTooltips: ['a thought', 'wow!!', 'hmm...', 'deeper thoughts', 'awareness', 'fun!'],
  	showActiveTooltip: true,
  	slidesNavigation: true,
  	slidesNavPosition: 'bottom',

  	//Scrolling
  	css3: true,
  	scrollingSpeed: 500,
  	autoScrolling: true,
  	fitToSection: true,
  	fitToSectionDelay: 1000,
  	scrollBar: false,
  	easing: 'easeInOutCubic',
  	easingcss3: 'ease',
  	loopBottom: false,
  	loopTop: false,
  	loopHorizontal: true,
  	continuousVertical: false,
  	continuousHorizontal: false,
  	scrollHorizontally: false,
  	interlockedSlides: false,
  	dragAndMove: false,
  	offsetSections: false,
  	resetSliders: false,
  	fadingEffect: false,
  	normalScrollElements: '#element1, .element2',
  	scrollOverflow: false,
  	scrollOverflowReset: false,
  	scrollOverflowOptions: null,
  	touchSensitivity: 15,
  	bigSectionsDestination: null,

  	//Accessibility
  	keyboardScrolling: true,
  	animateAnchor: true,
  	recordHistory: true,

  	//Design
  	controlArrows: true,
  	verticalCentered: true,
    //linear-gradient(to bottom right, red, yellow)
    //sectionsColor : ['#bdbdbd', '#adadad', '#bdbdbd', '#adadad', '#bdbdbd',],
    //sectionsColor : ['#fa758e', '#95c750', '#45b5ff', '#565264', '#fac337',],
    //
  	paddingTop: '3em',
  	paddingBottom: '10px',
  	fixedElements: '#header, .footer',
  	responsiveWidth: 0,
  	responsiveHeight: 0,
  	responsiveSlides: false,
  	parallax: false,
  	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  	dropEffect: false,
  	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
  	waterEffect: false,
  	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
  	cards: false,
  	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

  	//Custom selectors
  	sectionSelector: '.section',
  	slideSelector: '.slide',

  	lazyLoading: true,
});

let contentGrid_Articles = document.getElementById('contentGrid_Articles');

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

for (var i = 0; i < articlesDatabase.length; i++) {
  createArticles(articlesDatabase[i]);
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
  //
  // /// Add the item to the page
  contentGrid_Articles.appendChild(aTag);
  // contentGrid_Articles.appendChild(newContentElement);
}
