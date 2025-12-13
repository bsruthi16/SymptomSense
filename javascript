let historyList = [];

function analyzeSymptoms() {
    let symptomSelect = document.getElementById("symptoms");
    let severity = document.getElementById("severity").value;
    let result = document.getElementById("result");
    let history = document.getElementById("history");

    let selectedSymptoms = [];
    for (let option of symptomSelect.options) {
        if (option.selected) {
            selectedSymptoms.push(option.value);
        }
    }

    if (selectedSymptoms.length === 0) {
        result.textContent = "Please select at least one symptom.";
        return;
    }

    let message = "Symptoms: " + selectedSymptoms.join(", ") +
                  " | Severity: " + severity;

    if (severity === "High") {
        message += ". Recommendation: Consult a doctor immediately.";
    } else if (severity === "Moderate") {
        message += ". Recommendation: Monitor symptoms and rest.";
    } else {
        message += ". Recommendation: Home care advised.";
    }

    result.textContent = message;

    historyList.push(message);
    history.innerHTML = "";

    historyList.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        history.appendChild(li);
    });
}
