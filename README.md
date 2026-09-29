# Cooltivo

Diario di coltivazione personale. Web app installabile, funziona offline.

- **Giardino**: elenco delle piante con la fase in corso e la prossima prevista.
- **Editor**: struttura di ogni pianta (fasi, icone, tipi di fase, durate previste).
- **Diario**: date di osservazione, note, insetti, temperature e luce; Panoramica con previsioni.
- **Cicli**: "Chiudi ciclo" mostra un riepilogo e archivia il ciclo; il nuovo parte dalla data di chiusura. Se il nuovo ciclo è ancora vuoto si può riaprire il precedente. Nei cicli archiviati si possono ancora aggiungere ed eliminare foto.

## Dati e privacy

Tutti i dati restano nel browser del dispositivo su cui li inserisci. Nessun server, nessun account.
Per passare una pianta dal PC al telefono si usa **Invia al telefono**: la struttura viaggia dentro il link
(dopo il `#`), che non viene mai inviato al server. I font sono inclusi nell'app: nessuna richiesta a Google.

Salva ogni tanto un **backup** dal Giardino (Esporta backup): è un file `.json` che puoi reimportare.

## File

- `index.html`: l'app
- `manifest.webmanifest`, `icons/`: installazione su Android
- `sw.js`: funzionamento offline
- `fonts/`: Instrument Serif, Overlock, Orbitron, Roboto (SIL Open Font License)

Librerie incluse: Tailwind CSS (MIT), icone Lucide (ISC), qrcode-generator (MIT).
