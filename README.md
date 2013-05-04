# mootools-ScrollObserver #

The Scroll observer helps you to create interactions if you reached a position on a page. For example, you like to show some content when the user has scolled down for 600 pixels.

## Options ##

direction - Set the direction of Scroll bar. Accepts 'x' and 'y'. Default to 'y'.
offset - Set an offest. Default to 0. Must be an integer! It`s posible to set negative values.

## Options ##

### positionEnter ###

(function) Function to execute when position is entered.

onPositionEnter(instance)
Arguments

instance - (object) the class instance

### positionLeave ###

(function) Function to execute when position is entered.

onPositionEnter(instance)
Arguments

instance - (object) the class instance

## Example with int value##

```javascript
<script src="ScrollObserver.js"></script>
<script>
    window.addEvent('domready', function() {
        new ScrollObserver(this, 500, {

            onPositionEnter: function() {
              // fired after 500 scrolled pixels
            },

            onPositionLeave: function() {
              // fired before 500 pixels are reached
            }
        });
    });
</script>
```

## Example with element##

```javascript
<script src="ScrollObserver.js"></script>
<script>
    window.addEvent('domready', function() {
        new ScrollObserver(this, $('nav-main'), {

            onPositionEnter: function() {
              // fired when element with id main is reached
            },

            onPositionLeave: function() {
              // fired before element with id main is reached
            }
        });
    });
</script>
```
