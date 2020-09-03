import React from "react"

export default class ContactForm extends React.Component {
  state = {
    firstName: "",
    email: "",
  }

  formError=[
    {
    key: "fill",
    innerErrors: 
    [
        {
            key : "name",
            errorCopies : [
                "Hola bcs997s2ksOLs2332, encantados de conocerte, ¿No es ese tu nombre?",
                "Hola tipo de incógnito, si no rellenas tu nombre no podremos dirigirnos a ti :(",
                "Bienvenido de nuevo BOT DE GOOGLE ANAlYTICS, si no eres tu rellena tu nombre :D"
            ]
        },
        {
            key : "email",
            errorCopies : [
                "No sabemos tu email así que llamaremos a McGyver",
                "No sabemos tu email así que nunca nos pondremos en contacto :(",
                "Sin tu email no somos nada",
                "Ese email es tímido o...???",
                "Si no nos das tu email nuestros caminos nunca se cruzarán :(",
            ]
        },
        {
            key: "budget",
            errorCopies: [
                "Si quieres tomarte un café con nosotros, también nos vale.",
                "Quieres un presupuesto, pero no sabes de qué. Podemos mandarte presupuestos de otros clientes ficticios mensualmente si lo prefieres.",
                "Es difícil decidirse, tambien puedes decirnos 'Otro'.",
            ] 
        },
        {
            key: "hour-rate",
            errorCopies: [
                "No te gusta hablar de pasta, lo entendemos.",
                "Estás indeciso? Bueno, podemos hablarlo más adelante.",
                "'No tengo ni idea de cuanto cuesta esto' a nosotros también nos pasa :)",
                "Broncano no ha diseñado este formulario, pero estaría bien saberlo.",
            ]
        },
        ]
    },
    {
        key: "send",
        innerErrors: [
            {
                key : "lost-info",
                errorCopies : [
                    "Algo ha fallado inesperadamente, qué vergüenza. Intentaremos recuperar el correo pero es probable que se haya perdido como lágrimas en la lluvia. Vuelve a intentarlo o grítale a la pantalla, como prefieras.",
                    "Oops. Se ha perdido toda la información. Y NOS CABREA CUANDO PASA. Pero la vida tiene estos vaivenes. Puedes mandarnos un email si lo prefieres a hey@dunkelheitdraper.com con el asundo VUESTRA WEB NO FUNCIONA y te responderemos cuanto antes. Tambien puedes contarnos todo lo que nos has contado y se ha perdido o volver a intentarlo. Como prefieras.",
                ]
            },
            {
                key : "nolost-info",
                errorCopies :[
                    "Parece que algo ha fallado a miles de kilómetros de distancia. Nos ponemos manos a la obra para resolverlo porque es inesperado (quien planea estas cosas, eh). Vuelve a intentarlo en unos momentos o haz una captura y mándanosla a hey@dunkelheitdraper.com.",
                ]
            }
        ]
    }
] 
  render() {
    return (
      <form
        action="https://getform.io/f/66f3d090-9ea7-47ab-94cf-47f67d31d56b"
        method="POST"
        className="contact-form"
      >
        <label>
          Nombre
          <input type="text" name="firstName" className="contact-form__first-name"/>
        </label>
        <label>
          Email
          <input type="text" name="email" className="contact-form__email"/>
        </label>
        <label>Venía yo aquí porque</label>
        <select name="reason" className="contact-form__reason">
          <option className="contact-form__reason__budget" value="value1">Quiero un presu para</option>
          <option value="value2">quiero ser nuestro partner in crime</option>
        </select>
        <label>Quiero un presu para</label>
        <select name="services" className="contact-form__reason__budget__services">
          <option value="services__web">una web</option>
          <option value="services__branding">branding</option>
          <option value="services__branding-voice">voz de marca</option>
          <option value="services__MVP">un MVP (app)</option>
          <option value="services__easy-web">una web muy sencilla</option>
          <option value="services__SocialMedia">gestión de redes sociales</option>
          <option value="services_SocialMedia-plantyt">Un plan de comunicación</option>
        </select>
        <label>Quiero ser partner in crime</label>
        <label>¿Cómo nos puedes ayudar?</label>
        <imput type="textarea" name="partner-in-crime" className="contact-form__reason__partner-in-crime" placeholder="cuéntanos que haces, que te gusta"/>
        <label>precio por hora</label>
        <select name="hour-rate" className="contact-form__reason__budget__hour-rate">
          <option value="hour-rate__price">20-20 €/h</option>
          <option value="hour-rate__talk">prefiero hablarlo</option>
        </select>
        <label>Cuéntanos un poco de tí</label>
        <imput type="textarea" name="project" className="contact-form__reason__project" placeholder="de tu proyecto"/>
        <imput type="textarea" name="about-client" className="contact-form__reason__project" placeholder="de ti"/ >

        <button type="submit">¡Pues ya estaría!</button>
        
      </form>
    )
  }
}
