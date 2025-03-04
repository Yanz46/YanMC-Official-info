document.getElementById('gift-button').addEventListener('click', function() {
    window.location.href = 'https://www.contoh-hadiah.com'; // Ganti dengan link hadiah Anda
});

document.getElementById('set-alarm-button').addEventListener('click', function() {
    const alarmTime = document.getElementById('alarm-time').value;
    if (alarmTime) {
        const now = new Date();
        const alarm = new Date();
        const [hours, minutes] = alarmTime.split(':');
        alarm.setHours(hours);
        alarm.setMinutes(minutes);
        alarm.setSeconds(0);

        if (alarm > now) {
            const timeUntilAlarm = alarm - now;
            const preAlarmTime = timeUntilAlarm - 60000; // Hadiah muncul 1 menit sebelum alarm
            if (preAlarmTime > 0) {
                setTimeout(() => {
                    document.getElementById('pre-alarm-gift').style.display = 'block';
                }, preAlarmTime);
            }
            setTimeout(() => {
                alert('Waktunya Sahur!');
                document.getElementById('sahur-audio').play(); // Putar audio sahur
            }, timeUntilAlarm);
            document.getElementById('alarm-message').textContent = `Alarm disetel untuk ${alarmTime}`;
        } else {
            document.getElementById('alarm-message').textContent = 'Waktu alarm harus setelah waktu saat ini.';
        }
    } else {
        document.getElementById('alarm-message').textContent = 'Silakan pilih waktu alarm.';
    }
});
