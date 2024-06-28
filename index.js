let mainContent = document.getElementById("main-content")
mainContent.innerHTML=`
    <h1>BoredBot</h1>
    <div id="placeholder"class="placeholder">
        <h2 id="activity-name"></h2>
    </div>
    <button type="submit" id="get-API-button">GET</button>
    `
let getAPIButton = document.getElementById("get-API-button")
getAPIButton.addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response=>response.json())
        .then(data=>{
            // console.log(data)
            document.getElementById("activity-name").textContent = data.activity
        })
})

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("activity-name").textContent = data.activity
//     })