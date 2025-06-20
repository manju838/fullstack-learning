## Understanding-CUDA

Compute Unified Device Architecture(CUDA) is a parallel computing platform and application programming interface (API) that allows software to use graphics processing units (GPUs) for general-purpose processing.
Its developed by Nvidia based on the paper "[Brook for GPUs: Stream Computing on Graphics Hardware](https://graphics.stanford.edu/papers/brookgpu/brookgpu.pdf)".

- This API allows processing large blocks of data in parallel and found its main focus in neural networks and deep learning.
- If we play a game at 1080p at 60fps then we compute 1080*1920*60= 124.416 million floating point operations to render the screen.
- These are handled efficiently by modern GPUs which are measured in terraflops(trillions of floating point operations per second). CPUs like intel i9 has cores while RTX 4090 has 16384 cores.

To use CUDA

- have a Nvidia GPU
- Install Nvidia Display Driver (the basic driver to recognise gpu on windows, not related to programming, the most basic driver for graphics on OS )
- Visual Studio C++ (CUDA is completely written in C++ so it needs compilers and sorts)
- Install CUDA Toolkit
- Install cuDNN

* The maximum Nvidia Display Driver version supported by an nvidia GPU is displayed in `nvidia-smi`. For an RTX 4090 manufactured in early 2024, it is CUDA 12.4
* To install CUDA Toolkit in your base environment
