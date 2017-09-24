var count1 = 0;
var count2 = 0;

var cats = [

  {
    "name": 'bobby',
    "img": "img/cat1.jpg",
    "clicks": 0
  },

  {
    "name": 'cat 2',
    "img": "img/cat2.jpg",
    "clicks": 0
  },

  {
    "name": 'cat 3',
    "img": "img/cat3.jpg",
    "clicks": 0
  },

  {
    "name": 'wow',
    "img": "img/cat4.jpg",
    "clicks": 0
  },

  {
    "name": 'cat 5',
    "img": "img/cat5.jpg",
    "clicks": 0
  },

  {
    "name": 'last cat',
    "img": "img/cat6.jpg",
    "clicks": 0
  },

];

// want to make a script that loads these into the dropdown menu
// Should have the following structure:
// <li><a href="#">cat2</a></li>

$(document).ready(function() {

  cats.forEach(function(element, index, theArray) {

    var newHTML = "<li><a id = \"" + index + "\" href='#'>" + element.name + "</a></li>";

    $("#homeSubmenu").append(newHTML);

  });

});

// count1 = count1 + 1;
// // change the string
// var newCountString = countString.replace("%", count1);
// // append it to the H2 tag
// $("#h2counter1").html(newCountString);
// });

// Display the chosen cat

var choice = 0;

$("body").click(function(event) {
  var choice2 = parseInt(event.target.id);

  if (choice2 < cats.length) {
    choice = choice2;
    $("#catName").html(cats[choice].name);
    $("#catPic").attr('src', cats[choice].img);
    clickUpdate();

    console.log(cats[choice].name);

    return false;

  }

});

//  count the right clicks

$("#catPic").click(function() {

  cats[choice].clicks += 1;

  // change the string
  clickUpdate();

});

var countString = "you clicked the cat % times!";

function clickUpdate() {

  var newCountString = countString.replace("%", cats[choice].clicks);
  // append it to the H2 tag
  $("#clickCounter").html(newCountString);

}

// // collapses the sidebar
// $(document).ready(function () {

// $('#sidebarCollapse').on('click', function () {
//   $('#sidebar').toggleClass('active');
// });

// });