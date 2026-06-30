// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/github.com/CentofantiEze";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Drawing and painting are two of my favorite ways to spend my free time. This gallery showcases a selection of my work, inspired by the great masters I admire, as well as the moments and places I’ve captured on paper.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-pescadores",
          title: 'Pescadores',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_pescadores.html";
            },},{id: "projects-caballero",
          title: 'Caballero',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_Caballero_2.html";
            },},{id: "projects-pont-neuf",
          title: 'Pont Neuf',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_Pont_Neuf.html";
            },},{id: "projects-puerto-de-heraklion",
          title: 'Puerto de Heraklion',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_Puerto_de_Creta.html";
            },},{id: "projects-pilares-de-la-creación",
          title: 'Pilares de la Creación',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_Pilares_de_la_creacion.html";
            },},{id: "projects-pilares-de-la-creación",
          title: 'Pilares de la Creación',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_Pilares_de_la_creacion_sombra.html";
            },},{id: "projects-hockney",
          title: 'Hockney',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_Hockney.html";
            },},{id: "projects-martin-y-fabian",
          title: 'Martin y Fabian',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_Martin_y_Fabian.html";
            },},{id: "projects-pescador",
          title: 'Pescador',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_Marinero.html";
            },},{id: "projects-terres-du-tco",
          title: 'Terres du TCO',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_TCO_terres.html";
            },},{id: "projects-la-cosecha",
          title: 'La Cosecha',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_La_cosecha.html";
            },},{id: "projects-flamencos",
          title: 'Flamencos',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_Flamencos.html";
            },},{id: "projects-hondarribia",
          title: 'Hondarribia',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_Hondarribia.html";
            },},{id: "projects-koln",
          title: 'Koln',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22_Koln.html";
            },},{id: "projects-monet-saint-lazare",
          title: 'Monet Saint Lazare',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/23_Monet_Saint_Lazare.html";
            },},{id: "projects-venecia-i",
          title: 'Venecia I',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24_Venecia_sombras.html";
            },},{id: "projects-venecia-ii",
          title: 'Venecia II',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/25_Venecia_color.html";
            },},{id: "projects-notre-dame",
          title: 'Notre Dame',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/26_Notre_Dame.html";
            },},{id: "projects-girasoles-de-monet",
          title: 'Girasoles de Monet',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/27_Girasoles_Monet.html";
            },},{id: "projects-ajedrez",
          title: 'Ajedrez',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/28_Ajedrez.html";
            },},{id: "projects-dora-maar",
          title: 'Dora Maar',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/29_Picasso.html";
            },},{id: "projects-girasoles",
          title: 'Girasoles',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_Girasoles.html";
            },},{id: "projects-punta-del-diablo",
          title: 'Punta del Diablo',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/30_Punta_del_diablo.html";
            },},{id: "projects-pissarro",
          title: 'Pissarro',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/31_Pissarro_Pontoise.html";
            },},{id: "projects-impression-soleil-levant",
          title: 'Impression, soleil levant',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/32_Impression_soleil.html";
            },},{id: "projects-villebon",
          title: 'Villebon',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/33_Villebon.html";
            },},{id: "projects-torino",
          title: 'Torino',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/34_Torino.html";
            },},{id: "projects-bateau-phare",
          title: 'Bateau Phare',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/35_Bateau_Phare.html";
            },},{id: "projects-jeux-olympiques",
          title: 'Jeux Olympiques',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/36_Jeux_Olympiques_Paris.html";
            },},{id: "projects-caracoles",
          title: 'Caracoles',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/37_Caracoles.html";
            },},{id: "projects-telas",
          title: 'Telas',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/38_Telas.html";
            },},{id: "projects-ballenato",
          title: 'Ballenato',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/39_Ballenato.html";
            },},{id: "projects-quartier-chinois",
          title: 'Quartier chinois',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Quartier_chinois.html";
            },},{id: "projects-almendro-en-flor",
          title: 'Almendro en flor',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/40_Van_Gogh_Almendro.html";
            },},{id: "projects-vallorcine-riviere",
          title: 'Vallorcine Riviere',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/41_Vallorcine_Riviere.html";
            },},{id: "projects-arles-gaugin",
          title: 'Arles Gaugin',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/42_Arles_Gaugin.html";
            },},{id: "projects-venus-et-adonis",
          title: 'Venus et Adonis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/43_Venus_et_Adonis.html";
            },},{id: "projects-gaffel-am-dom",
          title: 'Gaffel am Dom',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/44_Gaffel_am_Dom.html";
            },},{id: "projects-caballero-1",
          title: 'Caballero 1',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/45_Caballero_1.html";
            },},{id: "projects-olivos",
          title: 'Olivos',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/46_Olivos.html";
            },},{id: "projects-santa-maria-della-salute",
          title: 'Santa Maria della Salute',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/47_Santa_Maria_della_Salute.html";
            },},{id: "projects-agios-minas",
          title: 'Agios Minas',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/48_Agios_minas.html";
            },},{id: "projects-amigos",
          title: 'Amigos',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/49_Amigos.html";
            },},{id: "projects-embarcaciones",
          title: 'Embarcaciones',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Embarcaciones.html";
            },},{id: "projects-etretat",
          title: 'Etretat',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/50_Etretat.html";
            },},{id: "projects-kokoschka",
          title: 'Kokoschka',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/51_Kokoschka.html";
            },},{id: "projects-palmar-de-rocha",
          title: 'Palmar de Rocha',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/52_Palmar_Rocha.html";
            },},{id: "projects-pont-de-langlois",
          title: 'Pont de Langlois',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/53_Van_Gogh_pont_langlois.html";
            },},{id: "projects-engstlensee",
          title: 'Engstlensee',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/54_Lucerne.html";
            },},{id: "projects-campo-de-girasoles",
          title: 'Campo de girasoles',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_Brest.html";
            },},{id: "projects-el-beso",
          title: 'El Beso',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_El_beso.html";
            },},{id: "projects-piano-vache",
          title: 'Piano Vache',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_Le_piano_vache.html";
            },},{id: "projects-horsehead-nebula",
          title: 'Horsehead Nebula',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_Horsehead_nebula.html";
            },},{id: "projects-jarron-con-flores",
          title: 'Jarron con flores',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_Flores.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%7A%65%63%65%6E%74%6F%66%61%6E%74%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/CentofantiEze", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ezequiel-centofanti", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-8461-8451", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
