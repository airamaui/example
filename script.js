// Submit answers and send them to Google Sheets
function submitAnswers() {
    const answer1 = document.getElementById("answer1").value;
    const answer2 = document.getElementById("answer2").value;

    if (!answer1 || !answer2) {
        alert("Please fill in both answers.");
        return;
    }

    // Create a new submission object
    const newSubmission = {
        answer1: answer1,
        answer2: answer2,
        date: new Date().toLocaleString(),
    };

    // Send submission to Google Sheets via Web App
    fetch(https://airamaui.github.io/example/index.html)
    .then(response => response.json())
    .then(data => {
        alert("Answers submitted successfully!");
        // Clear input fields
        document.getElementById("answer1").value = "";
        document.getElementById("answer2").value = "";
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Error submitting answers.");
    });
}

// Clear all submissions (localStorage only)
function clearAnswers() {
    localStorage.removeItem("submissions");
    alert("Local submissions cleared!");
}
