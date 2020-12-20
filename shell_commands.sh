#!/bin/bash
pwd

User@DESKTOP-IIIAC60 MINGW64 ~
$ ls -a
  ../
 .bash_history
 .conda/
 .condarc
 .gitconfig
 .ipynb_checkpoints/
 .ipython/
 .jupyter/
 .node_repl_history
 .viminfo
 .vscode/
'3D Objects'/
 AppData/
'Application Data'@
 Belgelerim@
 Contacts/
 Cookies@
 Desktop/
 Documents/
 Downloads/
 Dropbox/
 Favorites/
 IntelGraphicsProfiles/
 Links/
'Local Settings'@
 LİNUX/
 MicrosoftEdgeBackups/
 Music/
 NTUSER.DAT
 
 NetHood@
 OneDrive/
 Pictures/
 PrintHood@
 Recent@
'Saved Games'/
 Searches/
 SendTo@
'Start Menu'@
 Templates@
 Videos/
 anaconda3/
 asd.csv
 ntuser.dat.LOG1
 ntuser.dat.LOG2
 ntuser.ini
 yoresel-yemekler/
'Τα έγγραφά μου'@

User@DESKTOP-IIIAC60 MINGW64 ~
$ mkdir eren

User@DESKTOP-IIIAC60 MINGW64 ~
$ touch eren.txt

User@DESKTOP-IIIAC60 MINGW64 ~
$ cp eren.txt eren

User@DESKTOP-IIIAC60 MINGW64 ~
$ cd eren

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ ls
eren.txt

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ .. cd
bash: ..: command not found

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ cd ..

User@DESKTOP-IIIAC60 MINGW64 ~
$ rmdir eren.txt
rmdir: failed to remove 'eren.txt': Not a directory

User@DESKTOP-IIIAC60 MINGW64 ~
$ rm -r eren.txt

User@DESKTOP-IIIAC60 MINGW64 ~
$ cd eren

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ ls
eren.txt

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ echo "Birinci dosya temel shell komutları" >> eren.txt

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ cat eren.txt
Birinci dosya temel shell komutları

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ grep shell eren.txt
Birinci dosya temel shell komutları

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ touch eren2.txt

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ echo "ikinci dosya disk islemleri" >> eren2.txt

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ cat eren.txt eren2.txt >> eren3.txt

User@DESKTOP-IIIAC60 MINGW64 ~/eren
$ cd ..

User@DESKTOP-IIIAC60 MINGW64 ~
$ rm -r eren

User@DESKTOP-IIIAC60 MINGW64 ~
$ pwd
/c/Users/User
