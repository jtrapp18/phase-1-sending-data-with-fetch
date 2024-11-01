const submitData = (userName, userEmail) => {
    const docBody = document.querySelector("body");
    const newUser = {name: userName, email: userEmail};
    
    // method: "POST" is missing from the object below
    const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(newUser),
    };

    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        const newUserID = document.createElement("p");
        newUserID.textContent = object.id;
        docBody.append(newUserID);
    })
    .catch(function (error) {
        const errMsg = document.createElement("p");
        errMsg.textContent = error.message;
        docBody.append(errMsg);
    });
}