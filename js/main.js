var mycars = [
  {
    carname: "car1",
    Model: 2015,
    img: "img/car1.jpg"
  },
  {
    carname: "car2",
    Model: 2014,
    img: "img/car2.jpg"
  },
  {
    carname: "car3",
    Model: 2010,
    img: "img/car3.jpg"
  },
  {
    carname: "car4",
    Model: 2018,
    img: "img/car4.jpg"
  },
  {
    carname: "car5",
    Model: 2017,
    img: "img/car5.jpg"
  },
];

var myinput = document.getElementById("myin");
var myimage = document.getElementById("myimg");
var myh1 = document.getElementById("h11");

  myinput.addEventListener('keypress', function enterKey(e) {
  	if(e.keyCode == 13) {
  		submit();
  	};
  }, false);

  function submit() {
    if (myinput.value == "") {
      alert ("Type a car1, car2")
  };
    for (var i = 0; i < mycars.length; i = i + 1) {
      if (myinput.value !== mycars[i].carname && myinput.value !== "") {
        myh1.textContent = "Your car is not available.";
          myimage.src = ""
      } else if (myinput.value.toLowerCase() === mycars[i].carname) {
      myimage.src = mycars[i].img;
      return;
    };
  };
 };
