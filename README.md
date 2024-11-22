# Aplikacja do Zarządzania Wydarzeniami

Aplikacja typu single-page application (SPA) zbudowana w **Vue.js** i stylizowana za pomocą **Bootstrap**, służąca do zarządzania wydarzeniami i przypisanymi do nich kategoriami. Aplikacja umożliwia efektywne tworzenie, edytowanie, przeglądanie, sortowanie oraz zarządzanie wydarzeniami jak i przypisanymi do nich kategoriami.  

---

## Spis treści
- [Wymagania](#wymagania)
- [Instalacja](#instalacja)
- [Uruchamianie aplikacji](#uruchamianie-aplikacji)
- [Struktura katalogów aplikacji](#struktura-katalogów-aplikacji)
- [Funkcjonalności](#funkcjonalności)
- [Wykorzystywane frameworki](#wykorzystywane-frameworki)
- [Opis kodu źródłowego](#opis-kodu-źródłowego)
- [Zrzuty ekranu](#zrzuty-ekranu)
- [Drukowanie zawartości pamiętnika](#drukowanie-zawartości-pamiętnika)


## Wymagania

Aby uruchomić aplikację lokalnie, wymagana jest instalacja następujących narzędzi:

1. **Node.js**  
   Minimalna wymagana wersja: `16.x`  
   Pobierz i zainstaluj Node.js ze strony [https://nodejs.org](https://nodejs.org).
   Sprawdź, czy Node.js został zainstalowany poprawnie, uruchamiając polecenie:  
   ```bash
   node -v

2. **npm** (Node Package Manager)  
   npm jest automatycznie instalowany razem z Node.js. Minimalna wersja: `8.x`  
   Sprawdź, czy npm został zainstalowany poprawnie, uruchamiając polecenie:  
   ```bash
   npm -v

3. **Git** \
   Narzędzie używane do zarządzania wersjami kodu.
   Pobierz i zainstaluj Git ze strony https://git-scm.com.

---

## Instalacja

1. Sklonuj repozytorium:  
   ```bash
   git clone https://github.com/Michal-Marciniak/project_2.git

2. Przejdź do katalogu projektu:  
   ```bash
   cd project_2

3. Zainstaluj zależności:  
   ```bash
   npm install

---

## Uruchamianie aplikacji

1. Uruchom polecenie:  
   ```bash
   npm run serve
   
---

## Struktura katalogów aplikacji

├── node_modules/         - **Automatycznie generowany folder z zależnościami NPM** \
├── public/               - **Zasoby publiczne dostępne bezpośrednio (np. index.html)** \
├── src/ \
│   ├── assets/               - **Zasoby statyczne (obrazy, style itp.)** \
│   ├── components/           - **Komponenty Vue (EventsList, EventForm itp.)** \
│   ├── views/                - **Widoki aplikacji (AddEvent, EditCategory itp.)** \
│   ├── App.vue               - **Główny komponent aplikacji** \
│   ├── router.js             - **Konfiguracja Vue Router** \
│   └── main.js               - **Punkt wejściowy aplikacji** \
├── package.json          - **Plik konfiguracyjny projektu (zależności, skrypty)** \
└── README.md             - **Dokumentacja projektu (instrukcje instalacji, używania itp.)**

---

## Funkcjonalności

- **Zarządzanie wydarzeniami**  
  - Dodawanie, wyświetlanie, edytowanie, usuwanie wydarzeń (CRUD)
  - Przypisywanie kategorii do wydarzeń w celu lepszej ich organizacji
  - Możliwość wydruku listy wydarzeń (bez zbędnych elementów UI typu navbar, buttony itp.)
  - Zapisywanie wydarzeń w pamięci podręcznej przeglądarki (Local Storage)
  - Brak możliwości dodania wydarzenia, którego data końcowa byłaby wcześniejsza niż jego data początkowa

- **Zarządzanie kategoriami**  
  - Dodawanie, wyświetlanie, edytowanie, usuwanie kategorii (CRUD) 
  - Walidacja kategorii powiązanych z wydarzeniami:
    - brak możliwości dodania kategorii o istniejącej już nazwie
    - brak możliwości dodanie kategorii bez nazwy
    - brak możliwości usunięcia kategorii, przypisanej już do jakiegoś wydarzenia
  - Zapisywanie kategorii w pamięci podręcznej przeglądarki (Local Storage)

- **Sortowanie oraz filtrowanie wydarzeń**  
  - Sortowanie wydarzeń według:  
    - Nazwy  
    - Daty rozpoczęcia (rosnąco / malejąco)  
    - Daty zakończenia (rosnąco / malejąco)  
    - Przypisanej kategorii

  - Filtrowanie wydarzeń według zakresu dat (od / do)

- **Interfejs użytkownika**  
  - Responsywny design oparty na **Bootstrapie**
  - Interaktywne rozwijane listy do sortowania i filtrowania wydarzeń
  - Możliwość zobaczenia wszystkich szczegółów danego wydarzenia, po kliknięciu go na liście wydarzeń (w tym również opcjonalnie dodanego do niego zdjęcia)
  - Wyświetlanie popup'ów informacyjnych (Sukces / Ostrzeżenie) związanych z akcjami wykonywanymi przez użytkownika
    - Dodanie / edycja / usunięcie wydarzenia
    - Dodanie / edycja / usunięcie kategorii
    - Wykrywanie błędów walidacji na formularzach

---

## Wykorzystywane frameworki

- **Framework Frontend'owy**: [Vue.js](https://vuejs.org/)  
- **Framework UI**: [Bootstrap](https://getbootstrap.com/)   

---

## Opis kodu źródłowego

---

## Zrzuty ekranu

**Strona główna / Lista wydarzeń**

![image](https://github.com/user-attachments/assets/920f99b0-bc89-445f-a05e-9e9682288a93)

**Lista kategorii**

![image](https://github.com/user-attachments/assets/e7c9ebd8-7119-40e6-aa46-4d462732f2a5)

**Formularz dodawania wydarzenia**

![image](https://github.com/user-attachments/assets/800cebc0-483a-4934-b8d4-0882d0dc10f2)

**Formularz dodawania kategorii**

![image](https://github.com/user-attachments/assets/99bbb8c8-6ae4-4fb4-b3e7-787a18d07224)

**Sortowanie oraz filtrowanie wydarzeń**

![image](https://github.com/user-attachments/assets/b0327c1c-2e0a-44f2-9165-fb4b395057d3)

---

**Popup'y**

![image](https://github.com/user-attachments/assets/e3196266-01a9-4693-885e-c9aceadc34be)
![image](https://github.com/user-attachments/assets/c707c93f-cb7d-4fb4-aa88-b4c827107f2d)
![image](https://github.com/user-attachments/assets/68b130bc-51b1-4e67-bae1-db9d93de9d01)


---

## Drukowanie zawartości pamiętnika

Na wydruku listy wydarzeń / szczegółów danego wydarzenia usunięto nadmiarowe elementy typu: navbar, czy przyciski do Edycji/Usuwania wydarzeń, poprzez dodanie do elementów strony odpowieniej klasy z frameworka Bootstrap `d-print-none`

**Wydruk listy wydarzeń**

![image](https://github.com/user-attachments/assets/1bce40bf-b422-4776-a008-73cf90e5066b)

**Wydruk szczegółów wydarzenia**

![image](https://github.com/user-attachments/assets/0f3c37bf-6b14-4c4e-b69c-88ea7ceb43b7)

---
