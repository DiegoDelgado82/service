async function getUsers() {
    let url = 'https://raw.githubusercontent.com/DiegoDelgado82/serviciotecnico/247d4ab2eeba039dde5cf5bb5e64ba25dfa7e782/st.json';
    try {
        let res = await fetch(url);
        return await res.json();
        
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let users = await getUsers();
    let html = '';
    
    users.forEach(user => {

        if(user.Marca==="ACER") //Pregunta por el valor que le pasamos por defecto
        {

        let htmlSegment = `<div class="user">
                            <h2>${user.Marca} </h2>
                            <h2>${user.CATEGORIA} </h2>
                            <h2>${user.WEB}</h2>
                            <div class="email"><a href="email:${user.CORREO}">${user.CORREO}</a></div>
                        </div>`;

        html += htmlSegment;
        }
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();