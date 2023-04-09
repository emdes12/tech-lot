// referencing inputs
const picture = document.querySelector("#picture");
const name = document.getElementById("name");
const post = document.getElementById("post");
const linkedin = document.getElementById("linkedin");

function addTeamMember() {
  // Create a storage reference
  const storage = getStorage();
  const storageRef = storageReff(
    storage,
    "path/TeamPicture/" + name.value + ".jpg"
  );
  const metadata = {
    contentType: picture.files[0].type,
  };

  // Upload the file to Firebase Storage
  uploadBytes(storageRef, picture.files[0], metadata)
    .then((snapshot) => {
      console.log("File uploaded successfully");

      // Get the download URL
      getDownloadURL(snapshot.ref)
        .then((downloadURL) => {
          console.log("Download URL:", downloadURL);

          set(databaseRef(database, "TeamMember/" + name.value), {
            name: name.value,
            post: post.value,
            location: location.value,
            linkedin_url: linkedin.value,
            image_url: downloadURL,
          })
            .then(() => {
              alert("team Created Successfully");
              toggleOpenForm();
              document.querySelector("#add-form").reset();
            })
            .catch((err) => {
              alert("unsuccessful, error" + err);
            });
        })
        .catch((error) => {
          console.error("Error getting download URL:", error);
        });
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
  // set(ref(database, "tea"));
}

// assign event to submit btb
document.getElementById("add-member").addEventListener("click", addTeamMember);
