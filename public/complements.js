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

const { styler, listen, value, tween } = popmotion;

const buttons = document.querySelectorAll('.buttons>button');

buttons.forEach(function (btn) {
  const btnStyler = styler(btn);

  const btnBorder = value({
    borderColor: '',
    borderWidth: 0
  }, ({ borderColor, borderWidth }) => btnStyler.set({
    boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
  }));

  listen(btn, 'mousedown touchstart').start((e) => {
      e.preventDefault();

      tween({
        from: { borderWidth: 0, borderColor: 'rgb(20, 215, 144, 1)' },
        to: { borderWidth: 30, borderColor: 'rgb(20, 215, 144, 0)' }
      }).start(btnBorder);
    });
  })

 