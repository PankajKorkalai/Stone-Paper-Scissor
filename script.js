let user = prompt("Choose any one (Stone, Paper, or Scissor)");
if (user === "") {
    document.write("Choose anyone");
} else {
    let cpui = Math.floor(Math.random() * 3);
    let cpu = ["Stone", "Paper", "Scissor"][cpui];

    const match = (user, cpu) => {
        if (user === "Stone" && cpu === "Paper") {
            return "cpu";
        } else if (user === "Paper" && cpu === "Scissor") {
            return "cpu";
        } else if (user === "Scissor" && cpu === "Stone") {
            return "cpu";
        } else if (user === "Paper" && cpu === "Stone") {
            return "user";
        } else if (user === "Stone" && cpu === "Scissor") {
            return "user";
        } else if (user === "Scissor" && cpu === "Paper") {
            return "user";
        } else if (user === cpu) {
            return "Match is tie...!";
        }
    };

    let result = match(user, cpu);
    document.write(`CPU : ${cpu} <br> User: ${user}<br>Winner : ${result}`);
}
