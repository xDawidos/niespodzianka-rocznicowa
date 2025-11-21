// Zmienna, która przechowuje numer aktualnie widocznego kroku
let obecnyKrok = 1;

// Zmienna, w której będziemy liczyć punkty
let punkty = 0;

// Funkcja do pokazywania odpowiedniego kroku
function pokazKrok(numerKroku) {
    // Znajdź stary aktywny krok i go ukryj
    const staryKrok = document.querySelector('.krok.aktywny');
    if (staryKrok) {
        staryKrok.classList.remove('aktywny');
    }

    // Znajdź nowy krok i go pokaż
    const nowyKrok = document.getElementById(`krok-${numerKroku}`);
    if (nowyKrok) {
        nowyKrok.classList.add('aktywny');
        obecnyKrok = numerKroku;
    }
}

// Funkcja, która obliczy ostateczny wynik
// Jest wywoływana, gdy użytkownik klika "Wyślij"
function przeliczWyniki() {
    // Resetujemy punkty, aby liczyć od zera
    punkty = 0;

    // Definiujemy poprawne odpowiedzi
    // Używamy "name" pól z HTML
    const poprawneOdpowiedzi = {
        'q1': '1097',           // Twoja poprawna odpowiedź: 1097
        'q2': '8',              // Twoja poprawna odpowiedź: 8
        'q3': '3',              // Twoja poprawna odpowiedź: 3
        'q4': 'Little Things',  // Twoja poprawna odpowiedź: C) Little Things
        'q5': '17',             // Twoja poprawna odpowiedź: B) 17
        'q6': 'kaczka',         // Twoja poprawna odpowiedź: kaczka
        'q7': ['a', 'b', 'c'],  // Specjalny przypadek, trzy odpowiedzi są poprawne
        'q8': 'tak'             // Twoja poprawna odpowiedź: tak
    };

    // Sprawdzamy każde pytanie
    
    // Pytanie 1 (q1)
    const q1_wybor = document.querySelector('input[name="q1"]:checked');
    if (q1_wybor && q1_wybor.value === poprawneOdpowiedzi.q1) {
        punkty++;
    }

    // Pytanie 2 (q2)
    const q2_wybor = document.querySelector('input[name="q2"]:checked');
    if (q2_wybor && q2_wybor.value === poprawneOdpowiedzi.q2) {
        punkty++;
    }

    // Pytanie 3 (q3)
    const q3_wybor = document.querySelector('input[name="q3"]:checked');
    if (q3_wybor && q3_wybor.value === poprawneOdpowiedzi.q3) {
        punkty++;
    }

    // Pytanie 4 (q4)
    const q4_wybor = document.querySelector('input[name="q4"]:checked');
    if (q4_wybor && q4_wybor.value === poprawneOdpowiedzi.q4) {
        punkty++;
    }

    // Pytanie 5 (q5)
    const q5_wybor = document.querySelector('input[name="q5"]:checked');
    if (q5_wybor && q5_wybor.value === poprawneOdpowiedzi.q5) {
        punkty++;
    }

    // Pytanie 6 (q6)
    const q6_wybor = document.querySelector('input[name="q6"]:checked');
    if (q6_wybor && q6_wybor.value === poprawneOdpowiedzi.q6) {
        punkty++;
    }

    // Pytanie 7 (q7) - specjalny przypadek
    const q7_wybor = document.querySelector('input[name="q7"]:checked');
    if (q7_wybor && poprawneOdpowiedzi.q7.includes(q7_wybor.value)) {
        punkty++;
    }

    // Pytanie 8 (q8)
    const q8_wybor = document.querySelector('input[name="q8"]:checked');
    if (q8_wybor && q8_wybor.value === poprawneOdpowiedzi.q8) {
        punkty++;
    }

    // Zgodnie z Twoją prośbą: "Wyślij ... liczba poprawnych odpowiedzi"
    // Wpisujemy wynik do ukrytego pola w formularzu
    const poleWyniku = document.getElementById('liczba_poprawnych');
    if (poleWyniku) {
        poleWyniku.value = `${punkty} z 8`; // Wysyłamy wynik w formacie "7 z 8"
    }

    // Informacja dla Ciebie (możesz to usunąć)
    console.log(`Końcowy wynik: ${punkty} z 8`);
    
    // Zwracamy true, aby formularz mógł się wysłać
    return true;
}

// Musimy dodać "nasłuchiwanie" na zdarzenie wysłania formularza
// Znajdujemy formularz po jego ID
const formularzGry = document.getElementById('graForm');

// Dodajemy "event listener" na zdarzenie "submit"
// Uruchomi funkcję przeliczWyniki() tuż PRZED wysłaniem formularza do Formspree
if (formularzGry) {
    formularzGry.addEventListener('submit', przeliczWyniki);
}