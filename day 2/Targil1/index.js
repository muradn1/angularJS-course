function clicked() {
    //console.log("name: " + document.getElementById("nameTxt").value);
    let name = document.getElementById("nameTxt").value;

    // console.log("age: " + document.getElementById("ageTxt").value);
    let age = document.getElementById("ageTxt").value;
    
    // console.log("password: " + document.getElementById("passwordTxt").value);
    let password = document.getElementById("passwordTxt").value;

    let genderRadios = document.getElementsByName('gender');
    let gender="";
    genderRadios.forEach(radio => {
        if (radio.checked) {
            // console.log("gender: " + radio.value);
            gender = radio.value;
        }
    })

    let kindSelection = document.getElementById("kind");
    let vehicleKind = kindSelection.options[kindSelection.selectedIndex].value;
    // console.log("vehicleKind: " + vehicleKind);

    let vehicle1 = document.getElementById('vehicle1');
    let haveBike = vehicle1.checked;
    // console.log("haveBike: " + haveBike);

    let person = new Person(name,age,password,gender,vehicleKind,haveBike);
    console.log(person.toString());

    let personc = new PersonC(name,age,password,gender,vehicleKind,haveBike);
    console.log(personc.toString());
}