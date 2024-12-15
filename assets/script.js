const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "female3.png"
    }
];


const createMemberCard = (member) => {
    const { name, role, email, img } = member;
    return `                <div class="col">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-12 col-xl-4">
                            <img src="assets/img/${img}" class="img-fluid rounded-start img" alt="${name}">
                          </div>
                          <div class="col-12 col-xl-8 d-flex px-2 px-lg-3">
                            <div class="card-body d-flex flex-column justify-content-center">
                              <h5 class="name">${name}</h5>
                              <h6 class="role">${role}</h6>
                              <p class="card-text"><small class="tex email">${email}</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div> `

}

const addTeam = (dataArray) => {
    const containerTeamCards = document.getElementById('card-container');
    let card = '';
    for (let member of dataArray) {

        card += createMemberCard(member);
    }
    containerTeamCards.innerHTML = card;
}
addTeam(teamMembers);

