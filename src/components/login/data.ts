export const inputsData = [
    {
        id: "email",
        type: "email",
        name: "email",
        placeholder: "email",
        pattern: /\S+@\S+/,
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
