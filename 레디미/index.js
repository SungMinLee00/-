const token = document.createElement("h");
const id = document.createElement("h");
const url = document.createElement("h");
const name = document.createElement("h");
const bio = document.createElement("h");
document.getElementById("btn_submit").addEventListener("click", submit);




function submit() {
   
    let user = {
        username: input_id.value,
        password: input_pw.value
    };
    fetch("http://3.37.140.20:5000/api/v1/account/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            token.textContent = data.access_token;
            id.textContent = data.user_id;
            url.textContent = data.profile_url;
            name.textContent = data.username;
            bio.textContent = data.bio;

            const Token = document.getElementById("p_access_token");
            Token.appendChild(token);

            const Id = document.getElementById("p_user_id");
            Id.appendChild(id);

            const Url = document.getElementById("img");
            Url.src = url.textContent;

            const Name = document.getElementById("p_username")
            Name.appendChild(name);

            const Bio = document.getElementById("p_bio");
            Bio.appendChild(bio);

            if (token.textContent == 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNywicHJvZmlsZV91cmwiOiJodHRwOi8vMy4zNy4xNDAuMjA6NTAwMC9pbWFnZS8yMTY0ZWQ2YS0zZTExLTQ3MmYtOWNiMC0zMWI0NDUyNjQzMmQucG5nIiwidXNlcm5hbWUiOiJhZG1pbiIsImJpbyI6ImFkbWluIn0.VDIEA2xxSLy64LdxKCBFaGO7s5N2vNspv0CUakUXAZ8') {
                location.href = "./pr/index.html"

                localStorage.setItem('userName', name.textContent); //이름 정보 넘기기
                localStorage.setItem('userImg', url.textContent); //프로필 사진 넘기기


            }



        }).catch(error => {
            console.log(error);
        })
}
