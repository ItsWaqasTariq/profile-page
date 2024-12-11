const profile={
name:"Wicki",
age:"21",
hobbies:["self-learning","coding","gaming",'sleeping']
};
console.log(profile);

let isProfileVisible = true;

  const toggleProfileVisibility = () => {
    const profileCard = document.querySelector('.profile-card');
    isProfileVisible = !isProfileVisible;
    profileCard.style.display = isProfileVisible ? 'block' : 'none';
};

const toggleButton = document.getElementById('toggle-button1');
toggleButton.addEventListener('click', toggleProfileVisibility);

// profile name,age,hobbies display by DOM
const name1=document.getElementById("name1");
const age=document.getElementById("age1");
const hobbies=document.getElementById("hobbies1");
const agestatus=document.getElementById("age-status");

name1.textContent=profile.name;
age.textContent=profile.age;
// hobbies.textContent=profile.hobbies;
 // Display hobbies using a loop
 const hobbiesList = document.createElement("ul");
 profile.hobbies.forEach(hobby => {
   const listItem = document.createElement("li");
   listItem.textContent = hobby;
   hobbiesList.appendChild(listItem);
 });
 hobbies.appendChild(hobbiesList);

// Conditional statement: Display a message based on age
if (profile.age >= 18) {
    const ageMessage = document.createElement("p");
    ageMessage.textContent = "You are an adult.";
    agestatus.appendChild(ageMessage);
  } else {
    const ageMessage = document.createElement("p");
    ageMessage.textContent = "You are a minor.";
    agestatus.appendChild(ageMessage);
  }
