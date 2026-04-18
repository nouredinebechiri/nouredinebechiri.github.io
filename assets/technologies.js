const items = [
  { icon: "img/vmware-vsphere.png", 
    title: "VMware vSphere", 
    desc: "Une plateforme de virtualisation puissante qui permet de créer, gérer et optimiser une infrastructure informatique virtuelle.",
    desc_en: "A powerful virtualization platform that enables the creation, management, and optimization of a virtual IT infrastructure.",
    link:"#"
  },
  { icon: "img/vmware-vsan.png", 
    title: "VMware vSAN", 
    desc: "Une solution de stockage, elle permet de regrouper les disques des serveurs physique pour former un espace de stockage distribué.",
    desc_en: "A storage solution that aggregates the local disks of physical servers to create a distributed storage space.",
    link:"#"
  },
  { icon: "img/vmware-nsx.png", 
    title: "VMware NSX",
    desc: "Une plateforme de virtualisation réseau qui permet de créer, gérer et sécuriser dynamiquement l’infrastructure réseau de votre datacenter.",
    desc_en: "A network virtualization platform that enables dynamic creation, management, and security of your datacenter network infrastructure.",
    link:"#"

  },
  { icon: "img/fortinet.png", 
    title: "Fortigate", 
    desc: "Un pare-feu nouvelle génération (NGFW), conçue pour protéger l'infrastructure IT contre les cybermenaces.",
    desc_en: "A next-generation firewall (NGFW), designed to protect IT infrastructure against cyber threats.",
    link:"#"
  },
  { icon: "img/fortinet.png", 
    title: "FortiWeb", 
    desc: "Un pare-feu applicatif web (WAF), conçu pour protéger les applications web et les API contre les cybermenaces.",
    desc_en: "A Web Application Firewall (WAF), designed to protect web applications and APIs from cyber threats.",
    link:"https://www.fortinet.com/fr/products/web-application-firewall/fortiweb"
  },
   { icon: "img/fortinet.png", 
    title: "FortiMail", 
    desc: "Une solution de sécurité, conçue pour protéger les systèmes de messagerie contre le spam, les malwares et les menaces véhiculées par email.",
    desc_en: "An security solution designed to protect messaging systems against spam, malware, and advanced email-borne threats.",
    link:"#"
  },

  { icon: "img/veeam.jpg", 
    title: "VEEAM", 
    desc: "Une solution de protection des données, elle permet de sauvegarder, répliquer et restaurer rapidement vos systèmes en cas d’incident.", 
    desc_en: "A data protection solution that enables you to back up, replicate, and quickly restore your systems in the event of an incident.",
    link:"#"
  },
  { icon: "img/ad.png", 
    title: "Microsoft Active Directory", 
    desc: "Un service d’annuaire qui permet de centraliser la gestion des utilisateurs, des ordinateurs et des ressources au sein d’un réseau d’entreprise.",
    desc_en: "A directory service that centralizes the management of users, computers, and resources within an enterprise network.",
    link:"#"
  },
  { icon: "img/exchange.jpg", 
    title: "Microsoft Exchange", 
    desc: "Une plateforme de messagerie conçue pour offrir une communication sécurisée, performante et centralisée au sein des entreprises.",
    desc_en: "A email platform designed to provide secure, efficient, and centralized communication within businesses.",
    link:"#"
  },
  { icon: "img/sharepoint.jpg", 
    title: "SharePoint", 
    desc: "Une plateforme collaborative conçue pour centraliser l'information, fluidifier la communication interne et faciliter le travail en équipe.",
    desc_en: "A collaborative platform designed to centralize information, streamline internal communication, and facilitate teamwork.",
    link:"#"
  },
 ];

const trackTechnology = document.getElementById("trackTechnology");
const carouselTechnology = document.getElementById("carouselTechnology");

// 🔁 génération + duplication
const allItems = [...items, ...items];

allItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <div class="header">
      <img class="icon" src="${item.icon}" alt="">
      <div class="title"><a href="${item.link}" target="_blank">${item.title}</a></div>
    </div>
    <div data-lang="fr" class="desc">${item.desc}</div>
    <div data-lang="en" style="display:none" class="desc">${item.desc_en}</div>
  `;

  trackTechnology.appendChild(div);
});

// 🎬 animation
let position = 0;
let speed = 1.5;
let isPaused = false;

function animate() {
  if (!isPaused) {
    position -= speed;

    if (Math.abs(position) >= trackTechnology.scrollWidth / 2) {
      position = 0;
    }

    trackTechnology.style.transform = `translateX(${position}px)`;
  }

  requestAnimationFrame(animate);
}

animate();

// ⏸ PAUSE AU HOVER / FOCUS
carouselTechnology.addEventListener("mouseenter", () => {
  isPaused = true;
});

carouselTechnology.addEventListener("mouseleave", () => {
  isPaused = false;
});