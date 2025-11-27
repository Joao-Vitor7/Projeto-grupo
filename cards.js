function fechar_cartao() {
    document.getElementById('cartao').style.display = 'none';

}

//Norte

function card1() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Belém - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Belém (BEL) - Aeroporto Internacional Val-de-Cans.<br> 🏨 Hospedagem: (6 noites): 3 Noites em Belém: Hotel Boutique de luxo, 3 Noites na Ilha do Marajó: Pousada de Charme <br>🚌 Transfer: Traslados Privativos em Belém (Aeroporto/Hotel), Traslados na Ilha. <br> 🎟️ Passeios: Visita guiada ao Mercado Ver-o-Peso, Estação das Docas, e outros pontos históricos.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Norte/IlhadeMarajo.png" width="400" height="400">';
    document.getElementById('cartao_botao').innerHTML = 'Compra';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Bel%C3%A9m,+PA/@-1.3413321,-48.7587307,11z';
}

function card2() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Alter de Chão - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso.<br>🏨 Hospedagem: 4 Noites em Bangalô de Charme Integrado à Natureza, Alimentação: Café da Manhã Regional Gourmet.<br>🚌 Transfer: Privativo 4x4 (Aeroporto de Santarém - STM ↔ Pousada Ida e Volta).<br>🎟️ Passeios: Passeio de lancha rápida privativa para a Floresta Encantada (Igrapés) e Canal do Jari, Almoço Exclusivo na renomada Casa do Saulo, Trilha na Floresta Nacional.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORTE/alterdechao.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Alter+do+Ch%C3%A3o,+Santar%C3%A9m+-+PA/@-2.509483,-54.9628882,15z';

}

function card3() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Palmas - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Voo para o Aeroporto Internacional de Palmas.<br>🏨 Hospedagem: 3 Noites em Hotel Premium, com suíte superior, vista para a cidade/lago e infraestrutura completa.<br>🚌 Trasfer: Transfer Privativo, Aeroporto ↔ Hotel.<br>🎟️ Passeios: Excursão de lancha rápida e privativa no Lago de Palmas, Tour guiado e privativo pela Praça dos Girassóis, Palácio Araguaia e a arquitetura modernista da capital, Rota de um dia para a Serra do Lajeado ou Taquaruçu.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORTE/palmas.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Palmas,+TO/@-10.2600493,-48.4296365,12z';
}

function card4() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Manaus e Anavilhanas - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Manaus (MAO) - Aeroporto Internacional Eduardo Gomes.<br>🏨 Hospedagem (4 noites): 1 Noite em Hotel 3/4 estrelas em Manaus, 3 Noites em Lodge/Hotel de Selva bem avaliado e Pensão Completa.<br>🚌 Transfer: Traslado Compartilhado Confortável (Van/Barco rápido) entre Manaus e o Lodge de Selva em Anavilhanas (ida e volta).<br>🎟️ Passeios: City Tour em Manaus, Tour de Dia Inteiro, Atividades de Selva.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Norte/Anavilhanas.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Manaus,+AM/@-3.0446589,-60.0495061,12z';
}
function card5() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Monte Roraima - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Boa Vista.<br>🚌 Transfer: Traslado terrestre (Boa Vista ↔ Santa Elena de Uairén, Venezuela, e início/fim do trekking) incluso.<br>🎟️ Passeios: Todos os atrativos da Expedição Monte Roraima.<br>🏕️ Trekking e Logística: Expedição de trekking de 7 Dias/6 Noites com Tudo do Básico Inclusos (guia, alimentação, cozinheiro e equipamentos coletivos). Oferece Carregador Pessoal para até 15kg de itens, minimizando o esforço físico.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Norte/MonteRoraima.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Monte+Roraima/@5.1315564,-60.7688486,15z';
}
function card6() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Rio Branco - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Inclusão do Aéreo (est. R$ 1.300, variável). Voo para o Aeroporto Internacional de Rio Branco – Plácido de Castro (RBR).<br>🏨 Hospedagem: 3 Noites em Hotel 3 ou 4 estrelas com boa localização no Centro da cidade. Hospedagem confortável com serviços essenciais.<br>🚌 Transfer: Compartilhado Aeroporto ↔ Hotel.<br>🎟️ Passeios: Roteiro que inclui o Palácio Rio Branco, a travessia da Passarela Joaquim Macedo sobre o Rio Acre, o Mercado Velho e o Horto Florestal, Tour da Memória, Visita ao Museu da Borracha e à Casa do Seringueiro.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORTE/riobranco.jpeg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Rio+Branco,+AC/@-9.9863204,-67.9134988,12z';
}
function card7() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Parque Jalapão - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Palmas (PMW) - Aeroporto Brigadeiro Lysias Rodrigues.<br>🏨 Hospedagem (4 noites): 1 Noite em Pousada Simples em Palmas, 3 Noites em Pousadas simples/rústicas nas comunidades do Jalapão.<br>🚌 Transfer: Traslado terrestre em 4x4 de Palmas para o início da expedição e retorno.<br>🎟️ Passeios: Acesso aos Fervedouros, Dunas do Jalapão, Cachoeira da Velha e Cânion Sussuapara.<br>🚗 Expedição: Tour em 4x4 Compartilhado com grupo de 4 pessoas, pensão Completa durante a expedição no Jalapão.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Norte/pjalapao.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Parque+Estadual+do+Jalap%C3%A3o/@-10.2984889,-46.7564631,17z';
}
function card8() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Porto Velho - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Porto Velho (PVH) - Aeroporto Internacional Governador Jorge Teixeira.<br>🏨 Hospedagem: 2 noites em Hotel Econômico, Café da manhã incluso.<br>🚌 Transfer: Não Incluso.<br>🎟️ Passeio: Porto Velho combina Passeio de Barco no Rio Madeira, história no Complexo da Estrada de Ferro Madeira-Mamoré e na Usina Hidrelétrica de Santo Antônio, e cultura no Centro e Mercado Cultural.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORTE/portovelho.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Porto+Velho,+RO/@-8.7565367,-63.937309,12z';
}
function card9() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Macapá - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Inclusão do Aéreo, Voo para o Aeroporto Internacional de Macapá (MCP).<br>🏨 Hospedagem: 3 Noites em Pousada Simples ou Hotel Econômico, preferencialmente na região central ou perto da orla.<br>🚌 Trasfers: Traslados por conta própria.<br>🎟️ Passeios: Visita à Fortaleza de São José de Macapá, caminhada pela Orla de Macapá e pelo Trapiche Eliezer Levy para ver o pôr do sol no Rio Amazonas, Visita ao Monumento Marco Zero do Equador, Deslocamento até lá por app de transporte de ônibus.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORTE/macapa.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Macap%C3%A1,+AP/@0.1015795,-51.2598031,11z';
}

//Nordeste

function card10() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'João Pessoa - Pacote Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para João Pessoa (JPA).<br>🏨 Hospedagem: 4 noites em Resort ou Hotel 5 Estrelas na orla de Tambaba, Cabo Branco ou Bessa (com café da manhã).<br>🚌 Transfer: Privativo e Executivo com carro de luxo, entre o Aeroporto de João Pessoa (JPA) e o Hotel (ida e volta).<br>🎟️ Passeios: Passeio de Catamarã Privativo ao som do bolero de Ravel na Praia do Jacaré ao pôr do sol, City Tour Histórico Privativo guiado pelo Centro Histórico e para a Ponta do Seixas, Day Use em Praia Exclusiva ou Beach Club de alto padrão no Litoral Sul.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORDESTE/joaopessoa.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Jo%C3%A3o+Pessoa,+PB/@-7.1466015,-34.9639997,12z';
}
function card11() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Natal - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Voo direto para Natal (NAT), com bagagem despachada e assento conforto/Premium Economy.<br>🏨 Hospedagem: Duração: 4 noites, Resort 5 Estrelas All Inclusive ou Hotel Boutique de Luxo, All Inclusive Premium ou Café da Manhã Gourmet.<br>🚌 Transfer: Transfer Privativo (Aeroporto - Resort - Aeroporto) com carro executivo e serviço de bordo.<br>🎟️ Passeios: Passeio de Buggy Privativo no Litoral Norte, Mergulho/Snorkeling nos Parrachos de Maracajaú, Day Trip Privativo a Pipa com motorista particular e paradas em mirantes exclusivos.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Nordeste/NatalRN.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Natal,+RN/@-5.8015818,-35.3046091,12z';
}
function card12() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Fernando de Noronha - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso no valor.<br>🏨 Hospedagem: 4 Noites em Pousada de Alto Luxo, Regime de Alimentação: Café da Manhã Gourmet servido na suíte/bangalô.<br>🚌 Transfer: Privativo em veículo 4x4 (Aeroporto de Noronha - FEN ↔ Pousada Ida e Volta).<br>🎟️ Passeios: Passeio de barco privativo com observação de golfinhos, Batismo de Mergulho, Ilhatur privativo em 4x4, Jantar de Degustação em restaurante sofisticado.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORDESTE/fernandodenoronha.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Fernando+de+Noronha+-+PE/@-3.8429907,-32.4681625,13z';
}
function card13() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Porto de Galinhas - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Recife (REC) - Aeroporto Internacional de Guararapes.<br>🏨 Hospedagem: 4 noites, Pousada ou Hotel Simples em Porto de Galinhas, Café da manhã incluso.<br>🚌 Transfer: Compartilhado entre o Aeroporto de Recife (REC) e o Hotel (ida e volta).<br>🎟️ Passeios: Passeio de Jangada nas Piscinas Naturais da Vila, Passeio de Buggy Ponta a Ponta, Day Use com Transporte para a Praia dos Carneiros.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Nordeste/HotelportodegalinhasNORDESTE.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Porto+de+Galinhas/@-8.4933762,-35.0114199,15z';
}
function card14() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Teresina - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Teresina (THE).<br>🏨 Hospedagem: 4 noites em Hotel Categoria Intermediária (3 estrelas superior ou 4 estrelas) na região central ou perto da Av. Frei Serafim (com café da manhã incluso).<br>🚌 Transfer: Compartilhado ou Semi-Privativo entre o Aeroporto de Teresina (THE) e o Hotel (ida e volta).<br>🎟️ Passeios: City Tour Panorâmico pelo centro, incluindo o Encontro dos Rios, Visita ao Parque Ambiental Encontro dos Rios, Passeio ao Mercado Central de Teresina e ao Complexo Cultural da Ponte Estaiada.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORDESTE/teresina.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Teresina,+PI/@-5.0937344,-42.8234804,12z';
}
function card15() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Tamandaré - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Voo direto ou com 1 escala para Recife (REC) - Aeroporto Internacional de Guararapes, com bagagem de mão.<br>🏨 Hospedagem: 4 noites, Pousada/Hotel de Charme (3-4 estrelas) em Tamandaré ou em resort/flat com boa estrutura na Praia dos Carneiros, Café da Manhã Completo.<br>🚌 Transfer: Aluguel de Carro Econômico (4 diárias) para autonomia (ida/volta REC e deslocamento entre as praias).<br>🎟️ Passeios: Passeio de Catamarã ou Lancha (compartilhada) na Praia dos Carneiros, Day use no receptivo Bora Bora (Carneiros) ou similar com boa infraestrutura, além de dias livres na Praia de Tamandaré.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Nordeste/IgrejinhaPERNAMBUCO.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Praia+de+Tamandar%C3%A9+-+Tamandar%C3%A9,+PE,+55578-000/@-8.7568865,-35.1200081,14z';
}
function card16() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Recife - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta (com escala e bagagem de mão) para Recife (REC) - Aeroporto Internacional de Guararapes.<br>🏨 Hospedagem: 4 noites, Hostel ou Pousada/Hotel Simples (em Boa Viagem), Café da manhã incluso.<br>🚌 Transfer: Aplicativo de transporte (Uber/99) ou Ônibus Urbano do aeroporto para a hospedagem.<br>🎟️ Passeios: City Tour Autoguiado no Centro Histórico de Olinda e no Recife Antigo. Visita à Praia de Boa Viagem e praias vizinhas.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Nordeste/RECIFENORDESTE.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Recife,+PE/@-8.043303,-35.0166192,12z';
}
function card17() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Maragogi - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta (com escala e bagagem de mão) para Maceió (MCZ) ou Recife (REC).<br>🏨 Hospedagem: 4 noites, Hostel Quarto ou Pousada Simples em Maragogi, Café da manhã incluso.<br>🚌 Transfer: Ônibus de linha entre o aeroporto (MCZ ou REC) e Maragogi OU Transfer Compartilhado.<br>🎟️ Passeios: Passeio de Catamarã para as Galés, Visita às Praias Locais, utilizando transporte público ou moto-táxi.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Nordeste/MaragogiNORDESTE.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Maragogi,+AL,+57955-000/@-9.0166491,-35.2430018,14z';
}
function card18() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'São Luís - Pacote Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para São Luís (SLZ).<br>🏨 Hospedagem: 4 noites em Pousada Simples ou Hotel Econômico na região do Centro Histórico ou Litorânea (com café da manhã incluso).<br>🚌 Transfer: Compartilhado entre o Aeroporto de São Luís (SLZ) e o Hotel (ida e volta).<br>🎟️ Passeios: City Tour Histórico a pé pelo Centro Histórico, Visita ao Palácio dos Leões, Passeio pela Lagoa da Jansen.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/NORDESTE/saoluis.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/S%C3%A3o+Lu%C3%ADs,+MA/@-2.5606296,-44.3405242,12z';
}

//Centro-Oeste

function card19() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Nobres - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Incluso no valor total (Estimativa de R$ 1.200). Voo para Cuiabá.<br>🏨 Hospedagem: 4 Noites em Resort 5 Estrelas na região do Lago do Manso com regime de Pensão Completa.<br>🚌 Transfer: Transfer Privativo (Aeroporto de Cuiabá - CGB ↔ Resort/Nobres Ida e Volta) em veículo executivo.<br>🎟️ Passeios: Flutuação Premium no Rio Triste, Visita à Cachoeira Serra Azul, Observação de Araras na Lagoa das Araras, Passeio de Lancha Privativa no Lago do Manso.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/CENTRO/nobres.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Nobres,+MT,+78470-000/@-14.7188086,-56.3549666,14z';
}
function card20() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Caldas Novas - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Melhores voos com destino a Goiânia (GYN), incluídos no valor.<br>🏨 Hospedagem: 3 Noites em hotéis do complexo Rio Quente Resorts + Pensão Completa, conforme escolha.<br>🚌 Transfer: Privativo (Aeroporto de Goiânia - GYN ↔ Rio Quente Resorts Ida e Volta).<br>🎟️ Passeios: Acesso Ilimitado ao Parque das Fontes, Acesso ao Hot Park, Serviços de hotelaria premium e localização privilegiada no complexo de águas termais mais famoso do país.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Centro-Oeste/CaldasNovasGOIAS.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Caldas+Novas,+GO/@-17.726754,-48.6978722,12z';
}
function card21() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Goiânia - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso no valor.<br>🏨 Hospedagem: 3 Noites em Hotel/Boutique 5 Estrelas (Ex: K Hotel, WTC Stay & Hotel, ou similar), Regime de Alimentação: Café da Manhã Premium.<br>🚌 Transfer: Privativo em carro de luxo (Aeroporto de Goiânia - GYN ↔ Hotel Ida e Volta).<br>🎟️ Passeios: Tour privativo pela arquitetura Art Déco e Centro Cultural Oscar Niemeyer, Experiência em SPA/Bem-Estar no hotel.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/CENTRO/goiania.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Goi%C3%A2nia,+GO/@-16.6973575,-49.4696459,11z';
}
function card22() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Bonito - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas inclusas no valor total (estimativa de R$ 800).<br>🏨 Hospedagem: 3 Noites em Pousada de Charme + Café da Manhã.<br>🚌 Transfer: Van Compartilhada (Aeroporto de Campo Grande - CGR ↔ Bonito Ida e Volta).<br>🎟️ Passeios: Passeio de Flutuação, Trilha com Cachoeiras, Visita à Gruta do Lago Azul.';
}

function card23() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Pirenópolis - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso no pacote base.<br>🏨 Hospedagem,3 Noites em Pousada Charmosa/Boutique no Centro Histórico ou próxima (Padrão 321​/4 Estrelas) + Café da Manhã.<br>🚌 Transfer: Compartilhado (Aeroporto de Brasília - BSB ↔ Pirenópolis Ida e Volta).<br>🎟️ Passeios: City Tour Histórico, Passeio à Cachoeira do Rosário, Passeio à Cachoeira do Abad, Jantar na famosa Rua do Lazer.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/CENTRO/pirenopolis.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Bonito,+MS,+79290-000/@-21.123919,-56.5114437,14z';
}
function card24() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Alto Paraíso - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas inclusas no valor total (estimativa de R$ 700).<br>🏨 Hospedagem: 3 Noites em Pousada de Charme (Padrão 3/4 Estrelas em Alto Paraíso) + Café da Manhã.<br>🚌 Transfer: Van Compartilhada (Aeroporto de Brasília - BSB ↔ Alto Paraíso Ida e Volta).<br>🎟️ Passeios: Tour de 3 dias com guia e transporte para os atrativos principais, Saltos do Rio Preto no Parque Nacional, Cachoeiras Almécegas I e II, Vale da Lua.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Centro-Oeste/ChapadaDosVeadeirosGOIAS.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Alto+Para%C3%ADso+de+Goi%C3%A1s,+GO,+73770-000/@-14.1375031,-47.5374037,14z';
}
function card25() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Brasília - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso no valor (custo a ser adicionado).<br>🏨 Hospedagem: 3 Noites em Hotel 3/4 Estrelas (Setor Hoteleiro Norte ou Sul) + Café da Manhã Diário.<br>🚌 Transfer: Aeroporto ↔ Hotel (Ida e Volta) – Opcional, mas prático.<br>🎟️ Passeios: Tour Panorâmico Guiado (Geralmente um dia inteiro) cobrindo os principais pontos cívicos e arquitetônicos.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Centro-Oeste/BrasiliaDF.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/V%C3%A1rzea+Grande,+MT/@-15.6649994,-56.2286836,12z';
}
function card26() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Poconé - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso no valor (custo a ser adicionado).<br>🏨 Hospedagem: 3 Noites em Pousada na Transpantaneira, Regime de Alimentação: Pensão Completa (Café da Manhã, Almoço e Jantar).<br>🚌 Transfer: Compartilhado (Aeroporto de Cuiabá - CGB ↔ Pousada Ida e Volta).<br>🎟️ Passeios: Passeios Guiados Diários, Safári Fotográfico, Focagem Noturna, Cavalgada, Trilha.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Centro-Oeste/PoconeSafariMT.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Pocon%C3%A9,+MT,+78175-000/@-16.2615784,-56.6545653,14z';
}
function card27() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Várzea Grande - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Incluso no valor total (Estimativa de R$ 700 - Voo para Cuiabá/Várzea Grande - CGB).<br>🏨 Hospedagem: 3 Noites em Pousada Simples, Hostel ou Hotel Econômico na região central ou aeroporto. Café da Manhã opcional/simples.<br>🚌 Transfer: Uso de Transporte Público (Ônibus) ou Aplicativos de Transporte para o trajeto Aeroporto ↔ Hospedagem e passeios locais.<br>🎟️ Passeios: Visita à Igreja de Nossa Senhora da Guia, Passeio no Parque Ambiental Bernardo Berneck ou Parque Municipal Flor do Ipê, Exploração do Shopping Popular de Várzea Grande e Orla da Alameda Júlio Müller.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/CENTRO/varzeag.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/V%C3%A1rzea+Grande,+MT/@-15.6649994,-56.2286836,12z';
}

//Sudeste

function card28() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Capitólio - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Inclusão do Aéreo (est. R$ 1.100) no valor total. Voo sugerido o Aeroporto de Confins - CNF ou Aeroporto de Varginha - VAG, dependendo da logística.<br>🏨 Hospedagem: 3 Noites em Hotel/Pousada Boutique de Luxo em Escarpas do Lago (ou Vista do Lago), com infraestrutura premium, piscina e vista panorâmica para o lago.<br>🚌 Transfer: Privativo (Aeroporto ↔ Capitólio).<br>🎟️ Passeios: Passeio de Lancha Exclusiva, Roteiro privativo pelos Cânions de Furnas, Cachoeira Lagoa Azul e Vale dos Tucanos, utilizando uma embarcação premium e tripulação dedicada.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUDESTE/capitolio.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Capit%C3%B3lio,+MG,+37930-000/@-20.6151411,-46.0536749,16z';
}
function card29() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Guarapari - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Inclusão de passagens aéreas (Melhores horários e conexões) para o Aeroporto de Vitória (VIX).<br>🏨 Hospedagem: 3 Noites, Resort de Luxo ou Pousada Boutique 4/5 Estrelas em praias mais reservadas, como Meaípe ou Praia dos Padres, que oferecem exclusividade, alimentação, Café da Manhã diário incluso, Gourmet ou de alto padrão no hotel.<br>🚌 Transfer: Transfer Executivo Privativo (VIX ↔ Hotel em Guarapari), garantindo conforto e agilidade na chegada e partida.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sudeste/Guarapari.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Guarapari,+ES/@-20.6464491,-40.6381961,11z';
}
function card30() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Arraial do Cabo - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Não incluso (Recomendado voo para Cabo Frio - CFB ou Rio de Janeiro - GIG/SDU).<br>🏨 Hospedagem: 3 Noites em Suíte Superior em Pousada de Charme/Boutique (Vista para o Mar), Regime de Alimentação: Café da Manhã Gourmet e um Jantar Especial.<br>🚌 Transfer: Privativo (Aeroporto de Cabo Frio - CFB ↔ Pousada Ida e Volta).<br>🎟️ Passeios: Passeio de Lancha, Privativa de dia inteiro com paradas em locais exclusivos, Batismo de Mergulho com instrutor dedicado e Traslado privativo ao Pontal do Atalaia.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUDESTE/arraial.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Arraial+do+Cabo,+RJ,+28930-000/@-22.9646728,-42.0504104,14z';
}
function card31() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Rio de Janeiro - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Inclusão do Aéreo (est. R$ 1.000) no valor total.<br>🏨 Hospedagem: 4 Noites em Hotel 4 Estrelas na Zona Sul (Bairros de Copacabana, Ipanema ou Leblon), Alimentação: Café da Manhã diário no hotel.<br>🚌 Traslados: Transfers Aeroporto ↔ Hotel (Ida e Volta) em serviço privativo ou compartilhado confortável.<br> 🎟️ Passeios: Visita aos principais pontos turísticos incluem o Cristo Redentor, o Pão de Açúcar e as praias de Copacabana e Ipanema.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sudeste/RiodeJaneiro.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Rio+de+Janeiro,+RJ/@-22.9137906,-43.7756427,10z';
}
function card32() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Ouro Preto - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Inclusão do Aéreo (est. R$ 800) no valor total (Geralmente voo para Confins - CNF, em Belo Horizonte)."<br>🏨 Hospedagem: 3 Noites em Pousada de Charme no Centro Histórico + Café da Manhã diário.<br>🚌 Traslados: Transfer Compartilhado (Aeroporto CNF ↔ Ouro Preto). A viagem terrestre de BH para Ouro Preto dura aproximadamente 1h30.<br>🎟️ Passeio: Tour Guiado de Dia Inteiro em Ouro Preto.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sudeste/OuroPretoMGpng.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Ouro+Preto,+MG,+35400-000/@-20.391286,-43.5222453,14z';
}
function card33() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Vitória - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagem aérea de ida e volta.<br>🏨 Hospedagem: 3 Noites em Hotel + Café da manhã incluso, piscina e/ou vista para o mar.<br>🚌 Trasfer: Traslado Aeroporto (VIX) ↔ Hotel.<br>🎟️ Passeios: Visita aos principais pontos do Centro Histórico da Capital, incluindo, O Palácio Anchieta, A Catedral Metropolitana, O Parque Moscoso.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUDESTE/vitoria.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Vit%C3%B3ria,+ES/@-20.2821867,-40.3269035,13z';
}
function card34() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Campos do Jordão - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo (Opcional),Por conta do cliente. Estimativa de custo a partir de R$ 500 (para o aeroporto de São Paulo).<br>🏨 Hospedagem: 2 Noites em Pousada Simples ou Hotel 3 Estrelas bem avaliado. Localização: Estratégica, perto do Capivari.<br>🚌 Traslado: Transfer Rodoviário Compartilhado (Aeroporto de SP - Guarulhos/Congonhas - ou Rodoviária de SP ↔ Campos do Jordão).';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sudeste/CamposdeJordao.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Campos+do+Jord%C3%A3o,+SP,+12460-000/@-22.7330045,-45.6273303,13z';
}
function card35() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Petrópolis - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Estimado a partir de R$ 500, a ser adicionado ao valor total, se necessário.<br>🏨 Hospedagem: 3 Noites em Pousada Simples/Hostel Privativo em Petrópolis. Regime de Café da Manhã incluso.<br>🚌 Translados: Transfer Rodoviário (Rio ↔ Petrópolis)<br>🎟️ Passeios: Ingresso para Museu Imperial.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUDESTE/petropolis.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Petr%C3%B3polis+-+RJ/@-22.3878429,-43.3424539,11z';
}
function card36() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Paraty - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Incluso (est. R$ 1.100). CNF ou VAG.<br>🏨 Hospedagem,3 Noites em Hotel/Pousada Boutique de Luxo (Escarpas do Lago).<br>🚌 Transfer: Privativo (Aeroporto ↔ Capitólio).<br>🎟️ Passeios: Lancha Exclusiva (Cânions, Lagoa Azul) + Tour 4x4 Privativo.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUDESTE/paraty.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Paraty,+RJ/@-23.2175754,-44.7452762,14z';
}

//Sul

function card37() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Ametista do Sul - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Chapecó (XAP) ou Passo Fundo (PFB).<br>🏨 Hospedagem: 3 noites em Hotel Temático Superior (Ex: Hotel das Pedras, com quartos decorados com ametistas) ou em Suíte de Luxo (com café da manhã e jantar incluídos).<br>🚌 Transfer: Privativo e Executivo com carro de alto padrão, entre o Aeroporto (XAP ou PFB) e o Hotel (ida e volta).<br>🎟️ Passeios: Visita Exclusiva à Igreja São Gabriel, Tour Guiado VIP pela Mina em Atividade, Jantar Degustação na Ametista Wine, Acesso ao Ametista Parque Museu.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUL/ametista.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Ametista+do+Sul,+RS,+98465-000/@-27.3623926,-53.1934921,15z';
}
function card38() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Ilha do Mel - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Curitiba (CWB) em melhores horários.<br>🏨 Hospedagem: 3 noites em Pousada Premium ou bangalô isolado (Ex: Pousada Treze Luas, Pousada Astral da Ilha), com vista para o mar ou jardins (café da manhã incluso).<br>🚌 Transfer: Transfer privativo Curitiba → Pontal do Sul + Táxi Náutico Privativo direto para o trapiche da Pousada.<br>🎟️ Passeios: Passeio de barco exclusivo de volta à Ilha, passando pela Fortaleza de Nossa Senhora dos Prazeres e praias isoladas.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sul/IlhadomelParana.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Ilha+do+Mel/@-25.5342913,-48.3774547,13z';
}
function card39() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Bento Gonçalves - Luxo';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Porto Alegre (POA) ou Caxias do Sul (CXJ) em classe executiva.<br>🏨 Hospedagem: 4 noites em Hotel no Vale dos Vinhedo + Café da manhã gourmet incluso.<br>🚌 Transfer: Privativo do aeroporto até o hotel.<br>🎟️ Passeios: Visita exclusiva em vinícola renomada, incluindo degustação de rótulos raros e safras limitadas, Jantar de alta gastronomia com menu-degustação de 5 ou mais passos harmonizado com vinhos e espumantes premiados da região.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUL/bento.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Bento+Gon%C3%A7alves,+RS,+95700-000/@-29.1500327,-51.5589107,13z';
}
function card40() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Ponta Grossa - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Ponta Grossa (PGZ) ou, como alternativa principal, para Curitiba (CWB).<br>🏨 Hospedagem: 4 noites em Hotel em Ponta Grossa com café da manhã incluso.<br>🚌 Transfer: Compartilhado entre o Aeroporto (PGZ ou CWB) e o Hotel (ida e volta).<br>🎟️ Passeios: Tour completo pelo Parque Estadual de Vila Velha, Ingresso e visita ao Buraco do Padre, City Tour Histórico em Ponta Grossa.';
    document.getElementById('imagem').innerHTML = '  <img src="./fotoscartao/SUL/pontagrossa.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Ponta+Grossa,+PR/@-25.1386435,-50.242009,12z';
}
function card41() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Penha - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Navegantes (NVT).<br>🏨 Hospedagem: 4 noites em Hotel 3 ou 4 estrelas com boa estrutura de lazer, próximo ao parque ou no centro de Penha (café da manhã incluso).<br>🚌 Transfer: Transfer executivo Aeroporto NVT ↔ Hotel + Transporte em van compartilhada para os 2 dias de parque.<br>🎟️ Passeios: Passaporte de 2 dias para o Beto Carrero World + Ingresso para um Show Opcional (Ex: Excalibur com Lanche).';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sul/BetocarreroPenhaSc.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Penha,+SC/@-26.7947427,-48.6730671,13z';
}
function card42() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Foz do Iguaçu - Intermediário';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Foz do Iguaçu (IGU).<br>🏨 Hospedagem: 4 noites em Hotel 3 ou 4 estrelas bem localizado (Ex: Tarobá Hotel, JL Hotel), com café da manhã incluso.<br>🚌 Transfer: Transfer executivo para os passeios principais: Cataratas, Itaipu e Paraguai (com guia).<br>🎟️ Passeios: Ingresso para as Cataratas do Iguaçu (lado Brasil e Argentina), Parque das Aves e Itaipu Binacional (Visita Panorâmica).';
    document.getElementById('imagem').innerHTML = ' <img src="./Imagens/fotos/Sul/CataratasdoIguacu.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Foz+do+Igua%C3%A7u,+PR/@-25.5185093,-54.6291024,12z';
}
function card43() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Gramado e Canela - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br> ✈️ Aéreo: Passagens aéreas de ida e volta para Porto Alegre (POA).<br>🏨 Hospedagem: 4 noites em Pousada ou Hotel Simples em Gramado ou Canela (com café da manhã incluso).<br>🚌 Transfer: Compartilhado entre o Aeroporto de POA e o Hotel (ida e volta).<br>🎟️ Passeios: Ingresso para o Mini Mundo, City Tour em Gramado e Canela.';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sul/Gramado.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Gramado,+RS/@-29.3797009,-50.9488699,12z';
}
function card44() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'Balneário Camboriú - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Navegantes (NVT).<br>🏨 Hospedagem: 4 noites em Acomodação Econômica/Hostel com boa localização central (café da manhã incluso).<br>🚌 Transfer:Transfer compartilhado Aeroporto NVT ↔ Hotel.<br>🎟️ Passeios: Ingresso para o Parque Unipraias (Bondinho).';
    document.getElementById('imagem').innerHTML = '<img src="./Imagens/fotos/Sul/CamboriuSc.png" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/Balne%C3%A1rio+Cambori%C3%BA,+SC/@-27.0058484,-48.6581836,13z';
}
function card45() {
    document.getElementById('cartao').style.display = 'block';
    document.getElementById('cartao_titulo').innerHTML = 'São Francisco do Sul - Econômico';
    document.getElementById('cartao_texto').innerHTML = '<br>✈️ Aéreo: Passagens aéreas de ida e volta para Joinville (JOI).<br>🏨 Hospedagem: 4 noites em Pousada Simples ou Hostel Privativo na região da Enseada ou Centro Histórico (com café da manhã incluso).<br>🚌 Transfer: Compartilhado entre o Aeroporto de Joinville (JOI) e a Pousada (ida e volta).<br>🎟️ Passeios: Ingresso e visita ao Museu Nacional do Mar, Visita autoguiada ao Centro Histórico de São Francisco do Sul, Passeio ao Forte Marechal Luz.';
    document.getElementById('imagem').innerHTML = '<img src="./fotoscartao/SUL/saofranciscodosul.jpg" width="400" height="400">';
    document.getElementById('localizacao').href = 'https://www.google.com/maps/place/S%C3%A3o+Francisco+do+Sul,+SC,+89240-000/@-26.2356509,-48.6672924,12z';
}