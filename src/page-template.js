const makeCard = (name, role, email, id, lastLine) => 
`       <div class="card m-2">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle">${role}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Employee ID: ${id}</li>
                    <li class="list-group-item">${lastLine}</li>
                </ul>
            </div>
        </div>`;

const makePage = (cards) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Team Profile</title>
</head>
<body class="row">
    <header class="col-12 bg-primary text-white text-center">
        <h2>My Team</h2>
    </header>
    <div class="d-flex col-12 justify-content-center flex-wrap m-2">
${cards}
    </div>
</body>
</html>`;

exports.generate = function(teamList) {
    let cards = "";
    teamList.forEach(member => {
        let lastLine = "";
        switch(member.getRole()) {
            case "Manager":
                lastLine = "Office Number: " + member.getRoomNumber();
                break;
            case "Engineer":
                lastLine = "Github: <a href=\"https://github.com/" + member.getGithub() + "\">" + member.getGithub() + "</a>";
                break;
            case "Intern":
                lastLine = "School: " + member.getSchool();
                break; 
        }
        cards += makeCard(member.getName(), member.getRole(), member.getEmail(), member.getId(), lastLine) + "\n";
    });
    return makePage(cards);
};