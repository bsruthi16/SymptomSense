<!DOCTYPE html>
<html>
<head>
    <title>Symptom Sense</title>
</head>
<body>

<script>
    // Change background
    document.body.style.backgroundColor = "#f4f8fb";
    document.body.style.fontFamily = "Arial";

    // Create heading
    let heading = document.createElement("h1");
    heading.innerText = "Symptom Sense";
    heading.style.textAlign = "center";
    document.body.appendChild(heading);

    // Create container
    let box = document.createElement("div");
    box.style.width = "350px";
    box.style.margin = "auto";
    box.style.backgroundColor = "white";
    box.style.padding = "20px";
    box.style.borderRadius = "10px";
    document.body.appendChild(box);

    // Name input
    let name = document.createElement("input");
    name.placeholder = "Enter your name";
    name.style.width = "100%";
    name.style.marginBottom = "10px";
    box.appendChild(name);

    // Age input
    let age = document.createElement("input");
    age.placeholder = "Enter age";
    age.style.width = "100%";
    age.style.marginBottom = "10px";
    box.appendChild(age);

    // Button
    let btn = document.createElement("button");
    btn.innerText = "Analyze Symptoms";
    btn.style.width = "100%";
    btn.style.padding = "10px";
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    btn.style.border = "none";
    box.appendChild(btn);
</script>

</body>
</html>

