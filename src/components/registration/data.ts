export const registerData = [
    {
        id: "fullName",
        type: "text",
        name: "fullName",
        placeholder: "Full Name",
        pattern: /^[a-zA-Z\\s]+$/,
    },
    {
        id: "email",
        type: "email",
        name: "email",
        placeholder: "email",
        pattern: /\S+@\S+/,
    },
    {
        id: "phone",
        type: "tel",
        name: "phone",
        placeholder: "Phone number",
        pattern: /^(\\+)?([0-9]){10,14}$/,
    },
    {
        id: "pass",
        type: "password",
        name: "password",
        minLength: 8,
        maxLength: 35,
        placeholder: "Password",
        pattern: /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]/,
    },
];
