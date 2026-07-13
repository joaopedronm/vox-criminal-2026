// Dados dos palestrantes
const speakers = {
    // 1: {
    //     name: "Alexandre Zamboni",
    //     role: "Perito Criminal",
    //     institution: "IUEJ",
    //     description: "Perito criminal com mais de 30 anos de experiência, destacando-se em casos emblemáticos como Suzane von Richthofen e Caso Yoki. Reconhecido pela perícia técnica em análises forenses e atualmente participa da série Perícia Lab no canal AXN Brasil.",
    //     image: "images/palestrantes/01.jpg"
    // },
    2: {
        name: "Aline Grisi",
        role: "Criminólogo Psicanalista",
        institution: "IUEJ",
        description: "Criminólogo com duas décadas de experiência, formado em Direito com pós-graduação em Criminologia. Mestre e doutorando pela USP, autor de diversos livros sobre comportamento violento, incluindo 'Criminologia Descomplicada'.",
        image: "images/palestrantes/02.jpg"
    },
    3: {
        name: "Amanda Abou Dehn",
        role: "Fotógrafa Pericial",
        institution: "IUEJ",
        description: "Bacharel em Direito e referência em fotografia forense. Com 30 anos de atuação no DHPP em São Paulo, trabalhou em casos de repercussão nacional como Maniaco das Dentistas, Maniaco do Parque e Caso Matsunaga.",
        image: "images/palestrantes/03.jpg"
    },
    4: {
        name: "Amanda CSI",
        role: "Perita Criminal",
        institution: "IUEJ",
        description: "Perita Oficial Criminal da Polícia Civil da Paraíba, 1º lugar geral na Academia de Polícia Civil em 2014. Graduada em Farmácia e Direito, Mestre em Tecnologia Farmacêutica e autora do livro Medicina Legal.",
        image: "images/palestrantes/04.jpg"
    },
    5: {
        name: "Amanda Montenegro",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado criminalista, Mestre em Desenvolvimento e Planejamento Territorial pela PUC/GO, Doutorando em Direito pela FADISP e palestrante.",
        image: "images/palestrantes/05.jpg"
    },
    6: {
        name: "Ana Paula Dantas",
        role: "Advogado",
        institution: "IUEJ",
        description: "Advogado desde 1997, com experiência em empresa multinacional de telecomunicações. Sócio fundador da Pantaleão Sociedade de Advogados desde 2004, especializada em Direito Penal.",
        image: "images/palestrantes/06.jpg"
    },
    7: {
        name: "Ana Vitória",
        role: "Delegada",
        institution: "IUEJ",
        description: "Delegada pernambucana, natural de Recife. Iniciou como advogada, tornou-se delegada em 2018. Atuou no DRACCO e atualmente titulariza a delegacia de combate à violência contra a mulher do Recife.",
        image: "images/palestrantes/07.jpg"
    },
    8: {
        name: "Andreza Maia",
        role: "Juíza",
        institution: "IUEJ",
        description: "Juíza substituta do TJDFT, Mestra em Direito pelo IDP. Professora de Processo Penal, palestrante e autora da obra 'Audiência de Custódia - A Presença como Direito Fundamental'.",
        image: "images/palestrantes/08.jpg"
    },
    9: {
        name: "Angela Lima",
        role: "Administradora",
        institution: "IUEJ",
        description: "CEO da ADM Contabilidade e Assessoria, graduada em Contabilidade, RH e Neurociência. Especialista em Neurociência Aplicada ao Comportamento e autora reconhecida por transformar negócios.",
        image: "images/palestrantes/09.jpg"
    },
    10: {
        name: "Anna Katarina",
        role: "Psicóloga Jurídica",
        institution: "IUEJ",
        description: "Psicóloga Jurídica, Mestranda em Psicologia Criminal na Espanha, especialista em Investigação Criminal. Perita habilitada pelo TJSP, professora universitária e coordenadora de cursos de pós-graduação.",
        image: "images/palestrantes/11.jpg"
    },
    11: {
        name: "Brenda Yuri",
        role: "Juíza Tjce",
        institution: "IUEJ",
        description: "Juíza na 2ª Vara Cível da comarca de Boa Viagem-CE, membro do núcleo de cooperação judiciária do TJCE. Ex-oficial de justiça, graduada em Direito pela UFC.",
        image: "images/palestrantes/12.jpg"
    },
    12: {
        name: "Bruno Zampier",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Advogada criminalista especialista em Direito e Processo Penal. Sócia no escritório Omena & Advogados, CEO do podcast @vinhodireito e da @kmjurisacademy.",
        image: "images/palestrantes/13.jpg"
    },
    13: {
        name: "Claudia Elizabeth",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/53.jpg"
    },
    14: {
        name: "Caroline Andrioli",
        role: "Juíza",
        institution: "IUEJ",
        description: "Juíza de Direito especialista em Direito Penal e Gênero, mestranda em Direitos Humanos. Juíza Titular do Juizado de Violência Doméstica no TJ-RJ e retratada no filme 'O Juízo' da Netflix.",
        image: "images/palestrantes/14.jpg"
    },
    // 15: {
    //     name: "Daniele Taveira",
    //     role: "Professor De Direito Penal",
    //     institution: "IUEJ",
    //     description: "Mestre e Especialista em Direito, Professor de Direito Penal na UNISC. Ex-Assessor Jurídico do Ministério Público do RS, advogado, escritor e palestrante.",
    //     image: "images/palestrantes/15.jpg"
    // },
    16: {
        name: "Diego",
        role: "Doutor Em Direito Processual Penal",
        institution: "IUEJ",
        description: "Doutor em Direito Processual Penal pela Universidad Complutense de Madrid. Professor Titular do Programa de Pós-Graduação em Ciências Criminais da PUC-RS e advogado criminalista.",
        image: "images/palestrantes/16.jpg"
    },
    17: {
        name: "Edna Souza",
        role: "Mestre Em Direito E Major Da Pc",
        institution: "IUEJ",
        description: "Bacharel em Direito e Segurança Pública, especialista em Ciências Criminais e Gestão de Segurança Pública. Mestre em Direito, oficial da Polícia há 21 anos, professor e palestrante.",
        image: "images/palestrantes/17.jpg"
    },
    18: {
        name: "Eduardo Mauricio",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado Criminalista, formado em gestão de segurança pública, pós-graduado em ciências criminais e tribunal do júri.",
        image: "images/palestrantes/18.jpg"
    },
    19: {
        name: "Fabi",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Mais de dez anos de advocacia criminal, graduada pela URCA, pós-graduada em Ciências Penais e Criminologia. Professora universitária e idealizadora dos projetos 'Por Elas' e 'Com a Palavra a Defesa'.",
        image: "images/palestrantes/19.jpg"
    },
    20: {
        name: "Felipe Cazeiro",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/54.jpg"
    },
    21: {
        name: "Felipe Gomez",
        role: "Advogado E Mentor Jurídico",
        institution: "IUEJ",
        description: "Advogado desde 2010 e CEO da Destrava Mídias, melhor assessoria de marketing jurídico do Brasil. Ajuda mais de 170 advogados a alcançar clientes através do digital, com mais de R$ 20 milhões faturados.",
        image: "images/palestrantes/20.jpg"
    },
    22: {
        name: "Florence Rosa",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado criminalista internacional com atuação no Brasil, Portugal, Hungria e Espanha. Especialista em extradição, doutorando em Direito Penal pela Universidade de Salamanca e mestre pela Universidade de Coimbra.",
        image: "images/palestrantes/21.jpg"
    },
    23: {
        name: "Francisco Marques",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/52.jpg"
    },
    24: {
        name: "Gabriela Franco",
        role: "Secretário De Segurança Pública",
        institution: "IUEJ",
        description: "Doutor e Mestre em Direito, autor de mais de 150 obras jurídicas. Fundador do Instituto Greco e atual Secretário de Justiça e Segurança Pública do Estado de Minas Gerais.",
        image: "images/palestrantes/22.jpg"
    },
    25: {
        name: "Giancarlo Teodoro",
        role: "Delegada De Polícia",
        institution: "IUEJ",
        description: "Graduada em Direito pela UFG, pós-graduada em Direito Penal e Processual Penal. Ex-assessora do MP-GO, Delegada do DF e Coordenadora de Carreira Policiais no Grancursos Online.",
        image: "images/palestrantes/23.jpg"
    },
    26: {
        name: "Graciela de Rezende",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado Criminalista.",
        image: "images/palestrantes/24.jpg"
    },
    27: {
        name: "Hercilia Martins",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Advogada criminalista, professora e mentora. Proprietária do Polesca Advocacia em Viçosa/MG, mestranda em Ciências Criminológico-Forense no Uruguai e membro de comissões da OAB Viçosa/MG.",
        image: "images/palestrantes/25.jpg"
    },
    28: {
        name: "Izana",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Especialista em Ciências Criminais, professor de Direito Penal e Processual Penal. Ex-Presidente da ABRACRIM/AL e ACRIMAL, atual presidente da Caixa de Assistência dos Advogados de Alagoas.",
        image: "images/palestrantes/26.jpg"
    },
    29: {
        name: "Jader Marques",
        role: "Especialista Em Oratória",
        institution: "IUEJ",
        description: "Profissional especializada em técnicas de oratória e comunicação, oferecendo treinamentos para aprimoramento da comunicação jurídica e apresentações profissionais.",
        image: "images/palestrantes/27.jpg"
    },
    30: {
        name: "Jamil Chaim Alves",
        role: "Psicóloga",
        institution: "IUEJ",
        description: "Psicóloga Mestra pela UNIVASF, especialista em Psicologia Jurídica e Gestão em Saúde. Atua como assistente técnica e perita no TJ-BA, além de professora em cursos de graduação e pós-graduação.",
        image: "images/palestrantes/28.jpg"
    },
    31: {
        name: "Jessyhanne Amorim",
        role: "Advogada",
        institution: "IUEJ",
        description: "Advogada em Direito Médico, pós-graduada em Ciências Criminais e Direito Médico. Coordenadora e professora de pós-graduação, membro de comissões da OAB BA e palestrante.",
        image: "images/palestrantes/10.jpg"
    },
    32: {
        name: "José Maria Filho",
        role: "Advogada",
        institution: "IUEJ",
        description: "Advogada especialista em Direito de Família, Presidente da Comissão de Marketing Jurídico da OAB Garanhuns, professora, palestrante e mentora com pós-graduações em Direito Civil e Trabalhista.",
        image: "images/palestrantes/29.jpg"
    },
    33: {
        name: "Leonardo de Moraes",
        role: "Juíza",
        institution: "IUEJ",
        description: "Doutora em Direito, juíza, palestrante e autora de obras jurídicas. Profissional com vasta experiência na magistratura e contribuições significativas para a literatura jurídica.",
        image: "images/palestrantes/30.jpg"
    },
    34: {
        name: "Leonardo Novo",
        role: "Delegada De Polícia",
        institution: "IUEJ",
        description: "Delegada de Polícia, escritora e professora. Profissional com atuação destacada na área policial, contribuindo também para a educação e literatura especializada.",
        image: "images/palestrantes/31.jpg"
    },
    35: {
        name: "Lorena Ocampos",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Mestre e doutorando em Direito pela Universidade de Coimbra. Vice-presidente do Instituto Iberoamericano de Compliance, autor de obras especializadas em direito criminal e compliance.",
        image: "images/palestrantes/32.jpg"
    },
    36: {
        name: "Luana Davico",
        role: "Psicóloga Clínica E Jurídica",
        institution: "IUEJ",
        description: "Psicóloga clínica e jurídica do TJPE, Chefe do Centro de Apoio Psicossocial. Mestre em Neuropsiquiatria pela UFPE, especialista em Terapia Cognitivo-Comportamental e Neurociência pela PUC-RS.",
        image: "images/palestrantes/33.jpg"
    },
    37: {
        name: "Marcos Túlio",
        role: "Psicólogo Clínico",
        institution: "IUEJ",
        description: "Professor do Curso de Psicologia da Faculdade Anhanguera, Mestre em Educação pela UFPE. Especialista em Psicologia Jurídica e Neuropsicologia, atua como formador na área da infância e adolescência.",
        image: "images/palestrantes/34.jpg"
    },
    38: {
        name: "Minghan Chen Lima",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Pós-graduado em Direito Penal e Processo Penal, curso de extensão em Teoria do Crime pela PUC/RS. Membro da Comissão de Defesa da OAB/MG e vice-presidente da 187ª Subseção OAB/MG.",
        image: "images/palestrantes/35.jpg"
    },
    39: {
        name: "Nidal",
        role: "Psicóloga",
        institution: "IUEJ",
        description: "Psicóloga doutoranda em Portugal, mestra em Saúde Coletiva, especialista em Psicologia Jurídica. Psicóloga da Polícia Civil de SC, organizadora de livros e idealizadora do Projeto Proteja.",
        image: "images/palestrantes/36.jpg"
    },
    40: {
        name: "Patrícia Barazetti",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado criminalista com experiência sólida na área penal, atuando em defesas criminais e casos complexos do direito penal brasileiro.",
        image: "images/palestrantes/37.jpg"
    },
    // 41: {
    //     name: "Quaresma",
    //     role: "Psicóloga Jurídica",
    //     institution: "Sistema de Justiça",
    //     description: "Profissional especializada em psicologia jurídica, atuando na interface entre psicologia e direito, com foco em avaliações periciais e assistência técnica.",
    //     image: "images/palestrantes/38.jpg"
    // },
    42: {
        name: "Raone Aguiar",
        role: "Advogada Criminalista",
        institution: "IUEJ",
        description: "Advogada criminalista, especialista em Direito Penal e Processual Penal. Coordenadora do Curso de Direito da FRM, presidente da Comissão da Mulher Advogada da OAB Penedo e coautora de obras jurídicas.",
        image: "images/palestrantes/39.jpg"
    },
    43: {
        name: "Renato Fazio",
        role: "Psicólogo Jurídico",
        institution: "IUEJ",
        description: "Psicólogo especializado em psicologia jurídica e forense com mais de 12 anos de experiência. Diretor da GomezPsi, mestre em Ciências da Saúde pela USP e capacitado em perícias judiciais.",
        image: "images/palestrantes/40.jpg"
    },
    // 44: {
    //     name: "Rogério Greco",
    //     role: "Ceo Do Grupo Notorium",
    //     institution: "IUEJ",
    //     description: "CEO do Grupo Notorium® e da expoDireito® Brasil. Bacharel em Direito.",
    //     image: "images/palestrantes/41.jpg"
    // },
    45: {
        name: "Rômulo José F. de Oliveira Júnior",
        role: "Advogado Criminalista",
        institution: "IUEJ",
        description: "Advogado Criminalista e sócio-gestor do RM Advocacia Criminal. Professor de Direito Penal, integrou o FGV Rio Law Program. Especialista em Direito Público e fundador do Laboratório Criminal - LABCrim.",
        image: "images/palestrantes/42.jpg"
    },
    46: {
        name: "Rubens Correia",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/43.jpg"
    },
    47: {
        name: "Ruth Viana",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/44.jpg"
    },
    48: {
        name: "Sarah Bastos",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/45.jpg"
    },
    49: {
        name: "Tamara Bessa",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/49.jpg"
    },
    50: {
        name: "Thaisa",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/46.jpg"
    },
    51: {
        name: "Vitor Falcão",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/47.jpg"
    },
    52: {
        name: "Vitoria Pinheiro",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/48.jpg"
    },
    53: {
        name: "Viviane Pinheiro",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/50.jpg"
    },
    54: {
        name: "Zanone Júnior",
        role: "Mestre Em Direito",
        institution: "IUEJ",
        description: "Mestre e especialista em Direito, membro Consultora da Comissão Nacional de Educação Jurídica do CFO OAB. Presidente da Comissão de Educação Jurídica da OABPE, professora e fundadora do escritório Oliveira, Queiroz e Costa Advocacia.",
        image: "images/palestrantes/51.jpg"
    }
    
};

// Função para criar o HTML de um card de palestrante
function createSpeakerCard(id, speaker) {
    return `
        <div class="col">
            <div id="tm-1-${id}" class="team-member r-10 wow animate__animated animate__fadeInUp">
                <!-- Team Member Photo -->
                <div class="team-member-photo r-10 position-relative">
                    <div class="hover-overlay"> 
                        <img class="img-fluid" src="${speaker.image}" alt="team-member-foto">
                        <!-- <div class="item-overlay d-flex justify-content-center align-items-center">
                            <button class="btn btn--theme btn-sm" onclick="openSpeakerModal(${id})">Saiba mais</button>
                        </div> -->
                    </div>
                </div>
                
                <!-- Team Member Data -->		
                <div class="team-member-data">	
                    <h6 class="h6-lg pb-3">${speaker.name}</h6>
                    <!-- <p>${speaker.role}</p> -->
                </div>	
            </div>									
        </div>
    `;
}

// Função para renderizar todos os palestrantes
function renderSpeakers() {
    const container = document.getElementById('speakers-container');
    let html = '';
    
    // Itera sobre todos os palestrantes e cria os cards
    Object.keys(speakers).forEach(id => {
        html += createSpeakerCard(id, speakers[id]);
    });
    
    container.innerHTML = html;
}

// Função para abrir o modal do palestrante
function openSpeakerModal(id) {
    const speaker = speakers[id];
    if (!speaker) return;

    document.getElementById("speakerName").textContent = speaker.name;
    document.getElementById("speakerRole").textContent = speaker.role;
    document.getElementById("speakerInstitution").textContent = speaker.institution;
    document.getElementById("speakerDescription").textContent = speaker.description;
    document.getElementById("speakerImage").src = speaker.image;

    const modal = new bootstrap.Modal(document.getElementById('speakerModal'));
    modal.show();
}

// Renderizar os palestrantes quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    renderSpeakers();
});