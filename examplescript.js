// Submit answers and store them in localStorage
function submitAnswers() {
    const answer1 = document.getElementById("answer1").value;
    const answer2 = document.getElementById("answer2").value;

    // Ensure answers are stored as an array of submissions
    let submissions = JSON.parse(localStorage.getItem("submissions")) || [];

    // Create a new submission object
    const newSubmission = {
        answer1: answer1,
        answer2: answer2,
        date: new Date().toLocaleString(),
    };

    // Store the new submission
    submissions.push(newSubmission);
    localStorage.setItem("submissions", JSON.stringify(submissions));

    alert("Answers submitted successfully!");

    // Clear input fields
    document.getElementById("answer1").value = "";
    document.getElementById("answer2").value = "";
}

// Clear all submissions
function clearAnswers() {
    localStorage.removeItem("submissions");
    alert("All answers cleared!");
}
