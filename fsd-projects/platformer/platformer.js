$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 620, 220, 20, "#7ed957");
    createPlatform(500, 540, 220, 20, "#f4d35e");
    createPlatform(820, 470, 220, 20, "#ff9f1c");
    createPlatform(1080, 400, 220, 20, "#5ec8ff");
    createPlatform(1160, 350, 180, 20, "#b392f0");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 270, 580, 0.2, 0.7);
    createCollectable("steve", 610, 500, 0.2, 0.8);
    createCollectable("database", 930, 430, 0.2, 0.7);

    // TODO 4 - Create Cannons
    createCannon("left", 260, 2000);
    createCannon("right", 360, 1700);
    createCannon("top", 500, 1500);

    // TODO 5 - Make your level challenging
    // The platform layout and cannon placement create a playable but challenging path.

    // TODO 6 - Go Live
    // Grid disabled for final playthrough.


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
