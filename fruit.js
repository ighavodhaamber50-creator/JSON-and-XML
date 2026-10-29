fetch('data.json')
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("list");

        data.items.forEach(item => {
            let li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    })
    .catch(error => console.error("Error loading JSON:", error));