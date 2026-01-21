
// Tableau contenant toutes les cartes
const galleryData = [
    {
        img: "img/vmware-vsphere.png",
        alt: "VMware vSphere",
        title_fr: "Infrastructure Virtuelle (SDDC)",
        title_en: "Virtual Infrastructure (SDDC)",
        link_fr: "VMware vSphere",
        link_en: "VMware vSphere",
        desc_fr: "Une plateforme de virtualisation puissante qui permet de créer, gérer et optimiser une infrastructure informatique virtuelle. Elle repose sur l’hyperviseur ESXi, qui transforme les serveurs physiques en environnements capables d’héberger plusieurs machines virtuelles, isolées et indépendantes.",
        desc_en: "A powerful virtualization platform that enables the creation, management, and optimization of a virtual IT infrastructure. It is built on the ESXi hypervisor, which transforms physical servers into environments capable of hosting multiple isolated and independent virtual machines."
    },
    {
        img: "img/vmware-vsan.png",
        alt: "VMware vSAN",
        title_fr: "Infrastructure Hyperconvergée (HCI)",
        title_en: "Hyperconverged Infrastructure (HCI)",
        link_fr: "VMware vSAN",
        link_en: "VMware vSAN",
        desc_fr: "Une solution de stockage hyperconvergé, elle permet de regrouper les disques locaux des serveurs physique pour former un espace de stockage distribué, hautement disponible et optimisé pour les machines virtuelles.",
        desc_en: "A hyperconverged storage solution that aggregates the local disks of physical servers to create a distributed storage space, highly available and optimized for virtual machines."
    },
    {
        img: "img/vmware-nsx.png",
        alt: "VMware NSX",
        title_fr: "Virtuelisation du Réseau (SDN)",
        title_en: "Network Virtualization (SDN)",
        link_fr: "VMware NSX",
        link_en: "VMware NSX",
        desc_fr: "Une plateforme de virtualisation réseau qui permet de créer, gérer et sécuriser dynamiquement l’infrastructure réseau de votre datacenter, entièrement depuis le logiciel, sans dépendre du matériel physique.",
        desc_en: "A network virtualization platform that enables dynamic creation, management, and security of your datacenter network infrastructure entirely through software, without relying on physical hardware."
    },
    {
        img: "img/ad.jpg",
        alt: "Microsoft Active Directory",
        title_fr: "Gestion centralisée des accès",
        title_en: "Centralized Access Management",
        link_fr: "Microsoft Active Directory",
        link_en: "Microsoft Active Directory",
        desc_fr: "Un service d’annuaire puissant qui permet de centraliser la gestion des utilisateurs, des ordinateurs et des ressources au sein d’un réseau d’entreprise.",
        desc_en: "A powerful directory service that centralizes the management of users, computers, and resources within an enterprise network."
    },
    {
        img: "img/exchange.jpg",
        alt: "Microsoft Exchange",
        title_fr: "Messagerie Profesionnelle",
        title_en: "Professional Email",
        link_fr: "Microsoft Exchange",
        link_en: "Microsoft Exchange",
        desc_fr: "Une plateforme de messagerie professionnelle conçue pour offrir une communication sécurisée, performante et centralisée au sein des entreprises. Elle permet de gérer les e-mails, les calendriers, les contacts et les tâches à partir d’un environnement unifié.",
        desc_en: "A professional email platform designed to provide secure, efficient, and centralized communication within businesses, enabling management of emails, calendars, contacts, and tasks from a unified environment."
    },
    {
        img: "img/sharepoint.jpg",
        alt: "Microsoft SharePoint",
        title_fr: "Collaboration et portail d’entreprise",
        title_en: "Collaboration and Enterprise Portal",
        link_fr: "Microsoft SharePoint",
        link_en: "Microsoft SharePoint",
        desc_fr: "Une plateforme collaborative conçue pour centraliser l'information, fluidifier la communication interne et faciliter le travail en équipe. Elle permet de créer des espaces de travail, des bibliothèques de documents et des portails personnalisés au sein de votre organisation.",
        desc_en: "A collaborative platform designed to centralize information, streamline internal communication, and facilitate teamwork, enabling the creation of workspaces, document libraries, and customized portals within your organization."
    },
    {
        img: "img/skypeforbusiness.jpg",
        alt: "Skype Entreprise",
        title_fr: "Solution de visioconférence",
        title_en: "Video Conferencing Solution",
        link_fr: "Skype Entreprise",
        link_en: "Skype Entreprise",
        desc_fr: "Une plateforme de communication unifiée pour faciliter la collaboration à distance, améliorer les échanges internes et connecter les équipes. Elle permet de passer des appels audio/vidéo, organiser des réunions en ligne, discuter par messagerie instantanée et partager des documents en temps réel.",
        desc_en: "A unified communication platform that facilitates remote collaboration, enhances internal communication, and connects teams, enabling audio/video calls, online meetings, instant messaging, and real-time document sharing."
    },
    {
        img: "img/cisco.jpg",
        alt: "CISCO",
        title_fr: "Conception de l'architecture Réseau",
        title_en: "Network Architecture Design",
        link_fr: "CISCO",
        link_en: "CISCO",
        desc_fr: "Les solutions Cisco permettent de construire une infrastructure réseau robuste, évolutive et sécurisée, adaptée aux environnements professionnels les plus exigeants. Cisco offre une connectivité fiable et une gestion fine du trafic réseau.",
        desc_en: "Cisco solutions enable the construction of a robust, scalable, and secure network infrastructure, tailored to demanding professional environments, providing reliable connectivity and fine-grained network traffic management."
    },
    {
        img: "img/fortigate.jpg",
        alt: "Fortigate",
        title_fr: "Sécurité et protection unifiée",
        title_en: "Unified Security and Protection",
        link_fr: "Fortigate",
        link_en: "Fortigate",
        desc_fr: "Un pare-feu nouvelle génération (NGFW) développée par Fortinet, conçue pour protéger votre infrastructure contre les cybermenaces, tout en offrant des fonctionnalités complètes de sécurité, de connectivité et de gestion du trafic réseau.",
        desc_en: "A next-generation firewall (NGFW) developed by Fortinet, designed to protect your infrastructure against cyber threats while providing comprehensive security, connectivity, and network traffic management features."
    },
    {
        img: "img/veeam.jpg",
        alt: "VEEAM",
        title_fr: "Sauvegarde et réplication de données",
        title_en: "Data Backup and Replication",
        link_fr: "VEEAM",
        link_en: "VEEAM",
        desc_fr: "Une solution de protection des données moderne, conçue pour assurer la disponibilité permanente de vos machines virtuelles, serveurs physiques et environnements cloud. Elle permet de sauvegarder, répliquer et restaurer rapidement vos systèmes en cas d’incident, avec une grande simplicité d’administration.",
        desc_en: "A modern data protection solution designed to ensure continuous availability of virtual machines, physical servers, and cloud environments, enabling fast backup, replication, and restoration of systems with easy administration."
    },
    {
        img: "img/zabbix.jpg",
        alt: "ZABBIX",
        title_fr: "Supervision de l'infrastructure IT",
        title_en: "IT Infrastructure Monitoring",
        link_fr: "ZABBIX",
        link_en: "ZABBIX",
        desc_fr: "Une solution de supervision open source conçue pour surveiller en continu l’état de santé de vos systèmes, équipements réseau et services applicatifs. Grâce à son interface centralisée, Zabbix offre une visibilité complète et proactive sur l’ensemble de votre infrastructure IT.",
        desc_en: "An open-source monitoring solution designed to continuously track the health of your systems, network devices, and application services. With its centralized interface, Zabbix provides complete and proactive visibility across your entire IT infrastructure."
    },
    {
        img: "img/glpi.png",
        alt: "GLPI",
        title_fr: "Géstion de parc IT",
        title_en: "IT Asset Management",
        link_fr: "GLPI",
        link_en: "GLPI",
        desc_fr: "",
        desc_en: "An open-source monitoring solution designed to continuously track the health of your systems, network devices, and application services. With its centralized interface, Zabbix provides complete and proactive visibility across your entire IT infrastructure."
    }
    // Ajouter ici les autres éléments identiquement
];

// Sélection du conteneur
const galleryContainer = document.getElementById("gallery-container");

// Boucle pour générer automatiquement la galerie
galleryData.forEach(item => {
    const element = `
        <div class="gallery-item">
            <div class="img-wrapper">
                <img src="${item.img}" alt="${item.alt}">
            </div>
            <div class="text-wrapper">
                <strong data-lang="fr">${item.title_fr}</strong>
                <strong data-lang="en" style="display:none">${item.title_en}</strong>
                <br>
                <a data-lang="fr" href="#">${item.link_fr}</a>
                <a data-lang="en" style="display:none" href="#">${item.link_en}</a>
            </div>
        </div>

        <div class="gallery-item"> 
            <div class="text-wrapper">
                <p data-lang="fr">${item.desc_fr}</p>
                <p data-lang="en" style="display:none">${item.desc_en}</p>
            </div>
        </div>
    `;

    galleryContainer.innerHTML += element;
});