    const countdown = document.getElementById("countdown");
    countdown.innerHTML = "countdown: ";
    const start = document.getElementById("start");
    
    var blocks = document.getElementsByClassName("block");
    for(var i = 0; i < blocks.length; i++) {
    blocks[i].disabled = true;};

    const arrow = document.createElement("img");
    arrow.src = "images/arrowdown.svg";

    //import digitText_1 from 'nvwm.json' assert {type: 'json'};
    //const digitText = JSON.parse(digitText_1);

    const levels = { "Level4": {
      "itemtest": 6,
      "item1": 472,
      "item2": 263,
      "item3": 7652,
      "item4": 4781,
      "item5": 84724,
      "item6": 74357
    }, "level5": {
      "item1": 61458,
      "item2": 837542,
      "item3": 675247,
      "item4": 235263,
      "item5": 672581,
      "item6": 126428
    }, "level6": {
      "item1": 3658478,
      "item2": 2418326,
      "item3": 3846826,
      "item4": 4712842,
      "item5": 62353182,
      "item6": 35846764
    }};

    function level4(){ //level4 function
      arrowParent = document.getElementById(levels.Level4.itemtest);
      arrowParent.appendChild(arrow);

      
    };
    
    start.addEventListener("click", function(startfn){
      start.disabled = true;
      const startingSeconds = 5;
      let seconds = startingSeconds;
      setInterval(countdownFn, 1000);
      function countdownFn(){
        if (seconds >= 0)
        {
          countdown.innerHTML = `countdown: ${seconds}`;
          seconds--;
        } else {
          countdown.innerHTML = "countdown: ";
          level4();
        }
      }
    });
