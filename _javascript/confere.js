function limpa_formulário_cep() {
                //Limpa valores do formulário de cep.
                document.getElementById('rua').value = ("");
                document.getElementById('bairro').value = ("");
                document.getElementById('cidade').value = ("");
                document.getElementById('uf').value = ("");
            }

            function meu_callback(conteudo) {
                if (!("erro" in conteudo)) {
                    //Atualiza os campos com os valores.
                    document.getElementById('rua').value = (conteudo.logradouro);
                    document.getElementById('bairro').value = (conteudo.bairro);
                    document.getElementById('cidade').value = (conteudo.localidade);
                    document.getElementById('uf').value = (conteudo.uf);
                } //end if.
                else {
                    //CEP não Encontrado.
                    limpa_formulário_cep();
                    alert("CEP não encontrado.");
                }
            }

            function pesquisacep(valor) {

                //Nova variável "cep" somente com dígitos.
                var cep = valor.replace(/\D/g, '');
                //Verifica se campo cep possui valor informado.
                if (cep != "") {

                    //Expressão regular para validar o CEP.
                    var validacep = /^[0-9]{8}$/;
                    //Valida o formato do CEP.
                    if (validacep.test(cep)) {

                        //Preenche os campos com "..." enquanto consulta webservice.
                        document.getElementById('rua').value = "...";
                        document.getElementById('bairro').value = "...";
                        document.getElementById('cidade').value = "...";
                        document.getElementById('uf').value = "...";
                        //Cria um elemento javascript.
                        var script = document.createElement('script');
                        //Sincroniza com o callback.
                        script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
                        //Insere script no documento e carrega o conteúdo.
                        document.body.appendChild(script);
                    } //end if.
                    else {
                        //cep é inválido.
                        limpa_formulário_cep();
                        alert("Formato de CEP inválido.");
                    }
                } //end if.
                else {
                    //cep sem valor, limpa formulário.
                    limpa_formulário_cep();
                }
            }
            ;
            
//===========MASCARAS=========
$(document).ready(function () {
                $('#cpf').mask('000.000.000-00');
                $('#data').mask('00/00/0000');
                $('#cep').mask('00000-000');
                $('#telefone').mask('(00)0000-0000');
                $('#celular').mask('(00)00000-0000');
            });
            
//=============CONFERE TAMANHO E CARACTERES DA SENHA=============
function conferesenha() {
                var senha = document.getElementById('senha1').value;
                var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
                if (senha.length < 6) {
                    $('#dicasenha2').html('A senha deve conter no minímo 6 digitos!');
                    document.getElementById('senha1').focus();
                } else if (!regex.exec(senha)) {
                    $('#dicasenha').html('A senha deve conter no mínimo 1 letra maiúscula, 1 números e 1 caractere especial!');
                    document.getElementById('senha1').focus();
                }
            }
            
//=================CONFERE SE AS SENHA SÃO IGUAIS============
function validarSenha() {
                senha = document.getElementById('senha1').value;
                senha2 = document.getElementById('senha2').value;
                if (senha != senha2) {
                    $('#erro-senha').html('Senhas diferentes!');
                    return false;
                } else {
                    $('#erro-senha').html('');
                    return true;
                }
            }
            
