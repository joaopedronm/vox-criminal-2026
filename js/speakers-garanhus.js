// Dados dos palestrantes
const speakers = {
    1: {
        name: "ALMIR REIS",
        image: "images/palestrantes/01.jpg"
    },
    2: {
        name: "Amanda CSI",
        image: "images/palestrantes/02.jpg"
    },
    3: {
        name: "Amanda Montenegro",
        image: "images/palestrantes/03.jpg"
    },
    4: {
        name: "Amélia Guimarães",
        image: "images/palestrantes/04.jpg"
    },
    5: {
        name: "Ana Paula Dantas",
        image: "images/palestrantes/05.jpg"
    },
    6: {
        name: "Anna Victória",
        image: "images/palestrantes/06.jpg"
    },
    7: {
        name: "Bianca Dyhégma",
        image: "images/palestrantes/07.jpg"
    },
    8: {
        name: "Caroline Queiroz",
        image: "images/palestrantes/08.jpg"
    },
    9: {
        name: "Claudia Elizabeth",
        image: "images/palestrantes/09.jpg"
    },
    10: {
        name: "Ewerton Mendonça",
        image: "images/palestrantes/10.jpg"
    },
    11: {
        name: "Felipe Cazeiro",
        image: "images/palestrantes/11.jpg"
    },
    12: {
        name: "Felipe Gomez",
        image: "images/palestrantes/12.jpg"
    },
    13: {
        name: "Florence",
        image: "images/palestrantes/13.jpg"
    },
    14: {
        name: "Francisco Marques",
        image: "images/palestrantes/14.jpg"
    },
    15: {
        name: "Igor Diego",
        image: "images/palestrantes/15.jpg"
    },
    16: {
        name: "Izana Couto",
        image: "images/palestrantes/16.jpg"
    },
    17: {
        name: "Jane Berwanger",
        image: "images/palestrantes/17.jpg"
    },
    18: {
        name: "Jaqueline Santos",
        image: "images/palestrantes/18.jpg"
    },
    19: {
        name: "Josélia Queiroga",
        image: "images/palestrantes/19.jpg"
    },
    20: {
        name: "Kadu Barros",
        image: "images/palestrantes/20.jpg"
    },
    21: {
        name: "Kananda Borges",
        image: "images/palestrantes/21.jpg"
    },
    22: {
        name: "Kyvia",
        image: "images/palestrantes/22.jpg"
    },
    23: {
        name: "Leonardo Couto",
        image: "images/palestrantes/23.jpg"
    },
    24: {
        name: "Marília França",
        image: "images/palestrantes/24.jpg"
    },
    25: {
        name: "Paulo Furtado",
        image: "images/palestrantes/25.jpg"
    },
    26: {
        name: "Rosmar Alencar",
        image: "images/palestrantes/26.jpg"
    },
    27: {
        name: "Ruthe Wanessa",
        image: "images/palestrantes/27.jpg"
    },
    28: {
        name: "Shynaide Mafra",
        image: "images/palestrantes/28.jpg"
    },
    29: {
        name: "Sinaly Monteiro",
        image: "images/palestrantes/29.jpg"
    },
    30: {
        name: "Tallyta Bione",
        image: "images/palestrantes/30.jpg"
    },
    31: {
        name: "Tássio Gutierre",
        image: "images/palestrantes/31.jpg"
    },
    32: {
        name: "Vitor Falcão",
        image: "images/palestrantes/32.jpg"
    },
    33: {
        name: "Vitória Pinheiro",
        image: "images/palestrantes/33.jpg"
    },
    34: {
        name: "Welton Roberto",
        image: "images/palestrantes/34.jpg"
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