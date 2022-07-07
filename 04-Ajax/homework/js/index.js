(function () {
    /**variables requeridas */
    var imgSearch = $('#img-searching');
    /**funciones */
    /**ver amigos */
    function verAmigos() {
        $.get('http://192.168.0.20:5000/amigos', data => {
            let lista = $('#lista').empty();
            data.forEach(friend => {
                let amigo = `<li>${friend.id}.- ${friend.name}, Edad: ${friend.age}, E-mail: ${friend.email}</li>`;
                lista.append(amigo);
            });
        });
    };
    /**buscar amigos */
    function buscarAmigo() {
        let idFriend = parseInt($('#input-search').val());
        let articleAmigo = $('#amigo').empty();
        $('#alerta').empty();
        //console.log(idFriend);
        if (idFriend !== '' && typeof (idFriend) === 'number' && !isNaN(idFriend)) {
            $.get(`http://192.168.0.20:5000/amigos/${idFriend}`, (friend) => {
                let amigo = `
                    <picture>
                        <img src="img/default.png" alt="">
                    </picture>
                    <div>
                        <h3>${friend.name}</h3>
                        <p>Edad: ${friend.age}</p>
                        <p>E-mail: ${friend.email}</p>
                    </div>
                    `;
                articleAmigo.append(amigo);
            }).fail((data) => {
                console.log(data);
                let alerta = `<h4>${data.responseJSON.message}</h4>`;
                $('#alerta').append(alerta).addClass('alerta').addClass('danger');
            });
            //articleAmigo.append(alerta);
        } else {
            let alerta = `<h4>Dato ingresado no valido, solo introduce el indice de tu amigo</h4>`
            $('#alerta').append(alerta).addClass('alerta').addClass('danger');
        }
        $('#input-search').val('');
    }
    /**eliminar amigos */
    function eliminarAmigo() {
         let idFriend = parseInt($('#input-delete').val());
         let mensajeFinal = $('#message').empty();
         if (idFriend !== '' && typeof (idFriend) === 'number' && !isNaN(idFriend)) {
            $.ajax({
                type: "delete",
                url: `http://192.168.0.20:5000/amigos/${idFriend}`,
                success: response => {
                    let alerta = `<h4 class = "alerta succes">Amigo Eliminado correctamente</h4>`
                    mensajeFinal.append(alerta);
                    verAmigos();
                }
            });
            $('#input-search').val('');
         }else{
            let alerta = `<h4 class = "alerta danger">Dato ingresado no valido, solo introduce el indice de tu amigo</h4>`
            mensajeFinal.append(alerta);
         }
    }
    /**ocultar una imagen */
    function ocultarImagen(img) {
        img.addClass('oculto');
    }
    /**Botones */
    $('#see-friend').click(verAmigos);
    $('#search-firend').click(buscarAmigo);
    $('#delete-friend').click(eliminarAmigo);
    /**auto ejecucion al iniciar la pagina*/
    ocultarImagen(imgSearch);
    verAmigos();
})();