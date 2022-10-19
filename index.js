function enviarEmail(){
    let params = {
        name:document.getElementById("nome").value,
        email:document.getElementById("email").value,
        message:document.getElementById("mensagem").value,
    };

    let servico = "service_1e3xyqs";
    let template = "template_emd17ab";

    emailjs.send(servico,template,params).then((res) =>{
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
        alert("Enviado com sucesso!");
    })
    .catch((err) => console.log(err));
};