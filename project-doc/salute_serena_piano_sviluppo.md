### **Piano di Sviluppo per il Prototipo "Salute Serena" (v2)**

Questo documento riassume i passaggi per trasformare il progetto di design in un prototipo web funzionante.

1.  **Scelta della Tecnologia (FATTO)**
    *   **Linguaggio/Libreria:** JavaScript con **React**.
    *   **Styling:** CSS personalizzato (`App.css`).
    *   **Ambiente di Sviluppo:** **Vite**.

2.  **Setup del Progetto (FATTO)**
    *   Creata la struttura del progetto con `npm create vite`.
    *   Installate le dipendenze con `npm install`.

3.  **Sviluppo dei Componenti React (FATTO)**
    *   **Obiettivo:** Trasformare ogni wireframe in un componente React.
    *   **Stato:** Completato.
    *   **Componenti Creati:**
        *   `App.jsx`: Gestisce la navigazione principale (schede in basso).
        *   `BookingFlow.jsx`: Gestisce il flusso di prenotazione a 6 passi.
        *   `WelcomeScreen.jsx` (interno a `BookingFlow.jsx`).
        *   `ScanIdCard.jsx`, `ScanRecipe.jsx`, `SelectDateTime.jsx`, `Summary.jsx`, `Confirmation.jsx`.
        *   `Appointments.jsx`: Schermata "I Miei Appuntamenti".
        *   `Help.jsx`: Schermata "Aiuto".

4.  **Logica di Navigazione (FATTO)**
    *   **Obiettivo:** Permettere all'utente di navigare tra le schermate.
    *   **Stato:** Completato.
    *   **Implementazione:**
        *   La navigazione principale tra le schede ("Prenota", "Appuntamenti", "Aiuto") è gestita in `App.jsx`.
        *   La navigazione sequenziale del processo di prenotazione è gestita in `BookingFlow.jsx`.

5.  **Pubblicazione Online del Prototipo (FATTO)**
    *   **Obiettivo:** Rendere il prototipo accessibile tramite un link web.
    *   **Stato:** Completato.
    *   **Servizio Usato:** Netlify.
    *   **URL Prototipo:** **https://salute-serena-dave-project.netlify.app**

6.  **Conduzione dei Test con Utenti Reali (DA FARE)**
    *   **Obiettivo:** Validare il design con il target di riferimento.
    *   **Azione:** Usare il link del prototipo per condurre i test seguendo il piano definito in `salute_serena_piano_valutazione.txt`.

### **7. Come Rilasciare una Nuova Versione (Deploy)**

Per aggiornare il prototipo online dopo aver fatto delle modifiche al codice, segui questi due passaggi dalla cartella principale del progetto (`salute-serena`):

1.  **Crea la nuova versione "di produzione" del sito:**
    ```bash
    npm run build
    ```
    Questo comando aggiornerà la cartella `dist` con le ultime modifiche.

2.  **Pubblica la nuova versione su Netlify:**
    ```bash
    npx netlify deploy --prod --dir=dist
    ```
    Questo comando caricherà il contenuto aggiornato della cartella `dist` online. Attendi la fine del processo e il tuo sito sarà aggiornato.
