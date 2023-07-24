Vue.component('dashboard-component', {
    template: `
        <div class="dashboard_content">
            <div class="first_Dash">
                <label class="label_logo"></label>
                <button @click="click_exit" class="login_logo"> {{Initial}}</button>
            </div>
            <div class="second_dash">
                <div class="div_labels_dash">
                    <label class="label_name">Olá, {{Name}}</label>
                    <label>Seja bem vindo a sua conta de hospedagem.</label>
                </div>
                <div class="div_video_dash">
                    <iframe class="ifrmae_el_div" src="//www.youtube.com/embed/vn2GtKEJ0hA" frameborder="0" allowfullscreen></iframe>
                </div>
                <label class="label_duvida_dash">
                    Caso tenha alguma dúvida,<span>visite nossa central de ajuda.</span>
                </label>
            </div>
        </div>
    `,
    data() {
        return {
            Initial: "J",
            Name: "João"
        };
    },
    methods: {
        click_exit(){
            let el_button = document.getElementsByClassName("login_logo")[0];
            if(el_button.getElementsByTagName("span").length > 0){
                el_button.getElementsByTagName("span")[0].remove();
            }else{
                let sair = `
                <span class="exit_span">Sair</span>
            `;
                el_button.innerHTML += sair;
                el_button.getElementsByTagName("span")[0].onclick = function () {
                    window.location.href = "index.html";
                }
            }
        }
    }
});

new Vue({
    el: '#container_dashboard'
});