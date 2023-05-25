const baseUrl = "https://gateway.marvel.com:443/v1/public";
const publicApiKey = "6b9c552c35c55de0a13b6d4c1013db3d";
const privateApiKey = "0d29bd1bd0cacefa66ba964c8b5b23391b61345d";


function generateHash(publicKey, privateKey) {
    const input = "1" + privateKey + publicKey;
    const hash = CryptoJS.MD5(input).toString();
    return hash;
}

const hash = generateHash(publicApiKey, privateApiKey);

getAllCharacters();

function getAllCharacters() {
    axios.get(`${baseUrl}/events/29/characters?ts=1&apikey=${publicApiKey}&hash=${hash}&limit=58`)
        .then(response => {
            var res = response.data.data.results;
            console.log(response.data.data.results);
            var index = 0;
            res.forEach(element => {
                var name = res[index].name;
                var description = (res[index].description).substring(0, 100);
                if (description === "") {
                    description = `${name} is a member of the Avengers and a prominent superhero in the Marvel universe. They are known for their exceptional skills, powers, and heroic qualities. ${name} plays a crucial role in fighting against villains and defending the innocent. With a strong sense of justice and unwavering determination, ${name} stands as a symbol of hope and bravery.`.substring(0, 100);
                }
                if (name != "Thanos") {
                    document.getElementById("Avengers").innerHTML += `<div class="card d-flex flex-column align-items-center Avengers-card" style="width: 18rem;">
                <img class="card-img-top Avengers-cardImage" src="${res[index].thumbnail.path}.${res[index].thumbnail.extension}" alt="Card image cap" height="250px" width="100px">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                </div>
            </div>`;

                }
                index++;
            });

        })
        .catch(error => {
            console.error(error);
        });
}


