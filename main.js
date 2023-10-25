// magic 8 ball
let replySpan = document.getElementById("reply");

document.getElementById("btn").addEventListener("click", BtnClicked);

function BtnClicked() {
  let output = document.getElementById("fname").value.toLowerCase();

  if (output === "does magic 8 ball actually work?") {
    replySpan.innerHTML = `<p class="advice">How Dare You Doubt Me!</p>`;
  } else if (output === "is Javascript awesome") {
    replySpan.innerHTML = `<p class="advice">Of Course!</p>`;
  } else if (output === "") {
    replySpan.innerHTML = `<p class="advice">Please ask a question...</p>`;
  } else {
    let num = Math.random();

    if (num < 0.2) {
      replySpan.innerHTML = `<p class="advice">Without a doubt.</p>`;
    } else if (num < 0.4) {
      replySpan.innerHTML = `<p class="advice">As I see it, yes.</p>`;
    } else if (num < 0.6) {
      replySpan.innerHTML = `<p class="advice">Concentrate and ask again.</p>`;
    } else if (num < 0.8) {
      replySpan.innerHTML = `<p class "advice">Don't Count On It.</p>`;
    } else {
      replySpan.innerHTML = `<p class="advice">Outlook...Not so good.</p>`;
    }
  }
}

// function BtnClicked() {
//   let character = document.getElementById("charcter").value.toLowerCase();
//   let name = document.getElementById("name").value.toLowerCase();
//   let place = document.getElementById("place").value.toLowerCase();
//   let father = document.getElementById("father").value.toLowerCase();

//   // Check if answer is correct
//   if (character === "Po") {
//     document.getElementById("charcter").innerHTML = "Correct";
//   } else {
//     document.getElementById("charcter").innerHTML = Incorrect;
//   }

//   if (name === "Oogway") {
//     document.getElementById("name").innerHTML = "Correct";
//   } else {
//     document.getElementById("name").innerHTML = Incorrect;
//   }

//   if (place === "China") {
//     document.getElementById("place").innerHTML = "Correct";
//   } else {
//     document.getElementById("place").innerHTML = Incorrect;
//   }

//   if (father === "Mr.Ping") {
//     document.getElementById("father").innerHTML = "Correct";
//   } else {
//     document.getElementById("father").innerHTML = Incorrect;
//   }
// }
