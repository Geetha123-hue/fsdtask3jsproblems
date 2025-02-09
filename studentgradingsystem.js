function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    return "F";
}

function getGrade() {
    let marks = parseInt(document.getElementById("marks").value);
    let attendance = parseInt(document.getElementById("attendance").value);
    document.getElementById("gradeResult").innerText = `Final Grade: ${calculateGrade(marks, attendance)}`;
}
