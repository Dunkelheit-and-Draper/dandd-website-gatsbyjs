import React from "react"

export default class ContactForm extends React.Component  {
    state={
        firstName: '',
        email: ''
    }

    render(){ 
        return (
            <form action="https://getform.io/f/66f3d090-9ea7-47ab-94cf-47f67d31d56b" method="POST">
                <label>
                    First name
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Email
                    <input type="text" name="email" />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}
