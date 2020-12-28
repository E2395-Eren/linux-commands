#!/bin/bash

eren1234@ubuntu:~$ pwd
/home/eren1234
eren1234@ubuntu:~$ sudo su
[sudo] eren1234 için parola: 
root@ubuntu:/home/eren1234# sudo apt-get update
root@ubuntu:/home/eren1234# sudo apt upgrade
root@ubuntu:/home/eren1234# sudo snap install --classic code
root@ubuntu:/home/eren1234# sudo apt install software-properties-common apt-transport-https wget
root@ubuntu:/home/eren1234# wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
OK
root@ubuntu:/home/eren1234# wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add
OK
root@ubuntu:/home/eren1234# sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
root@ubuntu:/home/eren1234# sudo apt install code
root@ubuntu:/home/eren1234# cd eren
root@ubuntu:/home/eren1234# mkdir eren
root@ubuntu:/home/eren1234# cd eren
root@ubuntu:/home/eren1234/eren# touch eren.docx
root@ubuntu:/home/eren1234/eren# echo "eren burdaydi" >> eren.docx
root@ubuntu:/home/eren1234/eren# cat eren.docx
eren burdaydi
root@ubuntu:/home/eren1234/eren# sudo adduser[eren2]
sudo: adduser[eren2]: komut bulunamadı
root@ubuntu:/home/eren1234/eren# cd ..
root@ubuntu:/home/eren1234# sudo adduser eren2
"eren2" kullanıcısı ekleniyor ...
root@ubuntu:/home/eren1234# sudo addgroup hicod
"hicod" grubu ekleniyor (GID 1002) ...
Tamamlandı.
root@ubuntu:/home/eren1234# sudo apt install vim
Paket listeleri okunuyor... Bitti
Bağımlılık ağacı oluşturuluyor       
Durum bilgisi okunuyor... Bitti      
root@ubuntu:/home/eren1234# vim eren.log
root@ubuntu:/home/eren1234# vim index.html
root@ubuntu:/home/eren1234# nano<app.js>
bash: beklenmeyen dizgecik 'newline' yakınında sözdizimi hatası
root@ubuntu:/home/eren1234# nano /path/to/app.js
root@ubuntu:/home/eren1234# change file owner -> eren2

'change' Komutu bulunamadı. Şunu mu demek istiyorsunuz:

  komut 'chage' deb passwd (1:4.8.1-1ubuntu5.20.04) paketinden
  komut 'charge' deb emboss (6.6.0+dfsg-7ubuntu2) paketinden

Dene: apt install <deb adı>

root@ubuntu:/home/eren1234# chage file owner -> eren2
Usage: chage [options] LOGIN
oot@ubuntu:/home/eren1234# chmod 777 index.html
root@ubuntu:/home/eren1234# ls -l
toplam 70796
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Desktop
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Documents
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Downloads
drwxr-xr-x 2 root     root         4096 Dec 28 09:04 eren
-rw-r--r-- 1 root     root            0 Dec 28 09:42 eren2
-rw-r--r-- 1 root     root           16 Dec 28 09:26 eren.log
-rw-r--r-- 1 root     root     72446160 Dec  1 18:16 google-chrome-stable_current_amd64.deb
-rwxrwxrwx 1 root     root           15 Dec 28 09:27 index.html
drwxr-xr-x 3 eren1234 eren1234     4096 Dec 28 05:28 Music
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Pictures
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Public
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Templates
drwxr-xr-x 2 eren1234 eren1234     4096 Dec 27 15:47 Videos
root@ubuntu:/home/eren1234# alias clr=clear
root@ubuntu:/home/eren1234# date
Mon 28 Dec 2020 09:45:39 AM PST
root@ubuntu:/home/eren1234# df
root@ubuntu:/home/eren1234# history
    1  sudo apt-get update
    2  sudo apt-get upgrade
    3  sudo apt-get update
    4  sudo apt upgrade
    5  sudo snap install --classic code
    6  sudo apt install software-properties-common apt-transport-https wget
    7  wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add –
root@ubuntu:/home/eren1234# ps
root@ubuntu:/home/eren1234# kill -9 5854
bash: kill: (5854) - Böyle bir süreç yok
root@ubuntu:/home/eren1234# kill -g 5854
bash: kill: g: sinyal belirtimi geçersiz
root@ubuntu:/home/eren1234# tar –czvf
root@ubuntu:/home/eren1234# eren.tar.gz ./eren/
eren.tar.gz: komut bulunamadı
root@ubuntu:/home/eren1234# ^C
root@ubuntu:/home/eren1234# tar -czvf eren.tar.gz ./eren/
./eren/
./eren/eren.docx
root@ubuntu:/home/eren1234# top
