# Simple Timer

### Install via bower
```
bower install fenric-js-timer
```

### Using after install via bower
```
<script src="bower_components/fenric-js-timer/src/timer.js"></script>
```

### Example
```
// Call a callback after one minute
let timer = new $timer(60000, function()
{
	// some code...
});

// To pause the timer
timer.pause();

// To continue the timer
timer.continue();

// To break the timer
timer.break();
```
