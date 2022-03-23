const notRegistered = document.querySelector(".not-registered");

const getRegistrationData = async function () {
    const request = await fetch("registrations.json");
    const data = await request.json();
    displayContactList(data);
};

const displayContactList = function (data) {
    for (let student of data) {
        if (student.registered === "no") {
            let unregisteredStudent = document.createElement("li");
            unregisteredStudent.innerText = student.name;
            notRegistered.append(unregisteredStudent);
        }
    }
};

getRegistrationData();