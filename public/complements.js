const popmotion = require('popmotion');

document
  .querySelector(".request-complement")
  .addEventListener("click", function() {
    fetch("/complement")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".words").innerText = data.complement;
      })
      .catch(function(err) {
        console.error(err);
      });
  });

  document
  .querySelector(".request-insult")
  .addEventListener("click", function() {
    fetch("/insult")
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        document.querySelector(".words").innerText = data.insult;
      })
      .catch(function(err) {
        console.error(err);
      });
  });

const { styler, spring, listen, pointer, value } = popmotion;

const buttons = document.querySelectorAll('button');

buttons.forEach(function (btn) {
  const divStyler = styler(btn);
  const btnXY = value({ x: 0, y: 0 }, divStyler.set);
  listen(btn, 'mousedown touchstart')
    .start((e) => {
      e.preventDefault();
      pointer(btnXY.get()).start(btnXY);
    });
  
  listen(document, 'mouseup touchend')
    .start(() => {
      spring({
        from: btnXY.get(),
        velocity: btnXY.getVelocity(),
        to: { x: 0, y: 0 },
        stiffness: 200,
        // mass: 1,
        // damping: 10
      }).start(btnXY);
    });
  })

 