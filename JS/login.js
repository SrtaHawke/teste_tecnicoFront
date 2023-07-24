Vue.component('login-component', {
    template: `
         <div class="content_login">
            <label class="label_logo"></label>
            <div class="div_login">
                <div class="label_div_login">
                    <label>Entre na sua Conta</label>
                    <label class="label_2_text">Para acessar, informe seu e-mail e senha</label>
                </div>
                <div class="container_email">
                    <label class="label_1_login">E-mail</label>
                    <label class="label_2_login">
                        <input v-model="email" autocapitalize="none" id="input_email" placeholder="Seu e-mail">
                    </label>
                </div>
                <div class="container_password">
                    <label class="label_1_login">Senha</label>
                    <label class="label_2_login">
                        <input v-model="password" type="password" id="input_password" placeholder="Sua senha">
                    </label>
                </div>
                <label class="label_recoverPassword">Esqueci minha senha</label>
                <button @click="continue_login" class="button_Login">FAZER LOGIN</button>
            </div>
            <label class="label_cadastro">Ainda não tem conta?  
                <span @click="click_cadastro" class="link_cadastro">Cadastre-se</span>
            </label>
            <div v-if="showErrorMessage" class="error_message">Usuário ou senha incorretos.</div>
        </div>
    `,
    data() {
        return {
            email: '',
            password: '',
            showErrorMessage: false,
        };
    },
    methods: {
        continue_login() {
            const email = this.email;
            const password = this.password;
            //Outras validações de login como request ou api, devem ser colocadas aqui
            if (email === "joao@example.com" && password === "admin123") {
                window.location.href = "dashboard.html";
            } else {
                this.showErrorMessage = true;
                setTimeout(() => {this.showErrorMessage = false; }, 4000);
            }
        },
        click_cadastro() {
            window.location.href = "cadastro.html";
        }
    }
});

new Vue({
    el: '#container_login'
});