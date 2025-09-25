localStorage.setItem("tema", "dark");

sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30");

const tema = localStorage.getItem("tema");
const token = sessionStorage.getItem("token");

console.log(tema);
console.log(token);

sessionStorage.removeItem("token");

localStorage.clear();

let acessos = 14;
localStorage.setItem("acessos", String(acessos));

acessos = 20;
localStorage.setItem("acessos", String(acessos));

const acessosSalvos = Number(localStorage.getItem("acessos"));
console.log(acessosSalvos);

const primeiroAcesso = true;
localStorage.setItem("primeiroAcesso", String(true));

const primeiroAcessoSalvo = Boolean(localStorage.getItem("primeiroAcesso"));
console.log(primeiroAcessoSalvo);

const config = {
    aceitouCookies: true,
    tema: "dark",
    usuario: "Gabriel",
    acessos: 20
};

localStorage.setItem("config", JSON.stringify(config));

const json = JSON.parse(localStorage.getItem("config"));

console.log(json);

async function testeFetch() {

    const url = "http://34.60.163.228:8080/usuarios";

    // POST

    const responsePost = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ nome: "Mariana" })
    });
    console.log(responsePost);

    // PUT

    const responsePut = await fetch("http://34.60.163.228:8080/usuarios/c652", {
        method: "PUT",
        body: JSON.stringify({ nome: "Gabriel Braga", role: "ADM" })
    });
    console.log(responsePut);

    // DELETE
    
    const responseDel = await fetch("http://34.60.163.228:8080/usuarios/5f3d", {
        method: "DELETE"
    });
    console.log(responseDel);

    // GET

    const responseGet = await fetch(url);
    const jsonGet = await responseGet.json();
    console.log(jsonGet);

}

testeFetch();