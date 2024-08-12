# Linux File System Structure Basics:

This tutorial is compiled based on <www.youtube.com/watch?v=HbgzrKJvDRw>. It describes the file structure of Linux systems.

* Filesystem Hierarchy Standard (FHS):
It is a set of guidelines and standards that define the structure and organization of files and directories in a Unix-based operating system.
<www.studytonight.com/linux-guide/linux-file-system-hierarchyfhs> gives some key info to get started.

The below are some important components in the FHS:

* ```/bin``` : Stands for binaries(i.e programs and applications). Even basic bash commands like ```ls```, ```cat```, ```sudo```, ```mkdir``` etc. are stored here in binary format(can't be read using editor, converted into machine language).
* ```/sbin``` : Stands for system binaries that a system administrator would use and are usually inaccessable if you are using a university's student server.
* ```/boot``` : Contains bootloaders that OS accesses to boot your PC and should not be messed with.
* ```/cdrom``` : Not needed and is a legacy mounting point to CDROM (CDs used in early 2000s).
* ```/dev``` : Contains device files (also sometimes known as device special files and device nodes) that provide access to peripheral devices such as hard disks, to resources on peripheral devices such as disk partitions, and pseudo devices such as a random number generator.(<docs.oracle.com/en/operating-systems/oracle-linux/6/admin/ol_about_devices.html#:~:text=The%20%2Fdev%20directory%20contains%20device,as%20a%20random%20number%20generator.>)
* ```etc/``` : This is where all the configurations are stored.(some call it "edit to configure" to memorise)