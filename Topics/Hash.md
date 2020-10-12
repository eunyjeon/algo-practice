# Hash tables

## Collision resoution in hash tables

### Open addressing / Closed Hashing
  - A method of collision resolution in has tables.
  - Collisiton is sresolved by **probing**, or searching throug alternate locations in the array (the probe sequence) until either the target record is found, or an unused arraysolot is found, which indicates that t here is no such key in the table.
  - Well-known probe sequences include:
    - Linear probing : the interval between probes is fixed — often set to 1.
    - Quadratic probing : the interval between probes increases quadratically (hence, the indices are described by a quadratic function).
    - Double hasing : the interval between probes is fixed for each record but is computed by another hash function.


