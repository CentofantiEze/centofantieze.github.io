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
          description: "All my code is open source and available on GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
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
          description: "A gallery of my paintings and artwork.",
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
            },},{id: "projects-etretat",
          title: 'Etretat',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_Etretat.html";
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
              window.location.href = "/projects/18_Marinero%20copy%202.html";
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
            },},{id: "projects-girasoles",
          title: 'Girasoles',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_Girasoles.html";
            },},{id: "projects-glenn-gould",
          title: 'Glenn Gould',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_Glenn_gould.html";
            },},{id: "projects-embarcaciones",
          title: 'Embarcaciones',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Embarcaciones.html";
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
            },},{id: "projects-lucerne",
          title: 'Lucerne',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_Lucerne.html";
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
          window.open("https://www.linkedin.com/in/ezequiel-centofanti-4404b7189", "_blank");
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
