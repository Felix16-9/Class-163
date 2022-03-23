AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if (
          e.key ==="ArrowUp"||
          e.key ==="ArrowDown"||
          e.key ==="ArrowLeft"||
          e.key ==="ArrowRight"

        ){
          var Entity=document.querySelector("#sound2")
          Entity.components.sound.playSound()
        }


      });
    },
  });


  