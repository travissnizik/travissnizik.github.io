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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid(); // change so that it registers i screwed up the commit

    // TODO 2 - Create Platforms
    createPlatform(0, 550, 100, 20); // bottom left corner
    createPlatform(300, 430, 150, 20); // mid left
    createPlatform(600, 300, 200, 20); // mid right
    createPlatform(900, 200, 150, 20); // high platform
    createPlatform(1200, 100, 100, 20); // top right

    // TODO 3 - Add Collectables
    createCollectable("diamond", 350, 370); // near middle platform
    createCollectable("steve", 650, 270); // on higher platform
    createCollectable("max", 1250, 70); // near top platform

    // TODO 4 - Add Cannons
    createCannon("left", 500, 2000); // left side, firing right
    createCannon("top", 800, 1500); // top side, firing down
    createCannon("right", 1300, 2500); // right side, firing left

    // TODO 5 - Make your level challenging!
    // Ensure the level is playable, with accessible collectables, platforms at varying heights, and strategic cannons.

    // TODO 6 - Disable grid after building
    // toggleGrid(); // comment this out after building your level

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
