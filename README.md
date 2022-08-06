| Code         | Name              |  Price |
| --- | --- | --- |
|PEN          | Kalyptio Pen          |   $5.00 |
|TSHIRT       | Kalyptio T-Shirt      |  $20.00 |
| MUG          | Kalyptio Coffee Mug   |   $7.50 |

---

Numerous departments have insisted on the following discounts:
The sales department thinks a **buy 2 get 1 free** promotion will work best (buy two of the same product, get one free), and would like this to only apply toÂ **PEN**Â items.
The Chief Finantial Officer insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and requests that if you **buy 3 or moreÂ TSHIRT**Â items, the price per unit should be **reduced by 25%**.
Your job is to *implement a simple checkout server and client that communicate over the network*.

---

Weâ€™d expect the server to expose the following independent operations:

1. Create a new checkout basket

2. Add a product to a basket

3. Get the total amount in a basket

4. Remove the basket

The server must support concurrent invocations of those operations: any of them may be invoked at any time, while other operations are still being performed, even for the same basket.
At this stage, the service shouldnâ€™t use any external databases of any kind, but it should be possible to add one easily in the future.
Implement a checkout service and its client that fulfills these requirements.

### Examples:
```
Items: PEN, TSHIRT, MUG
Total: $32.50

Items: PEN, TSHIRT, PEN
Total: $25.00

Items: TSHIRT, TSHIRT, TSHIRT, PEN, TSHIRT
Total: $65.00

Items: PEN, TSHIRT, PEN, PEN, MUG, TSHIRT, TSHIRT
Total: $62.50
```