# EVENT DELEGATION

Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.

In the handler we get event.target to see where the event actually happened and handle it.

> Event delegation wont work on events like focus and blur.

## EVENT

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

Every HTML element in DOM and the window itself are derived from a class called Event and which allow program to attach events to these elements and listen to those events.

Browser itself while creating these elements attaches multiple events to these elements (these events are element specific) and expose certain methods for JS to register event handlers (functions to perform at these events) for these events.

## EVENT PROPAGATION AND ITS PHASES

When an event happens – the most nested element (or say the element where actually the event occurred) where it happens gets labeled as the “target element” (event.target).

### CAPTURING PHASE

After that Capturing Phase starts where the event moves down from the document root to event.target, checks on every node if any event handler is attached for capturing phase of the same type, if yes executes it.

### TARGET PHASE

Then handlers are called on the target element itself, this is called Target Phase.

### BUBBLING PHASE

After that comes the Bubbling Phase (default phase assigned to an event handler), checks on every node if any event handler is attached for Bubbling Phase of the same type, if yes executes it.

> On a node/element you can have one phase only, you can't attach event handler to be executed in both the phases of event propagation.

### IMPORTANT POINTS

Each handler can access event object properties:

event.target – the deepest element that originated the event.

event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)

event.eventPhase – the current phase (capturing=1, target=2, bubbling=3).

Any event handler can stop the event by calling event.stopPropagation(), but that’s not recommended, because we can’t really be sure we won’t need it above, maybe for completely different things.
