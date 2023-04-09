// switching boards
const boardBtn = document.querySelectorAll(".nav-list");

boardBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btnParentLink = btn.parentElement.getAttribute("href").slice(1);

    const selectedBoardArea = document.getElementById(btnParentLink);

    const allBoardArea = document.querySelectorAll(".board");

    allBoardArea.forEach((board) => {
      board.classList.remove("open");
      selectedBoardArea.classList.add("open");
      console.log(board);
    });

    // console.log(boardArea);
  });
});

// teams api call
const teamBoard = document.getElementById("list-team");
const table = document.querySelector("table");
const loader = document.getElementById("none");
let teamAPI = [];

async function fetchTeamData() {
  if (teamAPI) {
    loader.style.display = "none";
    table.style.display = "block";
  } else {
    table.style.display = "none";
    loader.style.display = "flex";
  }
  try {
    const response = await fetch("teams.json");
    const data = await response.json();
    // do something with the team data
    teamAPI = data.team_members;
    distributeMemberToDisplay(teamAPI);
  } catch (error) {
    console.error("Error fetching team data:", error);
  }
}

function distributeMemberToDisplay(arr) {
  teamBoard.innerHTML = "";
  arr.forEach((tm, index) => {
    teamBoard.innerHTML += `
                    <tr>
                      <td>${index + 1}.</td>
                      <td><img src="${tm.image_url}" alt="Picture" /></td>
                      <td>${tm.name}</td>
                      <td>${tm.post}</td>
                      <td>${tm.location}</td>
                      <td>${tm.linkedin_url}</td>
                      <td><button class="red" onclick="delTeamMember(${index})">del</button></td>
                    </tr>
      `;
  });
}

function fetchDemoTeamData() {
  teamAPI.forEach((tm, index) => {
    teamBoard.innerHTML += `
                    <tr>
                      <td>${index + 1}.</td>
                      <td><img src="${tm.image_url}" alt="Picture" /></td>
                      <td>${tm.name}</td>
                      <td>${tm.post}</td>
                      <td>${tm.location}</td>
                      <td>${tm.linkedin_url}</td>
                      <td><button class="red">del</button></td>
                    </tr>
      `;
  });
}

function caller() {
  setTimeout(() => {
    fetchTeamData(); //json file
    // fetchDemoTeamData(); // normal
  }, 3000);
}

caller();

// preview selected image
let span4Img = document.getElementById("image");
let blobImageUrl;
const loadImage = function (event) {
  blobImageUrl = URL.createObjectURL(event.target.files[0]);
  span4Img.innerHTML = `<img src="${blobImageUrl}">`;
};

// open and close form
const newTeamFormBoard = document.querySelector(".add-team-form-board");

const toggleOpenForm = () => {
  newTeamFormBoard.classList.toggle("open");
};

// add new Member
function addTeamMember() {
  // const picture = document.getElementById("picture").file[0];
  const picture = blobImageUrl;
  const name = document.getElementById("name").value;
  const post = document.getElementById("post").value;
  const location = document.getElementById("location").value;
  const linkedin = document.getElementById("linkedin").value;

  const newMember = {
    name: name.value,
    post: post.value,
    location: location.value,
    linkedin_url: linkedin.value,
    image_url: picture,
  };

  teamAPI.push(newMember);

  caller();
  toggleOpenForm();

  // reset form
  blobImageUrl = "";
  name.value = "";
  post.value = "";
  location.value = "";
  linkedin.value = "";
  picture.value = "";

  loader.style.display = "none";
  span4Img.innerHTML = "Click here to add Picture";
}

// delete specify member using index
function delTeamMember(ind) {
  teamAPI = teamAPI.filter((team, index) => {
    if (index !== ind) {
      // console.log(index + "and" + ind);
      return team;
    }
  });
  distributeMemberToDisplay(teamAPI);
}
