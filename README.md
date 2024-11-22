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

Aplikacja zarządza wydarzeniami i kategoriami z wykorzystaniem komponentów wielokrotnego użytku i dynamicznego przekazywania danych oraz zdarzeń pomiędzy komponentami. Główna logika zarządzania danymi znajduje się w pliku `App.vue`, gdzie zaimplementowano metody obsługujące dodawanie, edycję, usuwanie oraz sortowanie danych.

---

### **Emitowane zdarzenia (eventy)**

W aplikacji zdefiniowane są eventy emitowane przez komponenty i obsługiwane przez główny komponent `App.vue`. Są one przypisane w `@click`, `@input` oraz w innych miejscach.

#### **Lista eventów:**
1. **Zarządzanie wydarzeniami:**
   - `@add-event`: Dodaje nowe wydarzenie.
   - `@update-event`: Aktualizuje istniejące wydarzenie.
   - `@delete-event`: Usuwa wydarzenie.
   - `@sorted-events`: Aktualizuje listę wydarzeń po sortowaniu (np. według nazw lub dat).
   - `@sorted-events-date-range`: Filtruje wydarzenia według zakresu dat.

2. **Zarządzanie kategoriami:**
   - `@add-category`: Dodaje nową kategorię.
   - `@update-category`: Aktualizuje istniejącą kategorię.
   - `@delete-category`: Usuwa kategorię.

---

### **Najważniejsze funkcje w `App.vue`**

#### **1. Zarządzanie wydarzeniami:**
- **`addEvent(newEvent)`**
  - Dodaje nowe wydarzenie do listy `events`.
  - Zapisuje zaktualizowaną listę w `localStorage`.
  - Przekierowuje użytkownika na stronę główną (`/`).
  - Wyświetla powiadomienie o pomyślnym dodaniu wydarzenia.

- **`updateEvent(updatedEvent)`**
  - Znajduje wydarzenie o określonym `id` i aktualizuje jego dane.
  - Zapisuje zmiany w `localStorage`.
  - Przekierowuje użytkownika na stronę główną.
  - Wyświetla powiadomienie o pomyślnej aktualizacji.

- **`deleteEvent(eventId)`**
  - Usuwa wydarzenie na podstawie jego `id`.
  - Aktualizuje `localStorage` i przekierowuje na stronę główną.
  - Wyświetla powiadomienie o pomyślnym usunięciu wydarzenia.

#### **2. Zarządzanie kategoriami:**
- **`addCategory(newCategory)`**
  - Sprawdza unikalność nazwy kategorii oraz jej poprawność.
  - Jeśli nazwa jest unikalna i poprawna, dodaje nową kategorię z unikalnym `id` (opartym na `Date.now()`).
  - Zapisuje zaktualizowaną listę w `localStorage` i przekierowuje do `/categories`.
  - Wyświetla odpowiedni komunikat sukcesu lub błędu.

- **`updateCategory(updatedCategory)`**
  - Sprawdza unikalność nazwy oraz jej poprawność.
  - Jeśli warunki są spełnione, aktualizuje dane kategorii w `categories`.
  - Aktualizuje również nazwę kategorii w powiązanych wydarzeniach w liście `events`.
  - Zapisuje zmiany w `localStorage` i przekierowuje do `/categories`.
  - Wyświetla odpowiedni komunikat sukcesu lub błędu.

- **`deleteCategory(categoryId)`**
  - Sprawdza, czy kategoria jest powiązana z którymkolwiek wydarzeniem.
  - Jeśli nie jest używana, usuwa kategorię z listy.
  - Jeśli jest w użyciu, wyświetla komunikat o błędzie.
  - Aktualizuje zmiany w `localStorage`.

#### **3. Obsługa lokalnego przechowywania (`localStorage`):**
- **`loadData()`**
  - Ładuje dane wydarzeń i kategorii z `localStorage` przy uruchomieniu aplikacji.
  - Jeśli dane nie istnieją, używane są dane domyślne.

- **`saveEvents()`**
  - Zapisuje listę `events` do `localStorage`.

- **`saveCategories()`**
  - Zapisuje listę `categories` do `localStorage`.

#### **4. Obsługa powiadomień:**
- **`setInformationModalMessage(message, isSuccessMessage = true)`**
  - Ustawia treść wiadomości powiadomienia (`informationModalMessage`).
  - Wyświetla komunikat o sukcesie lub błędzie w zależności od parametru `isSuccessMessage`.
  - Ukrywa wiadomość po 3 sekundach.

#### **5. Sortowanie i filtrowanie wydarzeń:**
- **`updateSortedEvents(sortedEvents)`**
  - Aktualizuje listę wydarzeń na podstawie posortowanych danych.
  - Zapisuje zmiany w `localStorage`.

- **`updateSortedEventsDateRange(sortedEvents)`**
  - Aktualizuje listę wydarzeń na podstawie filtrów zakresu dat.

---

### **Najważniejsze dane aplikacji**

1. **Kategorie (`categories`)**
   - Tablica obiektów zawierająca właściwości:
     - `id`: Unikalny identyfikator kategorii.
     - `name`: Nazwa kategorii.

2. **Wydarzenia (`events`)**
   - Tablica obiektów zawierająca właściwości:
     - `id`: Unikalny identyfikator wydarzenia.
     - `name`: Nazwa wydarzenia.
     - `start_date`: Data rozpoczęcia wydarzenia.
     - `end_date`: Data zakończenia wydarzenia.
     - `event_category_id`: Identyfikator przypisanej kategorii.
     - `event_category_name`: Nazwa przypisanej kategorii.
     - `event_description`: Opis wydarzenia.
     - `event_image`: Ścieżka do obrazu wydarzenia.

### **Podsumowanie**
Kod aplikacji w `App.vue` centralizuje obsługę danych i logikę zdarzeń. Wykorzystanie eventów do komunikacji między komponentami i główną aplikacją pozwala na modularność i czytelność kodu. Funkcje zarządzające danymi są zintegrowane z `localStorage`, co umożliwia trwałe przechowywanie danych użytkownika bez potrzeby korzystania z backendu. Obsługa powiadomień, sortowania i filtrowania ułatwia korzystanie z aplikacji oraz poprawia jej użyteczność.

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

**Wydarzenia**

![image](https://github.com/user-attachments/assets/e3196266-01a9-4693-885e-c9aceadc34be)
![image](https://github.com/user-attachments/assets/c707c93f-cb7d-4fb4-aa88-b4c827107f2d)
![image](https://github.com/user-attachments/assets/68b130bc-51b1-4e67-bae1-db9d93de9d01)

**Kategorie**

![image](https://github.com/user-attachments/assets/0901c904-4fc7-4321-82ce-6d82e2cae217)
![image](https://github.com/user-attachments/assets/6765f20b-081e-4bf7-bc23-ae5abcbb5610)
![image](https://github.com/user-attachments/assets/89ca7da2-e392-4df1-92e4-ac3d52b3344f)

**Walidacje**
![image](https://github.com/user-attachments/assets/c0d18331-8636-43a4-9eb6-efe04eefb995)
![image](https://github.com/user-attachments/assets/d8bf4734-073f-4cf5-99a7-73f3970c1ad7)
![image](https://github.com/user-attachments/assets/86be712a-620a-46e1-a446-c1940ee0af1c)
![image](https://github.com/user-attachments/assets/01659861-f7da-4a26-a585-e12a68a8902f)

---

## Drukowanie zawartości pamiętnika

Na wydruku listy wydarzeń / szczegółów danego wydarzenia usunięto nadmiarowe elementy typu: navbar, czy przyciski do Edycji/Usuwania wydarzeń, poprzez dodanie do elementów strony odpowieniej klasy z frameworka Bootstrap `d-print-none`

**Wydruk listy wydarzeń**

![image](https://github.com/user-attachments/assets/1bce40bf-b422-4776-a008-73cf90e5066b)

**Wydruk szczegółów wydarzenia**

![image](https://github.com/user-attachments/assets/0f3c37bf-6b14-4c4e-b69c-88ea7ceb43b7)

---
