

## Tasks

1. Make the multiRequestComponent make 3 consecutive requests, 100ms apart.

     - I created a private function setIntervalX inside a miltiRequest component that receives 3 parameters(callback,delay,repetitions)        

2. Each request should have an HTTP header `X-Request-Type` with value 'A', 'B', and 'C', in order.
   
   - For each repetition, it's defined an header request that read the relative values from a dictionary:dictionaryRequest = ['A','B','C'];

3. The API makes requests of type A wait a bit to simulate some computation.

   - code was already implemented
           
4. Modify the backend to guarantee that request A gets counter 1 in spite of the delay; B gets 2 and C gets 3. Keep it simple.

   - code was already implemented

5. Show a spinner ("loading indicator") in the frontend while the 3 requests are pending. When all are complete, show the results.
Think _promises/observables_, not a counter like `pending--` ;)

   - I used promises

6. Show 3 boxes with the value obtained by request A, B and C in order.
It should be 1-2-3 on the first execution, 4-5-6 on the second, etc.

   - for async reason I had to order the result received inside the sortValues() function.

7. Add a refresh button so you can trigger the 3 requests again instead of reloading the page.

   - done

8. Add a milliseconds timer that increases while the spinner is showing (maybe 3-5ms step?),
and stays fixed after that to show how long it took to get the 3 results.

    -  added a new component : TimerComponent

9. Make the component a little nice showing off your mad CSS skills =)

    - I used sass with BEM