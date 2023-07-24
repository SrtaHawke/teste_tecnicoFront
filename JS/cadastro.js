Vue.component('cadastro-component', {
    template: `
        <div class="cadatro_content">
            <div class="label_div_cadastro">
                <label class="label_logo_cadastro"></label>
                <label class="label_text">
                    Você está muito próximo de mudar a forma de
                    <span>hospedar seu site</span>
                </label>
            </div>
            <div class="div_planos">
                <label>Escolha o seu plano</label>
                <div class="hospedagem_options">
                    <div id="type_1" class="hospedagem_1">
                        <div class="first_div">
                            <label class="title">Hospedagem 1</label>
                            <label class="preco">Grátis</label>
                            <label class="text">Você não paga nada para usar<br>Sem taxa de setup</label>
                        </div>
                        <div class="second_div">
                            <label>Ideal para quem está começando</label>
                        </div>
                        <div class="thirt_div">
                        <button @click="continue_cadastro('type_1')" class="button_choose_plano">ESCOLHER ESTE PLANO</button>
                        <div class="type_site">
                            <label class="title_type_site">
                                Seu site em servidores<span>no Estados Unidos</span>
                            </label>
                            <div class="box_type_site">
                                <label>
                                    <span class="icon_v_type_site"></span> 
                                    <label class="text_intern">{{datacenter}} americanos;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span> 
                                    <label class="text_intern">{{type_rede}}</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">1 {{quantidade_user}};</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                     <label class="text_intern">1 {{quantidade_email}};</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">1&nbsp;<span class="sub_cadastro"> subdomínio </span>&nbsp;gratuito.</label>
                                </label>
                            </div>
                            <div class="suporte_cadastro">
                                <label>{{suporte}}</label>
                            </div>
                            <div class="box_aplicativos">
                                <label class="title_app">Aplicativos disponíveis:</label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Wordpress;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Drupal;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">entre outros...</label>
                                </label>
                            </div>
                            <div class="box_beneficios">
                                <label class="title_beneficios">
                                    Você ainda tem
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Webmail RoundCube;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">AntiSpam;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Painel de gerenciamento de DNS;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Painel de controle web;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Configurações de PHP personalizáveis;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Certificado SSl Grátis;</label>
                                </label>
                                <label>
                                    <span class="icon_v_type_site"></span>
                                    <label class="text_intern">Transferência Ilimitada;</label>
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div id="type_2" class="hospedagem_2">
                        <div class="first_div">
                            <label class="title">Hospedagem 2</label>
                            <label class="preco">
                                R$<span class="preco_span">499</span>/mês
                            </label>
                            <label class="text">Cobrado Mensalmente<br>Sem taxa de setup</label>
                        </div>
                        <div class="second_div">
                            <label>Ideal para sites com mais de 30K de visitas</label>
                        </div>
                        <div class="thirt_div">
                            <button @click="continue_cadastro('type_2')" class="button_choose_plano">ESCOLHER ESTE PLANO</button>
                            <div class="type_site">
                                <label class="title_type_site">
                                    Seu site em servidores<span>no Brasil</span>
                                </label>
                                <div class="box_type_site">
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">{{datacenter}} de São Paulo;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span> 
                                        <label class="text_intern">{{type_rede}}</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">10 {{quantidade_user}};</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">30 {{quantidade_email}};</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">
                                            10&nbsp;<span class="sub_cadastro">subdomínio</span>&nbsp;gratuito.
                                        </label>
                                    </label>
                                </div>
                                <div class="suporte_cadastro">
                                    <label>{{suporte}}</label>
                                </div>
                                <div class="box_aplicativos">
                                    <label class="title_app">Aplicativos disponíveis:</label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Wordpress;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Drupal;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">entre outros...</label>
                                    </label>
                                </div>
                                <div class="migracao_cadastro">
                                    <label class="title_migração">Migração Gratuita:</label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">{{migracao}}</label>
                                    </label>
                                </div>
                                <div class="box_beneficios">
                                    <label class="title_beneficios">
                                        Você ainda tem
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Webmail RoundCube;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">AntiSpam;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Painel de gerenciamento de DNS;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Painel de controle web;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Configurações de PHP personalizáveis;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Certificado SSl Grátis;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Transferência Ilimitada;</label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="type_3" class="hospedagem_3">
                        <div class="first_div">
                            <label class="title">Hospedagem 3</label>
                            <label class="preco">
                                R$<span class="preco_span">999</span>/mês
                            </label>
                            <label class="text">Cobrado mensalmente<br>Sem taxa de setup</label>
                        </div>
                        <div class="second_div">
                            <label>Ideal para sites com mais de 60K de visitas</label>
                        </div>
                        <div class="thirt_div">
                            <button @click="continue_cadastro('type_3')" class="button_choose_plano">ESCOLHER ESTE PLANO</button>
                            <div class="type_site">
                                <label class="title_type_site">
                                    Seu site em servidores<span>no Brasil</span>
                                </label>
                                <div class="box_type_site">
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">{{datacenter}} de São Paulo;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">{{type_rede}}</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                         <label class="text_intern">
                                            Ilimitados&nbsp;{{quantidade_user}};
                                        </label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">
                                            Ilimitadas&nbsp;{{quantidade_email}};
                                        </label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">
                                            50&nbsp;<span class="sub_cadastro">subdomínio</span>&nbsp;gratuito.
                                        </label>
                                    </label>
                                </div>
                                <div class="suporte_cadastro">
                                    <label>{{suporte}}</label>
                                </div>
                                <div class="box_aplicativos">
                                    <label class="title_app">Aplicativos disponíveis:</label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Wordpress;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Drupal;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">entre outros...</label>
                                    </label>
                                </div>
                                <div class="migracao_cadastro">
                                        <label class="title_migração">Migração Gratuita:</label>
                                        <label>
                                            <span class="icon_v_type_site"></span>
                                            <label class="text_intern">{{migracao}}</label>
                                        </label>
                                    </div>
                                    <div class="box_beneficios">
                                    <label class="title_beneficios">
                                        Você ainda tem
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Webmail RoundCube;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">AntiSpam;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Painel de gerenciamento de DNS;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Painel de controle web;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Configurações de PHP personalizáveis;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Certificado SSl Grátis;</label>
                                    </label>
                                    <label>
                                        <span class="icon_v_type_site"></span>
                                        <label class="text_intern">Transferência Ilimitada;</label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="maisusado">MAIS USADO</div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            datacenter: "Servidores em nossos data center",
            type_rede: "ASP, ASP.NET 2.0/3.0/3.5/ E 4.0/4.5,4.5.1/4.5.2 (medium trust) ou PHP 5.5, 5.4, 5.5, 5.6, 7.0;",
            quantidade_user: "usuários de FTP para upload e download",
            quantidade_email: "contas de e-mails profissionais",
            suporte: "Suporte 24 horas, 7 dias por semana grátis;",
            migracao: "Migramos todos os seus sites para nossos servidores;"
        };
    },
    methods: {
        continue_cadastro(type) {
            // const plano_click = document.getElementById(type);
            // const contentCadastro = document.getElementsByClassName("cadatro_content")[0];
            // document.getElementsByClassName("div_planos")[0].remove();
            // console.log(plano_click.innerText)
            // const contains = `
            //     <div class="div_cadastro_contain">
            //         <div class="house_cadastro"></div>
            //         <div class="house_planoChoose">
            //             ` + plano_click.innerText + `
            //         </div>
            //     </div>
            // `;
            // console.log(contains)
            // contentCadastro.innerHTML += contains;
            //Lógica para adicionar tela de cadastro
        }
    }
});

new Vue({
    el: '#container_cadastro'
});