
const skillsData = [
    {
        icon : "img/datacenter.png",
        title_fr: "Datacenter",
        title_en: "Datacenter",
        desc_fr: [
            "Conception et déploiement d’infrastructures physiques et virtuelles reposant sur la virtualisation et l’hyperconvergence.",
            "<b>TECHNOLOGIES</b><br>Virtualisation, Hyperconvergence, haute disponibilité, Monitoring, Backup & Replication, Redondance réseau, Load Balancing."
        ],
        desc_en: [
            "Design and deployment of physical and virtual infrastructures based on virtualization and hyperconvergence.",
            "<b>TECHNOLOGIES</b><br>Virtualization, Hyperconvergence, High Availability, Monitoring, Backup & Replication, Network Redundancy, Load Balancing."
        ]
    },
    {   icon : "img/cybersecurity.png",
        title_fr: "Cybersécurité",
        title_en: "Cybersecurity",
        desc_fr: [
            "Déploiement de solutions de cybersécurité et mise en place de politiques pour protéger les systèmes, les applications et les données critiques.",
            "<b>TECHNOLOGIES</b><br>Pare-feux NG, VPN SSL/IPSec, WAF, Antivirus & EDR, Protection e-mail, Contrôle d’accès, Chiffrement, Journalisation, Notifications."
        ],
        desc_en: [
            "Deployment of cybersecurity solutions and implementation of policies to protect systems, applications, and critical data.",
            "<b>TECHNOLOGIES</b><br>Next-Generation Firewalls, SSL/IPSec VPN, WAF, Antivirus & EDR, Email Protection, Access Control, Encryption, Logging, Alerts."
        ]
    },
    {   icon : "img/network.png",
        title_fr: "Réseaux",
        title_en: "Networking",
        desc_fr: [
            "Conception et configuration d’infrastructures réseau performantes, segmentées et redondantes.",
            "<b>TECHNOLOGIES</b><br>Routage & Commutation, Segmentation réseau (VLAN), Réseaux virtuels (GENEVE), Load Balancing, QoS, Monitoring réseau."
        ],
        desc_en: [
            "Design and configuration of high-performance, segmented, and redundant network infrastructures.",
            "<b>TECHNOLOGIES</b><br>Routing & Switching, Network Segmentation (VLAN), Virtual Networks (GENEVE), Load Balancing, QoS, Network Monitoring."
        ]
    },
    {   icon : "img/collaboration.png",
        title_fr: "Collaboration",
        title_en: "Collaboration",
        desc_fr: [
            "Déploiement de services collaboratifs  et mise en œuvre de solutions assurant la productivité des utilisateurs au sein de l’entreprise.",
            "<b>TECHNOLOGIES</b><br>Open source ou proprietaire , Portail d'entreprise, Serveurs de fichiers, Serveurs d’impression."
        ],
        desc_en: [
            "Deployment of collaborative services and implementation of solutions to enhance user productivity within the organization.",
            "<b>TECHNOLOGIES</b><br>Open source or proprietary, Intranet Portal, File Servers, Print Servers."
        ]
    },
];

// Récupération du conteneur HTML
const container = document.getElementById("skillsContainer");

// Boucle pour générer les cartes
skillsData.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill-card");

    let content = `
        <div class="skills-icon"><img class="skills-icon" src="${skill.icon}" alt=""></div>
        
        <h2 data-lang="fr" class="section-title">${skill.title_fr}</h2>
        ${skill.desc_fr.map(p => `<p data-lang="fr">${p}</p>`).join("")}

        <h2 data-lang="en" class="section-title" style="display:none">${skill.title_en}</h2>
        ${skill.desc_en.map(p => `<p data-lang="en" style="display:none">${p}</p>`).join("")}
    `;

    card.innerHTML = content;
    container.appendChild(card);
});
