function submit(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("mail").value;

    console.log(name);

    let members = localStorage.getItem("contacts");

    let contacts;

    if(members == null){
        contacts =[];
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    else{
        contacts = JSON.parse(members);
    }
    console.log("contacts",contacts);

    contacts.push(
        {
            name: name,
            email: mail
        }
    )
    localStorage.setItem("contacts",JSON.stringify(contacts));
}