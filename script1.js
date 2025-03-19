// Function to generate a random verification code
function generateCode() {
    let code = Math.floor(100000 + Math.random() * 900000); // 6-digit random code
    document.getElementById("codeDisplay").innerText = "Your Code: " + code;
}

// Function to start voting
function startVoting() {
    document.getElementById("statusText").innerText = "Voting has started.";
    alert("Voting process has started!");
}

// Function to stop voting
function stopVoting() {
    document.getElementById("statusText").innerText = "Voting has stopped.";
    alert("Voting process has stopped!");
}

// Function to add a candidate
function addCandidate() {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let image = document.getElementById("image").files[0];
    
    if (name === "" || position === "" || !image) {
        alert("Please fill in all fields and select an image.");
        return;
    }
    
    let reader = new FileReader();
    reader.onload = function(event) {
        let candidateList = document.createElement("div");
        candidateList.classList.add("candidate");
        candidateList.innerHTML = `
            <img src="${event.target.result}" alt="Candidate Image" class="candidate-image">
            <h3>${name}</h3>
            <p>Position: ${position}</p>
        `;
        document.querySelector(".candidates").appendChild(candidateList);
    };
    reader.readAsDataURL(image);
    
    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("image").value = "";
}

// Event listeners for start and stop voting buttons
document.querySelector(".start-btn").addEventListener("click", startVoting);
document.querySelector(".stop-btn").addEventListener("click", stopVoting);
