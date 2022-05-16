let addressList = document.getElementById('addressList')

fetch('http://localhost:3000/addressBook')
.then(res => res.json())
.then(data => {
  data.forEach((address) => {
    let addressItem = document.createElement('li');
    addressItem.innerHTML = `<p>${address.firstName}</p><p>${address.lastName}</p> <p>${address.email}</p>`
    addressList.appendChild(addressItem)
  })
})

document.getElementById('addBtn').addEventListener('click', (e) => {
  e.preventDefault()

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;

  let user = {
      firstName: firstName,
      lastName: lastName,
      email: email
  };

  fetch("http://localhost:3000/addressBook", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data => {

      if (data.message == "success") {
          console.log("Det funkar")
      } else {
          console.log("DET FUNKAR EJ");
      }
  });
})