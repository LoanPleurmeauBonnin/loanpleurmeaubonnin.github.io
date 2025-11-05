      // Contenu traduit
      const TRANSLATIONS = {
          fr: {
              nav_about: "À propos",
              nav_tools: "Outils",
              nav_contact: "Contact",
              contact_me: "Contactez‑moi",
              about_title: "À propos",
              tools_title: "Outils & apps par domaine",
              dev_title: "Développement Web",
              dev_list: "VS Code · Git · Chrome DevTools · React · Node.js",
              design_title: "Design & UX",
              design_list: "Figma · Adobe XD · Miro · Hotjar",
              data_title: "Données & IA",
              data_list: "Python · Jupyter · pandas · scikit‑learn · Colab",
              mobile_title: "Mobile",
              mobile_list: "Flutter · Android Studio · Xcode",
              contact_title: "Contact",
              made_with: "Made with HTML & CSS",
              hero_title: "Prénom Nom — Étudiant·e en [Domaine]",
              hero_sub: "J'étudie [spécialité]. Je crée des applications / designs axés sur l'usager et l'efficacité.",
              about_par: "Étudiant·e en [nom du parcours] à [école/université], j'explore [domaines étudiés — ex : web, mobile, IA]. Mon approche : prototypage rapide, tests utilisateurs et code propre. Disponible pour stages et projets.",
              cv_text: "Télécharger CV",
              site_name: "Prénom Nom"
          },
          en: {
              nav_about: "About",
              nav_tools: "Tools",
              nav_contact: "Contact",
              contact_me: "Contact me",
              about_title: "About",
              tools_title: "Tools & apps by domain",
              dev_title: "Web Development",
              dev_list: "VS Code · Git · Chrome DevTools · React · Node.js",
              design_title: "Design & UX",
              design_list: "Figma · Adobe XD · Miro · Hotjar",
              data_title: "Data & AI",
              data_list: "Python · Jupyter · pandas · scikit‑learn · Colab",
              mobile_title: "Mobile",
              mobile_list: "Flutter · Android Studio · Xcode",
              contact_title: "Contact",
              made_with: "Made with HTML & CSS",
              hero_title: "FirstName LastName — Student in [Field]",
              hero_sub: "I study [specialty]. I build user-centered apps and designs focused on efficiency.",
              about_par: "Student in [program] at [school/university], exploring [areas — e.g. web, mobile, AI]. My approach: rapid prototyping, user testing and clean code. Available for internships and projects.",
              cv_text: "Download CV",
              site_name: "FirstName LastName"
          }
      };

      // Initialisation
      const defaultLang = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'fr');
      let lang = defaultLang;

      const applyTranslations = () => {
          const t = TRANSLATIONS[lang];
          document.querySelectorAll('[data-i18n]').forEach(el => {
              const key = el.getAttribute('data-i18n');
              if (t[key]) el.textContent = t[key];
          });
          // Fields without data-i18n
          document.getElementById('hero-title').textContent = t.hero_title;
          document.getElementById('hero-sub').textContent = t.hero_sub;
          document.getElementById('about-par').textContent = t.about_par;
          document.getElementById('cv-link').textContent = t.cv_text;
          document.getElementById('site-name').textContent = t.site_name;
          document.documentElement.lang = (lang === 'fr' ? 'fr' : 'en');
          // Label language switch
          document.getElementById('lang-switch').textContent = (lang === 'fr' ? 'FR · EN' : 'EN · FR');
      };

      document.getElementById('lang-switch').addEventListener('click', () => {
          lang = (lang === 'fr') ? 'en' : 'fr';
          localStorage.setItem('lang', lang);
          applyTranslations();
      });

      // Apply once on load
      applyTranslations();
