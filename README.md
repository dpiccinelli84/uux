# Salute Serena

Questo progetto è un prototipo di applicazione web, sviluppato nell'ambito del corso UUXD 2025, che mira a semplificare il processo di prenotazione di visite mediche per un pubblico di utenti anziani, spesso a disagio con la tecnologia.

L'obiettivo è trasformare un'esperienza potenzialmente frustrante in un processo guidato, semplice e rassicurante, riducendo la necessità di digitazione attraverso la scansione di tessere sanitarie e ricette mediche.

## Tecnologie Utilizzate

- **Framework:** React
- **Build Tool:** Vite
- **Hosting:** Netlify

---

## Sviluppo in Locale

Per avviare l'applicazione sul proprio computer, seguire questi passaggi dalla cartella `salute-serena`:

1.  **Installare le dipendenze** (necessario solo la prima volta):
    ```bash
    npm install
    ```

2.  **Avviare il server di sviluppo:**
    ```bash
    npm run dev
    ```

L'applicazione sarà visibile nel browser all'indirizzo `http://localhost:5173` (o un'altra porta indicata nel terminale).

---

## Pubblicazione Online (Deploy su Netlify)

Il prototipo è ospitato su Netlify e può essere aggiornato seguendo questa procedura.

### Informazioni del Sito Netlify

- **Nome del Sito:** `salute-serena-dave-project`
- **URL di Produzione:** [https://salute-serena-dave-project.netlify.app](https://salute-serena-dave-project.netlify.app)
- **ID del Sito:** `700c520d-9fed-40cf-ad2f-d1f9a8e4c791`

### Procedura di Deploy

1.  **Creare la Build di Produzione:**
    Questo comando genera una versione ottimizzata del sito nella cartella `dist/`.
    ```bash
    npm run build
    ```

2.  **Pubblicare la Nuova Versione:**
    Questo comando carica il contenuto della cartella `dist/` su Netlify. Per evitare problemi di autenticazione o di collegamento del progetto, si consiglia di usare il metodo con l'ID del sito, che è il più robusto.

    ```bash
    npx netlify deploy --prod --dir=dist --site=700c520d-9fed-40cf-ad2f-d1f9a8e4c791
    ```

Al termine del comando, la nuova versione sarà immediatamente disponibile all'URL di produzione.