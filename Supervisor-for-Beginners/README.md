

Supervisor is a python library that manages python web server processes, ensuring they are running in background and restarting them if they fail. So it can automate processes. It daemonizes (daemon process is a process that runs in the background) a process that runs indefinitely like a website so it can't be used on tasks that end after a certain time.

The command to start a particular process and various options are given via a .conf file.
Supervisor looks for files ending with .conf in certain directories. It then follows the instructions that you’ve given in those files.

### Supervisor can only manage and monitor never ending processes.


https://www.youtube.com/watch?v=KPCSh79GCCE <==> supervisor tutorial

https://csjourney.com/managing-processes-with-supervisor-in-depth-tutorial/
