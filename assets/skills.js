
const skillsData = [
    {
        title_fr: "Datacenter",
        title_en: "Datacenter",
        desc_fr: [
            "Conception et déploiement d’infrastructures physiques et virtuelles reposant sur la virtualisation et l’hyperconvergence.",
            "Mise en œuvre de solutions assurant la performance, la disponibilité et la continuité des services dans les environnements datacenter.",
            "<b>TECHNOLOGIES</b><br>Virtualisation, Hyperconvergence, haute disponibilité, Monitoring, Backup & Replication, Redondance réseau, Load Balancing."
        ],
        desc_en: [
            "Design and deployment of physical and virtual infrastructures based on virtualization and hyperconvergence.",
            "Implementation of solutions ensuring performance, availability, and service continuity within datacenter environments.",
            "<b>TECHNOLOGIES</b><br>Virtualization, Hyperconvergence, High Availability, Monitoring, Backup & Replication, Network Redundancy, Load Balancing."
        ]
    },
    {
        title_fr: "Cybersécurité",
        title_en: "Cybersecurity",
        desc_fr: [
            "Déploiement et administration de solutions de cybersécurité pour protéger les systèmes, les applications et les données critiques.",
            "Mise en place de politiques de sécurité garantissant la confidentialité, l’intégrité et la résilience des infrastructures.",
            "<b>TECHNOLOGIES</b><br>Pare-feux NG, VPN SSL/IPSec, WAF, Antivirus & EDR, Protection e-mail, Contrôle d’accès, Chiffrement, Journalisation, Notifications."
        ],
        desc_en: [
            "Deployment and administration of cybersecurity solutions to protect systems, applications, and critical data.",
            "Implementation of security policies ensuring confidentiality, integrity, and infrastructure resilience.",
            "<b>TECHNOLOGIES</b><br>Next-Generation Firewalls, SSL/IPSec VPN, WAF, Antivirus & EDR, Email Protection, Access Control, Encryption, Logging, Alerts."
        ]
    },
    {
        title_fr: "Réseaux",
        title_en: "Networking",
        desc_fr: [
            "Conception et configuration d’infrastructures réseau performantes, segmentées et redondantes.",
            "Assurer la connectivité, la fiabilité et la sécurité des communications au sein de l’entreprise.",
            "<b>TECHNOLOGIES</b><br>Routage & Commutation, Segmentation réseau (VLAN), Réseaux virtuels (GENEVE), Load Balancing, QoS, Monitoring réseau."
        ],
        desc_en: [
            "Design and configuration of high-performance, segmented, and redundant network infrastructures.",
            "Ensuring connectivity, reliability, and security of communications within the organization.",
            "<b>TECHNOLOGIES</b><br>Routing & Switching, Network Segmentation (VLAN), Virtual Networks (GENEVE), Load Balancing, QoS, Network Monitoring."
        ]
    },
    {
        title_fr: "Collaboration",
        title_en: "Collaboration",
        desc_fr: [
            "Déploiement et administration de services collaboratifs hébergés localement.",
            "Mise en œuvre de solutions assurant la disponibilité, la sécurité et la productivité des utilisateurs au sein de l’entreprise.",
            "<b>TECHNOLOGIES</b><br>Open source ou proprietaire , Portail d'entreprise, Serveurs de fichiers, Serveurs d’impression."
        ],
        desc_en: [
            "Deployment and administration of locally hosted collaborative services.",
            "Implementation of solutions ensuring availability, security, and user productivity within the organization.",
            "<b>TECHNOLOGIES</b><br>Open source or proprietary, Intranet Portal, File Servers, Print Servers."
        ]
    }
];

// Récupération du conteneur HTML
const container = document.getElementById("skillsContainer");

// Boucle pour générer les cartes
skillsData.forEach(skill => {
    const card = document.createElement("div");
    card.classList.add("skill-card");

    let content = `
        <h2 data-lang="fr" class="section-title">${skill.title_fr}</h2>
        ${skill.desc_fr.map(p => `<p data-lang="fr">${p}</p>`).join("")}

        <h2 data-lang="en" class="section-title" style="display:none">${skill.title_en}</h2>
        ${skill.desc_en.map(p => `<p data-lang="en" style="display:none">${p}</p>`).join("")}
    `;

    card.innerHTML = content;
    container.appendChild(card);
});
