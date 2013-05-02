# mootools-ScrollObserver #

The Scroll observer helps you to create interactions if you reached a position on a page. For example, you like to show some content when the user has scolled down for 600 pixels.

## Example with int value##

```javascript
<script src="files/jsupmycontao/js/ScrollObserver.js"></script>
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
<script src="files/jsupmycontao/js/ScrollObserver.js"></script>
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
