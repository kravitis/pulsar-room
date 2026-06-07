const fs = require('fs');
const path = require('path');

try {
    const songsFolder = path.join(process.cwd(), 'songs');
    const outputFile = path.join(process.cwd(), 'playlist.json');
    
    // Λίστα υποστηριζόμενων τύπων
    const audioExtensions = ['.mp3', '.wav', '.ogg', '.m4a', '.flac', '.aac'];

    const files = fs.readdirSync(songsFolder);
    
    // Φιλτράρισμα βάσει λίστας
    const audioFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return audioExtensions.includes(ext);
    });

    // Γράφουμε το αρχείο
    fs.writeFileSync(outputFile, JSON.stringify(audioFiles, null, 2));
    console.log(`✅ Επιτυχία! Βρέθηκαν ${audioFiles.length} κομμάτια.`);
} catch (err) {
    console.error("Σφάλμα:", err);
    const outputFile = path.join(process.cwd(), 'playlist.json');
    fs.writeFileSync(outputFile, JSON.stringify([]));
}