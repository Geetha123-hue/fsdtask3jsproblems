function isEligibleForJob(age, experience, qualification) {
    if (age >= 21 && age <= 55 && experience >= 2 && qualification.toLowerCase() === "bachelor's degree") {
        return "You are eligible for the job!";
    }
    return "You do not meet the job criteria.";
}

function checkJobEligibility() {
    let age = parseInt(document.getElementById("jobAge").value);
    let experience = parseInt(document.getElementById("jobExperience").value);
    let qualification = document.getElementById("jobQualification").value;

    document.getElementById("jobResult").innerText = isEligibleForJob(age, experience, qualification);
}
