const { createApp } = Vue
const { createVuetify } = Vuetify
const vuetify = createVuetify()
const app = createApp({

    
    data: () => ({
        show: false,
        FirstName:"",
        LastName:"",
        UserName:"",
        Password:"",
        Password2:"",
        Email:"",
        Num:"",
        post:"",

        nameRules: [
            v => !!v || 'Name required',
            ],

        userNameRules: [
            v => !!v || 'Name required',
		    v => (v && v.length >= 3) || 'User name must be at least 3 characters'
        ],

        pwdRules: [
            (v) => !!v || "Password required",
            (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
            (v) => /[$%^&*]/.test(v) || "Password must contain at least 1 special character ($, %, ^, &, or *)",
        ],

        emailRules: [
            v => !!v || 'E-mail is required',
            v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
            ],

        numRules: [
            (v) => !!v || "Mobile number required",
            (v) => (v && v.length == 10) || "Mobile number must be only 10 digits",
            (v) => /[0-9]/.test(v) || "Mobile number must be numeric",
            (v) => v.startsWith("04") || "Mobile number must start with 04",
        ],

        postRules: [
            (v) => !!v || "Postcode required",
            (v) => (v && v.length == 4) || "Postcode must be only 4 digits",
            (v) => /[0-9]/.test(v) || "Postcode must be numeric",
        ]

    })
})


app.use(vuetify)
.mount('#app')

