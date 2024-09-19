import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations = {
    en: {
      "aboutMeHeader": "About Me",
      "aboutMeText1": "I am a Front-end developer from Leißling, Germany. I help designers and companies to bring their ideas to real life. Creativity and logical thinking are skills that I have developed to connect ideas into quality products.",
      "aboutMeText2": "If you think I’d be a good match for your projects, contact me!",
      "location": "Located in Leißling",
      "remoteWork": "Open to remote work",
      "headerLogoAltText": "Logo",
      "aboutMeLink": "About Me",
      "skillsLink": "Skills",
      "portfolioLink": "Portfolio",
      "mobileMenuButtonAltText": "Burger Menu",
      "deButtonText": "DE",
      "enButtonText": "EN",
      "frontend": "Frontend",
      "developer": "Developer",
      "name": "Maximilian Bendel",
      "email": "max.bendel1996@gmail.com",
      "contactlink": "Contact",
      "scrollDown": {
        "span1": "Scroll",
        "span2": "Down"
      },
      "skillsSection": {
        "headline": "My Skills",
        "notFoundText": "Can't find the skill you're looking for?",
        "contactLinkText": "Contact",
        "learningText": "I'm always ready to learn!"
      },
      "portfolioSection": {
        "headline": "Portfolio",
        "description": "Feel free to explore my latest frontend projects and check out their code.",
        "githubLinkText": "Github",
        "liveTestLinkText": "Live Test",
        "projects": [
          {
            "id": "01/02",
            "title": "Join",
            "technologies": "HTML | CSS | JavaScript | Firebase",
            "description": "Task management web app for organizing multiple users, inspired by the Kanban system. Allows task creation and management with drag-and-drop functionality.",
            "githubLink": "https://github.com/MaximilianBendel/Join-Projekt",
            "liveTestLink": "https://join.maximilian-bendel.de/",
            "imgSrc": "assets/images/images_portfolio/join-project.png",
            "arrowImgSrc": "assets/images/images_portfolio/arrow-portfolio.png"
          },
          {
            "id": "02/02",
            "title": "El Pollo Loco",
            "technologies": "JavaScript | HTML | CSS",
            "description": "Web browser game with object-oriented programming based on HTML Canvas.",
            "githubLink": "https://github.com/MaximilianBendel/Ell-Pollo-Loco",
            "liveTestLink": "https://elpolloloco.maximilian-bendel.de",
            "imgSrc": "assets/images/images_portfolio/ell-pollo-loco-png.png",
            "arrowImgSrc": "assets/images/images_portfolio/arrow-portfolio.png"
          }
        ]
      },
      "form": {
        "headline": "Contact",
        "boxBeforeForm": {
          "headline1": "Want to discuss a project?",
          "headline2": "Send me a message and let's get started on the project!"
        },
        "form": {
          "name": {
            "label": "Name",
            "placeholder": "Enter your name",
            "error": "Please enter your first and last name"
          },
          "email": {
            "label": "Email",
            "placeholder": "Enter your email address",
            "error": "Please enter your email address"
          },
          "message": {
            "label": "Message",
            "placeholder": "Enter your message",
            "error": "Please enter your message"
          },
          "privacy": {
            "label1": "I have read the",
            "label2": "and agree to the processing of my data as described.",
            "error": "Please accept the privacy policy",
            "linkLegalNotice": "Privacy Policy"
          }

        },
        "submit": "Send message",
        "feedback": {
          "success": "Your message has been sent successfully.",
          "error": "There was an error sending your message."
        }
      },
        "impressum": {
          "headline": "Legal Notice",
          "address": "Maximilian Bendel<br />Buchenweg, 12<br />06667 Weißenfels",
          "contact": {
            "headline": "Contact",
            "phone": "Phone: 01776697248",
            "email": "Email: maxbendel1996@gmail.com"
          },
          "editorial_responsibility": {
            "headline": "Editorial Responsibility",
            "name": "Maximilian Bendel"
          },
          "source": {
            "text": "Source: ",
            "link": "https://www.e-recht24.de"
          },
          "privacy_policy": {
            "headline": "Privacy Policy",
            "section1": {
              "title": "1. Privacy at a Glance",
              "general_info": {
                "headline": "General Information",
                "text": "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. For detailed information on the topic of data protection, please refer to our privacy policy listed below this text."
              },
              "data_collection": {
                "headline": "Data Collection on this Website",
                "responsible": {
                  "headline": "Who is responsible for data collection on this website?",
                  "text": "Data processing on this website is carried out by the website operator. You can find their contact details in the section \"Notice on the responsible entity\" in this privacy policy."
                },
                "data_how": {
                  "headline": "How do we collect your data?",
                  "text": [
                    "Your data is collected, firstly, by you providing it to us. This could be data that you enter into a contact form.",
                    "Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g., internet browser, operating system, or the time of the page visit). This data is collected automatically as soon as you enter this website."
                  ]
                },
                "data_why": {
                  "headline": "What do we use your data for?",
                  "text": "Part of the data is collected to ensure the website is provided without errors. Other data can be used to analyze your user behavior."
                },
                "rights": {
                  "headline": "What rights do you have regarding your data?",
                  "text": "You have the right to obtain information about the origin, recipients, and purpose of your stored personal data at any time free of charge. You also have the right to request the correction or deletion of this data."
                }
              }
            },
            "hosting": {
              "headline": "2. Hosting",
              "text": "We host the content of our website with the following provider:"
            },
            "images_usage": {
              "headline": "3. Use of Images",
              "text": "This website uses an image created with the help of ChatGPT."
            },
            "additional_notes": {
              "headline": "4. Additional Notes",
              "text": "If you have any questions about the use of images or other content on this website, you can contact the website operator at any time."
            },
            "hosting_provider": {
              "headline": "All-Inkl",
              "text": "The provider is ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf. Details can be found in the privacy policy of All-Inkl."
            }
          }
        },
        "footer": {
            "legalnotice": "Legal Notice"
          }

    },
    de: {
      "aboutMeHeader": "Über mich",
      "aboutMeText1": "Ich bin ein Frontend-Entwickler aus Leißling, Deutschland. Ich helfe Designern und Unternehmen dabei, ihre Ideen zum Leben zu erwecken. Kreativität und logisches Denken sind Fähigkeiten, die ich entwickelt habe, um Ideen in hochwertige Produkte zu verwandeln.",
      "aboutMeText2": "Wenn Sie glauben, dass ich gut zu Ihren Projekten passen würde, kontaktieren Sie mich!",
      "location": "Wohnhaft in Leißling",
      "remoteWork": "Offen für Remote-Arbeit",
      "headerLogoAltText": "Logo",
      "aboutMeLink": "Über mich",
      "skillsLink": "Skills",
      "portfolioLink": "Portfolio",
      "mobileMenuButtonAltText": "Burger-Menü",
      "deButtonText": "DE",
      "enButtonText": "EN",
      "frontend": "Frontend",
      "developer": "Entwickler",
      "name": "Maximilian Bendel",
      "contactlink": "Kontakt",
      "email": "max.bendel1996@gmail.com",
      "scrollDown": {
        "span1": "Scrollen",
        "span2": "Nach unten"
      },
      "skillsSection": {
        "headline": "Meine Skills",
        "notFoundText": "Sie finden die gewünschte Fähigkeit nicht?",
        "contactLinkText": "Kontakt",
        "learningText": "Ich bin immer bereit zu lernen!"
      },
      "portfolioSection": {
        "headline": "Portfolio",
        "description": "Probieren Sie gerne meine neuesten Frontend-Projekte aus und sehen Sie sich deren Code an.",
        "githubLinkText": "Github",
        "liveTestLinkText": "Live Test",
        "projects": [
          {
            "id": "01/02",
            "title": "Join",
            "technologies": "HTML | CSS | JavaScript | Firebase",
            "description": "Task Management Web-App zur Organisation mehrerer Anwender, inspiriert vom Kanban-System. Erlaubt die Erstellung und Verwaltung von Aufgaben mit Drag´n Drop-Funktionalität.",
            "githubLink": "https://github.com/MaximilianBendel/Join-Projekt",
            "liveTestLink": "https://join.maximilian-bendel.de/",
            "imgSrc": "assets/images/images_portfolio/join-project.png",
            "arrowImgSrc": "assets/images/images_portfolio/arrow-portfolio.png"
          },
          {
            "id": "02/02",
            "title": "El Pollo Loco",
            "technologies": "JavaScript | HTML | CSS",
            "description": "Web-Browser Spiel mit objektorientierter Programmierung, basierend auf HTML Canvas.",
            "githubLink": "https://github.com/MaximilianBendel/Ell-Pollo-Loco",
            "liveTestLink": "https://elpolloloco.maximilian-bendel.de",
            "imgSrc": "assets/images/images_portfolio/ell-pollo-loco-png.png",
            "arrowImgSrc": "assets/images/images_portfolio/arrow-portfolio.png"
          }
        ],
      },
      "form": {
        "headline": "Kontakt",
        "boxBeforeForm": {
          "headline1": "Möchten Sie ein Projekt besprechen?",
          "headline2": "Schicken Sie mir eine Nachricht und lassen Sie uns das Projekt angehen!"
        },
        "form": {
          "name": {
            "label": "Name",
            "placeholder": "Geben Sie Ihren Namen ein",
            "error": "Bitte geben Sie Ihren Vor- und Nachnamen ein"
          },
          "email": {
            "label": "Email",
            "placeholder": "Geben Sie Ihre E-Mail-Adresse ein",
            "error": "Bitte geben Sie Ihre E-Mail-Adresse ein"
          },
          "message": {
            "label": "Nachricht",
            "placeholder": "Geben Sie Ihre Nachricht ein",
            "error": "Bitte geben Sie Ihre Nachricht ein"
          },
          "privacy": {
            "label1": "Ich habe die",
            "label2": "gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.",
            "error": "Bitte akzeptieren Sie die Datenschutzerklärung",
            "linkLegalNotice": "Datenschutzerklärung"
          },
        },
        "submit": "Nachricht senden",
        "feedback": {
          "success": "Ihre Nachricht wurde erfolgreich gesendet.",
          "error": "Es gab ein Problem beim Senden Ihrer Nachricht."
        }
      },
        "impressum": {
          "headline": "Impressum",
          "address": "Maximilian Bendel<br />Buchenweg, 12<br />06667 Weißenfels",
          "contact": {
            "headline": "Kontakt",
            "phone": "Telefon: 01776697248",
            "email": "E-Mail: maxbendel1996@gmail.com"
          },
          "editorial_responsibility": {
            "headline": "Redaktionell verantwortlich",
            "name": "Maximilian Bendel"
          },
          "source": {
            "text": "Quelle: ",
            "link": "https://www.e-recht24.de"
          },
          "privacy_policy": {
            "headline": "Datenschutzerklärung",
            "section1": {
              "title": "1. Datenschutz auf einen Blick",
              "general_info": {
                "headline": "Allgemeine Hinweise",
                "text": "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
              },
              "data_collection": {
                "headline": "Datenerfassung auf dieser Website",
                "responsible": {
                  "headline": "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
                  "text": "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen."
                },
                "data_how": {
                  "headline": "Wie erfassen wir Ihre Daten?",
                  "text": [
                    "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
                    "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
                  ]
                },
                "data_why": {
                  "headline": "Wofür nutzen wir Ihre Daten?",
                  "text": "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."
                },
                "rights": {
                  "headline": "Welche Rechte haben Sie bezüglich Ihrer Daten?",
                  "text": "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen."
                }
              }
            },
            "hosting": {
              "headline": "2. Hosting",
              "text": "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:"
            },
            "images_usage": {
              "headline": "3. Verwendung von Bildern",
              "text": "Auf dieser Website wird ein Bild verwendet, das mit Hilfe von ChatGPT erstellt wurde."
            },
            "additional_notes": {
              "headline": "4. Weitere Hinweise",
              "text": "Wenn Sie Fragen zur Nutzung von Bildern oder sonstigen Inhalten auf dieser Website haben, können Sie sich jederzeit an den Websitebetreiber wenden."
            },
            "hosting_provider": {
              "headline": "All-Inkl",
              "text": "Anbieter ist die ALL-INKL.COM - Neue Medien Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf. Details entnehmen Sie der Datenschutzerklärung von All-Inkl."
            }
          }
        },
          "footer": {
            "legalnotice": "Datenschutzerklärung"
          }
    }
  };

  private currentLanguage: 'en' | 'de' = 'de';
  private languageChange = new BehaviorSubject<void>(void 0);

  constructor() {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'de';
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }
  }

  getTranslations() {
    return this.translations[this.currentLanguage];
  }

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);  // Speichern der Sprache im LocalStorage
    this.languageChange.next();  // Notify subscribers about language change
  }

  getLanguageChange() {
    return this.languageChange.asObservable();
  }
}
