document.addEventListener("DOMContentLoaded", async () => {

    let respuesta_API = await axios.get("https://randomuser.me/api/");
    
    const usuario = respuesta_API.data.results[0];
    console.log(usuario);

    // ENCABEZADO 
    document.getElementById("titulo_persona").textContent = usuario.name.title;
    document.getElementById("primer_nombre").textContent = usuario.name.first;
    document.getElementById("apellido").textContent = usuario.name.last;
    document.getElementById("foto_usuario").src = usuario.picture.large;

    // CONTACTO 
    document.getElementById("correo_electronico").textContent = usuario.email;
    document.getElementById("telefono_fijo").textContent = usuario.phone;
    document.getElementById("telefono_celular").textContent = usuario.cell;

    // PERSONAL 
    document.getElementById("genero").textContent = usuario.gender;
    document.getElementById("edad").textContent = usuario.dob.age;
    
    // Recorte de la fecha
    document.getElementById("fecha_nacimiento").textContent = usuario.dob.date.split('T')[0];
    document.getElementById("nacionalidad").textContent = usuario.nat;

    // UBICACIÓN
    document.getElementById("nombre_calle").textContent = usuario.location.street.name;
    document.getElementById("numero_calle").textContent = usuario.location.street.number;
    document.getElementById("ciudad").textContent = usuario.location.city;
    document.getElementById("estado").textContent = usuario.location.state;
    document.getElementById("pais").textContent = usuario.location.country;
    document.getElementById("codigo_postal").textContent = usuario.location.postcode;
    document.getElementById("latitud").textContent = usuario.location.coordinates.latitude;
    document.getElementById("longitud").textContent = usuario.location.coordinates.longitude;
    document.getElementById("zona_horaria_desc").textContent = usuario.location.timezone.description;
    document.getElementById("zona_horaria_diferencia").textContent = usuario.location.timezone.offset;

    // CUENTA Y SEGURIDAD
    document.getElementById("nombre_usuario").textContent = usuario.login.username;
    document.getElementById("nombre_documento").textContent = usuario.id.name || "N/A";
    document.getElementById("numero_documento").textContent = usuario.id.value || "N/A";
    document.getElementById("antiguedad_registro").textContent = usuario.registered.age;
    document.getElementById("fecha_registro").textContent = usuario.registered.date.split('T')[0];
    document.getElementById("identificador_unico").textContent = usuario.login.uuid;
    document.getElementById("contrasena").textContent = usuario.login.password;
    document.getElementById("semilla_criptografica").textContent = usuario.login.salt;
    document.getElementById("md5").textContent = usuario.login.md5;
    document.getElementById("sha1").textContent = usuario.login.sha1;
    document.getElementById("sha256").textContent = usuario.login.sha256;
    
});
function abrirMapa() {
    const lat = document.getElementById("latitud").textContent.trim();
    const long = document.getElementById("longitud").textContent.trim();

    if(lat && long) {
        window.open(`https://www.google.com/maps?q=${lat},${long}`, "_blank");
    }else {
        Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error...",
        text: "No se pudo abrir el mapa.",
        });
    }
}
