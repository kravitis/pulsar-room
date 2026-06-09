@echo off
chcp 65001 > nul
echo 🚀 Ξεκινάει ο αυτόματος συγχρονισμός μουσικής με το GitHub...
echo.

:: 1. Προσθήκη όλων των νέων αρχείων ήχου
echo 📦 1. Προετοιμασία αρχείων...
git add .

:: 2. Δημιουργία Commit με αυτόματη ημερομηνία και ώρα
echo 🔒 2. Κλείδωμα αλλαγών...
git commit -m "Αυτόματη ενημέρωση λίστας: %date% %time%"

:: 3. Ανέβασμα στο GitHub
echo ⚡ 3. Ανέβασμα στο GitHub (Push)...
git push origin main

echo.
echo ✅ Ο συγχρονισμός ολοκληρώθηκε επιτυχώς!
echo 🌐 Το Netlify θα ανανεώσει το Pulsar Room σε λίγα δευτερόλεπτα.
echo.
pause